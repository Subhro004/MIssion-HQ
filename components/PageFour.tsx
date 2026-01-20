
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

const PageFour: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col bg-white overflow-hidden p-6 sm:p-12">
      {/* Background patterns for a sweet touch */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
        {[...Array(8)].map((_, i) => (
          <Sparkles key={i} size={200} className="text-violet-900 absolute" style={{
            top: `${Math.random() * 80}%`,
            left: `${Math.random() * 80}%`,
            transform: `rotate(${Math.random() * 360}deg)`
          }} />
        ))}
      </div>

      {/* Top Left: Dedicated to her */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="sm:absolute sm:top-10 sm:left-12 flex items-center justify-center sm:justify-start mb-8 sm:mb-0"
      >
        <h3 className="text-xl sm:text-3xl font-playful text-violet-500 flex items-center gap-3 bg-violet-50/50 px-4 py-2 rounded-full border border-violet-100 backdrop-blur-sm">
          For my Subhangee <Heart size={22} className="fill-violet-500" />
        </h3>
      </motion.div>

      {/* Center Writing */}
      <div className="flex-grow flex items-center justify-center z-10 py-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-3xl text-center space-y-6 sm:space-y-8 px-2"
        >
          <motion.div
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
          >
            <Sparkles className="mx-auto text-violet-400 mb-2 sm:mb-6" size={48} />
          </motion.div>
          
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-romance text-violet-700 drop-shadow-sm px-4">
            My Dearest Rai,
          </h2>
          
          <div className="space-y-5 text-base sm:text-xl md:text-2xl text-violet-900 leading-relaxed font-playful italic px-4 md:px-10">
            <p className="font-semibold text-violet-600">"In a world full of chaos, you are my peace"</p>
            <p>
              Thank you for being my anchor, my best friend, and now, my Valentine. Here's to endless laughter, endless running dates and metro station bokboks. 
              I tried my best to make the handwriting better than yours hehe, but I believe our love is even more beautiful.
            </p>
            <p>
              I will stop here... not because there's nothing more to say, but because some feelings deserve the right day.
            </p>
            <p className="font-medium text-violet-500">
              This is only the first chapter.
            </p>
            <p className="font-bold text-2xl sm:text-4xl pt-6 text-violet-700 not-italic font-romance">
              Subhranil Ghosh will return...
            </p>
          </div>

          <motion.div 
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex justify-center gap-3 pt-4"
          >
            <Heart size={28} className="text-violet-500 fill-violet-500" />
            <Heart size={36} className="text-violet-400 fill-violet-400" />
            <Heart size={28} className="text-violet-300 fill-violet-300" />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Right: Signature */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="sm:absolute sm:bottom-10 sm:right-12 text-center sm:text-right mt-8 sm:mt-0"
      >
        <p className="text-violet-500 text-xs sm:text-sm font-semibold uppercase tracking-widest mb-1">Created with love by</p>
        <h4 className="text-2xl sm:text-4xl font-romance text-violet-700 bg-white sm:bg-transparent inline-block px-4 py-2 rounded-xl">
          your one and only Subhranil
        </h4>
      </motion.div>
    </div>
  );
};

export default PageFour;
