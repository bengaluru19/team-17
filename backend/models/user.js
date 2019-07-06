const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name:{
    type:String,
    required:true
  },
  email_id: {
    type:String,
    required:true
  },
  phone: {
    type:String,
    required: true
  },
  budget:{
    type:Number,
    required:true
  },
  location: {
    type:String,
    required:true
  },
  organization: {
    type:String,
    required: true
  },
  area: {
    type:Number,
    required: true
  },
  specialreq: {
    type: String,
    required: true
  },
  snake: {
    type: String,
    required: true
  }
});

var User = mongoose.model('User', UserSchema);

module.exports = User;
