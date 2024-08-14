import React, { useEffect, useState } from "react";
import "./BannerProducts.css";
import axios from 'axios';
import discount1 from "../../Images/Homepageimages/discount 1.png";
// import discount2 from '../../Images/Homepageimages/Discount 2.png'
// import labelnew from '../../Images/Homepageimages/label new.png'
import { useNavigate } from "react-router-dom";

export default function BannerProducts() {
  const [products, setProducts] = useState([]);
  const [productsVarient, setProductsVarient] = useState([]);
 const navigate = useNavigate();
  useEffect(() => {
    // Fetch product data from the API
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://furnirobackendtest-3.onrender.com/api/productpage/getproductvariety');
        const responseTwo = await axios.get('https://furnirobackendtest-3.onrender.com/api/productpage/getproducts');
        const dataone = response.data.data;
        const datatwo = responseTwo.data.data;

        // Store the fetched data in state
        setProducts(datatwo);
        setProductsVarient(dataone);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);


  function handleClick(variant) {

  console.log('Clicked variant:', variant);
    navigate('/product', { state: { data: variant} });
  }

  return (
    <div className="TopContainer">
      <div style={{ paddingTop: "3%" }}>
        <div className="HeadContainer">
          <div className="Heading">
            <div>Our Products</div>
          </div>
          <div className="Products">
            {productsVarient.map((variant) => {
             
              // Find the matching product based on the productId
              const product = products.find(p => p._id === variant.productid);
              
              return (
                <div className="productcard" key={variant.productId} onClick={()=> handleClick(variant)} style={{cursor:"pointer"}}>
                  <div className="inner-productcard" onClick={()=>{
                     console.log(variant.image[0])
                  }} style={{ backgroundImage:`url(${variant.image[0]})`}}>
                    <div className="discount">
                      <img src={discount1} alt="Discount"></img>
                    </div>
                  </div>
                  <div className="product-discription">
                    <div style={{ marginLeft: "5%" }}>
                      <div>
                        <text className="text-one">{product ? product.productName : 'Unknown Product'}</text>
                        <text className="text-two">{product ? product.productDescription : 'No Description'}</text>
                      </div>

                      <div>
                        <p className="paratext">
                          Rp {variant.originalprice}{" "}
                          <span className="card-span"> Rp {variant.discountedprice}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="button-header">
            <button className="product-button">
              Show More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
