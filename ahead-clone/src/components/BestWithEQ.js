"use client"
import React from 'react';
import { motion } from 'framer-motion';

const BestWithEQ = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="bg-white rounded-xl mt-12 p-8 md:px-16 py-16 flex items-start"
    >
      <h2 className="text-2xl md:text-3xl font-bold mr-6 mb-2 md:mb-0 w-96 px-16 py-16">Be the best you with EQ</h2>
      <div className="flex-1 flex flex-col md:flex-row px-16 py-16">
        <p className="text-black text-lg mb-1 md:mb-0 md:max-w-sm px-16">
          Not having emotions under control might be holding you back.
        </p>
        <p className="text-black mb-1 text-lg md:mb-0 md:max-w-sm px-16">
          Aditionally, not understanding those of others stop you from being parent, friend you can be.  
        </p>
      </div>
    </motion.div>
  );
};

export default BestWithEQ;