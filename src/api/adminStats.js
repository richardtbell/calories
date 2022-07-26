import axios from 'axios';
import config from '../utils/config';
import { getAuthHeader } from './helpers/getAuthHeader';

const getAdminStats = () =>
  axios.get(`${config.API_BASE_URL}/admin/report`, {
    headers: getAuthHeader(),
  });

export { getAdminStats };
