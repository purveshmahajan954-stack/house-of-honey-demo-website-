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
            <div className="w-12 h-12 bg-[#EDCCBE] rounded-full flex items-center justify-center">
              <span className="font-display font-black text-2xl tracking-tighter text-[#331917] leading-none">HH</span>
            </div>
            <p className="font-serif text-lg italic font-light opacity-90">
              Interiors, Objects &amp; Atmospheres
            </p>
            <p className="font-sans text-[10px] uppercase tracking-widest opacity-40">
              Designed with Pleasure
            </p>
          </div>

          {/* South Pasadena */}
          <div className="flex flex-col gap-2 font-sans">
            <h4 className="text-[10px] uppercase tracking-widest font-semibold mb-1 opacity-50">South Pasadena</h4>
            <p className="text-sm leading-relaxed opacity-80">
              1518 Mission Street<br />
              South Pasadena, CA 91030
            </p>
            <a href="tel:6264412454" className="text-sm opacity-60 hover:opacity-100 transition-opacity mt-1">
              (626) 441-2454
            </a>
          </div>

          {/* Montecito */}
          <div className="flex flex-col gap-2 font-sans">
            <h4 className="text-[10px] uppercase tracking-widest font-semibold mb-1 opacity-50">Montecito</h4>
            <p className="text-sm leading-relaxed opacity-80">
              525 San Ysidro Rd<br />
              Montecito, CA 93108
            </p>
          </div>

          {/* Connect */}
          <div className="flex flex-col gap-2 font-sans col-span-2 md:col-span-1">
            <h4 className="text-[10px] uppercase tracking-widest font-semibold mb-1 opacity-50">Connect</h4>
            <a href="https://www.instagram.com/houseofhoney/" target="_blank" rel="noopener noreferrer" className="text-sm opacity-70 hover:opacity-100 transition-opacity">
              Instagram @houseofhoney
            </a>
            <a href="mailto:jobs@houseofhoney.com" className="text-sm opacity-70 hover:opacity-100 transition-opacity">
              Careers: jobs@houseofhoney.com
            </a>
            <a href="mailto:info@houseofhoney.com" className="text-sm opacity-70 hover:opacity-100 transition-opacity">
              info@houseofhoney.com
            </a>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="border-t border-[#EDCCBE]/15 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-sans text-[10px] uppercase tracking-widest opacity-30">
            &copy; {new Date().getFullYear()} House of Honey. All rights reserved.
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
