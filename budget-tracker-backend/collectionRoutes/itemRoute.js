const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const userSchema = require("../collectionSchemas/userSchema.js");
const User = new mongoose.model("User", userSchema);
const itemSchema = require("../collectionSchemas/itemSchema.js");
const Item = new mongoose.model("Item", itemSchema);
const checkLogin = require("../Authentications/checkLogin.js");

router.post("/add", checkLogin, async (req, res) => {
  const newItem = await new Item({
    ...req.body,
    user: req.userId,
  }).save();
  await User.updateOne(
    { _id: req.userId },
    {
      $push: { items: newItem._id },
    }
  )
    .then(() => res.json({ message: "Item Added" }))
    .catch(() => res.json("Oops! Something went wrong!"));
});

router.delete("/remove/:id", checkLogin, async (req, res) => {
  await Item.deleteOne({ _id: req.params.id });
  await User.updateOne(
    { _id: req.userId },
    {
      $pull: { items: req.params.id },
    }
  )
    .then(() => {
      res.json("Data deletion successful");
    })
    .catch(() => {
      res.json("Oops! Something went wrong!");
    });
});

module.exports = router;
