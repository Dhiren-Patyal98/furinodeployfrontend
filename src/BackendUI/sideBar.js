import React, { useState } from 'react';
import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, } from 'react-icons/bs';
import { IoIosLogOut } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(location.pathname);

  const handleItemClick = (path) => {
    setActiveItem(path);
  };

  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <BsCart3 className='icon_header' /> FURNIRO
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
        <Link to='/backend' onClick={() => handleItemClick('/backend')}>
          <li className={`sidebar-list-item ${activeItem === '/backend' ? 'active' : ''}`}>
            <BsGrid1X2Fill className='icon' /> Dashboard
          </li>
        </Link>

        <Link to='/products' onClick={() => handleItemClick('/products')}>
          <li className={`sidebar-list-item ${activeItem === '/products' ? 'active' : ''}`}>
            <BsFillArchiveFill className='icon' /> Products
          </li>
        </Link>

        <Link to='/categories' onClick={() => handleItemClick('/categories')}>
          <li className={`sidebar-list-item ${activeItem === '/categories' ? 'active' : ''}`}>
            <BsFillGrid3X3GapFill className='icon' /> Categories
          </li>
        </Link>

        <Link to='/users' onClick={() => handleItemClick('/users')}>
          <li className={`sidebar-list-item ${activeItem === '/users' ? 'active' : ''}`}>
            <BsPeopleFill className='icon' /> Users
          </li>
        </Link>

        <Link to='/orders' onClick={() => handleItemClick('/orders')}>
          <li className={`sidebar-list-item ${activeItem === '/orders' ? 'active' : ''}`}>
            <BsListCheck className='icon' /> Orders
          </li>
        </Link>

          <Link to='/logout'> <li className='sidebar-list-item'onClick={()=>{
            handleItemClick('/logout')
          }}>
          <IoIosLogOut className='icon' /> Logout
        </li></Link>
       
      </ul>
    </aside>
  );
}

export default Sidebar;
