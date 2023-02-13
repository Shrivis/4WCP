import logo from './logo.svg';
import './App.css';
import NavScrollExample from './Components/Navbar';
import Tabs from './Components/TabComponent/Tabs';
import Sidebar from './Components/Sidebar/Sidebar';
import Statusbox from './Components/Status/Statusbox';
function App() {
  return (
    <div>
      <NavScrollExample/>
      <div class="sbar">
       <Sidebar></Sidebar>
      </div>
      <Tabs/>
    </div>
  );
}

export default App;
