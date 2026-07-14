import React from 'react';
import { motion } from 'framer-motion';

const Marquee = () => {
  const text = "INTERIORS · OBJECTS · ATMOSPHERES · DESIGNED WITH PLEASURE · HOUSE OF HONEY · ";
  const repeatCount = 4; // Ensure it fills wide screens

  return (
    <div className="w-full bg-[#331917] text-[#EDCCBE] py-4 border-y border-[#EDCCBE]/20 ticker-container">
      <div className="ticker-track">
        {Array(repeatCount).fill(0).map((_, i) => (
          <div key={i} className="flex whitespace-nowrap">
            <span className="font-sans uppercase text-sm md:text-base tracking-[0.2em] font-medium px-4">
              {text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;