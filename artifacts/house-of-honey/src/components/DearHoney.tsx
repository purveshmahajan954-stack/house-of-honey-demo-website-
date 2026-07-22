import React from 'react';
import { motion } from 'framer-motion';

const DearHoney = () => {
  return (
    <section id="dear-honey" className="w-full bg-[#EDCCBE] text-[#331917] py-16 md:py-40 px-5 md:px-12 relative overflow-hidden flex justify-center items-center">
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-sans uppercase tracking-[0.2em] text-[10px] font-semibold mb-4 block opacity-60">OUR PHILOSOPHY</span>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] tracking-tight mb-6 md:mb-10">
            OUR PROMISE,
          </h2>
          <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-snug italic font-light mb-8 md:mb-12 opacity-85">
            "We believe fitness isn't about perfection. It's about showing up, pushing your limits, and becoming stronger than you were yesterday."
          </blockquote>

          <a
            href="#"
            className="inline-block bg-[#331917] text-[#EDCCBE] px-7 py-3.5 rounded-full font-sans uppercase text-xs tracking-widest font-semibold hover:bg-black hover:scale-105 transition-all duration-300"
          >BOOK A FREE TRIAL</a>
        </motion.div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] md:w-[40vw] md:h-[40vw] rounded-full bg-white/15 blur-3xl pointer-events-none" />
    </section>
  );
};

export default DearHoney;
