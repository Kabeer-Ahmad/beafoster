'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface FlipbookProps {
  isOpen: boolean;
  onClose: () => void;
  pages: string[];
}

export default function Flipbook({ isOpen, onClose, pages }: FlipbookProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<'next' | 'prev'>('next');

  const nextPage = () => {
    if (currentPage < pages.length - 2 && !isFlipping) {
      setFlipDirection('next');
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(Math.min(currentPage + 2, pages.length - 2));
        setIsFlipping(false);
      }, 800);
    }
  };

  const prevPage = () => {
    if (currentPage > 0 && !isFlipping) {
      setFlipDirection('prev');
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(Math.max(currentPage - 2, 0));
        setIsFlipping(false);
      }, 800);
    }
  };

  const totalPages = Math.ceil(pages.length / 2);
  const currentSpread = Math.floor(currentPage / 2) + 1;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/95 z-50 backdrop-blur-sm"
          />
          
          {/* Flipbook Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-w-6xl h-[85vh] max-h-[750px] pb-24">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute -top-12 right-0 z-10 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Flipbook */}
              <div className="relative w-full h-full" style={{ perspective: '1500px' }}>
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Left Page */}
                  <motion.div
                    key={`left-${currentPage}`}
                    initial={{ rotateY: 0 }}
                    animate={{ 
                      rotateY: isFlipping && flipDirection === 'prev' ? -180 : 0,
                    }}
                    transition={{ 
                      duration: 0.8, 
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    className="relative w-1/2 h-full origin-right"
                    style={{ 
                      transformStyle: 'preserve-3d',
                      zIndex: isFlipping && flipDirection === 'prev' ? 20 : 1,
                    }}
                  >
                    <div className="relative w-full h-full bg-white shadow-[25px_0_50px_rgba(0,0,0,0.4)]">
                      <Image
                        src={pages[currentPage] || pages[0]}
                        alt={`Page ${currentPage + 1}`}
                        fill
                        className="object-cover"
                      />
                      {/* Page edge shadow during flip */}
                      {isFlipping && flipDirection === 'prev' && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"
                        />
                      )}
                    </div>
                  </motion.div>

                  {/* Right Page - This flips to the left when going to next */}
                  <motion.div
                    key={`right-${currentPage}`}
                    initial={{ rotateY: 0 }}
                    animate={{ 
                      rotateY: isFlipping && flipDirection === 'next' ? 180 : 0,
                    }}
                    transition={{ 
                      duration: 0.8, 
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    className="relative w-1/2 h-full origin-left cursor-pointer"
                    style={{ 
                      transformStyle: 'preserve-3d',
                      zIndex: isFlipping && flipDirection === 'next' ? 20 : 1,
                    }}
                    onClick={nextPage}
                  >
                    <div className="relative w-full h-full bg-white shadow-[-25px_0_50px_rgba(0,0,0,0.4)]">
                      {currentPage + 1 < pages.length ? (
                        <Image
                          src={pages[currentPage + 1]}
                          alt={`Page ${currentPage + 2}`}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-cream flex items-center justify-center">
                          <p className="text-charcoal text-xl font-serif">The End</p>
                        </div>
                      )}
                      {/* Page edge shadow during flip */}
                      {isFlipping && flipDirection === 'next' && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 bg-gradient-to-l from-black/30 to-transparent"
                        />
                      )}
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Navigation */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-30">
                <motion.button
                  onClick={prevPage}
                  disabled={currentPage === 0 || isFlipping}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 border border-white/20 hover:border-white/40 disabled:hover:scale-100 disabled:hover:bg-white/10 shadow-lg"
                  aria-label="Previous page"
                >
                  <ChevronLeft className="w-6 h-6" />
                </motion.button>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  key={currentSpread}
                  className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white text-base rounded-full font-medium border border-white/20 min-w-[100px] text-center shadow-lg"
                >
                  {currentSpread} / {totalPages}
                </motion.div>
                
                <motion.button
                  onClick={nextPage}
                  disabled={currentPage >= pages.length - 2 || isFlipping}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 border border-white/20 hover:border-white/40 disabled:hover:scale-100 disabled:hover:bg-white/10 shadow-lg"
                  aria-label="Next page"
                >
                  <ChevronRight className="w-6 h-6" />
                </motion.button>
              </div>

              {/* Page Indicator Dots */}
              <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 flex items-center gap-2 z-30">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (!isFlipping) {
                        setCurrentPage(index * 2);
                      }
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index + 1 === currentSpread
                        ? 'bg-gold w-8'
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                    disabled={isFlipping}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
