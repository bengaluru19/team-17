const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');
const requests = require('request-promise')


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

router.post('/addsurvey',(req,res,next) => {
  let newUser = new User({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    email_id: req.body.email_id,
    phone: req.body.phone,
    budget:req.body.budget,
    location: req.body.location,
    organization: req.body.organization,
    area: req.body.area,
    specialreq: req.body.specialreq,
    snake: req.body.snake
  });
  var options = {
        method: 'POST',
        uri: 'http://10.49.208.149:5000/',
        body: data,
        json: true // Automatically stringifies the body to JSON
    };

    var returndata;
    var sendrequest = await request(options)
    .then(function (parsedBody) {
        console.log(parsedBody); // parsedBody contains the data sent back from the Flask server
        returndata = parsedBody; // do something with this data, here I'm assigning it to a variable.
    })
    .catch(function (err) {
        console.log(err);
    });
  newUser.save((err,addsurvey) => {
    if(err){
      res.json(err);
    }
    else{
      res.json(newUser);
      res.json({msg: 'contact added successfully'});
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
