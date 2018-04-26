const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    image: String,
    description: String
});

module.exports = mongoose.model("Product", productsSchema);