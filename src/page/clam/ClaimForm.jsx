import React, { useState } from 'react';
import axios from 'axios';
import './ClaimForm.css'; // Import the CSS file

const ClaimForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    policyNumber: '',
    carMaker: '',
    carModel: '',
    claimAmount: '',
    description: ''
  });
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('name', formData.name);
    data.append('policyNumber', formData.policyNumber);
    data.append('claimAmount', formData.claimAmount);
    data.append('description', formData.description);
    if (image) {
      data.append('image', image);
    }

    try {
      const response = await axios.post('http://localhost:5000/api/claims', data);
      onSubmit(response.data);
      setFormData({ name: '', policyNumber: '', claimAmount: '', description: '' });
      setImage(null);
    } catch (error) {
      console.error('Error submitting claim:', error);
      setError('Failed to submit claim. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="claim-form">
      <h2>Submit a Claim</h2>
      {error && <p className="error">{error}</p>}
      <div className="form-group">
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Policy Number:</label>
        <input type="text" name="policyNumber" value={formData.policyNumber} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Claim Amount:</label>
        <input type="number" name="claimAmount" value={formData.claimAmount} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Description:</label>
        <textarea name="description" value={formData.description} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Upload Image:</label>
        <input type="file" onChange={handleImageChange} />
      </div>
      <button type="submit" className="submit-button">Submit Claim</button>
    </form>
  );
};

export default ClaimForm;
