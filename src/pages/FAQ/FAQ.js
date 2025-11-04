import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './FAQ.css';

const FAQ = () => {
  const { language } = useLanguage();
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqData = [
    {
      id: 1,
      question: {
        en: "WHAT IS ORTHODONTICS?",
        ar: "ما هو تقويم الأسنان؟"
      },
      answer: {
        en: "Orthodontics is the branch of dentistry that specializes in the diagnosis, prevention, and treatment of dental and facial irregularities. The technical term for these problems is \"malocclusion,\" which means \"bad bite.\" The practice of orthodontics requires professional skill in the design, application, and control of corrective appliances (braces) to bring teeth, lips and jaws into proper alignment and achieve facial balance.",
        ar: "تقويم الأسنان هو فرع من طب الأسنان يتخصص في تشخيص ووقاية وعلاج التشوهات السنية والوجهية. المصطلح التقني لهذه المشاكل هو \"سوء الإطباق\"، وهو ما يعني \"العض غير الصحيح\". تتطلب ممارسة تقويم الأسنان مهارة مهنية في تصميم وتطبيق والتحكم في الأجهزة التصحيحية (الأقواس) لجلب الأسنان والشفاه والفكين إلى المحاذاة الصحيحة وتحقيق التوازن الوجهي."
      }
    },
    {
      id: 2,
      question: {
        en: "WHO IS AN ORTHODONTIST",
        ar: "من هو أخصائي تقويم الأسنان"
      },
      answer: {
        en: "An Orthodontist is a highly trained specialist who has not only graduated as a dentist but has returned to university for post-graduate training on a full-time basis. Post-graduate training lasts a minimum of 24 consecutive months and quite often will last more than 36 - 48 months for those dedicated to extensive research projects.",
        ar: "أخصائي تقويم الأسنان هو أخصائي مدرب تدريباً عالياً لم يتخرج فقط كطبيب أسنان بل عاد إلى الجامعة للتدريب بعد التخرج بدوام كامل. يستمر التدريب بعد التخرج لمدة لا تقل عن 24 شهراً متتالياً وغالباً ما يستمر لأكثر من 36-48 شهراً لأولئك المكرسين لمشاريع بحثية واسعة."
      }
    },
    {
      id: 3,
      question: {
        en: "WHY CHOOSE AN ORTHODONTIST?",
        ar: "لماذا تختار أخصائي تقويم الأسنان؟"
      },
      answer: {
        en: "Orthodontists are the most highly trained specialists in the field of orthodontics. They are trained in a wide range of orthodontic techniques and are therefore in the best position to provide optimal care to treat orthodontic problems.",
        ar: "أخصائيو تقويم الأسنان هم الأخصائيون الأكثر تدريباً في مجال تقويم الأسنان. يتم تدريبهم على مجموعة واسعة من تقنيات تقويم الأسنان وبالتالي هم في أفضل وضع لتقديم رعاية مثلى لعلاج مشاكل تقويم الأسنان."
      }
    },
    {
      id: 4,
      question: {
        en: "WHAT IS THE BEST TIME TO SCHEDULE AN ORTHODONTIC CONSULTATION?",
        ar: "ما هو أفضل وقت لتحديد موعد استشارة تقويم الأسنان؟"
      },
      answer: {
        en: "Each problem determines its own best starting time. Length of treatment varies according to the problem. Early consultation allows the orthodontist to determine the optimum time for treatment to begin. In some cases, satisfactory results are unattainable once the face and jaws have finished growing. Seven years old is a good rule of thumb for a child unless you see a noticeable problem earlier. Early examinations often permit maximum improvement with the least amount of time and expense",
        ar: "كل مشكلة تحدد أفضل وقت بداية خاص بها. طول العلاج يختلف حسب المشكلة. تسمح الاستشارة المبكرة لأخصائي تقويم الأسنان بتحديد الوقت الأمثل لبدء العلاج. في بعض الحالات، لا يمكن تحقيق نتائج مرضية بمجرد انتهاء نمو الوجه والفكين. سن السابعة هو قاعدة جيدة للطفل إلا إذا رأيت مشكلة ملحوظة في وقت مبكر. الفحوصات المبكرة غالباً ما تسمح بأقصى تحسين مع أقل قدر من الوقت والمصروفات"
      }
    },
    {
      id: 5,
      question: {
        en: "WHAT WILL ORTHODONTIC TREATMENT COST?",
        ar: "كم سيكلف علاج تقويم الأسنان؟"
      },
      answer: {
        en: "Time for treatment and the nature of treatment are major factors in determining the fee. Some cases are less severe and hence less costly: just as others may require several different periods of treatment. or are more complicated in other ways and thus more costly. You can usually arrange finances on a convenient basis with an initial down payment and monthly installments.",
        ar: "وقت العلاج وطبيعة العلاج هما عاملان رئيسيان في تحديد الرسوم. بعض الحالات أقل شدة وبالتالي أقل تكلفة: تماماً كما قد تتطلب حالات أخرى عدة فترات مختلفة من العلاج. أو تكون أكثر تعقيداً بطرق أخرى وبالتالي أكثر تكلفة. يمكنك عادة ترتيب المالية على أساس مريح مع دفعة أولية ودفعات شهرية."
      }
    },
    {
      id: 6,
      question: {
        en: "WHAT ABOUT TAKING OUT TEETH?",
        ar: "ماذا عن خلع الأسنان؟"
      },
      answer: {
        en: "Often no teeth needed to be removed,  all other times orthodontists prescribe tooth removal. You can rely on your orthodontist to chart the best course for you.",
        ar: "في كثير من الأحيان لا تحتاج أي أسنان إلى الإزالة، في جميع الأوقات الأخرى يصف أخصائيو تقويم الأسنان إزالة الأسنان. يمكنك الاعتماد على أخصائي تقويم الأسنان لرسم أفضل مسار لك."
      }
    },
    {
      id: 7,
      question: {
        en: "WHAT KIND OF BRACES WILL YOUR CHILD HAVE?",
        ar: "ما نوع الأقواس التي سيحصل عليها طفلك؟"
      },
      answer: {
        en: "Custom-made appliances or 'braces' are chosen according to the problem being treated. They may be 'removable' or 'fixed'. They may be made of metal or plastic or both. All appliances have one aim- to use gentle pressure to move teeth into their proper positions. Years of training and experience give the orthodontist the skill to handle tooth movement.",
        ar: "يتم اختيار الأجهزة المخصصة أو 'الأقواس' حسب المشكلة التي يتم علاجها. قد تكون 'قابلة للإزالة' أو 'ثابتة'. قد تكون مصنوعة من المعدن أو البلاستيك أو كليهما. جميع الأجهزة لها هدف واحد - استخدام ضغط لطيف لتحريك الأسنان إلى مواضعها الصحيحة. سنوات من التدريب والخبرة تعطي أخصائي تقويم الأسنان المهارة للتعامل مع حركة الأسنان."
      }
    },
    {
      id: 8,
      question: {
        en: "WHAT ABOUT PATIENT RESPOSIBILITY?",
        ar: "ماذا عن مسؤولية المريض؟"
      },
      answer: {
        en: "Successful orthodontic treatment requires more than the orthodontist's skill. It requires cooperation among patients, parents, and orthodontists. Certain phases of orthodontic treatment are impossible unless the patient diligently follows instructions such as wearing elastics or headgear. Teeth and gums must be brushed carefully and frequently during orthodontic treatment. Broken or cancelled appointments during orthodontic care may have detrimental effect on the results of treatment.",
        ar: "يتطلب علاج تقويم الأسنان الناجح أكثر من مهارة أخصائي تقويم الأسنان. يتطلب التعاون بين المرضى والآباء وأخصائيي تقويم الأسنان. مراحل معينة من علاج تقويم الأسنان مستحيلة إلا إذا اتبع المريض التعليمات بجد مثل ارتداء الأربطة المرنة أو جهاز الرأس. يجب تنظيف الأسنان واللثة بعناية وبشكل متكرر أثناء علاج تقويم الأسنان. المواعيد المكسورة أو الملغاة أثناء رعاية تقويم الأسنان قد يكون لها تأثير ضار على نتائج العلاج."
      }
    }
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="faq-page">
      <div className="faq-container">
        <div className="faq-header">
          <h1 className="faq-title">
            {language === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
          </h1>
          <p className="faq-subtitle">
            {language === 'ar' 
              ? 'إجابات على الأسئلة الأكثر شيوعاً حول خدماتنا وعلاجاتنا'
              : 'Answers to the most common questions about our services and treatments'
            }
          </p>
        </div>

        <div className="faq-content">
          <div className="faq-list">
            {faqData.map((faq) => (
              <div key={faq.id} className="faq-item">
                <div 
                  className="faq-question"
                  onClick={() => toggleFAQ(faq.id)}
                >
                  <h3 className="faq-question-text">
                    {faq.question[language]}
                  </h3>
                  <span className={`faq-icon ${openFAQ === faq.id ? 'open' : ''}`}>
                    {language === 'ar' ? '−' : '+'}
                  </span>
                </div>
                <div className={`faq-answer ${openFAQ === faq.id ? 'open' : ''}`}>
                  <p className="faq-answer-text">
                    {faq.answer[language]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="faq-contact">
          <h3 className="faq-contact-title">
            {language === 'ar' ? 'هل لديك سؤال آخر؟' : 'Have Another Question?'}
          </h3>
          <p className="faq-contact-text">
            {language === 'ar' 
              ? 'لا تتردد في التواصل معنا للحصول على إجابات على أسئلتك'
              : "Don't hesitate to contact us for answers to your questions"
            }
          </p>
          <div className="faq-contact-buttons">
            <a href="tel:+97317001231" className="faq-contact-btn primary">
              {language === 'ar' ? 'اتصل بنا' : 'Call Us'}
            </a>
            <a href="https://wa.me/97334671231" className="faq-contact-btn secondary">
              {language === 'ar' ? 'واتساب' : 'WhatsApp'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
