import React from 'react';
import { format } from 'date-fns';
import {
  Divider,
  Grid,
  IconButton,
  ListItem,
  ListItemText,
} from '@mui/material';
import { Delete } from '@mui/icons-material';
import { deleteFoodLogEntry } from '../../api/foodLogEntries';
import EditFoodModal from './EditFoodModal';

const FoodLogEntry = ({ entry, fetchItems }) => {
  const handleDelete = async () => {
    await deleteFoodLogEntry(entry);
    await fetchItems();
  };
  return (
    <>
      <ListItem>
        <Grid container direction="row" justify="start" spacing={2}>
          <Grid item xs={3}>
            <ListItemText primary={format(new Date(entry.time), 'hh:mm aaa')} />
          </Grid>
          <Grid item xs={3}>
            <ListItemText primary={entry.name} />
          </Grid>
          <Grid item xs={3}>
            <ListItemText primary={`${entry.quantity} ${entry.unit}`} />
          </Grid>
          <Grid item xs={1}>
            <ListItemText
              primary={`${entry.calories}kcal`}
              style={{ textAlign: 'right' }}
            />
          </Grid>
          <Grid item xs={2}>
            <EditFoodModal entry={entry} fetchItems={fetchItems} />
            <IconButton onClick={handleDelete}>
              <Delete />
            </IconButton>
          </Grid>
        </Grid>
      </ListItem>
      <Divider />
    </>
  );
};
export default FoodLogEntry;
