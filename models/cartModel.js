var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cartModel = new mongoose.Schema({
    totalCost: {type: Number, default: 0},
    items: [{type: Schema.Types.ObjectId, ref: 'Widget'}]
});

module.exports = mongoose.model('Cart', cartModel);
