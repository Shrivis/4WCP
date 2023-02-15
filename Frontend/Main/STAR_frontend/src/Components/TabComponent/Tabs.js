import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Statusbox from '../Status/Statusbox';
import './tabs.css';
import UserInfo from './UserInfo';
import Card from './OutlinedCard'

export default function Tabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
        
      <TabContext value={value}>
        <TabPanel value="1" style={{height: "9rem", overflowX: 'hidden'}}>
        <UserInfo></UserInfo>
        </TabPanel>
<<<<<<< HEAD
        <TabPanel value="2" class = "status" style={{height: "9rem", overflowX: 'hidden'}}>
         
=======
        <TabPanel value="2" class = "status">
        
>>>>>>> 1c36342580fddadb035aae675d9dbe57017d03e0
          <div class= "content">
          <div class = "one"><Statusbox></Statusbox></div> 
          <div class="two"><Statusbox></Statusbox></div>
          <div class="three"><Statusbox></Statusbox></div>
          </div>
        </TabPanel>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="My Profile " value="1" />
            <Tab label="Requests" value="2" />
          </TabList>
        </Box>
        
        <TabPanel value="1">
          <Box><h4>user Requests</h4></Box>
        </TabPanel>
        <TabPanel value="2">
        <Card ></Card>
          <div className='container py-4 my-5'>
<<<<<<< HEAD
=======
           
            {/* <h2>Requests...</h2>
            <li>
              <ul>user 1</ul>
              <ul>user 1</ul>
              <ul>user 1</ul>
              <ul>user 1</ul>
            </li> */}
>>>>>>> 1c36342580fddadb035aae675d9dbe57017d03e0
          </div>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
