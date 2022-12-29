const express = require("express");
const {
  userPostController,
  userGetController,
  userIdController,
  userDeleteController,
} = require("../controller/userController");

const UserRouter = express.Router();

UserRouter.get("/user", userGetController)
  .get("/user/:id", userIdController)
  .post("/user", userPostController)
  .delete("/user/:id", userDeleteController);

module.exports = UserRouter;
