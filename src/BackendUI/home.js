import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
//import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,Line,LineChart } from 'recharts';
import axios from 'axios'; // Add this line if you are using axios for API requests

function Home() {
  // State variables to store data
  const [users, setUsers] = useState(null);
  const [categories, setCategories] = useState(null);
  const [products, setProducts] = useState(null);
  const [orders, setOrders] = useState(null); // If you have a route for orders, add it here

  // Function to fetch data
  const fetchData = async () => {
    try {
      // Fetching categories data
      const categoryResponse = await axios.get('https://furnirobackendtest-3.onrender.com/api/categorypage/getcategory');
      setCategories(categoryResponse.data.data.length); // Adjust according to your API response structure

      // Fetching products data
      const productResponse = await axios.get('https://furnirobackendtest-3.onrender.com/api/productpage/getproductvariety');
      setProducts(productResponse.data.data.length); // Adjust according to your API response structure

      // Fetching users data - add your API endpoint for users

      const usersResponse = await axios.get('https://furnirobackendtest-3.onrender.com/api/user/getuser');
      setUsers(usersResponse.data.data.length); 
      
      // Adjust according to your API response structure

      // Fetching orders data - add your API endpoint for orders
      const ordersResponse = await axios.get('https://furnirobackendtest-3.onrender.com/api/orderpage/getorderitems');
      setOrders(ordersResponse.data.length); // Adjust according to your API response structure
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>DASHBOARD</h3>
      </div>

      <div className='main-cards'>
       <Link to="/users"> <div className='card'>
          <div className='card-inner'>
            <h3>USERS</h3>
            <BsFillArchiveFill className='card_icon' />
          </div>
          <h1>{users !== null ? users : 'Loading...'}</h1>
        </div>
        </Link>
       <Link to="/categories"> <div className='card' style={{backgroundColor:"yellow"}}>
          <div className='card-inner'>
            <h3>CATEGORIES</h3>
            <BsFillGrid3X3GapFill className='card_icon' />
          </div>
          <h1>{categories !== null ? categories : 'Loading...'}</h1>
        </div> 
        </Link>
        <Link to='/products'>
        <div className='card'  style={{backgroundColor:"#45d151"}}>
          <div className='card-inner'>
            <h3>PRODUCTS</h3>
            <BsPeopleFill className='card_icon' />
          </div>
          <h1>{products !== null ? products : 'Loading...'}</h1>
        </div>
        </Link>
        <Link to='/orders'>
        <div className='card'  style={{backgroundColor:"red"}}>
          <div className='card-inner'>
            <h3>ORDERS</h3>
            <BsFillBellFill className='card_icon' />
          </div>
          <h1>{orders !== null ? orders : 'Loading...'}</h1>
        </div>
        </Link>
      </div>

      {/* Uncomment this block if you want to add charts */}
      
      {/* <div className='charts'>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div> */}
     
    </main>
  );
}

export default Home;
