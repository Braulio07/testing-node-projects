
const http = require('http');

const server = http.createServer((req, res) =>{
    res.end('PROJECT 02:  HELLO :) :)')
})

server.listen(4000);
console.log('server on port 4000');