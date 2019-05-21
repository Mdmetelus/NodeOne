const http = require('http');
const fs = require('fs');


const server = http.createServer((req,res) => {
    const url = req.url;
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
        const body = [];
        req.on('data',(chunk) => {
            console.log(chunk);
            body.push(chunk);
        });// listening for the data event

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message);

        });
        // fs.writeFileSync('message.txt', 'DUMMY DATA'); moved to asyc
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