import React from "react";
import '../Footer/Footer.css';

const Footer = () => {
  return (
    <footer>
       <div className="footer-box">

        <div className="footer-item">
          <span className="icon">📞</span> 9552664257
        </div> 

        <div className="footer-item">
          <span className="icon">✉️</span> info@holidayers.com
        </div>

        <div className="footer-item">
          <span className="icon">⭐</span> Special Offers!
        </div>

        <div className="footer-item">
          <span className="icon">🌐</span> Free Travel Guide
        </div>

      </div>

      <p className="footer-copy">
        © 2025 Happy Holidayers • Designed with ❤️ by Nikita
      </p>
    </footer>
  );
};


export default Footer;