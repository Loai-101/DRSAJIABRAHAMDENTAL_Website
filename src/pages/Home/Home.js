import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { FaInstagram, FaFacebook, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState({
    experience: 0,
    patients: 0,
    satisfaction: 0,
    emergency: 0
  });
  const cardsRef = useRef(null);
  const featuresRef = useRef(null);
  const servicesRef = useRef(null);
  const [cardsInView, setCardsInView] = useState(false);
  const [featuresInView, setFeaturesInView] = useState(false);
  const [servicesInView, setServicesInView] = useState(false);
  const { language } = useLanguage();

  // Bilingual content
  const content = {
    en: {
      heroTitle: "Welcome to Dr Saji Abraham Dental",
      heroDescription: "Where innovative technology meets compassionate care. Our award-winning team provides you with the highest standard of dental excellence in a comfortable, modern environment.",
      ourServices: "Our Services",
      bookAppointment: "Book Appointment",
      movingText: [
        "We create smiles that never fade",
        "The art behind the perfect smile",
        "Transforming Lives - One Smile at a Time",
        "Center of excellence in Orthodontics",
        "State of the art equipment",
        "Experienced dental professionals",
        "Comfortable relaxing environment",
        "Affordable payment options",
        "Personalized treatment plans"
      ],
      statistics: {
        experience: "Years Experience",
        patients: "Satisfaction guaranteed",
        satisfaction: "Happy patients",
        emergency: "9 AM to evening 9 PM"
      },
      about: {
        title: "About Our Dental Center",
        founded: "Founded in 2022, our dental center has been providing exceptional dental care to patients of all ages.",
        missionTitle: "Our Mission",
        mission: "Our mission is to deliver quality oral and dental healthcare at affordable costs and treat our patients with the respect and the services they deserve, and the results they expect.",
        visionTitle: "Our Vision",
        vision: "Our vision is to be the Center of excellence in oral and dental care while establishing a lifelong partnership with our patients and providing services that exceed their expectations.",
        teamTitle: "Team",
        team: "Our team of highly trained Dental specialists and dental professionals are highly dedicated to staying at the forefront of dental techniques and technologies to ensure you receive the best possible care.",
        features: [
          "Experienced dental professionals",
          "State-of-the-art equipment",
          "Comfortable, relaxing environment",
          "Personalized treatment plans",
          "Affordable payment options"
        ]
      },
      services: {
        title: "Our Services",
        items: [
          {
            title: "General Dentistry",
            description: "Comprehensive dental care includes cleaning, fillings, and preventive treatments."
          },
          {
            title: "Dental X-Rays",
            description: "Dental X-rays can help your dentist detect oral health issues, like cavities and gum disease, before they worsen. There are many distinct types of dental X-rays, including intraoral (taken inside your mouth) and extraoral (taken outside your mouth). Panoramic Xrays and Cephalometric and TMJ Xrays."
          },
          {
            title: "Cosmetic Dentistry",
            description: "Enhance your smile with teeth whitening, veneers, and cosmetic fillings. Cosmetic dentistry is a branch of dental care focused on improving the appearance of teeth, gums, and smiles. Unlike traditional dentistry, which primarily addresses oral health concerns, cosmetic dentistry enhances aesthetics through various treatments."
          },
          {
            title: "Oral Surgery",
            description: "Expert tooth extractions, wisdom teeth removal, and surgical procedures"
          },
          {
            title: "Root Canals/ Endodontic Treatment",
            description: "Root Canal treatment is a dental procedure that involves removal of infected blood vessels and nerve tissue from within a tooth chamber. The space is then cleaned, disinfected, filled, and sealed to prevent further infection. This therapy is essential for saving teeth that might otherwise need to be removed. It's a common procedure and is typically painless due to anesthesia."
          },
          {
            title: "Impacted Teeth",
            description: "The most frequently impacted tooth in the anterior region is maxillary canine. But other teeth like central incisor and lower canine can also be impacted. Several treatment options are available, but one with the long-term prognosis for the impacted tooth appears to be bringing the misplaced tooth into alignment with orthodontic treatment."
          },
          {
            title: "Orthodontics",
            description: "Straighten your teeth with braces, clear aligners, and other orthodontic solutions"
          },
          {
            title: "Damon System / Self ligating Braces",
            description: "A Fantastic smile … Faster and with outstanding comfort—Damon System. A new clinically proven treatment approach that aligns your teeth and enhances your facial aesthetics-usually without extractions or rapid palatal Expanders"
          },
          {
            title: "Lingual Orthodontics",
            description: "Lingual Orthodontics- lingual braces refers to the method of orthodontic treatment in which the brackets and wires are placed behind the teeth (tongue side) so they are non-visible. In contrast, in traditional braces the appliances are fixed on the labial or cheek side."
          },
          {
            title: "Clear Aligners",
            description: "Clear aligner Orthodontics is a method of straightening teeth using a series of custom-made, virtually invisible trays for the teeth. These aligners are made of transparent, medical-grade plastic and are designed to fit snugly over your teeth. They work by applying soft pressure to the teeth, thus gradually and comfortably moving them into the ideal desired position overtime."
          },
          {
            title: "Pediatric Dentistry",
            description: "Gentle dental care for children in a comfortable, friendly environment."
          },
          {
            title: "Ceramic Veneers / HOLLYWOOD SMILE",
            description: "Dental ceramic veneers are thin shells made of porcelain or composite material. They are designed to cover the front surface of teeth to improve aesthetics. Veneers can address various dental issues such as gaps, discoloration or chipping. The procedure involves removing a small amount of tooth enamel to fit the veneers. Known for their durability and natural- locking appearance."
          },
          {
            title: "Crowns & Bridge",
            description: "A dental crown is a cap placed over a damaged tooth to restore its shape, size, and structure. A dental bridge is a fixed restoration used to replace one or more missing teeth by joining an artificial tooth permanently to adjacent teeth or dental implants. Made from various types of material like ceramics or metal and are an alternative to other treatments such as partial dentures or implants"
          },
          {
            title: "Implants",
            description: "Dental Implants are metal based posts that provide a permanent base for fixed replacement teeth. They are typically made of titanium and are surgically placed into the jawbone where teeth are missing. Compared to dentures or bridges they are an effective long-term solution for people who suffer from missing teeth or chronic dental problems. They fit, feel, and function like natural teeth."
          },
          {
            title: "LASER Dentistry",
            description: "Lasers are used to reshape gums and de-pigmentation of dark gingival area & during root canal procedures, and lesion removal & TMJ pain management."
          },
          {
            title: "Teeth Whitening",
            description: "Teeth whitening involves bleaching your teeth to make them lighter. It cannot make your teeth brilliantly white, but it can lighten the existing color by several shades. We use Flash bleaching machine with advance German technology. It is with no sensitivity and takes only 45 minutes."
          },
          {
            title: "Advanced Technology",
            description: "State-of-the-art digital imaging to avoid messy impressions for cases of crowns, bridges, Aligners etc"
          }
        ]
      }
    },
    ar: {
      heroTitle: "مرحباً بكم في عيادة الدكتور ساجي أبراهام للأسنان",
      heroDescription: "حيث يجتمع الابتكار التكنولوجي مع الرعاية الرحيمة. يقدم فريقنا الحائز على جوائز أعلى معايير التميز في طب الأسنان في بيئة مريحة وعصرية.",
      ourServices: "خدماتنا",
      bookAppointment: "احجز موعد",
      movingText: [
        "نخلق ابتسامات لا تزول أبداً",
        "الفن وراء الابتسامة المثالية",
        "تحويل الحياة - ابتسامة واحدة في كل مرة",
        "مركز التميز في تقويم الأسنان",
        "معدات على أحدث طراز",
        "أطباء أسنان ذوو خبرة",
        "بيئة مريحة ومريحة",
        "خيارات دفع ميسورة",
        "خطط علاج مخصصة"
      ],
      statistics: {
        experience: "سنوات خبرة",
        patients: "ضمان الرضا",
        satisfaction: "مرضى سعداء",
        emergency: "من 9 صباحاً إلى 9 مساءً"
      },
      about: {
        title: "حول مركزنا للأسنان",
        founded: "تأسس مركزنا في عام 2022، وقد قدمنا رعاية أسنان استثنائية للمرضى من جميع الأعمار.",
        missionTitle: "مهمتنا",
        mission: "مهمتنا هي تقديم رعاية صحية فموية وأسنانية عالية الجودة بتكاليف ميسورة ومعاملة مرضانا بالاحترام والخدمات التي يستحقونها والنتائج التي يتوقعونها.",
        visionTitle: "رؤيتنا",
        vision: "رؤيتنا هي أن نكون مركز التميز في الرعاية الفموية والأسنانية مع إقامة شراكة مدى الحياة مع مرضانا وتقديم خدمات تتجاوز توقعاتهم.",
        teamTitle: "الفريق",
        team: "فريقنا من أخصائيي الأسنان والمهنيين ذوي التدريب العالي مكرسون بالكامل للبقاء في طليعة تقنيات وتقنيات طب الأسنان لضمان حصولك على أفضل رعاية ممكنة.",
        features: [
          "أطباء أسنان ذوو خبرة",
          "معدات على أحدث طراز",
          "بيئة مريحة ومريحة",
          "خطط علاج مخصصة",
          "خيارات دفع ميسورة"
        ]
      },
      services: {
        title: "خدماتنا",
        items: [
          {
            title: "طب الأسنان العام",
            description: "تشمل الرعاية الأسنان الشاملة التنظيف والحشوات والعلاجات الوقائية."
          },
          {
            title: "أشعة الأسنان",
            description: "يمكن لأشعة الأسنان أن تساعد طبيب الأسنان في اكتشاف مشاكل صحة الفم، مثل التجاويف وأمراض اللثة، قبل أن تتفاقم. هناك أنواع عديدة من أشعة الأسنان، بما في ذلك داخل الفم (المأخوذة داخل الفم) وخارج الفم (المأخوذة خارج الفم). أشعة بانورامية وأشعة سيفالومترية وأشعة TMJ."
          },
          {
            title: "طب الأسنان التجميلي",
            description: "حسّن ابتسامتك بتبييض الأسنان والقشور والحشوات التجميلية. طب الأسنان التجميلي هو فرع من رعاية الأسنان يركز على تحسين مظهر الأسنان واللثة والابتسامات. على عكس طب الأسنان التقليدي، الذي يتعامل أساساً مع مخاوف صحة الفم، يحسّن طب الأسنان التجميلي الجماليات من خلال علاجات مختلفة."
          },
          {
            title: "جراحة الفم",
            description: "قلع الأسنان الخبير وإزالة أسنان الحكمة والإجراءات الجراحية"
          },
          {
            title: "علاج قناة الجذر / علاج اللثة",
            description: "علاج قناة الجذر هو إجراء أسنان يتضمن إزالة الأوعية الدموية والأنسجة العصبية المصابة من داخل حجرة السن. ثم يتم تنظيف المساحة وتطهيرها وملؤها وإغلاقها لمنع المزيد من العدوى. هذا العلاج ضروري لإنقاذ الأسنان التي قد تحتاج إلى الإزالة. إنه إجراء شائع وعادة ما يكون غير مؤلم بسبب التخدير."
          },
          {
            title: "الأسنان المنطمرة",
            description: "السن الأكثر تعرضًا للانغماس في المنطقة الأمامية هو الناب الفكي العلوي. لكن الأسنان الأخرى مثل القاطع المركزي والناب السفلي يمكن أن تنغمر أيضًا. هناك عدة خيارات علاجية متاحة، لكن الخيار مع التكهن طويل الأمد للسن المنغرس يبدو أنه إحضار السن المزاح إلى المحاذاة مع علاج تقويم الأسنان."
          },
          {
            title: "تقويم الأسنان",
            description: "قم بتقويم أسنانك بالأقواس والمحاذاة الواضحة وحلول تقويم الأسنان الأخرى"
          },
          {
            title: "نظام دامون / الأقواس ذاتية الربط",
            description: "ابتسامة رائعة ... أسرع وبراحة متميزة — نظام دامون. نهج علاجي جديد مثبت سريريًا يحاذي أسنانك ويحسن جماليات وجهك - عادة بدون قلع أو موسعات سقف سريعة"
          },
          {
            title: "تقويم الأسنان اللساني",
            description: "تقويم الأسنان اللساني - الأقواس اللسانية تشير إلى طريقة علاج تقويم الأسنان التي يتم فيها وضع الأقواس والأسلاك خلف الأسنان (الجانب اللساني) بحيث تكون غير مرئية. على النقيض من ذلك، في الأقواس التقليدية يتم تثبيت الأجهزة على الجانب الشفوي أو الخدي."
          },
          {
            title: "المحاذاة الواضحة",
            description: "تقويم الأسنان بالحمالات الشفافة هو طريقة لتقويم الأسنان باستخدام سلسلة من الصواني المصنوعة خصيصًا وغير المرئية تقريبًا للأسنان. هذه المحاذاة مصنوعة من البلاستيك الشفاف الطبي وتصمم لتناسب أسنانك بإحكام. تعمل عن طريق تطبيق ضغط لطيف على الأسنان، وبالتالي نقلها تدريجياً ومريحاً إلى الموضع المثالي المرغوب فيه مع مرور الوقت."
          },
          {
            title: "طب أسنان الأطفال",
            description: "رعاية أسنان لطيفة للأطفال في بيئة مريحة وودية."
          },
          {
            title: "القشور الخزفية / ابتسامة هوليوود",
            description: "القشور الخزفية للأسنان هي قذائف رقيقة مصنوعة من البورسلين أو المواد المركبة. وهي مصممة لتغطية السطح الأمامي للأسنان لتحسين الجماليات. يمكن للقشور معالجة مشاكل الأسنان المختلفة مثل الفجوات أو تغير اللون أو التقشير. يتضمن الإجراء إزالة كمية صغيرة من مينا الأسنان لتناسب القشور. معروفة بمتانتها ومظهرها الطبيعي."
          },
          {
            title: "التيجان والجسور",
            description: "تاج الأسنان هو غطاء يوضع على السن التالف لاستعادة شكله وحجمه وبنائه. جسر الأسنان هو ترميم ثابت يُستخدم لاستبدال سن واحد أو أكثر عن طريق ربط سن اصطناعي بشكل دائم بالأسنان المجاورة أو زراعة الأسنان. مصنوعة من أنواع مختلفة من المواد مثل السيراميك أو المعدن وهي بديل للعلاجات الأخرى مثل الأطقم الجزئية أو الزراعة"
          },
          {
            title: "زراعة الأسنان",
            description: "زراعة الأسنان هي قوائم معدنية توفر قاعدة دائمة للأسنان البديلة الثابتة. عادة ما تكون مصنوعة من التيتانيوم ويتم وضعها جراحيًا في عظم الفك حيث توجد الأسنان المفقودة. مقارنة بالأطقم أو الجسور فهي حل طويل الأمد فعال للأشخاص الذين يعانون من الأسنان المفقودة أو مشاكل الأسنان المزمنة. تناسب وتشعر وتعمل مثل الأسنان الطبيعية."
          },
          {
            title: "طب الأسنان بالليزر",
            description: "يستخدم الليزر لإعادة تشكيل اللثة وإزالة التصبغ من منطقة اللثة الداكنة وأثناء إجراءات قناة الجذر وإزالة الآفات وإدارة ألم TMJ."
          },
          {
            title: "تبييض الأسنان",
            description: "يتضمن تبييض الأسنان تبييض أسنانك لجعلها أفتح. لا يمكن أن يجعل أسنانك بيضاء بشكل لامع، لكن يمكنه تفتيح اللون الحالي بعدة درجات. نستخدم آلة التبييض السريع بتقنية ألمانية متقدمة. لا يوجد حساسية ويستغرق 45 دقيقة فقط."
          },
          {
            title: "التكنولوجيا المتقدمة",
            description: "التصوير الرقمي المتقدم لتجنب الانطباعات الفوضوية لحالات التيجان والجسور والمحاذاة وغيرها"
          }
        ]
      }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          // Start counting animation only once when statistics section becomes visible
          startCounting();
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('stats');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [hasAnimated]);

  // Intersection Observer for cards animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCardsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    const currentCardsRef = cardsRef.current;
    if (currentCardsRef) {
      observer.observe(currentCardsRef);
    }

    return () => {
      if (currentCardsRef) {
        observer.unobserve(currentCardsRef);
      }
    };
  }, []);

  // Intersection Observer for features animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFeaturesInView(true);
        }
      },
      { threshold: 0.2 }
    );

    const currentFeaturesRef = featuresRef.current;
    if (currentFeaturesRef) {
      observer.observe(currentFeaturesRef);
    }

    return () => {
      if (currentFeaturesRef) {
        observer.unobserve(currentFeaturesRef);
      }
    };
  }, []);

  // Intersection Observer for services animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setServicesInView(true);
        }
      },
      { threshold: 0.2 }
    );

    const currentServicesRef = servicesRef.current;
    if (currentServicesRef) {
      observer.observe(currentServicesRef);
    }

    return () => {
      if (currentServicesRef) {
        observer.unobserve(currentServicesRef);
      }
    };
  }, []);

  const startCounting = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      
      const progress = currentStep / steps;
      
      setCounts({
        experience: Math.floor(25 * progress),
        patients: 100,
        satisfaction: Math.floor(4500 * progress),
        emergency: 0
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        // Ensure final values are exact
        setCounts({
          experience: 25,
          patients: 100,
          satisfaction: 4500,
          emergency: 0
        });
      }
    }, stepDuration);
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section id="home" className="hero">
        {/* Video Background */}
        <div className="hero-video-background">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="hero-video"
          >
            <source 
              src="https://res.cloudinary.com/dvybb2xnc/video/upload/f_mp4/v1762155113/copy_E2DEF6C9-A34F-4972-B226-E755BADEF866_tzrs32.mov" 
              type="video/mp4" 
            />
            Your browser does not support the video tag.
          </video>
          <div className="hero-video-overlay"></div>
        </div>
        
        <div className="hero-container">
          <div className={`hero-content ${language === 'ar' ? 'rtl' : 'ltr'}`}>
            <h1 className="hero-title">
              {content[language].heroTitle}
            </h1>
            <p className="hero-description">
              {content[language].heroDescription}
            </p>
            <div className="hero-buttons">
              <Link to="/services" className="hero-button hero-button-secondary">
                {content[language].ourServices}
              </Link>
              <Link to="/appointment" className="hero-button hero-button-secondary">
                {content[language].bookAppointment}
              </Link>
            </div>
            
            {/* Social Media Icons */}
            <div className="hero-social-icons">
              <a 
                href="https://www.instagram.com/drsajiabraham?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-icon"
                title="Follow us on Instagram"
              >
                <FaInstagram />
              </a>
              
              <a 
                href="https://www.facebook.com/drsajiabraham"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-icon"
                title="Follow us on Facebook"
              >
                <FaFacebook />
              </a>
              
              <a 
                href="https://wa.me/97334671231"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-icon"
                title="Contact us on WhatsApp"
              >
                <FaWhatsapp />
              </a>
              
              <a 
                href="mailto:drsajiortho@gmail.com"
                className="hero-social-icon"
                title="Send us an email"
              >
                <FaEnvelope />
              </a>
              
              <a 
                href="tel:+97317001231"
                className="hero-social-icon"
                title="Call us"
              >
                <FaPhone />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Moving Text Bar */}
      <section className="moving-text-section">
        <div className="moving-text-container">
          <div className={`moving-text-content ${language === 'ar' ? 'rtl' : 'ltr'}`}>
            {content[language].movingText.map((text, index) => (
              <span key={index} className="moving-text-item">{text}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section id="stats" className="stats-section">
        <div className="stats-container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">{counts.experience}+</div>
              <div className="stat-label">{content[language].statistics.experience}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{counts.patients}%</div>
              <div className="stat-label">{content[language].statistics.patients}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{counts.satisfaction}</div>
              <div className="stat-label">{content[language].statistics.satisfaction}</div>
            </div>
            <div className="stat-item">
              <div className="stat-text">{content[language].statistics.emergency}</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`about ${isVisible ? 'about-visible' : ''}`}>
        <div className="about-container">
            <div className="about-header">
              <h2 className="about-title">
              {content[language].about.title}
              </h2>
              <p className="about-description">
              {content[language].about.founded}
              </p>
            </div>
          
          <div className="about-content">
            <div ref={cardsRef} className={`about-cards-grid ${cardsInView ? 'in-view' : ''}`}>
              <div className="about-card">
                <h3 className="about-card-title">
                  {content[language].about.missionTitle}
                  </h3>
                <p className="about-card-description">
                  {content[language].about.mission}
                  </p>
                </div>
              
              <div className="about-card">
                <h3 className="about-card-title">
                  {content[language].about.visionTitle}
                </h3>
                <p className="about-card-description">
                  {content[language].about.vision}
                      </p>
                  </div>
                  
              <div className="about-card">
                <h3 className="about-card-title">
                  {content[language].about.teamTitle}
                </h3>
                <p className="about-card-description">
                  {content[language].about.team}
                      </p>
                    </div>
                  </div>
                  
            <div className="about-section">
              <div ref={featuresRef} className={`about-features ${featuresInView ? 'in-view' : ''}`}>
                {content[language].about.features.map((feature, index) => (
                  <div key={index} className="about-feature">
                    <div className="about-feature-content">
                      <p className="about-feature-text">
                        {feature}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={`services-section ${language === 'ar' ? 'rtl' : 'ltr'}`}>
        <div className="services-container">
          <h2 className="services-title">
            {content[language].services.title}
          </h2>
          <div ref={servicesRef} className={`services-grid ${servicesInView ? 'in-view' : ''}`}>
            {content[language].services.items.map((service, index) => (
              <div key={index} className="service-card">
                <h3 className="service-card-title">
                  {service.title}
                </h3>
                <p className="service-card-description">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
};

export default Home;
