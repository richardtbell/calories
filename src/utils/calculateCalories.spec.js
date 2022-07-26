import { calculateCalories } from './calculateCalories';

describe('calculateCalories', () => {
  const mockSelection = {
    food_name: 'sausage',
    serving_qty: 1,
    serving_unit: 'link (4" long x 1-1/8" dia)',
    serving_weight_grams: 68,
    nf_calories: 210.12,
    alt_measures: [
      {
        serving_weight: 68,
        measure: 'link (4" long x 1-1/8" dia)',
        seq: 1,
        qty: 1,
      },
      {
        serving_weight: 16,
        measure: 'link, little (2" long x 3/4" dia)',
        seq: 2,
        qty: 1,
      },
      { serving_weight: 56.7, measure: 'oz', seq: 80, qty: 2 },
      { serving_weight: 100, measure: 'g', seq: null, qty: 100 },
    ],
  };
  describe('Given unit is default', () => {
    const unit = mockSelection.serving_unit;
    describe('And quantity is default', () => {
      const quantity = mockSelection.serving_qty;
      it('Then it should return default calories', () => {
        const result = calculateCalories({
          selection: mockSelection,
          unit,
          quantity,
        });
        expect(result).toBe(mockSelection.nf_calories);
      });
    });
    describe('And quantity is twice the default', () => {
      const quantity = mockSelection.serving_qty * 2;
      it('Then it should return twice the default calories', () => {
        const result = calculateCalories({
          selection: mockSelection,
          unit,
          quantity,
        });
        expect(result).toBe(mockSelection.nf_calories * 2);
      });
    });
    describe('And quantity is one seventh the default', () => {
      const quantity = mockSelection.serving_qty / 7;
      it('Then it should return one seventh the default calories to two decimal places', () => {
        const result = calculateCalories({
          selection: mockSelection,
          unit,
          quantity,
        });
        expect(result).toBe(30.02);
      });
    });
    describe('And quantity is zero', () => {
      const quantity = 0;
      it('Then it should return zero calories', () => {
        const result = calculateCalories({
          selection: mockSelection,
          unit,
          quantity,
        });
        expect(result).toBe(0);
      });
    });
  });
  describe('Given unit is grams', () => {
    const unit = 'g';
    describe('And quantity is zero', () => {
      const quantity = 0;
      it('Then it should return zero calories', () => {
        const result = calculateCalories({
          selection: mockSelection,
          unit,
          quantity,
        });
        expect(result).toBe(0);
      });
    });
    describe('And quantity is left as default (1)', () => {
      const quantity = mockSelection.serving_qty;
      it('Then it should return calories divided by serving weight in grams', () => {
        const result = calculateCalories({
          selection: mockSelection,
          unit,
          quantity,
        });
        expect(result).toBe(
          mockSelection.nf_calories / mockSelection.serving_weight_grams
        );
      });
    });
    describe('And quantity is 137', () => {
      const quantity = 137;
      it('Then it should return 423.33 calories', () => {
        const result = calculateCalories({
          selection: mockSelection,
          unit,
          quantity,
        });
        expect(result).toBe(423.33);
      });
    });
  });
  describe('Given unit is oz', () => {
    const unit = 'oz';
    describe('And quantity is zero', () => {
      const quantity = 0;
      it('Then it should return zero calories', () => {
        const result = calculateCalories({
          selection: mockSelection,
          unit,
          quantity,
        });
        expect(result).toBe(0);
      });
    });
    describe('And quantity is left as default (1)', () => {
      const quantity = mockSelection.serving_qty;
      it('Then it should return calories divided by serving weight in grams multiplied by serving weight of oz / quantity of oz', () => {
        const result = calculateCalories({
          selection: mockSelection,
          unit,
          quantity,
        });
        expect(result).toBe(87.6);
      });
    });
    describe('And quantity is 137', () => {
      const quantity = 137;
      it('Then it should return 12001.41 calories', () => {
        const result = calculateCalories({
          selection: mockSelection,
          unit,
          quantity,
        });
        expect(result).toBe(12001.41);
      });
    });
  });
});
