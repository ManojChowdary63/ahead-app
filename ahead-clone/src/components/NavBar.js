"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const NavBar = () => {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-10 bg-white flex justify-between items-center px-16 py-2 z-10 md:flex hidden"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
    >
      <div className="flex items-center space-x-2">
        <Image src="/images/ahead-mascot.png" alt="Company Mascot" width={80} height={80} />
      </div>
      <ul className="flex space-x-16 items-center">
        <li>
          <Link href="/">Emotions</Link>
        </li>
        <li>
          <Link href="/">Manifesto</Link>
        </li>
        <li>
          <Link href="/">Self-awareness Test</Link>
        </li>
        <li>
          <Link href="/">Work with Us</Link>
        </li>
      </ul>
      <div>
        <Link href="/">
          <button className="bg-black text-white px-4 py-2 rounded-full">Download App</button>
        </Link>
      </div>
    </motion.nav>
  );
};

export default NavBar;
