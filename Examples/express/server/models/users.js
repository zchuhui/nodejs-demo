var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// 定义数据结构
var productSchema = new Schema({
    "userId":String,
    "userName":String,
    "userPwd":String,
    "productImage":String,
    "orderList":Array,
    "cartList":Array,
    "addressList":Array
});

// 到处数据modal，对应数据的collection事“users”,匹配是要用“User”
module.exports = mongoose.model('User',productSchema);



