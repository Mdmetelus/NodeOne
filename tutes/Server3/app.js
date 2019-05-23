const express = require('express');

const app = express();

app.use('/home-response', (req, res, next) => {
    console.log("This app has gone home, and responded.");
    res.send('<h1>This is the response !!!</h1>');
    
});

app.use('/home', (req, res, next) => {
    console.log("This app has gone home.");
    
});


app.use('/', (req, res, next) => {
    console.log("This app is running... ");
    next();
});
app.listen(3449);