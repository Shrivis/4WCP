import './App.css';
import { BrowserRouter as Router,Routes,Route,Link, BrowserRouter} from 'react-router-dom';
import Login from './Components/Login/login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import DashboardComp from './Dashboard';
import React from 'react';

function App() {
  return (
  <div>
      <BrowserRouter>
       <Routes>
       <Route exact path="/login" element={<Login/>}/>
       <Route exact path="/home" element={<PrivateRoute/>}>
        <Route path="" element={<DashboardComp/>}/>
       </Route>
       </Routes>
       </BrowserRouter>
       </div>
     
  );
}

export default App;

