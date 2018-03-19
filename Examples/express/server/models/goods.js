var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// 定义数据结构
var productSchema = new Schema({
    "productId":String,
    "productName":String,
    "salePrice":Number,
    "productImage":String,
});

// 到处数据modal，对应数据的collection事“goods”,匹配是要用“Good”
module.exports = mongoose.model('Good',productSchema);



