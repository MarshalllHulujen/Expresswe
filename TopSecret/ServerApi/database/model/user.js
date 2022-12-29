const mongoose = require("mongoose");

const User = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  gender: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
});

const UserModel = mongoose.model("User", User);
module.exports = UserModel;
