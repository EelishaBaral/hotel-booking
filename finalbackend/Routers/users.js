const express = require("express");
const {
  getUser,
  getUsers,
  updateUser,
  deleteUser,
  createUser
} = require("../controllers/user");

const User = require("../modals/User");
const router = express.Router();
const { protect, authorize } = require("../middleware/auth");

router
  .route("/")
  .get(getUsers)
  .post(protect, authorize("admin"), createUser);

router
  .route("/:id")
  .get(getUser)
  .put(protect, authorize("admin"), updateUser)
  .delete(protect, authorize("admin"), deleteUser);

module.exports = router;
