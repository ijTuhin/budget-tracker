const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  items: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Item",
    },
  ],
});

module.exports = userSchema;
