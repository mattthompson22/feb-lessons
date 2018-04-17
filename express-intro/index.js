const express = require("express");
const bodyParser = require("body-parser");

const logger = require("./middleware/logger.js");
const catRouter = require("./routes/cats.js");

const app = express();
const port = 8080;

//middleware
app.use(bodyParser.json());
app.use(logger);

//routes
app.use("/cats", catRouter);

app.listen(port, () => console.log("Server running on port " + port));

