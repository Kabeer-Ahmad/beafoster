'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { X, Plus, Minus, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';

export default function Cart() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, getTotal, getItemCount } = useCartStore();

  return (
    <>
      {/* Sliding Side Cart */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeCart}
              className="fixed inset-0 bg-black/50 z-[100]"
            />

            {/* Side Cart */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 h-full w-full sm:w-96 md:w-[450px] bg-white shadow-2xl z-[101] flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-beige bg-cream">
                <div>
                  <h2 className="text-xl sm:text-2xl font-serif text-black mb-1">
                    Shopping Cart
                  </h2>
                  {items.length > 0 && (
                    <p className="text-xs sm:text-sm text-charcoal">
                      {getItemCount()} {getItemCount() === 1 ? 'item' : 'items'}
                    </p>
                  )}
                </div>
                <button
                  onClick={closeCart}
                  className="p-2 hover:bg-beige rounded-lg transition-colors group"
                  aria-label="Close cart"
                >
                  <X className="w-5 h-5 text-charcoal group-hover:text-black transition-colors" />
                </button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 min-h-0">
                {items.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center justify-center h-full text-center px-4"
                  >
                    <div className="w-24 h-24 sm:w-32 sm:h-32 bg-cream rounded-full flex items-center justify-center mb-6">
                      <ShoppingBag className="w-12 h-12 sm:w-16 sm:h-16 text-charcoal/30" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-serif text-black mb-2">Your cart is empty</h3>
                    <p className="text-sm sm:text-base text-charcoal mb-6 max-w-xs">
                      Start adding items to your cart to see them here
                    </p>
                    <Link
                      href="/boutique"
                      onClick={closeCart}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white hover:bg-charcoal transition-colors text-sm uppercase tracking-wider"
                    >
                      Continue Shopping
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                ) : (
                  <div className="space-y-3 sm:space-y-4">
                    {items.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20, scale: 0.9 }}
                        transition={{ delay: index * 0.05 }}
                        className="group flex gap-3 sm:gap-4 p-3 sm:p-4 bg-cream border border-beige hover:border-gold transition-colors"
                      >
                        <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 bg-charcoal overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm sm:text-base font-serif text-black mb-1.5 truncate">
                            {item.name}
                          </h3>
                          <p className="text-base sm:text-lg font-serif text-black mb-2">
                            ${item.price.toLocaleString()}
                          </p>
                          {item.quantity > 1 && (
                            <p className="text-xs text-charcoal mb-2">
                              Subtotal: ${(item.price * item.quantity).toLocaleString()}
                            </p>
                          )}
                          <div className="flex items-center gap-2 sm:gap-3">
                            {/* Quantity Controls */}
                            <div className="flex items-center border border-beige bg-white">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="p-1.5 sm:p-2 hover:bg-beige transition-colors group/btn"
                                aria-label="Decrease quantity"
                              >
                                <Minus className="w-3 h-3 sm:w-4 sm:h-4 text-charcoal group-hover/btn:text-black transition-colors" />
                              </button>
                              <span className="w-8 sm:w-10 text-center text-sm sm:text-base text-black font-medium">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="p-1.5 sm:p-2 hover:bg-beige transition-colors group/btn"
                                aria-label="Increase quantity"
                              >
                                <Plus className="w-3 h-3 sm:w-4 sm:h-4 text-charcoal group-hover/btn:text-black transition-colors" />
                              </button>
                            </div>
                            {/* Remove Button */}
                            <button
                              onClick={() => removeItem(item.id)}
                              className="p-1.5 sm:p-2 hover:bg-red-50 transition-colors rounded"
                              aria-label="Remove item"
                            >
                              <Trash2 className="w-4 h-4 sm:w-5 sm:h-5 text-charcoal hover:text-red-600 transition-colors" />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              {items.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border-t border-beige p-4 sm:p-6 bg-cream space-y-4"
                >
                  {/* Subtotal */}
                  <div className="flex items-center justify-between text-sm text-charcoal">
                    <span>Subtotal</span>
                    <span className="font-medium">${getTotal().toLocaleString()}</span>
                  </div>
                  
                  {/* Total */}
                  <div className="flex items-center justify-between pt-3 border-t border-beige">
                    <span className="text-base sm:text-lg font-medium text-black">Total</span>
                    <span className="text-2xl sm:text-3xl font-serif text-black">
                      ${getTotal().toLocaleString()}
                    </span>
                  </div>

                  {/* Buttons */}
                  <div className="space-y-2 sm:space-y-3 pt-2">
                    <button
                      onClick={() => {
                        // Handle checkout
                        console.log('Checkout');
                      }}
                      className="w-full px-6 py-3 sm:py-4 bg-black text-white hover:bg-charcoal transition-colors text-sm sm:text-base uppercase tracking-wider flex items-center justify-center gap-2 group"
                    >
                      Proceed to Checkout
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <Link
                      href="/boutique"
                      onClick={closeCart}
                      className="block w-full px-6 py-3 text-center border-2 border-black text-black hover:bg-black hover:text-white transition-colors text-sm sm:text-base uppercase tracking-wider"
                    >
                      Continue Shopping
                    </Link>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

