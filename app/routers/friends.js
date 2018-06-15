var express = require('express');
//var router = express.Router();
var datafile = require('../data/data.json');
 //yha hmne double  dot isliye lgaya h kuki friend.js router folder me h or data.json data folder me h so hm ek file se dusre folder ki file ko acess krva rhe h

//router.get('/friends',function(req,res){
module.exports=function(app){
app.get('/friends',function(req,res){

  //ye /friends vo hi h jo friends.ejs file h view folder me
var data = req.app.get('appData');
var pageFriends = data.friends;
// ye   .friends ye same name h jo data.json file me friends ki list h
res.render('friends',{
//yha hmne render ka use krke is page se friend.ejs ko call kr liya h
  pageTitle:'Dost',
  yaar:pageFriends,
  pageID:'frnd'
});





  /*var info = '';
  datafile.friends.forEach(function(item){
    info+=
    //use es6 feature here
  `
<li>
<h2> ${item.name}</h2>
<img src="/images/friends/${item.shortname}.jpg" alt ="frnd" style ="height:100px;">
<p>${item.summary}</p>
</li>
    `;

  // shortname hmara match krega images name se jo friend list me image rkhi h.

  res.send (`
    <link rel="stylesheet" type="text/css" href="/css/style.css">
<h1>Riktech</h1>
${info}

    `);
    */
});




//router.get('/friends/:friendid',function(req,res){
app.get('/friends/:friendid',function(req,res){
  var data = req.app.get('appData')
var pageFriends = [];
data.friends.forEach(function(item){
  if(item.shortname == req.params.friendid){
    pageFriends.push(item);
  }

});
res.render('friends',{
  pageTitle:'Dost info',
  yaar:pageFriends,
  pageID:'friendDetail'




});
  /*
  var friend = datafile.friends[req.params.friendid];


  res.send (`
<link rel="stylesheet" type="text/css" href="/css/style.css">

<h1>${friend.title}</h1>
<h2>${friend.name}</h2>
<img src="/images/friends/${friend.shortname}.jpg" alt ="friend" style ="height:50px;">
<p>${friend.summary}</P>

    `);
    */


});
};
// taki hmm is file ka app.js pe use kr ske.
//module.exports = router;
