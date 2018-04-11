var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Users = require('../models/users');


mongoose.connect('mongodb://127.0.0.1:27017/dumall');

mongoose.connection.on('connected',function(){
  console.log('user conneced success!');
});

mongoose.connection.on('error',function(){
  console.log('connected error!');
});

mongoose.connection.on('disconnected',function(){
  console.log('connected disconnection!');
})


/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  //res.render('users', { title: 'this is users' });

  let params = {};
  let usersModel = Users.find(params);
  console.log('models');

  usersModel.exec(function(err,doc){
    console.log('exec',err,doc);
    if(err){
      res.json({
        code:'1',
        message:err.message
      })
    }else{
      res.json({
        code:'200',
        message:'success',
        data:{
          count:doc.length,
          list:doc
        }
      })
    }
  })

});

router.get('/test', function(req, res, next) {
  res.send('respond with a test');
});

module.exports = router;
