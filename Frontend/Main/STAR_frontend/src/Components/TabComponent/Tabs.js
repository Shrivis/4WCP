import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ManagerTable from './Tabel/ManagerTable';
import ResourceTable from './Tabel/ResourceTable';
import Accept from '../Card/StatisticsCardAccept'
import Pending from '../Card/StatisticsCardPending'
import Reject from '../Card/StatisticsCardReject'

export default function Tabs({resource, managerReq, resourceReq, status}) {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <Box>
      <TabContext value={value}>
        <TabPanel value="1" style={{padding:'0'}}>         
          <div class="d-flex justify-content-evenly">
            <Accept count={status.resourceApproved}/>
            <Pending count={resourceReq.length-status.resourceApproved-status.resourceRejected}/>
            <Reject count={status.resourceRejected}/>
          </div>
        </TabPanel>
        <TabPanel value="2" style={{padding:'0'}}>         
          <div class="d-flex justify-content-evenly">
            <Accept count={status.managerApproved}/>
            <Pending count={managerReq.length}/>
            <Reject count={status.managerRejected}/>
          </div>
        </TabPanel>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange}>
            <Tab sx={{fontWeight:'bold', color:'black'}} className="mx-2" label="My Profile " value="1" />
            {(managerReq.length === 0)?(''):(<Tab sx={{fontWeight:'bold', color:'black'}} label="Requests" value="2" />)}
          </TabList>  
        </Box>
        <TabPanel value="1">
          <ResourceTable ReqData={resourceReq}/>
        </TabPanel>
        <TabPanel value="2">
          <ManagerTable  managerReq={managerReq} managerId={resource.userId}/>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
