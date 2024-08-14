import React, { useEffect, useState } from "react";
import Sidebar from "../sideBar";
import axios from "axios";
import "./productss.css";
import ProductVarientShow from "./ProductVarientShow";
import ProductVarient from "./ProductVarient";
import { MdDelete } from "react-icons/md";

export default function Productss() {
  const [addProductClicked, setAddProductClicked] = useState(false);
  const [getProductClicked, setGEtProductClicked] = useState(false);
  const [addProductVarientClicked, setAddProductVarientClicked] =
    useState(false);
  const [getProductVarientClicked, setGEtProductVarientClicked] =
    useState(false);
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const [categoryData, setCategoryData] = useState(null);
  const [formData, setFormData] = useState({
    productName: "",
    productDescription: "",
    categoryid: "",
  });
  const [productData, setProductData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://furnirobackendtest-3.onrender.com/api/productpage/products",
        formData
      );
      if (response.data.success) {
        alert("Product added successfully");
        // Reset form or do any other necessary actions
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `https://furnirobackendtest-3.onrender.com/api/productpage/productsdelete/${id}`
      );
      if (response.data.success) {
        // Remove the deleted product from the state
        setProductData(productData.filter((product) => product._id !== id));
        alert("Product deleted successfully");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const catg = await axios.get(
          "https://furnirobackendtest-3.onrender.com/api/categorypage/getcategory"
        );

        setCategoryData(catg.data.data);

        const prod = await axios.get(
          "https://furnirobackendtest-3.onrender.com/api/productpage/getproducts"
        );
        setProductData(prod.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="grid-container" >
        <Sidebar
          openSidebarToggle={openSidebarToggle}
          OpenSidebar={OpenSidebar}
        />
      
      <div style={{display:"flex", flexDirection:"column" , width:"82vw",height:"100%"}}>
        <div className="pro-card-head" >
          <div className="pro-card-head-one">
            <div>
              <button
                type="button"
                className="btn btn-primary btn-lg"
                style={{ height: "50px", width: "100px" }}
                onClick={() => {
                  setAddProductClicked(true);
                  setGEtProductClicked(false);
                  setGEtProductVarientClicked(false);
                  setAddProductVarientClicked(false);
                }}
              >
                ADD PRODUCT
              </button>
            </div>
          </div>

          <div className="pro-card-head-two">
            <button
              type="button"
              className="btn btn-secondary btn-lg"
              style={{ height: "50px", width: "100px" }}
              onClick={() => {
                setAddProductClicked(false);
                setGEtProductClicked(true);
                setGEtProductVarientClicked(false);
                setAddProductVarientClicked(false);
              }}
            >
              Show PRODUCT
            </button>
          </div>

          <div className="pro-card-head-two">
            <button
              type="button"
              className="btn btn-primary btn-lg"
              style={{ height: "50px", width: "100px" }}
              onClick={() => {
                setAddProductClicked(false);
                setGEtProductClicked(false);
                setGEtProductVarientClicked(false);
                setAddProductVarientClicked(true);
              }}
            >
              Add Product Varient
            </button>
          </div>

          <div className="pro-card-head-two">
            <button
              type="button"
              className="btn btn-secondary btn-lg"
              style={{ height: "50px", width: "100px" }}
              onClick={() => {
                setAddProductClicked(false);
                setGEtProductClicked(false);
                setGEtProductVarientClicked(true);
                setAddProductVarientClicked(false);
              }}
            >
              Show Product Varient
            </button>
          </div>
        
       
        </div>
        {addProductClicked && (
          <div className="addProductClicked-One">
            <h1>Add Products</h1>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="addproduct" className="form-label">
                  Add Product Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="productName"
                  name="productName"
                  value={formData.productName}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="category" className="form-label">
                  Select Your Product Category
                </label>
                <select
                  id="categoryid"
                  className="form-select"
                  name="categoryid"
                  onChange={handleChange}
                >
                  <option>Select The Category</option>
                  {categoryData &&
                    categoryData.map((item) => (
                      <option key={item._id} value={item._id}>
                        {item.description}
                      </option>
                    ))}
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="productDescription" className="form-label">
                  Write Product Description
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="productDescription"
                  name="productDescription"
                  value={formData.productDescription}
                  onChange={handleChange}
                />
              </div>
              <div style={{ display: "flex", justifyContent: "end" }}>
                <button type="submit" className="btn btn-primary">
                  Add Product
                </button>
              </div>
            </form>
          </div>
        )}

       

        {getProductClicked && (
          <div className="mofi">
            {productData &&
              productData.map((items, index) => (
                <div key={index} className="product-card" >
                  <h2 className="product-name">{items.productName}</h2>
                  <p className="product-description">
                    {items.productDescription}
                  </p>
                  <div style={{ display:"flex", alignItems:"end", justifyContent:"end"}}>
                  <span
                    className=""
                    style={{maxWidth:"5rem"}}
                    onClick={() => handleDelete(items._id)}
                  >
                    <MdDelete style={{color:"red", height:"25px" , width:"25px"}} />
                  </span>
                  </div>
                </div>
              ))}
          </div>
        )}

        {addProductVarientClicked && (
          <div>
            <ProductVarient />
          </div>
        )}

        {getProductVarientClicked && (
          <div>
            <ProductVarientShow />
          </div>
        )}
      </div>
      </div>
     
    </div>
  );
}
