import React, { useState } from 'react';
import axios from 'axios';
import './QuoteForm.css'; // Import the CSS file

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    carMaker: '',
    carModel: '',
    manufacturingYear: '',
    coverage: 'basic'
  });
  const [quote, setQuote] = useState(null);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/quotes', formData);
      setQuote(response.data.quote);
      setError('');
    } catch (error) {
      console.error('Error getting quote:', error);
      setError('Failed to get quote. Please try again.');
      setQuote(null);
    }
  };

  return (
    <div className="quote-form-container">
      <form onSubmit={handleSubmit} className="quote-form">
        <h2>Get an Insurance Quote</h2>
        {error && <p className="error">{error}</p>}
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Age:</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Car Maker:</label>
          <input type="text" name="carMaker" value={formData.carMaker} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Car Model:</label>
          <input type="text" name="carModel" value={formData.carModel} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>manufacturing Year:</label>
          <input type="text" name="manufacturingYear" value={formData.manufacturingYear} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Coverage:</label>
          <select name="coverage" value={formData.coverage} onChange={handleChange}>
            <option value="basic">Basic</option>
            <option value="premium">Premium</option>
          </select>
        </div>
        <button type="submit" className="submit-button">Get Quote</button>
      </form>
      {quote && (
        <div className="quote-result">
          <h3>Your Quote:</h3>
          <p>${quote}</p>
        </div>
      )}
    </div>
  );
};

export default QuoteForm;
