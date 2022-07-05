const express = require("express");
const morgan = require("morgan");
const router = require("./routes/store");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use("/store", router);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requeseted-With, Content-Type, Accept"
  );
  next();
});
app.get("/", async (req, res, next) => {
  res.status(200).json({ ping: "pong" });
});

module.exports = app;
