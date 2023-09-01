"use client"
import React from 'react';
import { motion } from 'framer-motion';

const EQOverIQ = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="bg-white rounded-xl mt-12 p-8 md:px-16 py-16 flex items-start"
    >
      <h2 className="text-2xl md:text-3xl font-bold mr-6 mb-2 md:mb-0 w-96 px-16 py-16">EQ beats IQ</h2>
      <div className="flex-1 flex flex-col md:flex-row px-16 py-16">
        <p className="text-black text-lg mb-1 md:mb-0 md:max-w-sm px-16">
        People with high Emotional Intelligence (EQ) live more fulfilled lives. They tend to be happier and have healthier relationships.
        </p>
        <p className="text-black mb-1 text-lg md:mb-0 md:max-w-sm px-16">
        They are more successful in their pursuits and make for inspiring leaders. According to science, they earn $29k more per year.  
        </p>
      </div>
    </motion.div>
  );
};

export default EQOverIQ;
