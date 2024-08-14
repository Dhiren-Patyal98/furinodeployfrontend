import React from 'react'
import CheckoutBanner from './CheckoutBanner'
import WarrantyDetail from '../Shop/WarrantyDetail'
import Billing from './Billing'

const CheckOut = () => {
  return (
    <>
      <CheckoutBanner></CheckoutBanner>
      <Billing></Billing>
      <WarrantyDetail></WarrantyDetail>
    </>
  )
}

export default CheckOut