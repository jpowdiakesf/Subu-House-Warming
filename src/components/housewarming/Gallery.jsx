import { motion } from 'framer-motion';
import { useScrollAnimation } from './useScrollAnimation';

const PHOTOS = [
  {
    src: '/images/house_front.jpeg',
    alt: 'Nazareth - Front view',
    caption: 'The Front',
  },
  {
    src: '/images/house_side.jpeg',
    alt: 'Nazareth - Side view',
    caption: 'Our Home',
  },
  {
    src: '/images/house_front.jpeg',
    alt: 'Nazareth - Entrance',
    caption: 'The Entrance',
  },
  {
    src: '/images/house_side.jpeg',
    alt: 'Nazareth - Garden',
    caption: 'The Garden',
  },
];

function PhotoCard({ photo, index }) {
  const [ref, isVisible] = useScrollAnimation(0.1);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-sm shadow-lg cursor-pointer"
    >
      <div className="overflow-hidden aspect-[4/3]">
        <motion.img
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          src={photo.src}
          alt={photo.alt}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1c120a]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-4">
        <p className="font-serif text-white text-lg italic translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          {photo.caption}
        </p>
      </div>
      {/* Gold corner accent */}
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
    </motion.div>
  );
}

export default function Gallery() {
  const [headingRef, headingVisible] = useScrollAnimation();

  return (
    <section id="gallery" className="py-24 md:py-36 px-6 md:px-14 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headingVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px bg-primary/40" />
            <span className="text-primary text-xs tracking-[0.35em] uppercase font-bold font-sans">A Peek Inside</span>
            <div className="w-12 h-px bg-primary/40" />
          </div>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground">
            A Glimpse of
            <span className="italic text-primary"> Nazareth</span>
          </h2>
          <p className="font-sans text-base text-muted-foreground mt-4 max-w-lg mx-auto leading-relaxed">
            A home lovingly built, waiting to be filled with memories, laughter, and God's grace.
          </p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {PHOTOS.map((photo, index) => (
            <PhotoCard key={index} photo={photo} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
