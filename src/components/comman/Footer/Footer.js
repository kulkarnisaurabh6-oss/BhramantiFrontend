import React from "react";
import "./Footer.css";
import { FaSquareFacebook,FaSquareInstagram } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <h3>Bhramanti</h3>
          <p>
            Discover perfectly curated holiday packages that blend local charm, seamless planning, and unforgettable experiences.
          </p>
        </div>

        <div className="footer-links">
          <div className="link-column">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="link-column">
            <ul>
              <li><a href="#clients">Clients</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#career">Career</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#journal">Journal</a></li>
            </ul>
          </div>
          <div className="link-column">
            <ul>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms & Conditions</a></li>
              <li><a href="#partners">Partners</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-cta">
          <div className="socials">
            <a href="#insta" className="social"><FaSquareFacebook /></a>
            <a href="#twitter" className="social"><FaTwitter /></a>
            <a href="#fb" className="social"><IoLogoInstagram /></a>
            
          </div>
          <a className="contact-btn" href="#contact">Contact Us</a>
        </div>
      </div>

      <hr className="footer-sep" />

      <div className="copyright">
        © 2019-2020 All Rights Reserved.
      </div>
    </footer>
  );
}