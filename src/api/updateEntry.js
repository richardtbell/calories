import axios from 'axios';
import config from '../utils/config';
import { getAuthHeader } from './helpers/getAuthHeader';

const updateEntry = async ({ original, newValue }) => {
  const quantity = newValue.get('quantity');
  const unit = newValue.get('unit');
  const time = newValue.get('time');
  const calories = newValue.get('calories');
  const name = newValue.get('name');
  console.log('values', {
    original,
    newValue: {
      name,
      unit,
      quantity,
      calories,
      time,
    },
  });

  return await axios.patch(
    `${config.API_BASE_URL}/entry`,
    {
      original,
      newValue: {
        name,
        unit,
        quantity,
        calories,
        time,
      },
    },
    {
      headers: {
        'Content-Type': 'application/json',
        ...getAuthHeader(),
      },
    }
  );
};
export default updateEntry;
