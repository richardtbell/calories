import React from 'react';
import { Button, Grid, TextField } from '@mui/material';
import { getCalorieLimit, setCalorieLimit } from '../../api/calorieLimit';

const SetCalorieLimit = () => {
  const [calorieLimitState, setCalorieLimitState] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(
    () => async () => {
      const response = await getCalorieLimit();
      setCalorieLimitState(response.data.calorieLimit);
      setIsLoading(false);
    },
    []
  );
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const calorieLimit = data.get('calorie limit');
    await setCalorieLimit(calorieLimit);
  };
  const handleChange = (e, v) => {
    setCalorieLimitState(e.target.value);
  };

  if (!isLoading) {
    return (
      <form onSubmit={handleSubmit}>
        <Grid container direction="row" justify="center" spacing={2}>
          <TextField
            label="Set Calorie Limit"
            name="calorie limit"
            value={calorieLimitState}
            onChange={handleChange}
          />

          <Button variant="contained" type="submit">
            Save
          </Button>
        </Grid>
      </form>
    );
  }
};

export default SetCalorieLimit;
