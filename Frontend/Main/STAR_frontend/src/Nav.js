// Importing required modules and libraries
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { ProfileFilled, HistoryOutlined, HomeFilled } from '@ant-design/icons';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './Components/Images/incedologo.png';
import AvatarItem from './Components/Avatar/Avatar';
import NotificationItem from './Components/Avatar/Notification';
import './App.css';
import DashboardIcon from "@material-ui/icons/Dashboard";
import DashboardComp from './Components/TabComponent/Dashboard/Dashboard';
import jwt from 'jwt-decode';
import { Spin } from 'antd';
import styled from '@mui/material/styles/styled';
import ManagerTable from './Components/TabComponent/Tabel/ManagerTable';
import ResourceTable from './Components/TabComponent/Tabel/ResourceTable';
import HistoryTable from './Components/TabComponent/Tabel/History';
// The above script imports all the necessary modules and libraries required for code to run.

const drawerWidth = 150; // Sets the drawerWidth constant to 150.

// Defines a mixin called "openedMixin" that takes a theme argument
const openedMixin = (theme) => ({
  // Sets the width of the object using previously defined drawerWidth constant.
  width: drawerWidth,
  // Applies a transition effect to the width property, with a specified easing function and duration
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  // Hides any content that overflows horizontally
  overflowX: 'hidden',
});
// Define a mixin for when the drawer is closed
const closedMixin = (theme) => ({
  // Here, we are defining the CSS transition property for the 'width' property to animate it when it changes.
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  // Here, we are setting the 'overflowX' property of the element to 'hidden' so that any content that exceeds the width is hidden.
  overflowX: 'hidden',
  // Here, we are defining the initial width of the element using the 'calc' function and spacing from the theme object.
  width: `calc(${theme.spacing(4)} + 1px)`,
  // Here, we are providing an override for the width on larger screens using a media query from the theme object.
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(6)} + 1px)`,
  },
});

// Define a component named `DrawerHeader` which is created using the styled method from the `styled-components` library within JavaScript.
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex', // Displays the container as a flex container, allowing easy alignment of child elements.
  alignItems: 'center', // Vertically centers child elements within the container.
  justifyContent: 'flex-end', // Horizontally aligns child elements to the end of the container.
  padding: `${theme.spacing(0)} ${theme.spacing(1)}`, // Provides equal padding on the top/bottom and left/right of the container.
  minHeight: '64px', // Sets the minimum height of the container to 64 pixels.
}));



// Define a styled component called AppBar with MuiAppBar as the base component
const AppBar = styled(MuiAppBar, {
  // Custom function to determine which props should not be passed to the underlying component 
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({ // An arrow function that returns an object containing styling rules based on the `theme` and `open` props.
  // Set the z-index value for the component by adding 1 to the `zIndex` value of the drawer.
  zIndex: theme.zIndex.drawer + 1,
  // Add transition styles for the `width` and `margin` properties using the `create` method from the `transitions` property of the `theme` object.
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp, // Set the easing timing function for the transition.
    duration: theme.transitions.duration.leavingScreen, // Set the duration of the transition in milliseconds.
  }),
  // If the `open` prop is truthy then add the following additional styles to the component.
  ...(open && {
    marginLeft: drawerWidth, // Move the component to the right by the width of the drawer.
    width: `calc(100% - ${drawerWidth}px)`, // Make the component's width equal to the window width minus the width of the drawer.
    transition: theme.transitions.create(['width', 'margin'], { // Add additional transition styles if the component is transitioning from closed to open.
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
}));

// Define a styled component named "Drawer" based on MuiDrawer from Material-UI.
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  // Exclude the "open" prop from being passed down to the underlying component.
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    // Use the openedMixin styles if the 'open' prop is true
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
    }),
    // Use the closedMixin styles if the 'open' prop is false
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
}));

export default function MiniDrawer() {
  // Define state variables
  const [loading, setLoading] = useState(true);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [tabValue, setValue] = React.useState("1");
  const [name, setName] = useState("");
  const [resourceDetail, setResourceDetail] = useState([]);
  const [resourceRequests, setResourceRequests] = useState([]);
  const [managerRequests, setManagerRequests] = useState([]);
  const [reqHistory, setRequestsHistory] = useState([]);
  const [status, setStatus] = useState([]);

  // This function takes an index (idx) as an argument and sets the value of a state variable to that index
  const handleDrawerLinks = (idx) => {
    setValue(idx);
  };

  // This function sets a state variable (open) to true, which will open a drawer component
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  // This function sets a state variable (open) to false, which will close a drawer component
  const handleDrawerClose = () => {
    setOpen(false);
  };
 // Define a function to fetch data from the backend API
  const fetchData = () => {
    Promise.all([
      // Retrieve data from the 'data' endpoint.
      axios.get('http://localhost:8084/api/v1/resource/data', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          'Access-Control-Allow-Origin': '*'
        }
      }),

      // Retrieve data from the 'manager' endpoint.
      axios.get('http://localhost:8084/api/v1/request/manager', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          'Access-Control-Allow-Origin': '*'
        }
      }),

      // Retrieve data from the 'history' endpoint.
      axios.get('http://localhost:8084/api/v1/request/history', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          'Access-Control-Allow-Origin': '*'
        }
      }),

      // Retrieve data from the 'resource' endpoint.
      axios.get('http://localhost:8084/api/v1/request/resource', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          'Access-Control-Allow-Origin': '*'
        }
      }),

      // Retrieve data from the 'getstatus' endpoint.
      axios.get('http://localhost:8084/api/v1/status/getstatus', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          'Access-Control-Allow-Origin': '*'
        }
      })
    ])
      .then(([res1, res2, res3, res4, res5]) => {
        // Once all the promises have resolved, this function is called with an array of responses.
        // Each response object contains the data returned by the corresponding endpoint.

        // Update the state of the component with the retrieved data.
        setLoading(false);
        setResourceDetail(res1.data);
        setManagerRequests(res2.data);
        setRequestsHistory(res3.data);
        setResourceRequests(res4.data);
        setStatus(res5.data);
        setName(res1.data.name);

        // If the current tab is '1' and there are pending manager or history requests,
        // switch to the '2' tab to show the requests.
        if (tabValue == '1' && res2.data.length + res3.data.length > 0) {
          setValue('2');
        }
      })
      .catch(error => {
        // If any of the promises fail to resolve, this function is called with an error object.
        // Handle the error by redirecting the user to the login page.
        navigate('/login');
      });
  }

  useEffect(() => {
    fetchData(); //Fetches data from an API or any other data source
     // Checks if the user has the role of an admin
    if (jwt(localStorage.getItem('token')).roles == 'ADMIN') {
      const idx = "4"; //Sets the value of idx as "4"
      setValue(idx); // Updates the state with the new value of idx
    }
  }, []);
  

  return (
    <div>
      {loading ? (
        <div size="middle" style={{ 'height': '100vh', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center' }}>
          <Spin size="large" />
        </div>
      ) : (<>
        <Box sx={{ display: 'flex' }} >
          <CssBaseline />
          <AppBar open={open} style={{ backgroundColor: "#222831" }} > {/*This component renders a custom AppBar with a dark background color and various components including a logo, menu icon, notification icon, and user avatar.*/}
            <Toolbar >
              {/*This IconButton toggles the visibility of a Drawer component when clicked.*/}
              <IconButton 
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  marginRight: 2,
                  ...(open && { display: 'none' }),
                }}
              >
                <MenuIcon />
              </IconButton>
              <Navbar.Brand href="/starfrontend/home" ><img className='logo' src={Logo} alt='' ></img></Navbar.Brand> {/* This Navbar.Brand component is a link to the home page and includes a logo. */}
              <div className="d-flex justify-content-end col"> {/*This div contains various components that are aligned to the right side of the AppBar. */}
                {((jwt(localStorage.getItem('token'))).roles == 'USER') ? (<>
                  <div className='mx-1 row'><NotificationItem manager={managerRequests} resource={resourceRequests} setVal={setValue} fetchData={fetchData} /></div>
                </>) : (<></>)}
                <AvatarItem initials={name[0]} />
                <div className='mt-2 mx-2' sx={{ fontSize: 'large' }} style={{ color: '#EEEEEE' }}>Hi {name.split(' ')[0]}</div>
              </div>
            </Toolbar>
          </AppBar>
          <Drawer variant="permanent" open={open}>
          {/*The Drawer component displays a persistent navigation drawer.
           The "variant" prop sets the type of drawer to display.
           The "open" prop determines whether the drawer is open or closed. */}
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
              {/*The IconButton component displays an icon as a button.
                 The "onClick" prop sets the function to execute when the button is clicked.
                 The ChevronRightIcon and ChevronLeftIcon components are used as the button icons. */}
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
              </IconButton>
            </DrawerHeader>
            <Divider />
            {/* The Divider component is used to separate content within the drawer. */}
            <List>
               {/* This ternary operator checks if the user's role is "USER".
               If the user's role is "USER", then display the following list items. */}
              {((jwt(localStorage.getItem('token'))).roles == 'USER') ? (<>
                <ListItem key='Home' className={`${(tabValue == '1') ? 'highlightTab text-primary' : ''}`} disablePadding sx={{ display: 'block' }} onClick={() => handleDrawerLinks("1")}>
                  <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 1.5 }}>
                    <ListItemIcon sx={{ minWidth: 0, mr: open ? 2 : 'auto', justifyContent: 'center' }}>
                       {/* The HomeFilled component is used as the icon for this button.
                       The "className" prop sets the CSS classes for the icon. */}
                      <HomeFilled className={`${(tabValue == '1') ? 'text-primary' : ''}`} />
                    </ListItemIcon>
                    {/*The ListItemText component displays the text for the button.
                       The "primary" prop sets the primary text for the component.
                       The "sx" prop sets the style for the component.
                       The "opacity" prop sets the opacity for the component based on whether the drawer is open or closed. */}
                    <ListItemText primary='Home' sx={{ opacity: open ? 1 : 0 }} />
                  </ListItemButton>
                </ListItem>
                {(managerRequests.length === 0 && reqHistory.length == 0) ? ('') : (
                  <><ListItem className={`${(tabValue == '2') ? 'highlightTab text-primary' : ''}`} disablePadding sx={{ display: 'block' }} onClick={() => handleDrawerLinks("2")}>
                    <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 1.5 }}>
                      <ListItemIcon sx={{ minWidth: 0, mr: open ? 2 : 'auto', justifyContent: 'center' }}>
                        <ProfileFilled className={`${(tabValue == '2') ? 'text-primary' : ''}`} />
                      </ListItemIcon>
                      <ListItemText primary='Requests' sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                  </ListItem>
                    <ListItem className={`${(tabValue == '3') ? 'highlightTab text-primary' : ''}`} disablePadding sx={{ display: 'block' }} onClick={() => handleDrawerLinks("3")}>
                      <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 1.5 }}>
                        <ListItemIcon sx={{ minWidth: 0, mr: open ? 2 : 'auto', justifyContent: 'center' }}>
                          <HistoryOutlined className={`${(tabValue == '3') ? 'text-primary' : ''}`} />
                        </ListItemIcon>
                        <ListItemText primary='History' sx={{ opacity: open ? 1 : 0 }} />
                      </ListItemButton>
                    </ListItem></>
                )}
              </>) : (
                <ListItem className={`${(tabValue == '4') ? 'highlightTab text-primary' : ''}`} disablePadding sx={{ display: 'block' }} onClick={() => handleDrawerLinks("4")}>
                  <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 1.5 }}>
                    <ListItemIcon sx={{ minWidth: 0, mr: open ? 2 : 'auto', justifyContent: 'center' }}>
                      <DashboardIcon className={`${(tabValue == '4') ? 'text-primary' : ''}`} />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" disablePadding sx={{ opacity: open ? 1 : 0 }} />
                  </ListItemButton>
                </ListItem>
              )}
            </List>
          </Drawer>
          <TabContext value={tabValue}>
            <TabPanel value="1">
              <Box sx={{ flexGrow: 1 }}>
                <DrawerHeader />
                <ResourceTable reqData={resourceRequests} status={status} />
              </Box>
            </TabPanel>
            <TabPanel value="2">
              <DrawerHeader />
              <ManagerTable managerReq={managerRequests} managerId={resourceDetail.userId} status={status} fetchData={fetchData} />
            </TabPanel>
            <TabPanel value="3">
              <DrawerHeader />
              <HistoryTable reqHistory={reqHistory} managerId={resourceDetail.userId} fetchData={fetchData} />
            </TabPanel>
            <TabPanel value="4">
              <DrawerHeader />
              <DashboardComp />
            </TabPanel>
          </TabContext>
        </Box>

        {((jwt(localStorage.getItem('token'))).roles == 'USER') ? (
          <div class="fixed-bottom w-100 bg-dark footerDiv" sx={{ width: '100%' }}>
            <div className='text-center text-light text-small'>
              <small>© 2023 Incedo</small>
            </div>
          </div>) : ('')}
      </>)}</div>
  );
}
