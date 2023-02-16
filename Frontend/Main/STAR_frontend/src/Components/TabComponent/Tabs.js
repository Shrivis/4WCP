import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import './tabs.css';
import StatusCard from '../Card/StatusCard';
import UserInfo from './UserInfo';
import Card from './OutlinedCard';
import BasicTable from '../Userstatus/Userstatus';
import StatusCard1 from '../Card/StatusCard1';
import StatusCard2 from '../Card/StatusCard2';

export default function Tabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <Box>
        
      <TabContext value={value}>
        <TabPanel value="1" style={{height: "9rem", overflowX: 'hidden'}}>
        <UserInfo></UserInfo>
        </TabPanel>
        <TabPanel value="2" class = "status" style={{height: "9rem", overflowX: 'hidden'}}>         
          <StatusCard/>
          <StatusCard1/>
          <StatusCard2/>
        </TabPanel>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="My Profile " value="1" />
            <Tab label="Requests" value="2" />
          </TabList>
        </Box>
        
        <TabPanel value="1">
          <Box marginLeft="10rem" ><BasicTable/></Box>
        </TabPanel>
        <TabPanel value="2">
        <Card ></Card>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
