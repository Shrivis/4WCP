import * as React from 'react';
import {Table, TableBody, TableCell, TableContainer} from '@mui/material';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import AcceptRejctButton from './RequestCardButton';


export default function RequestCard({managerReq, managerId}) {                                                 
  return (
    <div>
    <TableContainer component={Paper} sx={{ minWidth: 300 ,  width: 'auto', }}>
      <Table  aria-label="simple table">
        <TableHead sx={{backgroundColor: '#afbdca',}}>
          <TableRow>
            <TableCell align="center" ><Typography sx={{fontWeight: 'bold'}}>Timesheet No </Typography> </TableCell>
            <TableCell align="center" ><Typography sx={{fontWeight: 'bold'}}>Resouce Id</Typography> </TableCell>
            <TableCell align="center" ><Typography sx={{fontWeight: 'bold'}}>Resource Name</Typography></TableCell>
            <TableCell align="center" ><Typography sx={{fontWeight: 'bold'}}>Project</Typography></TableCell>
            <TableCell align="center" ><Typography sx={{fontWeight: 'bold'}}>Start Time</Typography></TableCell>
            <TableCell align="center" ><Typography sx={{fontWeight: 'bold'}}>End Time</Typography></TableCell>
            <TableCell align="center" ><Typography sx={{ fontWeight: 'bold'}}>Expected Hours</Typography></TableCell>
            <TableCell align="center" ><Typography sx={{ fontWeight: 'bold'}}>Over Time</Typography></TableCell>
            <TableCell align="center" ><Typography sx={{ fontWeight: 'bold'}}>Action</Typography></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {managerReq.map((row) => (
            <TableRow class="text-center">
              <TableCell align="center" scope="row">{row.timesheetNo}</TableCell>
              <TableCell align="center">{row.userId}</TableCell>
              <TableCell align="center">{row.name}</TableCell>  
              <TableCell align="center">{row.projectName}</TableCell>    
              <TableCell align="center">{row.periodStart}</TableCell>  
              <TableCell align="center">{row.periodEnd}</TableCell>       
              <TableCell align="center">{row.expectedHours} hr</TableCell>    
              <TableCell align="center">{row.hours - row.expectedHours} hr</TableCell> 
              <AcceptRejctButton data={row} id={managerId}/>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}