const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  createFoodController,
  getAllFoodsController,
  getOneFoodController,
  getFoodByRestaurantController,
  updateFoodController,
  deleteFoodController,
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

// update food
router.put("/update/:id", authMiddleware, updateFoodController);

// delete food
router.delete("/delete/:id", authMiddleware, deleteFoodController);

module.exports = router;
