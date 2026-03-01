'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const magazines = [
  { year: '2017', title: '2017 Magazine', pdf: '/2017_mag.pdf' },
  { year: '2018', title: '2018 Magazine', pdf: '/2018_mag.pdf' },
];

export default function MagazineFlipbookSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-cream">
      <div className="container-luxury">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-6xl font-serif text-black text-center mb-8 sm:mb-12"
        >
          Magazine
        </motion.h2>
        <div className="w-20 h-px bg-gold mx-auto mb-8 sm:mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-2xl mx-auto">
          {magazines.map((mag, index) => (
            <motion.a
              key={mag.year}
              href={mag.pdf}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="group block"
            >
              <div className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden rounded-lg bg-white border-2 border-beige group-hover:border-gold transition-all duration-300 hover:shadow-xl">
                <iframe
                  src={`${mag.pdf}#page=1`}
                  title={mag.title}
                  className="absolute inset-0 w-full h-full pointer-events-none border-0"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="text-lg font-serif font-bold">{mag.year}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium uppercase tracking-wider opacity-90 group-hover:opacity-100 transition-opacity">
                    Open PDF
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
              <p className="text-center mt-3 text-base font-serif text-black">
                {mag.title}
              </p>
            </motion.a>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10 sm:mt-12"
        >
          <Link
            href="/magazine"
            className="inline-flex items-center gap-2 text-charcoal hover:text-black transition-colors uppercase tracking-wider text-sm font-medium"
          >
            View Archives
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

