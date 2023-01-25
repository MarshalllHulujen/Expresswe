const User = require("../database/model/user");
const mongoose = require("mongoose");
const { TokenGenerator } = require("../helper/helper");
// const { findOne } = require("../database/model/user");

// exports.userLogin = async (req, res) => {
//   const { password, email } = req.body;
//   const user = await User.findOne({ email: email });
//   if (!user) res.send(" You don't have any user account, please sign up ");

//   if (user.password === password && user.email === email) {
//     const token = await TokenGenerator({ uid: user._id, expires: 1200 });
//     res.send({ token: token });
//     return;
//   } else {
//     res.send("Invalid password or email");
//     return;
//   }
// };

exports.userPostController = async (req, res) => {
  try {
    const { password, email } = req.body;
    const result = await new User({
      email: email,
      password: password,
    }).save();
    const Post = { post: result };
    console.log(result);
    res.send(Post);
  } catch (err) {
    res.send(err.message);
  }
};

exports.userGetController = async (req, res) => {
  const result = await User.find();
  res.send({ data: result });
};

exports.userIdController = async (req, res) => {
  const { id } = req.params;
  const objId = new mongoose.Types.ObjectId(id);
  const result = await User.findById({ _id: objId });
  res.send({ data: result });
};

exports.userDeleteController = async (req, res) => {
  const { id } = req.params;
  const delId = new mongoose.Types.ObjectId(id);
  const result = await User.deleteOne({ _id: delId });
  res.send({ data: result });
};

exports.userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await User.findOne({ email: email, password: password });
    const token = await TokenGenerator({ uid: result._id, expires: "1d" });
    res.send({ token: token });
  } catch (err) {
    res.send(err.message);
  }
};

//userlogin -> useremail, password => findone useremail, password ===> user found | user not found => front -> home | email and password isn
