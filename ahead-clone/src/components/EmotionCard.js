"use client"
import React from 'react';
import { motion } from 'framer-motion';

const EmotionCard = ({ emoji, phrase, description, color }) => {
  const bgColorClass = `${color}`;

  return (
    <motion.div
      className={`rounded-lg p-4 mx-2 flex flex-col rounded-xl overflow-x-auto hide-scrollbar min-w-[300px] max-w-[350px] h-[200px] shadow-md ${bgColorClass}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="text-2xl font-bold">{emoji}</span>
      <p className="text-lg font-bold mt-2">{phrase}</p>
      <p className="text-gray-600 mt-1">{description}</p>
    </motion.div>
  );
};

export default EmotionCard;
