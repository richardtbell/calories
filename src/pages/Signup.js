import { Button, Grid, TextField } from '@mui/material';
import React from 'react';
import { signup } from '../api/auth';
import { useSessionStorage } from '../hooks/useSessionStorage';

const Signup = () => {
  const [, setToken] = useSessionStorage('token', '');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const response = await signup(data);
    window.location.pathname = '/';
    setToken(response.data.accessToken);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container direction="column" justify="center" spacing={2}>
        <Grid item xs={12}>
          <TextField label="Username" name="username" />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Password" name="password" type="password" />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Role" name="role" />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" type="submit">
            Sign up
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
export default Signup;
