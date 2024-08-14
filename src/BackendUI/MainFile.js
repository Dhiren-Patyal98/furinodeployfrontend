import { useState } from 'react'



import Home from './home'
import './backend.css'
import Sidebar from './sideBar'
function MainFile() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
     
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      
      <Home />
    </div>
  )
}

export default MainFile
