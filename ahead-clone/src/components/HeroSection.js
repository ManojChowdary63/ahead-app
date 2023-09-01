"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <>
    <div className='flex py-6'></div>
    <div className="bg-white-100 px-16 py-6 md:p-12 rounded-lg ">
      <section className="bg-purple-100 rounded-3xl overflow-hidden w-full pt-16 pb-12 px-8 md:h-[650px]  lg:px-16">
        
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col lg:flex-row z-10 py-14 items-center"
          >
            <div className="lg:w-1/2 lg:pr-12">
              <h2 className="text-2xl text-gray-800 mb-4">Ahead App</h2>
              <motion.h1
                className="text-5xl md:text-6xl text-black font-bold mb-8 lg:w-10/12"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Master Your Life by Mastering Emotions
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Image src="/images/app-store.svg" alt="Download from App Store" width={200} height={100} />
              </motion.div>
            </div>
            <div className="lg:w-1/2 mt-6 lg:mt-0 lg:pl-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="w-full h-72 flex items-center justify-center "
              >
                <Image src="/images/image.svg" alt="App Snapshot" width={600} height={450} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
};

export default HeroSection;
