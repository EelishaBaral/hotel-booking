const ErrorResponse = require("../utils/errorResponse");
const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;
  // Log to the console for developer
  console.log(err.stack.red);

  // Module bad ObKectID
  if (err.name === "CastError") {
    const message = `Resource not found with id of ${err.value}`;
    error = new ErrorResponse(message, 404);
  }

  //   Mongose Duplicate key
  if (err.code === 11000) {
    const message = "Duplicate key value entered";
    error = new ErrorResponse(message, 400);
  }
  // Mongose validation error
  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map(val => val.message);
    error = new ErrorResponse(message, 400);
  }
  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || "server error"
  });
};

module.exports = errorHandler;
