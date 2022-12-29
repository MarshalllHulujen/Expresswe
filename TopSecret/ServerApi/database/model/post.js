const mongoose = require("mongoose");

const Post = new mongoose.Schema({
  post: { type: String, required: true },
  userby: { type: String, required: true },
  comment: { type: String, requires: true },
  createdAt: { type: Date, default: Date.now() },
});

const PostModel = mongoose.model("Post", Post);
module.exports = PostModel;
