import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import StudioSnippet from '@/components/StudioSnippet';
import FeaturedSpaces from '@/components/FeaturedSpaces';
import Marquee from '@/components/Marquee';
import TheBuzz from '@/components/TheBuzz';
import DearHoney from '@/components/DearHoney';
import Footer from '@/components/Footer';

const AppLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simple loader to ensure fonts and initial layout settle
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div 
            className="fixed inset-0 z-[100] bg-[#0E0E0E] flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div 
              className="text-[#EDCCBE] font-display text-4xl md:text-6xl tracking-tighter"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              HOUSE <span className="font-serif italic font-normal text-3xl md:text-5xl px-2">of</span> HONEY
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="w-full bg-[#EDCCBE] min-h-screen text-[#331917] selection:bg-[#331917] selection:text-[#EDCCBE]">
        <NavBar />
        
        <main>
          <Hero />
          <StudioSnippet />
          <FeaturedSpaces />
          <Marquee />
          <TheBuzz />
          <DearHoney />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default AppLayout;