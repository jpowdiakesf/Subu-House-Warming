import { motion } from 'framer-motion';
import { useScrollAnimation } from './useScrollAnimation';

const IMAGE_2 = '/images/house_side.jpeg';

export default function HousePhoto() {
  const [ref, isVisible] = useScrollAnimation(0.1);
  const [textRef, textVisible] = useScrollAnimation(0.1);

  return (
    <section className="py-20 md:py-28 bg-secondary/40">
      <div className="max-w-6xl mx-auto px-6 md:px-14">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Text side */}
          <motion.div
            ref={textRef}
            initial={{ opacity: 0, x: -40 }}
            animate={textVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Gold ornament */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-0.5 bg-primary" />
              <span className="text-primary text-xs tracking-[0.3em] uppercase font-bold font-sans">Our Home</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              Our Forever
              <br />
              <span className="italic text-primary">Home</span>
            </h2>
            <p className="font-sans text-base md:text-lg text-muted-foreground leading-[1.8] mb-8">
              Nazareth is our new home, built with love and God's blessings.
              We thank Him for this beautiful gift and invite you to celebrate
              with us as we begin this beautiful new chapter of our lives.
            </p>
            {/* Cross divider */}
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-border" />
              <span className="text-primary text-xl">✝</span>
              <div className="flex-1 h-px bg-border" />
            </div>
          </motion.div>

          {/* Image side */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="relative"
          >
            {/* Gold corner accents */}
            <div className="absolute -top-4 -left-4 w-10 h-10 border-t-2 border-l-2 border-primary/50 z-10" />
            <div className="absolute -bottom-4 -right-4 w-10 h-10 border-b-2 border-r-2 border-primary/50 z-10" />
            <div className="overflow-hidden rounded-sm shadow-2xl">
              <motion.img
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.6 }}
                src={IMAGE_2}
                alt="Nazareth - Our new home"
                className="w-full object-cover"
                style={{ maxHeight: '520px' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
