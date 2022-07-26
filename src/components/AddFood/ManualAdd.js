import React from 'react';
import { Grid, TextField } from '@mui/material';
import { LocalizationProvider, DateTimePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const ManualAdd = ({ defaultValues }) => {
  const defaultTime = defaultValues ? new Date(defaultValues.time) : new Date();
  const [time, setTime] = React.useState(defaultTime);

  const handleChange = (newTime) => {
    setTime(newTime);
  };

  return (
    <>
      <Grid item xs={2}>
        <TextField
          id="quantity"
          name="quantity"
          label="quantity"
          defaultValue={defaultValues?.quantity}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          id="unit"
          name="unit"
          label="unit"
          defaultValue={defaultValues?.unit}
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          id="calories"
          name="calories"
          label="calories"
          defaultValue={defaultValues?.calories}
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

export default ManualAdd;
