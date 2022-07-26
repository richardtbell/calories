const { User } = require('../repositories/User');

const getCalorieLimit = async (req, res) => {
  const user = await User.findOne({ username: req.user.username });
  res.send({ calorieLimit: user.calorieLimit });
};

const setCalorieLimit = async (req, res) => {
  const user = await User.findOneAndUpdate(
    { username: req.user.username },
    { calorieLimit: req.body.calorieLimit }
  );
  await user.save();
  res.send(user);
};

module.exports = { getCalorieLimit, setCalorieLimit };
