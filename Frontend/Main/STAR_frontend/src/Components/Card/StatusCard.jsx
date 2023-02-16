import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
export default function MediaControlCard() {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'inline-block' }} className="mx-5">
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ }}>
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Mac Miller
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}