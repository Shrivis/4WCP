import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
export default function MediaControlCard1({count}) {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'inline-block' , width: '17rem',marginLeft:'4.5rem'}} >
      <Box sx={{ display: 'flex', flexDirection: 'column', float:'left' , width:'70%' }}>
        <CardContent sx={{ }}>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB00lEQVR4nO2WzTIDQRDHR8kT+Er3xlkV8XXz8Rg4IE+BJ+ARxNXn0UU8Qap2OpQjJ1WUO6K47vaoUS1B2E12k2zkwL+qLzPb+5vu6Zlppf7VQLaoUj45c4YwZwjWKoY5GZM5lbQ8nZliwkPW8GQIbZixhjITHnhnQxNtA20RBypAfK0HDC4AX2UB9sLpbw3qOiOs4TouMGQBt55OZ5uCejqdZY0vrUJr4C/WhbF4kZ4N97GGm3ahn3DCO+vCYCSYCY+SgtZEvt84xW5msplCaqbgPHKmG0V7mDQ0MmpbVCk5i50DQzn0kvFLznynoB/m66HZANhoXA1Jzz1r3DQaCj/GfdawXTH0v/vBifgw4UMAXnKWQ8CwEZKehfdtsKrHaLyqGd/+qgvI10Av5dvq+GIwaliPByZYjAbjTii4BEvxwC6uBMH4wIRbRsNpINUEeYEyIX/z01AQn9ip9rtVXPZY9TLB468fJ5E8Zx0E76l6kkecCU3iUELjldLjdcGdipoJdlVXnsUiDkSC3+EujCXSCBA823MYjQXtauvzIWnY5DlrqtkjNFLBsmWqXXlS7bKABudc5gQYWb2tSC4ZuX0q12u1oXdxxXfTMzLX0k/VX9EbsmilXotITyYAAAAASUVORK5CYII="/>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Pending Request
          </Typography>
        </CardContent>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column',fontSize:'2rem',color:'blue',float:'left', width:'20% ', marginTop:'1.5rem',marginLeft:'0.5rem', textAlign:'center'}}>{count}</Box>
    </Card>
  );
}