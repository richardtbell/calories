import React from 'react';
import { Button, Grid } from '@mui/material';
import FoodInput from './FoodInput';
import Measurements from './Measurements';
import { getFoodDetails } from '../../api/nutritionix';
import logFood from '../../api/logFood';
import ManualAdd from './ManualAdd';

const AddNewFood = ({ setItems, dateRange, user, handleClose }) => {
  const [selection, setSelection] = React.useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const response = await logFood({ data, selection, dateRange, user });

    handleClose();
    setSelection();
    setItems(response.data);
  };

  const handleSelectionChange = async (e, v) => {
    setSelection();
    const response = await getFoodDetails(v);
    setSelection(response.data.foods[0]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container justify="center" direction="row" spacing={2}>
        <Grid item xs={12}>
          <FoodInput handleSelectionChange={handleSelectionChange} />
        </Grid>
        {selection && <Measurements selection={selection} />}
        {!selection && <ManualAdd />}
        <Grid item xs={12}>
          <Button variant="contained" type="submit">
            Add Food
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddNewFood;
