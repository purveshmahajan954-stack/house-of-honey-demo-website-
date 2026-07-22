import React from 'react';
import { motion } from 'framer-motion';

const articles = [
  {
    id: 1,
    category: "News",
    title: "Bombay Hawk Fitness Completes 1500+ Member Milestone",
    date: "July 2026",
    image: "/images/editorial-1.jpg",
  },
  {
    id: 2,
    category: "FITNESS TIPS",
    title: "5 Reasons Strength Training Changes Your Life",
    date: "June 2026",
    image: "/images/editorial-2.jpg",
  },
];

const TheBuzz = () => {
  return (
    <section id="the-buzz" className="w-full bg-[#0E0E0E] text-[#EDCCBE] py-16 md:py-32 px-5 md:px-12 border-t border-[#EDCCBE]/10">
      <div className="max-w-[1400px] mx-auto">

        {/* Section Header */}
        <motion.div
          className="mb-10 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-sans uppercase tracking-[0.2em] text-[10px] font-semibold mb-3 block opacity-60">GYM UPDATES</span>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl tracking-tight">LATEST NEWS</h2>
            <a href="#" className="inline-block group self-start sm:self-auto">
              <span className="font-sans text-xs uppercase tracking-widest font-semibold pb-1 border-b border-[#EDCCBE]/30 group-hover:border-[#EDCCBE] transition-colors duration-300">
                VIEW ALL
              </span>
            </a>
          </div>
          <p className="font-sans text-sm md:text-base font-light opacity-60 mt-4 max-w-md">
            Transformation stories, gym updates, fitness tips, and community highlights.
          </p>
        </motion.div>

        {/* Articles */}
        <div className="flex flex-col gap-6 md:gap-10">
          {articles.map((article, idx) => (
            <motion.div
              key={article.id}
              className="group cursor-pointer grid grid-cols-1 sm:grid-cols-12 gap-5 items-start border-t border-[#EDCCBE]/10 pt-6 md:pt-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
            >
              <div className="sm:col-span-4 aspect-[16/10] sm:aspect-auto sm:h-48 md:h-64 overflow-hidden bg-white/5">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    const fallbacks = [
                      "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?auto=format&fit=crop&w=800&q=80",
                      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
                    ];
                    e.currentTarget.src = fallbacks[idx % 2];
                  }}
                />
              </div>
              <div className="sm:col-span-8 flex flex-col justify-center sm:pl-6">
                <div className="flex items-center gap-3 mb-3 font-sans text-[10px] uppercase tracking-widest font-semibold opacity-50">
                  <span>{article.category}</span>
                  <span className="w-1 h-1 rounded-full bg-current" />
                  <span>{article.date}</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl leading-tight group-hover:italic transition-all duration-300">
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
