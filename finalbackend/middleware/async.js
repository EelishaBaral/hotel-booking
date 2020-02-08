const asyncHandler = fu => (req, res, next) =>
  Promise.resolve(fu(req, res, next)).catch(next);

module.exports = asyncHandler;
