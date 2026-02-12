
import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StyleExplorer from './components/StyleExplorer';
import AboutStats from './components/AboutStats';
import FeaturedListings from './components/FeaturedListings';
import PropertyHighlights from './components/PropertyHighlights';
import LeadFormSection from './components/LeadFormSection';
import MapSection from './components/MapSection';
import TeamSection from './components/TeamSection';
import ServiceKit from './components/ServiceKit';
import NewsSection from './components/NewsSection';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Artificial delay to showcase the luxury loader, 
    // but in production, this could be window.onload or similar.
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      clearTimeout(timer);
    };
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative bg-white selection:bg-[#D4AF37] selection:text-white">
      {/* Premium Preloader */}
      <Preloader isLoading={isLoading} />

      {/* Premium Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#D4AF37] z-[100] origin-left"
        style={{ scaleX }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ 
          opacity: isLoading ? 0 : 1, 
          scale: isLoading ? 1.05 : 1,
          transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1], delay: 0.3 }
        }}
      >
        <Navbar />
        
        <main>
          <Hero />
          <StyleExplorer />
          <AboutStats />
          <PropertyHighlights />
          <FeaturedListings />
          <LeadFormSection />
          <MapSection />
          <TeamSection />
          <ServiceKit />
          <NewsSection />
          
          {/* Market Valuation CTA */}
          <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-[#001F3F]">
            <div className="absolute inset-0 opacity-20">
              <img 
                src="https://images.unsplash.com/photo-1600607687940-47a04b629571?q=80&w=1920&auto=format&fit=crop" 
                alt="Luxury Estate" 
                className="w-full h-full object-cover scale-110"
              />
            </div>
            <div className="relative z-10 text-center px-4 max-w-4xl">
               <h2 className="serif text-4xl md:text-6xl text-white mb-6">Know What Your Home Is Worth Today</h2>
               <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">Get a personalized, data-driven market valuation for your Radnor or Main Line property within 24 hours.</p>
               <button className="bg-[#D4AF37] hover:bg-white text-white hover:text-[#001F3F] transition-all duration-500 px-10 py-4 font-medium uppercase tracking-widest text-sm rounded-sm">
                  Request Free Valuation
               </button>
            </div>
          </section>
        </main>

        <Footer />
      </motion.div>
    </div>
  );
};

export default App;
