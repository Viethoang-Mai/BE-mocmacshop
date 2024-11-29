const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

const webRouter = require("./routes/web");
const apiRouter = require("./routes/api");
app.use(cookieParser());
app.use(cors({ origin: "https://mocmacshop.vercel.app", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", webRouter);
app.use("/api", apiRouter);
module.exports = app;
