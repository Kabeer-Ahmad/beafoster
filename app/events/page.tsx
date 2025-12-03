'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { Calendar, MapPin, Clock, Users, ArrowRight, Sparkles, Scissors, Home, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function Events() {
  const pastEventsScrollRef = useRef<HTMLDivElement>(null);
  const upcomingEvents = [
    {
      id: 1,
      date: 'March 15, 2024',
      time: '7:00 PM',
      title: 'Spring Collection Launch',
      location: 'The Plaza, New York',
      category: 'Fashion',
      description: 'An exclusive evening showcasing our latest spring collection. Join us for a night of elegance, innovation, and style.',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80',
      capacity: '150 Guests',
    },
    {
      id: 2,
      date: 'April 22, 2024',
      time: '2:00 PM',
      title: 'Interior Design Masterclass',
      location: 'Claridge\'s, London',
      category: 'Interiors',
      description: 'Learn from our design experts as they share insights into creating luxurious, timeless interiors that reflect your personal style.',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80',
      capacity: '80 Guests',
    },
    {
      id: 3,
      date: 'May 10, 2024',
      time: '8:00 PM',
      title: 'Magazine Release Party',
      location: 'Hôtel de Crillon, Paris',
      category: 'Magazine',
      description: 'Celebrate the launch of our latest issue with an intimate gathering of industry leaders, creatives, and tastemakers.',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80',
      capacity: '200 Guests',
    },
    {
      id: 4,
      date: 'June 5, 2024',
      time: '6:00 PM',
      title: 'Couture Atelier Open House',
      location: 'Bea Foster Studio, Milan',
      category: 'Fashion',
      description: 'Experience the artistry behind our couture creations. Tour our atelier and meet the artisans who bring our designs to life.',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80',
      capacity: '50 Guests',
    },
  ];

  const pastEvents = [
    {
      id: 1,
      title: 'Winter Gala 2023',
      date: 'December 2023',
      location: 'New York',
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80',
    },
    {
      id: 2,
      title: 'Design Symposium',
      date: 'November 2023',
      location: 'London',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&q=80',
    },
    {
      id: 3,
      title: 'Fashion Week Showcase',
      date: 'September 2023',
      location: 'Paris',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=80',
    },
    {
      id: 4,
      title: 'Luxury Living Expo',
      date: 'August 2023',
      location: 'Milan',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    },
    {
      id: 5,
      title: 'Summer Soirée',
      date: 'July 2023',
      location: 'Monaco',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80',
    },
    {
      id: 6,
      title: 'Art & Design Colloquium',
      date: 'June 2023',
      location: 'Vienna',
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80',
    },
  ];

  const eventCategories = [
    {
      icon: Sparkles,
      title: 'Fashion Shows',
      description: 'Exclusive runway presentations and collection launches',
    },
    {
      icon: Home,
      title: 'Design Workshops',
      description: 'Hands-on masterclasses in interior design and styling',
    },
    {
      icon: BookOpen,
      title: 'Magazine Launches',
      description: 'Intimate gatherings celebrating our latest publications',
    },
    {
      icon: Scissors,
      title: 'Atelier Experiences',
      description: 'Behind-the-scenes tours of our creative studios',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=1600&q=80"
            alt="Events Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-4"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white mb-6">
              Events
            </h1>
            <div className="w-32 h-px bg-gold mx-auto mb-6" />
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Curated experiences celebrating art, design, and luxury
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16 lg:mb-20"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-black mb-4">
              Upcoming Events
            </h2>
            <div className="w-24 h-px bg-gold mx-auto mb-4" />
            <p className="text-base md:text-lg text-charcoal max-w-2xl mx-auto">
              Join us for exclusive gatherings, launches, and masterclasses
            </p>
          </motion.div>

          <div className="space-y-12 md:space-y-16">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center bg-cream border border-beige hover:shadow-2xl transition-all duration-500">
                  <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden order-2 lg:order-1">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-black/80 text-white px-4 py-2 text-sm uppercase tracking-wider">
                      {event.category}
                    </div>
                  </div>
                  <div className="p-8 md:p-12 order-1 lg:order-2">
                    <div className="flex items-center gap-4 mb-4 text-sm text-charcoal">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gold" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gold" />
                        <span>{event.time}</span>
                      </div>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-serif text-black mb-4">
                      {event.title}
                    </h3>
                    <div className="flex items-center gap-2 text-charcoal mb-4">
                      <MapPin className="w-4 h-4 text-gold" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-charcoal mb-6">
                      <Users className="w-4 h-4 text-gold" />
                      <span>{event.capacity}</span>
                    </div>
                    <p className="text-base md:text-lg text-charcoal mb-6 leading-relaxed">
                      {event.description}
                    </p>
                    <button className="group/btn inline-flex items-center gap-2 px-8 py-3 bg-black text-white hover:bg-charcoal transition-colors text-sm uppercase tracking-wider">
                      Reserve Your Place
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-16 md:py-24 lg:py-32 bg-cream">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16 lg:mb-20"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-black mb-4">
              Event Categories
            </h2>
            <div className="w-24 h-px bg-gold mx-auto mb-4" />
            <p className="text-base md:text-lg text-charcoal max-w-2xl mx-auto">
              Discover the types of exclusive experiences we curate
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {eventCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white p-8 border border-beige hover:border-gold transition-colors group"
                >
                  <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center mb-6 group-hover:bg-gold transition-colors">
                    <Icon className="w-8 h-8 text-charcoal group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-serif text-black mb-3">
                    {category.title}
                  </h3>
                  <p className="text-sm text-charcoal leading-relaxed">
                    {category.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Past Events Gallery */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16 lg:mb-20"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-black mb-4">
              Past Events
            </h2>
            <div className="w-24 h-px bg-gold mx-auto mb-4" />
            <p className="text-base md:text-lg text-charcoal max-w-2xl mx-auto">
              A glimpse into our recent gatherings and celebrations
            </p>
          </motion.div>

          <div className="relative">
            {/* Slider Container */}
            <div
              ref={pastEventsScrollRef}
              className="flex gap-6 md:gap-8 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {pastEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group cursor-pointer flex-shrink-0 w-80 sm:w-96"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4 bg-charcoal">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <p className="text-sm uppercase tracking-wider text-gold mb-1">
                        {event.date}
                      </p>
                      <h3 className="text-xl font-serif mb-1">
                        {event.title}
                      </h3>
                      <p className="text-sm text-white/90">
                        {event.location}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={() => {
                  if (pastEventsScrollRef.current) {
                    pastEventsScrollRef.current.scrollBy({ left: -350, behavior: 'smooth' });
                  }
                }}
                className="p-3 bg-cream hover:bg-beige border border-beige rounded-full transition-colors group"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5 text-charcoal group-hover:text-black" />
              </button>
              <button
                onClick={() => {
                  if (pastEventsScrollRef.current) {
                    pastEventsScrollRef.current.scrollBy({ left: 350, behavior: 'smooth' });
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

      {/* CTA Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-charcoal">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white mb-6">
              Host Your Event With Us
            </h2>
            <div className="w-24 h-px bg-gold mx-auto mb-6" />
            <p className="text-base md:text-lg text-white/80 mb-8 leading-relaxed">
              Whether you're planning a private gathering, corporate event, or exclusive launch, 
              we create bespoke experiences that reflect your vision and exceed expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-black hover:bg-gold-light transition-colors text-sm uppercase tracking-wider"
              >
                Inquire About Events
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-black transition-colors text-sm uppercase tracking-wider"
              >
                View Venues
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

