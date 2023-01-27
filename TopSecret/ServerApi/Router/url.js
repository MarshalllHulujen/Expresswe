const express = require("express");
const router = express.Router();

const UrlRouter = express.Router();
const {
  UrlController,
  UrlGetController,
  UrlGeetController,
  UrlDeleteController,
} = require("../Controller/UrlController");

UrlRouter.post("/url", UrlController)
  .get("/:code", UrlGetController)
  .get("/url", UrlGeetController)
  .delete("/url", UrlDeleteController);

module.exports = UrlRouter;
