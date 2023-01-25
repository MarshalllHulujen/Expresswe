const express = require("express");
const { TokenCheckerMiddleware } = require("../middleware");

const {
  userPostController,
  userGetController,
  userIdController,
  userDeleteController,
  userLogin,
} = require("../controller/userController");

const UserRouter = express.Router();

UserRouter.get("/user", TokenCheckerMiddleware, userGetController)
  // .get("/user/:id", TokenCheckerMiddleware, userIdController)
  .post("/login", userLogin);
// .delete("/user/:id", userDeleteController)
// .get("/userlogin/:email/:password", userLogin);

module.exports = UserRouter;
