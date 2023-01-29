const mongoose = require("mongoose");

// const User = new mongoose.Schema({
//   username: { type: String, required: true },
//   password: { type: String, required: true },
//   email: { type: String, required: true },
//   gender: { type: String, required: true },
//   createdAt: { type: Date, default: Date.now() },
// });

const User = new mongoose.Schema({
  password: {
    type: String,
    required: [true, "Lastname is required"],
    maxlength: [20, "Lastname length must be 6 to 50 characters"],
  },
  email: { type: String, required: [true, "Email is requireed"] },
  history: new mongoose.Schema({
    longUrl: String,
    shortUrl: String,
    urlCode: String
  }),
  registerDate: { type: Date, default: Date.now },
});

const UserModel = mongoose.model("User", User);
module.exports = UserModel;
