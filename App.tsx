
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import PageOne from './components/PageOne.tsx';
import PageTwo from './components/PageTwo.tsx';
import PageThree from './components/PageThree.tsx';
import PageFour from './components/PageFour.tsx';

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => setCurrentPage((prev) => prev + 1);

  useEffect(() => {
    if (currentPage === 3) {
      const duration = 5 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { 
        startVelocity: 30, 
        spread: 360, 
        ticks: 60, 
        zIndex: 0,
        colors: ['#a78bfa', '#c4b5fd', '#ddd6fe', '#8b5cf6'] 
      };

      const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

      const interval: any = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
      }, 250);

      return () => clearInterval(interval);
    }
  }, [currentPage]);

  const pageTransition = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.05 },
    transition: { 
      duration: 0.8, 
      ease: [0.43, 0.13, 0.23, 0.96] as [number, number, number, number] 
    }
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden flex flex-col items-center justify-center bg-gradient-to-br from-violet-100 via-purple-50 to-violet-200">
      <AnimatePresence mode="wait">
        {currentPage === 1 && (
          <motion.div
            key="page1"
            {...pageTransition}
            className="w-full h-full flex items-center justify-center"
          >
            <PageOne onNext={nextPage} />
          </motion.div>
        )}

        {currentPage === 2 && (
          <motion.div
            key="page2"
            {...pageTransition}
            className="w-full h-full flex items-center justify-center"
          >
            <PageTwo onNext={nextPage} />
          </motion.div>
        )}

        {currentPage === 3 && (
          <motion.div
            key="page3"
            {...pageTransition}
            className="w-full h-full flex items-center justify-center"
          >
            <PageThree onNext={nextPage} />
          </motion.div>
        )}

        {currentPage === 4 && (
          <motion.div
            key="page4"
            {...pageTransition}
            className="w-full h-full"
          >
            <PageFour />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}