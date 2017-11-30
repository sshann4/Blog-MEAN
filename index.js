const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');//import node module
const path = require('path');


mongoose.connect(config.uri, (err)=> {
  if(err) {
    console.log('could not connect to db:  ', err);
  } else {
    console.log('connected to db: ' + config.db);
  }
});
mongoose.Promise = global.Promise;//defualt add - no need to understand

app.use(express.static(__dirname + '/client/dist/'));

app.get('*', function(req, res){
  res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});

app.listen(8080, ()=>{
  console.log('listan on 8080');
});
