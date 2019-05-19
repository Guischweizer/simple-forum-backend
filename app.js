import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import requireDir from "require-dir";

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/forumapi", {
  useNewUrlParser: true
});

requireDir("./src/models");

app.use("/", require("./src/routes"));

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
