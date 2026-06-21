import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Navigation } from 'lucide-react';
import { useScrollAnimation } from './useScrollAnimation';

const details = {
  date: 'Saturday, 25th July 2026',
  time: '11:00 AM',
  address: 'Thekkedathu Chamakkala Vadakkethil, Nazareth',
};

const MAPS_LINK = 'https://maps.app.goo.gl/9E7QtTRCPePSwCQ38';

function Card({ icon: Icon, label, value, subValue, delay }) {
  const [ref, isVisible] = useScrollAnimation(0.1);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className="bg-background rounded-sm shadow-md p-8 md:p-10 border border-border/60 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/60 via-primary to-primary/60" />
      <div className="flex items-start gap-5">
        <div className="p-3 bg-primary/10 rounded-full flex-shrink-0">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <div>
          <p className="font-sans text-xs tracking-[0.25em] uppercase text-primary/80 mb-2 font-bold">{label}</p>
          <p className="font-serif text-2xl md:text-3xl font-semibold text-foreground">{value}</p>
          {subValue && <p className="font-sans text-sm text-muted-foreground mt-1.5 italic">{subValue}</p>}
        </div>
      </div>
    </motion.div>
  );
}

export default function EventDetails() {
  const [headingRef, headingVisible] = useScrollAnimation();
  const [mapRef, mapVisible] = useScrollAnimation(0.1);

  return (
    <section id="details" className="py-24 md:py-36 px-6 md:px-14 bg-background">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headingVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px bg-primary/40" />
            <span className="text-primary text-xs tracking-[0.35em] uppercase font-bold font-sans">The Details</span>
            <div className="w-12 h-px bg-primary/40" />
          </div>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground">
            When &amp; Where
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card icon={Calendar} label="Date" value={details.date} delay={0.1} />
          <Card icon={Clock} label="Time" value={details.time} delay={0.2} />
          <Card icon={MapPin} label="Location" value={details.address} delay={0.3} />
        </div>

        {/* Map image with directions button */}
        <motion.div
          ref={mapRef}
          initial={{ opacity: 0, y: 30 }}
          animate={mapVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-10 rounded-sm overflow-hidden shadow-lg border border-border/60 relative"
        >
          {/* Gold top accent */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/60 via-primary to-primary/60 z-10" />

          {/* Clickable map image — opens Google Maps */}
          <a
            href={MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="block relative group"
          >
            <img
              src="/images/map-location.png"
              alt="Location map — Thekkedathu Chamakkala Vadakkethil, Nazareth"
              className="w-full object-cover"
              style={{ maxHeight: '360px', objectPosition: 'center' }}
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300 flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 text-foreground font-sans font-bold text-sm px-5 py-2.5 rounded-full shadow-lg flex items-center gap-2">
                <Navigation className="w-4 h-4 text-primary" />
                Open in Google Maps
              </span>
            </div>
          </a>

          {/* Bottom bar */}
          <div className="bg-background px-5 py-4 flex items-center justify-between border-t border-border/40 gap-3">
            <div className="flex items-center gap-2 text-muted-foreground min-w-0">
              <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="font-sans text-sm truncate">Thekkedathu Chamakkala Vadakkethil, Nazareth</span>
            </div>
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-bold font-sans text-primary hover:text-primary/70 tracking-wider uppercase transition-colors flex-shrink-0"
            >
              <Navigation className="w-3.5 h-3.5" />
              Get Directions
            </a>
          </div>
        </motion.div>

        {/* Verse banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-10 bg-primary/8 border border-primary/20 rounded-sm p-8 md:p-10 text-center"
        >
          <span className="text-primary text-2xl mb-4 block">✝</span>
          <p className="font-serif text-xl md:text-2xl italic text-foreground/80 leading-relaxed">
            "Every good and perfect gift is from above."
          </p>
          <p className="font-sans text-xs text-primary mt-3 tracking-wider font-bold">— James 1:17</p>
        </motion.div>
      </div>
    </section>
  );
}
