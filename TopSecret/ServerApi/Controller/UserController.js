const User = require("../database/model/user");
const mongoose = require("mongoose");
const { TokenGenerator } = require("../helper/helper");
var validUrl = require("valid-url");
var shortid = require("shortid");

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

exports.UserDeleteController = async (req, res) => {
  const result = await User.deleteMany();
  res.status(200).send({ data: result });
};

exports.UserPostController = async (req, res) => {
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
    res.send({ token: token, _id: result._id });
  } catch (err) {
    res.send(err.message);
  }
};

exports.UserGetIdController = async (req, res) => {
  const { email } = req.params;
  const result = await User.findOne({ email: email });
  res.send({ data: result });
};

// exports.UrlGetController = async (req, res) => {
//   try {
//     const shortUrl = await new User.find()
//     const url = await User.findOne({ urlCode: urlCode });

//     if (url) {
//       return res.redirect(url.history.longUrl);
//     } else {
//       const result = await User.find();
//       res.send({ data: result });
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(500).json(err.message);
//   }
// };

//userlogin -> useremail, password => findone useremail, password ===> user found | user not found => front -> home | email and password isn
