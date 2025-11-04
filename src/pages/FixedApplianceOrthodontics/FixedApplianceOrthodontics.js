import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { FaInstagram, FaFacebook, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';
import './FixedApplianceOrthodontics.css';

const FixedApplianceOrthodontics = () => {
  const { language } = useLanguage();
  const currentLanguage = language || 'en';

  const content = {
    en: {
      heroTitle: "The Art Behind the Perfect Smile",
      mainContent: [
        "Orthodontic treatment or braces offers the opportunity for the best look today and in the future. It will enable you to go into every situation with the 'best face forward'.",
        "Personality and good appearance are of prime concern in our 'face centered society'. Improving appearance is the only one aim of Orthodontics. Its primary concern is promoting good oral health by straightening crowded, easy to decay teeth. Crowded teeth tend to have more cavities because they are food traps and are harder to keep clean. It is heartwarming to parents and orthodontists to see a child's self-consciousness disappear as orthodontic treatment brings teeth, lips and face into proper proportion.",
        "Orthodontics is not just for children. Adults visit orthodontists for many of the same reasons as children.",
        "More adults are contemplating and undertaking orthodontic treatment every day. For them, just as for children, better dental health and improved facial appearance are the resulting benefits. Specific questions about treating a particular malocclusion can best be answered by the orthodontist following an examination.",
        "When considering orthodontic treatment, the patient's age is relatively unimportant. The tissues involved are the same, only more mature in the adult. What is important is the general health of the teeth and gums. Even in cases involving gum disease and tooth loss, health and tooth arrangement can be significantly improved through orthodontics."
      ]
    },
    ar: {
      heroTitle: "فن الابتسامة المثالية",
      mainContent: [
        "يوفر علاج تقويم الأسنان أو الأقواس الفرصة للحصول على أفضل مظهر اليوم وفي المستقبل. سيمكنك من دخول كل موقف مع 'أفضل وجه للأمام'.",
        "الشخصية والمظهر الجيد هما من الاهتمامات الأساسية في مجتمعنا 'المركز على الوجه'. تحسين المظهر ليس الهدف الوحيد لتقويم الأسنان. اهتمامه الأساسي هو تعزيز صحة الفم الجيدة من خلال تقويم الأسنان المزدحمة وسهلة التسوس. تميل الأسنان المزدحمة إلى وجود المزيد من التجاويف لأنها فخاخ للطعام وأصعب في الحفاظ عليها نظيفة. إنه أمر يبعث الدفء في قلوب الآباء وأطباء تقويم الأسنان أن يروا اختفاء وعي الطفل بنفسه بينما يجلب علاج تقويم الأسنان الأسنان والشفاه والوجه إلى النسبة الصحيحة.",
        "تقويم الأسنان ليس للأطفال فقط. يزور البالغون أطباء تقويم الأسنان لأسباب عديدة نفسها التي يزورها الأطفال.",
        "المزيد من البالغين يفكرون ويشرعون في علاج تقويم الأسنان كل يوم. بالنسبة لهم، تمامًا كما هو الحال بالنسبة للأطفال، فإن صحة الأسنان الأفضل وتحسين مظهر الوجه هما الفوائد الناتجة. يمكن الإجابة على الأسئلة المحددة حول علاج سوء الإطباق المعين بشكل أفضل من قبل أخصائي تقويم الأسنان بعد الفحص.",
        "عند التفكير في علاج تقويم الأسنان، فإن عمر المريض غير مهم نسبيًا. الأنسجة المعنية هي نفسها، فقط أكثر نضجًا في البالغ. ما هو مهم هو الصحة العامة للأسنان واللثة. حتى في الحالات التي تنطوي على أمراض اللثة وفقدان الأسنان، يمكن تحسين الصحة وترتيب الأسنان بشكل كبير من خلال تقويم الأسنان."
      ]
    }
  };

  const currentContent = content[currentLanguage];

  return (
    <div className="fixed-appliance-page">
      {/* Hero Section */}
      <section className="fixed-appliance-hero">
        <div className="fixed-appliance-hero-video-background">
          <video autoPlay muted loop playsInline>
            <source
              src="https://res.cloudinary.com/dvybb2xnc/video/upload/f_mp4/v1762238436/WhatsApp_Video_2025-11-04_at_09.40.08_150a314a_bzjgkj.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="fixed-appliance-hero-overlay"></div>
        <div className="fixed-appliance-hero-container">
          <div className={`fixed-appliance-hero-content ${currentLanguage === 'ar' ? 'rtl' : 'ltr'}`}>
            <h1 className="fixed-appliance-hero-title">{currentContent.heroTitle}</h1>
            {/* Social Media Icons */}
            <div className="fixed-appliance-hero-social-icons">
              <a 
                href="https://www.instagram.com/drsajiabraham?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="fixed-appliance-hero-social-icon"
                title="Follow us on Instagram"
              >
                <FaInstagram />
              </a>
              
              <a 
                href="https://www.facebook.com/drsajiabraham"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed-appliance-hero-social-icon"
                title="Follow us on Facebook"
              >
                <FaFacebook />
              </a>
              
              <a 
                href="https://wa.me/97334671231"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed-appliance-hero-social-icon"
                title="Contact us on WhatsApp"
              >
                <FaWhatsapp />
              </a>
              
              <a 
                href="mailto:drsajiortho@gmail.com"
                className="fixed-appliance-hero-social-icon"
                title="Send us an email"
              >
                <FaEnvelope />
              </a>
              
              <a 
                href="tel:+97317001231"
                className="fixed-appliance-hero-social-icon"
                title="Call us"
              >
                <FaPhone />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="fixed-appliance-content">
        <div className="fixed-appliance-container">
          {/* Main Content Section */}
          <section className="fixed-appliance-section">
            {currentContent.mainContent.map((paragraph, index) => (
              <p key={index} className="fixed-appliance-description">
                {paragraph}
              </p>
            ))}
          </section>

          {/* CTA Button */}
          <div className="fixed-appliance-cta">
            <Link to="/appointment" className="fixed-appliance-cta-button">
              {currentLanguage === 'ar' ? 'احجز موعد' : 'Book Appointment'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixedApplianceOrthodontics;

