const express = require('express');

const router = express.Router();

router.get('/add-product1', (req, res, next) => {
    console.log('In another Middleware!');
    res.send('<html><body><form action="/product" method="POST"><input type="text" name="title"><button type="submit"> Add Product 1 </button></form></body></html>'); 
    
});


router.post('/product', (req, res, next) => {
    console.log(req.body);
    
    res.redirect('/');
});

module.exports = router;