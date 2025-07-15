import * as React from 'react';
import {
  BarChart,
  barClasses,
  barElementClasses,
  barLabelClasses,
} from '@mui/x-charts/BarChart';
import { Typography, Box, useTheme, useMediaQuery } from '@mui/material';

const chartData = {
  title: "Projection vs Actual",
  subtitle: "Actual earnings vs projected earnings",
  xAxis: ['Jul 04', 'Jul 05', 'Jul 06', 'Jul 07', 'Jul 08', 'Jul 09', 'Jul 10'],
  projected: [38000, 29000, 31000, 47000, 30000, 27000, 29000],
  actual: [44000, 20000, 46000, 45000, 42000, 41000, 43000],
};

export default function RevenueBarGradientChart() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const settings = {
    xAxis: [{ data: chartData.xAxis, scaleType: 'band' }],
    series: [
      { id: 'projected', data: chartData.projected, label: 'Projected', color: '#3366FF' },
      { id: 'actual', data: chartData.actual, label: 'Actual', color: '#B3D1FF' },
    ],
    height: isMobile ? 250 : 350, // Responsive height
    barLabel: 'value',
    margin: { left: 50, right: 20, top: 20, bottom: 30 },
    width: '700', // allow flexible width
     barCategoryGap: 10, // Space between category groups
  barGap: 10, // Space between individual bars inside a group
  };

  return (
    <Box className="p-4 shadow-md bg-white rounded-xl " sx={{
  width: {
    xs: '90%',
    sm: '100%',
    md: '100%',
    lg: '100%',
    xl: '100%',
  },
  height: 500,
  overflowX: 'auto',
  p: 2,
}}>
      <Typography variant="h6">{chartData.title}</Typography>
      <Typography variant="body2" color="text.secondary">{chartData.subtitle}</Typography>

      <Box sx={{ minWidth: isMobile ? 500 : '100%' }}>
        <BarChart
          {...settings}
          sx={{
            [`& .${barClasses.series}[data-series-id="actual"] .${barElementClasses.root}`]: {
              fill: 'url(#gradient)',
            },
            [`& .${barClasses.seriesLabels}[data-series-id="actual"] .${barLabelClasses.root}`]: {
              fontWeight: 'bold',
            },
          }}
        >
          <defs>
            <Gradient id="gradient" />
          </defs>
        </BarChart>
      </Box>
    </Box>
  );
}

function Gradient(props) {
  return (
    <linearGradient id="gradient" gradientTransform="rotate(90)" {...props}>
      <stop offset="5%" stopColor="#FF9800" />
      <stop offset="95%" stopColor="#F44336" />
    </linearGradient>
  );
}
