var mongoose = require('mongoose');

var express = require('express');

////

var bodyParser = require('body-parser');


var mongoose = require("mongoose");
mongoose.connect('mongodb://data:data@ds229290.mlab.com:29290/feedbackdata');
////

var app = express();
var rt=require('./routers/feedback');
var rt1=require('./routers/friends');
var rt2=require('./routers/index');
var rt3=require('./routers/loginout');
var rt4=require('./models/user');

rt(app);
rt1(app);
rt2(app);
rt3(app);

var datafile = require('./data/data.json');

app.set('appData',datafile);

app.set('view engine','ejs');
app.set('views','app/views');
//////////////////////
app.use(function(req, res, next) {
  res.locals.user = req.user || null;
  // res.locals is an object available to ejs templates. for example: <%= user %>
  next();
})

//////////////////////
app.locals.siteTitle='ninzatech';
app.locals.allfriends=datafile.friends;
// yha hmne one dot lgaya h kuki data folder k bhar hi app h
// yha hmne index.js or friends.js file ko acess krva liya
app.use(express.static('app/public'))
//yha hmne pure public folder ko acess kr liya h with the help of this above command.

app.listen(4000);
console.log('port has been set');
