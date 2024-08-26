const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const itemSchema = require("../collectionSchemas/itemSchema.js");
const Item = new mongoose.model("Item", itemSchema);
const checkLogin = require("../Authentications/checkLogin.js");

module.exports = router;