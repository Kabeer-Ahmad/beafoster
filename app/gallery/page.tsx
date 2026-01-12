'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    // Portfolio Updates
    { id: 21, category: 'fashion', src: '/Pictures 4/1 (1).JPG', alt: 'Portfolio Highlight', title: 'Portfolio Highlight' },
    { id: 22, category: 'events', src: '/Pictures 4/446A6890.jpeg', alt: 'Event Moment', title: 'Event Moment' },
    { id: 23, category: 'events', src: '/Pictures 4/446A6891.jpeg', alt: 'Event Moment', title: 'Event Moment' },
    { id: 24, category: 'fashion', src: '/Pictures 4/AboutBea.jpg', alt: 'Dr. Bea Foster', title: 'Dr. Bea Foster' },
    { id: 25, category: 'events', src: '/Pictures 4/DSC03011.JPG', alt: 'Event Highlight', title: 'Event Highlight' },
    { id: 26, category: 'events', src: '/Pictures 4/DSC03109.jpeg', alt: 'Social Gathering', title: 'Social Gathering' },
    { id: 27, category: 'fashion', src: '/Pictures 4/DSCN4236 2.JPG', alt: 'Fashion Detail', title: 'Fashion Detail' },
    { id: 28, category: 'fashion', src: '/Pictures 4/IMG_0278.jpg', alt: 'Style Showcase', title: 'Style Showcase' },
    { id: 29, category: 'interiors', src: '/Pictures 4/IMG_9074.jpeg', alt: 'Interior Detail', title: 'Interior Detail' },
    { id: 30, category: 'fashion', src: '/Pictures 4/unnamed (1).jpg', alt: 'Portfolio Work', title: 'Portfolio Work' },
    { id: 31, category: 'fashion', src: '/Pictures 4/unnamed (2).jpg', alt: 'Portfolio Work', title: 'Portfolio Work' },
    { id: 32, category: 'fashion', src: '/Pictures 4/unnamed (3).jpg', alt: 'Portfolio Work', title: 'Portfolio Work' },
    { id: 33, category: 'fashion', src: '/Pictures 4/unnamed.jpg', alt: 'Portfolio Work', title: 'Portfolio Work' },
  ];

  const filteredImages = galleryImages;

  const openLightbox = (id: number) => {
    setSelectedImage(id);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const currentImage = selectedImage !== null
    ? galleryImages.find(img => img.id === selectedImage)
    : null;

  const currentIndex = selectedImage !== null
    ? filteredImages.findIndex(img => img.id === selectedImage)
    : -1;

  const nextImage = () => {
    if (currentIndex < filteredImages.length - 1) {
      setSelectedImage(filteredImages[currentIndex + 1].id);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setSelectedImage(filteredImages[currentIndex - 1].id);
    }
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] sm:min-h-[50vh] md:min-h-[60vh] overflow-hidden bg-cream">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cream via-beige to-cream" />
          {/* Decorative Pattern */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
        </div>
        <div className="relative h-full flex items-center py-12 sm:py-16 md:py-24 lg:py-32">
          <div className="container-luxury w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto px-4 sm:px-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-block mb-4 sm:mb-6"
              >
                <span className="text-xs sm:text-sm uppercase tracking-wider text-gold font-medium">
                  Visual Portfolio
                </span>
              </motion.div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-black mb-4 sm:mb-6 leading-tight">
                Gallery
              </h1>
              <div className="w-20 sm:w-24 h-px bg-gold mx-auto mb-4 sm:mb-6" />
              <p className="text-base sm:text-lg md:text-xl text-charcoal leading-relaxed px-2">
                A curated collection of our finest work across fashion, interiors, events, and editorial
              </p>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Gallery Grid */}
      <section className="py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 bg-white">
        <div className="container-luxury px-4 sm:px-0">
          <motion.div
            layout
            className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="group relative break-inside-avoid overflow-hidden bg-charcoal cursor-pointer w-full inline-block mb-4"
                onClick={() => openLightbox(image.id)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                  className="transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white text-xs sm:text-sm md:text-base font-serif mb-0.5 sm:mb-1">
                    {image.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && currentImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-2 sm:p-4"
          onClick={closeLightbox}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-7xl w-full h-full max-h-[95vh] sm:max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </button>

            {/* Navigation Buttons */}
            {currentIndex > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors"
                aria-label="Previous"
              >
                <span className="text-white text-lg sm:text-xl">‹</span>
              </button>
            )}

            {currentIndex < filteredImages.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors"
                aria-label="Next"
              >
                <span className="text-white text-lg sm:text-xl">›</span>
              </button>
            )}

            {/* Image */}
            <div className="relative w-full h-full flex flex-col items-center justify-center">
              <div className="relative w-full h-full max-h-[75vh] sm:max-h-[80vh] max-w-6xl">
                <Image
                  src={currentImage.src}
                  alt={currentImage.alt}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 sm:p-6 md:p-8 text-center">
                <h3 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-serif mb-1 sm:mb-2">
                  {currentImage.title}
                </h3>
                <p className="text-white/60 text-xs sm:text-sm mt-1 sm:mt-2">
                  {currentIndex + 1} of {filteredImages.length}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

