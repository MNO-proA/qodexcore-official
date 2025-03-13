import React from 'react';
import { motion } from 'framer-motion';

const AnimatedPricing = ({ originalPrice, promoPrice }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-1">
      {/* Original price with strikethrough */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <span className="text-lg text-gray-500 line-through">{originalPrice}</span>
        <motion.div 
          className="absolute top-1/2 left-0 w-full h-0.5 bg-red-500 transform -translate-y-1/2"
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        />
      </motion.div>

      {/* Promotional price with badge */}
      <motion.div
        className="flex items-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <span className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-pink-600 bg-clip-text text-transparent">
          {promoPrice}
        </span>
        <motion.div
          className="ml-2 px-2 py-1 bg-gradient-to-r from-teal-600 to-pink-600 rounded-full text-white text-xs font-bold"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          PROMO
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AnimatedPricing;