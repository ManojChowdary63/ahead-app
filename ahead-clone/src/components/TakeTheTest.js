"use client"
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TakeTheTest = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, 
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div className='w-500'>
        <div
        className={`text-center py-16 bg-white mx-4  sm:mx-8 md:mx-16 lg:mx-32 ${
            isVisible ? 'animate-fade-in-up' : '' 
        }`}
        ref={ref} 
        >
        <p className="text-lg text-black-500">We take privacy seriously.</p>
        <motion.h2
            className={`text-4xl font-bold mt-4 ${isVisible ? 'text-black' : 'text-transparent'}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
            transition={{ duration: 0.5 }}
        >
            Before you get started
        </motion.h2>
        <p
            className={`text-lg mt-4 ${isVisible ? 'text-black' : 'text-transparent'}`}
        >
            "We won't share your answers with anyone (and won't ever tell you which friend said what about you)"
        </p>
        <p className={`text-lg pt-6  mt-4 ${isVisible ? 'text-black' : 'text-transparent'}`}>with love, Team Ahead</p>
        <motion.button
            className={`bg-black text-white rounded-full px-6 py-3 mt-8 text-lg font-semibold hover:bg-gray-900 transition duration-300 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            Start a test
        </motion.button>
        <p className={`text-base text-black-500 py-2 mt-4 ${isVisible ? 'text-black' : 'text-transparent'}`}>It takes only 5 minutes.</p>
        </div>
    </div>
  );
};

export default TakeTheTest;
