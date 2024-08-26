const mongoose = require("mongoose");
const itemSchema = mongoose.Schema({
  type: Number,
  name: String,
  amount: Number,
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

module.exports = itemSchema;
