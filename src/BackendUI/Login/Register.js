import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import "./login.css"; // Reusing CSS from login.css

function Register() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
  });

 
  const navigate = useNavigate(); // Hook to programmatically navigate

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
      const response = await fetch("https://furnirobackendtest-3.onrender.com/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        // Clear input fields
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          password: "",
        });
        // Show alert and redirect to login page
        alert("Registration successful!");
        navigate("/login");
      } else {
        alert(data.msg || "Registration failed.");
      }
    } catch (error) {
      alert("An error occurred.");
    }
  };

  return (
    <div className="yo-body">
      <div className="App">
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <h1>Register</h1>
            <div className="input-box">
              <input
                type="text"
                name="firstname"
                placeholder="First Name"
                value={formData.firstname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                name="lastname"
                placeholder="Last Name"
                value={formData.lastname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-box">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-box">
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-box">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Register</button>
            <div className="register-link">
              <p>
                Already have account? <Link to="/login">Login here</Link>
              </p>
            </div>
           
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
