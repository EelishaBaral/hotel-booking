const HotelSchema = require("../modals/Hotel");
const errorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const path = require("path");

// @desc get  hotel data
// @route get /api/v1/hotels
// @access Public
exports.getAllHotels = asyncHandler(async (req, res, next) => {
  console.log(req.query);
  const hotels = await HotelSchema.find(req.query);
  res.status(200).json({
    success: true,
    results: hotels.length,
    data: hotels
  });
});

// @desc get single hotel data
// @route get /api/v1/hotels/:id
// @access Public
exports.getHotel = asyncHandler(async (req, res, next) => {
  const hotel = await HotelSchema.findById(req.params.id);
  if (!hotel) {
    return next(
      new errorResponse(`Hotel is not found width id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({
    success: true,
    results: hotel.length,
    data: hotel
  });
});

// @desc create hotel data
// @route get /api/v1/hotels
// @access Private

exports.createHotel = asyncHandler(async (req, res, next) => {
  const hotel = await HotelSchema.create(req.body);
  console.log(req.file);
  console.log(req.body);
  res.status(201).json({
    success: true,
    data: hotel
  });
});

// @desc delete hotel data
// @route get /api/v1/hotels/:id
// @access Private
exports.deleteHotel = asyncHandler(async (req, res, next) => {
  const hotel = await HotelSchema.findByIdAndDelete(req.params.id);
  if (!hotel) {
    return next(
      new errorResponse(`Hotel not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: {} });
});

// @desc update hotel data
// @route get /api/v1/hotels/:id
// @access Private
exports.updateHotel = asyncHandler(async (req, res, next) => {
  const hotel = await HotelSchema.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!hotel) {
    return next(
      new errorResponse(`Hotel not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: hotel });
});

// @desc photo upload
// @route get /api/v1/hotels/:id/photo
// @access Private
exports.hotelPhotoUpload = asyncHandler(async (req, res, next) => {
  const hotel = await HotelSchema.findById(req.params.id);
  if (!hotel) {
    return next(
      new errorResponse(`Hotel not found with id of ${req.params.id}`, 404)
    );
  }
  if (!req.files) {
    return next(new errorResponse(`Please upload a file`, 404));
  }

  let file = req.files.file;
  // make sure the image is a photo
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
  // create custom filename
  file.name = `photo_${hotel._id}${path.parse(file.name).ext}`;
  console.log(file.name);

  file.mv(`${process.env.FILE_UPLOAD_PATH}/${file.name}`, async err => {
    if (err) {
      console.error(err);
      return next(new errorResponse("Problem with file upload", 500));
    }
    await HotelSchema.findByIdAndUpdate(req.params.id, { photo: file.name });
    res.status(200).json({ success: true, result: file.name });
  });
});
