import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { scrollY } = useScroll();
  const yImage = useTransform(scrollY, [0, 1000], [0, 200]);
  const yText = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <section className="relative w-full pt-48 pb-12 px-4 md:px-8 bg-background flex flex-col items-center overflow-hidden min-h-[90vh]">
      {/* Top Taglines */}
      <div className="w-full max-w-[1600px] flex justify-between px-2 md:px-6 mb-8 md:mb-12 font-serif uppercase tracking-widest text-xs md:text-sm font-medium z-10 relative">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          INTERIORS, OBJECTS & ATMOSPHERES
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          DESIGNED WITH PLEASURE
        </motion.div>
      </div>

      {/* Main Typography */}
      <motion.div 
        style={{ y: yText }}
        className="w-full flex flex-col items-center justify-center relative z-10 -mb-[5%] md:-mb-[3%] lg:-mb-[2%]"
      >
        <motion.h1 
          className="font-display leading-[0.88] text-[19vw] text-center tracking-[0.01em] w-full text-foreground whitespace-nowrap overflow-hidden flex justify-center items-baseline gap-[1.5vw] px-0"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          HOUSE<span className="font-serif italic font-normal text-[13vw] lowercase opacity-90 relative top-[0.5vw] tracking-normal" style={{ fontFamily: "'Cormorant Garamond', serif" }}>of</span>HONEY
        </motion.h1>
      </motion.div>

      {/* Hero Image */}
      <div className="w-full max-w-[1600px] h-[60vh] md:h-[75vh] relative z-0 mt-8 md:mt-0 overflow-hidden bg-muted">
        <motion.div 
          className="absolute inset-0 w-full h-[120%] -top-[10%]"
          style={{ y: yImage }}
        >
          <img 
            src="/images/interior-1.jpg" 
            alt="Beautiful California interior" 
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              // Fallback to a placeholder if image isn't generated yet
              e.currentTarget.src = "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=80";
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;