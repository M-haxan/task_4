import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const ReusableTable = ({ url, columns = [], title = 'Table' }) => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!url) {
      setError("❌ No data URL provided.");
      setLoading(false);
      return;
    }

    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.statusText}`);
        }
        return res.json();
      })
      .then(data => {
        setRows(data);
        setError('');
      })
      .catch(err => {
        console.error("Fetch error:", err);
        setError("❌ Could not load data.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return (
    <Paper sx={{ height: 500,
               width: {
    xs: '90%',   // Extra-small screens (mobile)
    sm: '120%',
    md: '110%',
    lg: '125%',   // Large screens (desktop)
    xl: '150%'    // Extra-large screens
  },  
      overflowX:'auto', p: 2 }} >
    

      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" height="100%">
          <CircularProgress />
        </Box>
      ) : error ? (
        <Typography color="error">{error}</Typography>
      ) : columns.length === 0 ? (
        <Typography color="warning.main">⚠️ No columns defined for table.</Typography>
      ) : (
        <DataGrid
          rows={rows}
          columns={columns}
          pageSizeOptions={[5, 10, 20]}
          checkboxSelection
          sx={{ border: 0 }}
        />
      )}
    </Paper>
  );
};

export default ReusableTable;
