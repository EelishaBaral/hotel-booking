const express = require("express");
const {
  register,
  login,
  getMe,
  userPhotoUpload,
  forgotPassword,
  resetPassword,
  updateDetails,
  updatepassword
} = require("../controllers/auth");

const router = express.Router();

const { protect } = require("../middleware/auth");

router.route("/me/:id/photo").put(userPhotoUpload);
router.post("/register", register);
router.post("/login", login);
router.get("/me", protect, getMe);
router.put("/updatepassword", protect, updatepassword);
router.put("/updatedetails", protect, updateDetails);
router.post("/forgotpassword", forgotPassword);
router.put("/resetpassword/:resettoken", resetPassword);

module.exports = router;
