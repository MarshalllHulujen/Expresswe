const Url = require("../database/model/url");
var validUrl = require("valid-url");
var shortid = require("shortid");

exports.UrlController = async (req, res) => {
  const { longUrl } = req.body;
  const { userid } = req.body;
  console.log(longUrl);
  const baseUrl =
    "https://boginoo-fahterlessgerman-bsha44893-gmailcom.vercel.app";

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
          userid,
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
  const { userid } = req.body;
  const result = await Url.findOne({ userid: userid });
  res.send({ data: result });
};

exports.UrlDeleteController = async (req, res) => {
  const result = await Url.deleteMany();
  res.send({ result });
};
