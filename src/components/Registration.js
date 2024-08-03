import React, { useState } from 'react';
import './Registration.css';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {

  const [formData, setFormData] = useState({
    profilePic: null,
    name: '',
    email: '',
    contactNo: '',
    dob: '',
    city: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };
  const navigate = useNavigate(); 
  return (
    <div className="registration-form-container">
      <form className="registration-form" onSubmit={handleSubmit}>
        <h2><u>REGISTRATION FORM</u></h2>
        <div className="form-group">
          <label htmlFor="profilePic">Profile Picture</label>
          <input type="file" id="profilePic" name="profilePic" accept="image/*" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="contactNo">Contact Number</label>
          <input type="tel" id="contactNo" name="contactNo" value={formData.contactNo} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="dob">Date of Birth</label>
          <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit" className="submit-button" onClick={()=>navigate("/src/components/Login.js")}>SIGN-UP</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
