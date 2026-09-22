const mongoose = require("mongoose");

// schema
const categorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Category title is required"],
    },
    imageUrl: {
      type: String,
      default: "https://example.com/images/fake-image.jpg",
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Category", categorySchema);
