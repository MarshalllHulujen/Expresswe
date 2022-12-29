const mongoose = require("mongoose");

const Comments = new mongoose.Schema({
  userby: { type: String, required: true },
  comment: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
});

const CommentModel = mongoose.model("Comments", Comments);
module.exports = CommentModel;
