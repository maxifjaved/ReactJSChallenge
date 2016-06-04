var mongoose = require('mongoose');

var itemSchema = new mongoose.Schema({
  itemId: { type: String, unique: true, index: true },
  name: String,
  image: String,
  description: String,
  price: { type: Number, default: 0 },
});

module.exports = mongoose.model('Item', itemSchema);