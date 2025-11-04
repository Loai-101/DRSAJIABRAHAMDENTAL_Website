import React from 'react';
import { FaInstagram, FaFacebook, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';
import './SocialSidebar.css';

const SocialSidebar = () => {
  return (
    <div className="social-sidebar">
      <div className="social-sidebar-content">
        <a 
          href="https://www.instagram.com/drsajiabraham?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          title="Follow us on Instagram"
        >
          <FaInstagram />
        </a>
        
        <a 
          href="https://www.facebook.com/drsajiabraham"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          title="Follow us on Facebook"
        >
          <FaFacebook />
        </a>
        
        <a 
          href="https://wa.me/97334671231"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          title="Contact us on WhatsApp"
        >
          <FaWhatsapp />
        </a>
        
        <a 
          href="mailto:drsajiortho@gmail.com"
          className="social-icon"
          title="Send us an email"
        >
          <FaEnvelope />
        </a>
        
        <a 
          href="tel:+97317001231"
          className="social-icon"
          title="Call us"
        >
          <FaPhone />
        </a>
      </div>
    </div>
  );
};

export default SocialSidebar;
