import React ,{useEffect,useState}from 'react';
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

export default function BasicTable() {

  let API = "http://localhost:8084/api/v1/Request/2";
  const [data,setData]=useState([]);
  // localStorage.setItem("token",jwtToken);
  const jwtToken=localStorage.getItem("token");
  console.log(jwtToken);
  
  const fetchApidata=async(url)=>{
      try{
          const res = await fetch(url,{
            method:'GET',
            headers: {
              'Authorisation' : String(jwtToken),
              'Access-Control-Allow-Origin': '*',
              'Content-Type' : 'text/plain'
            }},
            );
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

