import {React, useState } from 'react'
import { InputLabel, FormControl, NativeSelect } from '@mui/material';
import { TabContext, TabPanel } from '@mui/lab';
import {Box} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import {MenuItem, Select} from '@mui/material';

export default function Dashboard () {
    const [tabValue, setTabValue] = useState(1);
    const data = [
        {
        'project':'Batch Processing',
        'resources':['Ajay', 'Vishal Srivastav', 'Some Long Name Guy', 'Vansh Aggarwal'],
        'avgHour':[20, 2, -20, 34],
        },
        {
            'project':'Batch Processing2',
            'resources':['Ajay2', 'Vishal Srivastav2', 'Some Long Name Guy2', 'Vansh Aggarwal2'],
            'avgHour':[20, 2, -20, 34],
        }
    ];
    const handleChange = (event) => {
        setTabValue(event.target.value);
    };
    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    }));
  return (
    <div>
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel>Project</InputLabel>
        <Select value={tabValue} label="Project" onChange={handleChange}>
            {data.map((row, index) =>
                <MenuItem value={`${index+1}`}>{row.project}</MenuItem>
            )};
        </Select>
    </FormControl>
    <TabContext value={tabValue}>
        <TabPanel value="1">
        <Box component="Home" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />
            <h1>here too</h1>
        </Box>
        </TabPanel>
        <TabPanel value="2">
        <Box component="Dashboard" sx={{ flexGrow: 1, p: 3 }}>
            <h1>here</h1>
        </Box>
        </TabPanel>
    </TabContext>
    </div>
  )
}
