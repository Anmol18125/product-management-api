const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
    name: { type: String, required: true, maxlength: 50 },
    price: { type: Number, required: true },
    description: { type: String, required: true, maxlength: 50 },  // Fixed typo here
    categories: { type: String, required: true, maxlength: 50 },
    createdAt: { type: Date, default: Date.now }
});

module.exports = model("Product", ProductSchema);  // <- Export is correct
