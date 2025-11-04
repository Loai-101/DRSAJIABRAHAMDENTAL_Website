import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { FaInstagram, FaFacebook, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';
import './ImplantDentistry.css';

const ImplantDentistry = () => {
  const { language } = useLanguage();
  const currentLanguage = language || 'en';

  const content = {
    en: {
      heroTitle: "Implants",
      subtitle: "Know about Dental implants",
      whatAreTitle: "What are Dental Implants?",
      whatArePoints: [
        "Dental Implants are metal based posts that provide a permanent base for fixed replacement teeth.",
        "They are typically made of titanium and are surgically placed into the jawbone where teeth are missing.",
        "Compared to dentures or bridges they are an effective long-term solution for people who suffer from missing teeth or chronic dental problems.",
        "They fit, feels, and function like natural teeth."
      ],
      benefits: [
        {
          title: "Esthetics",
          description: "They act like natural teeth and provide a good, esthetically pleasing appearance."
        },
        {
          title: "Function",
          description: "They replace missing teeth, restoring the function of biting, chewing and speech."
        },
        {
          title: "Bone friendly",
          description: "Implants may help to prevent bone loss and can last a lifetime with proper maintenance."
        },
        {
          title: "Anti-aging",
          description: "They can prevent facial sagging, thus helping to maintain the natural shape of the face."
        }
      ]
    },
    ar: {
      heroTitle: "زراعة الأسنان",
      subtitle: "تعرف على زراعة الأسنان",
      whatAreTitle: "ما هي زراعة الأسنان؟",
      whatArePoints: [
        "زراعة الأسنان هي قوائم معدنية توفر قاعدة دائمة لأسنان بديلة ثابتة.",
        "عادة ما تكون مصنوعة من التيتانيوم ويتم وضعها جراحيًا في عظم الفك حيث توجد الأسنان المفقودة.",
        "مقارنة بأطقم الأسنان أو الجسور، فهي حل طويل الأمد فعال للأشخاص الذين يعانون من فقدان الأسنان أو مشاكل الأسنان المزمنة.",
        "تناسبها وتشعر وتعمل مثل الأسنان الطبيعية."
      ],
      benefits: [
        {
          title: "الجماليات",
          description: "تعمل مثل الأسنان الطبيعية وتوفر مظهرًا جيدًا وممتعًا من الناحية الجمالية."
        },
        {
          title: "الوظيفة",
          description: "تحل محل الأسنان المفقودة، واستعادة وظيفة العض والمضغ والكلام."
        },
        {
          title: "صديق للعظام",
          description: "قد تساعد الزراعة في منع فقدان العظام ويمكن أن تدوم مدى الحياة مع الصيانة المناسبة."
        },
        {
          title: "مضاد للشيخوخة",
          description: "يمكنها منع ترهل الوجه، وبالتالي المساعدة في الحفاظ على الشكل الطبيعي للوجه."
        }
      ]
    }
  };

  const currentContent = content[currentLanguage];

  return (
    <div className="implant-dentistry-page">
      {/* Hero Section */}
      <section className="implant-dentistry-hero">
        <div className="implant-dentistry-hero-video-background">
          <video autoPlay muted loop playsInline>
            <source
              src="https://res.cloudinary.com/dvybb2xnc/video/upload/f_mp4/v1762238416/WhatsApp_Video_2025-11-04_at_09.40.06_88d667df_zbcodi.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="implant-dentistry-hero-overlay"></div>
        <div className="implant-dentistry-hero-container">
          <div className={`implant-dentistry-hero-content ${currentLanguage === 'ar' ? 'rtl' : 'ltr'}`}>
            <h1 className="implant-dentistry-hero-title">{currentContent.heroTitle}</h1>
            <h2 className="implant-dentistry-hero-subtitle">{currentContent.subtitle}</h2>
            {/* Social Media Icons */}
            <div className="implant-dentistry-hero-social-icons">
              <a 
                href="https://www.instagram.com/drsajiabraham?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="implant-dentistry-hero-social-icon"
                title="Follow us on Instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://www.facebook.com/drsajiabraham"
                target="_blank"
                rel="noopener noreferrer"
                className="implant-dentistry-hero-social-icon"
                title="Follow us on Facebook"
              >
                <FaFacebook />
              </a>
              <a 
                href="https://wa.me/97334671231"
                target="_blank"
                rel="noopener noreferrer"
                className="implant-dentistry-hero-social-icon"
                title="Contact us on WhatsApp"
              >
                <FaWhatsapp />
              </a>
              <a 
                href="mailto:drsajiortho@gmail.com"
                className="implant-dentistry-hero-social-icon"
                title="Send us an email"
              >
                <FaEnvelope />
              </a>
              <a 
                href="tel:+97317001231"
                className="implant-dentistry-hero-social-icon"
                title="Call us"
              >
                <FaPhone />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="implant-dentistry-content">
        <div className="implant-dentistry-container">
          <section className="implant-dentistry-section">
            <h2 className="implant-dentistry-section-title">{currentContent.whatAreTitle}</h2>
            <ul className="implant-dentistry-list">
              {currentContent.whatArePoints.map((point, index) => (
                <li key={index} className="implant-dentistry-list-item">{point}</li>
              ))}
            </ul>
          </section>

          <section className="implant-dentistry-benefits">
            <div className="implant-dentistry-benefits-grid">
              {currentContent.benefits.map((benefit, index) => (
                <div key={index} className="implant-dentistry-benefit-card">
                  <h3 className="implant-dentistry-benefit-title">{benefit.title}</h3>
                  <p className="implant-dentistry-benefit-description">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Button */}
          <div className="implant-dentistry-cta">
            <Link to="/appointment" className="implant-dentistry-cta-button">
              {currentLanguage === 'ar' ? 'احجز موعد' : 'Book Appointment'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImplantDentistry;

