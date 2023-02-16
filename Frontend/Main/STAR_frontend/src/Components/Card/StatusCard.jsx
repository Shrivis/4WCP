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
    <Card sx={{ display: 'inline-block' , width: '17rem',marginLeft:'2rem'}} >
      <Box sx={{ display: 'flex', flexDirection: 'column' ,float:'left' , width:'70%'}}>
        <CardContent sx={{ }}>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABrklEQVR4nO2VPywEQRSH50IoNETIKVSEy957i1JDotBqiGhEJUqd8jSqK2TNu0soFBQSnUaiukQjUYlc9o31r7pKRBSICCt7N3s2IrjDJJL7km02M/vNvPfbGSFq1PivSMZFqXBv1U10GJOSwjFS6AfPikpOGpEuX/Y1k4JCUcxwkT6ym4yISeF6IJWMLxk3OWpEuqLskUBYEsOaEWlQUsl4XuotFLLH2GJELBkyYaCCcJmRujBIjM+lQOGmEanjdTdKRlf39crx+tuMiElhulxixnEjUsezB0jBkw7UTsUfkG6iVTJkKzllUnmrgRQc691eU96KVy5mmAvLJRUs+b6IfT0HF8M5mRN7WlRD9sxuJ0Z+6xVsBaH5RIqk8FGP3a1KGhL88KQwF9n5wUcJTeWG6yXjoQ7TbeY02Sl+SipvNUjGjUhKz7KMvdExUuFCeXGMs+K38H0RK96l+swtBucEh4pS1+4hhnv9PvedLFQMMc6EfZSMD+TiFDHs6zbcOV6yS/zlbUMMN5EzWPcf58Vf43iWJRVcRkO37U/UCRNQ3oqXygyF92GrUUO84xVJkSUkFsTaugAAAABJRU5ErkJggg=="/>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Approved Requests
          </Typography>
        
        </CardContent>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column',fontSize:'2rem',color:'blue',float:'left', width:'20% ', marginTop:'1.5rem',marginLeft:'0.5rem', textAlign:'center'}}>0 </Box>
    </Card>
  );
}