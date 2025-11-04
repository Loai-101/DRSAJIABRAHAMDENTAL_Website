import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { FaStethoscope, FaShieldAlt, FaHeartbeat, FaTooth, FaInstagram, FaFacebook, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';
import './RootCanalTreatment.css';

const RootCanalTreatment = () => {
  const { language } = useLanguage();
  const currentLanguage = language || 'en';

  const content = {
    en: {
      title: "ROOT CANAL TREATMENT",
      heroTitle: "Know about Root Canal Therapy",
      whatIsTitle: "What is Root Canal Treatment",
      whatIsContent: [
        "Root Canal treatment is a dental procedure that involves removal of infected blood vessels and nerve tissue from within a tooth chamber.",
        "The space is then cleaned, disinfected, filled, and sealed to prevent further infection.",
        "This therapy is essential for saving teeth that might otherwise need to be removed. It's a common procedure and is typically painless due to anesthesia."
      ],
      preserve: {
        title: "Preserve",
        description: "Conservation of the natural teeth, avoiding the need for dental implants or bridge"
      },
      relieve: {
        title: "Relieve",
        description: "Relief from pain and discomfort caused by teeth decay or infection"
      },
      prevent: {
        title: "Prevent",
        description: "Prevention of abscess formation and spread of infection to the adjacent oral areas."
      },
      restore: {
        title: "Restore",
        description: "Restoration normal chewing force and function, thus helping improve quality of life"
      },
      endodonticsTitle: "Endodontics (Root Canal Treatment)",
      endodonticsDescription: "At Dr. Saji Abraham Dental Specialists and Orthodontics, we specialize in preserving your natural teeth through advanced endodontic care. Endodontics is the branch of dentistry that deals with the diagnosis and treatment of diseases or injuries to the dental pulp — the inner soft tissue containing nerves and blood vessels.",
      whyTitle: "Why You May Need Root Canal Treatment",
      whyDescription: "When tooth decay, cracks, or trauma reaches the pulp, it can cause pain, swelling, or infection. Instead of removing the tooth, root canal therapy allows us to save it by cleaning, disinfecting, and sealing the root canals — restoring function and comfort.",
      approachTitle: "Our Approach",
      approachDescription: "We combine precision, comfort, and technology to deliver high-quality care:",
      approachPoints: [
        "Digital radiography and apex locators for precise diagnosis and working length control",
        "Rotary and reciprocating instruments for efficient canal shaping",
        "Biocompatible sealers and obturation systems for long-lasting results",
        "Single-visit or multi-visit root-canal options depending on the case"
      ],
      specializedTitle: "Specialized Endodontic Procedures",
      specializedDescription: "In addition to conventional root canal treatment, our Centre offers:",
      specializedPoints: [
        "Re-treatment of failed root canals",
        "Management of complex root anatomy",
        "Pulp therapy for children's teeth",
        "Post and core restorations",
        "Treatment of cracked teeth and traumatic injuries",
        "Endodontic surgeries (apicoectomy)"
      ],
      comfortTitle: "Comfort and Care You Can Trust",
      comfortDescription: "Our goal is to make every endodontic procedure pain-free and stress-free. Using modern anesthesia techniques and gentle handling, we ensure maximum patient comfort.",
      closingStatement: "Your natural teeth are meant to last a lifetime — our expertise in endodontics helps you keep them that way."
    },
    ar: {
      title: "علاج قناة الجذر",
      heroTitle: "تعرف على علاج قناة الجذر",
      whatIsTitle: "ما هو علاج قناة الجذر",
      whatIsContent: [
        "علاج قناة الجذر هو إجراء أسنان يتضمن إزالة الأوعية الدموية والأنسجة العصبية المصابة من داخل حجرة السن.",
        "ثم يتم تنظيف المساحة وتطهيرها وملؤها وإغلاقها لمنع المزيد من العدوى.",
        "هذا العلاج ضروري لإنقاذ الأسنان التي قد تحتاج إلى الإزالة. إنه إجراء شائع وعادة ما يكون غير مؤلم بسبب التخدير."
      ],
      preserve: {
        title: "الحفاظ",
        description: "الحفاظ على الأسنان الطبيعية، وتجنب الحاجة إلى زراعة الأسنان أو الجسور"
      },
      relieve: {
        title: "التخفيف",
        description: "تخفيف الألم والانزعاج الناجم عن تسوس الأسنان أو العدوى"
      },
      prevent: {
        title: "الوقاية",
        description: "منع تكوين الخراج وانتشار العدوى إلى المناطق الفموية المجاورة."
      },
      restore: {
        title: "الاستعادة",
        description: "استعادة قوة المضغ والوظيفة الطبيعية، وبالتالي المساعدة في تحسين جودة الحياة"
      },
      endodonticsTitle: "علاج لب الأسنان (علاج قناة الجذر)",
      endodonticsDescription: "في مركز الدكتور ساجي أبراهام المتخصص في طب الأسنان وتقويم الأسنان، نحن متخصصون في الحفاظ على أسنانك الطبيعية من خلال رعاية لب الأسنان المتقدمة. علاج لب الأسنان هو فرع من طب الأسنان يتعامل مع تشخيص وعلاج أمراض أو إصابات لب الأسنان — النسيج الرخو الداخلي الذي يحتوي على الأعصاب والأوعية الدموية.",
      whyTitle: "لماذا قد تحتاج إلى علاج قناة الجذر",
      whyDescription: "عندما يصل تسوس الأسنان أو التشققات أو الصدمات إلى اللب، يمكن أن يسبب ألمًا أو تورمًا أو عدوى. بدلاً من إزالة السن، يسمح لنا علاج قناة الجذر بإنقاذه من خلال تنظيف وتطهير وإغلاق قنوات الجذر — مما يعيد الوظيفة والراحة.",
      approachTitle: "نهجنا",
      approachDescription: "نجمع بين الدقة والراحة والتكنولوجيا لتقديم رعاية عالية الجودة:",
      approachPoints: [
        "الأشعة الرقمية ومحددات القمة للتشخيص الدقيق والتحكم في طول العمل",
        "الأدوات الدوارة والمتبادلة لتشكيل القناة بكفاءة",
        "المواد المانعة للتسرب والأنظمة المانعة للتسرب المتوافقة حيويًا لنتائج طويلة الأمد",
        "خيارات علاج قناة الجذر بزيارة واحدة أو زيارات متعددة حسب الحالة"
      ],
      specializedTitle: "إجراءات علاج لب الأسنان المتخصصة",
      specializedDescription: "بالإضافة إلى علاج قناة الجذر التقليدي، يقدم مركزنا:",
      specializedPoints: [
        "إعادة علاج قنوات الجذر الفاشلة",
        "إدارة تشريح الجذر المعقد",
        "علاج لب الأسنان لأسنان الأطفال",
        "ترميمات اللب واللباب",
        "علاج الأسنان المتشققة والإصابات الرضحية",
        "جراحات علاج لب الأسنان (استئصال القمة)"
      ],
      comfortTitle: "الراحة والرعاية التي يمكنك الوثوق بها",
      comfortDescription: "هدفنا هو جعل كل إجراء لعلاج لب الأسنان خاليًا من الألم والإجهاد. باستخدام تقنيات التخدير الحديثة والتعامل اللطيف، نضمن أقصى راحة للمريض.",
      closingStatement: "من المفترض أن تستمر أسنانك الطبيعية مدى الحياة — خبرتنا في علاج لب الأسنان تساعدك في الحفاظ عليها بهذه الطريقة."
    }
  };

  const currentContent = content[currentLanguage];

  return (
    <div className="root-canal-page">
      {/* Hero Section */}
      <section className="root-canal-hero">
        <div className="root-canal-hero-video-background">
          <video autoPlay muted loop playsInline>
            <source
              src="https://res.cloudinary.com/dvybb2xnc/video/upload/f_mp4/v1762238416/WhatsApp_Video_2025-11-04_at_09.40.06_88d667df_zbcodi.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="root-canal-hero-overlay"></div>
        <div className="root-canal-hero-container">
          <div className={`root-canal-hero-content ${currentLanguage === 'ar' ? 'rtl' : 'ltr'}`}>
            <h1 className="root-canal-hero-title">{currentContent.heroTitle}</h1>
            {/* Social Media Icons */}
            <div className="root-canal-hero-social-icons">
              <a 
                href="https://www.instagram.com/drsajiabraham?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="root-canal-hero-social-icon"
                title="Follow us on Instagram"
              >
                <FaInstagram />
              </a>
              
              <a 
                href="https://www.facebook.com/drsajiabraham"
                target="_blank"
                rel="noopener noreferrer"
                className="root-canal-hero-social-icon"
                title="Follow us on Facebook"
              >
                <FaFacebook />
              </a>
              
              <a 
                href="https://wa.me/97334671231"
                target="_blank"
                rel="noopener noreferrer"
                className="root-canal-hero-social-icon"
                title="Contact us on WhatsApp"
              >
                <FaWhatsapp />
              </a>
              
              <a 
                href="mailto:drsajiortho@gmail.com"
                className="root-canal-hero-social-icon"
                title="Send us an email"
              >
                <FaEnvelope />
              </a>
              
              <a 
                href="tel:+97317001231"
                className="root-canal-hero-social-icon"
                title="Call us"
              >
                <FaPhone />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="root-canal-content">
        <div className="root-canal-container">
          {/* What is Root Canal Treatment */}
          <section className="root-canal-section">
            <h2 className="root-canal-section-title">{currentContent.whatIsTitle}</h2>
            <ul className="root-canal-list">
              {currentContent.whatIsContent.map((item, index) => (
                <li key={index} className="root-canal-list-item">{item}</li>
              ))}
            </ul>
          </section>

          {/* Benefits Grid */}
          <section className="root-canal-benefits">
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">
                  <FaShieldAlt />
                </div>
                <h3 className="benefit-title">{currentContent.preserve.title}</h3>
                <p className="benefit-description">{currentContent.preserve.description}</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">
                  <FaHeartbeat />
                </div>
                <h3 className="benefit-title">{currentContent.relieve.title}</h3>
                <p className="benefit-description">{currentContent.relieve.description}</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">
                  <FaShieldAlt />
                </div>
                <h3 className="benefit-title">{currentContent.prevent.title}</h3>
                <p className="benefit-description">{currentContent.prevent.description}</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">
                  <FaTooth />
                </div>
                <h3 className="benefit-title">{currentContent.restore.title}</h3>
                <p className="benefit-description">{currentContent.restore.description}</p>
              </div>
            </div>
          </section>

          {/* Endodontics Section */}
          <section className="root-canal-section">
            <h2 className="root-canal-section-title">{currentContent.endodonticsTitle}</h2>
            <p className="root-canal-description">{currentContent.endodonticsDescription}</p>
          </section>

          {/* Why You May Need */}
          <section className="root-canal-section">
            <h2 className="root-canal-section-title">{currentContent.whyTitle}</h2>
            <p className="root-canal-description">{currentContent.whyDescription}</p>
          </section>

          {/* Our Approach */}
          <section className="root-canal-section">
            <h2 className="root-canal-section-title">{currentContent.approachTitle}</h2>
            <p className="root-canal-description">{currentContent.approachDescription}</p>
            <ul className="root-canal-list">
              {currentContent.approachPoints.map((item, index) => (
                <li key={index} className="root-canal-list-item">{item}</li>
              ))}
            </ul>
          </section>

          {/* Specialized Procedures */}
          <section className="root-canal-section">
            <h2 className="root-canal-section-title">{currentContent.specializedTitle}</h2>
            <p className="root-canal-description">{currentContent.specializedDescription}</p>
            <ul className="root-canal-list">
              {currentContent.specializedPoints.map((item, index) => (
                <li key={index} className="root-canal-list-item">{item}</li>
              ))}
            </ul>
          </section>

          {/* Comfort and Care */}
          <section className="root-canal-section">
            <h2 className="root-canal-section-title">{currentContent.comfortTitle}</h2>
            <p className="root-canal-description">{currentContent.comfortDescription}</p>
            <p className="root-canal-description root-canal-closing">{currentContent.closingStatement}</p>
          </section>

          {/* CTA Button */}
          <div className="root-canal-cta">
            <Link to="/appointment" className="root-canal-cta-button">
              {currentLanguage === 'ar' ? 'احجز موعد' : 'Book Appointment'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RootCanalTreatment;

