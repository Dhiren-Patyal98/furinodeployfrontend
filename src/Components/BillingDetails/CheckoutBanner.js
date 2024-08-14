import React from 'react'
import './checkout.css'

const CheckoutBanner = () => {
  return (
    <>
      <div className='shop-title-main'>

        <div className='checkout-shop-logo'></div>

        <div className='shop-title-text'>
          <p className='shop-title-shop'>Checkout</p>
          <div className='shop-title-breadcrumb-route'>
            <p className='shop-title-breadcrumb'>Home &gt; </p>
            <p className='shop-title-breadcrumb-next'>&nbsp; Checkout</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default CheckoutBanner