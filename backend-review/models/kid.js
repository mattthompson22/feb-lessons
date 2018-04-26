const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const kidsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    chores: [{
        type: Schema.Types.ObjectId,
        ref: "Chore"
    }]
});

module.exports = mongoose.model("Kid", kidsSchema);