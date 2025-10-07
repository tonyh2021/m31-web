import React, { useState } from 'react';

export default function NewsletterForm() {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    // add your API submission logic here
  };

  return (

    <div className="newsletter-container">
      <div>
        <h2>Join our newsletter</h2>
        <p>Building a collaborative research community!</p>
      </div>
      <div className="newsletter-subscribe">
        <input
          type="email"
          placeholder="Enter Your Email Address"
          className="newsletter-input"
        />
        <button className="newsletter-button">SUBSCRIBE</button>
      </div>
      
    </div>
  );
}