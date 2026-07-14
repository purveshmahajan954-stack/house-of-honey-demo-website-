import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    name: "Montecito Estate",
    location: "Santa Barbara, CA",
    image: "/attached_assets/generated_images/interior-1.jpg",
    delay: 0
  },
  {
    id: 2,
    name: "Canyon Retreat",
    location: "Los Angeles, CA",
    image: "/attached_assets/generated_images/interior-3.jpg",
    delay: 0.2
  },
  {
    id: 3,
    name: "Pasadena Craftsman",
    location: "South Pasadena, CA",
    image: "/attached_assets/generated_images/interior-2.jpg",
    delay: 0.4
  }
];

const FeaturedSpaces = () => {
  return (
    <section id="spaces" className="w-full bg-[#EDCCBE] text-[#331917] py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-[1600px] mx-auto">
        <motion.div 
          className="flex justify-between items-end mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <span className="font-sans uppercase tracking-[0.2em] text-xs font-semibold mb-4 block">
              Portfolio
            </span>
            <h2 className="font-display text-5xl md:text-7xl tracking-tight">Featured Spaces</h2>
          </div>
          <div className="hidden md:block group cursor-pointer">
            <span className="font-sans text-sm uppercase tracking-widest font-semibold pb-1 border-b border-[#331917]/30 group-hover:border-[#331917] transition-colors duration-300">
              View All Spaces
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              className="group cursor-pointer flex flex-col"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: project.delay }}
            >
              <div className="w-full aspect-[4/5] overflow-hidden mb-6 bg-black/10">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-105"
                  onError={(e) => {
                    const fallbacks = [
                      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
                      "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?auto=format&fit=crop&w=1200&q=80",
                      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80"
                    ];
                    e.currentTarget.src = fallbacks[project.id % 3];
                  }}
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-serif text-2xl mb-1 group-hover:italic transition-all duration-300">{project.name}</h3>
                  <p className="font-sans text-sm font-medium tracking-wide opacity-60 uppercase">{project.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 md:hidden flex justify-center group cursor-pointer">
          <span className="font-sans text-sm uppercase tracking-widest font-semibold pb-1 border-b border-[#331917]/30 group-hover:border-[#331917] transition-colors duration-300">
            View All Spaces
          </span>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSpaces;