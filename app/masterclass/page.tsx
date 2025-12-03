'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Calendar, Clock, Users, MapPin, CheckCircle, Star, ArrowRight, BookOpen, Scissors, Home, Sparkles, Award } from 'lucide-react';
import Link from 'next/link';

export default function Masterclass() {
  const masterclasses = [
    {
      id: 1,
      title: 'Couture Design Fundamentals',
      instructor: 'Bea Foster',
      duration: '3 Days',
      level: 'Intermediate',
      price: '$2,500',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80',
      description: 'Master the art of couture design through hands-on workshops covering pattern making, fabric selection, and finishing techniques.',
      date: 'March 20-22, 2024',
      location: 'Bea Foster Atelier, Milan',
      capacity: '12 Students',
      topics: [
        'Pattern Drafting & Fitting',
        'Luxury Fabric Selection',
        'Hand-Finishing Techniques',
        'Design Development',
      ],
    },
    {
      id: 2,
      title: 'Interior Design Mastery',
      instructor: 'Bea Foster',
      duration: '5 Days',
      level: 'All Levels',
      price: '$3,200',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80',
      description: 'Transform spaces with confidence. Learn color theory, spatial planning, material selection, and client presentation skills.',
      date: 'April 15-19, 2024',
      location: 'Claridge\'s, London',
      capacity: '15 Students',
      topics: [
        'Color & Material Palettes',
        'Spatial Planning & Flow',
        'Luxury Furniture Selection',
        'Client Presentation',
      ],
    },
    {
      id: 3,
      title: 'Personal Styling Excellence',
      instructor: 'Bea Foster',
      duration: '2 Days',
      level: 'Beginner',
      price: '$1,800',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80',
      description: 'Develop your personal styling expertise. Learn to curate wardrobes, understand body types, and create signature looks.',
      date: 'May 5-6, 2024',
      location: 'The Plaza, New York',
      capacity: '20 Students',
      topics: [
        'Wardrobe Curation',
        'Body Type Analysis',
        'Color Theory for Style',
        'Building Signature Looks',
      ],
    },
    {
      id: 4,
      title: 'Luxury Brand Development',
      instructor: 'Bea Foster',
      duration: '4 Days',
      level: 'Advanced',
      price: '$4,000',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
      description: 'Build and elevate your luxury brand. Cover brand identity, marketing strategies, client relationships, and business growth.',
      date: 'June 10-13, 2024',
      location: 'Hôtel de Crillon, Paris',
      capacity: '10 Students',
      topics: [
        'Brand Identity & Positioning',
        'Luxury Marketing Strategies',
        'Client Relationship Management',
        'Business Growth & Scaling',
      ],
    },
  ];

  const benefits = [
    {
      icon: Award,
      title: 'Expert Instruction',
      description: 'Learn directly from industry leaders with decades of experience',
    },
    {
      icon: Users,
      title: 'Small Class Sizes',
      description: 'Intimate settings ensure personalized attention and feedback',
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Materials',
      description: 'Take home detailed guides, resources, and exclusive content',
    },
    {
      icon: Sparkles,
      title: 'Networking Opportunities',
      description: 'Connect with like-minded creatives and industry professionals',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Fashion Designer',
      image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&q=80',
      rating: 5,
      text: 'The Couture Design Masterclass transformed my approach to design. The hands-on techniques and expert guidance were invaluable.',
    },
    {
      name: 'James Mitchell',
      role: 'Interior Designer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
      rating: 5,
      text: 'An exceptional learning experience. The small class size allowed for personalized feedback that elevated my work significantly.',
    },
    {
      name: 'Emma Laurent',
      role: 'Stylist',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
      rating: 5,
      text: 'The Personal Styling Masterclass gave me the confidence and skills to build my own successful styling business.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Split Layout */}
      <section className="min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-screen flex items-center bg-cream relative overflow-hidden pt-20">
        <div className="container-luxury w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-20 items-center py-8 sm:py-12 md:py-16">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 px-4 sm:px-0"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-block mb-4 sm:mb-6"
              >
                <span className="text-xs sm:text-sm uppercase tracking-wider text-gold font-medium">
                  Exclusive Learning Experiences
                </span>
              </motion.div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-black mb-4 sm:mb-6 leading-tight">
                Masterclass
              </h1>
              <div className="w-20 sm:w-24 h-px bg-gold mb-6 sm:mb-8" />
              <p className="text-base sm:text-lg md:text-xl text-charcoal mb-6 sm:mb-8 leading-relaxed max-w-xl">
                Elevate your craft through intensive, hands-on learning experiences led by industry leaders. 
                Transform your skills and unlock your creative potential.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
                <Link
                  href="#masterclasses"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-black text-white hover:bg-charcoal transition-colors text-xs sm:text-sm uppercase tracking-wider"
                >
                  View Masterclasses
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border-2 border-black text-black hover:bg-black hover:text-white transition-colors text-xs sm:text-sm uppercase tracking-wider"
                >
                  Inquire
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 pt-6 sm:pt-8 border-t border-beige">
                <div>
                  <p className="text-2xl sm:text-3xl md:text-4xl font-serif text-black mb-1 sm:mb-2">12+</p>
                  <p className="text-xs sm:text-sm text-charcoal uppercase tracking-wider">Years Experience</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl md:text-4xl font-serif text-black mb-1 sm:mb-2">500+</p>
                  <p className="text-xs sm:text-sm text-charcoal uppercase tracking-wider">Students Taught</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl md:text-4xl font-serif text-black mb-1 sm:mb-2">4</p>
                  <p className="text-xs sm:text-sm text-charcoal uppercase tracking-wider">Masterclasses</p>
                </div>
              </div>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px] order-1 lg:order-2 mx-4 sm:mx-0"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cream via-beige to-cream" />
              <div className="relative h-full w-full">
                <Image
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80"
                  alt="Masterclass Learning"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cream/20 via-transparent to-transparent" />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-gold/10 rounded-full blur-3xl" />
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-gold/5 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Available Masterclasses */}
      <section id="masterclasses" className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-black mb-3 sm:mb-4">
              Available Masterclasses
            </h2>
            <div className="w-20 sm:w-24 h-px bg-gold mx-auto mb-3 sm:mb-4" />
            <p className="text-sm sm:text-base md:text-lg text-charcoal max-w-2xl mx-auto px-4">
              Intensive programs designed to transform your skills and elevate your expertise
            </p>
          </motion.div>

          <div className="space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-20">
            {masterclasses.map((masterclass, index) => (
              <motion.div
                key={masterclass.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center bg-cream border border-beige hover:shadow-2xl transition-all duration-500">
                  <div className={`relative h-56 sm:h-64 md:h-80 lg:h-96 overflow-hidden ${index % 2 === 0 ? 'order-2 lg:order-1' : 'order-2'}`}>
                    <Image
                      src={masterclass.image}
                      alt={masterclass.title}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-black/80 text-white px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm uppercase tracking-wider">
                      {masterclass.level}
                    </div>
                  </div>
                  <div className={`p-5 sm:p-6 md:p-8 lg:p-12 ${index % 2 === 0 ? 'order-1 lg:order-2' : 'order-1'}`}>
                    <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 text-xs sm:text-sm text-charcoal flex-wrap">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-gold flex-shrink-0" />
                        <span className="break-words">{masterclass.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-gold flex-shrink-0" />
                        <span>{masterclass.duration}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-black mb-2 sm:mb-3">
                      {masterclass.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gold mb-3 sm:mb-4 font-medium">
                      Instructor: {masterclass.instructor}
                    </p>
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 text-xs sm:text-sm text-charcoal flex-wrap">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-gold flex-shrink-0" />
                        <span className="break-words">{masterclass.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <Users className="w-3 h-3 sm:w-4 sm:h-4 text-gold flex-shrink-0" />
                        <span>{masterclass.capacity}</span>
                      </div>
                    </div>
                    <p className="text-sm sm:text-base md:text-lg text-charcoal mb-4 sm:mb-6 leading-relaxed">
                      {masterclass.description}
                    </p>
                    <div className="mb-4 sm:mb-6">
                      <h4 className="text-xs sm:text-sm uppercase tracking-wider text-charcoal mb-2 sm:mb-3">
                        What You'll Learn:
                      </h4>
                      <ul className="space-y-1.5 sm:space-y-2">
                        {masterclass.topics.map((topic, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-charcoal">
                            <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-gold flex-shrink-0 mt-0.5" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 sm:pt-6 border-t border-beige">
                      <div>
                        <p className="text-xl sm:text-2xl md:text-3xl font-serif text-black">
                          {masterclass.price}
                        </p>
                        <p className="text-xs text-charcoal uppercase tracking-wider">
                          Per Person
                        </p>
                      </div>
                      <button className="group/btn w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-black text-white hover:bg-charcoal transition-colors text-xs sm:text-sm uppercase tracking-wider">
                        Enroll Now
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-cream">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-black mb-3 sm:mb-4">
              Why Choose Our Masterclasses
            </h2>
            <div className="w-20 sm:w-24 h-px bg-gold mx-auto mb-3 sm:mb-4" />
            <p className="text-sm sm:text-base md:text-lg text-charcoal max-w-2xl mx-auto px-4">
              Experience the difference of learning from industry leaders
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white p-5 sm:p-6 md:p-8 border border-beige hover:border-gold transition-colors group text-center"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-cream rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-gold transition-colors">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-charcoal group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-serif text-black mb-2 sm:mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-black mb-3 sm:mb-4">
              Student Testimonials
            </h2>
            <div className="w-20 sm:w-24 h-px bg-gold mx-auto mb-3 sm:mb-4" />
            <p className="text-sm sm:text-base md:text-lg text-charcoal max-w-2xl mx-auto px-4">
              Hear from those who have transformed their craft with us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-cream p-5 sm:p-6 md:p-8 border border-beige"
              >
                <div className="flex items-center gap-1 mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-charcoal mb-4 sm:mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-charcoal flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-medium text-black">
                      {testimonial.name}
                    </p>
                    <p className="text-xs sm:text-sm text-charcoal">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-charcoal">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto px-4"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4 sm:mb-6">
              Ready to Elevate Your Craft?
            </h2>
            <div className="w-20 sm:w-24 h-px bg-gold mx-auto mb-4 sm:mb-6" />
            <p className="text-sm sm:text-base md:text-lg text-white/80 mb-6 sm:mb-8 leading-relaxed">
              Join our exclusive masterclasses and learn from industry leaders. 
              Limited seats available for each session.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gold text-black hover:bg-gold-light transition-colors text-xs sm:text-sm uppercase tracking-wider"
              >
                Enroll in a Masterclass
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </Link>
              <Link
                href="/events"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white hover:bg-white hover:text-black transition-colors text-xs sm:text-sm uppercase tracking-wider"
              >
                View All Events
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

