const path = require('path');
const express = require('express');

const router = express.Router();

// router.get('/', (req, res, next) => {
//     // console.log('In another Middleware!');
//     // ...
//     res.send('<hi>Hello form Express!</h1>');
//     // next();
// });
router.get('/', (req, res, next) => {
    // ...
    res.sendFile(path.join(__dirname, '../','views', 'shop.html'));
    
});


module.exports = router;