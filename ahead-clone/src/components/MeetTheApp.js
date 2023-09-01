"use client"
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const MeetTheApp = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, 
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          contentRef.current.style.visibility = 'visible';
          contentRef.current.classList.add('animate-slide-left'); 
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-white-100 px-16 py-6 md:p-12 rounded-lg">
      <motion.div
        ref={sectionRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-orange-100/50 p-16 md:p-20 rounded-3xl"
      >
        <h2 className="text-sm md:text-lg py-4 font-bold mb-3">Built out of frustration</h2>
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Meet the ahead App</h1>
        <div
          ref={contentRef}
          className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center md:space-x-12"
          style={{ visibility: 'hidden' }}
        >
          <div className="md:flex-1 flex px-16 py-10">
            <Image
              src="/images/emotion-list-bg-left.png" 
              alt="Company Mascot"
              width={150}
              height={200}
            />
            <Image
              src="/images/emotion-list-bg-right.png" 
              alt="Company Mascot"
              width={150}
              height={200}
            />
          </div>
          <div className="md:flex-1 max-w-md justify-center">
            <p className="text-base md:text-lg mb-2 text-gray-800">
              A personalised pocket coach that provides bite-sized, science-driven tools to boost emotional intelligence.
            </p>
            <p className="text-base md:text-lg text-gray-800">
              Think of it as a pocket cheerleader towards a better, more fulfilling life.
            </p>
          </div>
          <div className="flex px-16"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default MeetTheApp;
