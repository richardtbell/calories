const {
  formatEntry,
  groupByDate,
  dateAscending,
} = require('../../foodEntry/controllers/getEntries');
const { User } = require('../../user/repositories/User');

const getEntries = async (req, res) => {
  const users = await User.find().populate('foodEntries');
  const formatted = users.map((user) => ({
    username: user.username,
    calorieLimit: user.calorieLimit,
    foodEntries: groupByDate(
      user.foodEntries.map(formatEntry).sort(dateAscending)
    ),
  }));
  res.send(formatted);
};
module.exports = { getEntries };
