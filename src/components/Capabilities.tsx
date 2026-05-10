import { motion } from 'motion/react';
import { useLang } from '../lib/LanguageContext';
import { 
  Palette, 
  Camera, 
  Clapperboard, 
  Sparkles, 
  Tag, 
  Smartphone, 
  Lightbulb, 
  BrainCircuit,
  Film,
  MonitorPlay,
  Layers,
  Image as ImageIcon,
  Wand2,
  Zap,
  Box,
  Diamond,
  Bot,
  LayoutGrid,
  Globe,
  Library
} from 'lucide-react';

export default function Capabilities() {
  const { t, isRtl } = useLang();

  const skills = [
    { icon: Palette, key: 'Graphic Design', keyAr: 'التصميم الجرافيكي', desc: 'Brand systems, visual DNA, guidelines' },
    { icon: Sparkles, key: 'Motion Graphics', keyAr: 'الموشن جرافيك', desc: '2D/3D dynamic visual storytelling' },
    { icon: Box, key: '3D Design', keyAr: 'التصميم ثلاثي الأبعاد', desc: 'Hyper-realistic 3D modeling and rendering' },
    { icon: Layers, key: '2D Design', keyAr: 'التصميم ثنائي الأبعاد', desc: 'Vector illustrations and layout design' },
    { icon: Camera, key: 'Photography', keyAr: 'التصوير الفوتوغرافي', desc: 'Commercial, product, architectural' },
    { icon: Clapperboard, key: 'Videography', keyAr: 'التصوير الفيديوغرافي', desc: 'Cinematic production & direction' },
    { icon: Film, key: 'Montage & GIFs', keyAr: 'المونتاج والجيفات', desc: 'Pro video editing and animated assets' },
    { icon: Lightbulb, key: 'Creative Direction', keyAr: 'الإدارة الإبداعية', desc: 'Visionary leadership and visual strategy' },
  ];

  const tools = [
    { name: 'Illustrator', icon: Palette },
    { name: 'Photoshop', icon: ImageIcon },
    { name: 'Lightroom', icon: Camera },
    { name: 'After Effects', icon: Sparkles },
    { name: 'Premiere', icon: Film },
    { name: 'Firefly', icon: Wand2 },
    { name: 'Gemini', icon: BrainCircuit },
    { name: 'Nano Banana', icon: Zap },
    { name: 'HeigsField', icon: MonitorPlay },
    { name: 'Freepik Space', icon: Globe },
    { name: 'Envato Elements', icon: Library },
    { name: 'Office', icon: LayoutGrid },
    { name: 'Claude', icon: Bot },
  ];

  return (
    <section id="skills" className="bg-bg py-32">
      <div className="max-w-7xl mx-auto px-8 md:px-20">
        <div className="flex items-center gap-4 mb-20">
          <div className="w-10 h-[1px] bg-gold" />
          <span className="text-[10px] tracking-[4px] uppercase text-gold font-semibold">
            {t('cap_label')}
          </span>
        </div>

        <h2 className="font-display text-4xl md:text-5xl font-bold mb-16">
          {t('cap_title')}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2px] bg-border overflow-hidden mb-20">
          {skills.map((cap, i) => (
            <motion.div
              key={i}
              className="bg-bg2 p-10 group hover:bg-bg3 transition-colors duration-500 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <cap.icon className="w-8 h-8 text-gold mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" />
              <h3 className="font-display text-sm font-bold tracking-widest uppercase mb-4">
                {isRtl ? cap.keyAr : cap.key}
              </h3>
              <p className="text-[10px] text-muted leading-relaxed uppercase tracking-wider">
                {cap.desc}
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
            </motion.div>
          ))}
        </div>

        {/* Software Tools */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
          {tools.map((tool, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center gap-3 p-6 border border-border bg-bg2/30 group hover:border-gold/50 transition-all hover:bg-bg2/50"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.05, 
                rotate: [0, -2, 2, 0],
              }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 15,
                rotate: { type: "tween", duration: 0.4 },
                delay: 0.3 + i * 0.05
              }}
              viewport={{ once: true }}
            >
              <tool.icon className="w-6 h-6 text-white group-hover:text-gold transition-colors" />
              <span className="text-[10px] tracking-[2px] uppercase font-bold text-dim group-hover:text-white text-center">
                {tool.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
