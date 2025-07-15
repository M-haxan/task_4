// import React from 'react';
// import { Box, Typography, Chip } from '@mui/material';
// import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

// const data = [
//   { name: 'Mon', completed: 1200, pending: 1000 },
//   { name: 'Tue', completed: 1400, pending: 1100 },
//   { name: 'Wed', completed: 900, pending: 1200 },
//   { name: 'Thu', completed: 1100, pending: 1000 },
//   { name: 'Fri', completed: 950, pending: 1100 },
//   { name: 'Sat', completed: 1000, pending: 1050 },
//   { name: 'Sun', completed: 1300, pending: 900 },
// ];

// export default function OrdersCard() {
//   return (
//     <Box className="w-full p-2 rounded bg-white" >
//       <Typography variant="subtitle2" color="text.secondary">
//         Total orders
//         <Chip label="-6.8%" size="small" color="warning" sx={{ ml: 1 }} />
//       </Typography>
//       <Typography variant="h5">16,247</Typography>
//       <Typography variant="caption" color="text.secondary">Last 7 days</Typography>

//       <ResponsiveContainer width="100%" height={150}>
//         <BarChart data={data}>
//           <XAxis dataKey="name" hide />
//           <Tooltip />
//           <Bar dataKey="completed" stackId="a" fill="#1976d2" />
//           <Bar dataKey="pending" stackId="a" fill="#e3f2fd" />
//         </BarChart>
//       </ResponsiveContainer>

//       <Box display="flex" justifyContent="space-between" mt={1}>
//         <Typography variant="caption" color="text.secondary">
//           <span style={{ color: '#1976d2', fontWeight: 'bold' }}>■</span> Completed 52%
//         </Typography>
//         <Typography variant="caption" color="text.secondary">
//           <span style={{ color: '#e3f2fd', fontWeight: 'bold' }}>■</span> Pending 48%
//         </Typography>
//       </Box>
//     </Box>
//   );
// }
import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const OrdersCard = ({ title, subtitle, percentage, percentageColor, content, chart }) => {
  return (
    <Card >
      <CardContent>
        <Typography variant="subtitle2" color="text.secondary">{title}</Typography>
        <Box display="flex" alignItems="center" justifyContent="space-between" mt={1}>
          <Typography variant="h5" fontWeight="bold">{subtitle}</Typography>
          <Typography variant="caption" sx={{ color: percentageColor }}>
            {percentage}
          </Typography>
        </Box>
        <Box className="flex justify-center" mt={2}>
          {chart}
        </Box>
        <Box className="" mt={2}>
          {content}
        </Box>
        
      </CardContent>
    </Card>
  );
};

export default OrdersCard;
