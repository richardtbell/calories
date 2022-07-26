import React from 'react';
import { Button, Grid, TextField } from '@mui/material';
import updateEntry from '../../api/updateEntry';
import ManualAdd from '../AddFood/ManualAdd';

const EditFoodEntry = ({ entry, handleClose, fetchItems }) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    await updateEntry({ original: entry, newValue: data });

    handleClose();
    fetchItems();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container justify="center" direction="row" spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Enter food name"
            name="name"
            defaultValue={entry.name}
          />
        </Grid>
        <ManualAdd defaultValues={entry} />
        <Grid item xs={12}>
          <Button variant="contained" type="submit">
            Update entry
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default EditFoodEntry;
