'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BookOpen } from 'lucide-react';
import Flipbook from './Flipbook';

export default function MagazineFlipbookSection() {
  const [isFlipbookOpen, setIsFlipbookOpen] = useState(false);
  const [selectedIssue, setSelectedIssue] = useState<number | null>(null);

  const issues = [
    {
      title: 'Spring 2024',
      subtitle: 'The Art of Minimalism',
      cover: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80',
      pages: [
        'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=80',
        'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80',
        'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&q=80',
        'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&q=80',
        'https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&q=80',
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80',
      ],
    },
    {
      title: 'Winter 2023',
      subtitle: 'Luxury Redefined',
      cover: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80',
      pages: [
        'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&q=80',
        'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&q=80',
        'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&q=80',
        'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80',
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80',
        'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
      ],
    },
  ];

  const openFlipbook = (index: number) => {
    setSelectedIssue(index);
    setIsFlipbookOpen(true);
  };

  return (
    <>
      <section className="py-32 bg-cream">
        <div className="container-luxury">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-serif text-black text-center mb-16"
          >
            Magazine Highlights
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {issues.map((issue, index) => (
              <motion.div
                key={issue.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <div className="relative h-96 overflow-hidden bg-charcoal">
                  <Image
                    src={issue.cover}
                    alt={issue.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <p className="text-sm uppercase tracking-wider mb-2 opacity-80">
                      {issue.title}
                    </p>
                    <h3 className="text-3xl font-serif mb-4">{issue.subtitle}</h3>
                    <button
                      onClick={() => openFlipbook(index)}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-medium transition-all uppercase tracking-wider group/btn"
                    >
                      <BookOpen className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                      Read Digital Flipbook
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/magazine"
              className="inline-flex items-center gap-2 text-charcoal hover:text-black transition-colors uppercase tracking-wider"
            >
              View All Issues
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {selectedIssue !== null && (
        <Flipbook
          isOpen={isFlipbookOpen}
          onClose={() => {
            setIsFlipbookOpen(false);
            setTimeout(() => setSelectedIssue(null), 300);
          }}
          pages={issues[selectedIssue].pages}
        />
      )}
    </>
  );
}

