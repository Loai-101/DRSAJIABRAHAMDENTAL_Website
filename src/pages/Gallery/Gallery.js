import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { FaInstagram, FaFacebook, FaWhatsapp, FaEnvelope, FaPhone, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Gallery.css';

const Gallery = () => {
  const { language } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Gallery images array - 28 images
  const galleryImages = [
    'https://res.cloudinary.com/dvybb2xnc/image/upload/v1762412138/034_copy_dlwjii.jpg',
    'https://res.cloudinary.com/dvybb2xnc/image/upload/v1762412189/052_copy_oxa35y.jpg',
    'https://res.cloudinary.com/dvybb2xnc/image/upload/v1762412203/038_copy_tf98vo.jpg',
    'https://res.cloudinary.com/dvybb2xnc/image/upload/v1762412218/046_copy_wtgaeq.jpg',
    'https://res.cloudinary.com/dvybb2xnc/image/upload/v1762412227/052_copy_oqmjip.jpg',
    'https://res.cloudinary.com/dvybb2xnc/image/upload/v1762412234/055_copy_kygxoq.jpg',
    'https://res.cloudinary.com/dvybb2xnc/image/upload/v1762412240/056_copy_m71k0b.jpg',
    'https://res.cloudinary.com/dvybb2xnc/image/upload/v1762412247/072_copy_evtpc9.jpg',
    'https://res.cloudinary.com/dvybb2xnc/image/upload/v1762412254/073_copy_hwfsg7.jpg',
    'https://res.cloudinary.com/dvybb2xnc/image/upload/v1762412261/206_copy_ebpyaa.jpg',
    'https://res.cloudinary.com/dvybb2xnc/image/upload/v1762412269/207_copy_mjvbqh.jpg',
    'https://res.cloudinary.com/dvybb2xnc/image/upload/v1762412277/214_copy_keppg7.jpg',
    'https://res.cloudinary.com/dvybb2xnc/image/upload/v1762412290/214a_copy_vwlkua.jpg',
    'https://res.cloudinary.com/dvybb2xnc/image/upload/v1762412296/214b_copy_gobgdl.jpg',
    'https://res.cloudinary.com/dvybb2xnc/image/upload/v1762412312/214d_copy_vptwjg.jpg',
    'https://res.cloudinary.com/dvybb2xnc/image/upload/v1762412321/221_copy_rio8wu.jpg',
    'https://res.cloudinary.com/dvybb2xnc/image/upload/v1762412329/228_copy_ugrdkr.jpg',
    'https://res.cloudinary.com/dvybb2xnc/image/upload/v1762412338/252_copy_bk3hcg.jpg',
    'https://res.cloudinary.com/dvybb2xnc/image/upload/v1762412352/255_copy_z59otg.jpg',
    'https://res.cloudinary.com/dvybb2xnc/image/upload/v1762412357/257_copy_x0hlas.png',
    'https://res.cloudinary.com/dvybb2xnc/image/upload/v1762412362/ANNA1_copy_o8tvl6.jpg',
    'https://res.cloudinary.com/dvybb2xnc/image/upload/v1762412368/irene_fb_copy_rd83lp.jpg',
    'https://res.cloudinary.com/dvybb2xnc/image/upload/v1762412375/JOFIA_2_copy_fpv6il.jpg',
    'https://res.cloudinary.com/dvybb2xnc/image/upload/v1762412382/johan_copy_zhx2ej.jpg',
    'https://res.cloudinary.com/dvybb2xnc/image/upload/v1762412392/shahank4_copy_qsw45y.jpg',
    'https://res.cloudinary.com/dvybb2xnc/image/upload/v1762412399/shashank5_copy_vmtkjd.jpg',
    'https://res.cloudinary.com/dvybb2xnc/image/upload/v1762412404/shshank1_copy_rkofch.jpg',
    'https://res.cloudinary.com/dvybb2xnc/image/upload/v1762412411/Slide9_copy_rtk1hp.jpg'
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (galleryImages.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        prevSlide === galleryImages.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, [galleryImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === galleryImages.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === 0 ? galleryImages.length - 1 : prevSlide - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="gallery-hero-video">
          <img
            src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1765188530/istockphoto-1388931724-612x612_x0tnht.jpg"
            alt="Gallery Hero"
            className="hero-image"
          />
        </div>
        <div className="gallery-hero-overlay"></div>
        <div className="gallery-hero-container">
          <div className={`gallery-hero-content ${language === 'ar' ? 'rtl' : 'ltr'}`}>
            <h1 className="gallery-hero-title">
              {language === 'ar' ? 'معرض الحالات' : 'Gallery Of Cases'}
            </h1>
            <p className="gallery-hero-caption">
              {language === 'ar' ? 'نخلق ابتسامات لا تتلاشى أبداً' : 'We create smiles that never fade'}
            </p>
            {/* Social Media Icons */}
            <div className="gallery-social-icons">
              <a 
                href="https://www.instagram.com/drsajiabraham?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="gallery-social-icon"
                title="Follow us on Instagram"
              >
                <FaInstagram />
              </a>
              
              <a 
                href="https://www.facebook.com/drsajiabraham"
                target="_blank"
                rel="noopener noreferrer"
                className="gallery-social-icon"
                title="Follow us on Facebook"
              >
                <FaFacebook />
              </a>
              
              <a 
                href="https://wa.me/97334671231"
                target="_blank"
                rel="noopener noreferrer"
                className="gallery-social-icon"
                title="Contact us on WhatsApp"
              >
                <FaWhatsapp />
              </a>
              
              <a 
                href="mailto:drsajiortho@gmail.com"
                className="gallery-social-icon"
                title="Send us an email"
              >
                <FaEnvelope />
              </a>
              
              <a 
                href="tel:+97317001231"
                className="gallery-social-icon"
                title="Call us"
              >
                <FaPhone />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Slider Section */}
      {galleryImages.length > 0 && (
        <section className="gallery-slider-section">
          <div className="gallery-slider-container">
            <div className="gallery-slider-wrapper">
              <div 
                className="gallery-slider-track"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {galleryImages.map((image, index) => (
                  <div key={index} className="gallery-slide">
                    <img 
                      src={image} 
                      alt={`Gallery Case ${index + 1}`}
                      className="gallery-slide-image"
                    />
                  </div>
                ))}
              </div>
              
              {/* Navigation Arrows */}
              <button 
                className="gallery-slider-btn gallery-slider-btn-prev"
                onClick={prevSlide}
                aria-label="Previous slide"
              >
                <FaChevronLeft />
              </button>
              <button 
                className="gallery-slider-btn gallery-slider-btn-next"
                onClick={nextSlide}
                aria-label="Next slide"
              >
                <FaChevronRight />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="gallery-slider-dots">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  className={`gallery-slider-dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="gallery-container">
        {/* Content will be added later */}
      </div>
    </div>
  );
};

export default Gallery;

