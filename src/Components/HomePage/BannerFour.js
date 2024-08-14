import React from 'react'
import './bannerfour.css'
import bannerImg from '../../Images/Homepageimages/banner4.png'
export default function BannerFour() {
  return (
    <div style={{paddingTop:"3%"}}>
      <div className='container-Head'>
        <div className='text-container'>
         <div className='text-inner'>
         <div className='rooms'>
          <div >
          <p className='text'>50+ Beautiful rooms 
          inspiration</p>
          <p className='text-p'>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
          </div>
         </div>

         <div className='button-sizing'>
           <button className='button-style'>
              Explore More
           </button>
         </div>
        </div>
        </div>


        <div className='img-container'>
         <div className='home-img'>
           <img src={bannerImg} alt=''></img>
         </div>
        </div>

      </div>
    </div>
  )
}
