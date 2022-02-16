
const http = require('http');

const server = http.createServer((req, res) =>{
    res.end('PROJECT 01:  HELLO :)')
})

server.listen(3000);
console.log('server on port 3000');