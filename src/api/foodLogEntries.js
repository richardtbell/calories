import axios from 'axios';
import config from '../utils/config';
import { getAuthHeader } from './helpers/getAuthHeader';

const getFoodLogEntries = (dateRange) => {
  const params = new URLSearchParams([
    ['from', dateRange.from],
    ['to', dateRange.to],
  ]);

  return axios.get(`${config.API_BASE_URL}/entries`, {
    params,
    headers: getAuthHeader(),
  });
};

const deleteFoodLogEntry = (entry) => {
  return axios.delete(`${config.API_BASE_URL}/entry`, {
    data: { ...entry },
    headers: getAuthHeader(),
  });
};

export { getFoodLogEntries, deleteFoodLogEntry };
