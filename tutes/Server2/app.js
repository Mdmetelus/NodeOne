// const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded());// parses bpdes sent through forms



app.use('/add-product1', (req, res, next) => {
    console.log('In another Middleware!');
    res.send('<html><body><form action="/product" method="POST"><input type="text" name="title"><button type="submit"> Add Product 1 </button></form></body></html>'); 
    
});

app.use('/add-product', (req, res, next) => {
    console.log('In another Middleware!');
    res.send('<hi>The "Add Product" Page</h1>');
    
});

app.get('/product', (req, res, next) => {
    console.log(req.body);
    
    res.redirect('/');
});

app.post('/product', (req, res, next) => {
    console.log(req.body);
    
    res.redirect('/');
});

app.use('/',(req, res, next) => {
    console.log('This always Runs!');
    next();
});


app.use('/', (req, res, next) => {
    console.log('In another Middleware!');
    // ...
    res.send('<hi>Hello form Express!</h1>');
    // next();
});

// const server = http.createServer(app);
// server.listen(3535);
// alternatively we can just 
app.listen(3535);