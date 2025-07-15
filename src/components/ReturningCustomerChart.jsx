import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Typography, Box } from '@mui/material';

const ReturningCustomerChart = ({ chart }) => (
  <Box className="p-4 shadow-md bg-white rounded-xl w-full">
    <Typography variant="h6">{chart.title}</Typography>
    <Typography variant="body2" color="text.secondary">{chart.subtitle}</Typography>
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={chart.data}>
        <XAxis dataKey="month" />
        <YAxis tickFormatter={v => `${v}%`} domain={[0, 100]} />
        <Tooltip formatter={(v) => `${v}%`} />
        <Legend />
        <Line type="monotone" dataKey="fourth" stroke="#7C3AED" name="Fourth time" strokeDasharray="5 5" />
        <Line type="monotone" dataKey="third" stroke="#60A5FA" name="Third time" />
        <Line type="monotone" dataKey="second" stroke="#2563EB" name="Second time" />
      </LineChart>
    </ResponsiveContainer>
  </Box>
);

export default ReturningCustomerChart;
