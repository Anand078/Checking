var express = require('express');
var router = express.Router();

router.get('/Second', function(req, res, next){
    res.render('Second',{ title :'Hello World, Welcome to Second Index'});
})

module.exports = router;