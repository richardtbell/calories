const mongoose = require('mongoose');

const foodEntrySchema = new mongoose.Schema({
  name: String,
  unit: String,
  quantity: String,
  time: Date,
  calories: mongoose.Decimal128,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const FoodEntry = mongoose.model('FoodEntry', foodEntrySchema);

module.exports = { FoodEntry };
