const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const { createFoodController } = require("../controllers/foodController");

const router = express.Router();

// routes
// create food
router.post("/create", authMiddleware, createFoodController);

module.exports = router;
