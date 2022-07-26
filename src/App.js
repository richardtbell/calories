import { Container, CssBaseline, Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FoodLog from './pages/FoodLog';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Settings from './pages/Settings';
import Layout from './components/Layout/layout';
import React from 'react';
import { useSessionStorage } from './hooks/useSessionStorage';
import NotFound from './pages/NotFound';
import Report from './pages/admin/Report';
import Admin from './pages/admin/Admin';
import parseJwt from './utils/parseJwt';

function App() {
  const [token] = useSessionStorage('token', '');
  const [isAdmin, setIsAdmin] = React.useState(false);
  React.useEffect(() => {
    if (token) {
      const { role } = parseJwt(token);
      setIsAdmin(role === 'admin');
    }
  }, [token]);

  return (
    <div className="App">
      <Container component="main">
        <CssBaseline />
        <Box
          sx={{
            alignItems: 'center',
          }}
        >
          <Router>
            <Layout isAdmin={isAdmin}>
              <Routes>
                <Route path="/" element={<FoodLog />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/settings" element={<Settings />} />
                {isAdmin && (
                  <>
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/admin/report" element={<Report />} />
                  </>
                )}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </Router>
        </Box>
      </Container>
    </div>
  );
}

export default App;
