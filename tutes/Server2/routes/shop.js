const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    // console.log('In another Middleware!');
    // ...
    res.send('<hi>Hello form Express!</h1>');
    // next();
});


module.exports = router;