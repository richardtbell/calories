const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: String,
  calorieLimit: Number,
  foodEntries: [{ type: mongoose.Schema.Types.ObjectId, ref: 'FoodEntry' }],
});

const User = mongoose.model('User', userSchema);

module.exports = { User, userSchema };
