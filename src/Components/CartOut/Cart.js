import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./Cart.css";
import { useLocation, useNavigate } from 'react-router-dom';
import { TbTrashFilled } from "react-icons/tb";
import HeaderTwo from "./HeaderTwo";
import WarrantyDetail from "../Shop/WarrantyDetail";

export default function Cart() {
  const navigate = useNavigate();
  const location = useLocation();
  const { product, quantity } = location.state || {};
  const [productName, setProductName] = useState('Product name');

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get('https://furnirobackendtest-3.onrender.com/api/productpage/getproducts');
        const data = response.data.data;
        const matchingProduct = data.find(p => p._id === product.productid);
        if (matchingProduct) {
          setProductName(matchingProduct.productName);
        }
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProductData();
  }, [product]);

  const handleCheckout = () => {
    navigate('/checkout', { state: { product, quantity,productName } });
  };

  return (
    <div>
      <HeaderTwo />
      <div className="Main-cartContainer">
        <div className="cart-content">
          <div className="cart-Product">
            <div className="cart-nav">
              <text>Product</text>
              <text> Price </text>
              <text>Quantity</text>
              <text>Subtotal</text>
            </div>

            <div className="cart-product-details">
              <div className="image-designing">
                <img src={product.image} alt="" />
              </div>
              <text className="cart-text ">{productName}</text>
              <text className="cart-text-1">Rs {product.originalprice}</text>
              <text className="cart-quantity">{quantity}</text>
              <text className="cart-pricing">Rs {product.originalprice * quantity}</text>
              <TbTrashFilled className="trash-icon" />
            </div>
          </div>

          <div className="cart-Total">
            <div className="cart-heading">
              <text>Cart Totals</text>
            </div>

            <div className="cart-items-price">
              <div className="cart-items-st">
                <text>Subtotal</text>
                <text>Total</text>
              </div>

              <div className="cart-rs">
                <text>Rs. {product ? (product.originalprice * quantity) : '0.00'}</text>
                <span>Rs. {product ? (product.originalprice * quantity) : '0.00'}</span>
              </div>
            </div>

            <div className="cart-checkout-button">
              <button className="cart-button" onClick={handleCheckout}>Check Out</button>
            </div>
          </div>
        </div>
      </div>
      <WarrantyDetail />
    </div>
  );
}
