import React from 'react';
import DailyFoodLog from '../components/FoodLog/DailyFoodLog';
import { useNavigate } from 'react-router-dom';
import { useSessionStorage } from '../hooks/useSessionStorage';
import { subDays } from 'date-fns';
import { formatDate } from '../utils/date';
import { Divider } from '@mui/material';
import AddNewFoodModal from '../components/AddFood/AddNewFoodModal';
import { getFoodLogEntries } from '../api/foodLogEntries';

const FoodLog = () => {
  const [token] = useSessionStorage('token', '');
  const navigate = useNavigate();
  const [items, setItems] = React.useState();
  const today = new Date();
  const defaultDateRange = {
    to: formatDate(today),
    from: formatDate(subDays(today, 7)),
  };
  const [dateRange, setDateRange] = React.useState(defaultDateRange);

  React.useEffect(() => {
    if (token === '') {
      navigate('/login');
    }
  }, [token, navigate]);

  const fetchItems = React.useCallback(async () => {
    const response = await getFoodLogEntries(dateRange);
    setItems(response.data);
  }, [setItems, dateRange]);

  return (
    <>
      <AddNewFoodModal
        setItems={setItems}
        dateRange={dateRange}
        buttonText="Add new food"
      />
      <Divider style={{ marginTop: 10 }} />
      <DailyFoodLog
        items={items}
        fetchItems={fetchItems}
        dateRange={dateRange}
        setDateRange={setDateRange}
      />
    </>
  );
};

export default FoodLog;
