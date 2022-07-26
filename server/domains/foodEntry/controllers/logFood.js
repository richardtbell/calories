const { User } = require('../../user/repositories/User');
const { FoodEntry } = require('../repositories/FoodEntry');
const { findFoodEntries } = require('./getEntries');

const logFood = async (req, res) => {
  const { unit, quantity, selection, time, calories, dateRange } = req.body;
  const user = await User.findOne({ username: req.user.username });

  const food = new FoodEntry({
    name: selection.food_name,
    unit,
    quantity,
    time: new Date(time),
    calories,
    user,
  });
  await food.save();

  user.foodEntries.push(food);
  await user.save();
  res.send(await findFoodEntries(req.user, dateRange));
};
module.exports = { logFood };
