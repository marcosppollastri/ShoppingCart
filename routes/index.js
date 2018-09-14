var express = require('express');
var router = express.Router();
var Product = require('../models/product');
var csrf = require('csurf');
var csrfProtection = csrf();

router.use(csrfProtection);
/* GET home page. */
router.get('/', function(req, res, next) {
  Product.find(function(err, products){
    if(err){
      console.log(err);
    } else {
      res.render('shop/index', { title: 'Grido System', products: products });
    }
  });
});

router.get('/user/singup', function(req, res, next){
  res.render('user/singup', {csrfToken: req.csrfToken()});
});

router.post('/user/singup', function(req, res, next){
  res.redirect('/');
});

module.exports = router;
