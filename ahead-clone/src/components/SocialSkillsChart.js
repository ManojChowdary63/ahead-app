"use client"
import React from 'react';
import { motion } from 'framer-motion';

const SocialSkillsChart = () => {
  return (
    <div className="bg-white p-12">
      <div className="text-center bg-blue-200/40 py-16 rounded-3xl">
        <motion.p
          className="text-xl mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Let your friends, family, and co-workers (anonymously) rate your social skills.
        </motion.p>
        <motion.h2
          className="text-5xl font-bold mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Ever wondered what others think of you?
        </motion.h2>
        <div className="flex justify-center py-16">
          <div className="flex flex-col max-w-xs items-center mx-4">
            <div className="w-12 h-12 bg-orange-300 rounded-full flex items-center justify-center">
              <p className="text-lg font-semibold">1</p>
            </div>
            <p className="text-md text-black-500 mt-2">Answer questions on your social skills</p>
          </div>
          <div className="flex flex-col max-w-xs items-center mx-4">
            <div className="w-12 h-12 bg-orange-300 rounded-full flex items-center justify-center">
              <p className="text-lg font-semibold">2</p>
            </div>
            <p className="text-md text-black-500 mt-2">Let others anonymously answer the same questions about you. </p>
          </div>
          <div className="flex flex-col max-w-xs items-center mx-4 relative">
            <div className="w-12 h-12 bg-orange-300 rounded-full flex items-center justify-center">
              <p className="text-lg font-semibold">3</p>
            </div>
            <p className="text-md text-black-500 mt-2">Find out where you and others see things the same way - and where not!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialSkillsChart;
