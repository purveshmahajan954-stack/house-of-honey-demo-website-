import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer id="contact" className="w-full bg-[#0E0E0E] text-[#EDCCBE] pt-16 md:pt-28 pb-8 px-5 md:px-12 border-t border-[#EDCCBE]/10">
      <div className="max-w-[1400px] mx-auto">

        {/* Top Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-8 mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo & tagline */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4 mb-4 md:mb-0">
            <img src="/images/bhf-logo.png" alt="Bombay Hawk Fitness" className="w-16 h-16 object-contain" />
            <p className="font-serif text-lg italic font-light opacity-90">Crossfit, Strength & Nutrition</p>
            <p className="font-sans text-[10px] uppercase tracking-widest opacity-40">
              TRAIN. TRANSFORM. REPEAT.
            </p>
          </div>

          {/* South Pasadena */}
          <div className="flex flex-col gap-2 font-sans">
            <h4 className="text-[10px] uppercase tracking-widest font-semibold mb-1 opacity-50">LOCATION</h4>
            <p className="text-sm leading-relaxed opacity-80">
              DP Star Building, near Samarth Garden<br />
              Co-operative Housing Society, Nahur West,<br />
              Subhash Nagar, Bhandup West,<br />
              Mumbai, Maharashtra 400078
            </p>
            <a href="tel:6264412454" className="text-sm opacity-60 hover:opacity-100 transition-opacity mt-1">+91 99301 97979</a>
          </div>

          {/* Montecito */}
          <div className="flex flex-col gap-2 font-sans">
            <h4 className="text-[10px] uppercase tracking-widest font-semibold mb-1 opacity-50">HOURS</h4>
            <p className="text-sm leading-relaxed opacity-80">
              Open Daily<br />
              Closes 11 PM
            </p>
          </div>

          {/* Connect */}
          <div className="flex flex-col gap-2 font-sans col-span-2 md:col-span-1">
            <h4 className="text-[10px] uppercase tracking-widest font-semibold mb-1 opacity-50">CONNECT</h4>
            <a href="https://www.instagram.com/houseofhoney/" target="_blank" rel="noopener noreferrer" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Instagram :
            @bombayhawkfitness</a>
            <a href="mailto:info@bombayhawkfitness.com" className="text-sm opacity-70 hover:opacity-100 transition-opacity">
              Enquiries: info@bombayhawkfitness.com
            </a>
            <a href="mailto:info@bombayhawkfitness.com" className="text-sm opacity-70 hover:opacity-100 transition-opacity">
              info@bombayhawkfitness.com
            </a>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="border-t border-[#EDCCBE]/15 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-sans text-[10px] uppercase tracking-widest opacity-30">
            &copy; 2026 BOMBAY HAWK FITNESS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-5 font-sans text-[10px] uppercase tracking-widest opacity-30">
            <a href="#" className="hover:opacity-80 transition-opacity">Privacy</a>
            <a href="#" className="hover:opacity-80 transition-opacity">Terms</a>
            <a href="#" className="hover:opacity-80 transition-opacity">Site Credit</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
