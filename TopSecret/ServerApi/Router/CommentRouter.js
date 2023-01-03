const express = require("express");

const {
  commentGetController,
  commentPostController,
  commentPostIdController,
  commentDeleteController,
  commentGetIdController,
  commentAddController,
} = require("../Controller/CommentController");

const CommentRouter = express.Router();

CommentRouter.get("/comment", commentGetController)
  .post("/comment", commentPostController)
  .put("/post/:id", commentPostIdController)
  .post("/post/:id", commentAddController)
  .delete("/comment/:id", commentDeleteController)
  .get("/comment/:id", commentGetIdController);
module.exports = CommentRouter;
