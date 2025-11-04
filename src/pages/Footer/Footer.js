import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../../contexts/LanguageContext';
import './Footer.css';

const Footer = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      aboutTitle: "About the Clinic",
      aboutText: "DR SAJI ABRAHAM DENTAL SPECIALISTS & ORTHODONTIC CENTER, where innovative technology meets compassionate care. Our award-winning team provides you with the highest standard of dental excellence in a comfortable, modern environment.",
      quickLinksTitle: "Quick Links",
      quickLinks: [
        { text: "Home Page", to: "/" },
        { text: "About Us", to: "/about" },
        { text: "Our Services", to: "/services" },
        { text: "Book an Appointment", to: "/appointment" },
        { text: "Contact Us", to: "/contact" },
        { text: "FAQs (Frequently Asked Questions)", to: "/faq" }
      ],
      servicesTitle: "Our Services",
      serviceCategories: {
        "General Dentistry": [
          "General Dentistry",
          "Dental X-Rays",
          "Oral Surgery",
          "Root Canal Treatment"
        ],
        "Orthodontics": [
          "Fixed Appliance Orthodontics",
          "Early Treatment",
          "Damon System",
          "Clear Aligners"
        ],
        "Cosmetic & Restorative": [
          "Cosmetic Dentistry",
          "Hollywood Smile/Veneers",
          "Crown & Bridges",
          "Teeth Whitening",
          "Implant Dentistry"
        ]
      },
      contactTitle: "Contact Information",
      location: "Clinic 13 Building 134 Road 407, Block 704 Salmabad, Kingdom of Bahrain (first floor, Ruyan Pharmacy Building)",
      workingHours: "Saturday to Thursday: 9:00 AM – 9:00 PM | Friday: Closed",
      phone: "+97317001231",
      whatsapp: "+97334671231",
      email: "drsajiortho@gmail.com",
      instagram: "drsajiabraham"
    },
    ar: {
      aboutTitle: "عن العيادة",
      aboutText: "DR SAJI ABRAHAM DENTAL SPECIALISTS & ORTHODONTIC CENTER، حيث تلتقي التكنولوجيا المبتكرة بالرعاية الرحيمة. يقدم لك فريقنا الحائز على الجوائز أعلى معايير التميز في طب الأسنان في بيئة مريحة وعصرية.",
      quickLinksTitle: "روابط سريعة",
      quickLinks: [
        { text: "الصفحة الرئيسية", to: "/" },
        { text: "من نحن", to: "/about" },
        { text: "خدماتنا", to: "/services" },
        { text: "احجز موعد", to: "/appointment" },
        { text: "تواصل معنا", to: "/contact" },
        { text: "الأسئلة الشائعة", to: "/faq" }
      ],
      servicesTitle: "خدماتنا",
      serviceCategories: {
        "طب الأسنان العام": [
          "طب الأسنان العام",
          "أشعة الأسنان",
          "جراحة الفم",
          "علاج قناة الجذر"
        ],
        "تقويم الأسنان": [
          "تقويم الأسنان الثابت",
          "العلاج المبكر",
          "نظام دامون",
          "المحاذاة الشفافة"
        ],
        "التجميل والترميم": [
          "طب الأسنان التجميلي",
          "الابتسامة الهوليوودية/القشور",
          "التيجان والجسور",
          "تبييض الأسنان",
          "زراعة الأسنان"
        ]
      },
      contactTitle: "معلومات التواصل",
      location: "Clinic 13 Building 134 Road 407, Block 704 Salmabad، مملكة البحرين (الطابق الأول، مبنى صيدلية رويان)",
      workingHours: "السبت إلى الخميس: 9:00 صباحًا – 9:00 مساءً | الجمعة: مغلق",
      phone: "+97317001231",
      whatsapp: "+97334671231",
      email: "drsajiortho@gmail.com",
      instagram: "drsajiabraham"
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section footer-about">
          <h3>{content[language].aboutTitle}</h3>
          <p>{content[language].aboutText}</p>
        </div>

        <div className="footer-section footer-quick-links">
          <h3>{content[language].quickLinksTitle}</h3>
          <ul className="footer-links">
            {content[language].quickLinks.map((link, index) => (
              <li key={index} className="footer-link-item">
                <Link to={link.to} className="footer-link">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-section footer-services">
          <h3>{content[language].servicesTitle}</h3>
          <div className="footer-service-categories">
            {Object.entries(content[language].serviceCategories).map(([category, services]) => (
              <div key={category} className="footer-service-category">
                <h4 className="footer-category-title">{category}</h4>
                <ul className="footer-links">
                  {services.map((service, index) => (
                    <li key={index}>
                      <span className="footer-service-item">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-section footer-contact">
          <h3>{content[language].contactTitle}</h3>
          <p><FaMapMarkerAlt /> {content[language].location}</p>
          <p><FaClock /> {content[language].workingHours}</p>
          <div className="footer-contact-icons">
            <a href="tel:+97317001231" className="footer-contact-icon" title="Call Us">
              <FaPhone />
            </a>
            <a href="https://wa.me/97334671231" target="_blank" rel="noopener noreferrer" className="footer-contact-icon" title="WhatsApp">
              <FaWhatsapp />
            </a>
            <a href="mailto:drsajiortho@gmail.com" className="footer-contact-icon" title="Email Us">
              <FaEnvelope />
            </a>
            <a 
              href="https://www.facebook.com/drsajiabraham"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-contact-icon"
              title="Follow on Facebook"
            >
              <FaFacebook />
            </a>
            <a 
              href="https://www.instagram.com/drsajiabraham?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-contact-icon"
              title="Follow on Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

             <div className="footer-bottom">
         <div className="footer-bottom-content">
           <span>&copy; 2024 DR SAJI ABRAHAM DENTAL. All rights reserved.</span>
           <span className="footer-separator">|</span>
           <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
           <span className="footer-separator">|</span>
           <a href="/terms-of-service" className="footer-link">Terms of Service</a>
           <span className="footer-separator">|</span>
                                   <a 
              href="https://it-solutions.pmi-me.net/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="pmi-developer"
            >
              <span className="developed-by">Developed by PMI</span>
              <img 
                src="https://res.cloudinary.com/dvybb2xnc/image/upload/f_auto,q_auto/v1756121005/PMI_Purple_j8wvsj" 
                alt="PMI Logo" 
                className="pmi-logo"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'inline';
                }}
              />
              <span className="pmi-logo-text" style={{display: 'none'}}>PMI</span>
            </a>
         </div>
       </div>
    </footer>
  );
};

export default Footer;
