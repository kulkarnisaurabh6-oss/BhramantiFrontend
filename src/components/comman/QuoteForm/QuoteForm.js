import React, { useState } from "react";
import "./QuoteForm.css";
import CustomAlert from "../CustomAlert/CustomAlert";

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    destination: "",
  });

  // declare alert state BEFORE any use
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    setShowAlert(true);

    // Clear form inputs
    setFormData({
      name: "",
      phone: "",
      email: "",
      city: "",
      destination: "",
    });
  };

  return (
    <>
      <div className="quote-box">
        <h2>Get a Free Quote</h2>
        <p className="subtitle">Talk To Our Holiday Expert</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            required
            value={formData.phone}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="city"
            placeholder="Your City"
            required
            value={formData.city}
            onChange={handleChange}
          />

          <select
            name="destination"
            required
            value={formData.destination}
            onChange={handleChange}
          >
            <option value="">Choose Your Destination</option>
            <option value="Goa">Goa</option>
            <option value="Kashmir">Kashmir</option>
            <option value="Manali">Manali</option>
            <option value="Leh Ladakh">Leh Ladakh</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Andaman">Andaman</option>
          </select>

          <button type="submit">Enquire</button>
        </form>
      </div>

      {showAlert && (
        <CustomAlert
          message="Quote request submitted successfully!"
          onClose={() => setShowAlert(false)}
        />
      )}
    </>
  );
}