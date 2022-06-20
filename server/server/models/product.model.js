const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
    min: [0, "Price must be at leat 0"]
  },
  description: {
    type: String
  }
});

module.exports = mongoose.model("Product", ProductSchema);
