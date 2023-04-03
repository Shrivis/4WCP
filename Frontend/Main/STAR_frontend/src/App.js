// Importing necessary modules and components
import './App.css'; // Stylesheet for App component 
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter} from 'react-router-dom'; // React routing components 
import Login from './Components/Login/login'; // Login component 
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'; // PrivateRoute component 
import RouteLogin from './Components/PrivateRoute/RouteLogin'; // RouteLogin component 
import Nav from './Nav'; // Navigation menu component 
import React from 'react'; // React library 

function App() {
  return (
    <BrowserRouter basename={'/star'}> {/*Setting the base URL for all routes*/} 
      <Routes >
        <Route exact path="/" element={<RouteLogin/>}/> {/*Route for login page*/} 
        <Route exact path="/login" element={<Login/>}/> {/*Route for the actual login page*/} 
        <Route exact path="/home" element={<PrivateRoute/>}> {/*Private route for home page*/}
        <Route path="" element={<Nav/>}/> {/*Nested route for navigation menu*/} 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App; // Exporting App component
