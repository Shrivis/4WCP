import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import './tabs.css';
import StatusCard from '../Card/StatusCard';
import RequestCard from './RequestCard';
import UserStatus from '../UserStatus/UserStatus';
import StatusCard1 from '../Card/StatusCard1';
import StatusCard2 from '../Card/StatusCard2';

export default function Tabs({resource, managerReq, resourceReq, status}) {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <Box>
        
      <TabContext value={value}>
        <TabPanel value="1" style={{height: "9rem"}}> 
          <StatusCard count={status.resourceApproved}/>
          <StatusCard1 count={resourceReq.length}/>
          <StatusCard2 count={status.resourceRejected}/>
        </TabPanel>
        <TabPanel value="2"  style={{height: "9rem"}}>         
          <StatusCard count={status.managerApproved}/>
          <StatusCard1 count={managerReq.length}/>
          <StatusCard2 count={status.managerRejected}/>
        </TabPanel>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange}>
            <Tab sx={{fontWeight:'bold', color:'black'}} label="My Profile " value="1" />
            <Tab sx={{fontWeight:'bold', color:'black'}} label="Requests" value="2" />
          </TabList>  
        </Box>
        
        <TabPanel value="1">
          <UserStatus ReqData={resourceReq}/>
        </TabPanel>
        <TabPanel value="2">
        <RequestCard managerReq={managerReq} managerId={resource.userId}/>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
