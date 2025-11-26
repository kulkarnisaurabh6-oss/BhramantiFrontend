import React, { useState } from "react";
import "./QuoteForm.css";

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    destination: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Quote request submitted!");
    console.log("Form Data:", formData);
  };

  return (
    <div className="quote-box">
      <h2>Get a Free Quote</h2>
      <p className="subtitle">Talk To Our Holiday Expert</p>

      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Name" 
          required 
          onChange={handleChange}
        />

        <input 
          type="text" 
          name="phone" 
          placeholder="Phone" 
          required
          onChange={handleChange}
        />

        <input 
          type="email" 
          name="email" 
          placeholder="Your Email"
          required
          onChange={handleChange}
        />

        <input 
          type="text" 
          name="city" 
          placeholder="Your City" 
          required
          onChange={handleChange}
        />

        <select 
          name="destination" 
          required
          onChange={handleChange}
        >
          <option value="">Choose Your Destination</option>
          <option>Goa</option>
          <option>Kashmir</option>
          <option>Manali</option>
          <option>Leh Ladakh</option>
          <option>Rajasthan</option>
          <option>Andaman</option>
        </select>

        <button type="submit">SEND</button>
      </form>
    </div>
  );
}
