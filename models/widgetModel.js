var mongoose = require('mongoose');

var widgetModel = new mongoose.Schema({
    name: {type: String},
    type: {type: String},
    cost: {type: Number},
    image: {type: String}
});

module.exports = mongoose.model('Widget', widgetModel);
