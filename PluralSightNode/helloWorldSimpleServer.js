const http = require('http');

const server = http.createServer((req, res) =>{
    res.end('Hello World\n');
});

server.listen(4242, () => {
    console.log('Servier is Running...');
    console.log('Oh no he didn\'t just make a simple server...!?!?');
});