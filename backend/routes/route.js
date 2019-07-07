const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');
const request = require('request-promise')
const spawn = require('child_process').spawn;
var nodemailer = require('nodemailer');

let flag = 0;

router.get('/surveys',(req,res,next) => {
  User.find((err,user) => {
    res.json(user);
  });
});

router.get('/surveys/:id',(req,res,next) => {
  User.find({_id: req.params.id},(err,users) => {
    res.json(users);
  });
});

router.get('/addsurvey', async (req,res,next) => {
  let newUser = new User({
    _id: new mongoose.Types.ObjectId(),
    name: req.query.name,
    email_id: req.query.email_id,
    phone: req.query.phone,
    budget:req.query.budget,
    location: req.query.location,
    organization: req.query.organization,
    area: req.query.area,
    specialreq: req.query.specialreq,
    snake: req.query.snake
  });

  let mailOptions = {}
  if(newUser.snake=="No"){
    if(newUser.budget>5000){

      mailOptions = {
          from: 'anthilltest12345@gmail.com',
          to: newUser.email_id,
          subject: 'Thank You',
          text: 'Template1',
          attachments: [{filename: 'text1.txt',content:"Swings : 10, Monkey bars : 5, Slides: 3 "}]
        }
      flag = 1;
      res.send("Thank you for registering with us, we have sent you an email.");
    }
    else{
      mailOptions = {
          from: 'anthilltest12345@gmail.com',
          to: newUser.email_id,
          subject: 'Thank You',
          text: 'Template2',
          attachments: [{filename: 'text2.txt',content:"Swings : 20, Monkey bars : 7, Slides: 2 "}]
        }
      flag = 2;
      res.send("Thank you for registering with us, we have sent you an email.");
    }
  }
  else{
    mailOptions = {
        from: 'anthilltest12345@gmail.com',
        to: newUser.email_id,
        subject: 'Thank You',
        text: 'Template3',
        attachments: [{filename: 'text3.txt',content:"Swings : 15, Monkey bars : 4, Slides: 1 "}]
      }
    res.send("Thank you for registering with us, we have sent you an email.");
  }

  let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
          user: 'anthilltest12345@gmail.com',
          pass: 'anthill123'
      }
  });

  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error.message);
      }
      console.log('success');
  });



  newUser.save((err,addsurvey) => {
    if(err){
      console.log(err);
    }
    else{
      //if(newUser.snake=="no"){
        //if(newUser.area>5000){
          //if(newUser.budget>100000){
            //res.send("Template1")
          //}
        //}
      //}
      //else if (newUser.snake == "yes") {
        //if(newUser.area>5000){
          //if(newUser.budget>100000){
            //res.send("Template2");
          //}
        //}
      //}
        console.log("yes");
    }

  });
});
router.delete('/surveys/:id',(req,res,next) => {
User.remove({_id: req.params.id}, (err,result) => {
  if(err){
    res.json(err);
  }
  else{
    res.json(result);
  }
});
});

module.exports = router;
