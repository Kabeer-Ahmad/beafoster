'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { BookOpen, ArrowRight, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import Flipbook from '@/components/Flipbook';

export default function Magazine() {
  const [isFlipbookOpen, setIsFlipbookOpen] = useState(false);
  const archivesScrollRef = useRef<HTMLDivElement>(null);

  const latestIssue = {
    title: 'Spring 2024',
    subtitle: 'The Art of Minimalism',
    cover: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80',
    pages: [
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&q=80',
      'https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80',
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80',
    ],
  };

  const archives = [
    {
      issue: 'Winter 2023',
      title: 'Luxury Redefined',
      cover: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80',
      date: 'December 2023',
    },
    {
      issue: 'Fall 2023',
      title: 'Autumn Elegance',
      cover: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80',
      date: 'September 2023',
    },
    {
      issue: 'Summer 2023',
      title: 'Coastal Luxury',
      cover: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80',
      date: 'June 2023',
    },
    {
      issue: 'Spring 2023',
      title: 'Renewal & Refinement',
      cover: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80',
      date: 'March 2023',
    },
    {
      issue: 'Winter 2022',
      title: 'Timeless Traditions',
      cover: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
      date: 'December 2022',
    },
    {
      issue: 'Fall 2022',
      title: 'Modern Heritage',
      cover: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&q=80',
      date: 'September 2022',
    },
  ];

  const adPricing = [
    {
      size: 'Full Page',
      dimensions: '8.5" × 11"',
      price: '$5,000',
      description: 'Maximum visibility with a full-page advertisement',
      features: ['Premium placement', 'High-resolution printing', 'Digital inclusion'],
    },
    {
      size: 'Half Page',
      dimensions: '8.5" × 5.5"',
      price: '$3,000',
      description: 'Prominent placement with half-page advertisement',
      features: ['Strategic positioning', 'Quality printing', 'Digital inclusion'],
    },
    {
      size: 'Quarter Page',
      dimensions: '4.25" × 5.5"',
      price: '$1,500',
      description: 'Cost-effective option with quarter-page advertisement',
      features: ['Targeted reach', 'Standard printing', 'Digital inclusion'],
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section - 3D Book Cover */}
      <section className="min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-screen flex items-center bg-cream relative overflow-hidden py-8 sm:py-12 md:py-16 lg:py-0">
        <div className="container-luxury w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: 3D Book Cover */}
            <motion.div
              initial={{ opacity: 0, x: -50, rotateY: -15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="relative perspective-1000"
              style={{ perspective: '1000px' }}
            >
              <div className="relative w-full max-w-md mx-auto">
                <motion.div
                  whileHover={{ rotateY: -5, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="relative"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-2xl">
                    <Image
                      src={latestIssue.cover}
                      alt={latestIssue.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent" />
                  </div>
                  {/* Book spine effect */}
                  <div className="absolute left-0 top-0 bottom-0 w-2 bg-charcoal/30 rounded-l-lg" />
                </motion.div>
              </div>
            </motion.div>

            {/* Right: Latest Issue Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="inline-flex items-center gap-2 text-sm uppercase tracking-wider text-charcoal mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>Latest Issue</span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-black mb-4">
                  {latestIssue.title}
                </h1>
                <div className="w-20 h-px bg-gold mb-6 mx-auto lg:mx-0" />
                <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-8">
                  {latestIssue.subtitle}
                </h2>
                <p className="text-lg text-charcoal mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Explore the latest trends in luxury fashion, interior design, and editorial excellence. 
                  This issue features exclusive interviews, stunning photography, and in-depth stories from 
                  the world of high fashion and design.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsFlipbookOpen(true)}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white font-medium hover:bg-charcoal transition-colors uppercase tracking-wider group"
                >
                  <BookOpen className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Read Digital Flipbook
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Archives Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16 lg:mb-20"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-black mb-4">
              Archives
            </h2>
            <div className="w-24 h-px bg-gold mx-auto mb-4" />
            <p className="text-base md:text-lg text-charcoal max-w-2xl mx-auto">
              Browse through our collection of past issues
            </p>
          </motion.div>

          <div className="relative">
            {/* Slider Container */}
            <div
              ref={archivesScrollRef}
              className="flex gap-6 md:gap-8 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {archives.map((issue, index) => (
                <motion.div
                  key={issue.issue}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group cursor-pointer flex-shrink-0 w-48 sm:w-56 md:w-64"
                >
                  <div className="relative aspect-[2/3] overflow-hidden rounded-lg mb-4 bg-charcoal">
                    <Image
                      src={issue.cover}
                      alt={issue.title}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm uppercase tracking-wider text-charcoal mb-1">
                      {issue.issue}
                    </p>
                    <h3 className="text-lg font-serif text-black mb-1">
                      {issue.title}
                    </h3>
                    <p className="text-xs text-charcoal">
                      {issue.date}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={() => {
                  if (archivesScrollRef.current) {
                    archivesScrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
                  }
                }}
                className="p-3 bg-cream hover:bg-beige border border-beige rounded-full transition-colors group"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5 text-charcoal group-hover:text-black" />
              </button>
              <button
                onClick={() => {
                  if (archivesScrollRef.current) {
                    archivesScrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
                  }
                }}
                className="p-3 bg-cream hover:bg-beige border border-beige rounded-full transition-colors group"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5 text-charcoal group-hover:text-black" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Advertising Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-beige">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16 lg:mb-20"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-black mb-4">
              Advertising Opportunities
            </h2>
            <div className="w-24 h-px bg-gold mx-auto mb-4" />
            <p className="text-base md:text-lg text-charcoal max-w-2xl mx-auto">
              Reach our exclusive audience of luxury enthusiasts and industry professionals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
            {adPricing.map((ad, index) => (
              <motion.div
                key={ad.size}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="bg-white p-8 rounded-lg border border-beige hover:shadow-xl transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl md:text-3xl font-serif text-black mb-2">
                    {ad.size}
                  </h3>
                  <p className="text-sm text-charcoal mb-4">
                    {ad.dimensions}
                  </p>
                  <div className="text-4xl md:text-5xl font-serif text-gold mb-4">
                    {ad.price}
                  </div>
                </div>
                <p className="text-charcoal mb-6 text-center leading-relaxed">
                  {ad.description}
                </p>
                <ul className="space-y-3">
                  {ad.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-charcoal">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-6 px-6 py-3 bg-black text-white font-medium hover:bg-charcoal transition-colors uppercase tracking-wider text-sm">
                  Inquire Now
                </button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-charcoal mb-4">
              For custom advertising packages and editorial features, please contact us
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-charcoal hover:text-black transition-colors uppercase tracking-wider text-sm"
            >
              Contact Sales Team
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Flipbook Modal */}
      {isFlipbookOpen && (
        <Flipbook
          isOpen={isFlipbookOpen}
          onClose={() => setIsFlipbookOpen(false)}
          pages={latestIssue.pages}
        />
      )}
    </div>
  );
}

