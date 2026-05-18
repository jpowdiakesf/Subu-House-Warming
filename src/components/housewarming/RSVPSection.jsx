import { motion } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';
import { useScrollAnimation } from './useScrollAnimation';

const WHATSAPP_NUMBER = '971551455347';
const DISPLAY_NUMBER = '+971 55 1455347';

export default function RSVPSection() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="rsvp" className="py-24 md:py-36 px-6 md:px-14 bg-background">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-12 h-px bg-primary/40" />
            <span className="text-primary text-xs tracking-[0.35em] uppercase font-bold font-sans">Contact Us</span>
            <div className="w-12 h-px bg-primary/40" />
          </div>

          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Need More Details?
          </h2>

          <p className="font-sans text-base text-muted-foreground leading-relaxed mb-10">
            Feel free to reach out to us on WhatsApp for any questions, directions, or just to say you're coming! 🙏
          </p>

          <div className="bg-secondary/40 border border-border/60 rounded-sm p-8 md:p-10 shadow-md relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent" />

            <div className="flex items-center justify-center gap-3 mb-6">
              <Phone className="w-5 h-5 text-primary" />
              <span className="font-serif text-2xl md:text-3xl font-semibold text-foreground">
                {DISPLAY_NUMBER}
              </span>
            </div>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full bg-[#25D366] hover:bg-[#1ebe5c] text-white font-sans font-bold text-base py-4 px-6 rounded-sm flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                Chat with us on WhatsApp
              </motion.div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}