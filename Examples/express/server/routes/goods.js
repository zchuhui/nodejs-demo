var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Goods = require('../models/goods');

mongoose.connect('mongodb://127.0.0.1:27017/dumall');

mongoose.connection.on('connected',function(){
    console.log("MongoDB connected success");
});

mongoose.connection.on('error',function(){
    console.log('MongoDB connected error');
});

mongoose.connection.on('disconnected',function(){
    console.log('MongoDB connected disconnected!');
});


/* GET home page. */
router.get('/', function(req, res, next) {
  //res.send('respond with a goods');

  // 查询数据，并返回接口
  Goods.find({},function(err,doc){
      if(err){
        res.json({
            code:"1",
            message:err.message,
        })
      }else{
        res.json({
            code:"200",
            message:'success',
            data:{
                count:doc.length,
                list:doc
            }
        })
      }
  })
});

module.exports = router;
