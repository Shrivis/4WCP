import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import StatusButton from './StatusButton';

export default function BasicTable({ReqData}) {
  return (
    <div>
    <TableContainer component={Paper} sx={{ minWidth: 300 ,  width: 'auto' }}>
      <Table  aria-label="simple table">
        <TableHead sx={{backgroundColor: '#afbdca',}}>
          <TableRow>
            <TableCell align="center"><Typography sx={{fontWeight: 'bold'}}>Timesheet No</Typography> </TableCell>
            <TableCell align="center"><Typography sx={{fontWeight: 'bold'}}>Project Name</Typography> </TableCell>
            <TableCell align="center" ><Typography sx={{fontWeight: 'bold'}}>Hours</Typography></TableCell>
            <TableCell align="center" ><Typography sx={{fontWeight: 'bold'}}>Start Time</Typography></TableCell>
            <TableCell align="center" ><Typography sx={{fontWeight: 'bold'}}>End Time</Typography></TableCell>
            <TableCell align="center" ><Typography sx={{fontWeight: 'bold'}}>Manager Name</Typography></TableCell>
            <TableCell align="center" ><Typography sx={{fontWeight: 'bold'}}>Status</Typography></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ReqData.map((row) => (
            <TableRow class="text-center">  
              <TableCell align="center" scope="row">{row.timesheetNo}</TableCell>
              <TableCell align="center" scope="row">{row.projectName}</TableCell>
              <TableCell align="center">{row.extraHours} hr</TableCell>  
              <TableCell align="center">{row.startTime}</TableCell>   
              <TableCell align="center">{row.endTime}</TableCell>  
              <TableCell align="center">{row.managerName}</TableCell>  
              <StatusButton data={row}/> 
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

