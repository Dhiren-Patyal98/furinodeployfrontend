import React, { useState } from 'react';
import axios from 'axios';
import './AddCategory.css';

const CategoryForm = () => {
  const [description, setDescription] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [responseType, setResponseType] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('https://furnirobackendtest-3.onrender.com/api/categorypage/category', {
        description,
      });

      if (response.status === 200) {
        setResponseMessage('Category added successfully!');
        setResponseType('success');
        setDescription('');
      } else {
        setResponseMessage(`Error: ${response.data.message}`);
        setResponseType('error');
      }
    } catch (error) {
      setResponseMessage(`Error: ${error.response ? 'Category already exits ' : error.message}`);
      setResponseType('error');
    }
  };

  return (
    <div className='app-container'>
    
       
        <form className='cate-form' onSubmit={handleSubmit}>
        <h2>Add New Category</h2>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder='Add Category'
            required
          />
          <button type="submit" className="submit-button" >Add Category</button>
          <div className={`response-message ${responseType}`}>
            {responseMessage}
          </div>
        </form>
        
     
    </div>
  );
};

export default CategoryForm;


