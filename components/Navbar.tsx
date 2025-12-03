'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openCart, getItemCount } = useCartStore();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    {
      name: 'Services',
      href: '#',
      dropdown: [
        { name: 'Fashion', href: '/fashion' },
        { name: 'Interiors', href: '/interiors' },
      ],
    },
    { name: 'Magazine', href: '/magazine' },
    { name: 'Events', href: '/events' },
    { name: 'Masterclass', href: '/masterclass' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="container-luxury">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.span
              className="text-xl sm:text-2xl font-serif text-black"
              whileHover={{ scale: 1.05 }}
            >
              Bea Foster
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.dropdown ? (
                  <div
                    className="flex items-center gap-1 cursor-pointer"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className="text-sm font-medium text-charcoal hover:text-black transition-colors uppercase tracking-wider"
                    >
                      {link.name}
                    </Link>
                    <ChevronDown className="w-4 h-4 text-charcoal" />
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg border border-beige"
                          onMouseEnter={() => setServicesOpen(true)}
                          onMouseLeave={() => setServicesOpen(false)}
                        >
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="block px-6 py-3 text-sm text-charcoal hover:bg-cream hover:text-black transition-colors"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-charcoal hover:text-black transition-colors uppercase tracking-wider"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="/boutique"
              className="ml-4 px-6 py-2 bg-black text-white text-sm font-medium hover:bg-charcoal transition-colors uppercase tracking-wider"
            >
              Shop Boutique
            </Link>
            <button
              onClick={openCart}
              className="relative p-2 hover:bg-cream rounded-lg transition-colors group ml-4"
              aria-label="Shopping cart"
            >
              <ShoppingBag className="w-5 h-5 text-charcoal group-hover:text-black transition-colors" />
              {getItemCount() > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-5 h-5 bg-gold text-black text-xs font-bold rounded-full flex items-center justify-center shadow-lg"
                >
                  {getItemCount() > 9 ? '9+' : getItemCount()}
                </motion.span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button & Cart */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={openCart}
              className="relative p-2 hover:bg-cream rounded-lg transition-colors group"
              aria-label="Shopping cart"
            >
              <ShoppingBag className="w-5 h-5 text-charcoal group-hover:text-black transition-colors" />
              {getItemCount() > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-5 h-5 bg-gold text-black text-xs font-bold rounded-full flex items-center justify-center shadow-lg"
                >
                  {getItemCount() > 9 ? '9+' : getItemCount()}
                </motion.span>
              )}
            </button>
            <button
              className="p-2 hover:bg-cream rounded-lg transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-black" />
              ) : (
                <Menu className="w-6 h-6 text-black" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/50 z-40 top-16 sm:top-20"
            />
            
            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-beige shadow-lg relative z-50"
            >
              <div className="container-luxury py-4 sm:py-6 max-h-[calc(100vh-4rem)] sm:max-h-[calc(100vh-5rem)] overflow-y-auto">
                <div className="space-y-1 sm:space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {link.dropdown ? (
                        <div>
                          <div className="text-xs sm:text-sm font-medium text-charcoal uppercase tracking-wider mb-2 px-2 sm:px-0">
                            {link.name}
                          </div>
                          <div className="pl-3 sm:pl-4 space-y-1.5 sm:space-y-2">
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="block text-sm sm:text-base text-charcoal hover:text-black hover:bg-cream px-2 sm:px-3 py-2 rounded transition-colors"
                                onClick={() => setIsOpen(false)}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          href={link.href}
                          className="block text-sm sm:text-base font-medium text-charcoal hover:text-black hover:bg-cream px-2 sm:px-0 py-2.5 sm:py-3 rounded transition-colors uppercase tracking-wider"
                          onClick={() => setIsOpen(false)}
                        >
                          {link.name}
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </div>
                
                {/* Mobile CTA Buttons */}
                <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-beige space-y-3">
                  <Link
                    href="/boutique"
                    className="block w-full px-6 py-3 bg-black text-white text-sm font-medium text-center hover:bg-charcoal transition-colors uppercase tracking-wider rounded"
                    onClick={() => setIsOpen(false)}
                  >
                    Shop Boutique
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

