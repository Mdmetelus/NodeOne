const express = require('express');

const router = express.Router();

app.use('/', (req, res, next) => {
    console.log('In another Middleware!');
    // ...
    res.send('<hi>Hello form Express!</h1>');
    // next();
});


module.export = router;