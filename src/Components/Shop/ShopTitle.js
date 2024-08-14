import React from 'react'
import './shop.css'

import { useNavigate } from "react-router-dom";

const ShopTitle = () => {

  const navigate = useNavigate();

  return (
    <div className='shop-title-main'>
      <div className='shop-title-text'>
        <p className='shop-title-shop'>Shop</p>
        <div className='shop-title-breadcrumb-route'>
          <p className='shop-title-breadcrumb'  style={{cursor: "pointer"}} onClick={()=>
            {
              navigate("/")
            }
          }>Home &gt; </p>
          <p className='shop-title-breadcrumb-next'>&nbsp; Shop</p>
        </div>
      </div>
    </div>
  )
}

export default ShopTitle