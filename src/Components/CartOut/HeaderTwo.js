import React from 'react';
import './HeaderTwo.css'
import { useNavigate } from "react-router-dom";
import logo from '../../Images/navbarimages/Meubel House_Logos-05.png'
export default function HeaderTwo() {
  const navigate = useNavigate();
  return (
    <div>
          <div className='shop-title-main'>
      <div className='shop-title-text'>
        <div><img src={logo} alt=''></img></div>
        <p className='shop-title-shop'>Cart</p>
        <div className='shop-title-breadcrumb-route'>
          <p className='shop-title-breadcrumb' style={{cursor: "pointer"}} onClick={()=>
            {
              navigate("/")
            }
          } >Home &gt; </p>
          <p className='shop-title-breadcrumb-next'>&nbsp; Cart</p>
        </div>
      </div>
    </div>

    </div>
  )
}
