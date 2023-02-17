import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

function createData(Project_name, Hours, Start_time, End_time,Manager_name, Status) {
  return {Project_name, Hours, Start_time, End_time, Manager_name,Status};
}

const rows = [
  createData('1', 8,  9, 21, 'Ashish', 'Approved'),
  createData('2',3, 10, 22, 'Amit', 'Pending'),
];

export default function BasicTable() {
  return (
    <div>
    <TableContainer component={Paper} sx={{ minWidth: 275 ,  width: 'auto', }}>
      <Table  aria-label="simple table">
        <TableHead sx={{backgroundColor: '#afbdca',}}>
          <TableRow>
            <TableCell><Typography sx={{fontWeight: 'bold'}}>Project Name</Typography> </TableCell>
            <TableCell align="right" ><Typography sx={{fontWeight: 'bold'}}>Hours</Typography></TableCell>
            <TableCell align="right" ><Typography sx={{fontWeight: 'bold'}}>Start Time</Typography></TableCell>
            <TableCell align="right" ><Typography sx={{fontWeight: 'bold'}}>End Time</Typography></TableCell>
            <TableCell align="right" ><Typography sx={{fontWeight: 'bold'}}>Manager Name</Typography></TableCell>
            <TableCell align="right" ><Typography sx={{fontWeight: 'bold'}}>Status</Typography></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Project_name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              class="text-center"
            >
              <TableCell component="th" scope="row">
                {row.Project_name}
              </TableCell>
              <TableCell align="right">{row.Hours}</TableCell>
              <TableCell align="right">{row.Start_time}</TableCell>
              <TableCell align="right">{row.End_time}</TableCell>
              <TableCell align="right">{row.Manager_name}</TableCell>
              <TableCell align="right">{row.Status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

