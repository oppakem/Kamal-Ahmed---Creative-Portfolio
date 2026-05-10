import { motion, AnimatePresence } from 'motion/react';
import { useLang } from '../lib/LanguageContext';
import { 
  ExternalLink, 
  Layers, 
  UserSquare, 
  BookOpen, 
  Zap, 
  Map as MapIcon, 
  Building2, 
  Video,
  X,
  ChevronRight,
  ChevronLeft,
  Fence
} from 'lucide-react';
import { useState } from 'react';

export default function Projects() {
  const { t, isRtl } = useLang();
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const categories = [
    { 
      title: isRtl ? 'ملفات شعارات' : 'Logo Files', 
      icon: <Layers className="w-6 h-6 text-gold" />, 
      video: 'https://cdn.pixabay.com/video/2021/04/12/70860-537446545_large.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop',
      description: isRtl ? 'تصميم هويات بصرية متكاملة وشعارات تعكس روح العلامة التجارية.' : 'Designing integrated visual identities and logos that reflect the brand spirit.',
      externalLink: 'https://drive.google.com/drive/folders/1m7Dnd9LYBSy6j11xVl9iOkXD4WAHDRxW?usp=drive_link',
      items: [
        { type: 'image', url: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop', title: 'Luxury Identity' },
        { type: 'image', url: 'https://images.unsplash.com/photo-1541462608141-ad603978590d?q=80&w=2070&auto=format&fit=crop', title: 'Minimalist Branding' }
      ]
    },
    { 
      title: isRtl ? 'بروفايلات' : 'Profiles', 
      icon: <UserSquare className="w-6 h-6 text-gold" />, 
      video: 'https://cdn.pixabay.com/video/2016/09/13/5101-182379514_large.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1507679799987-c7377f323b8d?q=80&w=2070&auto=format&fit=crop',
      description: isRtl ? 'تصميم ملفات تعريفية احترافية للشركات والمؤسسات بقوالب عصرية.' : 'Designing professional corporate profiles with modern templates.',
      externalLink: 'https://drive.google.com/drive/folders/1ZHWN3UhwxqaJGPRUCVwo6LS5fHry0YJ_?usp=drive_link',
      items: [
        { type: 'image', url: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=2070&auto=format&fit=crop', title: 'Corporate Editorial' },
        { type: 'image', url: 'https://images.unsplash.com/photo-1507208773393-40d9fc670acf?q=80&w=1974&auto=format&fit=crop', title: 'Executive Profile' }
      ]
    },
    { 
      title: isRtl ? 'بروشورات' : 'Brochures', 
      icon: <BookOpen className="w-6 h-6 text-gold" />, 
      video: 'https://cdn.pixabay.com/video/2023/11/02/187515-880479130_large.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop',
      description: isRtl ? 'تصاميم مطبوعة إبداعية تعزز من وصول رسالتكم التسويقية.' : 'Creative print designs that enhance the reach of your marketing message.',
      externalLink: 'https://drive.google.com/drive/folders/13p__tkzRlsqUlVs2qXb8FR9zkQ9qC2B9?usp=drive_link',
      items: [
        { type: 'image', url: 'https://images.unsplash.com/photo-1544391496-1ca7c9745710?q=80&w=2070&auto=format&fit=crop', title: 'Premium Print' },
        { type: 'image', url: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop', title: 'Marketing Kit' }
      ]
    },
    { 
      title: isRtl ? 'منشورات متحركة' : 'Animated Posts', 
      icon: <Zap className="w-6 h-6 text-gold" />, 
      video: 'https://cdn.pixabay.com/video/2021/08/04/83944-585324505_large.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop',
      description: isRtl ? 'محتوى بصري متحرك لمنصات التواصل الاجتماعي يزيد من التفاعل.' : 'Animated visual content for social media platforms that boosts engagement.',
      externalLink: 'https://drive.google.com/drive/folders/1MRe-zmGKwxVkWywC12fO6CeF1Mf3ljX2?usp=drive_link',
      items: [
        { type: 'image', url: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop', title: 'Digital Motion' },
        { type: 'image', url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop', title: 'Static Companion' }
      ]
    },
    { 
      title: isRtl ? 'تصاميم كروكيات' : 'Croquis Designs', 
      icon: <MapIcon className="w-6 h-6 text-gold" />, 
      video: 'https://cdn.pixabay.com/video/2024/01/19/197285-904652253_large.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1518005020470-388a10173a1c?q=80&w=1964&auto=format&fit=crop',
      description: isRtl ? 'تحويل المخططات الهندسية إلى رسومات فنية ومعمارية واضحة.' : 'Transforming engineering blueprints into clear artistic and architectural drawings.',
      externalLink: 'https://drive.google.com/drive/folders/1KI_Ar8Zc7wnlNUN1LV-IMQwSxTIU3dNi?usp=drive_link',
      items: [
        { type: 'image', url: 'https://images.unsplash.com/photo-1503387762-592dee58c460?q=80&w=2070&auto=format&fit=crop', title: 'Site Planning' },
        { type: 'image', url: 'https://images.unsplash.com/photo-1518005020470-388a10173a1c?q=80&w=2070&auto=format&fit=crop', title: 'Technical Drawing' }
      ]
    },
    { 
      title: isRtl ? 'واجهات انشائية' : 'Structural UI', 
      icon: <Building2 className="w-6 h-6 text-gold" />, 
      video: 'https://cdn.pixabay.com/video/2020/09/24/50170-454133379_large.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
      description: isRtl ? 'تصميم واجهات معمارية مبتكرة تدمج الأصالة بالحداثة.' : 'Designing innovative architectural facades that blend authenticity with modernity.',
      externalLink: 'https://drive.google.com/drive/folders/1Jfu_6wpZv-RT06z22uYrrBK1Lgr0q5Vr?usp=drive_link',
      items: [
        { type: 'image', url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop', title: 'Facade Concept' },
        { type: 'image', url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop', title: 'Interior Structure' }
      ]
    },
    { 
      title: isRtl ? 'تصميم البنرات الخارجية' : 'Outdoor Banner Designs', 
      icon: <Fence className="w-6 h-6 text-gold" />, 
      video: 'https://cdn.pixabay.com/video/2020/03/15/33719-398246471_large.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop',
      description: isRtl ? 'تصميم لوحات وبنرات المشاريع الخارجية بهوية بصرية احترافية.' : 'Designing professional outdoor banners and signage for projects with a cohesive identity.',
      externalLink: 'https://drive.google.com/drive/folders/1SoPuL_jH43WwBsfCrUMsaFDTqv8PPAZh?usp=drive_link',
      items: [
        { type: 'image', url: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop', title: 'Site Banner 1' },
      ]
    },
    { 
      title: isRtl ? 'فيديوهات سينمائية' : 'Cinematic Videos', 
      icon: <Video className="w-6 h-6 text-gold" />, 
      video: 'https://cdn.pixabay.com/video/2021/09/13/88448-604724912_large.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop',
      badge: isRtl ? 'جديد وشامل' : 'New & All',
      description: isRtl ? 'فن رواية القصص من خلال عدسات سينمائية وإنتاج احترافي.' : 'The art of storytelling through cinematic lenses and professional production.',
      externalLink: 'https://drive.google.com/drive/folders/1KXaagQFvl2m_lJmgeIzq-G3nSg5I33S3?usp=drive_link',
      items: [
        { type: 'image', url: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop', title: 'Cinematography' },
        { type: 'image', url: 'https://images.unsplash.com/photo-1536240478700-b86734914a7e?q=80&w=2070&auto=format&fit=crop', title: 'Color Grading' }
      ]
    },
  ];

  return (
    <section id="projects" className="bg-bg py-32">
      <div className="max-w-7xl mx-auto px-8 md:px-20">
        <div className="flex items-center gap-4 mb-20">
          <div className="w-10 h-[1px] bg-gold" />
          <span className="text-[10px] tracking-[4px] uppercase text-gold font-semibold">
            {t('proj_label')}
          </span>
        </div>

        <h2 className="font-display text-4xl md:text-5xl font-bold mb-20">
          {t('proj_title')}
        </h2>

        {/* Best Projects Section */}
        <div className="mb-32">
          <div className="flex items-center gap-6 mb-16">
            <h3 className="font-display text-3xl md:text-5xl font-bold text-white tracking-widest uppercase">
              {isRtl ? 'أبرز المشاريع' : 'Best Projects'}
            </h3>
            <div className="h-px flex-1 bg-white/20" />
          </div>

          {/* Logo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 mb-24">
            {[
              { 
                title: isRtl ? "برنامج جودة الحياة" : "Quality of Life Program",
                items: isRtl ? ["هاوي .HAWI"] : ["HAWI .هاوي"]
              },
              { 
                title: isRtl ? "هيئة المسرح والفنون الأدائية" : "Theater Commission",
                items: isRtl ? ["حاضنة المسرح والفنون الأدائية"] : ["Theater Incubator"]
              },
              { 
                title: isRtl ? "وزارة السياحة" : "Ministry of Tourism",
                items: isRtl ? ["معسكر رواد السياحة", "مسرعة أعمال السياحة"] : ["Tourism Bootcamps", "Tourism Accelerator"]
              },
              { 
                title: isRtl ? "منشآت" : "Monsha'at",
                items: isRtl ? ["مسرعة الترفيه", "مسرعة التمور", "تطوير ثقافة ريادة الأعمال"] : ["Entertainment Accelerator", "Dates Accelerator", "Entrepreneurship Culture"]
              },
              { 
                title: isRtl ? "أمانة منطقة الباحة" : "Al-Baha Municipality",
                items: isRtl ? ["إدارة العلاقات العامة والإعلام"] : ["Public Relations Department"]
              },
              { 
                title: isRtl ? "هيئة المتاحف" : "Museums Commission",
                items: isRtl ? ["المؤتمر الدولي للتعليم والابتكار في المتاحف"] : ["International Museum Education Conference"]
              },
              { 
                title: isRtl ? "وزارة الثقافة" : "Ministry of Culture",
                items: isRtl ? ["حاضنة فنون الطهي", "كون"] : ["Culinary Arts Incubator", "KOON"]
              },
              { 
                title: isRtl ? "جمعية الجنوب النسائية" : "Al-Janub Organization",
                items: isRtl ? ["معسكر مكنة لريادة الأعمال", "حاضنة مكنة لريادة الأعمال"] : ["Makana Bootcamp", "Makana Incubator"]
              }
            ].map((client, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group/item">
                <div className="h-24 flex items-center justify-center mb-6 px-4">
                  <div className="text-white/60 font-display text-xl md:text-2xl font-bold opacity-50 group-hover/item:opacity-100 group-hover/item:text-gold transition-all duration-500 uppercase tracking-[2px] leading-tight">
                    {client.title}
                  </div>
                </div>
                <div className="w-full h-px bg-white/10 mb-6 group-hover/item:bg-gold/30 transition-colors" />
                <ul className="space-y-2">
                  {client.items.map((item, i) => (
                    <li key={i} className="text-white/70 text-xs md:text-sm flex items-center justify-center gap-2">
                      <span className="w-1 h-1 bg-gold rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Event Grid Section */}
          <div className="space-y-8">
            {[
              {
                row: [
                  { title: isRtl ? 'رحلة الابتكار - بيان الرياض' : 'Innovation Journey - Riyadh', url: 'https://www.instagram.com/p/B9gVoU_FqVw/' },
                  { title: isRtl ? 'عرض الشركات الناشئة - بيان الرياض' : 'Startup Showcase - Riyadh', url: 'https://www.instagram.com/p/B9gVoU_FqVw/' },
                  { title: isRtl ? 'برنامج تفعيل الأندية الطلابية' : 'Student Club Activation', url: 'https://www.instagram.com/p/B6ahFt1Fhuu/' },
                  { title: isRtl ? 'برنامج تفعيل أندية ريادة الأعمال' : 'Entrepreneurship Club Activation', url: 'https://www.instagram.com/p/CLcIQ0dFkrP/' },
                ],
                gridClass: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
              },
              {
                row: [
                  { title: isRtl ? 'معسكر رواد السياحة - حفل التخرج ٢' : 'Tourism Bootcamp - Graduation 2', url: 'https://x.com/Saudi_MT/status/1473549027929116674' },
                  { title: isRtl ? 'معسكر رواد السياحة - حفل التخرج' : 'Tourism Bootcamp - Graduation', url: 'https://x.com/Saudi_MT/status/1463131342925930497' },
                  { title: isRtl ? 'مسرعة أعمال السياحة' : 'Tourism Accelerator', url: 'https://x.com/Saudi_MT/status/1451798129133637635' },
                  { title: isRtl ? 'معسكر رواد السياحة - العرض الختامي' : 'Tourism Bootcamp - Demo Day', url: 'https://x.com/Saudi_MT/status/1539661999814090753' },
                ],
                gridClass: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
              },
              {
                row: [
                  { title: isRtl ? 'حاضنة فنون الطهي - المخيم التدريبي' : 'Culinary Arts Bootcamp', url: 'https://x.com/MOCCulinary/status/1535197626051747840' },
                  { title: isRtl ? 'حاضنة فنون الطهي - المسابقة الافتراضية' : 'Culinary Arts Virtual Competition', url: 'https://drive.google.com/file/d/1k_hsdHOrQ_7pJ8IneAqBjr2U_bqBvOYa/view' },
                ],
                gridClass: "flex flex-col sm:flex-row justify-center gap-4"
              },
              {
                rowTitle: isRtl ? 'تغطيات مميزة' : 'Featured Coverage',
                showIcon: true,
                isDark: true,
                row: [
                  { 
                    title: isRtl ? 'تغطية حفل اليوم الوطني - رافع' : 'National Day Ceremony - Rafaa',
                    url: 'https://www.linkedin.com/posts/aepaesaeyaewaetabraepaesaewaefaeuaeyabraepaesaebaehaewaexaeyabr94-ugcPost-7249301151798509569-1ozx?utm_source=share&utm_medium=member_desktop&rcm=ACoAACHAp2cBKlp7IvQLbMxsWFcwlmDXjuHx8Ig'
                  },
                  { 
                    title: isRtl ? 'الافطار السنوي - رافع' : 'Annual Iftar - Rafaa',
                    url: 'https://drive.google.com/file/d/1dpNzOUd4F_RkvMfTIT2MmF34nCVmZn3j/view?usp=drive_link'
                  },
                  { 
                    title: isRtl ? 'تحديات التسويق العقاري' : 'Real Estate Marketing Challenges',
                    url: 'https://www.instagram.com/reel/C-ItXNyoPze/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ=='
                  },
                  { 
                    title: isRtl ? 'تغطية يوم التأسيس ١٤٤٦' : 'Founding Day 1446',
                    url: 'https://drive.google.com/file/d/1lcLHdNpBfKo_rWxLwXBhdZRt-0Nwj1kp/view?usp=drive_link'
                  },
                ],
                gridClass: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
              }
            ].map((section, sIdx) => (
              <div key={sIdx} className="w-full">
                {section.rowTitle && (
                  <h4 className="text-white/40 text-[10px] uppercase tracking-[4px] mb-6 text-center">
                    {section.rowTitle}
                  </h4>
                )}
                <div className={`${section.gridClass} ${section.isDark ? 'bg-zinc-900/40 p-6 rounded-2xl border border-white/5 relative' : ''}`}>
                  {section.row.map((item, iIdx) => (
                    <motion.div
                      key={iIdx}
                      whileHover={{ scale: 1.02 }}
                      onClick={() => item.url && window.open(item.url, '_blank')}
                      className={`group relative flex flex-col border border-white/10 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${
                        section.isDark ? 'bg-zinc-800/40 hover:bg-zinc-700/60' : 'bg-white/5 hover:bg-white/10'
                      } ${
                        section.gridClass.includes('flex') ? 'max-w-full sm:max-w-[calc(50%-8px)] lg:max-w-[calc(25%-12px)] w-full' : ''
                      }`}
                    >
                      <div className="aspect-video bg-black/40 flex flex-col items-center justify-center p-4 text-center gap-2">
                        <div className="text-white font-bold text-[11px] leading-tight group-hover:text-gold transition-colors">
                          {item.title}
                        </div>
                        {(item.url || section.showIcon) && (
                          <div className="relative flex items-center justify-center">
                            {/* Interactive Pulse Animation */}
                            {(item.url || section.isDark) && (
                              <>
                                <motion.div 
                                  className="absolute w-8 h-8 rounded-full bg-gold/20"
                                  animate={{ scale: [1, 1.8], opacity: [0.2, 0.5] }}
                                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                                />
                                <motion.div 
                                  className="absolute w-8 h-8 rounded-full bg-gold/20"
                                  animate={{ scale: [1.2, 2.2], opacity: [0.1, 0.4] }}
                                  transition={{ duration: 2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 0.5 }}
                                />
                              </>
                            )}
                            
                            <div className={`w-8 h-8 flex items-center justify-center rounded-full transition-all duration-500 relative z-10 ${
                              item.url 
                                ? 'bg-white/5 border border-white/10 group-hover:bg-gold group-hover:border-gold' 
                                : 'bg-white/5 border border-white/5'
                            }`}>
                              <Zap className={`w-3 h-3 fill-current transition-colors duration-500 ${
                                item.url ? 'text-white group-hover:text-bg' : (section.isDark ? 'text-gold' : 'text-white/20')
                              }`} />
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Latest Works 2024 - 2026 Section */}
        <div className="relative rounded-[3rem] overflow-hidden min-h-[600px] lg:min-h-[750px] border border-gold/10 bg-black flex flex-col justify-between p-8 md:p-16">
          {/* Section Background Video - No Cropping & Edge Fading */}
          <div className="absolute inset-0 z-0 flex items-center justify-center">
            <video 
              src="https://d2ol7oe51mr4n9.cloudfront.net/user_35gwxZSAp76L0XtOpzCqzC79ONA/b357711b-f242-452c-8895-2aa5f2065664.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-contain opacity-100"
            />
            {/* Edge Gradients - Top/Bottom */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
            {/* Edge Gradients - Left/Right */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
          </div>

          <div className="relative z-10 flex flex-col h-full justify-between gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center justify-between gap-6"
            >
              <h3 className="font-display text-3xl md:text-5xl font-bold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                {isRtl ? 'أحدث أعمالي 2024 - 2026' : 'Latest Works 2024 - 2026'}
              </h3>
              <div className="hidden md:block h-px flex-1 bg-gold/40 mx-12" />
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-gold shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
                <span className="text-gold text-[10px] tracking-[4px] uppercase font-bold drop-shadow-md">Innovation</span>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {categories.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: idx * 0.1, 
                    duration: 0.7,
                    type: "spring",
                    stiffness: 50
                  }}
                  whileHover={{ 
                    y: -15, 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                  onClick={() => setSelectedCategory(idx)}
                  className="relative aspect-square rounded-2xl overflow-hidden border border-white/20 bg-black/40 backdrop-blur-xl group cursor-pointer"
                >
                  {/* Badge Ribbon */}
                  {item.badge && (
                    <div className="absolute top-0 left-0 z-30 pointer-events-none overflow-hidden w-24 h-24">
                      <div className="absolute top-[18px] left-[-30px] w-[110px] -rotate-45 bg-gold text-bg text-[7px] font-bold py-1 text-center uppercase tracking-[2px] shadow-xl border-b border-white/20">
                        {item.badge}
                      </div>
                    </div>
                  )}

                  {/* Background Thumbnail Image */}
                  <div className="absolute inset-0 opacity-40 group-hover:opacity-10 transition-opacity duration-700">
                    <img 
                      src={item.thumbnail} 
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-110"
                    />
                  </div>

                  {/* Background Video for Card on Hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700">
                    <video 
                      src={item.video} 
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                      className="w-full h-full object-cover grayscale"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="relative h-full flex flex-col items-center justify-center p-4 text-center z-10">
                    <motion.div
                      animate={{ 
                        y: [0, -8, 0],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 5, 
                        ease: "easeInOut", 
                        delay: idx * 0.3 
                      }}
                      className="mb-4 p-3 rounded-full bg-black/40 border border-gold/20 group-hover:border-gold/50 transition-all duration-500"
                    >
                      {item.icon}
                    </motion.div>
                    <h4 className="text-white font-display text-[10px] md:text-[11px] font-bold tracking-[2px] uppercase leading-tight drop-shadow-lg px-2 lg:px-0">
                      {item.title}
                    </h4>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none">
                    <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-gold/60 rounded-full group-hover:scale-150 group-hover:bg-gold transition-all duration-500 shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
                  </div>

                  {/* Animated Border on Hover */}
                  <div className="absolute inset-0 border-2 border-gold/0 group-hover:border-gold/40 rounded-2xl transition-all duration-500 pointer-events-none" />
                </motion.div>
              ))}
            </div>

            {/* Lightbox / Modal */}
            <AnimatePresence>
              {selectedCategory !== null && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 overflow-hidden"
                >
                  {/* Backdrop */}
                  <div 
                    className="absolute inset-0 bg-black/95 backdrop-blur-2xl"
                    onClick={() => setSelectedCategory(null)}
                  />

                  {/* Close Button */}
                  <button 
                    onClick={() => setSelectedCategory(null)}
                    className="absolute top-8 right-8 z-[110] text-white/50 hover:text-gold transition-colors"
                  >
                    <X className="w-8 h-8" />
                  </button>

                  {/* Modal Container */}
                  <motion.div
                    initial={{ scale: 0.9, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.9, y: 20 }}
                    className="relative w-full max-w-xl bg-bg2 rounded-3xl border border-white/10 overflow-hidden flex flex-col shadow-2xl z-10 p-8 md:p-16"
                  >
                    {/* Content Panel */}
                    <div className="flex flex-col justify-center text-center">
                      <div className="mb-8 flex justify-center">
                        {categories[selectedCategory].icon}
                      </div>
                      <h3 className="font-display text-4xl md:text-5xl font-bold mb-6 text-gold drop-shadow-lg">
                        {categories[selectedCategory].title}
                      </h3>
                      <p className="text-white/70 leading-relaxed mb-12 text-base md:text-lg">
                        {categories[selectedCategory].description}
                      </p>

                      <div className="pt-8 border-t border-white/10">
                        <button 
                          className={`w-full py-5 font-bold rounded-2xl flex items-center justify-center gap-4 transition-all hover:scale-[1.03] text-lg shadow-xl ${
                            categories[selectedCategory].externalLink 
                              ? 'bg-gold text-bg hover:shadow-gold/20' 
                              : 'bg-white/5 text-white/20 cursor-not-allowed border border-white/10'
                          }`}
                          onClick={() => {
                            if (categories[selectedCategory].externalLink) {
                              window.open(categories[selectedCategory].externalLink, '_blank');
                            }
                          }}
                        >
                          <ExternalLink className="w-6 h-6" />
                          {isRtl ? 'الانتقال إلى المعرض' : 'Go to Gallery'}
                        </button>
                        {!categories[selectedCategory].externalLink && (
                          <p className="text-center text-[10px] text-white/30 mt-4 uppercase tracking-[2px]">
                            {isRtl ? 'سيتوفر الرابط قريباً' : 'Link coming soon'}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>

        {/* Neon Personal Artwork Section */}
        <div className="mt-16 flex flex-col items-center">
          <div className="w-1.5 h-1.5 bg-gold rounded-full mb-12 shadow-[0_0_10px_rgba(212,175,55,0.8)]" />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl">
            {[
              { 
                url: 'https://www.instagram.com/reel/DU5HsMCjbCD/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
                img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800'
              },
              { 
                url: 'https://www.instagram.com/reel/DT986EuDaSc/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
                img: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800'
              },
              { 
                url: 'https://www.instagram.com/reel/CnK61zsg7EI/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
                img: 'https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&q=80&w=800'
              },
              { 
                url: 'https://www.instagram.com/reel/CY2Xe9BJhlV/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
                img: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=800'
              }
            ].map((artwork, i) => (
              <motion.a
                key={i}
                href={artwork.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -5 }}
                className="aspect-square bg-black/60 border border-cyan-500/30 rounded-xl flex flex-col items-center justify-center p-4 group transition-all duration-500 relative overflow-hidden"
                style={{
                  boxShadow: 'inset 0 0 10px rgba(6, 182, 212, 0.1)'
                }}
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500 bg-cover bg-center grayscale group-hover:grayscale-0 scale-110 group-hover:scale-100"
                  style={{ backgroundImage: `url(${artwork.img})` }}
                />

                {/* Neon Glow on Hover */}
                <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <div className="absolute inset-0 border border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_20px_rgba(34,211,238,0.4)] rounded-xl z-20" />
                
                <span className="relative z-30 text-cyan-400/70 group-hover:text-cyan-400 font-display text-[10px] md:text-xs font-bold tracking-[2px] text-center px-2 transition-colors duration-500 uppercase">
                  {isRtl ? 'ارت ورك - شخصي' : 'Artwork - Personal'}
                </span>
                
                <div className="relative z-30 mt-4 flex items-center justify-center">
                  {/* Interactive Pulse Animation */}
                  <motion.div 
                    className="absolute w-6 h-6 rounded-full bg-gold/20"
                    animate={{ scale: [1, 2.2], opacity: [0.2, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                  />
                  <motion.div 
                    className="absolute w-6 h-6 rounded-full bg-gold/20"
                    animate={{ scale: [1.2, 2.5], opacity: [0.1, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 0.5 }}
                  />
                  
                  <div className="relative z-30 w-6 h-6 rounded-full border border-cyan-500/20 flex items-center justify-center group-hover:border-gold transition-colors bg-black/40">
                    <Zap className="w-2.5 h-2.5 text-gold/60 group-hover:text-gold fill-current transition-colors" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
