import React from 'react';
import { motion } from 'framer-motion';

const StudioSnippet = () => {
  return (
    <section id="studio" className="w-full bg-[#0E0E0E] text-[#EDCCBE] py-16 md:py-32 px-5 md:px-12 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-20 items-center">

        {/* Left: Text */}
        <div className="md:col-span-7 flex flex-col justify-center order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="font-sans uppercase tracking-[0.2em] text-[10px] font-semibold mb-4 block opacity-60">About us</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[4.5rem] leading-[1.1] font-light">
              Bombay Hawk Fitness builds{' '}
              <span className="italic">strength, discipline</span>{' '}
              and confidence that stays with you for life.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-sans text-base md:text-lg font-light leading-relaxed opacity-70 mb-8">Located in Bhandup West, Mumbai, our gym offers Crossfit, kickboxing, strength training, dance fitness and personal nutrition guidance all under one roof. We believe fitness isn't just about workouts, it's about building a stronger, healthier version of yourself every single day.</p>
            <a href="#contact" className="inline-block group">
              <span className="font-sans text-xs uppercase tracking-widest font-semibold pb-1 border-b border-[#EDCCBE]/30 group-hover:border-[#EDCCBE] transition-colors duration-300">
                Explore The Studio
              </span>
            </a>
          </motion.div>
        </div>

        {/* Right: Image */}
        <motion.div
          className="md:col-span-5 h-[55vw] sm:h-[60vw] md:h-[70vh] w-full relative overflow-hidden order-1 md:order-2"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1 }}
        >
          <img
            src="/images/interior-2.jpg"
            alt="Studio interior"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80";
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default StudioSnippet;
