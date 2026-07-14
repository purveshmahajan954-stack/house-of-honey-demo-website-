import React from 'react';
import { motion } from 'framer-motion';

const DearHoney = () => {
  return (
    <section id="dear-honey" className="w-full bg-[#EDCCBE] text-[#331917] py-24 md:py-40 px-6 md:px-12 relative overflow-hidden flex justify-center items-center">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-5xl md:text-7xl lg:text-[6rem] tracking-tight mb-8 md:mb-12">
            Dear Honey,
          </h2>
          <blockquote className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight md:leading-snug italic font-light mb-12 opacity-90">
            "We believe that a space should not only look beautiful, but it should feel incredibly good to be in. It’s about creating atmospheres that embrace you."
          </blockquote>
          
          <button className="bg-[#331917] text-[#EDCCBE] px-8 py-4 rounded-full font-sans uppercase text-sm tracking-widest font-semibold hover:bg-black hover:scale-105 transition-all duration-300 inline-block">
            Read The Advice Column
          </button>
        </motion.div>
      </div>
      
      {/* Abstract Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] rounded-full bg-white/20 blur-3xl z-0 pointer-events-none"></div>
    </section>
  );
};

export default DearHoney;