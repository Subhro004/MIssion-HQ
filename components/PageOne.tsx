
import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface PageOneProps {
  onNext: () => void;
}

const PageOne: React.FC<PageOneProps> = ({ onNext }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 text-center space-y-6 md:space-y-10">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="floating-heart text-violet-300 opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              fontSize: `${Math.random() * 20 + 20}px`
            }}
          >
            <Heart fill="currentColor" />
          </div>
        ))}
      </div>

      <motion.h1 
        className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-romance text-violet-600 drop-shadow-xl leading-tight px-2"
        animate={{ 
          scale: [1, 1.03, 1],
          y: [0, -10, 0]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 3, 
          ease: "easeInOut" 
        }}
      >
        Happy Propose Day <br/> my Sweetheart
      </motion.h1>

      <motion.p 
        className="text-lg sm:text-xl md:text-3xl text-violet-500 font-medium max-w-[90%] md:max-w-2xl leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        I wanted to ask you one thing for a long time... <br/>
        <span className="italic">May I ask now?</span>
      </motion.p>

      <motion.button
        onClick={onNext}
        whileHover={{ 
          scale: 1.05, 
          y: -4,
          backgroundColor: "#7c3aed",
          boxShadow: "0 25px 30px -12px rgba(109, 40, 217, 0.4)"
        }}
        whileTap={{ scale: 0.95, y: 0 }}
        className="bg-violet-500 text-white px-6 py-4 sm:px-10 sm:py-5 rounded-full text-base sm:text-xl font-bold shadow-2xl transition-all duration-300 flex items-center gap-3 relative overflow-hidden group active:scale-95"
      >
        <span className="relative z-10 flex items-center gap-3">
          Askkk, I am all ears for you <Heart size={24} fill="white" className="sm:w-7 sm:h-7 group-hover:animate-pulse" />
        </span>
        <motion.div 
          className="absolute inset-0 bg-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
        />
      </motion.button>
    </div>
  );
};

export default PageOne;
