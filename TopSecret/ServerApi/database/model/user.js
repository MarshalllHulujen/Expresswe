const mongoose = require("mongoose");

// const User = new mongoose.Schema({
//   username: { type: String, required: true },
//   password: { type: String, required: true },
//   email: { type: String, required: true },
//   gender: { type: String, required: true },
//   createdAt: { type: Date, default: Date.now() },
// });

const User = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "Firstname is required"],
    minlength: [8, "Firstname length must be at least 8 characters"],
    maxlength: [20, "Firstname 20aas baga characters"],
  },
  lastname: {
    type: String,
    required: [true, "Lastname is required"],
    maxlength: [20, "Lastname length must be 6 to 50 characters"],
  },
  gender: {
    type: String,
    enum: { values: ["Male", "Female"], message: "{VALUE} is not supported" },
  },
  email: { type: String, required: [true, "Email is requireed"] },
  phone: String,
  picture: String,
  dateOfBirth: Date,
  registerDate: { type: Date, default: Date.now },
});

const UserModel = mongoose.model("User", User);
module.exports = UserModel;
