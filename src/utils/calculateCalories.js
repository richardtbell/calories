const roundToTwo = (num) => {
  return +(Math.round(num + 'e+2') + 'e-2');
};

const calculateCalories = ({
  selection: {
    serving_qty,
    serving_unit,
    nf_calories,
    alt_measures,
    serving_weight_grams,
  },
  unit,
  quantity,
}) => {
  if (serving_unit === unit) {
    if (serving_qty === quantity) {
      return nf_calories;
    }
    return roundToTwo((nf_calories / serving_qty) * quantity);
  }

  const perGram = nf_calories / serving_weight_grams;
  const measureUsed = alt_measures.find((m) => m.measure === unit);

  const gramsConsumed =
    (measureUsed.serving_weight / measureUsed.qty) * quantity;
  const calories = gramsConsumed * perGram;

  return roundToTwo(calories);
};
export { calculateCalories, roundToTwo };
