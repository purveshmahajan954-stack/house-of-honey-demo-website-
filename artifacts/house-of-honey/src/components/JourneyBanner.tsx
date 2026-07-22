import React from 'react';
import { motion } from 'framer-motion';

const JourneyBanner = () => {
  return (
    <section className="w-full bg-[#331917] text-[#EDCCBE] py-10 md:py-14 px-5 md:px-12">
      <motion.div
        className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7 }}
      >
        <p className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight text-center sm:text-left">
          Your journey to strength starts here.
        </p>
        <a
          href="#contact"
          className="shrink-0 inline-block bg-[#EDCCBE] text-[#331917] px-7 py-3.5 rounded-full font-sans uppercase text-xs tracking-widest font-semibold hover:bg-white hover:scale-105 transition-all duration-300"
        >
          Join Now →
        </a>
      </motion.div>
    </section>
  );
};

export default JourneyBanner;
