/**
 * configuration for home
 */

 // Dependencies
 const express = require('express');

 // Creating a router
 const router = express.Router();

 // sample HTTP GET call
 router.get('/',(req,res) => {
     res.status(200).send('hello world!');
 });

 // Export the application
 module.exports = router;