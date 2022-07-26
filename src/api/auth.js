import axios from 'axios';
import config from '../utils/config';

const signup = async (data) => {
  const username = data.get('username');
  const password = data.get('password');
  const role = data.get('role');

  return axios.post(
    `${config.API_BASE_URL}/signup`,
    { username, password, role },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
};

const login = async (data) => {
  const username = data.get('username');
  const password = data.get('password');

  return axios.post(
    `${config.API_BASE_URL}/login`,
    { username, password },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
};

export { signup, login };
