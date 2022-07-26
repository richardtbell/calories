const { User } = require('../../user/repositories/User');
const { FoodEntry } = require('../../foodEntry/repositories/FoodEntry');
const { getEntries } = require('./entries');

const logFood = async (req, res) => {
  const { unit, quantity, selection, time, calories } = req.body;
  const user = await User.findOne({ username: req.body.user.username });

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
  res.send(await getEntries(req, res));
};
module.exports = { logFood };
