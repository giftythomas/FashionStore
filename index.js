/**
 * configuration for express
 */

 // Dependencies
 const express = require('express');

 // Creating the express application
 const app = express();

 // sample HTTP GET call
 app.get('/',(req,res) => {
     res.status(200).send('hello world!');
 });

 // Export the application
 module.exports = app;