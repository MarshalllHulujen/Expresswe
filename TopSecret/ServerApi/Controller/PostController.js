const Post = require("../database/model/post");
const User = require("../database/model/user");

const mongoose = require("mongoose");

exports.postPostController = async (req, res) => {
  try {
    const { post, userby, comment } = req.body;
    const result = await new Post({
      post: post,
      userby: await new User({ username: userby }),
      comment: comment,
    }).save();
    const dost = { $push: { data: result } };
    console.log(result);
    res.send(dost);
  } catch (err) {
    res.send(err.message);
  }
};

exports.postGetController = async (req, res) => {
  const result = await Post.find();
  res.send({ data: result });
};

exports.postIdController = async (req, res) => {
  const { id } = req.params;
  const objId = new mongoose.Types.ObjectId(id);
  const result = await Post.findById({ _id: objId });
  res.send({ data: result });
};

exports.postDeleteController = async (req, res) => {
  const { id } = req.params;
  const delId = new mongoose.Types.ObjectId(id);
  const result = await Post.deleteOne({ _id: delId });
  res.send({ data: result });
};

exports.commentGetController = async (req, res) => {
  const result = await Post.find();
  res.send({ data: result });
};

exports.commentPostController = async (req, res) => {
  try {
    const { comment, userby } = req.body;
    const result = await new Post({
      comment: comment,
      userby: userby,
    }).save();

    const dost = { $push: [{ comment: result }] };
    console.log(result);
    res.send(dost);
  } catch (err) {
    res.send(err.message);
  }
};
