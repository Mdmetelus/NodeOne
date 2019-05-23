const http = require('http');


const server = http.createServer((req,res) => {
    console.log(req.url, req.method, req.headers);
    // console.log(req);
    // process.exit(); allows you to exit the event loop.
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My New Page</title></head>');

    res.write('<body><h1>Hello from node.js Server!</h1></body>');

    res.write('</html>');
    res.end();
    //can't write below the end function.

});

server.listen(3111);