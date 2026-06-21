import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Navigation } from 'lucide-react';
import { useScrollAnimation } from './useScrollAnimation';

const details = {
  date: 'Saturday, 25th July 2026',
  time: '11:00 AM',
  address: 'Thekkedathu Chamakkala Vadakkethil, Nazareth',
};

const MAPS_LINK = 'https://maps.app.goo.gl/9E7QtTRCPePSwCQ38';

// Satellite view (!5e1), zoomed in, pinned to exact place ID
// Place: Thekkedathu Chamakkala Vadakkethil, near Thevakkal, Ernakulam
const MAP_EMBED_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d980!2d76.3622!3d10.0472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d513abdd337%3A0x36a47536e6fd03f4!2sThekkedathu%20Chamakkala%20Vadakkethil!5e1!3m2!1sen!2sin!4v1750000000001!5m2!1sen!2sin';

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

        {/* Google Maps embed */}
        <motion.div
          ref={mapRef}
          initial={{ opacity: 0, y: 30 }}
          animate={mapVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-10 rounded-sm overflow-hidden shadow-lg border border-border/60 relative"
        >
          {/* Gold top accent */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/60 via-primary to-primary/60 z-10" />

          {/* 
            NOTE: The small blue "View larger map" button inside the iframe is rendered 
            by Google and cannot be removed — it opens the place in Google Maps,
            which may show a general area if Google's place ID doesn't resolve exactly.
            Use the "Open in Google Maps" button below for the exact location link.
          */}
          <iframe
            title="Nazareth Location"
            src={MAP_EMBED_SRC}
            width="100%"
            height="360"
            style={{ border: 0, display: 'block' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Bottom bar — our custom button links to the exact short URL */}
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
