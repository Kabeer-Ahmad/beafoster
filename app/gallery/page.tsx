'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { X, Filter } from 'lucide-react';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'fashion', name: 'Fashion' },
    { id: 'interiors', name: 'Interiors' },
    { id: 'events', name: 'Events' },
    { id: 'magazine', name: 'Magazine' },
  ];

  const galleryImages = [
    // Fashion
    { id: 1, category: 'fashion', src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80', alt: 'Fashion Look 1', title: 'Spring Collection 2024' },
    { id: 2, category: 'fashion', src: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80', alt: 'Fashion Look 2', title: 'Couture Elegance' },
    { id: 3, category: 'fashion', src: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80', alt: 'Fashion Look 3', title: 'Evening Glamour' },
    { id: 4, category: 'fashion', src: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80', alt: 'Fashion Look 4', title: 'Minimalist Chic' },
    { id: 5, category: 'fashion', src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80', alt: 'Fashion Look 5', title: 'Urban Sophistication' },
    { id: 6, category: 'fashion', src: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80', alt: 'Fashion Look 6', title: 'Timeless Beauty' },
    
    // Interiors
    { id: 7, category: 'interiors', src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80', alt: 'Interior Design 1', title: 'Luxury Penthouse' },
    { id: 8, category: 'interiors', src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80', alt: 'Interior Design 2', title: 'Modern Minimalism' },
    { id: 9, category: 'interiors', src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80', alt: 'Interior Design 3', title: 'Elegant Living' },
    { id: 10, category: 'interiors', src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80', alt: 'Interior Design 4', title: 'Sophisticated Spaces' },
    { id: 11, category: 'interiors', src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80', alt: 'Interior Design 5', title: 'Contemporary Luxury' },
    { id: 12, category: 'interiors', src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80', alt: 'Interior Design 6', title: 'Refined Aesthetics' },
    
    // Events
    { id: 13, category: 'events', src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80', alt: 'Event 1', title: 'Spring Collection Launch' },
    { id: 14, category: 'events', src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80', alt: 'Event 2', title: 'Design Symposium' },
    { id: 15, category: 'events', src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80', alt: 'Event 3', title: 'Magazine Release Party' },
    { id: 16, category: 'events', src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80', alt: 'Event 4', title: 'Luxury Gala' },
    
    // Magazine
    { id: 17, category: 'magazine', src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80', alt: 'Magazine 1', title: 'Spring 2024 Cover' },
    { id: 18, category: 'magazine', src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80', alt: 'Magazine 2', title: 'Editorial Spread' },
    { id: 19, category: 'magazine', src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80', alt: 'Magazine 3', title: 'Fashion Feature' },
    { id: 20, category: 'magazine', src: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80', alt: 'Magazine 4', title: 'Art & Culture' },
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

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

      {/* Filter Section */}
      <section className="py-6 sm:py-8 md:py-12 bg-white border-b border-beige sticky top-20 z-40 backdrop-blur-sm bg-white/95">
        <div className="container-luxury">
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 md:gap-4 flex-wrap px-4">
            <Filter className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-charcoal flex-shrink-0" />
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 text-xs sm:text-sm uppercase tracking-wider transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-black text-white'
                    : 'bg-cream text-charcoal hover:bg-beige hover:text-black'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 bg-white">
        <div className="container-luxury px-4 sm:px-0">
          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="group relative aspect-square overflow-hidden bg-charcoal cursor-pointer"
                onClick={() => openLightbox(image.id)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white text-xs sm:text-sm md:text-base font-serif mb-0.5 sm:mb-1">
                    {image.title}
                  </h3>
                  <p className="text-white/80 text-xs uppercase tracking-wider">
                    {categories.find(c => c.id === image.category)?.name}
                  </p>
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
                <p className="text-white/80 text-xs sm:text-sm md:text-base uppercase tracking-wider">
                  {categories.find(c => c.id === currentImage.category)?.name}
                </p>
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

