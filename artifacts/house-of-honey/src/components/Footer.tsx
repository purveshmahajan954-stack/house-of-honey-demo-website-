import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer id="contact" className="w-full bg-[#0E0E0E] text-[#EDCCBE] pt-24 md:pt-32 pb-8 px-6 md:px-12 border-t border-[#EDCCBE]/10">
      <div className="max-w-[1600px] mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">
          
          {/* Logo & Info */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <div className="w-16 h-16 bg-[#EDCCBE] rounded-full flex items-center justify-center mb-2">
              <span className="font-display font-black text-3xl tracking-tighter text-[#331917] leading-none pt-1">HH</span>
            </div>
            <p className="font-serif text-xl italic font-light">
              Interiors, Objects & Atmospheres
            </p>
            <p className="font-sans text-sm uppercase tracking-widest font-semibold opacity-70">
              Designed with Pleasure
            </p>
          </div>
          
          {/* Location 1 */}
          <div className="lg:col-span-1 flex flex-col gap-4 font-sans font-light">
            <h4 className="text-sm uppercase tracking-widest font-semibold mb-2 opacity-70">South Pasadena</h4>
            <p className="text-base leading-relaxed">
              1518 Mission Street<br/>
              South Pasadena, CA 91030
            </p>
            <a href="tel:6264412454" className="text-base hover:italic transition-all inline-block mt-2">
              (626) 441-2454
            </a>
          </div>
          
          {/* Location 2 */}
          <div className="lg:col-span-1 flex flex-col gap-4 font-sans font-light">
            <h4 className="text-sm uppercase tracking-widest font-semibold mb-2 opacity-70">Montecito</h4>
            <p className="text-base leading-relaxed">
              525 San Ysidro Rd<br/>
              Montecito, CA 93108
            </p>
          </div>
          
          {/* Connect */}
          <div className="lg:col-span-1 flex flex-col gap-4 font-sans font-light">
            <h4 className="text-sm uppercase tracking-widest font-semibold mb-2 opacity-70">Connect</h4>
            <a href="mailto:info@houseofhoney.com" className="text-base hover:italic transition-all">
              info@houseofhoney.com
            </a>
            <a href="mailto:jobs@houseofhoney.com" className="text-base hover:italic transition-all">
              Careers: jobs@houseofhoney.com
            </a>
            <a href="#" className="text-base hover:italic transition-all mt-4">
              Instagram @houseofhoney
            </a>
            <a href="#" className="text-base hover:italic transition-all">
              Pinterest
            </a>
          </div>
          
        </div>
        
        {/* Giant Footer Text */}
        <div className="w-full border-t border-[#EDCCBE]/20 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs uppercase tracking-widest opacity-50">
            &copy; {new Date().getFullYear()} House of Honey. All rights reserved.
          </p>
          <div className="flex gap-6 font-sans text-xs uppercase tracking-widest opacity-50">
            <a href="#" className="hover:opacity-100 transition-opacity">Privacy</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Terms</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Site Credit</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;