import React from 'react';
import { motion } from 'framer-motion';

const StudioSnippet = () => {
  return (
    <section id="studio" className="w-full bg-[#0E0E0E] text-[#EDCCBE] py-24 md:py-40 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-center">
        
        {/* Left Col: Text */}
        <div className="md:col-span-7 flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="font-sans uppercase tracking-[0.2em] text-xs font-semibold mb-6 block opacity-70">
              Studio
            </span>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-[5rem] leading-[1.1] font-light">
              House of Honey designs <span className="italic">soulful, expressive</span> interiors where life is celebrated.
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-3/4 ml-auto"
          >
            <p className="font-sans text-lg md:text-xl font-light leading-relaxed opacity-80 mb-10">
              With locations in South Pasadena and Montecito, our studio creates deeply personal residential and commercial spaces across California. We believe in the power of curating extraordinary objects, layered textures, and unexpected moments.
            </p>
            <div className="inline-block group cursor-pointer">
              <span className="font-sans text-sm uppercase tracking-widest font-semibold pb-1 border-b border-[#EDCCBE]/30 group-hover:border-[#EDCCBE] transition-colors duration-300">
                Explore The Studio
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right Col: Image */}
        <motion.div 
          className="md:col-span-5 h-[60vh] md:h-[80vh] w-full relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <img 
            src="/images/interior-2.jpg" 
            alt="Studio detail" 
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