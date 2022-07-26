const { FoodEntry } = require('../repositories/FoodEntry');

const updateEntry = async (req, res) => {
  const { original, newValue } = req.body;

  await FoodEntry.updateOne(
    {
      ...original,
    },
    { ...newValue }
  );
  res.sendStatus(204);
};
module.exports = { updateEntry };
