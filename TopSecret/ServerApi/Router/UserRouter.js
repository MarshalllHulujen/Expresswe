const express = require("express");
const { TokenCheckerMiddleware } = require("../middleware");

const {
  UserPostController,
  userGetController,
  userIdController,
  userDeleteController,
  userLogin,
  UserDeleteController,
  UserHistoryController,
  UserPostHistoryController,
  UrlGetController
} = require("../controller/userController");

const UserRouter = express.Router();

UserRouter.get("/user", userGetController)
  // .get("/user/:id", TokenCheckerMiddleware, userIdController)
  .post("/login", userLogin)
  .delete("/user", UserDeleteController)
  .post("/user", UserPostController)
  .get("/:email/history", UserHistoryController)
  .post("/:email/history", UserPostHistoryController)
  // .get("/:code", UrlGetController);
// .delete("/user/:id", userDeleteController)
// .get("/userlogin/:email/:password", userLogin);

module.exports = UserRouter;
