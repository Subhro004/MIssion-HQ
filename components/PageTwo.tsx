
import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, Heart } from 'lucide-react';

interface PageTwoProps {
  onNext: () => void;
}

const PageTwo: React.FC<PageTwoProps> = ({ onNext }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-8 text-center space-y-10 sm:space-y-16 bg-violet-50">
      <div className="absolute inset-0 opacity-5 pointer-events-none flex flex-wrap justify-around items-center p-4 sm:p-10 overflow-hidden">
        {[...Array(24)].map((_, i) => (
          <HelpCircle key={i} size={60} className="text-violet-900 m-2 sm:m-4 rotate-12 sm:w-20 sm:h-20" />
        ))}
      </div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative z-10 w-full max-w-2xl px-2"
      >
        <motion.div
          animate={{ rotate: [0, -2, 2, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="bg-white p-6 sm:p-10 md:p-14 rounded-[2rem] sm:rounded-[3rem] shadow-2xl border-2 border-violet-100"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-playful text-violet-700 leading-tight">
            Will you be my Valentine, <br className="hidden sm:block" />
            <span className="font-romance text-4xl sm:text-6xl md:text-7xl text-violet-600 block mt-4 underline decoration-violet-200 decoration-wavy underline-offset-8">
              Miss Subhangee Mukherjee?
            </span>
          </h2>
        </motion.div>
      </motion.div>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 w-full max-w-2xl px-4 z-10">
        {[
          { text: "OBVIOULSY YESSSSSSSSSS", delay: 0 },
          { text: "OFCOURSE YESSS, I ALREADY LOVE YOU", delay: 0.1 }
        ].map((option, idx) => (
          <motion.button
            key={idx}
            onClick={onNext}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + option.delay }}
            whileHover={{ scale: 1.05, y: -8 }}
            whileTap={{ scale: 0.95, y: 0 }}
            className="flex-1 relative group h-full"
          >
            <div className="absolute -inset-1 bg-violet-400 rounded-3xl sm:rounded-full blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative px-4 py-6 sm:py-10 bg-white border border-violet-100 rounded-3xl sm:rounded-full flex flex-col items-center justify-center gap-3 shadow-lg group-hover:shadow-violet-200 group-hover:border-violet-300 transition-all duration-300">
              <Heart 
                size={32} 
                className="text-violet-500 fill-violet-500 sm:w-12 sm:h-12 group-hover:scale-125 transition-transform duration-300 group-hover:animate-pulse" 
              />
              <span className="font-bold text-violet-700 text-sm sm:text-lg uppercase tracking-tight group-hover:text-violet-800 transition-colors">
                {option.text}
              </span>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default PageTwo;
