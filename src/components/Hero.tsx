import { motion, useScroll, useTransform } from 'motion/react';
import { useLang } from '../lib/LanguageContext';
import { cn } from '../lib/utils';

export default function Hero() {
  const { t, isRtl } = useLang();
  const { scrollY } = useScroll();
  
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const stats = [
    { num: '20', label: 'hero_years' },
    { num: '30+', label: 'hero_projects' },
    { num: '15+', label: 'hero_companies' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="home" className="relative min-h-[110vh] flex items-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2548&auto=format&fit=crop')` }}
        />
        
        {/* The Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-100"
        >
          <source 
            src="https://d2ol7oe51mr4n9.cloudfront.net/user_35gwxZSAp76L0XtOpzCqzC79ONA/a9482fd6-31f3-4245-979d-b155633fdc3c.mp4" 
            type="video/mp4" 
          />
        </video>

        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(8,8,8,0.6)_60%,rgba(8,8,8,1)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-bg to-transparent" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-bg to-transparent" />
      </motion.div>

      <motion.div 
        className={cn(
          "relative z-10 w-full max-w-7xl mx-auto px-8 md:px-20",
          isRtl && "text-right"
        )}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ opacity }}
      >
        <motion.div className="flex items-center gap-4 mb-8" variants={itemVariants}>
          <div className="w-12 h-[1px] bg-gold" />
          <span className="text-[10px] tracking-[5px] uppercase text-gold font-semibold">
            {t('hero_tagline')}
          </span>
        </motion.div>

        <motion.h1 
          className="font-display text-[clamp(60px,10vw,120px)] leading-[0.85] font-black -tracking-[4px] mb-8"
          variants={itemVariants}
        >
          {t('hero_first_name')}<br />
          <span className="text-gold">{t('hero_last_name')}</span>
        </motion.h1>

        <motion.div 
          className="text-sm tracking-[6px] uppercase text-muted font-medium mb-8"
          variants={itemVariants}
        >
          {t('hero_role')}
        </motion.div>

        <motion.p 
          className="max-w-xl text-lg text-white/60 leading-relaxed font-light mb-12"
          variants={itemVariants}
        >
          {t('hero_bio')}
        </motion.p>

        <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
          <a 
            href="#experience" 
            className="px-10 py-5 bg-gold text-black text-[10px] tracking-[3px] uppercase font-bold hover:shadow-[0_8px_30px_rgba(201,162,39,0.4)] transition-all hover:-translate-y-1 inline-block"
          >
            {t('hero_view_exp')}
          </a>
          <a 
            href="#contact" 
            className="px-10 py-5 border border-white/20 text-white/70 text-[10px] tracking-[3px] uppercase font-bold hover:border-gold hover:text-gold transition-all inline-block"
          >
            {t('hero_get_touch')}
          </a>
        </motion.div>
      </motion.div>

      {/* Stats side bar */}
      <motion.div 
        className={cn(
          "absolute right-20 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-10 z-20",
          isRtl && "left-20 right-auto"
        )}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        {stats.map((stat, i) => (
          <div key={i} className={cn("text-right", isRtl && "text-left")}>
            <div className={cn(
              "text-5xl font-display text-gold text-glow border-gold",
              isRtl ? "border-l-2 pl-4" : "border-r-2 pr-4"
            )}>
              {stat.num}
              {stat.num === '20' && (
                <span className="text-xs font-display tracking-widest ml-2 opacity-60">years</span>
              )}
            </div>
            <div className="text-[10px] text-muted tracking-widest uppercase mt-2">
              {t(stat.label)}
            </div>
          </div>
        ))}
      </motion.div>

      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-[10px] tracking-[3px] uppercase text-white/30 font-medium rotate-0">
          Scroll
        </span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  );
}
