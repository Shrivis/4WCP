import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
export default function MediaControlCard2() {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'inline-block', width: '17rem',marginLeft:'4.5rem'}} >
      <Box sx={{ display: 'flex', flexDirection: 'column' ,float:'left' , width:'70%' }}>
        <CardContent sx={{ }}>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAx0lEQVR4nO3WTQ6CMBAF4J7EGA8jGhLhDeH4LrwEpZ2FpgmS6oJ0oD+bvg2rma9t2jBK1dTkju66Mw/DdW+9q3U9REXTOJ4s8DSAmYGHGAVuBtAWeGmii2i1hmi2RG/3ZaAVoO1PLVGzb9WuQeDO99QcbhQNlTSMjoY0ToZuAcnRb/4gdlhy1MftAi5PhpOj3q5XeM4Bs3/URHmOmktcLu77e/bnxBtoMpwD0Og4C9BoOBM16409+luUDBNTqUGg2OhTU6Mi5AOCIYnvdHhFwwAAAABJRU5ErkJggg=="/>
          <Typography variant="subtitle1" color="text.secondary" component="div">
             Rejected Requests
          </Typography>
        </CardContent>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column',fontSize:'2rem',color:'blue',float:'left', width:'20% ', marginTop:'1.5rem',marginLeft:'0.5rem', textAlign:'center'}}>0 </Box>
    </Card>
  );
}