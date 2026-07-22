import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { scrollY } = useScroll();
  const yImage = useTransform(scrollY, [0, 1000], [0, 200]);
  const yText = useTransform(scrollY, [0, 500], [0, -60]);

  const containerRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const fit = () => {
      const h1 = h1Ref.current;
      const container = containerRef.current;
      if (!h1 || !container) return;
      const cw = container.clientWidth;
      if (!cw) return;

      // Use an off-screen probe element to measure true text width
      // (h1 is a flex container with w-full so its scrollWidth is unreliable)
      const probe = document.createElement('div');
      probe.style.cssText = [
        'position:absolute',
        'top:-9999px',
        'left:-9999px',
        'visibility:hidden',
        'white-space:nowrap',
        'font-family:"Bebas Neue",sans-serif',
        'font-weight:900',
        'letter-spacing:-0.025em',
        'font-size:200px',
        'line-height:1',
      ].join(';');
      probe.textContent = 'BOMABAYhawkFITNESS';
      document.body.appendChild(probe);
      const tw = probe.getBoundingClientRect().width;
      document.body.removeChild(probe);

      if (!tw) return;
      const REF = 200;
      const size = Math.floor((cw / tw) * REF * 0.97);
      h1.style.fontSize = `${size}px`;

      const ofEl = h1.querySelector<HTMLSpanElement>('[data-of]');
      if (ofEl) {
        ofEl.style.fontSize   = `${Math.round(size * 0.72)}px`;
        ofEl.style.marginInline = `${Math.round(size * 0.05)}px`;
        ofEl.style.top        = `${Math.round(size * 0.04)}px`;
      }
    };

    // Run once fonts are likely loaded, then on every resize
    const t1 = setTimeout(fit, 50);
    const t2 = setTimeout(fit, 400); // second pass in case fonts load late
    window.addEventListener('resize', fit);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener('resize', fit);
    };
  }, []);

  return (
    <section className="relative w-full pt-20 md:pt-36 pb-0 bg-background flex flex-col items-center overflow-x-hidden">
      {/* Taglines */}
      <div className="w-full px-4 md:px-8 mb-3 md:mb-5 font-sans uppercase tracking-widest text-[9px] md:text-[11px] font-semibold z-10 relative flex flex-col sm:flex-row sm:justify-between gap-0.5">
        <motion.span
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-foreground/60 font-bold"
        >
          Crossfit | Strength | Nutrition
        </motion.span>
        <motion.span
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-foreground/60 sm:text-right font-bold"
        >
          Designed with Pleasure
        </motion.span>
      </div>
      {/* Full-width wordmark */}
      <motion.div
        ref={containerRef}
        style={{ y: yText }}
        className="w-full relative z-10 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h1
          ref={h1Ref}
          className="font-display font-black tracking-tight whitespace-nowrap leading-[0.88] text-foreground flex items-baseline justify-center w-full select-none"
          style={{ fontSize: '10px' }}
        >
          BOMBAY
          <span
            data-of=""
            className="italic font-normal lowercase opacity-90 tracking-normal relative"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '7px',
              position: 'relative',
            }}
          >
            hawk
          </span>
          FITNESS
        </h1>
      </motion.div>
      {/* Hero image */}
      <div className="w-full h-[42vh] sm:h-[52vh] md:h-[72vh] relative z-0 overflow-hidden bg-muted mt-1 md:mt-0">
        <motion.div
          className="absolute inset-0 w-full h-[120%] -top-[10%]"
          style={{ y: yImage }}
        >
          <img
            src="/images/hero-bg.png"
            alt="Beautiful California interior"
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              e.currentTarget.src =
                'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=80';
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
