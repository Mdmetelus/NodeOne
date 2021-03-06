const http = require('http');
const fs = require('fs');


const server = http.createServer((req,res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Enter message</title></head>');
    
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    
        res.write('</html>');
        return res.end();
        //can't write below the end function.

    }

    if (url === '/message' && method === 'POST') {
        fs.writeFileSync('message.txt', 'DUMMY DATA');
        // res.writeHead(302, {});
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();



    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My New Page</title></head>');

    res.write('<body><h1>Hello from node.js Server!</h1></body>');

    res.write('</html>');
    res.end();
    //can't write below the end function.


});

server.listen(3111);