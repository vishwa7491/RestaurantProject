const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  createFoodController,
  getAllFoodsController,
  getOneFoodController,
  getFoodByRestaurantController,
  updateFoodController,
  deleteFoodController,
  placeOrderController,
  orderStatusController,
} = require("../controllers/foodController");
const adminMiddleware = require("../middlewares/adminMiddleware");

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

// place order
router.post("/placeOrder", authMiddleware, placeOrderController);

// order status
router.post(
  "/orderStatus/:id",
  authMiddleware,
  adminMiddleware,
  orderStatusController,
);

module.exports = router;
