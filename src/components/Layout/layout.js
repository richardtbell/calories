import { Settings } from '@mui/icons-material';
import { Box, Button, Grid, IconButton } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children, isAdmin }) => (
  <>
    <Grid container>
      <Grid item xs={3}>
        <Link to="/">
          <Button size="small">Food Log</Button>
        </Link>
      </Grid>
      <Grid item xs={9} style={{ textAlign: 'right' }}>
        {isAdmin && (
          <>
            <Link to="admin">
              <Button size="small">Admin</Button>
            </Link>
            <Link to="admin/report">
              <Button size="small">Report</Button>
            </Link>
          </>
        )}
        <Link to="login">
          <Button variant="outlined" size="small">
            Log in
          </Button>
        </Link>
        <Link to="signup">
          <Button variant="outlined" size="small">
            Sign up
          </Button>
        </Link>
        <Link to="settings">
          <IconButton>
            <Settings />
          </IconButton>
        </Link>
      </Grid>
    </Grid>
    <Box
      sx={{
        marginTop: 8,
      }}
    >
      {children}
    </Box>
  </>
);
export default Layout;
