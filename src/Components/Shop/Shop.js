import React from 'react'
import ShopTitle from './ShopTitle'
import ShopFilter from './ShopFilter'
import ShopProductList from './ShopProductList'
import WarrantyDetail from './WarrantyDetail'


const Shop = () => {
  return (
    <>
      <ShopTitle></ShopTitle>
      <ShopFilter></ShopFilter>
      <ShopProductList></ShopProductList>
      <WarrantyDetail></WarrantyDetail>
    </>
  )
}

export default Shop