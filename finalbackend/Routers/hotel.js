const express = require("express");
const {
  getAllHotels,
  getHotel,
  createHotel,
  updateHotel,
  deleteHotel,
  hotelPhotoUpload
} = require("../controllers/hotel");

const router = express.Router();
const { protect, authorize } = require("../middleware/auth");

router.route("/:id/photo").put(hotelPhotoUpload);

router
  .route("/")
  .get(getAllHotels)
  .post(protect, authorize("admin"), createHotel);

router
  .route("/:id")
  .get(getHotel)
  .put(protect, authorize("admin"), updateHotel)
  .delete(protect, authorize("admin"), deleteHotel);

module.exports = router;
