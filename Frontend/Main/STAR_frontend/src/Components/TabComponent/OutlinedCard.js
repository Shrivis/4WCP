import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ApprovalData from './ApprovalData'
import Button from 'react-bootstrap/Button';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function OutlinedCard() {
  const i=0                                                        // remove this after debugging :->
  return (
    <div>
    {

      //  ApprovalData.map((records,i)=>{                          improvise this map function :-) 
      <Card sx={{ minWidth: 275 ,  width: '40%', }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        id: {ApprovalData[i].id}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        resourseName: {ApprovalData[i].resourseName}
        </Typography>        
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        projectName: {ApprovalData[i].projectName}
        </Typography>        
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        periodStart: {ApprovalData[i].periodStart}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        periodEnd: {ApprovalData[i].periodEnd}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        hours: {ApprovalData[i].hours}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        expectedHours: {ApprovalData[i].expectedHours}
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small" variant="success">Accept</Button>
      <Button  size="small" variant="danger">Reject</Button>
      </CardActions>
    </Card>
    // })                                                                        // remove this ..
    } 

    </div>
  );
}