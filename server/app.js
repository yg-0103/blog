const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const postRouter = require("./router/post");

dotenv.config();

const app = express();

const { PORT, MONGO_URI } = process.env;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Success"))
  .catch((e) => console.error(e));

app.use("/post", postRouter);

app.listen(PORT, () => console.log("port =>", PORT));
