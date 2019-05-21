// const http = require('http');

const express = require('express');

const app = express();

app.use('/',(req, res, next) => {
    console.log('This always Runs!');
    next();
});

app.use('/add-product', (req, res, next) => {
    console.log('In another Middleware!');
    res.send('<hi>The "Add Product" Page</h1>');
   
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