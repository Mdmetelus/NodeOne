const fs = require('fs');

const requestHandler = (req, res) => {
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
        const body = [];
        req.on('data',(chunk) => {
            console.log(chunk);
            body.push(chunk);
        });// listening for the data event
        
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, (error) => {
                
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
            //writeFileSync ois the version that blocks any async code.
            //use writeFile to allow async code to continue to run other stuff.
            
        });
        // res.writeHead(302, {});
        
        
        
    }
    
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My New Page</title></head>');
    
    res.write('<body><h1>Hello from node.js Server!</h1></body>');
    
    res.write('</html>');
    res.end();
    //can't write below the end function.
};

module.exports = requestHandler

// module.exports = {
//     handler: requestHandler;
//     someText: 'Some hard coded text to send back to the app.';
// };