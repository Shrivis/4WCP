import './App.css';
import { BrowserRouter  as Router,Routes,Route,Link, BrowserRouter} from 'react-router-dom';
import Login from './Components/Login/login';
import Home from './Home'

function App() {
  return (
  <div>
       <BrowserRouter>
       <Routes>
       <Route exact path="/login" element={<Login/>}/>
       <Route exact path="/home" element={<Home/>}/>
       </Routes>
       </BrowserRouter>


      


       </div>
     
  );
}

export default App;

