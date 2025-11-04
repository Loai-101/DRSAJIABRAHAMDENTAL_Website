import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { FaInstagram, FaFacebook, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';
import './TeethWhitening.css';

const TeethWhitening = () => {
  const { language } = useLanguage();
  const currentLanguage = language || 'en';

  const content = {
    en: {
      heroTitle: "Dental Bleaching",
      subtitle: "WHITER SMILE....BRIGHTER SMILE.",
      description: "DENTAL WHITENING- in office bleaching system with FLASH Advanced bleaching system",
      whatIsTitle: "What is teeth whitening",
      whatIsPoints: [
        "Dental tooth whitening is a cosmetic procedure aimed at lightening the natural color of teeth without removing any of the tooth surfaces.",
        "The process can involve methods, such as bleaching with peroxide- based gels combined with the use of laser type of light source.",
        "Professional whitening performed by a dentist typically offers much more immediate and noticeable results."
      ],
      benefits: [
        {
          title: "Self-Esteem",
          description: "Tooth whitening can significantly brighten your smile, enhancing your overall appearance."
        },
        {
          title: "Non- Invasive",
          description: "Professional dental tooth whitening does not remove or destroy any tooth structure."
        },
        {
          title: "Fast results",
          description: "Professional treatment can be completed quickly, often on just one visit, saving time."
        },
        {
          title: "Safety",
          description: "Done by professionals, these treatments ensure safety and minimize the risk of gum irritation."
        }
      ]
    },
    ar: {
      heroTitle: "تبييض الأسنان",
      subtitle: "ابتسامة أكثر بياضًا....ابتسامة أكثر إشراقًا.",
      description: "تبييض الأسنان - نظام تبييض في العيادة مع نظام FLASH المتقدم للتبييض",
      whatIsTitle: "ما هو تبييض الأسنان",
      whatIsPoints: [
        "تبييض الأسنان هو إجراء تجميلي يهدف إلى تفتيح اللون الطبيعي للأسنان دون إزالة أي من أسطح الأسنان.",
        "يمكن أن تتضمن العملية طرقًا مثل التبييض بالهلام القائم على البيروكسيد مع استخدام مصدر ضوء من نوع الليزر.",
        "عادة ما يقدم التبييض المهني الذي يقوم به طبيب الأسنان نتائج فورية وملحوظة أكثر بكثير."
      ],
      benefits: [
        {
          title: "الثقة بالنفس",
          description: "يمكن أن يضيء تبييض الأسنان ابتسامتك بشكل كبير، مما يعزز مظهرك العام."
        },
        {
          title: "غير تدخلي",
          description: "لا يزيل التبييض المهني للأسنان أو يدمر أي هيكل للأسنان."
        },
        {
          title: "نتائج سريعة",
          description: "يمكن إكمال العلاج المهني بسرعة، غالبًا في زيارة واحدة فقط، مما يوفر الوقت."
        },
        {
          title: "السلامة",
          description: "عند إجرائه من قبل المهنيين، تضمن هذه العلاجات السلامة وتقلل من خطر تهيج اللثة."
        }
      ]
    }
  };

  const currentContent = content[currentLanguage];

  return (
    <div className="teeth-whitening-page">
      {/* Hero Section */}
      <section className="teeth-whitening-hero">
        <div className="teeth-whitening-hero-video-background">
          <video autoPlay muted loop playsInline>
            <source
              src="https://res.cloudinary.com/dvybb2xnc/video/upload/f_mp4/v1762238436/WhatsApp_Video_2025-11-04_at_09.40.08_150a314a_bzjgkj.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="teeth-whitening-hero-overlay"></div>
        <div className="teeth-whitening-hero-container">
          <div className={`teeth-whitening-hero-content ${currentLanguage === 'ar' ? 'rtl' : 'ltr'}`}>
            <h1 className="teeth-whitening-hero-title">{currentContent.heroTitle}</h1>
            <h2 className="teeth-whitening-hero-subtitle">{currentContent.subtitle}</h2>
            <p className="teeth-whitening-hero-description">{currentContent.description}</p>
            {/* Social Media Icons */}
            <div className="teeth-whitening-hero-social-icons">
              <a 
                href="https://www.instagram.com/drsajiabraham?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="teeth-whitening-hero-social-icon"
                title="Follow us on Instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://www.facebook.com/drsajiabraham"
                target="_blank"
                rel="noopener noreferrer"
                className="teeth-whitening-hero-social-icon"
                title="Follow us on Facebook"
              >
                <FaFacebook />
              </a>
              <a 
                href="https://wa.me/97334671231"
                target="_blank"
                rel="noopener noreferrer"
                className="teeth-whitening-hero-social-icon"
                title="Contact us on WhatsApp"
              >
                <FaWhatsapp />
              </a>
              <a 
                href="mailto:drsajiortho@gmail.com"
                className="teeth-whitening-hero-social-icon"
                title="Send us an email"
              >
                <FaEnvelope />
              </a>
              <a 
                href="tel:+97317001231"
                className="teeth-whitening-hero-social-icon"
                title="Call us"
              >
                <FaPhone />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="teeth-whitening-content">
        <div className="teeth-whitening-container">
          <section className="teeth-whitening-section">
            <h2 className="teeth-whitening-section-title">{currentContent.whatIsTitle}</h2>
            <ul className="teeth-whitening-list">
              {currentContent.whatIsPoints.map((point, index) => (
                <li key={index} className="teeth-whitening-list-item">{point}</li>
              ))}
            </ul>
          </section>

          <section className="teeth-whitening-benefits">
            <div className="teeth-whitening-benefits-grid">
              {currentContent.benefits.map((benefit, index) => (
                <div key={index} className="teeth-whitening-benefit-card">
                  <h3 className="teeth-whitening-benefit-title">{benefit.title}</h3>
                  <p className="teeth-whitening-benefit-description">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Button */}
          <div className="teeth-whitening-cta">
            <Link to="/appointment" className="teeth-whitening-cta-button">
              {currentLanguage === 'ar' ? 'احجز موعد' : 'Book Appointment'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeethWhitening;

