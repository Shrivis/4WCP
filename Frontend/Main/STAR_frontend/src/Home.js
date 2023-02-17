import React from 'react'
import NavScrollExample from './Components/Navbar';
import Tabs from './Components/TabComponent/Tabs';
import Sidebar from './Components/Sidebar/Sidebar';
function Home() {
  return (
    <div>
       <NavScrollExample/>
       <div class="sbar">
        <Sidebar></Sidebar>
       </div>
       <Tabs/>

    </div>
  )
}

export default Home