var express= require('express')
var router=express.Router()



router.get('/', function(req, res){
    // res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
    res.render('frontend/index')
})



router.get('/product', function(req,res){
    res.render('frontend/product')
})

router.get('/cart', function(req,res){
    res.render('frontend/shopping_cart')
})

router.get('/help', function(req,res){
    res.render('frontend/help')
})


router.get('/success', function(req,res){
    res.render('frontend/success')
})

router.get('/payment', function(req,res){
    res.render('frontend/payment')
})


module.exports=router;