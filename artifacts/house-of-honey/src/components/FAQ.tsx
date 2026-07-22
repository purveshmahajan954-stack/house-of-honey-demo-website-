import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: 'Bombay Hawk Fitness mein kaun kaun se programs hain?',
    a: 'Hum CrossFit, Strength Training, Kickboxing, Dance Fitness aur Personal Nutrition Guidance offer karte hain — sab ek hi roof ke neeche.',
  },
  {
    q: 'Kya beginners ke liye bhi classes available hain?',
    a: 'Bilkul! Hamare trainers har level ke liye classes design karte hain — beginner se advanced tak. Aapko koi prior experience ki zaroorat nahi.',
  },
  {
    q: 'Membership fees kitni hai?',
    a: 'Hamare paas flexible membership plans hain — monthly, quarterly aur annual. Details ke liye humse contact karein ya gym visit karein.',
  },
  {
    q: 'Gym ke timings kya hain?',
    a: 'Hum Open Daily hain aur raat 11 PM tak khule rehte hain. Exact slot timings ke liye humse WhatsApp ya call karein.',
  },
  {
    q: 'Personal trainer available hai?',
    a: 'Haan, hamare certified personal trainers aapke goals ke hisaab se customized workout aur nutrition plan banate hain.',
  },
  {
    q: 'Free trial milta hai?',
    a: 'Haan! Pehli baar aane wale members ke liye ek free trial session available hai. Abhi join karo aur experience karo.',
  },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="w-full bg-[#EDCCBE] text-[#331917] py-16 md:py-32 px-5 md:px-12">
      <div className="max-w-[900px] mx-auto">
        <motion.div
          className="mb-10 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-sans uppercase tracking-[0.2em] text-[10px] font-semibold mb-3 block opacity-60">
            GOT QUESTIONS?
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl tracking-tight">FAQ</h2>
        </motion.div>

        <div className="flex flex-col">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className="border-t border-[#331917]/15 last:border-b"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <button
                className="w-full flex justify-between items-center py-5 md:py-6 text-left gap-4 group"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-sans font-semibold text-sm md:text-base leading-snug group-hover:opacity-70 transition-opacity">
                  {faq.q}
                </span>
                <span className={`shrink-0 w-7 h-7 rounded-full border border-[#331917]/30 flex items-center justify-center transition-all duration-300 ${open === i ? 'bg-[#331917] text-[#EDCCBE] rotate-45' : ''}`}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <line x1="6" y1="0" x2="6" y2="12" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="0" y1="6" x2="12" y2="6" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="font-sans text-sm md:text-base font-light leading-relaxed opacity-70 pb-5 md:pb-6 max-w-2xl">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
