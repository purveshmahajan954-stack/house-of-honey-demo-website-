import React, { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const navLinks = ['Home', 'Programs', 'Trainers', 'Dear Honey', 'Press Room'];

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 py-3 md:py-4 px-4 md:px-8 flex justify-between items-center"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Logo */}
        <Link href="/">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 z-[210] relative flex items-center justify-center bg-black">
            <img src="/images/bhf-logo-orig.png" alt="Bombay Hawk Fitness" className="w-full h-full object-cover object-center" />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex bg-[#EDCCBE] text-[#331917] rounded-full px-2 py-1.5 items-center gap-0.5 border border-black/10 shadow-sm">
          {navLinks.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}>
              <span className="px-4 py-2 rounded-full cursor-pointer transition-all duration-300 font-sans font-medium text-[14px] tracking-wide hover:bg-[#331917] hover:text-[#EDCCBE] block">
                {item}
              </span>
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a href="#contact">
            <div className="bg-[#331917] text-[#EDCCBE] px-5 py-3 rounded-full font-sans font-medium text-[14px] tracking-wide cursor-pointer transition-all duration-300 hover:bg-black flex items-center gap-2">
              Get in Touch <span>→</span>
            </div>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 bg-[#EDCCBE] rounded-full flex flex-col justify-center items-center gap-[5px] text-[#331917] border border-black/10 z-[210] relative"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          <span className={`w-4 h-[1.5px] bg-[#331917] transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
          <span className={`w-4 h-[1.5px] bg-[#331917] transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`w-4 h-[1.5px] bg-[#331917] transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
        </button>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-[#0E0E0E] text-[#EDCCBE] z-[200] flex flex-col px-6 pt-24 pb-10 overflow-y-auto"
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav className="flex flex-col gap-0 flex-1">
              {navLinks.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
                  className="border-b border-[#EDCCBE]/10"
                >
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => setIsOpen(false)}
                    className="font-display text-5xl tracking-tight py-5 block hover:opacity-70 transition-opacity"
                  >
                    {item}
                  </a>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + navLinks.length * 0.07, duration: 0.4 }}
                className="mt-8"
              >
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="inline-block bg-[#EDCCBE] text-[#331917] px-6 py-3.5 rounded-full font-sans font-semibold text-sm uppercase tracking-widest"
                >
                  Get in Touch →
                </a>
              </motion.div>
            </nav>

            {/* Footer info in menu */}
            <div className="mt-10 pt-6 border-t border-[#EDCCBE]/10 font-sans text-xs uppercase tracking-widest opacity-40">
              <p>House of Honey · South Pasadena & Montecito, CA</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
