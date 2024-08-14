import React, { useState } from "react";
import "./navbar.css";
import { TbUserExclamation } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from '../../Images/navbarimages/Meubel House_Logos-05.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo" style={{display:"flex" , alignItems:"center"}}>
         <img src={logo} style={{marginBottom:"4%"}} alt=""></img>
         <p style={{fontFamily:'Montserrat', fontWeight:'700', fontSize:'34px',cursor: "pointer"}} onClick={()=>{ navigate("/")}} >Furniro</p>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li onClick={()=>{ navigate("/")}} style={{cursor: "pointer"}}>
              Home
            </li>
            <li  onClick={()=>{ navigate("/shop")}} style={{cursor: "pointer"}}>
              Shop
            </li>
            <li onClick={()=>{ navigate("")}} style={{cursor: "pointer"}}>
             About
            </li>
            <li onClick={()=>{ navigate("/contact")}} style={{cursor: "pointer"}}>
              Contact
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href=""
                target="_thapa">
                <TbUserExclamation style={{ color: 'black' }} /> 
              </a>
            </li>
            <li>
              <a
                href=""
                target="">
                <FiSearch style={{ color: 'black' }}/>
              </a>
            </li>
            <li>
              <a
                href=""
                target="">
                <FaRegHeart style={{ color: 'black' }} />
              </a>
            </li>
            <li>
              
                
               
                <AiOutlineShoppingCart onClick={()=>{ navigate("/cart")}} style={{ color: 'black', cursor: "pointer"}} />
            
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#ss" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu style={{color:'black'}}/>
            </a>
          </div>
        </div>
      </nav>

    
    </>
  );
};

export default Navbar;