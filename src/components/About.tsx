import { motion } from 'motion/react';
import { useLang } from '../lib/LanguageContext';
import { useRef, useEffect } from 'react';

export default function About() {
  const { t, isRtl } = useLang();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.warn("Video playback failed:", err);
      });
    }
  }, []);

  return (
    <section id="about" className="bg-bg relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text on the Left - Forced order visually */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className={`text-left ${isRtl ? 'lg:order-2' : 'lg:order-1'}`}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-[1px] bg-gold" />
            <span className="text-[10px] tracking-[4px] uppercase text-gold font-semibold">
              {t('about_label')}
            </span>
          </div>
          
          <h2 
            className="font-display text-5xl md:text-7xl font-bold leading-tight mb-12"
            dangerouslySetInnerHTML={{ __html: t('about_title') }}
          />

          <div className="space-y-6 text-white/50 text-lg font-light leading-relaxed max-w-xl">
            <p>{t('about_p1')}</p>
            <p>{t('about_p2')}</p>
          </div>
        </motion.div>

        {/* Video Column on the Right - Forced order visually */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className={`relative w-full aspect-[4/5] max-h-[700px] rounded-2xl overflow-hidden border-2 border-gold/20 bg-bg2 group ${isRtl ? 'lg:order-1' : 'lg:order-2'}`}
        >
          <video 
            ref={videoRef}
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover"
          >
            <source src="https://d2ol7oe51mr4n9.cloudfront.net/user_35gwxZSAp76L0XtOpzCqzC79ONA/1cf08e9a-3493-43c2-9972-85704047f633.mp4" type="video/mp4" />
          </video>
        </motion.div>
      </div>
      
      {/* Decorative large text background */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 opacity-[0.02] text-[20vw] font-black font-display pointer-events-none select-none">
        CREATIVE
      </div>
    </section>
  );
}
