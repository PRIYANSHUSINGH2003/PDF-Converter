// components/Navbar.js
'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FaFilePdf, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 text-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <FaFilePdf className="h-8 w-8 text-white" />
            <span className="font-bold text-xl ml-2">PDF Converter</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" legacyBehavior>
                <a className="hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </a>
              </Link>
              <Link href="/features" legacyBehavior>
                <a className="hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-medium">
                  Features
                </a>
              </Link>
              <Link href="/pricing" legacyBehavior>
                <a className="hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-medium">
                  Pricing
                </a>
              </Link>
              <Link href="/contact" legacyBehavior>
                <a className="hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-medium">
                  Contact
                </a>
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-600 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" legacyBehavior>
              <a className="hover:bg-blue-700 text-white block px-3 py-2 rounded-md text-base font-medium">
                Home
              </a>
            </Link>
            <Link href="/features" legacyBehavior>
              <a className="hover:bg-blue-700 text-white block px-3 py-2 rounded-md text-base font-medium">
                Features
              </a>
            </Link>
            <Link href="/pricing" legacyBehavior>
              <a className="hover:bg-blue-700 text-white block px-3 py-2 rounded-md text-base font-medium">
                Pricing
              </a>
            </Link>
            <Link href="/contact" legacyBehavior>
              <a className="hover:bg-blue-700 text-white block px-3 py-2 rounded-md text-base font-medium">
                Contact
              </a>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
