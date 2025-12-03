'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShoppingBag, Calendar, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import MagazineFlipbookSection from '@/components/MagazineFlipbookSection';
import { useRef } from 'react';

export default function Home() {
  const fashionScrollRef = useRef<HTMLDivElement>(null);
  const accessoriesScrollRef = useRef<HTMLDivElement>(null);
  const interiorScrollRef = useRef<HTMLDivElement>(null);

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const boutiqueProducts = {
    fashion: [
      { id: 1, name: 'Couture Evening Dress', price: 2500, image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80' },
      { id: 2, name: 'Cashmere Wrap', price: 450, image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80' },
      { id: 3, name: 'Designer Blazer', price: 850, image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80' },
      { id: 4, name: 'Silk Evening Gown', price: 1800, image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&q=80' },
    ],
    accessories: [
      { id: 5, name: 'Luxury Silk Scarf', price: 285, image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80' },
      { id: 6, name: 'Designer Handbag', price: 1200, image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80' },
      { id: 7, name: 'Designer Sunglasses', price: 320, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80' },
      { id: 8, name: 'Designer Jewelry Box', price: 220, image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80' },
    ],
    interior: [
      { id: 9, name: 'Luxury Candle Set', price: 95, image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&q=80' },
      { id: 10, name: 'Artisan Vase Collection', price: 180, image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80' },
      { id: 11, name: 'Silk Pillow Set', price: 165, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80' },
      { id: 12, name: 'Designer Throw Blanket', price: 195, image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=80' },
    ],
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-[85vh] flex items-center justify-center overflow-hidden bg-cream py-8 sm:py-12 md:py-16">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-cream via-cream/95 to-cream" />
          <Image
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&q=80"
            alt="Luxury Fashion"
            fill
            className="object-cover opacity-10"
            priority
          />
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Gold Accent Lines */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute top-1/4 left-0 right-0 h-px bg-gold/30"
          />
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.7 }}
            className="absolute bottom-1/4 left-0 right-0 h-px bg-gold/30"
          />
          
          {/* Decorative Circles */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 2, delay: 0.8 }}
            className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full border border-gold/20"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 2, delay: 1 }}
            className="absolute bottom-1/4 left-1/4 w-48 h-48 rounded-full border border-gold/20"
          />

          {/* Floating Elements */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-20 right-10 w-2 h-2 bg-gold rounded-full opacity-60"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-20 left-10 w-3 h-3 bg-gold rounded-full opacity-40"
          />
        </div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="container-luxury text-center z-10 relative"
        >
          {/* Small Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-4 sm:mb-6"
          >
            <span className="inline-block text-xs sm:text-sm uppercase tracking-[0.3em] text-charcoal/70 border-t border-b border-gold/30 py-2 px-4">
              Since 2008
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-serif text-black mb-4 sm:mb-6 leading-tight px-4 relative inline-block"
          >
            <span className="relative">
              Bea Foster
              {/* Decorative underline */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gold origin-left"
              />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mb-6 sm:mb-8 md:mb-10 px-4"
          >
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-charcoal tracking-[0.2em] uppercase font-light mb-2">
              Couture, Interiors, & Editorial
            </p>
            <div className="w-16 sm:w-20 h-px bg-gold mx-auto my-4" />
            <p className="text-sm sm:text-base md:text-lg text-charcoal/70 max-w-2xl mx-auto font-light leading-relaxed">
              Crafting timeless elegance through bespoke fashion, transformative interiors, and editorial excellence
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
          >
            <Link
              href="/about"
              className="group relative w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-black text-white text-sm sm:text-base font-medium hover:bg-charcoal transition-all duration-300 uppercase tracking-wider flex items-center justify-center gap-2 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gold"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
            <Link
              href="/boutique"
              className="group relative w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 border-2 border-black text-black text-sm sm:text-base font-medium hover:bg-black hover:text-white transition-all duration-300 uppercase tracking-wider flex items-center justify-center gap-2 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Shop Boutique
                <ShoppingBag className="w-4 h-4" />
              </span>
              <motion.div
                className="absolute inset-0 bg-black -z-10"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Brief About Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white">
        <div className="container-luxury px-4 sm:px-0">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2
              variants={fadeUpVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-black mb-6 sm:mb-8"
            >
              Crafting Luxury Since 2008
            </motion.h2>
            <motion.p
              variants={fadeUpVariants}
              className="text-base sm:text-lg md:text-xl text-charcoal leading-relaxed mb-4 sm:mb-6"
            >
              Bea Foster represents the pinnacle of luxury fashion, interior design,
              and editorial excellence. With over 15 years of experience, we have
              established ourselves as a premier destination for those who seek
              unparalleled sophistication and timeless elegance.
            </motion.p>
            <motion.p
              variants={fadeUpVariants}
              className="text-base sm:text-lg text-charcoal leading-relaxed mb-0"
            >
              From bespoke couture creations to transformative interior spaces and
              our acclaimed editorial magazine, every aspect of our work reflects
              our commitment to excellence and attention to detail.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-cream">
        <div className="container-luxury px-4 sm:px-0">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-black text-center mb-8 sm:mb-12 md:mb-16"
          >
            Our Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: 'Fashion',
                description: 'Bespoke couture and ready-to-wear collections',
                image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
                href: '/fashion',
              },
              {
                title: 'Interiors',
                description: 'Transformative luxury interior design',
                image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
                href: '/interiors',
              },
              {
                title: 'Magazine',
                description: 'Editorial excellence and storytelling',
                image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80',
                href: '/magazine',
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group cursor-pointer"
              >
                <Link href={service.href}>
                  <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden bg-charcoal">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white">
                      <h3 className="text-2xl sm:text-3xl font-serif mb-1 sm:mb-2">{service.title}</h3>
                      <p className="text-xs sm:text-sm opacity-90">{service.description}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini Boutique Preview */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white">
        <div className="container-luxury px-4 sm:px-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-black mb-3 sm:mb-4">
              The Boutique
            </h2>
            <div className="w-20 sm:w-24 h-px bg-gold mx-auto mb-4 sm:mb-6" />
            <p className="text-base sm:text-lg text-charcoal leading-relaxed max-w-2xl mx-auto mb-6 sm:mb-8">
              Discover our curated collection of luxury fashion pieces, accessories, and home essentials
            </p>
            <Link
              href="/boutique"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-black text-white text-sm sm:text-base font-medium hover:bg-charcoal transition-colors uppercase tracking-wider group"
            >
              View All Products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Three Column Sliders */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
            {/* Fashion Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <h3 className="text-xl sm:text-2xl font-serif text-black mb-4 sm:mb-6 text-center md:text-left">
                Fashion
              </h3>
              <div className="relative">
                <div
                  ref={fashionScrollRef}
                  className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
                >
                  {boutiqueProducts.fashion.map((product) => (
                    <Link
                      key={product.id}
                      href="/boutique"
                      className="group flex-shrink-0 w-48 sm:w-56"
                    >
                      <div className="bg-cream border border-beige hover:shadow-lg transition-all duration-500">
                        <div className="relative h-48 sm:h-56 bg-charcoal overflow-hidden">
        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-3 sm:p-4">
                          <h4 className="text-sm sm:text-base font-serif text-black mb-2 line-clamp-2">
                            {product.name}
                          </h4>
                          <p className="text-lg sm:text-xl font-serif text-black">
                            ${product.price.toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="flex justify-center md:justify-start gap-2 mt-4">
                  <button
                    onClick={() => {
                      if (fashionScrollRef.current) {
                        fashionScrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
                      }
                    }}
                    className="p-2 bg-cream hover:bg-beige border border-beige rounded-full transition-colors"
                    aria-label="Scroll left"
                  >
                    <ChevronLeft className="w-4 h-4 text-charcoal" />
                  </button>
                  <button
                    onClick={() => {
                      if (fashionScrollRef.current) {
                        fashionScrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
                      }
                    }}
                    className="p-2 bg-cream hover:bg-beige border border-beige rounded-full transition-colors"
                    aria-label="Scroll right"
                  >
                    <ChevronRight className="w-4 h-4 text-charcoal" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Accessories Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col"
            >
              <h3 className="text-xl sm:text-2xl font-serif text-black mb-4 sm:mb-6 text-center md:text-left">
                Accessories
              </h3>
              <div className="relative">
                <div
                  ref={accessoriesScrollRef}
                  className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
                >
                  {boutiqueProducts.accessories.map((product) => (
                    <Link
                      key={product.id}
                      href="/boutique"
                      className="group flex-shrink-0 w-48 sm:w-56"
                    >
                      <div className="bg-cream border border-beige hover:shadow-lg transition-all duration-500">
                        <div className="relative h-48 sm:h-56 bg-charcoal overflow-hidden">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-3 sm:p-4">
                          <h4 className="text-sm sm:text-base font-serif text-black mb-2 line-clamp-2">
                            {product.name}
                          </h4>
                          <p className="text-lg sm:text-xl font-serif text-black">
                            ${product.price.toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="flex justify-center md:justify-start gap-2 mt-4">
                  <button
                    onClick={() => {
                      if (accessoriesScrollRef.current) {
                        accessoriesScrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
                      }
                    }}
                    className="p-2 bg-cream hover:bg-beige border border-beige rounded-full transition-colors"
                    aria-label="Scroll left"
                  >
                    <ChevronLeft className="w-4 h-4 text-charcoal" />
                  </button>
                  <button
                    onClick={() => {
                      if (accessoriesScrollRef.current) {
                        accessoriesScrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
                      }
                    }}
                    className="p-2 bg-cream hover:bg-beige border border-beige rounded-full transition-colors"
                    aria-label="Scroll right"
                  >
                    <ChevronRight className="w-4 h-4 text-charcoal" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Interior Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col"
            >
              <h3 className="text-xl sm:text-2xl font-serif text-black mb-4 sm:mb-6 text-center md:text-left">
                Interior
              </h3>
              <div className="relative">
                <div
                  ref={interiorScrollRef}
                  className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
                >
                  {boutiqueProducts.interior.map((product) => (
                    <Link
                      key={product.id}
                      href="/boutique"
                      className="group flex-shrink-0 w-48 sm:w-56"
                    >
                      <div className="bg-cream border border-beige hover:shadow-lg transition-all duration-500">
                        <div className="relative h-48 sm:h-56 bg-charcoal overflow-hidden">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-3 sm:p-4">
                          <h4 className="text-sm sm:text-base font-serif text-black mb-2 line-clamp-2">
                            {product.name}
                          </h4>
                          <p className="text-lg sm:text-xl font-serif text-black">
                            ${product.price.toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="flex justify-center md:justify-start gap-2 mt-4">
                  <button
                    onClick={() => {
                      if (interiorScrollRef.current) {
                        interiorScrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
                      }
                    }}
                    className="p-2 bg-cream hover:bg-beige border border-beige rounded-full transition-colors"
                    aria-label="Scroll left"
                  >
                    <ChevronLeft className="w-4 h-4 text-charcoal" />
                  </button>
                  <button
                    onClick={() => {
                      if (interiorScrollRef.current) {
                        interiorScrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
                      }
                    }}
                    className="p-2 bg-cream hover:bg-beige border border-beige rounded-full transition-colors"
                    aria-label="Scroll right"
                  >
                    <ChevronRight className="w-4 h-4 text-charcoal" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Magazine Highlights - Flipbook Style */}
      <MagazineFlipbookSection />

      {/* Upcoming Events */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white">
        <div className="container-luxury px-4 sm:px-0">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-black text-center mb-8 sm:mb-12 md:mb-16"
          >
            Upcoming Events
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                date: 'March 15, 2024',
                title: 'Spring Collection Launch',
                location: 'New York',
                image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80',
              },
              {
                date: 'April 22, 2024',
                title: 'Interior Design Masterclass',
                location: 'London',
                image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80',
              },
              {
                date: 'May 10, 2024',
                title: 'Magazine Release Party',
                location: 'Paris',
                image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80',
              },
            ].map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group cursor-pointer"
              >
                <Link href="/events">
                  <div className="bg-white border border-beige overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="relative h-48 sm:h-56 md:h-64 bg-charcoal">
            <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-4 sm:p-5 md:p-6">
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-charcoal mb-2 sm:mb-3">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{event.date}</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-serif text-black mb-1 sm:mb-2">
                        {event.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-charcoal">{event.location}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-beige text-black relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gold hidden md:block" />
          <div className="absolute top-0 left-2/4 w-px h-full bg-gold hidden md:block" />
          <div className="absolute top-0 left-3/4 w-px h-full bg-gold hidden md:block" />
        </div>
        
        <div className="container-luxury relative z-10 px-4 sm:px-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-black mb-3 sm:mb-4">
              Our Legacy in Numbers
            </h2>
            <div className="w-20 sm:w-24 h-px bg-gold mx-auto" />
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
            {[
              { number: '15+', label: 'Years of Excellence', icon: Award },
              { number: '500+', label: 'Happy Clients', icon: ShoppingBag },
              { number: '200+', label: 'Projects Completed', icon: Calendar },
              { number: '50+', label: 'Awards Won', icon: Award },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className="text-center group"
                >
                  <div className="mb-4 sm:mb-6 flex justify-center">
                    <div className="p-3 sm:p-4 bg-gold/20 rounded-full group-hover:bg-gold/30 transition-colors">
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-gold" />
                    </div>
                  </div>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.2, type: 'spring', stiffness: 200 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-gold mb-2 sm:mb-4 font-bold"
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-xs sm:text-sm uppercase tracking-wider text-charcoal group-hover:text-black transition-colors px-2">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
