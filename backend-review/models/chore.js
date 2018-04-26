const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const choresSchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Chore", choresSchema);