const http = require('http');

const index = require('./index');

const server = http.createServer(index);

server.listen(3000,'0.0.0.0', () => console.log('Server has started om port 3000'));