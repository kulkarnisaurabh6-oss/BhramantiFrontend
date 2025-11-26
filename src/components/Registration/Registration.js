import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import './Registration.css';


function Signup() {
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedDestination, setSelectedDestination] = useState(null);

  const cityOptions = [
    { value: 'Mumbai', label: 'Mumbai' },
    { value: 'Delhi', label: 'Delhi' },
    { value: 'Bengaluru', label: 'Bengaluru' },
    { value: 'Hyderabad', label: 'Hyderabad' },
    { value: 'Ahmedabad', label: 'Ahmedabad' },
    { value: 'Chennai', label: 'Chennai' },
    { value: 'Kolkata', label: 'Kolkata' },
    { value: 'Pune', label: 'Pune' },
    { value: 'Jaipur', label: 'Jaipur' },
    { value: 'Lucknow', label: 'Lucknow' },
    { value: 'Nashik', label: 'Nashik' },
    { value: 'Indore', label: 'Indore' },
    { value: 'Bhopal', label: 'Bhopal' },
    { value: 'Patna', label: 'Patna' },
    { value: 'Agra', label: 'Agra' },
    { value: 'Varanasi', label: 'Varanasi' },
    // Add more cities as needed
  ];

  const destinationOptions = [
    { value: 'goa', label: 'Goa' },
    { value: 'kerala', label: 'Kerala' },
    { value: 'ladakh', label: 'Ladakh' },
    { value: 'jaipur', label: 'Jaipur' },
    { value: 'rishikesh', label: 'Rishikesh' },
    { value: 'ooty', label: 'Ooty' },
    { value: 'darjeeling', label: 'Darjeeling' },
    { value: 'andaman', label: 'Andaman & Nicobar Islands' },
    { value: 'agra', label: 'Agra' },
    { value: 'varanasi', label: 'Varanasi' },
    { value: 'himachal', label: 'Himachal' },
    { value: 'shimla', label: 'Shimla' },
    { value: 'manali', label: 'Manali' },
    { value: 'mumbai', label: 'Mumbai' },
    { value: 'delhi', label: 'Delhi' },
    { value: 'kutch', label: 'Rann of Kutch' },
    // Add more destinations as needed
  ];

  return (
    <div className="registration-page">
      {/* <Navbar/> */}
      <div className="registration-box">
        <h2>Get a Free Quote</h2>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Phone Number" required />

          {/* City Dropdown */}
          <div style={{ marginBottom: '15px' }}>
            <Select
              options={cityOptions}
              value={selectedCity}
              onChange={setSelectedCity}
              placeholder="City of Residence"
              isSearchable
              required
            />
          </div>

          {/* Destination Dropdown */}
          <div style={{ marginBottom: '15px' }}>
            <Select
              options={destinationOptions}
              value={selectedDestination}
              onChange={setSelectedDestination}
              placeholder="Select a Destination"
              isSearchable
              required
            />
          </div>

          <button type="submit">Enquire</button>

          <p>
            <Link to="/Login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
