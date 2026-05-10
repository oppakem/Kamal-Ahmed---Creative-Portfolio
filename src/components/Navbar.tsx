import { motion, useScroll, useTransform } from 'motion/react';
import { useLang } from '../lib/LanguageContext';
import { cn } from '../lib/utils';

export default function Navbar() {
  const { lang, setLang, t, isRtl } = useLang();
  const { scrollY } = useScroll();
  
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 0.9]);
  const backdropBlur = useTransform(scrollY, [0, 80], [0, 8]);

  const navLinks = [
    { key: 'nav_about', href: '#about' },
    { key: 'nav_experience', href: '#experience' },
    { key: 'nav_skills', href: '#skills' },
    { key: 'nav_projects', href: '#projects' },
    { key: 'nav_contact', href: '#contact' },
  ];

  return (
    <motion.nav 
      className="fixed top-0 inset-x-0 z-[900] flex items-center justify-between px-8 py-6 transition-colors duration-300"
      style={{
        backgroundColor: `rgba(8, 8, 8, ${bgOpacity.get()})`,
        backdropFilter: `blur(${backdropBlur.get()}px)`
      }}
    >
      <div className="flex items-center gap-12">
        <motion.div 
          className="font-display font-bold text-3xl tracking-widest text-gold select-none"
          whileHover={{ scale: 1.1 }}
        >
          {lang === 'en' ? 'KA' : 'ك.أ'}
        </motion.div>

        <ul className={cn(
          "hidden md:flex gap-8 list-none",
          isRtl && "flex-row-reverse"
        )}>
          {navLinks.map((link) => (
            <li key={link.key}>
              <a 
                href={link.href}
                className="text-[10px] uppercase tracking-[3px] text-muted hover:text-gold transition-colors font-medium"
              >
                {t(link.key)}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex border border-border overflow-hidden h-9">
        <button
          onClick={() => setLang('en')}
          className={cn(
            "px-4 text-[10px] font-bold tracking-widest transition-all",
            lang === 'en' ? "bg-gold text-black" : "text-muted hover:text-white"
          )}
        >
          EN
        </button>
        <button
          onClick={() => setLang('ar')}
          className={cn(
            "px-4 text-xs font-bold transition-all font-cairo",
            lang === 'ar' ? "bg-gold text-black" : "text-muted hover:text-white"
          )}
        >
          عربي
        </button>
      </div>
    </motion.nav>
  );
}
