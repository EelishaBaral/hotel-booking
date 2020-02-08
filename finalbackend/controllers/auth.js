const User = require("../modals/User");
const errorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const sendEmail = require("../utils/sendEmail");
const path = require("path");
const crypto = require("crypto");
// @desc Register user
// @route post /api/v1/auth/register
// @access Public

exports.register = asyncHandler(async (req, res, next) => {
  const { name, email, password, role } = req.body;
  // Create user
  const user = await User.create({
    name,
    email,
    password,
    role
  });

  //   Create token
  sendTokenResponse(user, 200, res);
});

// @desc login user
// @route post /api/v1/auth/login
// @access Public

exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  // validate emailand password
  if (!email || !password) {
    return next(new errorResponse("Please provide an email and password", 400));
  }
  // check for user
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new errorResponse("Invalid credentials", 401));
  }

  // Check if password matches
  const isMatch = await user.matchPassword(password);
  if (!isMatch) {
    return next(new errorResponse("Invalid credentials", 401));
  }

  //   Create token
  sendTokenResponse(user, 200, res);
});

// get token from modal, create cookie and send response
const sendTokenResponse = (user, statusCode, res) => {
  // create token
  const token = user.getSignedJwtToken();

  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true
  };
  res
    .status(statusCode)
    .cookie("token", token, options)
    .json({ success: true, token });
};

// @desc get current login in user
// @route post /api/v1/auth/me
// @access Private

exports.getMe = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id);
  res.status(200).json({
    success: true,
    result: user
  });
});

// @desc photo upload
// @route put /api/v1/auth/me/:id/photo
// @access Private

exports.userPhotoUpload = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return next(new errorResponse(`User is not found by ID ${req.params.id}`));
  }
  if (!req.files) {
    return next(new errorResponse(`Please upload a file`, 404));
  }
  console.log(req.files);
  let file = req.files.file;
  //make sure the upload file is image
  if (!file.mimetype.startsWith("image")) {
    return next(new errorResponse(`Please upload an image  file`, 400));
  }
  // check file size
  if (file.size > process.env.MAX_FILE_UPLOAD) {
    return next(
      new errorResponse(
        `Please upload an image less than ${process.env.MAX_FILE_UPLOAD}`,
        400
      )
    );
  }
  file.name = `user_${user._id}${path.parse(file.name).ext}`;
  console.log(file.name);

  file.mv(`${process.env.FILE_UPLOAD_PATH}/${file.name}`, async err => {
    if (err) {
      console.error(err);
      return next(new errorResponse("Problem with file upload", 500));
    }
    await User.findByIdAndUpdate(req.params.id, { photo: file.name });
    res.status(200).json({ success: true, result: file.name });
  });
});

// @desc Forget password
// @route post /api/v1/auth/forgotpassword
// @access Public

exports.forgotPassword = asyncHandler(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(new errorResponse("There is no user with that email", 404));
  }
  // get resetToken
  const resetToken = user.getResetPasswordToken();
  await user.save({ validateBeforeSave: false });

  // create reset url
  const resetUrl = `${req.protocol}://${req.get(
    "host"
  )}/api/v1/auth/resetpassword/${resetToken}`;
  const message = `you are receiving this email because you (or someone else) has  requested the reset of your password. Please make a put request to: \n\n ${resetUrl}`;
  try {
    await sendEmail({
      email: user.email,
      subject: `password reset token`,
      message
    });
    res.status(200).json({ success: true, data: "Email sent" });
  } catch (error) {
    console.log(error);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save({ validateBeforeSave: false });
    return next(new errorResponse("Email could not be sent", 500));
  }
  res.status(200).json({
    success: true,
    result: user
  });
});

// @desc reset password
// @route put /api/v1/auth/resetpassword/:resettoken
// @access Public

exports.resetPassword = asyncHandler(async (req, res, next) => {
  // get  hased token
  const resetPassword = crypto
    .createHash("sha256")
    .update(req.params.resettoken)
    .digest("hex");
  const users = await User.findOne({
    getResetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() }
  });

  if (!users) {
    return next(new errorResponse("Invalid Token", 400));
  }
  // set new password
  users.password = req.body.password;
  users.resetPasswordToken = undefined;
  users.resetPasswordExpire = undefined;
  await users.save();

  sendTokenResponse(users, 200, res);
  res.status(200).json({
    success: true,
    result: user
  });
});

// @desc update user details
// @route put /api/v1/auth/updatedetails
// @access Private

exports.updateDetails = asyncHandler(async (req, res, next) => {
  const fieldsToUpdate = {
    name: req.body.name,
    email: req.body.email
  };

  const user = await User.findByIdAndUpdate(req.user.id, this.updateDetails, {
    new: true,
    runValidators: true
  });
  res.status(200).json({
    success: true,
    result: user
  });
});

// @desc update password
// @route put /api/v1/auth/updatepassword
// @access Private

exports.updatepassword = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id).select("+password");
  // check current password
  if (!(await user.matchPassword(req.body.currentPassword))) {
    return next(new errorResponse("Password is incorrect", 401));
  }
  user.password = req.body.newPassword;
  await user.save();
  sendTokenResponse(user, 200, res);
});
