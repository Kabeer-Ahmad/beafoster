'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Award, Heart, Lightbulb, BookOpen, Sparkles } from 'lucide-react';

export default function About() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  const timeline = [
    { year: '2008', title: 'The Beginning', description: 'The Black Tie Chandelier Gala was founded with a vision to redefine luxury fashion and design.' },
    { year: '2012', title: 'First Atelier', description: 'Opened our flagship atelier in the heart of the fashion district.' },
    { year: '2015', title: 'Interior Design Launch', description: 'Expanded into luxury interior design, transforming spaces worldwide.' },
    { year: '2018', title: 'Magazine Launch', description: 'Launched our acclaimed editorial magazine, celebrating art and culture.' },
    { year: '2020', title: 'Global Recognition', description: 'Received international acclaim and multiple prestigious awards.' },
    { year: '2023', title: 'Masterclass Series', description: 'Launched exclusive masterclass series, sharing expertise with the world.' },
  ];

  const philosophy = [
    {
      icon: Heart,
      title: 'Passion',
      description: 'Every creation is born from an unwavering passion for excellence and beauty.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We pursue perfection in every detail, setting new standards in luxury design.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Blending timeless elegance with contemporary vision and cutting-edge techniques.',
    },
    {
      icon: BookOpen,
      title: 'Storytelling',
      description: 'Each piece tells a story, weaving narratives of sophistication and artistry.',
    },
  ];

  const mediaLogos = [
    { name: 'VOGUE' },
    { name: 'ELLE' },
    { name: 'HARPER\'S BAZAAR' },
    { name: 'AD' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section - Split Layout */}
      <section className="min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-screen flex items-center bg-cream relative overflow-hidden py-8 sm:py-12 md:py-16 lg:py-0">
        <div className="container-luxury w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
            {/* Left: Parallax Portrait Image */}
            <motion.div
              style={{ y }}
              className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] order-2 lg:order-1"
            >
              <div className="relative w-full h-full">
                <Image
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80"
                  alt="The Black Tie Chandelier Gala Portrait"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              {/* Decorative Frame */}
              <div className="absolute -inset-2 md:-inset-4 border-2 border-gold/30 opacity-50" />
            </motion.div>

            {/* Right: Brand Story */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-black mb-4 md:mb-6 leading-tight">
                  Our Story
                </h1>
                <div className="w-20 h-px bg-gold mb-6 md:mb-8" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-4 md:space-y-6 text-base md:text-lg text-charcoal leading-relaxed"
              >
                <p>
                  Founded in 2008, The Black Tie Chandelier Gala emerged from a singular vision: to create a world where 
                  couture, interior design, and editorial excellence converge into a seamless expression 
                  of luxury and sophistication.
                </p>
                <p>
                  What began as a small atelier has evolved into a globally recognized brand, 
                  celebrated for our unwavering commitment to craftsmanship, innovation, and the 
                  timeless art of storytelling through design.
                </p>
                <p>
                  Today, we continue to push boundaries, creating experiences that transcend the 
                  ordinary and celebrate the extraordinary in every detail.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-8 md:mt-10 flex flex-wrap items-center gap-4 md:gap-6"
              >
                <div className="flex flex-col">
                  <span className="text-3xl md:text-4xl font-serif text-gold">15+</span>
                  <span className="text-xs md:text-sm uppercase tracking-wider text-charcoal">Years</span>
                </div>
                <div className="w-px h-8 md:h-12 bg-gold/30" />
                <div className="flex flex-col">
                  <span className="text-3xl md:text-4xl font-serif text-gold">500+</span>
                  <span className="text-xs md:text-sm uppercase tracking-wider text-charcoal">Clients</span>
                </div>
                <div className="w-px h-8 md:h-12 bg-gold/30" />
                <div className="flex flex-col">
                  <span className="text-3xl md:text-4xl font-serif text-gold">200+</span>
                  <span className="text-xs md:text-sm uppercase tracking-wider text-charcoal">Projects</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16 lg:mb-20"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-black mb-4">
              Our Journey
            </h2>
            <div className="w-24 h-px bg-gold mx-auto" />
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Center Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gold/20 transform -translate-x-1/2 hidden md:block" />

            {/* Timeline Items */}
            <div className="space-y-12 md:space-y-16 lg:space-y-24">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Year Circle */}
                  <div className="relative z-10 flex-shrink-0 w-full md:w-32 lg:w-40">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gold/10 rounded-full border-2 border-gold/30 mb-4">
                        <span className="text-xl sm:text-2xl md:text-3xl font-serif text-gold font-bold">
                          {item.year}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 w-full bg-cream p-6 sm:p-8 md:p-10 rounded-lg border border-beige hover:shadow-xl transition-shadow relative z-30">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-black mb-2 md:mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-charcoal leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Center Dot */}
                  <div className="absolute left-1/2 top-8 sm:top-10 md:top-12 transform -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-gold rounded-full hidden md:block z-20" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-16 md:py-24 lg:py-32 bg-beige">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16 lg:mb-20"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-black mb-4">
              Our Philosophy
            </h2>
            <div className="w-24 h-px bg-gold mx-auto mb-4" />
            <p className="text-base md:text-lg text-charcoal max-w-2xl mx-auto px-4">
              The principles that guide every creation, every design, and every moment we share with you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {philosophy.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="bg-white p-6 md:p-8 rounded-lg border border-beige hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="mb-4 md:mb-6 flex justify-center">
                    <div className="p-3 md:p-4 bg-gold/10 rounded-full group-hover:bg-gold/20 transition-colors">
                      <Icon className="w-6 h-6 md:w-8 md:h-8 text-gold" />
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif text-black mb-3 md:mb-4 text-center">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-charcoal leading-relaxed text-center">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* As Seen In Section */}
      <section className="pt-16 md:pt-24 lg:pt-32 pb-0 bg-white">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-black mb-4">
              As Seen In
            </h2>
            <div className="w-24 h-px bg-gold mx-auto mb-4 md:mb-6" />
            <p className="text-base md:text-lg text-charcoal max-w-2xl mx-auto px-4">
              Featured in the world's most prestigious publications and media outlets
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto px-4">
            {mediaLogos.map((media, index) => (
              <motion.div
                key={media.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="flex items-center justify-center p-4 sm:p-6 md:p-8 bg-cream/50 rounded-lg border border-beige/50 hover:border-gold/30 hover:bg-cream transition-all duration-300 group cursor-pointer min-h-[80px] sm:min-h-[100px]"
              >
                <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-serif font-bold text-charcoal group-hover:text-gold transition-colors duration-300 text-center leading-tight">
                  {media.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

