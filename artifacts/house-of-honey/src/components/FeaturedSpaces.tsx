import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  { id: 1, name: "Crossfit Training", location: "Santa Barbara, CA", image: "/images/interior-1.jpg", delay: 0 },
  { id: 2, name: "Canyon Retreat", location: "Los Angeles, CA", image: "/images/interior-3.jpg", delay: 0.15 },
  { id: 3, name: "Pasadena Craftsman", location: "South Pasadena, CA", image: "/images/interior-2.jpg", delay: 0.3 },
];

const FeaturedSpaces = () => {
  return (
    <section id="spaces" className="w-full bg-[#EDCCBE] text-[#331917] py-16 md:py-32 px-5 md:px-12">
      <div className="max-w-[1400px] mx-auto">

        {/* Header */}
        <motion.div
          className="flex justify-between items-end mb-10 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <span className="font-sans uppercase tracking-[0.2em] text-[10px] font-semibold mb-3 block opacity-60">OUR PROGRAMS</span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl tracking-tight">WHAT WE OFFER</h2>
          </div>
          <a href="#" className="hidden md:block group">
            <span className="font-sans text-xs uppercase tracking-widest font-semibold pb-1 border-b border-[#331917]/30 group-hover:border-[#331917] transition-colors duration-300">
              View All
            </span>
          </a>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="group cursor-pointer flex flex-col"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: project.delay }}
            >
              <div className="w-full aspect-[3/4] sm:aspect-[4/5] overflow-hidden mb-4 bg-black/10">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    const fallbacks = [
                      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
                      "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?auto=format&fit=crop&w=800&q=80",
                      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
                    ];
                    e.currentTarget.src = fallbacks[project.id % 3];
                  }}
                />
              </div>
              <div>
                <h3 className="font-serif text-xl md:text-2xl mb-1 group-hover:italic transition-all duration-300">{project.name}</h3>
                <p className="font-sans text-xs font-medium tracking-widest opacity-50 uppercase">{project.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-10 flex md:hidden justify-center">
          <a href="#" className="font-sans text-xs uppercase tracking-widest font-semibold pb-1 border-b border-[#331917]/40">
            View All Spaces
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSpaces;
