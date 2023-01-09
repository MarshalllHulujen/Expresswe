const Url = require("../database/model/url");
const mongoose = require("mongoose");
const validUrl = require('valid-url');
const shortid = require('shortid');
const config = require('config');


exports.UrlController = async (req, res) => {
    const { longUrl } = req.body;
    const baseUrl = config.get('baseUrl');
  
    // Check base url
    if (!validUrl.isUri(baseUrl)) {
      return res.status(401).json('Invalid base url');
    }
  
    // Create url code
    const urlCode = shortid.generate();
  
    // Check long url
    if (validUrl.isUri(longUrl)) {
      try {
        let url = await Url.findOne({ longUrl: longUrl });
  
        if (url) {
          res.json(url);
        } else {
          const shortUrl = baseUrl + '/' + urlCode;
  
          url = new Url({
            longUrl,
            shortUrl,
            urlCode,
            date: new Date()
          });
  
          await url.save();
  
          res.json(url);
        }
      } catch (err) {
        console.error(err);
        res.status(500).json('Server error');
      }
    } else {
      res.status(401).json('Invalid long url');
    }
}

exports.UrlGetController = async(req, res) => {
    try {
        const url = await Url.findOne({ urlCode: req.params.code });
    
        if (url) {
          return res.redirect(url.longUrl);
        } else {
          return res.status(404).json('No url found');
        }
      } catch (err) {
        console.error(err);
        res.status(500).json('Server error');
      }
}