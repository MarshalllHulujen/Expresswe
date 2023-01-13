const express = require("express");
const router = express.Router();

const UrlRouter = express.Router();
const {
  UrlController,
  UrlGetController,
  UrlGeetController,
} = require("../Controller/UrlController");

UrlRouter.post("/url", UrlController).get("/:code", UrlGetController).get("/url", UrlGeetController)

module.exports = UrlRouter;
