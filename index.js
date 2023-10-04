var express= require('express')
var path=require('path')
require('ejs')
var item=require('./route/frontlink')
var item1=require('./route/backlink')
const { auth } = require('express-openid-connect');
var mongo = require('mongodb');

var app=express()

const config = {
    authRequired: true,
    auth0Logout: true,
    secret: 'a long, randomly-generated string stored in env',
    baseURL: 'http://localhost:3000',
    clientID: 'vB4C6XKiXtPgRVeIgAG4DpjJxwRgScY9',
    issuerBaseURL: 'https://annabelnonyelim.us.auth0.com'
  };

  
  // auth router attaches /login, /logout, and /callback routes to the baseURL
//   app.use(auth(config));


app.use(express.static(path.join(__dirname, '/public')))
app.set('view engine', 'ejs')
app.set('views','./views')

app.use('/', item)
// app.use(auth(config));
app.use('/', item1)





app.listen(3000, function(){
    console.log("App running at port 3000")
})