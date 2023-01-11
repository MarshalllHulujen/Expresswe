const express = require("express");
const router = express.Router();

const UrlRouter = express.Router();
const {
  UrlController,
  UrlGetController,
} = require("../Controller/UrlController");

UrlRouter.post("/url", UrlController).get("/:code", UrlGetController);

module.exports = UrlRouter;
