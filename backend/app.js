var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./routes/route');

mongoose.connect('mongodb://localhost:27017/anthill', {useNewUrlParser: true});

mongoose.connection.on('connected', () => {
  console.log("mongodb connected ");
});

mongoose.connection.on('error',(err) => {
  console.log(err);
});

const port = 3000;

app.use(cors());

app.use(bodyparser.json());

app.use(express.static(path.join(__dirname,'public')));

app.use('/api', route);

app.get('/', (req,res,next) => {
  res.send("Hello!");
});
app.get('/home.html', (req, res) => {
  res.sendFile(__dirname+'/'+'home.html');
});
app.get('/index.html', (req, res) => {
  res.sendFile(__dirname+'/'+'index.html');
});

app.listen(port, () => {
  console.log("Server started at port :"+port);
});
