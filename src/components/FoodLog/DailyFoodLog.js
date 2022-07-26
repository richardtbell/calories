import React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import FoodLogDay from './FoodLogDay';
import { getCalorieLimit } from '../../api/calorieLimit';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Box, Button, Grid, TextField } from '@mui/material';
import { DATE_FORMAT, formatDate } from '../../utils/date';

const DailyFoodLog = ({ items, fetchItems, dateRange, setDateRange }) => {
  const [calorieLimit, setCalorieLimit] = React.useState();

  React.useEffect(() => fetchItems, [fetchItems]);
  React.useEffect(
    () => async () => {
      const calResponse = await getCalorieLimit();
      setCalorieLimit(calResponse.data.calorieLimit);
    },
    []
  );
  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetchItems();
  };
  const handleFromChange = (e) => {
    setDateRange({ ...dateRange, from: formatDate(e) });
  };
  const handleToChange = (e) => {
    setDateRange({ ...dateRange, to: formatDate(e) });
  };

  return (
    <Box style={{ marginTop: 20 }}>
      <List
        sx={{ width: '100%', bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Food log
          </ListSubheader>
        }
      >
        <form onSubmit={handleSubmit}>
          <Grid container justify="center" direction="row">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="From"
                value={dateRange.from}
                onChange={handleFromChange}
                inputFormat={DATE_FORMAT}
                name="from"
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="To"
                value={dateRange.to}
                onChange={handleToChange}
                inputFormat={DATE_FORMAT}
                name="to"
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <Button variant="contained" type="submit">
              Filter
            </Button>
          </Grid>
        </form>
        {items &&
          items.map((item) => (
            <FoodLogDay
              item={item}
              key={item.date}
              calorieLimit={calorieLimit}
              fetchItems={fetchItems}
            />
          ))}
      </List>
    </Box>
  );
};

export default DailyFoodLog;
