import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { scrollY } = useScroll();
  const yImage = useTransform(scrollY, [0, 1000], [0, 200]);
  const yText = useTransform(scrollY, [0, 500], [0, -60]);

  return (
    <section className="relative w-full pt-24 md:pt-48 pb-0 bg-background flex flex-col items-center overflow-hidden min-h-[80vh]">
      {/* Top Taglines */}
      <div className="w-full px-4 md:px-8 mb-4 md:mb-8 font-sans uppercase tracking-widest text-[10px] md:text-xs font-semibold z-10 relative flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-foreground/70"
        >
          Interiors, Objects & Atmospheres
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-foreground/70 sm:text-right"
        >
          Designed with Pleasure
        </motion.div>
      </div>

      {/* Main Typography */}
      <motion.div
        style={{ y: yText }}
        className="w-full flex flex-col items-center justify-center relative z-10"
      >
        <motion.h1
          className="font-display font-black text-center tracking-tighter w-full text-foreground whitespace-nowrap overflow-hidden flex justify-center items-baseline text-[14vw] md:text-[150px] leading-[0.9]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          HOUSE
          <span
            className="font-serif italic font-normal text-[10vw] md:text-[110px] lowercase opacity-90 relative top-[0.5vw] md:top-[8px] tracking-normal mx-[1vw] md:mx-[8px]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            of
          </span>
          HONEY
        </motion.h1>
      </motion.div>

      {/* Hero Image */}
      <div className="w-full h-[40vh] sm:h-[50vh] md:h-[70vh] relative z-0 mt-4 md:mt-0 overflow-hidden bg-muted">
        <motion.div
          className="absolute inset-0 w-full h-[120%] -top-[10%]"
          style={{ y: yImage }}
        >
          <img
            src="/images/interior-1.jpg"
            alt="Beautiful California interior"
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=80";
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
