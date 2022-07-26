import axios from 'axios';
import config from '../utils/config';
import { getAuthHeader } from './helpers/getAuthHeader';

const logFood = async ({ data, selection, dateRange, user }) => {
  const quantity = data.get('quantity');
  const unit = data.get('unit');
  const time = data.get('time');
  const calories = data.get('calories');
  const name = data.get('name');

  if (!selection && !!name) {
    selection = { food_name: name };
  }

  return await axios.post(
    `${config.API_BASE_URL}${user ? '/admin' : ''}/log-food`,
    {
      selection,
      unit,
      quantity,
      calories,
      time,
      dateRange,
      user,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        ...getAuthHeader(),
      },
    }
  );
};
export default logFood;
