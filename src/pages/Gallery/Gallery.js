import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './Gallery.css';

const Gallery = () => {
  const { language } = useLanguage();

  return (
    <div className="gallery-page">
      <div className="gallery-container">
        <h1>{language === 'ar' ? 'معرض الحالات' : 'Gallery Of Cases'}</h1>
        {/* Content will be added later */}
      </div>
    </div>
  );
};

export default Gallery;

