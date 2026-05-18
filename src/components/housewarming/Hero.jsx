const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const HERO_IMAGE = 'https://media.db.com/images/public/6a0b694bf115019d5663109a/0999d81d4_IMG_20260428_154039jpg.jpg';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-end overflow-hidden">
      {/* Parallax background */}
      <motion.div style={{ y: imageY, scale: imageScale }} className="absolute inset-0 z-0">
        <img src={HERO_IMAGE} alt="Nazareth - Our New Home" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1c120a]/85 via-[#1c120a]/30 to-[#1c120a]/10" />
      </motion.div>

      {/* Gold ornamental top line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C9963A] to-transparent z-10 opacity-80" />

      {/* Hero content */}
      <motion.div style={{ y: textY, opacity }} className="relative z-10 w-full pb-16 md:pb-28">
        <div className="max-w-5xl mx-auto px-6 md:px-14">

          {/* Top label */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="font-sans text-xs md:text-sm tracking-[0.4em] uppercase text-[#C9963A] mb-5 font-bold"
          >
            ✦ Our Housewarming ✦
          </motion.p>

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-serif text-6xl md:text-8xl lg:text-[7rem] font-bold leading-[0.92] text-white mb-3 drop-shadow-xl"
          >
            Welcome to
            <br />
            <span className="italic text-[#C9963A]">Nazareth</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="font-serif text-2xl md:text-3xl italic text-white/80 mb-6"
          >
            A New Chapter
          </motion.p>

          {/* Gold divider */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.85 }}
            style={{ originX: 0 }}
            className="w-24 h-0.5 bg-gradient-to-r from-[#C9963A] to-transparent mb-7"
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="font-sans text-base md:text-lg text-white/85 leading-relaxed max-w-xl mb-8"
          >
            Join us as we celebrate our new home and a fresh beginning.
            We'd love to share this special milestone with you.
          </motion.p>

          {/* Bible verse */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="border-l-2 border-[#C9963A] pl-5 py-1 max-w-lg"
          >
            <p className="font-serif text-sm md:text-base italic text-white/90 leading-relaxed">
              "But as for me and my house, we will serve the Lord."
            </p>
            <p className="font-sans text-xs text-[#C9963A] mt-1 tracking-wider font-bold">
              — Joshua 24:15
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1"
      >
        <motion.div animate={{ y: [0, 9, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
          <ChevronDown className="w-6 h-6 text-[#C9963A]" />
        </motion.div>
      </motion.div>
    </section>
  );
}