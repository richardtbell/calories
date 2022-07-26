const getAuthHeader = () => {
  const token = JSON.parse(sessionStorage.getItem('token'));
  return { authorization: `Bearer ${token}` };
};
module.exports = { getAuthHeader };
