"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const jobs = [
  {
    title: 'Senior Full-Stack Engineer',
    type: 'Full-time position',
    location: 'Berlin or remote',
    payRange: '€65-85k, 0.50-1.50% equity share options',
  },
  {
    title: 'Senior Designer',
    type: 'Full-time position',
    location: 'Berlin or remote',
    payRange: '€40-55k, 0.25-0.50% equity share options',
  },
  {
    title: 'Superstar Intern',
    type: 'Full-time position',
    location: 'Berlin or remote',
    payRange: '€20-24k, 0.5-1.5% equity share options',
  },
];

const Vacancies = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, 
  });

  const animation = {
    opacity: inView ? 1 : 0,
    y: inView ? 0 : 20,
  };

  return (
    <motion.div
      className="text-center py-16 bg-white mx-4 sm:mx-8 md:mx-16 lg:mx-32"
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={animation}
      transition={{ duration: 1 }}
    >
      <h2 className="text-5xl font-bold mt-4 text-left py-6">Open Vacancies</h2>
      <div className="flex flex-col md:flex-row mt-8 space-y-6 md:space-y-0 md:space-x-6">
        {jobs.map((job, index) => (
          <motion.div
            key={index}
            className="bg-yellow-200/40 rounded-lg px-6 py-4 flex-grow text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={animation}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="group" 
              whileHover={{ opacity: 1 }}
            >
              <h3 className="text-2xl font-semibold py-6">{job.title}</h3>
              <ul className="list-disc ml-4 text-black text-opacity-100 text-md space-y-2">
                <li>{job.type}</li>
                <li>{job.location}</li>
                <li>{job.payRange}</li>
              </ul>
              <motion.button
                className="mt-4 bg-black text-white rounded-lg py-2 px-4 opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={{ opacity: 1 }}
              >
                See Details
              </motion.button>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Vacancies;
