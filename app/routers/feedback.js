var express = require('express');
// our router can work easily so we use express router
//var router = express.Router();

// express ko hm jis bhi variable me dalte h usi ka use kiya jata h ....for example on app.js page express ko hme app variable me dala h
//  isliye hmmne app.get ka use kiya h......but is page pe  hmne expres ko router me dala h isliye router.get ka use kiya h

var bodyparser=require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://data:data@ds229290.mlab.com:29290/feedbackdata');

var urlencoded = bodyparser.urlencoded({extended:false});

var feeddata = new mongoose.Schema({
  name:String,
  title:String,
  message:String
});



var FEEDBACKDATA= mongoose.model('FEEDBACKDATA',feeddata);

module.exports = function(app){

app.use(bodyparser({extended:false}));


//router.get('/feedback',function(req,res){
app.get('/feedback',function(req,res){


  res.render('feedback',{
    //ye index vo hi h jo index.ejs file h view folder me
    pageTitle:'Feedback',
    //  pageID:'fdbck'

  });

});



app.post('/feedback',function(req,res){
  var newTodo = FEEDBACKDATA({


    name:req.body.nme,
    title:req.body.ttl,
    message:req.body.msg


  }).save(function(err,data){
  if (err) throw err;
});

});
/*
app.get('/delete',function(req,res){
  var removeQuery = FEEDBACKDATA.remove({id : req.params.id });
  removeQuery.exec();
});
*/
app.get('/delete',function(req,res,next){
  var del = FEEDBACKDATA.deleteOne(req.params.id);
  del.exec(function(err){
    if(err) throw err;
    res.redirect('feedbackdata');
  });

});


app.get('/feedbackdata',function(req,res){
  FEEDBACKDATA.find({},function(err, data){
    if (err) throw err;
    res.render('feedbackdata',{todos : data});
});
});
};
