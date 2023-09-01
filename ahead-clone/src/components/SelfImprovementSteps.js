"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { FaCar, FaHeartbeat, FaTools, FaBook, FaRocket } from 'react-icons/fa';

const SelfImprovementSteps = () => {
    const steps = [
        { title: "It's not easy as 1-2-3", description: 'The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else).', icon: <FaCar color="#F76F8E" size={24} /> },
        { title: 'Old habits are hard to break.', description: 'And bad behaviors die hard. Fortunately, we give you great, science-backed techniques to use.', icon: <FaHeartbeat color="#FFB74D" size={24} /> },
        { title: "You and your motivation don't have a long-term relationship.", description: 'Luckily, we can proactively prepare you for the marathon, not just the race. Effective, memorable exercises will help you stick to your goals.', icon: <FaTools color="#FF6F61" size={24} /> },
        { title: "Books just don't offer practical solutions.", description: "Remember when you learned to ride a bike just by reading? Yeah, we don't either. We help you take concrete small steps towards your goals. Learning just a bit, then immediately springing into action.", icon: <FaBook color="#AF89E1" size={24} /> },
        { title: 'Inspiration is great, but then what.', description: 'We make sure your energy from all the content you consume does not fizzle out.', icon: <FaRocket color="#9ED2B6" size={24} /> },
      ];

  return (
    <div className="text-center px-16 py-16">
      <motion.p
        className="text-lg font-bold mb-4 text-left pl-8"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        What's wrong with self-improvement & how we're fixing it.
      </motion.p>
      <motion.h2
        className="text-5xl font-bold mb-8 text-left pl-8 pb-10"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Self-improvement. Ugh.
      </motion.h2>
      <div
        className="max-w-screen-md mx-auto"
        style={{ maxHeight: '360px', overflow: 'hidden', position: 'relative' }}
      >
        <div className="max-h-96 overflow-y-scroll" style={{ marginRight: '-20px' }}>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="step mb-8 text-left pl-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
            >
              <div className="flex items-start">
                <div className="mr-3">{step.icon}</div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-700 text-xl pb-10">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelfImprovementSteps;
