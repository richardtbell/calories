const { FoodEntry } = require('../repositories/FoodEntry');

const deleteEntry = async (req, res) => {
  const { unit, quantity, name, time, calories } = req.body;

  await FoodEntry.deleteOne({
    name,
    unit,
    quantity,
    time,
    calories,
  });
  res.sendStatus(204);
};
module.exports = { deleteEntry };
