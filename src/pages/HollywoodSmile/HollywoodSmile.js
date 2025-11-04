import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { FaInstagram, FaFacebook, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';
import './HollywoodSmile.css';

const HollywoodSmile = () => {
  const { language } = useLanguage();
  const currentLanguage = language || 'en';

  const content = {
    en: {
      heroTitle: "Know about Ceramic Veneers",
      whatAreTitle: "What are Ceramic veneers",
      whatArePoints: [
        "Dental ceramic veneers are thin shells made of porcelain or composite material.",
        "They are designed to cover the front surface of teeth to improve aesthetics.",
        "Veneers can address various dental issues such as gaps, discoloration or chipping.",
        "The procedure involves removing a small amount of tooth enamel to fit the veneers.",
        "Known for their durability and natural- locking appearance."
      ],
      benefits: [
        {
          title: "Natural Look",
          description: "Ceramic veneers provide a natural appearance and can significantly enhance one's smile."
        },
        {
          title: "Stain Resistant",
          description: "Recognized for their resistance to staining, they do not discolor easily over time."
        },
        {
          title: "Less Invasive",
          description: "Veneers require less tooth reduction compared to other methods, preserving more of tooth structure."
        },
        {
          title: "Long Lasting",
          description: "Ceramic veneers can last between 10 to 15 years, making them a long- term solution."
        }
      ]
    },
    ar: {
      heroTitle: "تعرف على القشرة الخزفية",
      whatAreTitle: "ما هي القشرة الخزفية",
      whatArePoints: [
        "القشرة الخزفية للأسنان هي قشور رقيقة مصنوعة من البورسلين أو المواد المركبة.",
        "تم تصميمها لتغطية السطح الأمامي للأسنان لتحسين الجماليات.",
        "يمكن أن تعالج القشور مشاكل الأسنان المختلفة مثل الفجوات أو تغير اللون أو التقشر.",
        "يتضمن الإجراء إزالة كمية صغيرة من مينا الأسنان لتناسب القشور.",
        "معروفة بمتانتها ومظهرها الطبيعي."
      ],
      benefits: [
        {
          title: "مظهر طبيعي",
          description: "توفر القشور الخزفية مظهرًا طبيعيًا ويمكن أن تعزز ابتسامة الشخص بشكل كبير."
        },
        {
          title: "مقاومة للبقع",
          description: "معروفة بمقاومتها للبقع، ولا تتلطخ بسهولة بمرور الوقت."
        },
        {
          title: "أقل تدخل",
          description: "تتطلب القشور تقليلًا أقل للأسنان مقارنة بالطرق الأخرى، مما يحافظ على المزيد من هيكل السن."
        },
        {
          title: "طويلة الأمد",
          description: "يمكن أن تستمر القشور الخزفية من 10 إلى 15 عامًا، مما يجعلها حلاً طويل الأمد."
        }
      ]
    }
  };

  const currentContent = content[currentLanguage];

  return (
    <div className="hollywood-smile-page">
      {/* Hero Section */}
      <section className="hollywood-smile-hero">
        <div className="hollywood-smile-hero-video-background">
          <video autoPlay muted loop playsInline>
            <source
              src="https://res.cloudinary.com/dvybb2xnc/video/upload/f_mp4/v1762238416/WhatsApp_Video_2025-11-04_at_09.40.06_88d667df_zbcodi.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="hollywood-smile-hero-overlay"></div>
        <div className="hollywood-smile-hero-container">
          <div className={`hollywood-smile-hero-content ${currentLanguage === 'ar' ? 'rtl' : 'ltr'}`}>
            <h1 className="hollywood-smile-hero-title">{currentContent.heroTitle}</h1>
            {/* Social Media Icons */}
            <div className="hollywood-smile-hero-social-icons">
              <a 
                href="https://www.instagram.com/drsajiabraham?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="hollywood-smile-hero-social-icon"
                title="Follow us on Instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://www.facebook.com/drsajiabraham"
                target="_blank"
                rel="noopener noreferrer"
                className="hollywood-smile-hero-social-icon"
                title="Follow us on Facebook"
              >
                <FaFacebook />
              </a>
              <a 
                href="https://wa.me/97334671231"
                target="_blank"
                rel="noopener noreferrer"
                className="hollywood-smile-hero-social-icon"
                title="Contact us on WhatsApp"
              >
                <FaWhatsapp />
              </a>
              <a 
                href="mailto:drsajiortho@gmail.com"
                className="hollywood-smile-hero-social-icon"
                title="Send us an email"
              >
                <FaEnvelope />
              </a>
              <a 
                href="tel:+97317001231"
                className="hollywood-smile-hero-social-icon"
                title="Call us"
              >
                <FaPhone />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="hollywood-smile-content">
        <div className="hollywood-smile-container">
          <section className="hollywood-smile-section">
            <h2 className="hollywood-smile-section-title">{currentContent.whatAreTitle}</h2>
            <ul className="hollywood-smile-list">
              {currentContent.whatArePoints.map((point, index) => (
                <li key={index} className="hollywood-smile-list-item">{point}</li>
              ))}
            </ul>
          </section>

          <section className="hollywood-smile-benefits">
            <div className="hollywood-smile-benefits-grid">
              {currentContent.benefits.map((benefit, index) => (
                <div key={index} className="hollywood-smile-benefit-card">
                  <h3 className="hollywood-smile-benefit-title">{benefit.title}</h3>
                  <p className="hollywood-smile-benefit-description">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Button */}
          <div className="hollywood-smile-cta">
            <Link to="/appointment" className="hollywood-smile-cta-button">
              {currentLanguage === 'ar' ? 'احجز موعد' : 'Book Appointment'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HollywoodSmile;

