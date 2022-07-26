const { subDays, addDays, formatISO } = require('date-fns');
const { FoodEntry } = require('../../foodEntry/repositories/FoodEntry');

const formatDate = (date) => formatISO(date, { representation: 'date' });

const getAverage = async () => {
  const last7Days = await getLast7();
  const users = last7Days.map((entry) => entry.user);
  const countUsers = new Set(users).size;
  const totalCalories = last7Days.reduce((total, current) => {
    return total + parseFloat(current.calories);
  }, 0);
  return totalCalories / countUsers;
};
const getLast7 = async () => {
  const today = new Date();
  const last7Days = await FoodEntry.find({
    time: {
      $gte: formatDate(subDays(today, 7)),
      $lt: formatDate(addDays(today, 1)),
    },
  }).populate('user');
  return last7Days;
};

const getPrev7 = async () => {
  const today = new Date();
  const last7Days = await FoodEntry.find({
    time: {
      $gte: formatDate(subDays(today, 14)),
      $lt: formatDate(subDays(today, 7)),
    },
  }).populate('user');
  return last7Days;
};

const getLast7Count = async () => {
  const last7 = await getLast7();
  return last7.length;
};

const getPrev7Count = async () => {
  const prev7 = await getPrev7();
  return prev7.length;
};

const getReport = async (req, res) => {
  const average = await getAverage();
  const last7 = await getLast7Count();
  const prev7 = await getPrev7Count();

  res.send({ average, last7, prev7 });
};
module.exports = { getReport };
