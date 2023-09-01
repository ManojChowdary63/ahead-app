"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const MobileMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="md:hidden z-10">
      <div className="flex justify-between items-center px-6 py-4">
        <div className="flex items-center space-x-2">
          <Image src="/images/ahead-mascot.png" alt="Company Mascot" width={60} height={60} />
        </div>
        <button onClick={toggleMenu} className="text-gray-600 hover:text-black">
          {isMenuOpen ? (
            <svg
              className="h-6 w-6 cursor-pointer"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="h-6 w-6 cursor-pointer"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      {isMenuOpen && (
        <div className="bg-white py-6 px-3 rounded-md w-48 mx-auto">
          <ul className="space-y-4">
            <li>
              <Link href="/">Emotions</Link>
            </li>
            <li>
              <Link href="/">Manifesto</Link>
            </li>
            <li>
              <Link href="/">Self-Awareness Test</Link>
            </li>
            <li>
              <Link href="/">Work with Us</Link>
            </li>
            <li>
              <Link href="/">
                <button className="bg-black text-white px-3 py-4 rounded-full w-full">
                  Download App
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
