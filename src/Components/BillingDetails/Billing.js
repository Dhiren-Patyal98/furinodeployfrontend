import React from 'react'
import { FaCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import { useLocation } from 'react-router-dom';
const Billing = () => {


  // const options = [
  //   { id: 1, value: 'India', label: 'India' },
  //   { id: 2, value: 'Sri Lanka', label: 'Sri Lanka' },
  // ]
  const location = useLocation();
  const { product, quantity, productName } = location.state || {};
  
  const subtotal = product ? product.originalprice * quantity : 0;

  return (
    <>
      <div className='billing-main'>
        <div className='billing-container'>
          <div className='billing-inputdata'>
            <div className='billing-title'>Billing details</div>
            <div className='billing-name'>
              <div className='billing-fname'>
                <p className='billing-all-text'>First Name</p>
                <input type='text' className='billing-nameinput'></input>
              </div>
              <div className='billing-lname'>
                <p className='billing-all-text'>Last Name</p>
                <input className='billing-nameinput'></input>
              </div>
            </div>
            <div className='billing-companyname'>
              <p className='billing-all-text'>Company Name (Optional)</p>
              <input className='billing-all-input'></input>
            </div>
            <div className='billing-country'>
              <p className='billing-all-text'>Country / Region</p>
              <input className='billing-all-input' placeholder="Sri Lanka"></input>



           



            </div>
            <div className='billing-street'>
              <p className='billing-all-text'>Street address</p>
              <input className='billing-all-input'></input>
            </div>
            <div className='billing-town'>
              <p className='billing-all-text'>Town / City</p>
              <input className='billing-all-input'></input>
            </div>
            <div className='billing-provience'>
              <p className='billing-all-text'>Province</p>
              <input className='billing-all-input' placeholder='Western Province'></input>
            </div>
            <div className='billing-zip'>
              <p className='billing-all-text'>ZIP code</p>
              <input className='billing-all-input'></input>
            </div>
            <div className='billing-phone'>
              <p className='billing-all-text'>Phone</p>
              <input className='billing-all-input'></input>
            </div>
            <div className='billing-email'>
              <p className='billing-all-text'>Email address</p>
              <input className='billing-all-input'></input>
            </div>
            <div className='billing-additional'>
              <input type='text' placeholder='Additional information' className='billing-all-input'></input>
            </div>
          </div>
          <div className='billing-detail'>
            <div className='billing-order-detail'>
              <div className='billing-detail-bill'>
                <div className='billing-detail-product'>
                  {/* make the data from here to  */}
                  <p className='billing-text-product'>Product</p>
                  <div className='billing-product-name'>
                    <p className='billing-product-text'>{productName}</p>
                    <p className='billing-quantity'>X &nbsp;{quantity}</p>
                  </div>
                  <p className='billing-text-total'>Subtotal</p>
                  <p className='billing-text-total'>Total</p>
                </div>
                <div className='billing-detail-subtotal'>
                  <p className='billing-text-product'>Subtotal</p>
                  <p className='billing-text-price'>Rs. {subtotal.toFixed(2)}</p>
                  <p className='billing-text-price'>Rs.{subtotal.toFixed(2)}</p>
                  <p className='billing-text-totalprice'>Rs.{subtotal.toFixed(2)}</p>
                </div>
              </div>
              {/* to here dynamically  */}
              <div className='billing-detail-desc'>
                <div className='billing-desc-upper'>
                  <div className='bill-direct-order'>
                    <FaCircle />
                    <p className='bill-direct-order-text'> &nbsp; &nbsp;Direct Bank Transfer</p>
                  </div>
                  <p className='bill-desc-upper-text'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                </div>
                <div className='billing-desc-middle'>
                 

                  <div className='bill-direct-order'>
                    <FaRegCircle className='circle-logo'></FaRegCircle>
                    <div className='bill-middle-order-text'> &nbsp; &nbsp;Direct Bank Transfer</div>
                  </div>

                  <div className='bill-direct-order'>
                    <FaRegCircle className='circle-logo'></FaRegCircle>
                    <div className='bill-middle-order-text'> &nbsp; &nbsp;Cash On Delivery</div>
                  </div>

                </div>
                <div className='billing-desc-bottom'>
                  <p className='bill-desc-bottom-text'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className='bill-bottom-privacy'>privacy policy.</span></p>
                </div>
              </div>
              <div className='billing-detail-btn'>
                <button className='bill-btn-placeorder'>Place order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Billing