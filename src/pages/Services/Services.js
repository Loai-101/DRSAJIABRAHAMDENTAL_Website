import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { 
  FaTooth,
  FaXRay,
  FaSmile,
  FaUserMd,
  FaStethoscope,
  FaTeeth,
  FaTeethOpen,
  FaChild,
  FaCrown,
  FaTeethOpen as FaImplant,
  FaBolt,
  FaStar,
  FaLaptopMedical,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaBrain,
  FaHandsHelping,
  FaUserNurse,
  FaHeartbeat,
  FaWalking,
  FaRunning
} from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const { language } = useLanguage();
  const currentLanguage = language || 'en';

  useEffect(() => {
    // Set visible immediately when component mounts
    setIsVisible(true);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('services');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const openServicePopup = (service) => {
    setSelectedService(service);
  };

  const closeServicePopup = () => {
    setSelectedService(null);
  };

  // Doctor references
  const drSaji = {
    name: {
      en: "Dr. SAJI C.ABRAHAM",
      ar: "الدكتور ساجي سي أبراهام"
    },
    specialty: {
      en: "Consultant Orthodontist",
      ar: "استشاري تقويم الأسنان"
    },
    image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1762234188/2_zqc0nv.png"
  };

  const drSita = {
    name: {
      en: "Dr. SITA LAKSHMI",
      ar: "الدكتورة سيتا لاكشمي"
    },
    specialty: {
      en: "Dental Specialist – Endodontist",
      ar: "أخصائي طب الأسنان - أخصائي علاج لب الأسنان"
    },
    image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1762234197/1_uyehlp.png"
  };

  // Dental services
  const services = [
    {
      id: 1,
      name: { en: "General Dentistry", ar: "طب الأسنان العام" },
      description: { en: "Comprehensive dental care includes cleaning, fillings, and preventive treatments.", ar: "تشمل الرعاية الأسنان الشاملة التنظيف والحشوات والعلاجات الوقائية." },
      provider: { en: "Dr. SITA LAKSHMI - Dental Specialist", ar: "الدكتورة سيتا لاكشمي - أخصائي طب الأسنان" },
      treatments: {
        en: ["Dental cleaning and prophylaxis", "Fillings (composite and amalgam)", "Preventive treatments", "Oral health examinations", "Fluoride treatments", "Sealants"],
        ar: ["تنظيف الأسنان والوقاية", "الحشوات (المركبة والملغمية)", "العلاجات الوقائية", "فحوصات صحة الفم", "علاجات الفلورايد", "المواد المانعة للتسرب"]
      },
      doctors: [drSita],
      icon: <FaTooth />
    },
    {
      id: 2,
      name: { en: "Dental X-Rays", ar: "أشعة الأسنان" },
      description: { en: "Dental X-rays can help your dentist detect oral health issues, like cavities and gum disease, before they worsen. There are many distinct types of dental X-rays, including intraoral (taken inside your mouth) and extraoral (taken outside your mouth). Panoramic Xrays and Cephalometric and TMJ Xrays.", ar: "يمكن لأشعة الأسنان أن تساعد طبيب الأسنان في اكتشاف مشاكل صحة الفم، مثل التجاويف وأمراض اللثة، قبل أن تتفاقم. هناك أنواع عديدة من أشعة الأسنان، بما في ذلك داخل الفم (المأخوذة داخل الفم) وخارج الفم (المأخوذة خارج الفم). أشعة بانورامية وأشعة سيفالومترية وأشعة TMJ." },
      provider: { en: "Dr. SITA LAKSHMI - Dental Specialist", ar: "الدكتورة سيتا لاكشمي - أخصائي طب الأسنان" },
      treatments: {
        en: ["Intraoral X-rays", "Extraoral X-rays", "Panoramic X-rays", "Cephalometric X-rays", "TMJ X-rays", "Digital imaging"],
        ar: ["أشعة داخل الفم", "أشعة خارج الفم", "الأشعة البانورامية", "أشعة سيفالومترية", "أشعة TMJ", "التصوير الرقمي"]
      },
      doctors: [drSita],
      icon: <FaXRay />
    },
    {
      id: 3,
      name: { en: "Cosmetic Dentistry", ar: "طب الأسنان التجميلي" },
      description: { en: "Enhance your smile with teeth whitening, veneers, and cosmetic fillings. Cosmetic dentistry is a branch of dental care focused on improving the appearance of teeth, gums, and smiles. Unlike traditional dentistry, which primarily addresses oral health concerns, cosmetic dentistry enhances aesthetics through various treatments.", ar: "حسّن ابتسامتك بتبييض الأسنان والقشور والحشوات التجميلية. طب الأسنان التجميلي هو فرع من رعاية الأسنان يركز على تحسين مظهر الأسنان واللثة والابتسامات. على عكس طب الأسنان التقليدي، الذي يتعامل أساساً مع مخاوف صحة الفم، يحسّن طب الأسنان التجميلي الجماليات من خلال علاجات مختلفة." },
      provider: { en: "Dr. SITA LAKSHMI & Dr. SAJI C.ABRAHAM", ar: "الدكتورة سيتا لاكشمي والدكتور ساجي سي أبراهام" },
      treatments: {
        en: ["Teeth whitening", "Ceramic veneers", "Cosmetic fillings", "Smile design", "Gum reshaping", "Dental bonding"],
        ar: ["تبييض الأسنان", "القشور الخزفية", "الحشوات التجميلية", "تصميم الابتسامة", "إعادة تشكيل اللثة", "ربط الأسنان"]
      },
      doctors: [drSita, drSaji],
      icon: <FaSmile />
    },
    {
      id: 4,
      name: { en: "Oral Surgery", ar: "جراحة الفم" },
      description: { en: "Expert tooth extractions, wisdom teeth removal, and surgical procedures", ar: "قلع الأسنان الخبير وإزالة أسنان الحكمة والإجراءات الجراحية" },
      provider: { en: "Dr. SITA LAKSHMI - Dental Specialist", ar: "الدكتورة سيتا لاكشمي - أخصائي طب الأسنان" },
      treatments: {
        en: ["Tooth extractions", "Wisdom teeth removal", "Surgical procedures", "Bone grafting", "Socket preservation", "Surgical extractions"],
        ar: ["قلع الأسنان", "إزالة أسنان الحكمة", "الإجراءات الجراحية", "زراعة العظام", "الحفاظ على التجويف", "القلع الجراحي"]
          },
      doctors: [drSita],
      icon: <FaUserMd />
    },
    {
      id: 5,
      name: { en: "Root Canals/ Endodontic Treatment", ar: "علاج قناة الجذر / علاج اللثة" },
      description: { en: "Root Canal treatment is a dental procedure that involves removal of infected blood vessels and nerve tissue from within a tooth chamber. The space is then cleaned, disinfected, filled, and sealed to prevent further infection. This therapy is essential for saving teeth that might otherwise need to be removed. It's a common procedure and is typically painless due to anesthesia.", ar: "علاج قناة الجذر هو إجراء أسنان يتضمن إزالة الأوعية الدموية والأنسجة العصبية المصابة من داخل حجرة السن. ثم يتم تنظيف المساحة وتطهيرها وملؤها وإغلاقها لمنع المزيد من العدوى. هذا العلاج ضروري لإنقاذ الأسنان التي قد تحتاج إلى الإزالة. إنه إجراء شائع وعادة ما يكون غير مؤلم بسبب التخدير." },
      provider: { en: "Dr. SITA LAKSHMI - Endodontist", ar: "الدكتورة سيتا لاكشمي - أخصائي علاج لب الأسنان" },
      treatments: {
        en: ["Root canal treatment (single visit)", "Root canal treatment (multi-visit)", "Re-Root canal treatment", "Pulpotomy", "Pulpectomy", "Apexogenesis", "Apexification", "Microscopic root canal treatment"],
        ar: ["علاج قناة الجذر (زيارة واحدة)", "علاج قناة الجذر (زيارات متعددة)", "إعادة علاج قناة الجذر", "بضع اللب", "استئصال اللب", "تكوين القمة", "إصلاح القمة", "علاج قناة الجذر المجهري"]
      },
      doctors: [drSita],
      icon: <FaStethoscope />
    },
    {
      id: 6,
      name: { en: "Impacted Teeth", ar: "الأسنان المنطمرة" },
      description: { en: "The most frequently impacted tooth in the anterior region is maxillary canine. But other teeth like central incisor and lower canine can also be impacted. Several treatment options are available, but one with the long-term prognosis for the impacted tooth appears to be bringing the misplaced tooth into alignment with orthodontic treatment.", ar: "السن الأكثر تعرضًا للانغماس في المنطقة الأمامية هو الناب الفكي العلوي. لكن الأسنان الأخرى مثل القاطع المركزي والناب السفلي يمكن أن تنغمر أيضًا. هناك عدة خيارات علاجية متاحة، لكن الخيار مع التكهن طويل الأمد للسن المنغرس يبدو أنه إحضار السن المزاح إلى المحاذاة مع علاج تقويم الأسنان." },
      provider: { en: "Dr. SAJI C.ABRAHAM - Consultant Orthodontist", ar: "الدكتور ساجي سي أبراهام - استشاري تقويم الأسنان" },
      treatments: {
        en: ["Orthodontic alignment", "Surgical exposure", "Tooth extraction", "Space management", "Early intervention", "Comprehensive orthodontic treatment"],
        ar: ["محاذاة تقويم الأسنان", "الكشف الجراحي", "قلع الأسنان", "إدارة المساحة", "التدخل المبكر", "علاج تقويم الأسنان الشامل"]
      },
      doctors: [drSaji],
      icon: <FaTeeth />
    },
    {
      id: 7,
      name: { en: "Orthodontics", ar: "تقويم الأسنان" },
      description: { en: "Straighten your teeth with braces, clear aligners, and other orthodontic solutions", ar: "قم بتقويم أسنانك بالأقواس والمحاذاة الواضحة وحلول تقويم الأسنان الأخرى" },
      provider: { en: "Dr. SAJI C.ABRAHAM - Consultant Orthodontist", ar: "الدكتور ساجي سي أبراهام - استشاري تقويم الأسنان" },
      treatments: {
        en: ["Traditional braces", "Clear aligners", "Lingual braces", "Colorless braces", "Invisible braces", "Adolescent orthodontics", "Adult orthodontics"],
        ar: ["الأقواس التقليدية", "المحاذاة الواضحة", "الأقواس اللسانية", "الأقواس الشفافة", "الأقواس غير المرئية", "تقويم الأسنان للمراهقين", "تقويم الأسنان للبالغين"]
      },
      doctors: [drSaji],
      icon: <FaTeeth />
    },
    {
      id: 8,
      name: { en: "Damon System / Self ligating Braces", ar: "نظام دامون / الأقواس ذاتية الربط" },
      description: { en: "A Fantastic smile … Faster and with outstanding comfort—Damon System. A new clinically proven treatment approach that aligns your teeth and enhances your facial aesthetics-usually without extractions or rapid palatal Expanders", ar: "ابتسامة رائعة ... أسرع وبراحة متميزة — نظام دامون. نهج علاجي جديد مثبت سريريًا يحاذي أسنانك ويحسن جماليات وجهك - عادة بدون قلع أو موسعات سقف سريعة" },
      provider: { en: "Dr. SAJI C.ABRAHAM - Consultant Orthodontist", ar: "الدكتور ساجي سي أبراهام - استشاري تقويم الأسنان" },
      treatments: {
        en: ["Damon System braces", "Self-ligating brackets", "Faster treatment time", "Enhanced comfort", "Facial aesthetics improvement", "Pre-adjusted Edgewise"],
        ar: ["أقواس نظام دامون", "الأقواس ذاتية الربط", "وقت علاج أسرع", "راحة محسنة", "تحسين جماليات الوجه", "تجهيز الحواف المسبق"]
      },
      doctors: [drSaji],
      icon: <FaTeethOpen />
    },
    {
      id: 9,
      name: { en: "Lingual Orthodontics", ar: "تقويم الأسنان اللساني" },
      description: { en: "Lingual Orthodontics- lingual braces refers to the method of orthodontic treatment in which the brackets and wires are placed behind the teeth (tongue side) so they are non-visible. In contrast, in traditional braces the appliances are fixed on the labial or cheek side.", ar: "تقويم الأسنان اللساني - الأقواس اللسانية تشير إلى طريقة علاج تقويم الأسنان التي يتم فيها وضع الأقواس والأسلاك خلف الأسنان (الجانب اللساني) بحيث تكون غير مرئية. على النقيض من ذلك، في الأقواس التقليدية يتم تثبيت الأجهزة على الجانب الشفوي أو الخدي." },
      provider: { en: "Dr. SAJI C.ABRAHAM - Consultant Orthodontist", ar: "الدكتور ساجي سي أبراهام - استشاري تقويم الأسنان" },
      treatments: {
        en: ["Lingual braces placement", "Invisible orthodontic treatment", "Customized brackets", "Pre-adjusted Edgewise", "Adolescent treatment", "Adult treatment"],
        ar: ["وضع الأقواس اللسانية", "علاج تقويم الأسنان غير المرئي", "أقواس مخصصة", "تجهيز الحواف المسبق", "علاج المراهقين", "علاج البالغين"]
      },
      doctors: [drSaji],
      icon: <FaTeethOpen />
    },
    {
      id: 10,
      name: { en: "Clear Aligners", ar: "المحاذاة الواضحة" },
      description: { en: "Clear aligner Orthodontics is a method of straightening teeth using a series of custom-made, virtually invisible trays for the teeth. These aligners are made of transparent, medical-grade plastic and are designed to fit snugly over your teeth. They work by applying soft pressure to the teeth, thus gradually and comfortably moving them into the ideal desired position overtime.", ar: "تقويم الأسنان بالحمالات الشفافة هو طريقة لتقويم الأسنان باستخدام سلسلة من الصواني المصنوعة خصيصًا وغير المرئية تقريبًا للأسنان. هذه المحاذاة مصنوعة من البلاستيك الشفاف الطبي وتصمم لتناسب أسنانك بإحكام. تعمل عن طريق تطبيق ضغط لطيف على الأسنان، وبالتالي نقلها تدريجياً ومريحاً إلى الموضع المثالي المرغوب فيه مع مرور الوقت." },
      provider: { en: "Dr. SAJI C.ABRAHAM - Consultant Orthodontist", ar: "الدكتور ساجي سي أبراهام - استشاري تقويم الأسنان" },
      treatments: {
        en: ["Custom-made clear aligners", "Digital treatment planning", "Virtually invisible treatment", "Gradual tooth movement", "Comfortable treatment", "Removable aligners"],
        ar: ["محاذاة شفافة مخصصة", "تخطيط العلاج الرقمي", "علاج غير مرئي تقريبًا", "حركة الأسنان التدريجية", "علاج مريح", "محاذاة قابلة للإزالة"]
      },
      doctors: [drSaji],
      icon: <FaTeethOpen />
    },
    {
      id: 11,
      name: { en: "Pediatric Dentistry", ar: "طب أسنان الأطفال" },
      description: { en: "Gentle dental care for children in a comfortable, friendly environment.", ar: "رعاية أسنان لطيفة للأطفال في بيئة مريحة وودية." },
      provider: { en: "Dr. SITA LAKSHMI - Dental Specialist", ar: "الدكتورة سيتا لاكشمي - أخصائي طب الأسنان" },
      treatments: {
        en: ["Oral prophylaxis for children", "Pediatric fillings", "Pulpotomy", "Pulpectomy", "Fluoride treatments", "Sealants", "Preventive care", "Child-friendly environment"],
        ar: ["التنظيف الوقائي للأطفال", "حشوات الأطفال", "بضع اللب", "استئصال اللب", "علاجات الفلورايد", "المواد المانعة للتسرب", "الرعاية الوقائية", "بيئة صديقة للأطفال"]
      },
      doctors: [drSita],
      icon: <FaChild />
    },
    {
      id: 12,
      name: { en: "Ceramic Veneers / HOLLYWOOD SMILE", ar: "القشور الخزفية / ابتسامة هوليوود" },
      description: { en: "Dental ceramic veneers are thin shells made of porcelain or composite material. They are designed to cover the front surface of teeth to improve aesthetics. Veneers can address various dental issues such as gaps, discoloration or chipping. The procedure involves removing a small amount of tooth enamel to fit the veneers. Known for their durability and natural- locking appearance.", ar: "القشور الخزفية للأسنان هي قذائف رقيقة مصنوعة من البورسلين أو المواد المركبة. وهي مصممة لتغطية السطح الأمامي للأسنان لتحسين الجماليات. يمكن للقشور معالجة مشاكل الأسنان المختلفة مثل الفجوات أو تغير اللون أو التقشير. يتضمن الإجراء إزالة كمية صغيرة من مينا الأسنان لتناسب القشور. معروفة بمتانتها ومظهرها الطبيعي." },
      provider: { en: "Dr. SAJI C.ABRAHAM - Consultant Orthodontist", ar: "الدكتور ساجي سي أبراهام - استشاري تقويم الأسنان" },
      treatments: {
        en: ["Porcelain veneers", "Composite veneers", "Smile design", "Gap closure", "Discoloration correction", "Chip repair", "Full mouth rehabilitation", "Aesthetic enhancement"],
        ar: ["قشور البورسلين", "القشور المركبة", "تصميم الابتسامة", "إغلاق الفجوات", "تصحيح تغير اللون", "إصلاح التقشير", "إعادة تأهيل الفم بالكامل", "تحسين الجماليات"]
      },
      doctors: [drSaji],
      icon: <FaCrown />
    },
    {
      id: 13,
      name: { en: "Crowns & Bridge", ar: "التيجان والجسور" },
      description: { en: "A dental crown is a cap placed over a damaged tooth to restore its shape, size, and structure. A dental bridge is a fixed restoration used to replace one or more missing teeth by joining an artificial tooth permanently to adjacent teeth or dental implants. Made from various types of material like ceramics or metal and are an alternative to other treatments such as partial dentures or implants", ar: "تاج الأسنان هو غطاء يوضع على السن التالف لاستعادة شكله وحجمه وبنائه. جسر الأسنان هو ترميم ثابت يُستخدم لاستبدال سن واحد أو أكثر عن طريق ربط سن اصطناعي بشكل دائم بالأسنان المجاورة أو زراعة الأسنان. مصنوعة من أنواع مختلفة من المواد مثل السيراميك أو المعدن وهي بديل للعلاجات الأخرى مثل الأطقم الجزئية أو الزراعة" },
      provider: { en: "Dr. SITA LAKSHMI - Dental Specialist", ar: "الدكتورة سيتا لاكشمي - أخصائي طب الأسنان" },
      treatments: {
        en: ["Dental crowns", "Dental bridges", "Post and core", "Ceramic crowns", "Metal crowns", "Bridge placement", "Crown restoration"],
        ar: ["تيجان الأسنان", "جسور الأسنان", "اللب واللباب", "التيجان الخزفية", "التيجان المعدنية", "وضع الجسور", "ترميم التيجان"]
      },
      doctors: [drSita],
      icon: <FaCrown />
    },
    {
      id: 14,
      name: { en: "Implants", ar: "زراعة الأسنان" },
      description: { en: "Dental Implants are metal based posts that provide a permanent base for fixed replacement teeth. They are typically made of titanium and are surgically placed into the jawbone where teeth are missing. Compared to dentures or bridges they are an effective long-term solution for people who suffer from missing teeth or chronic dental problems. They fit, feel, and function like natural teeth.", ar: "زراعة الأسنان هي قوائم معدنية توفر قاعدة دائمة للأسنان البديلة الثابتة. عادة ما تكون مصنوعة من التيتانيوم ويتم وضعها جراحيًا في عظم الفك حيث توجد الأسنان المفقودة. مقارنة بالأطقم أو الجسور فهي حل طويل الأمد فعال للأشخاص الذين يعانون من الأسنان المفقودة أو مشاكل الأسنان المزمنة. تناسب وتشعر وتعمل مثل الأسنان الطبيعية." },
      provider: { en: "Dr. SITA LAKSHMI - Dental Specialist", ar: "الدكتورة سيتا لاكشمي - أخصائي طب الأسنان" },
      treatments: {
        en: ["Dental implant placement", "Titanium implants", "Implant-supported crowns", "Implant-supported bridges", "Bone grafting", "Implant restoration", "Full mouth rehabilitation"],
        ar: ["وضع زراعة الأسنان", "زراعة التيتانيوم", "التيجان المدعومة بالزراعة", "الجسور المدعومة بالزراعة", "زراعة العظام", "ترميم الزراعة", "إعادة تأهيل الفم بالكامل"]
      },
      doctors: [drSita],
      icon: <FaImplant />
    },
    {
      id: 15,
      name: { en: "LASER Dentistry", ar: "طب الأسنان بالليزر" },
      description: { en: "Lasers are used to reshape gums and de-pigmentation of dark gingival area & during root canal procedures, and lesion removal & TMJ pain management.", ar: "يستخدم الليزر لإعادة تشكيل اللثة وإزالة التصبغ من منطقة اللثة الداكنة وأثناء إجراءات قناة الجذر وإزالة الآفات وإدارة ألم TMJ." },
      provider: { en: "Dr. SITA LAKSHMI - Dental Specialist", ar: "الدكتورة سيتا لاكشمي - أخصائي طب الأسنان" },
      treatments: {
        en: ["Gum reshaping", "Gingival de-pigmentation", "Laser root canal treatment", "Lesion removal", "TMJ pain management", "Soft tissue procedures", "Minimally invasive treatments"],
        ar: ["إعادة تشكيل اللثة", "إزالة تصبغ اللثة", "علاج قناة الجذر بالليزر", "إزالة الآفات", "إدارة ألم TMJ", "إجراءات الأنسجة الرخوة", "العلاجات الغازية بشكل طفيف"]
      },
      doctors: [drSita],
      icon: <FaBolt />
    },
    {
      id: 16,
      name: { en: "Teeth Whitening", ar: "تبييض الأسنان" },
      description: { en: "Teeth whitening involves bleaching your teeth to make them lighter. It cannot make your teeth brilliantly white, but it can lighten the existing color by several shades. We use Flash bleaching machine with advance German technology. It is with no sensitivity and takes only 45 minutes.", ar: "يتضمن تبييض الأسنان تبييض أسنانك لجعلها أفتح. لا يمكن أن يجعل أسنانك بيضاء بشكل لامع، لكن يمكنه تفتيح اللون الحالي بعدة درجات. نستخدم آلة التبييض السريع بتقنية ألمانية متقدمة. لا يوجد حساسية ويستغرق 45 دقيقة فقط." },
      provider: { en: "Dr. SITA LAKSHMI - Dental Specialist", ar: "الدكتورة سيتا لاكشمي - أخصائي طب الأسنان" },
      treatments: {
        en: ["Flash bleaching", "In-office whitening", "Take-home whitening kits", "Advanced German technology", "No sensitivity treatment", "45-minute procedure", "Multiple shade improvement"],
        ar: ["التبييض السريع", "التبييض في العيادة", "مجموعات التبييض المنزلية", "تقنية ألمانية متقدمة", "علاج بدون حساسية", "إجراء 45 دقيقة", "تحسين عدة درجات"]
      },
      doctors: [drSita],
      icon: <FaStar />
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero-video">
          <video autoPlay muted loop playsInline>
            <source
              src="https://res.cloudinary.com/dvybb2xnc/video/upload/f_mp4/v1762166159/copy_181433E6-456D-4C6F-B25D-41BDBA56B7FA_qydviz.mov"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="services-hero-overlay"></div>
        <div className="services-hero-container">
          <div className={`services-hero-content ${currentLanguage === 'ar' ? 'rtl' : 'ltr'}`}>
            <h1 className="services-hero-title">
              {currentLanguage === 'ar' ? 'خدماتنا' : 'Our Services'}
            </h1>
            <p className="services-hero-description">
              {currentLanguage === 'ar' 
                ? 'نقدم مجموعة شاملة من خدمات طب الأسنان المتخصصة لمساعدتك في الحفاظ على صحة فمك وابتسامتك الجميلة'
                : 'We provide a comprehensive range of specialized dental services to help you maintain your oral health and beautiful smile'
              }
            </p>
            <div className="services-hero-buttons">
              <Link to="/appointment" className="services-hero-button-primary">
                {currentLanguage === 'ar' ? 'احجز موعد' : 'Book Appointment'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Moving Services Bar */}
      <div className="moving-services-bar">
        <div className="moving-services-content">
          {services.map((service, index) => (
            <React.Fragment key={index}>
              <span>{service.name && service.name[currentLanguage] ? service.name[currentLanguage] : service.name?.en || 'Service'}</span>
              <span>•</span>
            </React.Fragment>
          ))}
          {services.map((service, index) => (
            <React.Fragment key={`repeat-${index}`}>
              <span>{service.name && service.name[currentLanguage] ? service.name[currentLanguage] : service.name?.en || 'Service'}</span>
              <span>•</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className={`services ${isVisible ? 'services-visible' : ''}`}>
        <div className="services-container">
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className="service-card"
                onClick={() => openServicePopup(service)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="service-icon">
                  <span className="service-icon-text">{service.icon}</span>
                </div>
                
                <div className="service-content">
                  <h3 className="service-name">{service.name && service.name[currentLanguage] ? service.name[currentLanguage] : service.name?.en || 'Service'}</h3>
                  <p className="service-description">{service.description && service.description[currentLanguage] ? service.description[currentLanguage] : service.description?.en || 'Description not available'}</p>
                  

                  
                  <div className="service-features">
                    <h4 className="features-title">{currentLanguage === 'ar' ? 'العلاجات المشمولة:' : 'Included Treatments:'}</h4>
                    <ul className="features-list">
                      {service.treatments && service.treatments[currentLanguage] && service.treatments[currentLanguage].slice(0, 4).map((treatment, treatmentIndex) => (
                        <li key={treatmentIndex} className="feature-item">
                          {treatment}
                        </li>
                      ))}
                      {service.treatments && service.treatments[currentLanguage] && service.treatments[currentLanguage].length > 4 && (
                        <li className="feature-item more-treatments">
                          {currentLanguage === 'ar' ? `+${service.treatments[currentLanguage].length - 4} علاجات أخرى` : `+${service.treatments[currentLanguage].length - 4} more treatments`}
                        </li>
                      )}
                    </ul>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Doctors Popup */}
      {selectedService && selectedService.name && (
        <div className="service-popup-overlay" onClick={closeServicePopup}>
          <div className="service-popup" onClick={(e) => e.stopPropagation()}>
            <button className="service-popup-close-btn" onClick={closeServicePopup}>×</button>
            
            <div className="service-popup-content">
              <div className="service-popup-header">
                <div className="service-popup-icon">
                  {selectedService.iconImage ? (
                    <img 
                      src={selectedService.iconImage} 
                      alt={selectedService.name?.en || selectedService.name || 'Service'}
                      className="service-popup-icon-image"
                    />
                  ) : (
                    <span className="service-popup-icon-text">{selectedService.icon}</span>
                  )}
                </div>
                <h3 className="service-popup-name">{selectedService.name && selectedService.name[currentLanguage] ? selectedService.name[currentLanguage] : selectedService.name?.en || 'Service'}</h3>
                <p className="service-popup-description">{selectedService.description && selectedService.description[currentLanguage] ? selectedService.description[currentLanguage] : selectedService.description?.en || 'Description not available'}</p>
                
                {selectedService.provider && selectedService.provider[currentLanguage] && (
                  <div className="service-popup-provider">
                    <h4 className="provider-title">{currentLanguage === 'ar' ? 'المقدم:' : 'Provided by:'}</h4>
                    <p className="provider-text">{selectedService.provider[currentLanguage]}</p>
                  </div>
                )}
                
                {selectedService.treatments && selectedService.treatments[currentLanguage] && Array.isArray(selectedService.treatments[currentLanguage]) && (
                  <div className="service-popup-treatments">
                    <h4 className="treatments-title">{currentLanguage === 'ar' ? 'العلاجات المشمولة:' : 'Included Treatments:'}</h4>
                    <ul className="treatments-list">
                      {selectedService.treatments[currentLanguage].map((treatment, index) => (
                        <li key={index} className="treatment-item">
                          {treatment}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              
              {/* Doctors who perform this service */}
              <div className="service-popup-doctors">
                <h4 className="doctors-title">{currentLanguage === 'ar' ? 'الأطباء الذين يقدمون هذه الخدمة:' : 'Doctors who perform this service:'}</h4>
                <div className="doctors-grid">
                  {console.log('Selected Service:', selectedService)}
                  {console.log('Doctors:', selectedService.doctors)}
                  {selectedService.doctors && Array.isArray(selectedService.doctors) && selectedService.doctors.length > 0 ? (
                    selectedService.doctors.map((doctor, index) => {
                      console.log('Doctor:', doctor);
                      console.log('Doctor Name:', doctor.name);
                      console.log('Doctor Specialty:', doctor.specialty);
                      return (
                        <div key={index} className="doctor-card-new">
                          <div className="doctor-image-new">
                            <img 
                              src={doctor.image || '/default-doctor.jpg'} 
                              alt={doctor.name && doctor.name[currentLanguage] ? doctor.name[currentLanguage] : 'Doctor'}
                              className="doctor-avatar-new"
                              onError={(e) => {
                                e.target.src = '/default-doctor.jpg';
                              }}
                            />
                          </div>
                          <div className="doctor-content-new">
                            <h5 className="doctor-name-new" style={{color: '#2196F3', fontSize: '1.2rem', fontWeight: '700', display: 'block', visibility: 'visible', opacity: '1'}}>
                              {doctor.name && doctor.name[currentLanguage] ? doctor.name[currentLanguage] : 'Doctor Name'}
                            </h5>
                            <p className="doctor-specialty-new" style={{color: '#FF4081', fontSize: '1rem', fontWeight: '500', display: 'block', visibility: 'visible', opacity: '1'}}>
                              {doctor.specialty && doctor.specialty[currentLanguage] ? doctor.specialty[currentLanguage] : 'Specialty'}
                            </p>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <p className="no-doctors">{currentLanguage === 'ar' ? 'لا توجد معلومات الأطباء متاحة' : 'No doctor information available'}</p>
                  )}
                </div>
              </div>
              
            </div>
          </div>
        </div>
      )}


    </div>
  );
};

export default Services;
