import axios from 'axios';
import config from '../utils/config';
import { getAuthHeader } from './helpers/getAuthHeader';

const setCalorieLimit = (calorieLimit) =>
  axios.post(
    `${config.API_BASE_URL}/calorie-limit`,
    { calorieLimit },
    {
      headers: { ...getAuthHeader(), 'Content-Type': 'application/json' },
    }
  );
const getCalorieLimit = () =>
  axios.get(`${config.API_BASE_URL}/calorie-limit`, {
    headers: getAuthHeader(),
  });

export { setCalorieLimit, getCalorieLimit };
