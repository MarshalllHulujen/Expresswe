const mongoose = require("mongoose");
const urlSchema = new mongoose.Schema({
  userid: {type: mongoose.Schema.ObjectId, ref: "User", require: true},
  longUrl: String,
  shortUrl: String,
  urlCode: String,
  date: { type: String, default: Date.now },
});

module.exports = mongoose.model("Url", urlSchema);
