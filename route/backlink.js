var express= require('express')
var router=express.Router()



router.get('/dashboard', function(req,res){
    res.render('backend/home')
})

router.get('/product_admin', function(req,res){
    res.render('backend/product_admin')
})

router.get('/category', function(req,res){
    res.render('backend/category')
})

router.get('/users', function(req,res){
    res.render('backend/users')
})

router.get('/orders', function(req,res){
    res.render('backend/orders')
})


module.exports=router;