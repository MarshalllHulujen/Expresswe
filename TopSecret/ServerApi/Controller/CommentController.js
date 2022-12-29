const Comment = require("../database/model/comments");
const User = require("../database/model/user");
const Post = require("../database/model/post");

const mongoose = require("mongoose");
const UserRouter = require("../Router/UserRouter");

exports.commentPostController = async (req, res) => {
  try {
    const { userby, comment } = req.body;
    const result = await new Comment({
      userby: await User.findOne({ username: userby }),
      comment: comment,
    }).save();
    const dost = { $push: { data: result } };
    console.log(result);
    res.send(dost);
  } catch (err) {
    res.send(err.message);
  }
};

exports.commentGetController = async (req, res) => {
  const result = await Comment.find();
  res.send({ data: result });
};

exports.commentDeleteController = async (req, res) => {
  const { id } = req.params;
  const delId = new mongoose.Types.ObjectId(id);
  const result = await Comment.deleteOne({ _id: delId });
  res.send({ data: result });
};

exports.commentGetIdController = async (req, res) => {
  const { id } = req.params;
  const objId = new mongoose.Types.ObjectId(id);
  const result = await Comment.findById({ _id: objId });
  res.send({ data: result });
};

exports.addCommentController = async (req, res) => {
  const { id } = req.params;
  const obiD = new mongoose.Types.ObjectId(id);
  const find = await Post.findById({ _id: obiD });
  const { comment } = req.body;
  try {
    const result = await Post.findByIdAndUpdate(find, {
      comment: comment,
    });
    console.log(result);
    res.send(result);
  } catch (err) {
    res.send(err.message);
  }
};
