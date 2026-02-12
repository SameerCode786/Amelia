
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  isLoading: boolean;
}

const Preloader: React.FC<PreloaderProps> = ({ isLoading }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 1;
        });
      }, 20); // Smooth 2s progress fill roughly
      return () => clearInterval(interval);
    }
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ 
            y: '-100%', 
            transition: { 
              duration: 1.2, 
              ease: [0.76, 0, 0.24, 1], // Custom cubic-bezier for luxury wipe effect
              delay: 0.5 
            } 
          }}
          className="fixed inset-0 z-[200] bg-[#001F3F] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Subtle Ambient Background Grain or Gradient */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D4AF37] via-transparent to-transparent"></div>

          <div className="relative flex flex-col items-center">
            {/* Logo Reveal */}
            <motion.div
              initial={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="text-center mb-12"
            >
              <h1 className="serif text-white text-3xl md:text-5xl font-bold tracking-[0.1em]">
                AMELIA BRESLIN
              </h1>
              <p className="text-[#D4AF37] text-[10px] md:text-xs uppercase tracking-[0.5em] mt-3 font-medium opacity-80">
                The Radnor Realtor
              </p>
            </motion.div>

            {/* Thin Gold Progress Line */}
            <div className="relative w-48 md:w-64 h-[1px] bg-white/10 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                className="absolute top-0 left-0 h-full bg-[#D4AF37] shadow-[0_0_10px_#D4AF37]"
              />
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-4 text-[9px] uppercase tracking-[0.3em] text-white/40 font-bold"
            >
              Establishing Excellence
            </motion.div>
          </div>

          {/* Decorative Corner Elements */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            className="absolute top-10 left-10 w-20 h-20 border-t border-l border-[#D4AF37]"
          />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            className="absolute bottom-10 right-10 w-20 h-20 border-b border-r border-[#D4AF37]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
