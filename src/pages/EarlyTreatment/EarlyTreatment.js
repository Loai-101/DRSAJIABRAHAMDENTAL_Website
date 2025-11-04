import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { FaInstagram, FaFacebook, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';
import './EarlyTreatment.css';

const EarlyTreatment = () => {
  const { language } = useLanguage();
  const currentLanguage = language || 'en';

  const content = {
    en: {
      heroTitle: "Dentofacial Orthopedics",
      subtitle: "INTERCEPTIVE ORTHODONTICS",
      mainTitle: "Myofunctional Appliances",
      introduction: "If your child has a problem that requires attention, your orthodontist may recommend interceptive treatment. Early intervention, which takes advantage of facial growth and tooth eruption, can lessen the severity of a problem, and it frequently makes the completion of treatment at a later age less time consuming and less expensive",
      benefitsTitle: "BENEFITS OF INTERCEPTIVE TREATMENT",
      benefits: [
        "Avoiding fracture or loss of protruding teeth",
        "Assuring that the jaws and teeth meet properly during chewing and swallowing",
        "Eliminating adverse habits such as thumb or finger sucking, tongue thrusting and lip habits",
        "Correcting early malalignment of teeth and jaws",
        "Enhancing proper speech development",
        "Evaluating breathing problems that may adversely affect normal growth and jaw shape",
        "Correcting cross bites, tooth grinding, tooth interference and lower jaw displacement",
        "Coordinating treatment decisions with the family dentist and allowing for proper eruption of permanent teeth"
      ]
    },
    ar: {
      heroTitle: "تقويم الوجه والفكين",
      subtitle: "تقويم الأسنان التدخلي",
      mainTitle: "أجهزة وظيفية عضلية",
      introduction: "إذا كان طفلك يعاني من مشكلة تتطلب الاهتمام، فقد يوصي أخصائي تقويم الأسنان بالعلاج التدخلي. التدخل المبكر، الذي يستفيد من نمو الوجه وانبثاق الأسنان، يمكن أن يقلل من شدة المشكلة، وغالبًا ما يجعل إتمام العلاج في سن لاحقة يستغرق وقتًا أقل وأقل تكلفة",
      benefitsTitle: "فوائد العلاج التدخلي",
      benefits: [
        "تجنب كسر أو فقدان الأسنان البارزة",
        "ضمان التقاء الفكين والأسنان بشكل صحيح أثناء المضغ والبلع",
        "القضاء على العادات الضارة مثل مص الإبهام أو الإصبع، دفع اللسان وعادات الشفاه",
        "تصحيح سوء المحاذاة المبكر للأسنان والفكين",
        "تعزيز تطور الكلام السليم",
        "تقييم مشاكل التنفس التي قد تؤثر سلبًا على النمو الطبيعي وشكل الفك",
        "تصحيح العضات المتقاطعة، طحن الأسنان، تداخل الأسنان وإزاحة الفك السفلي",
        "تنسيق قرارات العلاج مع طبيب الأسنان العائلي والسماح بانبثاق الأسنان الدائمة بشكل صحيح"
      ]
    }
  };

  const currentContent = content[currentLanguage];

  return (
    <div className="early-treatment-page">
      {/* Hero Section */}
      <section className="early-treatment-hero">
        <div className="early-treatment-hero-video-background">
          <video autoPlay muted loop playsInline>
            <source
              src="https://res.cloudinary.com/dvybb2xnc/video/upload/f_mp4/v1762238436/WhatsApp_Video_2025-11-04_at_09.40.08_150a314a_bzjgkj.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="early-treatment-hero-overlay"></div>
        <div className="early-treatment-hero-container">
          <div className={`early-treatment-hero-content ${currentLanguage === 'ar' ? 'rtl' : 'ltr'}`}>
            <h1 className="early-treatment-hero-title">{currentContent.heroTitle}</h1>
            <h2 className="early-treatment-hero-subtitle">{currentContent.subtitle}</h2>
            {/* Social Media Icons */}
            <div className="early-treatment-hero-social-icons">
              <a 
                href="https://www.instagram.com/drsajiabraham?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="early-treatment-hero-social-icon"
                title="Follow us on Instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://www.facebook.com/drsajiabraham"
                target="_blank"
                rel="noopener noreferrer"
                className="early-treatment-hero-social-icon"
                title="Follow us on Facebook"
              >
                <FaFacebook />
              </a>
              <a 
                href="https://wa.me/97334671231"
                target="_blank"
                rel="noopener noreferrer"
                className="early-treatment-hero-social-icon"
                title="Contact us on WhatsApp"
              >
                <FaWhatsapp />
              </a>
              <a 
                href="mailto:drsajiortho@gmail.com"
                className="early-treatment-hero-social-icon"
                title="Send us an email"
              >
                <FaEnvelope />
              </a>
              <a 
                href="tel:+97317001231"
                className="early-treatment-hero-social-icon"
                title="Call us"
              >
                <FaPhone />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="early-treatment-content">
        <div className="early-treatment-container">
          <section className="early-treatment-section">
            <h2 className="early-treatment-section-title">{currentContent.mainTitle}</h2>
            <p className="early-treatment-description">{currentContent.introduction}</p>
          </section>

          <section className="early-treatment-section">
            <h2 className="early-treatment-section-title">{currentContent.benefitsTitle}</h2>
            <ul className="early-treatment-list">
              {currentContent.benefits.map((benefit, index) => (
                <li key={index} className="early-treatment-list-item">{benefit}</li>
              ))}
            </ul>
          </section>

          {/* CTA Button */}
          <div className="early-treatment-cta">
            <Link to="/appointment" className="early-treatment-cta-button">
              {currentLanguage === 'ar' ? 'احجز موعد' : 'Book Appointment'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarlyTreatment;

