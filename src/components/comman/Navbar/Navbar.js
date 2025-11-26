import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // 👈 create a CSS file for styles

export default function Navbar() {
  return (
    <header>
      <div className="nav-inner">
        <div className="logo">
          <span className="logo-icon">✈️</span>
          <span className="logo-text">भ्रमंती</span>
        </div>

        {/* <div className="right-info">
          <div className="info-item"><span className="icon">📞</span> +91 123 456 7890</div>
          <div className="info-item"><span className="icon">✉️</span> info@holidayers.com</div>
          <div className="info-item"><span className="icon">⭐</span> Special Offers!</div>
          <div className="info-item"><span className="icon">🌐</span> Free Travel Guide</div>
        </div> */}

        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#places">Destinations</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <Link to="/login" className="cta">Login</Link>
        {/* <button className="cta">
      Login
    </button> */}
        {/* <div className="cta"><button>Login</button></div> */}
      </div>
    </header>
  );
}