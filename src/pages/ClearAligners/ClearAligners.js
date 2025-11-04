import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { FaInstagram, FaFacebook, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';
import './ClearAligners.css';

const ClearAligners = () => {
  const { language } = useLanguage();
  const currentLanguage = language || 'en';

  const content = {
    en: {
      heroTitle: "Know about Clear Aligners",
      subtitle: "Transparent Dental Braces",
      whatAreTitle: "What are Clear Aligners",
      whatArePoints: [
        "Clear aligner Orthodontics is a method of straightening teeth using a series of custom-made, virtually invisible trays for the teeth",
        "These aligners are made of transparent, medical-grade plastic and are designed to fit snugly over your teeth.",
        "They work by applying soft pressure to the teeth, thus gradually and comfortably moving them into the ideal desired position overtime."
      ],
      benefits: [
        {
          title: "Invisible",
          description: "Clear aligners are less noticeable compared to traditionally used metal and ceramic braces"
        },
        {
          title: "Removable",
          description: "They can be taken out before eating or brushing, allowing for better oral hygiene"
        },
        {
          title: "Comfortable",
          description: "Typically, much more comfortable than braces with no metal to cause abrasions."
        },
        {
          title: "Faster",
          description: "Clear aligners may lead to a shorter treatment period compared to traditional braces."
        }
      ]
    },
    ar: {
      heroTitle: "تعرف على التقويم الشفاف",
      subtitle: "أقواس الأسنان الشفافة",
      whatAreTitle: "ما هي التقويمات الشفافة",
      whatArePoints: [
        "تقويم الأسنان بالتقويمات الشفافة هو طريقة لتقويم الأسنان باستخدام سلسلة من الصواني المخصصة والشبه غير مرئية للأسنان",
        "هذه التقويمات مصنوعة من البلاستيك الشفاف الطبي ومصممة لتناسب أسنانك بشكل مريح.",
        "تعمل من خلال تطبيق ضغط ناعم على الأسنان، وبالتالي تحريكها تدريجياً وبشكل مريح إلى الموضع المثالي المطلوب بمرور الوقت."
      ],
      benefits: [
        {
          title: "غير مرئية",
          description: "التقويمات الشفافة أقل وضوحًا مقارنة بالأقواس المعدنية والسيراميك التقليدية المستخدمة"
        },
        {
          title: "قابلة للإزالة",
          description: "يمكن إزالتها قبل الأكل أو تنظيف الأسنان بالفرشاة، مما يسمح بنظافة فموية أفضل"
        },
        {
          title: "مريحة",
          description: "عادة، أكثر راحة بكثير من الأقواس دون معدن يسبب التآكل."
        },
        {
          title: "أسرع",
          description: "قد تؤدي التقويمات الشفافة إلى فترة علاج أقصر مقارنة بالأقواس التقليدية."
        }
      ]
    }
  };

  const currentContent = content[currentLanguage];

  return (
    <div className="clear-aligners-page">
      {/* Hero Section */}
      <section className="clear-aligners-hero">
        <div className="clear-aligners-hero-video-background">
          <video autoPlay muted loop playsInline>
            <source
              src="https://res.cloudinary.com/dvybb2xnc/video/upload/f_mp4/v1762238436/WhatsApp_Video_2025-11-04_at_09.40.08_150a314a_bzjgkj.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="clear-aligners-hero-overlay"></div>
        <div className="clear-aligners-hero-container">
          <div className={`clear-aligners-hero-content ${currentLanguage === 'ar' ? 'rtl' : 'ltr'}`}>
            <h1 className="clear-aligners-hero-title">{currentContent.heroTitle}</h1>
            <h2 className="clear-aligners-hero-subtitle">{currentContent.subtitle}</h2>
            {/* Social Media Icons */}
            <div className="clear-aligners-hero-social-icons">
              <a 
                href="https://www.instagram.com/drsajiabraham?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="clear-aligners-hero-social-icon"
                title="Follow us on Instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://www.facebook.com/drsajiabraham"
                target="_blank"
                rel="noopener noreferrer"
                className="clear-aligners-hero-social-icon"
                title="Follow us on Facebook"
              >
                <FaFacebook />
              </a>
              <a 
                href="https://wa.me/97334671231"
                target="_blank"
                rel="noopener noreferrer"
                className="clear-aligners-hero-social-icon"
                title="Contact us on WhatsApp"
              >
                <FaWhatsapp />
              </a>
              <a 
                href="mailto:drsajiortho@gmail.com"
                className="clear-aligners-hero-social-icon"
                title="Send us an email"
              >
                <FaEnvelope />
              </a>
              <a 
                href="tel:+97317001231"
                className="clear-aligners-hero-social-icon"
                title="Call us"
              >
                <FaPhone />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="clear-aligners-content">
        <div className="clear-aligners-container">
          <section className="clear-aligners-section">
            <h2 className="clear-aligners-section-title">{currentContent.whatAreTitle}</h2>
            <ul className="clear-aligners-list">
              {currentContent.whatArePoints.map((point, index) => (
                <li key={index} className="clear-aligners-list-item">{point}</li>
              ))}
            </ul>
          </section>

          <section className="clear-aligners-benefits">
            <div className="clear-aligners-benefits-grid">
              {currentContent.benefits.map((benefit, index) => (
                <div key={index} className="clear-aligners-benefit-card">
                  <h3 className="clear-aligners-benefit-title">{benefit.title}</h3>
                  <p className="clear-aligners-benefit-description">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Button */}
          <div className="clear-aligners-cta">
            <Link to="/appointment" className="clear-aligners-cta-button">
              {currentLanguage === 'ar' ? 'احجز موعد' : 'Book Appointment'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClearAligners;

