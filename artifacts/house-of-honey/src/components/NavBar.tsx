import React, { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

// Mocked asset imports since actual files don't exist yet but will be populated by system or generated
const LogoAsset = "@assets/hoh-logo.png";
const HeroAsset = "@assets/hoh-hero.jpg";
const ReferenceAsset = "@assets/hoh-reference.png";

// Generated images
const Interior1 = "/attached_assets/generated_images/interior-1.jpg";
const Interior2 = "/attached_assets/generated_images/interior-2.jpg";
const Interior3 = "/attached_assets/generated_images/interior-3.jpg";
const Editorial1 = "/attached_assets/generated_images/editorial-1.jpg";
const Editorial2 = "/attached_assets/generated_images/editorial-2.jpg";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out py-4 px-6 md:px-12 flex justify-between items-center ${
        scrolled ? 'py-4 mix-blend-difference text-white' : 'py-6 text-hoh-espresso mix-blend-normal'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Logo */}
      <Link href="/">
        <div className="w-12 h-12 bg-[#EDCCBE] rounded-full flex items-center justify-center overflow-hidden mix-blend-normal cursor-pointer hover:scale-105 transition-transform duration-300 shadow-sm border border-black/5">
          <span className="font-display font-black text-2xl tracking-tighter text-[#331917] leading-none pt-1">HH</span>
        </div>
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex bg-[#EDCCBE] text-[#331917] rounded-full px-2 py-2 items-center gap-1 border border-black/5 shadow-sm mix-blend-normal">
        {['Studio', 'Spaces', 'The Buzz', 'Dear Honey', 'Press Room'].map((item) => (
          <Link key={item} href={`#${item.toLowerCase().replace(' ', '-')}`}>
            <span className="px-5 py-2 rounded-full cursor-pointer transition-all duration-300 font-medium text-[15px] tracking-wide hover:bg-[#331917] hover:text-[#EDCCBE]">
              {item}
            </span>
          </Link>
        ))}
      </nav>

      {/* CTA */}
      <div className="hidden md:block mix-blend-normal">
        <Link href="#contact">
          <div className="bg-[#331917] text-[#EDCCBE] px-6 py-3.5 rounded-full font-medium text-[15px] tracking-wide cursor-pointer transition-all duration-300 hover:bg-black hover:scale-105 flex items-center gap-2">
            Get in Touch <span className="text-lg leading-none">→</span>
          </div>
        </Link>
      </div>

      {/* Mobile Nav Toggle */}
      <div className="md:hidden">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 bg-[#EDCCBE] rounded-full flex flex-col justify-center items-center gap-1.5 mix-blend-normal text-[#331917] border border-black/5"
        >
          <span className={`w-5 h-0.5 bg-current transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-5 h-0.5 bg-current transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-5 h-0.5 bg-current transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 bg-[#0E0E0E] text-[#EDCCBE] z-[-1] flex flex-col pt-32 px-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {['Studio', 'Spaces', 'The Buzz', 'Dear Honey', 'Press Room', 'Get in Touch'].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="py-4 border-b border-[#EDCCBE]/10"
              >
                <Link href={`#${item.toLowerCase().replace(' ', '-')}`}>
                  <span className="font-display text-4xl cursor-pointer" onClick={() => setIsOpen(false)}>
                    {item}
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default NavBar;