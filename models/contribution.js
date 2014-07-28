var mongoose = require('mongoose');

var contribution = new mongoose.Schema({
    hero: String,
    description: String,
    email: String,
    nickname: String
});

//  第一個參數應該是數據庫中collection的名字（會變成複數形式），第二個參數是對應的Schema變量
var Contribution = mongoose.model('Contribution', contribution);

module.exports = Contribution;