import React, { useState } from 'react';
import './Reset.css';

const Reset = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
  
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred. Please try again later.');
    }
  };
  
  return (
    <div className="reset-container">
      <h2 className="reset-title">Reset Your Password</h2>
      <form className="reset-form" onSubmit={handleSubmit}>
        <label htmlFor="email" className="reset-label">Email Address</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="reset-input"
        />
        <button type="submit" className="reset-button">Send Reset Link</button>
        {message && <p className="reset-message">{message}</p>}
      </form>
    </div>
  );
};

export default Reset;
