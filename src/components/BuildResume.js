import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Buildresume = () => {

  const navigate = useNavigate();   
  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    address: '',
    email: '',
    portfolio: '',
    universityName: '',
    course: '',
    cgpa: '',
    skills: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted: ', formData);
    // Handle form submission logic (e.g., send to server, navigate to next page, etc.)
  };

  return (
    <div className="form-container">
      <h2>Employee  Details Form</h2>
      <form onSubmit={handleSubmit}>
        <h3>Personal Details</h3>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Mobile Number:
          <input type="text" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} required />
        </label>
        <label>
          Address:
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Portfolio:
          <input type="url" name="portfolio" value={formData.portfolio} onChange={handleChange} />
        </label>

        <h3>Educational Details</h3>
        <label>
          University Name:
          <input type="text" name="universityName" value={formData.universityName} onChange={handleChange} required />
        </label>
        <label>
          Course:
          <input type="text" name="course" value={formData.course} onChange={handleChange} required />
        </label>
        <label>
          CGPA:
          <input type="text" name="cgpa" value={formData.cgpa} onChange={handleChange} required />
        </label>

        <h3>Skills</h3>
        <label>
          Skills (comma separated):
          <input type="text" name="skills" value={formData.skills} onChange={handleChange} required />
        </label>

        <button type="submit" onClick={()=>navigate("/Next.js")}>Next</button>
      </form>
    </div>
  );
}

export default Buildresume;
