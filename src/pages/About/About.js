import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { FaInstagram, FaFacebook, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';
import './About.css';

const About = () => {
  const { language } = useLanguage();
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const doctors = {
    en: [
      {
        name: "Dr. SAJI C.ABRAHAM",
        nameAr: "الدكتور ساجي سي أبراهام",
        image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1763455620/WhatsApp_Image_2025-11-16_at_9.28.31_AM_famdlp.jpg",
        qualifications: "BSc, BDS, MDS, MOrth RCSEd, FDS RCSEd",
        position: "CEO & Medical Director",
        positionAr: "الرئيس التنفيذي والمدير الطبي",
        specialty: "Consultant Orthodontist",
        specialtyAr: "استشاري تقويم الأسنان",
        bio: "is our consultant with more than 25 years of experience in the field of Orthodontics and Dentofacial Orthopedics. He has graduated in Dentistry from the University of Kerala, India with First Rank, secured Gold Medal, Best Outgoing Student (Government Dental College, Trivandrum) and many awards & scholarships for his academic excellence. He holds a Post graduate degree in Orthodontics & Dentofacial Orthopedics, Master of Dental Surgery( MDS )from the University of Kerala. He has received MOrth RCS( Membership in Orthodontics) from the Royal College of Surgeons of Edinburgh. He is a Fellow (FDS RCSEd) of the Royal College of Surgeons of Edinburgh A former member of the Faculty of Orthodontics, Govt. Dental College, Thiruvananthapuram. He has many years of experience in the middle East and last 15 years in Bahrain.",
        bioAr: "هو استشارينا الذي يتمتع بخبرة تزيد عن 25 عامًا في مجال تقويم الأسنان وتقويم الوجه والفكين. تخرج في طب الأسنان من جامعة كيرالا بالهند بتقدير امتياز، وحصل على الميدالية الذهبية، وأفضل طالب متخرج (كلية طب الأسنان الحكومية، تريفاندروم) والعديد من الجوائز والمنح الدراسية لتميزه الأكاديمي. حصل على درجة الدراسات العليا في تقويم الأسنان وتقويم الوجه والفكين، وماجستير في جراحة الأسنان (MDS) من جامعة كيرالا. حصل على MOrth RCS (عضوية في تقويم الأسنان) من الكلية الملكية للجراحين في إدنبرة. وهو زميل (FDS RCSEd) في الكلية الملكية للجراحين في إدنبرة وعضو سابق في كلية تقويم الأسنان، كلية طب الأسنان الحكومية، ثيروفانانثابورام. لديه سنوات عديدة من الخبرة في الشرق الأوسط وآخر 15 عامًا في البحرين.",
        expertise: [
          "Early treatment, Myo-functional appliances & Dentofacial Orthopedics",
          "Pre-adjusted Edgewise, Adolescent & Adult Orthodontics, Colorless braces, Invisible Braces, Aligners",
          "Pre & post-surgical Orthodontics",
          "Management of cleft lip & cleft palate cases",
          "Hollywood smile, crowns and bridges",
          "Smile design, Lingual Orthodontics",
          "Damon System and Smart Clip"
        ],
        expertiseAr: [
          "العلاج المبكر، أجهزة الميو-فانكشنال وتقويم الوجه والفكين",
          "تجهيز الحواف المسبق، تقويم الأسنان للمراهقين والبالغين، تقويم شفاف، تقويم غير مرئي، محاذيات",
          "تقويم الأسنان ما قبل وبعد الجراحة",
          "إدارة حالات الشفة المشقوقة والحنك المشقوق",
          "الابتسامة الهوليوودية، التيجان والجسور",
          "تصميم الابتسامة، تقويم الأسنان اللساني",
          "نظام دامون وسمارت كليب"
        ]
      },
      {
        name: "Dr. SITA LAKSHMI",
        nameAr: "الدكتورة سيتا لاكشمي",
        image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1762234197/1_uyehlp.png",
        qualifications: "BDS, MDS (Endodontist)",
        position: "Dental Specialist – Endodontist",
        positionAr: "أخصائي طب الأسنان - أخصائي علاج لب الأسنان",
        specialty: "",
        specialtyAr: "",
        bio: "Dr. Sita Lakshmi is a dental specialist with more than 6 years of experience in the field of Root Canal Treatment (Endodontics) and general dentistry. She graduated from University of Calicut and completed her master's degree from Rajiv Ghandhi University of Health Sciences. She was doing private practice at Kerala for more than 3 years and she was practicing in Bahrain in the last 3 years. She has attended workshops for microscopic root canal treatment at Bangalore.",
        bioAr: "الدكتورة سيتا لاكشمي أخصائية أسنان، تتمتع بخبرة تزيد عن ست سنوات في مجال علاج قنوات الجذور (طب لب الأسنان) وطب الأسنان العام. تخرجت من جامعة كاليكوت، وحصلت على درجة الماجستير من جامعة راجيف غاندي للعلوم الصحية. مارست عيادتها الخاصة في كيرالا لأكثر من ثلاث سنوات، كما مارست عيادتها في البحرين خلال السنوات الثلاث الماضية. حضرت ورش عمل حول علاج قنوات الجذور المجهري في بنغالور.",
        expertise: [
          "All basic dental procedures for all ages include oral prophylaxis, extractions, restorations",
          "Root canal treatment-single and multi-visits. Re-Root canal treatment",
          "Post and core Crowns, Bridges",
          "Bleaching/whitening of teeth",
          "Pulpotomy, pulpectomy",
          "Apex genesis, apexification",
          "Complete and removable partial denture",
          "Veneers, Hollywood Smile",
          "Full mouth rehabilitation",
          "Smile designing",
          "Traumatic dental injuries",
          "Splinting of teeth"
        ],
        expertiseAr: [
          "جميع الإجراءات الأساسية لطب الأسنان لجميع الأعمار تشمل التنظيف الوقائي، قلع الأسنان، الحشوات",
          "علاج قنوات الجذور-زيارات واحدة ومتعددة. إعادة علاج قنوات الجذور",
          "اللب واللباب التيجان والجسور",
          "تبييض/تبييض الأسنان",
          "بضع اللب، استئصال اللب",
          "تكوين القمة، إصلاح القمة",
          "طقم أسنان كامل وجزئي قابل للإزالة",
          "القشرة، الابتسامة الهوليوودية",
          "إعادة تأهيل الفم بالكامل",
          "تصميم الابتسامة",
          "إصابات الأسنان الرضحية",
          "تثبيت الأسنان"
        ]
      },
      {
        name: "Dr. Abdulaziz Adel",
        nameAr: "د. عبدالعزيز عادل",
        image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1764499030/%D8%AA%D8%B5%D9%85%D9%8A%D9%85_%D8%A8%D8%AF%D9%88%D9%86_%D8%B9%D9%86%D9%88%D8%A7%D9%86_14_azjwbx.png",
        qualifications: "MAGDS (RCS Ed), MFD (RCSI), MJDF (RCSEng)",
        position: "General Dentist",
        positionAr: "طبيب أسنان عام",
        specialty: "General Dentist",
        specialtyAr: "طبيب أسنان عام",
        bio: "Dr. Abdulaziz Adel is a clinician with advanced training in cosmetic and implant dentistry, holding esteemed international qualifications including RCSEd MAGDS, RCSI MFD, and RCSEng MJDF. His postgraduate development includes specialized implantology training at Saint Joseph University, the American Academy of Implant Dentistry MAXI Course, and advanced aesthetic certifications from GMS Academy (Oxford Academy). Dr. Abdulaziz has broad clinical experience across both the government and private healthcare sectors, enriching his clinical judgment and allowing him to treat a wide variety of cases with confidence and precision. His approach combines high-level aesthetics, modern digital workflows, and minimally invasive principles to deliver natural, long-lasting results. Dedicated to continuous education, he consistently updates his clinical knowledge to ensure his patients receive care aligned with global standards in implant and cosmetic dentistry.",
        bioAr: "الدكتور عبدالعزيز عادل هو طبيب سريري لديه تدريب متقدم في طب الأسنان التجميلي وزراعة الأسنان، ويحمل مؤهلات دولية مرموقة بما في ذلك RCSEd MAGDS و RCSI MFD و RCSEng MJDF. يشمل تطوره بعد التخرج تدريبًا متخصصًا في زراعة الأسنان في جامعة القديس يوسف، ودورة الأكاديمية الأمريكية لزراعة الأسنان MAXI، وشهادات جمالية متقدمة من أكاديمية GMS (أكاديمية أكسفورد). لدى الدكتور عبدالعزيز خبرة سريرية واسعة في كل من القطاعات الحكومية والخاصة للرعاية الصحية، مما يثري حكمه السريري ويسمح له بمعالجة مجموعة واسعة من الحالات بثقة ودقة. يجمع نهجه بين الجماليات عالية المستوى، وسير العمل الرقمي الحديث، ومبادئ التدخل الجراحي البسيط لتقديم نتائج طبيعية ودائمة. مكرسًا للتعليم المستمر، يقوم بتحديث معرفته السريرية باستمرار لضمان حصول مرضاه على رعاية تتماشى مع المعايير العالمية في زراعة الأسنان وطب الأسنان التجميلي.",
        expertise: [
          "Cosmetic Dentistry",
          "Implant Dentistry",
          "Advanced Aesthetic Procedures",
          "Digital Workflow Dentistry",
          "Minimally Invasive Dentistry",
          "Full Mouth Rehabilitation",
          "Smile Design",
          "Crowns and Bridges",
          "Teeth Whitening",
          "Veneers"
        ],
        expertiseAr: [
          "طب الأسنان التجميلي",
          "زراعة الأسنان",
          "الإجراءات الجمالية المتقدمة",
          "طب الأسنان بالتدفق الرقمي",
          "طب الأسنان بالتدخل الجراحي البسيط",
          "إعادة تأهيل الفم بالكامل",
          "تصميم الابتسامة",
          "التيجان والجسور",
          "تبييض الأسنان",
          "القشور"
        ]
      }
    ]
  };


  return (
    <div className="about-page">
      {/* Hero Section with Video */}
      <section className="about-hero">
        <div className="about-hero-video-background">
          <img
            src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1763455620/WhatsApp_Image_2025-11-16_at_9.28.31_AM_1_pemduj.jpg"
            alt="About Us"
            className="about-hero-video"
          />
          <div className="about-hero-video-overlay"></div>
        </div>
        <div className="about-hero-container">
          <div className={`about-hero-content ${language === 'ar' ? 'rtl' : 'ltr'}`}>
            {/* Social Media Icons */}
            <div className="about-hero-social-icons">
              <a 
                href="https://www.instagram.com/drsajiabraham?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="about-hero-social-icon"
                title="Follow us on Instagram"
              >
                <FaInstagram />
              </a>
              
              <a 
                href="https://www.facebook.com/drsajiabraham"
                target="_blank"
                rel="noopener noreferrer"
                className="about-hero-social-icon"
                title="Follow us on Facebook"
              >
                <FaFacebook />
              </a>
              
              <a 
                href="https://wa.me/97334671231"
                target="_blank"
                rel="noopener noreferrer"
                className="about-hero-social-icon"
                title="Contact us on WhatsApp"
              >
                <FaWhatsapp />
              </a>
              
              <a 
                href="mailto:drsajiortho@gmail.com"
                className="about-hero-social-icon"
                title="Send us an email"
              >
                <FaEnvelope />
              </a>
              
              <a 
                href="tel:+97317001231"
                className="about-hero-social-icon"
                title="Call us"
              >
                <FaPhone />
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="about-container">
        {/* Doctors Section */}
        <h2 className="about-doctors-title">{language === 'ar' ? 'أطباؤنا' : 'Our Doctors'}</h2>
        <div className="doctors-grid">
          {doctors.en.map((doctor, index) => (
            <div 
              key={index} 
              className="doctor-card"
              onClick={() => toggleCard(index)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="doctor-image">
                <img 
                  src={doctor.image} 
                  alt={language === 'ar' ? doctor.nameAr : doctor.name}
                  className="doctor-avatar-image"
                />
              </div>
              
              <div className="doctor-info">
                <h3 className="doctor-name">
                  {language === 'ar' ? doctor.nameAr : doctor.name}
                </h3>
                <p className="doctor-specialty">
                  {doctor.specialty 
                    ? (language === 'ar' ? doctor.specialtyAr : doctor.specialty)
                    : (language === 'ar' ? doctor.positionAr : doctor.position)
                  }
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Doctor Modal/Popup */}
      {expandedCard !== null && (
        <div 
          className="doctor-modal-overlay"
          onClick={() => setExpandedCard(null)}
        >
          <div 
            className="doctor-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="doctor-modal-close"
              onClick={() => setExpandedCard(null)}
            >
              ×
            </button>
            
            <div className="doctor-modal-content">
              <div className="doctor-modal-header">
                <div className="doctor-modal-image-wrapper">
                  <img 
                    src={doctors.en[expandedCard].image} 
                    alt={language === 'ar' ? doctors.en[expandedCard].nameAr : doctors.en[expandedCard].name}
                    className="doctor-modal-image"
                  />
                </div>
                <div className="doctor-modal-info">
                  <h2 className="doctor-modal-name">
                    {language === 'ar' ? doctors.en[expandedCard].nameAr : doctors.en[expandedCard].name}
                  </h2>
                  <p className="doctor-modal-qualifications">
                    {doctors.en[expandedCard].qualifications}
                  </p>
                  <div className="doctor-modal-positions">
                    <p className="doctor-modal-position">
                      {language === 'ar' ? doctors.en[expandedCard].positionAr : doctors.en[expandedCard].position}
                    </p>
                    {doctors.en[expandedCard].specialty && (
                      <p className="doctor-modal-specialty">
                        {language === 'ar' ? doctors.en[expandedCard].specialtyAr : doctors.en[expandedCard].specialty}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="doctor-modal-bio">
                <p>{language === 'ar' ? doctors.en[expandedCard].bioAr : doctors.en[expandedCard].bio}</p>
              </div>

              <div className="doctor-modal-expertise">
                <h3 className="doctor-modal-expertise-title">
                  {language === 'ar' ? 'مجالات الخبرة' : 'Area of Expertise'}
                </h3>
                <ul className="doctor-modal-expertise-list">
                  {(language === 'ar' ? doctors.en[expandedCard].expertiseAr : doctors.en[expandedCard].expertise).map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;




