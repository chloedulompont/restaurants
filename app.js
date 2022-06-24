const express = require('express');
const morgan = require("morgan");
const router = require("./routes");
const bodyParser = require('body-parser');

const app = express();

//To process form data
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.json())
app.set("view engine", "ejs");

// App middlewares
app.use(morgan("dev"));
app.use("/static", express.static("./static"));

// App routes
app.use("/", router);

module.exports = app;