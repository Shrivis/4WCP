import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
        <TableHead>
          <TableRow>
            <TableCell>Project Name</TableCell>
            <TableCell align="right" >Hours</TableCell>
            <TableCell align="right" >Start Time</TableCell>
            <TableCell align="right" >End Time</TableCell>
            <TableCell align="right" >Manager Name</TableCell>
            <TableCell align="right" >Status</TableCell>
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

