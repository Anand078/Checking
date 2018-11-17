var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Anand' });
});
router.get('/Anand', function(req, res, next) {
  res.render('index', { title: 'Welcome Anand' });
});

module.exports = router;
