import React, { useState } from 'react';
import Sidebar from '../sideBar';
import AddCategory from './AddCategory';
import './categories.css';
import ShowCategory from './ShowCategory';

export default function Categories() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [addCategory, setAddCategory] = useState(false);
  const [showCategory, setShowCategory] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div>
      <div className='grid-container'>
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
        
        <div className='cat'>
          <div className='cat-buttons'>
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={() => {
                setAddCategory(true);
                setShowCategory(false);
              }}
            >
              Add Category
            </button>
            <button
              type="button"
              className="btn btn-secondary btn-lg"
              onClick={() => {
                setShowCategory(true);
                setAddCategory(false);
              }}
            >
              Show Categories
            </button>
          </div>
          
          {/* Render the content below the buttons */}
          {addCategory && <AddCategory />}
          {showCategory && <ShowCategory />}
        </div>
      </div>
    </div>
  );
}
