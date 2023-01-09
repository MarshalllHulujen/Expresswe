const express = require('express');
const router = express.Router();

const UrlRouter = express.Router();
const { UrlController, UrlGetController } = require("../Controller/UrlController");

UrlRouter.post('/url', UrlController)
.get("/url/:code", UrlGetController);

module.exports = router;
