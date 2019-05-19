import express from "express";
import PostsController from "./controllers/PostsController";
const routes = express.Router();

routes.get("/posts", PostsController.index);
routes.get("/posts/:id", PostsController.show);
routes.post("/posts", PostsController.store);

module.exports = routes;
