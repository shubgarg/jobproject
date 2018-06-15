var express = require('express');
var passport = require('passport');
const bcrypt = require('bcryptjs');
var bodyparser= require('body-parser');
var LocalStrategy = require('passport-local').Strategy;

/////////////
/*
var flash = require('connect-flash');
var session = require('express-session');
var cookieParser = require('cookie-parser');
*/
/////////////////////////
var urlencoded = bodyparser.urlencoded({extended:false});
var User = require('../models/user');
// Register Form
module.exports = function(app){

app.use(bodyparser({extended:false}));

/////////////////////
/*app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));
app.use(flash());
app.use(cookieParser());*/
/////////////////////
app.get('/register', function(req, res){
  res.render('register');
});

// Register Proccess
app.post('/register', function(req, res){

var newUser = User({
    name:req.body.fname,
    lastname:req.body.lname,
    email:req.body.email,
    post:req.body.position,
    username:req.body.username,
    password:req.body.password,
    mobileno:req.body.phone,
    dat:req.body.dob,
    sex:req.body.sex
});
  newUser.save(function(err,data){

  if(err)
    {
    console.log(err);

    return;
    }
    else {
  //req.flash('success_msg','You are now registered and can log in');


      return res.redirect('login');
    }

  });
    });

app.get('/login',function(req,res){
  res.render('login');
});



app.post('/login', function(req,res){

  //index page data
  var yaar;
  var data = req.app.get('appData');
  var pageFriends = data.friends;
  var username= req.body.username;
  var password = req.body.password;
  var post = req.body.postion;
  var name = req.body.fname;


    User.findOne({username: username , password:password},  function(err,  user){
      if(!user){
        console.log("user not found");
        return res.status(400).send();
      }


else{
  res.render('index',{
    //ye index vo hi h jo index.ejs file h view folder me
    pageTitle:'Home',

    pageID:'home',
yaar:pageFriends
  });
}


    /*  if (post = 'CEO'){
        var parrot;
        User.find({name:name}, function(err, data){
          if (err) throw err;
          res.render("register", {parrot: data});
        });
      }*/
  });
});

app.get('/logout',function(req,res){
  req.logout();
  res.redirect('login');
});
};
