import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#fdf8f2]/90 backdrop-blur-md border-b border-[#C9963A]/20 py-3 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-14 flex items-center justify-between">
        <span className={`font-serif text-lg font-semibold transition-colors duration-300 ${scrolled ? 'text-foreground' : 'text-white'}`}>
          Nazareth
        </span>
        <div className="flex items-center gap-4 md:gap-6">
          {['Details', 'Gallery', 'RSVP'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`font-sans text-xs tracking-[0.2em] uppercase transition-colors duration-300 font-bold ${
                scrolled ? 'text-foreground/70 hover:text-primary' : 'text-white/80 hover:text-white'
              }`}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}