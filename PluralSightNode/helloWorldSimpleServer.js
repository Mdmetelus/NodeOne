const http = require('http');

const server = http.createServer((req, res) =>{
    res.end(helloWorld\n');
});

server.isten(4242, () => {
    console.log('servier is running...');
    console.log('oh no he didn\'t just make a simple server...!?!?');
});