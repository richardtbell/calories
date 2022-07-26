import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSessionStorage } from '../hooks/useSessionStorage';
import SetCalorieLimit from '../components/CalorieLimit/SetCalorieLimit';

const Settings = () => {
  const [token] = useSessionStorage('token', '');
  const navigate = useNavigate();
  React.useEffect(() => {
    if (token === '') {
      navigate('/login');
    }
  }, [token, navigate]);

  return (
    <>
      <SetCalorieLimit />
    </>
  );
};

export default Settings;
