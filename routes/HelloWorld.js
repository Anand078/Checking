var express = require('express');
var router = express.Router();

router.get('/HelloWorld', function(req,res, next){
    res.render('HelloWorld', {title :'Hello World. Welcome to Express'})
})

module.exports = router;