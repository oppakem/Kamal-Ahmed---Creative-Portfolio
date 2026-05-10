import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
  isRtl: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<string, { en: string; ar: string }> = {
  // Nav
  nav_about: { en: 'About', ar: 'نبذة' },
  nav_experience: { en: 'Experience', ar: 'الخبرة' },
  nav_skills: { en: 'Skills', ar: 'المهارات' },
  nav_projects: { en: 'Projects', ar: 'المشاريع' },
  nav_contact: { en: 'Contact', ar: 'تواصل' },

  // Hero
  hero_tagline: { en: 'Creative Director · Jeddah, KSA', ar: 'مدير إبداعي · جدة، السعودية' },
  hero_first_name: { en: 'Kamal', ar: 'كمال' },
  hero_last_name: { en: 'Ahmed', ar: 'أحمد' },
  hero_role: { en: 'Creative Director & Visual Strategist', ar: 'مدير إبداعي واستراتيجي بصري' },
  hero_bio: { 
    en: 'Architecting the future through 20 years of visual storytelling. Fusing AI-driven precision with human artistry to elevate brands into influential icons.', 
    ar: 'هندسة المستقبل من خلال 20 عاماً من السرد البصري. دمج دقة الذكاء الاصطناعي مع الفن البشري للارتقاء بالعلامات التجارية لتصبح رموزاً مؤثرة.' 
  },
  hero_view_exp: { en: 'My Portfolio', ar: 'ملف أعمالي' },
  hero_get_touch: { en: 'Contact Me', ar: 'تواصل معي' },
  hero_years: { en: 'Experience', ar: 'سنة خبرة' },
  hero_projects: { en: 'Projects', ar: 'مشروع' },
  hero_companies: { en: 'Impact', ar: 'أثر مستدام' },

  // About
  about_label: { en: '01 — Personal Profile', ar: '٠١ — الملف الشخصي' },
  about_title: { en: 'Visual Identity, <br />Narrated Cinematically', ar: 'هوية بصرية، <br />تُروى سينمائياً' },
  about_p1: { 
    en: 'Based in Jeddah, my 20-year journey has been about "Architecting the Future." I don\'t just design; I rewrite the rules of visual ecosystems. From luxury real estate branding to national tourism programs, my mission is to transform silent data into cinematic visual experiences.', 
    ar: 'انطلاقاً من جدة، كانت رحلتي الممتدة لـ 20 عاماً تدور حول "هندسة المستقبل". أنا لا أصمم فحسب؛ بل أعيد كتابة قواعد الأنظمة البصرية. من هوية العقارات الفاخرة إلى البرامج السياحية الوطنية، مهمتي هي تحويل البيانات الصامتة إلى تجارب بصرية سينمائية.' 
  },
  about_p2: { 
    en: 'I specialize in fusing AI speed with an artist\'s intuition. My expertise covers Strategic Visual Formation, 3D Architectural Revival, and Digital Growth Strategies that guarantee peak conversion rates.', 
    ar: 'أنا متخصص في دمج سرعة الذكاء الاصطناعي مع حدس الفنان. تغطي خبرتي التكوين الاستراتيجي البصري، الإحياء المعماري ثلاثي الأبعاد، واستراتيجيات النمو الرقمي التي تضمن أعلى معدلات التحويل.' 
  },

  // Education
  edu_label: { en: 'Education', ar: 'التعليم' },
  edu_degree: { en: "Bachelor's Degree Communication and Media", ar: 'بكالوريوس اتصال وإعلام' },
  edu_uni: { en: 'King Abdulaziz University - 2023', ar: 'جامعة الملك عبد العزيز - ٢٠٢٣' },
  edu_diploma: { en: 'Network Tech Diploma', ar: 'دبلوم تقنية شبكات حاسب آلي' },
  edu_jicc: { en: 'JICC Jeddah - 2007-2008', ar: 'JICC جدة - ٢٠٠٧-٢٠٠٨' },

  // Experience
  exp_label: { en: '02 — Career Journey', ar: '٠٢ — الرحلة المهنية' },
  
  // Capabilities
  cap_label: { en: '03 — Professional Mastery', ar: '٠٣ — الإتقان المهني' },
  cap_title: { en: 'Strategic & Visual Spectrum', ar: 'الطيف الاستراتيجي والبصري' },

  // Projects
  proj_label: { en: '04 — Selected Works', ar: '٠٤ — أعمال مختارة' },
  proj_title: { en: 'Outstanding achievements in my career', ar: 'إنجازات بارزة في مسيرتي المهنية' },

  // Contact
  contact_label: { en: '05 — Connect', ar: '٠٥ — تواصل' },
  contact_title: { en: "Let's Architect <br />Your Success", ar: 'لنبدأ هندسة <br />نجاحك' },
  contact_desc: { 
    en: "Open to creative collaborations and senior roles. Let's talk.", 
    ar: 'منفتح على التعاون الإبداعي والأدوار القيادية. دعنا نتحدث.' 
  },
  contact_location: { en: 'Location', ar: 'الموقع' },
  contact_loc_val: { en: 'Jeddah, KSA', ar: 'جدة، السعودية' },
  contact_email: { en: 'Email', ar: 'البريد الإلكتروني' },
  contact_phone: { en: 'Phone', ar: 'الهاتف' },
  contact_linkedin: { en: 'LinkedIn', ar: 'لينكد إن' },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('en');

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (key: string) => translations[key]?.[lang] || key;
  const isRtl = lang === 'ar';

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, isRtl }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLang must be used within LanguageProvider');
  return context;
}
