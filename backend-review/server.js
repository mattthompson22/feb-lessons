const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/sports", (err) => {
    if (err) throw err;
    console.log("Connected to the database");
});

app.use(morgan("dev"));
app.use(bodyParser.json());

// const Chore = require("./models/chore");

app.use("/products", require("./routes/products"));
app.use("/kids", require("./routes/kids"));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
