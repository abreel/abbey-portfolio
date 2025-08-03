'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // Optional: Replace with SVG if not using Lucide

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '#contact', label: 'Contact' }, // Leave as anchor if you're scrolling to a section
  ];

  return (
    <header className="bg-white shadow-md px-6 py-4">
      <div className="flex items-center justify-between max-w-8xl mx-auto">
        <h1 className="text-xl font-bold text-gray-800">Sanni Abiodun</h1>

        {/* Mobile toggle button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop menu */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) =>
            link.href.startsWith('#') ? (
              <a key={link.href} href={link.href} className="text-gray-600 hover:text-gray-900">
                {link.label}
              </a>
            ) : (
              <Link key={link.href} href={link.href} passHref>
                <span className="cursor-pointer text-gray-600 hover:text-gray-900">
                  {link.label}
                </span>
              </Link>
            ),
          )}
        </nav>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="mt-4 flex flex-col space-y-2 md:hidden">
          {navLinks.map((link) =>
            link.href.startsWith('#') ? (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-gray-900"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ) : (
              <Link key={link.href} href={link.href} passHref>
                <span
                  className="cursor-pointer text-gray-600 hover:text-gray-900"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </span>
              </Link>
            ),
          )}
        </nav>
      )}
    </header>
  );
}
