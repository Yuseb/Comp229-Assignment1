var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Home Page' });
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

/* GET Products page. */
router.get('/products', function(req, res, next) {
  res.render('products', { title: 'Products' });
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});


/* GET Contact us page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact us' });
});

module.exports = router;
