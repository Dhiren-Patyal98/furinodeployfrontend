import React, { useEffect, useState } from 'react';
import Sidebar from '../sideBar';
import axios from 'axios';
import './users.css';
import { MdDelete } from 'react-icons/md';
export default function Users() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/user/getuser');
        setUsers(response.data.data); // Assuming response.data.data is an array of users
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      } 
    };

    fetchUsers(); 
  }, []);

  const handleDelete = async (id) => {
    try {
      console.log(id);  
      await axios.delete(`http://localhost:5000/api/user/deleteuser/${id}`);
      setUsers(users.filter(user => user._id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <div className='grid-container'>
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
        
        <div className="table-container">
          <table className="user-table">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>User Type</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map(user => (
                  <tr key={user._id}>
                  
                    <td>{user.firstname}</td>
                    <td>{user.lastname}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.usertype}</td>
                    <td>
                    <span
                className="delete-icon"
                style={{ maxWidth: "5rem", cursor: "pointer" }}
                onClick={() => handleDelete(user._id)}
               
                
              >
                <MdDelete style={{ color: "red", height: "25px", width: "25px" }} />
              </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">No users found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
