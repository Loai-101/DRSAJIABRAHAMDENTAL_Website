import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { FaInstagram, FaFacebook, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';
import './DamonSystem.css';

const DamonSystem = () => {
  const { language } = useLanguage();
  const currentLanguage = language || 'en';

  const content = {
    en: {
      heroTitle: "Damon System Self ligating Braces",
      mainDescription: "A Fantastic smile … Faster and with outstanding comfort—Damon System. A new clinically proven treatment approach that aligns your teeth and enhances your facial aesthetics-usually without extractions or rapid palatal Expanders",
      advantagesTitle: "CLINICALLY PROVEN ADVANTAGES",
      advantages: [
        "Significantly reduced treatment time",
        "Significantly fewer appointments",
        "Higher quality results"
      ],
      differentTitle: "What makes Damon System Different?",
      differentPoints: [
        "Passive self-ligating braces that eliminate the need for elastic or metal 'ties'",
        "High technology wires that move teeth faster and require fewer adjustments",
        "Better results in less time",
        "Beautiful smiles and beautiful faces",
        "Outstanding comfort",
        "For people of all ages",
        "Breakthrough technology"
      ]
    },
    ar: {
      heroTitle: "نظام دامون الأقواس ذاتية الربط",
      mainDescription: "ابتسامة رائعة ... أسرع وبأقصى راحة - نظام دامون. نهج علاجي جديد مثبت سريريًا يقوم بمحاذاة أسنانك ويعزز جماليات وجهك - عادة دون خلع أو موسعات سريعة للحنك",
      advantagesTitle: "مزايا مثبتة سريريًا",
      advantages: [
        "تقليل كبير في وقت العلاج",
        "عدد أقل بكثير من المواعيد",
        "نتائج عالية الجودة"
      ],
      differentTitle: "ما الذي يجعل نظام دامون مختلفًا؟",
      differentPoints: [
        "أقواس ذاتية الربط السلبية التي تلغي الحاجة إلى 'ربطات' مرنة أو معدنية",
        "أسلاك عالية التقنية تحرك الأسنان بشكل أسرع وتتطلب تعديلات أقل",
        "نتائج أفضل في وقت أقل",
        "ابتسامات جميلة ووجوه جميلة",
        "راحة استثنائية",
        "لأشخاص من جميع الأعمار",
        "تقنية مبتكرة"
      ]
    }
  };

  const currentContent = content[currentLanguage];

  return (
    <div className="damon-system-page">
      {/* Hero Section */}
      <section className="damon-system-hero">
        <div className="damon-system-hero-video-background">
          <video autoPlay muted loop playsInline>
            <source
              src="https://res.cloudinary.com/dvybb2xnc/video/upload/f_mp4/v1762238416/WhatsApp_Video_2025-11-04_at_09.40.06_88d667df_zbcodi.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="damon-system-hero-overlay"></div>
        <div className="damon-system-hero-container">
          <div className={`damon-system-hero-content ${currentLanguage === 'ar' ? 'rtl' : 'ltr'}`}>
            <h1 className="damon-system-hero-title">{currentContent.heroTitle}</h1>
            {/* Social Media Icons */}
            <div className="damon-system-hero-social-icons">
              <a 
                href="https://www.instagram.com/drsajiabraham?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="damon-system-hero-social-icon"
                title="Follow us on Instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://www.facebook.com/drsajiabraham"
                target="_blank"
                rel="noopener noreferrer"
                className="damon-system-hero-social-icon"
                title="Follow us on Facebook"
              >
                <FaFacebook />
              </a>
              <a 
                href="https://wa.me/97334671231"
                target="_blank"
                rel="noopener noreferrer"
                className="damon-system-hero-social-icon"
                title="Contact us on WhatsApp"
              >
                <FaWhatsapp />
              </a>
              <a 
                href="mailto:drsajiortho@gmail.com"
                className="damon-system-hero-social-icon"
                title="Send us an email"
              >
                <FaEnvelope />
              </a>
              <a 
                href="tel:+97317001231"
                className="damon-system-hero-social-icon"
                title="Call us"
              >
                <FaPhone />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="damon-system-content">
        <div className="damon-system-container">
          <section className="damon-system-section">
            <p className="damon-system-description">{currentContent.mainDescription}</p>
          </section>

          <section className="damon-system-section">
            <h2 className="damon-system-section-title">{currentContent.advantagesTitle}</h2>
            <ul className="damon-system-list">
              {currentContent.advantages.map((advantage, index) => (
                <li key={index} className="damon-system-list-item">{advantage}</li>
              ))}
            </ul>
          </section>

          <section className="damon-system-section">
            <h2 className="damon-system-section-title">{currentContent.differentTitle}</h2>
            <ul className="damon-system-list">
              {currentContent.differentPoints.map((point, index) => (
                <li key={index} className="damon-system-list-item">{point}</li>
              ))}
            </ul>
          </section>

          {/* CTA Button */}
          <div className="damon-system-cta">
            <Link to="/appointment" className="damon-system-cta-button">
              {currentLanguage === 'ar' ? 'احجز موعد' : 'Book Appointment'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DamonSystem;

