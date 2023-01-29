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

exports.UserDeleteController = async(req, res) => {
  const result = await User.deleteMany();
  res.status(200).send({ data: result});
}

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
    res.send({ token: token });
  } catch (err) {
    res.send(err.message);
  }
};

exports.UserHistoryController = async(req, res) => {
  try {
    const {email} = req.params;
    const userid = await User.findOne({email: email});
    res.status(200).send(userid);
  } catch (err) {
    res.send(err.message);
  }
}

exports.UserPostHistoryController = async (req, res) => {
  try {
    const { longUrl } = req.body;
    const { email } = req.params;
    console.log(longUrl);
    var user = await User.findOne({email: email, })
    const baseUrl = "http://localhost:8000";
  
    if (!validUrl.isUri(longUrl)) {
      return res.status(401).json("Invalid base url");
    }
  
    const urlCode = shortid.generate();
    console.log(urlCode);
    if (validUrl.isUri(longUrl)) {
      try {
        var url = user.history
        console.log(url);
        if (url) {
          res.json(url);
        } else {
          const shortUrl = baseUrl + "/" + urlCode;
  
          url = {
            longUrl,
            shortUrl,
            urlCode
          }
  
          const Post = {user: url};

  
          res.json(Post);
        }
      } catch (err) {
        console.error(err);
        res.status(500).json(err.message);
      }
    } else {
      res.status(401).json("Invalid long url");
    }
  } catch(err) {
    res.send(err.message)
  }
}

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
