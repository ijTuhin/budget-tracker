const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const router = express.Router();
const userSchema = require("../collectionSchemas/userSchema.js");
const User = new mongoose.model("User", userSchema);
const checkLogin = require("../Authentications/checkLogin.js");

// admin SIGN-UP & LOG IN from Admin section
router.post("/signup", async (req, res) => {
  const newUser = new User(req.body);
  await newUser
    .save()
    .then(() => {
      res.status(200).json("Insertion successful");
    })
    .catch(() => {
      res.status(400).json({
        error: "Oops! Something went wrong!",
      });
    });
});
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email, password: req.body.password });
    if (user) {
      const token = jwt.sign(
        {
          email: user.email,
          userId: user._id,
        },
        process.env.SECRET_JWT_TOKEN,
      );

      res.status(200).json({
        token: token,
        role: user.role,
        message: "Login Successful",
      });
    } else console.log("User not found");
  } catch {
    console.log("Not found.");
    res.status(401).json("Authentication Failed");
  }
});

module.exports = router;