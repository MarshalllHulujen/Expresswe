const User = require("../database/model/user");
const mongoose = require("mongoose");

exports.userPostController = async (req, res) => {
  try {
    const { firstname, lastname, gender, email } = req.body;
    const result = await new User({
      firstname: firstname,
      lastname: lastname,
      gender: gender,
      email: email,
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
