import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { useLang } from '../lib/LanguageContext';
import { cn } from '../lib/utils';

interface Job {
  id: number;
  period: string;
  periodAr: string;
  title: string;
  titleAr: string;
  company: string;
  companyAr: string;
  desc: string[];
  descAr: string[];
}

const experiences: Job[] = [
  {
    id: 1,
    period: '2024 – Current',
    periodAr: '٢٠٢٤ – الحاضر',
    title: 'Creative Director',
    titleAr: 'مدير إبداعي',
    company: 'Rafea Development Co.',
    companyAr: 'شركة رافع للتطوير العقاري',
    desc: [
      'Leading complete creative vision and visual identity.',
      'Directing architectural photography and cinematic videography.',
      'Overseeing brand positioning and strategic market presence.'
    ],
    descAr: [
      'قيادة الرؤية الإبداعية الكاملة والهوية البصرية.',
      'إخراج التصوير المعماري والفيديو السينمائي.',
      'الإشراف على تموضع العلامة التجارية والتواجد الاستراتيجي في السوق.'
    ]
  },
  {
    id: 2,
    period: '2017 – 2024',
    periodAr: '٢٠١٧ – ٢٠٢٤',
    title: 'Senior Brand Manager',
    titleAr: 'مدير علامة تجارية أول',
    company: 'Sea Ventures',
    companyAr: 'سي فنتشرز (ريادة أعمال)',
    desc: [
      'Visual identity management for entrepreneurial ecosystems.',
      'Creative direction for 12+ national tourism/entertainment programs.',
      'Cinematic coverage for major exhibitions like BIBAN Riyadh.'
    ],
    descAr: [
      'إدارة الهوية البصرية لأنظمة ريادة الأعمال.',
      'الإدارة الإبداعية لأكثر من ١٢ برنامجاً وطنياً للسياحة والترفيه.',
      'تغطية سينمائية للمعارض الكبرى مثل بيبان الرياض.'
    ]
  },
  {
    id: 3,
    period: '2017 – 2018',
    periodAr: '٢٠١٧ – ٢٠١٨',
    title: 'Senior Graphic Designer',
    titleAr: 'مصمم جرافيك أول',
    company: 'AMAZ',
    companyAr: 'أماز (بناء العلامات التجارية)',
    desc: [
      'Industrial and advertising graphic design.',
      'Developed motion graphics for large-scale campaigns.',
      'Video montage and cinematic post-production.'
    ],
    descAr: [
      'تصميم جرافيك صناعي وإعلاني.',
      'تطوير موشن جرافيك للحملات واسعة النطاق.',
      'مونتاج الفيديو وما بعد الإنتاج السينمائي.'
    ]
  },
  {
    id: 3.5,
    period: '2017 – 2018',
    periodAr: '٢٠١٧ – ٢٠١٨',
    title: 'Graphic Designer',
    titleAr: 'مصمم جرافيك',
    company: 'JIC - Jeddah International College',
    companyAr: 'كلية جدة العالمية',
    desc: [
      'Institutional graphic design and event coverage.',
      'Motion graphics and video production for academic events.',
      'Photography and visual documentation.'
    ],
    descAr: [
      'تصميم جرافيك مؤسسي وتغطية الفعاليات.',
      'موشن جرافيك وإنتاج فيديو للفعاليات الأكاديمية.',
      'تصوير فوتوغرافي وتوثيق بصري.'
    ]
  },
  {
    id: 4,
    period: '2012 – 2017',
    periodAr: '٢٠١٢ – ٢٠١٧',
    title: 'Sales & Graphic Management',
    titleAr: 'إدارة المبيعات والجرافيك',
    company: 'Mujally A.bamujally Co.',
    companyAr: 'شركة مجلي أحمد با مجلي',
    desc: [
      'Sales administration combined with product graphic design.',
      'Product photography and advertising material creation.'
    ],
    descAr: [
      'إدارة المبيعات جنباً إلى جنب مع التصميم الجرافيكي للمنتجات.',
      'تصوير المنتجات وإنشاء المواد الإعلانية.'
    ]
  },
  {
    id: 5,
    period: '2011 – 2012',
    periodAr: '٢٠١١ – ٢٠١٢',
    title: 'Secretariat & Graphic Design',
    titleAr: 'سكرتارية وتصميم جرافيك',
    company: 'Alhidaya Private School',
    companyAr: 'مدرسة الهداية الخاصة',
    desc: [
      'Junior graphic design for school branding and materials.',
      'Data management and administrative secretariat duties.'
    ],
    descAr: [
      'تصميم جرافيك مبتدئ لهوية المدرسة وموادها.',
      'إدارة البيانات ومهام السكرتارية الإدارية.'
    ]
  },
  {
    id: 6,
    period: '2006 – 2007',
    periodAr: '٢٠٠٦ – ٢٠٠٧',
    title: 'Data Entry & Secretariat',
    titleAr: 'مدخل بيانات وسكرتارية',
    company: 'Al - Janoubi Security Co.',
    companyAr: 'الجنوبي للأمن والحراسات',
    desc: [
      'Precise data entry and database maintenance.',
      'General administrative support and documentation.'
    ],
    descAr: [
      'إدخال بيانات دقيق وصيانة قواعد البيانات.',
      'دعم إداري عام وتوثيق.'
    ]
  }
];

export default function Experience() {
  const { t, isRtl } = useLang();
  
  return (
    <section id="experience" className="bg-bg2 py-32 relative">
      <div className="max-w-7xl mx-auto px-8 md:px-20">
        <div className="flex flex-col md:flex-row gap-20">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-20">
              <div className="w-10 h-[1px] bg-gold" />
              <span className="text-[10px] tracking-[4px] uppercase text-gold font-semibold">
                {t('exp_label')}
              </span>
            </div>

            <div className="relative border-l border-gold/20 ml-4 md:ml-0 space-y-20">
              {experiences.map((job, idx) => (
                <ExperienceItem key={job.id} job={job} index={idx} isRtl={isRtl} />
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/3">
            <div className="sticky top-32">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-10 h-[1px] bg-gold" />
                <span className="text-[10px] tracking-[4px] uppercase text-gold font-semibold">
                  {t('edu_label')}
                </span>
              </div>
              
              <div className="space-y-12">
                <div className={cn(isRtl && "text-right")}>
                  <h4 className="font-display text-xl font-bold mb-2 text-white/90">{t('edu_degree')}</h4>
                  <p className="text-muted text-sm">{t('edu_uni')}</p>
                </div>
                <div className={cn(isRtl && "text-right")}>
                  <h4 className="font-display text-xl font-bold mb-2 text-white/90">{t('edu_diploma')}</h4>
                  <p className="text-muted text-sm">{t('edu_jicc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface ExperienceItemProps {
  job: Job;
  index: number;
  isRtl: boolean;
  key?: number | string;
}

function ExperienceItem({ job, index, isRtl }: ExperienceItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div 
      ref={ref}
      className="relative pl-12 md:pl-20"
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      {/* Timeline Dot */}
      <div className="absolute left-[-6px] top-2 w-3 h-3 rounded-full bg-bg border-2 border-gold z-10" />
      
      <div className={cn("flex flex-col", isRtl && "text-right")}>
        <div className="text-[10px] tracking-[3px] uppercase text-gold font-bold mb-4">
          {isRtl ? job.periodAr : job.period}
        </div>
        
        <h3 className="font-display text-2xl font-bold mb-2">
          {isRtl ? job.titleAr : job.title}
        </h3>
        
        <div className="text-muted text-sm italic mb-8">
          {isRtl ? job.companyAr : job.company}
        </div>

        <ul className="space-y-3 max-w-2xl">
          {(isRtl ? job.descAr : job.desc).map((item, i) => (
            <li key={i} className="flex gap-4 text-white/50 font-light leading-relaxed">
              <span className="text-gold mt-1.5 text-[8px]">▸</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
