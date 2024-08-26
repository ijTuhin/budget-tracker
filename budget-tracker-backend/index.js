const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoute = require("./collectionRoutes/userRoute.js");
const itemRoute = require("./collectionRoutes/itemRoute.js");
const app = express();
app.use(cors()); // using middleware
app.use(express.json()); // to Body parse

require("dotenv").config();

/* *******************
DB connection with Mongoose
******************** */
const database = (module.exports = () => {
  mongoose
    .connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@dbhost.ueaoans.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
    )
    .then(() => console.log("Successful Connection"))
    .catch((err) => console.log(err));
});

database();

/* *******************
        Routes
******************** */
app.use("/", userRoute);
app.use("/item", itemRoute);

app.listen(3001, () => {
  console.log("Mongoose Server running");
});
