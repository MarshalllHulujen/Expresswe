const express = require("express")
const { userGetController, userPostController, userDeleteController, userPutController, usersDeleteController } = require("../controller/userController")

const UserRouter = express.Router()

UserRouter
    .get("/user", userGetController )
    .post("/user", userPostController )
    .delete("/user/:id", userDeleteController )
    .delete("/users", usersDeleteController)
    .put("/user/:id", userPutController )

module.exports = UserRouter