/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LanguageProvider } from './lib/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Capabilities from './components/Capabilities';
import Projects from './components/Projects';
import Contact, { Footer } from './components/Contact';
import Cursor from './components/Cursor';
import ParticleBackground from './components/Particles';

export default function App() {
  return (
    <LanguageProvider>
      <div className="relative selection:bg-gold selection:text-black">
        <Cursor />
        <ParticleBackground />
        <div className="fixed inset-0 bg-grid z-0 pointer-events-none" />
        
        <Navbar />
        
        <main className="relative z-10 font-sans">
          <Hero />
          
          <div className="h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-30" />
          
          <About />
          
          <div className="h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-30" />
          
          <Experience />
          
          <div className="h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-30" />
          
          <Capabilities />
          
          <div className="h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-30" />
          
          <Projects />
          
          <div className="h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-30" />
          
          <Contact />
        </main>
        
        <Footer />
      </div>
    </LanguageProvider>
  );
}
