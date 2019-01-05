const express = require('express');
 
const port = 5000;
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader("Content-Type", 'text/plain');
//     res.end('Hello World From  NodeJS');
// });

const server = express();

server.get('/', (req, res) => {
    res.send('Hello world from express')
});
// the / is a rougt, location 
// req and res call back is middle wear and a request handler
// const serveer and the server.get are the express way of doing the const server  using node.js, it changes to an express server from an http server.

server.listen(port,  () => {
    console.log(`server listening on ${port}`);
})