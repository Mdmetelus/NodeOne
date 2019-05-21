const http = require('http');


const server = http.createServer((req,res) => {
    console.log(req.url, req.method, req.headers);
    // console.log(req);
    // process.exit(); allows you to exit the event loop.
    res.setHeader('Content-Type', 'text/html');
    res.write()
});

server.listen(3111);