/**
 * configuration for express
 */

// Dependencies
const express = require("express");
const mongoose = require("mongoose");

// Creating the express application
const app = express();

//Importing routes
const home = require("./routes/home.route");
const product = require("./routes/products.route");

//Middle ware for home route
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use("/", home);
app.use("/api/products", product);

//Database connection
mongoose
  .connect("mongodb://admin:admin@ds155699.mlab.com:55699/fashion_store")
  .then(con => console.log("Connection Established"))
  .catch(err => console.log(err));

// Export the application
module.exports = app;
