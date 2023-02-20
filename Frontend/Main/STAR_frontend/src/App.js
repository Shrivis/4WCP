import './App.css';
import { BrowserRouter  as Router,Routes,Route,Link, BrowserRouter} from 'react-router-dom';
import Login from './Components/Login/login';
import Home from './Home'
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

function App() {
  return (
  <div>
      <BrowserRouter>
       <Routes>
       <Route exact path="/login" element={<Login/>}/>
       <Route exact path="/home" element={<PrivateRoute/>}>
       <Route path="" element={<Home/>} /></Route>
       </Routes>
      </BrowserRouter>
    </div>
     
  );
}

export default App;

