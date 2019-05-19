import express from "express";
import db from "./db/db";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const corsOption = {
  origin: "https://localhost:3000"
};

app.options("*", cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/api/v1/posts", cors(), (req, res) => {
  res.status(200).send({
    success: "true",
    message: "Posts retrieved successfully",
    posts: db
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

app.post("/api/v1/posts", cors(corsOption), (req, res) => {
  if (!req.body.content) {
    return res.status(400).send({
      success: "false",
      message: "Content is required"
    });
  } else if (!req.body.author) {
    return res.status(400).send({
      success: "false",
      message: "Author is required"
    });
  }
  const post = {
    id: db.length + 1,
    content: req.body.content,
    author: req.body.author
  };
  db.push(post);
  return res.status(201).send({
    success: "true",
    message: "Post created successfully",
    post
  });
});
