import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import CheckOut from "./Components/BillingDetails/CheckOut.js";
import Cart from "./Components/CartOut/Cart.js";
import Contact from "./Components/Contact/Contact.js";
import Navbar from "./Components/Nav/TestNav.js";
import HomePage from "./Components/HomePage/HomePage.js";
import Product from "./Components/Product/Product.js";
import Shop from "./Components/Shop/Shop.js";
import Footer from "./Components/Footer.js/Footer.js";
import Backend from './BackendUI/MainFile'
import Products from './BackendUI/Products/Productss.js'
import Categories from './BackendUI/Category/Categories.js'
import Users from './BackendUI/users/Users.js'
import Orders from './BackendUI/orders/Orders.js'
import Login from './BackendUI/Login/Login'
import Register from './BackendUI/Login/Register.js'
import ProtectedRoute from '../src/BackendUI/ProtectedRoute.js';
import Logout from '../src/BackendUI/Login/Logout.js';
const Layout = () => {
  const location = useLocation();

  const showNavbarFooter = !(
    location.pathname.startsWith('/backend') ||
    location.pathname.startsWith('/products') ||
    location.pathname.startsWith('/categories') ||
    location.pathname.startsWith('/users') ||
    location.pathname.startsWith('/orders')
  );

  return (
    <div className="App">
      {showNavbarFooter && <Navbar />}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </main>
      {showNavbarFooter && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Layout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        
        {/* Protected Routes */}
        <Route path="/backend" element={<ProtectedRoute element={<Backend />} />} />
        <Route path="/products" element={<ProtectedRoute element={<Products />} />} />
        <Route path="/categories" element={<ProtectedRoute element={<Categories />} />} />
        <Route path="/users" element={<ProtectedRoute element={<Users />} />} />
        <Route path="/orders" element={<ProtectedRoute element={<Orders />} />} />
      </Routes>
    </Router>
  );
}

export default App;
