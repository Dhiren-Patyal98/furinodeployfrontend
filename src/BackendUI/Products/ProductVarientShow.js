import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './productVarientShow.css';
import { MdDelete } from 'react-icons/md';

export default function ProductVarientShow() {
  const [productVarieties, setProductVarieties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productNamesMap, setProductNamesMap] = useState({});

  useEffect(() => {
    // Fetch product varieties
    axios.get('https://furnirobackendtest-3.onrender.com/api/productpage/getproductvariety')
      .then(response => {
        setProductVarieties(response.data.data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    // Fetch product names
    axios.get('https://furnirobackendtest-3.onrender.com/api/productpage/getproducts')
      .then(response => {
        const productData = response.data.data;
        // Create a map of product IDs to names
        const namesMap = {};
        productData.forEach(product => {
          namesMap[product._id] = product.productName; // Assuming product object has `_id` and `name`
        });
        setProductNamesMap(namesMap);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  // Function to handle deletion of product variety
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`https://furnirobackendtest-3.onrender.com/api/productpage/productvarietydelete/${id}`);
      if (response.data.success) {
        // Remove the deleted item from the state
        setProductVarieties(productVarieties.filter(variety => variety._id !== id));
        alert('Product variety deleted successfully');
      } else {
        alert('Failed to delete product variety');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while deleting the product variety');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!productVarieties.length) {
    return <div>No product varieties found</div>;
  }

  return (
    <div className="page-wrapper">
      <div className="table-container">
        <table className="product-table">
          <thead>
            <tr>
              <th>Sr No.</th>
              <th>Product Name</th>
              <th>Image</th>
              <th>Color</th>
              <th>Original Price</th>
              <th>Discounted Price</th> {/* New column for discounted price */}
              <th>Tag</th> {/* New column for tag */}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {productVarieties.map((productVariety, index) => (
              <tr key={productVariety._id}>
                <td>{index + 1}</td>
                <td>{productNamesMap[productVariety.productid] || 'Product Name Not Found'}</td>
                <td><img src={productVariety.image[0]} alt={productVariety.color} className="table-img" /></td>
                <td>{productVariety.color}</td>
                <td>{productVariety.originalprice}</td> {/* Display original price */}
                <td>{productVariety.discountedprice}</td> {/* Display discounted price */}
                <td>{productVariety.tag}</td> {/* Display tag */}
                <td>
                  <span
                    className="delete-icon"
                    onClick={() => handleDelete(productVariety._id)}
                  >
                    <MdDelete />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
