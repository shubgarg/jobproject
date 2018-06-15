var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var express = require('express');
// User Schema
mongoose.connect('mongodb://data:data@ds229290.mlab.com:29290/feedbackdata');


var UserSchema = mongoose.Schema({
  name:{
    type: String
  },
  lastname:{
    type: String
  },
  email:{
    type: String
  },
  post:{
    type: String
  },
  username:{
    type: String,
    index: true
  },
  password:{
    type: String
  },
  mobileno:{
    type: String
  },
  dat:{
    type: String
  },
  sex:{
    type: String
  }

});


var User = module.exports = mongoose.model('User', UserSchema);

///////////////////////////////////////////////////
//for multiple login
UserSchema.methods.isEmployee = function() {
    return (this.post === "employee");
};
UserSchema.methods.isGeneralManager = function() {
    return (this.post === "general");
};
UserSchema.methods.isManager = function() {
    return (this.post === "manager");
};
UserSchema.methods.isCEO = function() {
    return (this.post === "ceo");
};
/////////////////////////
