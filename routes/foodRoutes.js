const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  createFoodController,
  getAllFoodsController,
  getOneFoodController,
  getFoodByRestaurantController,
} = require("../controllers/foodController");

const router = express.Router();

// routes
// create food
router.post("/create", authMiddleware, createFoodController);

// get all foods
router.get("/getAll", getAllFoodsController);

// get single food
router.get("/get/:id", getOneFoodController);

// get food by restaurant
router.get("/getByRestaurant/:id", getFoodByRestaurantController);

module.exports = router;
