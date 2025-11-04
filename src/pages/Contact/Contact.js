import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { FaInstagram, FaFacebook, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('contact');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const content = {
    en: {
      heroTitle: "Contact Us",
      heroDescription: "",
      heroButton1: "Call Now",
      heroButton2: "WhatsApp",
      address: {
        title: "Clinic's Official Address",
        clinic: "DR SAJI ABRAHAM DENTAL",
        details: "Clinic 13 Building 134 Road 407, Block 704 Salmabad,",
        location: "Kingdom of Bahrain (first floor, Ruyan Pharmacy Building)"
      },
      contact: {
        title: "Contact Info",
        phone: "+97317001231",
        whatsapp: "+97334671231",
        email: "drsajiortho@gmail.com"
      },
      hours: {
        title: "Office Hours",
        weekdays: "Saturday Thursday :9:00 AM - 9:00 PM",
        friday: "Friday Closed"
      },
      map: {
        title: "Our Location",
        subtitle: "Location map",
        linkText: "Open in Google Maps"
      },
      movingBar: [
        "DR SAJI ABRAHAM DENTAL",
        "Clinic 13 Building 134 Road 407, Block 704 Salmabad",
        "Kingdom of Bahrain",
        "first floor, Ruyan Pharmacy Building",
        "Phone: +97317001231",
        "WhatsApp: +97334671231",
        "Email: drsajiortho@gmail.com",
        "Saturday Thursday: 9:00 AM - 9:00 PM",
        "Friday Closed"
      ]
    },
    ar: {
      heroTitle: "تواصل معنا",
      heroDescription: "",
      heroButton1: "اتصل الآن",
      heroButton2: "واتساب",
      address: {
        title: "العنوان الرسمي للعيادة",
        clinic: "DR SAJI ABRAHAM DENTAL",
        details: "Clinic 13 Building 134 Road 407, Block 704 Salmabad,",
        location: "مملكة البحرين (الطابق الأول، مبنى صيدلية رويان)"
      },
      contact: {
        title: "معلومات التواصل",
        phone: "+97317001231",
        whatsapp: "+97334671231",
        email: "drsajiortho@gmail.com"
      },
      hours: {
        title: "ساعات العمل",
        weekdays: "السبت الخميس: 9:00 صباحًا - 9:00 مساءً",
        friday: "الجمعة مغلق"
      },
      map: {
        title: "موقعنا",
        subtitle: "خريطة الموقع",
        linkText: "فتح في خرائط جوجل"
      },
      movingBar: [
        "DR SAJI ABRAHAM DENTAL",
        "Clinic 13 Building 134 Road 407, Block 704 Salmabad",
        "مملكة البحرين",
        "الطابق الأول، مبنى صيدلية رويان",
        "الهاتف: +97317001231",
        "الواتساب: +97334671231",
        "البريد الإلكتروني: drsajiortho@gmail.com",
        "السبت الخميس: 9:00 صباحًا - 9:00 مساءً",
        "الجمعة مغلق"
      ]
    }
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-video">
          <img
            src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1762234138/1_copy_oylpl7.png"
            alt="Contact Hero"
            className="hero-image"
          />
        </div>
        <div className="contact-hero-overlay"></div>
        <div className="contact-hero-container">
          <div className={`contact-hero-content ${language === 'ar' ? 'rtl' : 'ltr'}`}>
            {/* Social Media Icons */}
            <div className="contact-social-icons">
              <a 
                href="https://www.instagram.com/drsajiabraham?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-icon"
                title="Follow us on Instagram"
              >
                <FaInstagram />
              </a>
              
              <a 
                href="https://www.facebook.com/drsajiabraham"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-icon"
                title="Follow us on Facebook"
              >
                <FaFacebook />
              </a>
              
              <a 
                href="https://wa.me/97334671231"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-icon"
                title="Contact us on WhatsApp"
              >
                <FaWhatsapp />
              </a>
              
              <a 
                href="mailto:drsajiortho@gmail.com"
                className="contact-social-icon"
                title="Send us an email"
              >
                <FaEnvelope />
              </a>
              
              <a 
                href="tel:+97317001231"
                className="contact-social-icon"
                title="Call us"
              >
                <FaPhone />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Moving Bar */}
      <div className="contact-moving-bar">
        <div className={`contact-moving-content ${language === 'ar' ? 'rtl' : 'ltr'}`}>
          {content[language].movingBar.map((item, index) => (
            <span key={index} className="contact-moving-item">
              {item}
            </span>
          ))}
        </div>
      </div>

      <section id="contact" className={`contact ${isVisible ? 'contact-visible' : ''}`}>
        <div className="contact-container">
          <div className="contact-content">
                         <div className="contact-info">
               <div className="contact-cards">
                  <div className="contact-card">
                    <div className="contact-card-icon">📍</div>
                    <h4 className="contact-card-title">{content[language].address.title}</h4>
                    <div className="contact-card-value">
                      <strong>{content[language].address.clinic}</strong><br />
                      {content[language].address.details}<br />
                      {content[language].address.location}
                    </div>
                  </div>
                  
                  <div className="contact-card">
                    <div className="contact-card-icon">📞</div>
                    <h4 className="contact-card-title">{content[language].contact.title}</h4>
                    <div className="contact-card-value">
                      <a href={`tel:${content[language].contact.phone}`} className="contact-info-link">
                        <FaPhone className="contact-info-icon" />
                        <span>Phone: Call {content[language].contact.phone}</span>
                      </a>
                      <a href={`https://wa.me/${content[language].contact.whatsapp.replace('+', '')}`} target="_blank" rel="noopener noreferrer" className="contact-info-link">
                        <FaWhatsapp className="contact-info-icon" />
                        <span>WhatsApp {content[language].contact.whatsapp}</span>
                      </a>
                      <a href={`mailto:${content[language].contact.email}`} className="contact-info-link">
                        <FaEnvelope className="contact-info-icon" />
                        <span>Email: {content[language].contact.email}</span>
                      </a>
                    </div>
                  </div>
                  
                  <div className="contact-card">
                    <div className="contact-card-icon">🕘</div>
                    <h4 className="contact-card-title">{content[language].hours.title}</h4>
                    <div className="contact-card-value">
                      {content[language].hours.weekdays}<br />
                      {content[language].hours.friday}
                    </div>
                  </div>
               </div>
            </div>
            
                         {/* Map Section */}
             <div className="contact-map-section">
               <h3 className="map-title">{content[language].map.title}</h3>
               <p className="map-address">{content[language].map.subtitle}</p>
               <div className="map-container">
                 <iframe
                   src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d230120.0!2d50.5853!3d26.0667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbh!4v1234567890123"
                   width="100%"
                   height="400"
                   style={{ border: 0 }}
                   allowFullScreen=""
                   loading="lazy"
                   referrerPolicy="no-referrer-when-downgrade"
                   title="Bahrain Map"
                   className="contact-map"
                 ></iframe>
                 <div className="map-overlay">
                   <a 
                     href="https://maps.app.goo.gl/BxpmobpfZ8fwSpai6?g_st=ipc" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="map-link"
                   >
                     <div className="map-link-content">
                       <span className="map-link-icon">🗺️</span>
                       <span className="map-link-text">{content[language].map.linkText}</span>
                     </div>
                   </a>
                 </div>
               </div>
             </div>

          </div>
        </div>
      </section>


    </div>
  );
};

export default Contact;
