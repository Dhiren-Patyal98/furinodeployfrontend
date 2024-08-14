import React, { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import { RxDividerVertical } from "react-icons/rx";
import axios from 'axios';
import { useLocation, useNavigate } from "react-router-dom";
import p1 from "../../Images/Productimages/p1.png";
import p2 from "../../Images/Productimages/p2.png";
import p3 from "../../Images/Productimages/p3.png";
import p4 from "../../Images/Productimages/p4.png";
import p5 from "../../Images/Productimages/p5.png";
import star from "../../Images/Productimages/star.png";
import halfStar from "../../Images/Productimages/halfStar.png";
import prodImg1 from '../../Images/Productimages/Single-Prod-img-1.png';
import prodImg2 from '../../Images/Productimages/Single-prod-2.png';
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import img1 from '../../Images/Productimages/image 1.png';
import img2 from '../../Images/Productimages/image 2 (1).png';
import img3 from '../../Images/Productimages/image 3.png';
import img4 from '../../Images/Productimages/image 4.png';
import './product.css';

function Product() {
  const location = useLocation();
  const navigate = useNavigate(); // Add this line
  const { data } = location.state;

  const [productData, setProductData] = useState({});
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://furnirobackendtest-3.onrender.com/api/productpage/getproducts");
        const products = response.data.data;
        const matchedProduct = products.find(product => product._id === data.productid);
        if (matchedProduct) {
          setProductData(matchedProduct);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [data.productid]);

  const handleIncrement = () => {
    setCounter(prevCounter => prevCounter + 1);
  };

  const handleDecrement = () => {
    setCounter(prevCounter => Math.max(prevCounter - 1, 1));
  };

  const handleAddToCart = () => {
    navigate('/cart', { state: { product: data, quantity: counter } }); // Navigate with data
  };

  return (
    <>
      <div className="product-container123-xyz">
        <div className="prod-header-xyz">
          <div style={{ color: "#9F9F9F" }}>Home</div>
          <div>
            <FaChevronRight style={{ fontSize: "0.9rem" }} />
          </div>
          <div style={{ color: "#9F9F9F" }}>Shop</div>
          <div>
            <FaChevronRight style={{ fontSize: "0.9rem" }} />
          </div>
          <div>
            <RxDividerVertical style={{ fontSize: "2rem", color: "#9F9F9F" }} />
          </div>
          <div>{productData.productName}</div>
        </div>

        <div className="product-card-one-xyz container">
          <div className="product-image-show-xyz">
            <div className="side-images-xyz">
              <img src={p1} alt="" />
              <img src={p3} alt="" />
              <img src={p4} alt="" />
              <img src={p5} alt="" />
            </div>
            <div className="image-active-xyz">
              <img src={data.image} alt="Product" />
            </div>
          </div>
          <div className="product-desc-xyz">
            <h2>{productData.productName}</h2>
            <p style={{ color: '#9F9F9F' }}>RP {data.originalprice}</p>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                alignItems: "center",
                color: "#9F9F9F",
              }}
            >
              <div>
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={halfStar} alt="" />
              </div>
              <span style={{ fontSize: "1.25rem" }}>|</span>
              <span style={{ fontSize: "1.5rem" }}> 5 Customer Review</span>
            </div>
            <p style={{ fontSize: "1.7rem" }}>
              {productData.productDescription}
            </p>
            <p style={{ color: "#9F9F9F" }}>Size</p>
            <span className="size-buttons-xyz">
              <button>L</button>
              <button>XL</button>
              <button>XS</button>
            </span>
            <p style={{ color: '#9F9F9F' }}>{data.color}</p>
            <span className="color-buttons-xyz">
              <button style={{ backgroundColor: '#816DFA' }}></button>
              <button style={{ backgroundColor: '#000000' }}></button>
              <button style={{ backgroundColor: '#B88E2F' }}></button>
            </span>
            <p className="config-buttons-xyz">
              <button>
                <span style={{ paddingRight: "3rem", fontSize: "25px" }} onClick={handleDecrement}>-</span>
                {counter}
                <span style={{ paddingLeft: "3rem" }} onClick={handleIncrement}>+</span>
              </button>
              <button onClick={handleAddToCart}>Add to cart</button> {/* Updated button */}
              <button>+ Compare</button>
            </p>
            <hr />

            <div
              className="prod-des-details-xyz"
              style={{ color: "#9F9F9F", maxWidth: "fit-content" }}
            >
              <div>SKU</div>
              <div>: SS001</div>
              <div>Category</div>
              <div>: Sofas</div>
              <div>Tags</div>
              <div>: Sofa,Chair,Home,Shop</div>
              <div>Share</div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}
              >
                :{" "}
                <span style={{ color: "black", fontSize: "1.25rem" }}>
                  <FaFacebook /> <FaLinkedin /> <AiFillTwitterCircle />
                </span>
              </div>
            </div>
          </div>
        </div>
        <hr />

        <div className="product-extra-info-xyz container-fluid">
          <div className="prod-info-xyz">
            <div className="prod-info-headings-xyz">
              <span>Description</span>
              <span>Additional Information</span>
              <span>Reviews[5]</span>
            </div>
            <div className="prod-info-desc-xyz">
              <p>Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
              <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
            </div>
          </div>
          <div className="prod-info-images-xyz">
            <div><img className="img-fluid" src={prodImg1} alt="Product Image 1" /></div>
            <div><img className="img-fluid" src={prodImg2} alt="Product Image 2" /></div>
          </div>
        </div>

        <hr />

        <div className="related-products-container-xyz">
          <div className="related-product-heading-xyz">
            <span>Related Products</span>
          </div>
          <div className="related-products-xyz">
            <div className="r-prod-card-xyz">
              <div className="bubble-xyz">-30%</div>
              <img className='img-fluid' src={img1} alt="Related Product 1" />
              <div className="r-prod-desc-xyz">
                <ul>
                  <li className="li-bc-xyz">Product Name</li>
                  <li>Product Desc</li>
                  <li>Product Price <span>RedPrice</span></li>
                </ul>
              </div>
            </div>
            <div className="r-prod-card-xyz">
              <img className='img-fluid' src={img2} alt="Related Product 2" />
              <div className="r-prod-desc-xyz">
                <ul>
                  <li>Product Name</li>
                  <li>Product Desc</li>
                  <li>Product Price </li>
                </ul>
              </div>
            </div>
            <div className="r-prod-card-xyz">
              <div className="bubble-xyz">-50%</div>
              <img className='img-fluid' src={img3} alt="Related Product 3" />
              <div className="r-prod-desc-xyz">
                <ul>
                  <li>Product Name</li>
                  <li>Product Desc</li>
                  <li>Product Price <span>RedPrice</span></li>
                </ul>
              </div>
            </div>
            <div className="r-prod-card-xyz">
              <div className="bubble-xyz new-xyz">New</div>
              <img className='img-fluid' src={img4} alt="Related Product 4" />
              <div className="r-prod-desc-xyz">
                <ul>
                  <li>Product Name</li>
                  <li>Product Desc</li>
                  <li>Product Price</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="r-button-xyz">
          <button>Show More</button>
        </div>
      </div>
    </>
  );
}

export default Product;
