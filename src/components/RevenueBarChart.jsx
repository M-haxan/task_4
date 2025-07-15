import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Typography, Box } from '@mui/material';

const RevenueBarChart = ({ chart }) => (
  <Box className="p-4 shadow-md bg-white rounded-xl w-full">
    <Typography variant="h6">{chart.title}</Typography>
    <Typography variant="body2" color="text.secondary">{chart.subtitle}</Typography>
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={chart.data} barCategoryGap="20%">
        <XAxis dataKey="date" />
        <YAxis tickFormatter={v => `$${v.toLocaleString()}`} />
        <Tooltip formatter={(v) => `$${v.toLocaleString()}`} />
        <Legend />
        <Bar dataKey="projected" name="Projected revenue" fill="#3366FF" barSize={20} />
        <Bar dataKey="actual" name="Actual revenue" fill="#B3D1FF" barSize={20} />
      </BarChart>
    </ResponsiveContainer>
  </Box>
);

export default RevenueBarChart;
