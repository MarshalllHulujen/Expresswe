const Url = require("../database/model/url");
var validUrl = require("valid-url");
var shortid = require("shortid");
const { result } = require("lodash");

exports.UrlController = async (req, res) => {
  const { longUrl } = req.body;
  console.log(longUrl);
  const baseUrl = "http://localhost:8000";

  if (!validUrl.isUri(baseUrl)) {
    return res.status(401).json("Invalid base url");
  }

  const urlCode = shortid.generate();
  console.log(urlCode);
  if (validUrl.isUri(longUrl)) {
    try {
      var url = await Url.findOne({ longUrl: longUrl });
      console.log(url);
      if (url) {
        res.json(url);
      } else {
        const shortUrl = baseUrl + "/" + urlCode;

        url = new Url({
          longUrl,
          shortUrl,
          urlCode,
          date: new Date(),
        });

        const Post = { post: url };

        url.save();

        res.json(Post);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json(err.message);
    }
  } else {
    res.status(401).json("Invalid long url");
  }
};

exports.UrlGetController = async (req, res) => {
  try {
    const url = await Url.findOne({ urlCode: req.params.code });

    if (url) {
      return res.redirect(url.longUrl);
    } else {
      const result = await Url.find();
      res.send({ data: result });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json(err.message);
  }
};

exports.UrlGeetController = async (req, res) => {
  const result = await Url.find();
  res.send({ data: result });
};

exports.UrlDeleteController = async (req, res) => {
  const result = await Url.deleteMany();
  res.send({ result });
};
