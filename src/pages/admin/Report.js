import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import { getAdminStats } from '../../api/adminStats';
import { roundToTwo } from '../../utils/calculateCalories';

const Report = () => {
  const [adminStats, setAdminStats] = React.useState({
    average: 0,
    last7: 0,
    prev7: 0,
  });
  React.useEffect(
    () => async () => {
      const stats = await getAdminStats();
      setAdminStats(stats.data);
    },
    []
  );
  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Average calories per user over last 7 days
          </Typography>
          <Typography variant="h5" component="div">
            {`${roundToTwo(adminStats.average)}kcals`}
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Number of entries in last 7 days
          </Typography>
          <Typography variant="h5" component="div">
            {`${adminStats.last7}`}
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Number of entries in previous 7 days
          </Typography>
          <Typography variant="h5" component="div">
            {`${adminStats.prev7}`}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};
export default Report;
