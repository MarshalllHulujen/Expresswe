const express = require("express");

const {
  commentGetController,
  commentPostController,
  commentDeleteController,
  commentGetIdController,
  addCommentController,
} = require("../Controller/CommentController");

const CommentRouter = express.Router();

CommentRouter.get("/comment", commentGetController)
  .post("/comment", commentPostController)
  .delete("/comment/:id", commentDeleteController)
  .get("/comment/:id", commentGetIdController)
  .post("/post/:id", addCommentController);
module.exports = CommentRouter;
