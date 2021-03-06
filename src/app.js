require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const routes = require("./routes/index");
const cors = require("cors");

const { logErrors, errorHandler } = require("./middlewares/errorHandler");

const app = express();

app.name = "API";

const whitelist = ["http://localhost:3000"];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("no permitido"));
    }
  },
};

app.use(cors(options));

app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));
app.use(morgan("dev"));
app.use("/api", routes);




// // Error handler*/
app.use(logErrors);
app.use(errorHandler);

module.exports = app;
