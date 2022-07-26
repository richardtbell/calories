import axios from 'axios';
import config from '../utils/config';

const getFoodDetails = (foodName) =>
  axios.post(
    `${config.NUTRIONIX_BASE_URL}/v2/natural/nutrients`,
    { query: foodName },
    {
      headers: {
        'x-app-id': config.APP_ID,
        'x-app-key': config.APP_KEY,
        'Content-Type': 'application/json',
      },
    }
  );

const getAutoCompleteOptions = async (foodName) => {
  const response = await axios.get(
    `${config.NUTRIONIX_BASE_URL}/v2/search/instant?query=${foodName}`,
    {
      headers: {
        'x-app-id': config.APP_ID,
        'x-app-key': config.APP_KEY,
      },
    }
  );
  return [...response.data.common, ...response.data.branded];
};
export { getFoodDetails, getAutoCompleteOptions };
