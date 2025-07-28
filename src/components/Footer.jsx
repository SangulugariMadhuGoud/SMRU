import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Footer.css'; // Assuming you have a CSS file for styling
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col about">
          <h3>SMRU</h3>
          <p>Rehabilitation University</p>
          <p className="footer-desc">
            India's leading private university for rehabilitative sciences, empowering students to heal, restore, and uplift lives.
          </p>
          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/academics">Academics</Link></li>
            <li><Link to="/admissions">Admissions</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col">
  <h4>Programs</h4>
  <ul>
    <li><Link to="/departments#bpt">Bachelor of Physiotherapy</Link></li>
    <li><Link to="/departments#mpt">Master of Physiotherapy</Link></li>
    <li><Link to="/departments#ot">Occupational Therapy</Link></li>
    <li><Link to="/departments#cp">Clinical Psychology</Link></li>
    <li><Link to="/departments#sa">Speech & Audiology</Link></li>
    <li><Link to="/departments#rn">Rehabilitation Nursing</Link></li>
  </ul>
</div>

        <div className="footer-col contact">
          <h4>Contact Info</h4>
          <p><FaMapMarkerAlt /> St. Mary’s Rehabilitation University<br />Deshmuki, Hyderabad - 500099</p>
          <p><FaPhoneAlt /> +91-90104-55590</p>
          <p><FaPhoneAlt /> +91-90104-55591</p>
          <p><FaPhoneAlt /> +91-90104-55592</p>
          <p><FaEnvelope /> reach@smru.in</p>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 . All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
