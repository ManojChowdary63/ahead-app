"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WorkWithUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const animation = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="bg-white py-10 px-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center rounded-lg p-6 bg-purple-300/30">
        <div className="md:w-1/2">
          <h2 className="text-5xl font-bold mb-6 text-left p-8">Work with us </h2>

          {/* About Us Card */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={animation}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full bg-white rounded-lg p-6 mt-6 md:mt-0 md:w-3/5 text-left"
          >
            <h3 className="text-xl font-semibold mb-2">About</h3>
            <p className="text-gray-700">
            At ahead our goal is to make self- improvement fun and lasting. We know there's a way how to make it work. And that's what aHead is all about!
            </p>
          </motion.div>

          {/* Product Card */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={animation}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-full bg-white rounded-lg p-6 mt-6 md:mt-4 md:w-3/5 text-left"
          >
            <h3 className="text-xl font-semibold mb-2">Product</h3>
            <p className="text-gray-700">
            Sure, you could spend ages reading books or sitting in seminars on how to become a better spouse, parent, or manager-like we did...
            </p>
          </motion.div>
        </div>

        <div className="md:w-1/2 mt-6 md:mt-0">
          {/* Info Cards */}
          <div className="w-full  rounded-lg mt-6 md:mt-0 md:w-4/5 p-6">
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={animation}
              transition={{ duration: 1, delay: 0.6 }}
              className="w-full bg-white rounded-lg p-6 md:w-3/5 ml-32 mb-4"
            >
              <h3 className="text-md py-4 font-bold">Power through, even when the going gets tough</h3>
              <p className="text-gray-700 text-sm">
              We help you spot and work around. whatever stands in the way, be it bad habits, fears, etc.
              </p>
            </motion.div>
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={animation}
              transition={{ duration: 1, delay: 0.8 }}
              className="w-full bg-white rounded-lg p-6 md:w-3/5 ml-32 mb-4"
            >
              <h3 className="text-md py-4 font-bold">Learn more about who you are and where you want to go</h3>
              <p className="text-gray-700 text-sm">
              We ask the right questions to help you better understand why you do things the way you do.
              </p>
            </motion.div>
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={animation}
              transition={{ duration: 1, delay: 1 }}
              className="w-full bg-white rounded-lg p-6 ml-32 md:w-3/5"
            >
              <h3 className="text-md py-4 font-bold">Play and grow together with others on the same journey</h3>
              <p className="text-gray-700 text-sm">
              Ahead feels like a game, not like a chore. See yourself grow every day towards achieving your goals!
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkWithUs;
