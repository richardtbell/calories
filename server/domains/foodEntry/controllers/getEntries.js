const { formatISO } = require('date-fns');
const { User } = require('../../user/repositories/User');

const calculateTotalCalories = (entries) =>
  entries.reduce((total, entry) => total + entry.calories, 0);

const formatEntry = (e) => ({
  name: e.name,
  unit: e.unit,
  time: e.time,
  quantity: e.quantity,
  calories: parseFloat(e.calories),
});
const dateAscending = (a, b) => new Date(b.time) - new Date(a.time);

const groupByDate = (entries) => {
  const byDateObj = entries.reduce((byDate, entry) => {
    const date = formatISO(entry.time, { representation: 'date' });
    if (!byDate[date]) {
      byDate[date] = [];
    }
    byDate[date].push(entry);
    return byDate;
  }, {});
  return Object.keys(byDateObj).map((date) => ({
    date,
    entries: byDateObj[date],
    totalCalories: calculateTotalCalories(byDateObj[date]),
  }));
};

const findFoodEntries = async (user, query) => {
  const foundUser = await User.findOne({ username: user.username }).populate(
    'foodEntries'
  );
  const entries = await foundUser.foodEntries;

  const groupedByDate = groupByDate(
    entries.map(formatEntry).sort(dateAscending)
  );

  return groupedByDate.filter(
    ({ date }) => date >= query.from && date <= query.to
  );
};

const getEntries = async (req, res) => {
  const { query } = req;

  res.send(await findFoodEntries(req.user, query));
};
module.exports = {
  getEntries,
  findFoodEntries,
  formatEntry,
  groupByDate,
  dateAscending,
};
