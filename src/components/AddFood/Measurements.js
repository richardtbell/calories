import React from 'react';
import { Autocomplete, Grid, TextField } from '@mui/material';
import { LocalizationProvider, DateTimePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { calculateCalories } from '../../utils/calculateCalories';

const Measurements = ({ selection }) => {
  const [quantity, setQuantity] = React.useState(selection.serving_qty);
  const [unit, setUnit] = React.useState(selection.serving_unit);
  const [calories, setCalories] = React.useState(
    calculateCalories({ selection, unit, quantity })
  );

  React.useEffect(() => {
    setCalories(calculateCalories({ unit, quantity, selection }));
  }, [unit, quantity, selection]);

  const [time, setTime] = React.useState(new Date());

  const handleChange = (newTime) => {
    setTime(newTime);
  };

  const unitOptions = selection.alt_measures.map((m) => m.measure);
  if (!unitOptions.includes(selection.serving_unit)) {
    unitOptions.push(selection.serving_unit);
  }
  return (
    <>
      <Grid item xs={2}>
        <TextField
          id="quantity"
          name="quantity"
          label="quantity"
          onChange={(e) => {
            setQuantity(e.target.value);
          }}
          defaultValue={selection.serving_qty}
        />
      </Grid>
      <Grid item xs={6}>
        <Autocomplete
          disablePortal
          id="unit"
          options={unitOptions}
          onChange={(e, v) => {
            setUnit(v);
          }}
          defaultValue={selection.serving_unit}
          renderInput={(params) => (
            <TextField {...params} label="unit" name="unit" />
          )}
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          id="calories"
          name="calories"
          label="calories"
          value={calories}
        />
      </Grid>
      <Grid item xs={12}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            label="Time"
            value={time}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} name="time" />}
          />
        </LocalizationProvider>
      </Grid>
    </>
  );
};

export default Measurements;
