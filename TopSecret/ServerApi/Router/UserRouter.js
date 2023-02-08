const express = require("express");
const { TokenCheckerMiddleware } = require("../middleware");

const {
  UserPostController,
  userGetController,
  userIdController,
  userDeleteController,
  userLogin,
  UserDeleteController,
  UserGetIdController,
  UrlGetController,
} = require("../Controller/UserController");

const UserRouter = express.Router();

UserRouter.get("/user", userGetController)
  // .get("/user/:id", TokenCheckerMiddleware, userIdController)
  .post("/login", userLogin)
  .delete("/user", UserDeleteController)
  .post("/user", UserPostController)
  .get("/user/:email", UserGetIdController);
// .get("/:code", UrlGetController);
// .delete("/user/:id", userDeleteController)
// .get("/userlogin/:email/:password", userLogin);

module.exports = UserRouter;
