import { motion } from 'framer-motion';
import { useScrollAnimation } from './useScrollAnimation';

export default function Footer() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <footer className="py-20 px-6 md:px-14 bg-[#1c120a] relative overflow-hidden">
      {/* Gold top border */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C9963A] to-transparent" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9 }}
        className="max-w-3xl mx-auto text-center"
      >
        {/* Cross */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isVisible ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: 0.2, type: 'spring', stiffness: 180 }}
          className="text-[#C9963A] text-3xl mb-7"
        >
          ✝
        </motion.div>

        <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4 leading-snug">
          We are so excited to celebrate with you!
        </h3>

        <p className="font-sans text-base text-white/60 mb-8 leading-relaxed">
          God bless you and your family for coming to share in our joy.
        </p>

        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-16 h-px bg-[#C9963A]/40" />
          <span className="text-[#C9963A] text-xl">❤️</span>
          <div className="w-16 h-px bg-[#C9963A]/40" />
        </div>

        <p className="font-serif text-xl md:text-2xl italic text-[#C9963A]">
          — The Nazareth Family ❤️
        </p>

        <p className="font-sans text-xs text-white/30 mt-10 tracking-widest uppercase">
          25th · July · 2026
        </p>
      </motion.div>
    </footer>
  );
}