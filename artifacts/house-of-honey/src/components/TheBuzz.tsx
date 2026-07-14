import React from 'react';
import { motion } from 'framer-motion';

const articles = [
  {
    id: 1,
    category: "Press",
    title: "Architectural Digest Features House of Honey's Montecito Estate",
    date: "October 2023",
    image: "/attached_assets/generated_images/editorial-1.jpg"
  },
  {
    id: 2,
    category: "Journal",
    title: "Designing with Intent: The Power of Vintage Textiles",
    date: "September 2023",
    image: "/attached_assets/generated_images/editorial-2.jpg"
  }
];

const TheBuzz = () => {
  return (
    <section id="the-buzz" className="w-full bg-[#0E0E0E] text-[#EDCCBE] py-24 md:py-32 px-6 md:px-12 border-t border-[#EDCCBE]/10">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
        
        <motion.div 
          className="lg:col-span-4"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-sans uppercase tracking-[0.2em] text-xs font-semibold mb-4 block">
            Editorial
          </span>
          <h2 className="font-display text-5xl md:text-7xl tracking-tight mb-8">The Buzz</h2>
          <p className="font-sans text-lg font-light opacity-80 mb-10 max-w-sm">
            Our journal covering press features, studio news, design philosophy, and curated inspiration.
          </p>
          <div className="inline-block group cursor-pointer">
            <span className="font-sans text-sm uppercase tracking-widest font-semibold pb-1 border-b border-[#EDCCBE]/30 group-hover:border-[#EDCCBE] transition-colors duration-300">
              Read All Stories
            </span>
          </div>
        </motion.div>

        <div className="lg:col-span-8 flex flex-col gap-8 md:gap-12">
          {articles.map((article, idx) => (
            <motion.div 
              key={article.id}
              className="group cursor-pointer grid grid-cols-1 sm:grid-cols-12 gap-6 items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
            >
              <div className="sm:col-span-5 h-[30vh] sm:h-48 md:h-64 overflow-hidden bg-white/5">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  onError={(e) => {
                    const fallbacks = [
                      "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?auto=format&fit=crop&w=800&q=80",
                      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
                    ];
                    e.currentTarget.src = fallbacks[idx % 2];
                  }}
                />
              </div>
              <div className="sm:col-span-7 flex flex-col justify-center sm:pl-4">
                <div className="flex items-center gap-4 mb-3 font-sans text-xs uppercase tracking-widest font-semibold opacity-70">
                  <span>{article.category}</span>
                  <span className="w-1 h-1 rounded-full bg-current"></span>
                  <span>{article.date}</span>
                </div>
                <h3 className="font-serif text-3xl md:text-4xl leading-tight group-hover:italic transition-all duration-300">
                  {article.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TheBuzz;