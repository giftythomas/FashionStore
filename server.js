/*
*Primary file of the application
*/

//dependencies
const http = require('http');

// Importing the application
const index = require('./src/index');

//Instantiating 
const server = http.createServer(index);

server.listen(3000,'0.0.0.0', () => console.log('Server has started om port 3000'));