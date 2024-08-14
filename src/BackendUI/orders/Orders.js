import React, { useEffect, useState } from 'react';
import Sidebar from '../sideBar';
import axios from 'axios';
import './orders.css'; // Import CSS file for styling if you have it
import { MdDelete } from 'react-icons/md';
export default function Orders() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [orderItems, setOrderItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [productMapping, setProductMapping] = useState({});

  useEffect(() => {
    const fetchOrderItems = async () => {
      try {
        // Fetch order items
        const orderResponse = await axios.get('https://furnirobackendtest-3.onrender.com/api/orderpage/getorderitems');
        const orders = orderResponse.data;

        // Fetch product names
        const productResponse = await axios.get('https://furnirobackendtest-3.onrender.com/api/productpage/getproducts');
        const products = productResponse.data.data;

        // Create a mapping of product ID to product name
        const productMap = {};
        products.forEach(product => {
          productMap[product._id] = product.productName;
        });
        setProductMapping(productMap);

        // Set the fetched order items
        setOrderItems(orders);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrderItems();
  }, []);

  const handleDelete = async (id) => {
    try {
      console.log(id)
      await axios.delete(`https://furnirobackendtest-3.onrender.com/api/orderpage/deleteorder/${id}`);
      setOrderItems(orderItems.filter(item => item._id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div>
      <div className='grid-container'>
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
        <div className="table-container">
          <table className="order-table">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Color</th>
                <th>Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {orderItems.map((item) => (
                <tr key={item._id}>
                  <td>{productMapping[item.productid] || 'Unknown Product'}</td>
                  <td>{item.price}</td>
                  <td>{item.color}</td>
                  <td>{item.quantity}</td>
                  <td>
                  <span
                className="delete-icon"
                style={{ maxWidth: "5rem", cursor: "pointer" }}
                onClick={() => handleDelete(item._id)}
              >
                <MdDelete style={{ color: "red", height: "25px", width: "25px" }} />
              </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
