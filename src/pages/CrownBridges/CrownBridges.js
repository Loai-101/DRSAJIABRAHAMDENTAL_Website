import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { FaInstagram, FaFacebook, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';
import './CrownBridges.css';

const CrownBridges = () => {
  const { language } = useLanguage();
  const currentLanguage = language || 'en';

  const content = {
    en: {
      heroTitle: "Know about Crowns & Bridge",
      whatAreTitle: "What are Dental Crowns & Bridges?",
      whatArePoints: [
        "A dental crown is a cap placed over a damaged tooth to restore its shape, size, and structure.",
        "A dental bridge is a fixed restoration used to replace one or more missing teeth by joining an artificial tooth permanently to adjacent teeth or dental implants.",
        "Made from various types of material like ceramics or metal and are an alternative to other treatments such as partial dentures or implants"
      ],
      benefits: [
        {
          title: "Fixed",
          description: "Permanent solutions are much more aesthetic and comfortable than removable denture."
        },
        {
          title: "Functional",
          description: "Properly distributes the biting force by replacing any missing teeth, hence enhancing function."
        },
        {
          title: "Morale Booster",
          description: "Can assist to boost one's self-confidence by helping restore a complete smile"
        },
        {
          title: "Cost Effective",
          description: "Much more affordable and less invasive than dental implants in certain cases."
        }
      ]
    },
    ar: {
      heroTitle: "تعرف على التيجان والجسور",
      whatAreTitle: "ما هي التيجان والجسور السنية؟",
      whatArePoints: [
        "التيجان السني هو غطاء يوضع على سن تالف لاستعادة شكله وحجمه وهيكله.",
        "الجسر السني هو ترميم ثابت يستخدم لاستبدال سن واحد أو أكثر مفقود من خلال ربط سن اصطناعي بشكل دائم بالأسنان المجاورة أو زراعة الأسنان.",
        "مصنوعة من أنواع مختلفة من المواد مثل السيراميك أو المعدن وهي بديل للعلاجات الأخرى مثل أطقم الأسنان الجزئية أو الزراعة"
      ],
      benefits: [
        {
          title: "ثابت",
          description: "الحلول الدائمة أكثر جمالية وراحة من أطقم الأسنان القابلة للإزالة."
        },
        {
          title: "وظيفي",
          description: "يوزع قوة العض بشكل صحيح من خلال استبدال أي أسنان مفقودة، وبالتالي تعزيز الوظيفة."
        },
        {
          title: "معزز للثقة",
          description: "يمكن أن يساعد في تعزيز ثقة الشخص بالنفس من خلال المساعدة في استعادة ابتسامة كاملة"
        },
        {
          title: "اقتصادي",
          description: "أكثر بأسعار معقولة وأقل تدخلًا من زراعة الأسنان في حالات معينة."
        }
      ]
    }
  };

  const currentContent = content[currentLanguage];

  return (
    <div className="crown-bridges-page">
      {/* Hero Section */}
      <section className="crown-bridges-hero">
        <div className="crown-bridges-hero-video-background">
          <video autoPlay muted loop playsInline>
            <source
              src="https://res.cloudinary.com/dvybb2xnc/video/upload/f_mp4/v1762238436/WhatsApp_Video_2025-11-04_at_09.40.08_150a314a_bzjgkj.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="crown-bridges-hero-overlay"></div>
        <div className="crown-bridges-hero-container">
          <div className={`crown-bridges-hero-content ${currentLanguage === 'ar' ? 'rtl' : 'ltr'}`}>
            <h1 className="crown-bridges-hero-title">{currentContent.heroTitle}</h1>
            {/* Social Media Icons */}
            <div className="crown-bridges-hero-social-icons">
              <a 
                href="https://www.instagram.com/drsajiabraham?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="crown-bridges-hero-social-icon"
                title="Follow us on Instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://www.facebook.com/drsajiabraham"
                target="_blank"
                rel="noopener noreferrer"
                className="crown-bridges-hero-social-icon"
                title="Follow us on Facebook"
              >
                <FaFacebook />
              </a>
              <a 
                href="https://wa.me/97334671231"
                target="_blank"
                rel="noopener noreferrer"
                className="crown-bridges-hero-social-icon"
                title="Contact us on WhatsApp"
              >
                <FaWhatsapp />
              </a>
              <a 
                href="mailto:drsajiortho@gmail.com"
                className="crown-bridges-hero-social-icon"
                title="Send us an email"
              >
                <FaEnvelope />
              </a>
              <a 
                href="tel:+97317001231"
                className="crown-bridges-hero-social-icon"
                title="Call us"
              >
                <FaPhone />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="crown-bridges-content">
        <div className="crown-bridges-container">
          <section className="crown-bridges-section">
            <h2 className="crown-bridges-section-title">{currentContent.whatAreTitle}</h2>
            <ul className="crown-bridges-list">
              {currentContent.whatArePoints.map((point, index) => (
                <li key={index} className="crown-bridges-list-item">{point}</li>
              ))}
            </ul>
          </section>

          <section className="crown-bridges-benefits">
            <div className="crown-bridges-benefits-grid">
              {currentContent.benefits.map((benefit, index) => (
                <div key={index} className="crown-bridges-benefit-card">
                  <h3 className="crown-bridges-benefit-title">{benefit.title}</h3>
                  <p className="crown-bridges-benefit-description">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Button */}
          <div className="crown-bridges-cta">
            <Link to="/appointment" className="crown-bridges-cta-button">
              {currentLanguage === 'ar' ? 'احجز موعد' : 'Book Appointment'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrownBridges;

