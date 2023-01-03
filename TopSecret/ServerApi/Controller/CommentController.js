const Comment = require("../database/model/comments");
const User = require("../database/model/user");
const Post = require("../database/model/post");

const mongoose = require("mongoose");
const { db, castObject } = require("../database/model/user");

exports.commentPostController = async (req, res) => {
  try {
    const { userby, comment } = req.body;
    const result = await new Comment({
      userby: await User.findOne({ firstname: userby }),
      comment: comment,
    }).save();
    const dost = { data: result };
    console.log(result);
    res.send(dost);
  } catch (err) {
    res.send(err.message);
  }
};

exports.commentPostIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const { userby, comment } = req.body;
    const result = await Post.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          comment: {
            userby: userby,
            comment: comment,
          },
        },
      }
    );
    res.send(result);
  } catch (err) {
    res.send(err.message);
  }
};

exports.commentAddController = async (req, res) => {
  try {
    const { userby, comment } = req.body;
    const result = await Post({
      userby: userby,
      comment: comment,
    });
    res.send(result);
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
