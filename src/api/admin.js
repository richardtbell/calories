import axios from 'axios';
import config from '../utils/config';
import { getAuthHeader } from './helpers/getAuthHeader';

const getAllEntries = () =>
  axios.get(`${config.API_BASE_URL}/admin/entries`, {
    headers: getAuthHeader(),
  });
export { getAllEntries };
