import { motion } from 'motion/react';
import { useLang } from '../lib/LanguageContext';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Contact() {
  const { t, isRtl } = useLang();

  const items = [
    { icon: MapPin, label: 'contact_location', val: 'contact_loc_val' },
    { icon: Mail, label: 'contact_email', val: 'mr.kem@outlook.sa', href: 'mailto:mr.kem@outlook.sa' },
    { icon: Phone, label: 'contact_phone', val: '0582800051', href: 'tel:0582800051' },
    { icon: Linkedin, label: 'contact_linkedin', val: 'Kamal Ahmed', href: 'https://www.linkedin.com/in/kamal-ahmed-973788139/' },
  ];

  return (
    <section id="contact" className="bg-bg2 py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(201,162,39,0.04)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-8 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
        <div>
          <div className="flex items-center gap-4 mb-10">
            <div className="w-10 h-[1px] bg-gold" />
            <span className="text-[10px] tracking-[4px] uppercase text-gold font-semibold">
              {t('contact_label')}
            </span>
          </div>

          <h2 
            className="font-display text-5xl md:text-7xl font-bold leading-tight mb-8"
            dangerouslySetInnerHTML={{ __html: t('contact_title') }}
          />

          <p className="text-white/40 text-lg font-light leading-relaxed max-w-md">
            {t('contact_desc')}
          </p>
        </div>

        <div className="space-y-8">
          {items.map((item, i) => (
            <motion.div 
              key={i} 
              className={cn(
                "flex items-center gap-8 p-8 border-b border-border transition-colors hover:bg-white/[0.02] group",
                isRtl && "flex-row-reverse text-right"
              )}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-14 h-14 bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                <item.icon className="w-6 h-6 text-gold" />
              </div>
              <div className="flex-1">
                <div className="text-[9px] tracking-[2px] uppercase text-dim mb-1 font-bold">
                  {t(item.label)}
                </div>
                {item.href ? (
                  <a 
                    href={item.href}
                    target={item.href.startsWith('http') ? "_blank" : undefined}
                    rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    className="text-lg text-white/80 font-medium hover:text-gold transition-colors inline-block"
                  >
                    {item.val.includes('@') || item.val.match(/^\d+$/) ? item.val : t(item.val)}
                  </a>
                ) : (
                  <div className="text-lg text-white/80 font-medium">
                    {item.val.includes('@') || item.val.match(/^\d+$/) ? item.val : t(item.val)}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const { lang } = useLang();
  return (
    <footer className={cn(
      "bg-bg border-t border-border px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-8",
      lang === 'ar' ? "md:flex-row-reverse" : ""
    )}>
      <div className="font-display text-2xl tracking-[5px] text-gold font-bold">KA</div>
      
      <div className="text-center">
        <div className="text-[10px] text-dim tracking-[3px] uppercase font-bold mb-2">
          {lang === 'en' ? 'Kamal Ahmed – Creative Director' : 'كمال أحمد – مدير إبداعي'}
        </div>
        <div className="text-[9px] text-border tracking-[2px]">
          {lang === 'en' ? 'Jeddah, KSA · 2025' : 'جدة، السعودية · ٢٠٢٥'}
        </div>
      </div>

      <div className="text-[10px] text-dim font-medium tracking-wider">
        mr.kem@outlook.sa
      </div>
    </footer>
  );
}
