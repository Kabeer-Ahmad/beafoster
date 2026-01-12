'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { Search, X } from 'lucide-react';
import Link from 'next/link';

export default function Boutique() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'fashion', name: 'Fashion' },
    { id: 'accessories', name: 'Accessories' },
    { id: 'home', name: 'Home' },
  ];

  const products = [
    // Fashion
    { id: 'BSBeanie.jpg', name: 'Beanie', price: 0, category: 'fashion', image: '/BSPORTY/BSBeanie.jpg', description: 'Exclusive B. Sporty Collection' },
    { id: 'BSHatB', name: 'Hat B', price: 0, category: 'fashion', image: '/BSPORTY/BSHatB/classic-dad-hat-black-front-6931c9111da74.jpg', description: 'Exclusive B. Sporty Collection' },
    { id: 'BSHatW', name: 'Hat W', price: 0, category: 'fashion', image: '/BSPORTY/BSHatW/classic-dad-hat-white-front-6931c98e7f671.jpg', description: 'Exclusive B. Sporty Collection' },
    { id: 'BSHOODIEB', name: 'Hoodie B', price: 0, category: 'fashion', image: '/BSPORTY/BSHOODIEB/unisex-heavy-blend-hoodie-black-front-6952cd1a5f854.jpg', description: 'Exclusive B. Sporty Collection' },
    { id: 'BSHOODIEW', name: 'Hoodie W', price: 0, category: 'fashion', image: '/BSPORTY/BSHOODIEW/unisex-heavy-blend-hoodie-white-front-6952c9970d36a.jpg', description: 'Exclusive B. Sporty Collection' },
    { id: 'BSHoddieB', name: 'Hoddie B', price: 0, category: 'fashion', image: '/BSPORTY/BSHoddieB/unisex-eco-raglan-hoodie-black-front-6932533ecd0c8.jpg', description: 'Exclusive B. Sporty Collection' },
    { id: 'BSLongSleeveB', name: 'Long Sleeve B', price: 0, category: 'fashion', image: '/BSPORTY/BSLongSleeveB/unisex-garment-dyed-heavyweight-long-sleeve-shirt-black-front-6931c719aa2c6.jpg', description: 'Exclusive B. Sporty Collection' },
    { id: 'BSLongSleeveBB', name: 'Long Sleeve B B', price: 0, category: 'fashion', image: '/BSPORTY/BSLongSleeveBB/unisex-garment-dyed-heavyweight-long-sleeve-shirt-black-front-6931c7ce49e79.jpg', description: 'Exclusive B. Sporty Collection' },
    { id: 'BSLongSleeveWB', name: 'Long Sleeve W B', price: 0, category: 'fashion', image: '/BSPORTY/BSLongSleeveWB/unisex-garment-dyed-heavyweight-long-sleeve-shirt-white-front-6931c81949a35.jpg', description: 'Exclusive B. Sporty Collection' },
    { id: 'BSMenSlides', name: 'Men Slides', price: 0, category: 'fashion', image: '/BSPORTY/BSMenSlides/mens-slides-black-front-2-6931c9ce5eec9.jpg', description: 'Exclusive B. Sporty Collection' },
    { id: 'BSSocksB', name: 'Socks B', price: 0, category: 'fashion', image: '/BSPORTY/BSSocksB/embroidered-crew-socks-black-left-6931ca46cc7aa.jpg', description: 'Exclusive B. Sporty Collection' },
    { id: 'BSSocksW', name: 'Socks W', price: 0, category: 'fashion', image: '/BSPORTY/BSSocksW/embroidered-crew-socks-white-left-6931ca6361ff0.jpg', description: 'Exclusive B. Sporty Collection' },
    { id: 'BSSportsBraW', name: 'Sports Bra W', price: 0, category: 'fashion', image: '/BSPORTY/BSSportsBraW/all-over-print-padded-sports-bra-white-front-6931cc0c63816.jpg', description: 'Exclusive B. Sporty Collection' },
    { id: 'BSSportsBraZBPipping', name: 'Sports Bra Z B Pipping', price: 0, category: 'fashion', image: '/BSPORTY/BSSportsBraZBPipping/all-over-print-padded-sports-bra-black-front-6931cc8b798b3.jpg', description: 'Exclusive B. Sporty Collection' },
    { id: 'BSSportsBraZWPipping', name: 'Sports Bra Z W Pipping', price: 0, category: 'fashion', image: '/BSPORTY/BSSportsBraZWPipping/all-over-print-padded-sports-bra-white-front-6931cc5668900.jpg', description: 'Exclusive B. Sporty Collection' },
    { id: 'BSSweatpantsB', name: 'Sweatpants B', price: 0, category: 'fashion', image: '/BSPORTY/BSSweatpantsB/unisex-fleece-sweatpants-black-front-6931c86884b88.jpg', description: 'Exclusive B. Sporty Collection' },
    { id: 'BSSweatpantsW', name: 'Sweatpants W', price: 0, category: 'fashion', image: '/BSPORTY/BSSweatpantsW/unisex-fleece-sweatpants-white-front-6931c8a989c91.jpg', description: 'Exclusive B. Sporty Collection' },
    { id: 'BSWideSweatpantsBackB', name: 'Wide Sweatpants Back B', price: 0, category: 'fashion', image: '/BSPORTY/BSWideSweatpantsBackB/all-over-print-unisex-wide-leg-pants-white-front-695d3e75373ca.jpg', description: 'Exclusive B. Sporty Collection' },
    { id: 'BSWideSweatpantsBackW', name: 'Wide Sweatpants Back W', price: 0, category: 'fashion', image: '/BSPORTY/BSWideSweatpantsBackW/all-over-print-unisex-wide-leg-pants-white-front-695d3eb6a8c94.jpg', description: 'Exclusive B. Sporty Collection' },
    { id: 'BSWideSweatpantsFrontB', name: 'Wide Sweatpants Front B', price: 0, category: 'fashion', image: '/BSPORTY/BSWideSweatpantsFrontB/all-over-print-unisex-wide-leg-pants-white-front-695d3da4c96ee.jpg', description: 'Exclusive B. Sporty Collection' },
    { id: 'BSWideSweatpantsFrontW', name: 'Wide Sweatpants Front W', price: 0, category: 'fashion', image: '/BSPORTY/BSWideSweatpantsFrontW/all-over-print-unisex-wide-leg-pants-white-front-695d3d1b7d0fe.jpg', description: 'Exclusive B. Sporty Collection' },
    { id: 'BSWomenSlides', name: 'Women Slides', price: 0, category: 'fashion', image: '/BSPORTY/BSWomenSlides/womens-slides-white-front-2-6931c9fb90653.jpg', description: 'Exclusive B. Sporty Collection' },
    { id: 'BSZipHoddieB', name: 'Zip Hoddie B', price: 0, category: 'fashion', image: '/BSPORTY/BSZipHoddieB/unisex-heavy-blend-zip-hoodie-black-front-6932509c2f92f.jpg', description: 'Exclusive B. Sporty Collection' },
    { id: 'BSZipHoddieEB', name: 'Zip Hoddie E B', price: 0, category: 'fashion', image: '/BSPORTY/BSZipHoddieEB/unisex-heavy-blend-zip-hoodie-black-front-693251567724d.jpg', description: 'Exclusive B. Sporty Collection' },
    { id: 'BSZipHoddieLeftW', name: 'Zip Hoddie Left W', price: 0, category: 'fashion', image: '/BSPORTY/BSZipHoddieLeftW/unisex-heavy-blend-zip-hoodie-white-front-693250e938979.jpg', description: 'Exclusive B. Sporty Collection' },
    { id: 'BSZipHoddieW', name: 'Zip Hoddie W', price: 0, category: 'fashion', image: '/BSPORTY/BSZipHoddieW/unisex-heavy-blend-zip-hoodie-white-front-693252cceaaed.jpg', description: 'Exclusive B. Sporty Collection' },

    // Accessories
    { id: 'BSDuffleAB', name: 'Duffle A B', price: 0, category: 'accessories', image: '/BSPORTY/BSDuffleAB/all-over-print-duffle-bag-white-front-6931db0dbfbfd.jpg', description: 'Exclusive B. Sporty Collection' },
    { id: 'BSDuffleATB', name: 'Duffle A T B', price: 0, category: 'accessories', image: '/BSPORTY/BSDuffleATB/all-over-print-duffle-bag-white-front-6931dbfd1baf2.jpg', description: 'Exclusive B. Sporty Collection' },
    { id: 'BSDuffleAW', name: 'Duffle A W', price: 0, category: 'accessories', image: '/BSPORTY/BSDuffleAW/all-over-print-duffle-bag-white-front-6931db9078cf4.jpg', description: 'Exclusive B. Sporty Collection' },
    { id: 'BSDuffleB', name: 'Duffle B', price: 0, category: 'accessories', image: '/BSPORTY/BSDuffleB/all-over-print-duffle-bag-white-front-6931db62de613.jpg', description: 'Exclusive B. Sporty Collection' },
    { id: 'BSDuffleW', name: 'Duffle W', price: 0, category: 'accessories', image: '/BSPORTY/BSDuffleW/all-over-print-duffle-bag-white-front-6931dbc5e2e8e.jpg', description: 'Exclusive B. Sporty Collection' },
    { id: 'BSFannyB', name: 'Fanny B', price: 0, category: 'accessories', image: '/BSPORTY/BSFannyB/all-over-print-fanny-pack-white-front-6931e52bb839e.jpg', description: 'Exclusive B. Sporty Collection' },
    { id: 'BSFannyCB', name: 'Fanny C B', price: 0, category: 'accessories', image: '/BSPORTY/BSFannyCB/all-over-print-fanny-pack-white-front-6931e5654ee05.jpg', description: 'Exclusive B. Sporty Collection' },
    { id: 'BSFannyLogoB', name: 'Fanny Logo B', price: 0, category: 'accessories', image: '/BSPORTY/BSFannyLogoB/all-over-print-fanny-pack-white-front-6931e4fa05b62.jpg', description: 'Exclusive B. Sporty Collection' },
    { id: 'BSFannyLogoW', name: 'Fanny Logo W', price: 0, category: 'accessories', image: '/BSPORTY/BSFannyLogoW/all-over-print-fanny-pack-white-front-6931e4c697211.jpg', description: 'Exclusive B. Sporty Collection' },
    { id: 'BSToteB', name: 'Tote B', price: 0, category: 'accessories', image: '/BSPORTY/BSToteB/all-over-print-large-tote-bag-w-pocket-black-front-6931cac8c000a.jpg', description: 'Exclusive B. Sporty Collection' },
    { id: 'BSToteZ', name: 'Tote Z', price: 0, category: 'accessories', image: '/BSPORTY/BSToteZ/all-over-print-large-tote-bag-w-pocket-black-front-6931cb1573644.jpg', description: 'Exclusive B. Sporty Collection' },
    { id: 'BSTumblerLogoB', name: 'Tumbler Logo B', price: 0, category: 'accessories', image: '/BSPORTY/BSTumblerLogoB/stainless-steel-tumbler-black-front-6931dea66be41.jpg', description: 'Exclusive B. Sporty Collection' },
    { id: 'BSTumblerLogoW', name: 'Tumbler Logo W', price: 0, category: 'accessories', image: '/BSPORTY/BSTumblerLogoW/stainless-steel-tumbler-white-front-6931df342177a.jpg', description: 'Exclusive B. Sporty Collection' },
    { id: 'BSWaterBottleW', name: 'Water Bottle W', price: 0, category: 'accessories', image: '/BSPORTY/BSWaterBottleW/stainless-steel-water-bottle-with-a-straw-lid-white-32-oz-front-6931de2e6d9a2.jpg', description: 'Exclusive B. Sporty Collection' },
    { id: 'BSWaterBottleWLogo', name: 'Water Bottle W Logo', price: 0, category: 'accessories', image: '/BSPORTY/BSWaterBottleWLogo/stainless-steel-water-bottle-with-a-straw-lid-white-32-oz-front-6931de6326b66.jpg', description: 'Exclusive B. Sporty Collection' },

    // Home
    { id: 'BSBlanketBoxW', name: 'Blanket Box W', price: 0, category: 'home', image: '/BSPORTY/BSBlanketBoxW/throw-blanket-50x60-front-6931dd58613a8.jpg', description: 'Exclusive B. Sporty Collection' },
    { id: 'BSBlanketLogoW', name: 'Blanket Logo W', price: 0, category: 'home', image: '/BSPORTY/BSBlanketLogoW/throw-blanket-50x60-front-6931df78d2f9b.jpg', description: 'Exclusive B. Sporty Collection' },
    { id: 'BSBlanketSW', name: 'Blanket S W', price: 0, category: 'home', image: '/BSPORTY/BSBlanketSW/throw-blanket-50x60-front-6931ddb382e81.jpg', description: 'Exclusive B. Sporty Collection' },
    { id: 'BSBlanketW', name: 'Blanket W', price: 0, category: 'home', image: '/BSPORTY/BSBlanketW/throw-blanket-50x60-front-6931dd152c36a.jpg', description: 'Exclusive B. Sporty Collection' },
    { id: 'BSBlanketZ', name: 'Blanket Z', price: 0, category: 'home', image: '/BSPORTY/BSBlanketZ/throw-blanket-60x80-front-6931cb5d69f41.jpg', description: 'Exclusive B. Sporty Collection' },
    { id: 'BSHandsoap', name: 'Handsoap', price: 0, category: 'home', image: '/BSPORTY/BSHandsoap/refreshing-hand--body-lotion-white-front-6931dad309b5b.jpg', description: 'Exclusive B. Sporty Collection' },
    { id: 'BSMugBS', name: 'Mug B S', price: 0, category: 'home', image: '/BSPORTY/BSMugBS/enamel-mug-white-12-oz-front-6931cba939d13.jpg', description: 'Exclusive B. Sporty Collection' },
    { id: 'BSMugW', name: 'Mug W', price: 0, category: 'home', image: '/BSPORTY/BSMugW/enamel-mug-white-12-oz-front-6931cb866b8fa.jpg', description: 'Exclusive B. Sporty Collection' },
    { id: 'BSMugWS', name: 'Mug W S', price: 0, category: 'home', image: '/BSPORTY/BSMugWS/enamel-mug-white-12-oz-front-6931cbc72d87b.jpg', description: 'Exclusive B. Sporty Collection' },
    { id: 'BSPillowB', name: 'Pillow B', price: 0, category: 'home', image: '/BSPORTY/BSPillowB/all-over-print-basic-pillow-18x18-front-6931ccc50feb6.jpg', description: 'Exclusive B. Sporty Collection' },
    { id: 'BSPillowBB', name: 'Pillow B B', price: 0, category: 'home', image: '/BSPORTY/BSPillowBB/all-over-print-premium-pillow-18x18-front-6931da7242f9c.jpg', description: 'Exclusive B. Sporty Collection' },
    { id: 'BSPillowW', name: 'Pillow W', price: 0, category: 'home', image: '/BSPORTY/BSPillowW/all-over-print-basic-pillow-18x18-front-6931dc428fc52.jpg', description: 'Exclusive B. Sporty Collection' },
    { id: 'BSPoster', name: 'Poster', price: 0, category: 'home', image: '/BSPORTY/BSPoster/matte-paper-framed-poster-with-mat-(in)-black-12x16-front-6931ddf2bc22e.jpg', description: 'Exclusive B. Sporty Collection' },
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = searchQuery === '' ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[30vh] sm:min-h-[35vh] overflow-hidden bg-cream">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cream via-white to-cream" />
          {/* Decorative Pattern */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl opacity-50" />
        </div>
        <div className="relative h-full flex items-center justify-center py-12 sm:py-16">
          <div className="container-luxury w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto px-4 sm:px-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-block mb-3 sm:mb-4"
              >
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-gold font-medium">
                  Exclusive Collection
                </span>
              </motion.div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-black mb-4 leading-tight">
                B. Sporty
              </h1>
              <div className="w-16 h-px bg-gold/50 mx-auto mb-4" />
              <p className="text-sm sm:text-base text-charcoal/80 leading-relaxed max-w-lg mx-auto font-light">
                Elevate your style with our exclusive sportswear and lifestyle collection
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
                placeholder="Search collection..."
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
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 ${selectedCategory === category.id
                  ? 'bg-black text-white shadow-md'
                  : 'bg-white text-charcoal border border-beige hover:border-gold hover:text-black'
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
            <div className="flex items-center justify-between mb-2 sm:mb-4 px-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-black">
                {selectedCategory === 'all' ? 'All Items' : `${categories.find(c => c.id === selectedCategory)?.name}`}
              </h2>
              <p className="text-sm sm:text-base text-charcoal bg-cream px-3 py-1 rounded-full">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'item' : 'items'}
              </p>
            </div>
            <div className="w-full h-px bg-beige" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="group"
              >
                <div className="bg-white hover:shadow-2xl transition-all duration-500 h-full flex flex-col overflow-hidden border border-transparent hover:border-beige/50 rounded-sm">
                  <div className="relative aspect-square overflow-hidden bg-cream/30">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Badge */}
                    <div className="absolute top-2 left-2">
                      <span className="bg-white/90 backdrop-blur text-[10px] uppercase tracking-wider px-2 py-1 text-black border border-beige">
                        Exclusive
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-grow text-center">
                    <div className="mb-2">
                      <span className="text-[10px] uppercase tracking-widest text-gold font-medium">
                        {product.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-serif text-black mb-2 leading-tight group-hover:text-gold transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-charcoal/70 mb-4 flex-grow line-clamp-2">
                      {product.description}
                    </p>
                    <div className="pt-4 border-t border-beige/30 w-full">
                      <Link
                        href="/contact"
                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-black text-white hover:bg-gold hover:text-white transition-all duration-300 text-xs uppercase tracking-widest font-medium group-hover:shadow-lg"
                      >
                        Contact to Purchase
                      </Link>
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

