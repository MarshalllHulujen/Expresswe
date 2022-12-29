const express = require("express");
const {
  postPostController,
  postGetController,
  postIdController,
  postDeleteController,
  commentGetController,
  commentPostController,
} = require("../Controller/Postcontroller");

const PostRouter = express.Router();

PostRouter.get("/post", postGetController)
  .get("/post/:id", postIdController)
  .post("/post", postPostController)
  .delete("/post/:id", postDeleteController)
  .get("/post/:id/comment", commentGetController)
  .post("/post/:id/comment", commentPostController);
module.exports = PostRouter;
