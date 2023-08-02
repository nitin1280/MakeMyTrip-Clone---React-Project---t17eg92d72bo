import React, { useState } from 'react';
import "./ftsearch.css";
import { useNavigate } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    form: '',
    to: '',
    departure: '',
    returnDate: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePays = () => {
    if (validateForm()) {
      navigate("/payment");
    } else {
      alert("Please fill out all the required fields.");
    }
  };

  const validateForm = () => {
    const { form, to, departure, returnDate } = formData;
    return form.trim() !== '' && to.trim() !== '' && departure !== '' && returnDate !== '';
  };

  return (
    <div>
      <div className='forms'>
        <form action='' className='cont'>
          <label> form : </label>
          <input
            type='text'
            name='form'
            placeholder='Place'
            value={formData.form}
            onChange={handleInputChange}
          />
          <label> To : </label>
          <input
            type='text'
            name='to'
            placeholder='want to go'
            value={formData.to}
            onChange={handleInputChange}
          />
          <label> Departure : </label>
          <input
            type='date'
            name='departure'
            placeholder='Enter Check In'
            value={formData.departure}
            onChange={handleInputChange}
          />
          <label> Return : </label>
          <input
            type='date'
            name='returnDate'
            placeholder='Enter Check Out'
            value={formData.returnDate}
            onChange={handleInputChange}
          />
          <button className='btn2' onClick={handlePays}> Book </button>
        </form>
      </div>
    </div>
  );
};

export default App;