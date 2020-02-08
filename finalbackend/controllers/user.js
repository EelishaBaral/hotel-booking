const User = require("../modals/User");
const errorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const sendEmail = require("../utils/sendEmail");
const path = require("path");

// @desc get all user
// @route get /api/v1/auth/users
// @access Private/Admin

exports.getUsers = asyncHandler(async (req, res, next) => {
  console.log(req.body);
  const user = await User.find(req.query);
  res.status(200).json({
    success: true,
    results: user.length,
    data: user
  });
});

// @desc get single user
// @route get /api/v1/auth/users/:id
// @access Private/Admin

exports.getUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  res.status(200).json({
    success: true,
    data: user
  });
});

// @desc create user
// @route post /api/v1/auth/users
// @access Private/Admin

exports.createUser = asyncHandler(async (req, res, next) => {
  const user = await User.create(req.body);
  res.status(201).json({
    success: true,
    data: user
  });
});

// @desc update user
// @route put /api/v1/auth/users/:id
// @access Private/Admin

exports.updateUser = asyncHandler(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  res.status(200).json({
    success: true,
    data: user
  });
});

// @desc delete user
// @route delete /api/v1/auth/users/:id
// @access Private/Admin

exports.deleteUser = asyncHandler(async (req, res, next) => {
  const user = await User.findByIdAndDelete(req.params.id);
  res.status(200).json({
    success: true,
    data: {}
  });
});
