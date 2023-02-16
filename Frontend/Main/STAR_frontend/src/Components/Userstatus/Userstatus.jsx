import React ,{useEffect,useState}from 'react';
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

export default function BasicTable() {

  let API = "http://localhost:8084/api/v1/Request/2";
  const [data,setData]=useState([]);
  
  const fetchApidata=async(url)=>{
      try{
          const res = await fetch(url);
          const actualData = await res.json();
          console.log(actualData);
          setData(actualData);
      }catch(error){
          console.log(error);
      }
  }

  

  useEffect(()=>{
      fetchApidata(API);
  },[]);
     














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
          {data.map((row) => (
            <TableRow
              key={row.projectName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              class="text-center"
            >
              <TableCell component="th" scope="row">
                {row.projectName}
              </TableCell>
              <TableCell align="right">{row.extraHours}</TableCell>   {/*Hours*/}
              <TableCell align="right">{row.startTime}</TableCell>      {/*starttime*/}
              <TableCell align="right">{row.endTime}</TableCell>   {/*endtime*/}
              <TableCell align="right">{row.managerName}</TableCell>       {/*manager name*/}
              <TableCell align="right">{row.responseText}</TableCell>    {/*request that is pending or accepted*/}   
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

