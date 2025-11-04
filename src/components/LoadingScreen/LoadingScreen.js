import React from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ fadeOut }) => {
  return (
    <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className="loading-content">
        <div className="loading-logo">
          <img 
            src="https://res.cloudinary.com/dvybb2xnc/image/upload/f_png,b_white/v1762154428/Dr_Logo_tdakk7.ai" 
            alt="DR SAJI ABRAHAM DENTAL Logo" 
            className="loading-logo-image"
          />
        </div>
        <h1 className="loading-title">DR SAJI ABRAHAM DENTAL</h1>
      </div>
    </div>
  );
};

export default LoadingScreen;
