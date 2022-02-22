const express = require("express");
const morgan = require("morgan");
const routes = require("./routes/index");
const cors = require("cors");
// const {logErrors} = require("./middlewares/errorHandler");
const app = express();

const whitelist = [
  "http://localhost:3000",
  "https://admin.ojalafuncione.com",
  "https://ojalafuncione.com",
];
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

app.use(express.urlencoded({extended: true, limit: "50mb"}));
app.use(express.json({limit: "50mb"}));
app.use(morgan("dev"));

app.use("/api", routes);

app.get("/", (req, res, next) => {
  res.send("Hola Funciona app");
});

// Error handler
// app.use(logErrors);
// app.use(errorHandler);

module.exports = app;
