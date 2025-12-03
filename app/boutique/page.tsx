'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { ShoppingBag, Filter, Plus, Heart, Search, X } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';

export default function Boutique() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showAddedNotification, setShowAddedNotification] = useState<string | null>(null);
  const addItem = useCartStore((state) => state.addItem);

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'fashion', name: 'Fashion' },
    { id: 'accessories', name: 'Accessories' },
    { id: 'home', name: 'Home' },
    { id: 'books', name: 'Books' },
  ];

  const products = [
    {
      id: 1,
      name: 'Luxury Silk Scarf',
      price: 285,
      category: 'accessories',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80',
      description: 'Handcrafted silk scarf with elegant patterns',
    },
    {
      id: 2,
      name: 'Couture Evening Dress',
      price: 2500,
      category: 'fashion',
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80',
      description: 'Bespoke evening gown in luxurious fabric',
    },
    {
      id: 3,
      name: 'Designer Handbag',
      price: 1200,
      category: 'accessories',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80',
      description: 'Premium leather handbag with gold hardware',
    },
    {
      id: 4,
      name: 'Luxury Candle Set',
      price: 95,
      category: 'home',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&q=80',
      description: 'Set of three artisanal scented candles',
    },
    {
      id: 5,
      name: 'Bea Foster Magazine Collection',
      price: 45,
      category: 'books',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=80',
      description: 'Complete collection of our magazine issues',
    },
    {
      id: 6,
      name: 'Cashmere Wrap',
      price: 450,
      category: 'fashion',
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80',
      description: 'Ultra-soft cashmere wrap in classic beige',
    },
    {
      id: 7,
      name: 'Designer Sunglasses',
      price: 320,
      category: 'accessories',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80',
      description: 'Luxury sunglasses with UV protection',
    },
    {
      id: 8,
      name: 'Artisan Vase Collection',
      price: 180,
      category: 'home',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
      description: 'Handcrafted ceramic vases in minimalist design',
    },
    {
      id: 9,
      name: 'Silk Pillow Set',
      price: 165,
      category: 'home',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
      description: 'Set of two silk pillowcases for luxury sleep',
    },
    {
      id: 10,
      name: 'Designer Jewelry Box',
      price: 220,
      category: 'accessories',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80',
      description: 'Elegant jewelry storage with velvet interior',
    },
    {
      id: 11,
      name: 'Luxury Perfume Set',
      price: 195,
      category: 'accessories',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80',
      description: 'Exclusive fragrance collection in gift set',
    },
    {
      id: 12,
      name: 'Coffee Table Book',
      price: 75,
      category: 'books',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80',
      description: 'Luxury interior design photography book',
    },
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openCart = useCartStore((state) => state.openCart);

  const handleAddToCart = (product: typeof products[0]) => {
    addItem({
      id: product.id.toString(),
      name: product.name,
      price: product.price,
      image: product.image,
    });
    
    // Show notification
    setShowAddedNotification(product.id.toString());
    setTimeout(() => {
      setShowAddedNotification(null);
    }, 2000);

    // Open cart automatically
    openCart();
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
        <div className="relative h-full flex items-center py-8 sm:py-12 md:py-16 lg:py-24">
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
                  Curated Collection
                </span>
              </motion.div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-black mb-4 sm:mb-6 leading-tight">
                Boutique
              </h1>
              <div className="w-20 sm:w-24 h-px bg-gold mx-auto mb-4 sm:mb-6" />
              <p className="text-base sm:text-lg md:text-xl text-charcoal leading-relaxed px-2">
                Discover our carefully curated selection of luxury fashion, accessories, and home essentials
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-4 sm:py-6 md:py-8 lg:py-12 bg-white border-b border-beige sticky top-20 z-40 backdrop-blur-sm bg-white/95">
        <div className="container-luxury">
          {/* Search Bar */}
          <div className="mb-4 sm:mb-6 px-4">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-charcoal" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 sm:pl-12 pr-10 sm:pr-12 py-2.5 sm:py-3 md:py-3.5 bg-cream border border-beige focus:border-gold focus:outline-none transition-colors text-sm sm:text-base text-black placeholder-charcoal/50"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-charcoal hover:text-black transition-colors"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Category Filters */}
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

      {/* Products Grid */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
        <div className="container-luxury px-4 sm:px-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-12"
          >
            <div className="flex items-center justify-between mb-2 sm:mb-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-black">
                {selectedCategory === 'all' ? 'All Products' : `${categories.find(c => c.id === selectedCategory)?.name}`}
              </h2>
              <p className="text-sm sm:text-base text-charcoal">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'item' : 'items'}
              </p>
            </div>
            <div className="w-16 sm:w-20 h-px bg-gold" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="group"
              >
                <div className="bg-cream border border-beige hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                  <div className="relative aspect-square overflow-hidden bg-charcoal">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="w-8 h-8 sm:w-10 sm:h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-colors">
                        <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-charcoal" />
                      </button>
                    </div>
                  </div>
                  <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow">
                    <div className="mb-2">
                      <span className="inline-block px-2 py-1 bg-white text-xs uppercase tracking-wider text-charcoal">
                        {product.category}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-serif text-black mb-2 leading-tight">
                      {product.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-charcoal mb-3 sm:mb-4 flex-grow leading-relaxed">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-beige">
                      <p className="text-xl sm:text-2xl font-serif text-black">
                        ${product.price.toLocaleString()}
                      </p>
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="group/btn relative flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-black text-white hover:bg-charcoal transition-colors text-xs sm:text-sm uppercase tracking-wider disabled:opacity-50"
                      >
                        {showAddedNotification === product.id.toString() ? (
                          <>
                            <span className="text-xs sm:text-sm">Added!</span>
                          </>
                        ) : (
                          <>
                            <ShoppingBag className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span className="hidden sm:inline">Add</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

