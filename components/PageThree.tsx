
import React from 'react';
import { motion } from 'framer-motion';
import { PartyPopper, Heart } from 'lucide-react';

interface PageThreeProps {
  onNext: () => void;
}

const PageThree: React.FC<PageThreeProps> = ({ onNext }) => {
  const imageUrl = "https://lh3.googleusercontent.com/d/1nx8khNF9Z9RcGUA9gk_EFlrHgtG9EAyz";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-8 text-center space-y-6 sm:space-y-12 bg-violet-50/40">
      <motion.div
        initial={{ scale: 0, rotate: -15 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
        className="relative z-10"
      >
        <div className="absolute -top-6 -left-6 sm:-top-12 sm:-left-12 text-violet-500 animate-pulse">
          <PartyPopper size={48} className="sm:w-20 sm:h-20" />
        </div>
        <div className="absolute -bottom-6 -right-6 sm:-bottom-12 sm:-right-12 text-violet-500 animate-pulse delay-700">
          <PartyPopper size={48} className="sm:w-20 sm:h-20" />
        </div>

        <div className="p-3 sm:p-5 bg-white rounded-[2rem] sm:rounded-[3rem] shadow-[0_35px_60px_-15px_rgba(139,92,246,0.3)] border-2 border-violet-100 transform hover:scale-105 transition-transform duration-500">
          <img
            src={imageUrl}
            alt="My Beautiful Rai"
            className="w-56 h-56 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] object-cover rounded-[1.5rem] sm:rounded-[2.5rem] border-2 border-violet-50"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://picsum.photos/seed/love/600/600";
            }}
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="px-4"
      >
        <h2 className="text-4xl sm:text-6xl md:text-8xl font-romance text-violet-600 mb-3 drop-shadow-sm leading-tight">
          Yayyyyyy she said yes!!
        </h2>
        <p className="text-violet-400 text-lg sm:text-2xl font-medium italic font-playful tracking-wide">
          You've made me the happiest person alive, Rai.
        </p>
      </motion.div>

      <motion.button
        onClick={onNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        whileHover={{ 
          scale: 1.05, 
          backgroundColor: "#f5f3ff",
          borderColor: "#c4b5fd",
          boxShadow: "0 10px 15px -3px rgba(139, 92, 246, 0.2)"
        }}
        whileTap={{ scale: 0.95 }}
        className="mt-4 sm:mt-10 bg-white text-violet-600 border border-violet-200 px-8 py-3 sm:px-12 sm:py-4 rounded-2xl sm:rounded-full font-bold text-sm sm:text-lg flex items-center gap-3 shadow-md hover:shadow-xl transition-all group"
      >
        Interactive Credits <Heart size={20} className="fill-violet-400 text-violet-400 group-hover:scale-125 transition-transform" />
      </motion.button>
    </div>
  );
};

export default PageThree;
