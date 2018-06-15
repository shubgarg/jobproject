var express = require('express');
// our router can work easily so we use express router
//var router = express.Router();

// express ko hm jis bhi variable me dalte h usi ka use kiya jata h ....for example on app.js page express ko hme app variable me dala h
//  isliye hmmne app.get ka use kiya h......but is page pe  hmne expres ko router me dala h isliye router.get ka use kiya h

//router.get('/',function(req,res){
module.exports=function(app){
  app.get('/',function(req,res){


  var data = req.app.get('appData');
  var pageFriends = data.friends;

  res.render('index',{
    //ye index vo hi h jo index.ejs file h view folder me
    pageTitle:'Home',

    pageID:'home',
yaar:pageFriends
  });
/*  res.send (`
<h1>Welcome to Riktech</h1>
<link rel="stylesheet" type="text/css" href="/css/style.css">
<img src="/images/misc/Ninja.jpg" alt ="background" style ="height:500px;">
    `);*/
});
// taki hmm is file ka app.js pe use kr ske.
//module.exports = router;
};
