const foodModel = require("../models/foodModel");

// create food
const createFoodController = async (req, res) => {
  try {
    const {
      title,
      description,
      price,
      imageUrl,
      foodTags,
      category,
      code,
      isAvailable,
      restaurant,
      rating,
    } = req.body;
    if (!(title && description && price && restaurant)) {
      return res.status(500).send({
        success: false,
        message: "Please provide all fields",
      });
    }
    const newFood = new foodModel({
      title,
      description,
      price,
      imageUrl,
      foodTags,
      category,
      code,
      isAvailable,
      restaurant,
      rating,
    });
    await newFood.save();
    return res.status(200).send({
      success: true,
      message: "New food item created.",
      newFood,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in CREATE FOOD API",
      error,
    });
  }
};

// get all food
const getAllFoodsController = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    if (!foods) {
      return res.status(404).send({
        success: false,
        message: "No foods available",
      });
    }
    res.status(200).send({
      success: true,
      totalFoods: foods.length,
      foods,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in GET ALL FOODS API.",
      error,
    });
  }
};

module.exports = { createFoodController, getAllFoodsController };
