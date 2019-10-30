require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const router = require("./src/Routes/index");

// parse application/json
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use("/api", router);

//Server listening
app.listen(8000, () => {
  console.log("Server started on port 8000...");
});

module.exports = app;
