var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Goods = require('../models/goods');

// 连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/dumall');

// 监听连接状态：连接成功
mongoose.connection.on('connected',function(){
    console.log("MongoDB connected success");
});

// 监听连接状态：错误
mongoose.connection.on('error',function(){
    console.log('MongoDB connected error');
});

// 监听连接状态：断开连接
mongoose.connection.on('disconnected',function(){
    console.log('MongoDB connected disconnected!');
});


// 路由获取数据并返回接口
router.get('/', function(req, res, next) {
  //res.send('respond with a goods');

  // 查询数据
  // err：查询状态
  // doc：数据
  // 这时候，前端抓取数据时，访问 http://127.0.0.1:3000/goods 即可，不过因为跨域需要弄一个代理转换

  let sort = req.param('sort');           // 排序（倒序还是正序）
  let page = req.param('page');           // 第几页
  let pageSize = req.param('pageSize');   // 每月显示多少条

  let skip = (page-1)*pageSize;           // 跳过多少条数据

  let params = {};

  console.log(sort,skip,pageSize);

  // find 搜索数据
  // skip 跳过多少条
  // limit 每页多少条
  let goodsModel = Goods.find(params).skip(skip);//.limit(pageSize);
  console.log(goodsModel);

  // 排序
  //goodsModel.sort({'salePrice':sort});

  goodsModel.exec(function(err,doc){
      if(err){
        // 返回错误信息
        res.json({
            code:"1",
            message:err.message,
        })
      }else{
        // json格式返回数据
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
