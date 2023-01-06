const express = require("express");
const {
  userPostController,
  userGetController,
  userIdController,
  userDeleteController,
  userLogin,
} = require("../controller/userController");

const UserRouter = express.Router();

UserRouter.get("/user", userGetController)
  .get("/user/:id", userIdController)
  .post("/user", userPostController)
  .delete("/user/:id", userDeleteController)
  .get("/userlogin/:email/:password", userLogin);

module.exports = UserRouter;
