
"use client";

import { useState } from "react";
import Link from "next/link";

const navLinksLeft = [
  { name: "ABOUT", href: "#about" },
  { name: "MEMBERS", href: "#members" },
];

const navLinksRight = [
  { name: "NEWS", href: "#news" },
  { name: "PARTNERS", href: "#partners" },
];

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur border-b border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4">        {/* Desktop Menu - Center Layout */}
        <div className="hidden md:flex items-center justify-center relative">
          {/* Left Navigation */}
          <ul className="flex gap-12 items-center list-none mr-24">
            {navLinksLeft.map((link) => (
              <li key={link.name} className="list-none">
                <Link
                  href={link.href}
                  className="font-medium text-black/80 hover:text-black transition-colors duration-200 uppercase tracking-wider font-sans"
                  style={{ fontSize: '1.5rem', lineHeight: '2rem', fontWeight: 'bold' }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Center Logo - Absolutely centered */}
          <Link 
            href="/" 
            className="absolute left-1/2 transform -translate-x-1/2 text-3xl font-bold text-black hover:text-gray-600 transition-colors duration-200 font-sans"
          >
            八雷神
          </Link>

          {/* Right Navigation */}
          <ul className="flex gap-12 items-center list-none ml-24">
            {navLinksRight.map((link) => (
              <li key={link.name} className="list-none">
                <Link
                  href={link.href}
                  className="font-medium text-black/80 hover:text-black transition-colors duration-200 uppercase tracking-wider font-sans"
                  style={{ fontSize: '1.5rem', lineHeight: '2rem', fontWeight: 'bold' }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Layout */}
        <div className="md:hidden flex items-center justify-between">
          {/* Mobile Logo */}
          <Link 
            href="/" 
            className="text-3xl font-bold text-black hover:text-gray-600 transition-colors duration-200 font-sans"
          >
            八雷神
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="flex flex-col gap-1 px-2 py-1"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="メニューを開く"
          >
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
          </button>
        </div>
      </div>      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/98 border-t border-gray-200 shadow-lg">
          <ul className="flex flex-col px-6 py-4 list-none">
            {[...navLinksLeft, ...navLinksRight].map((link) => (
              <li key={link.name} className="list-none">
                <Link
                  href={link.href}
                  className="block py-3 font-medium text-black/80 hover:text-black transition-colors duration-200 uppercase tracking-wider font-sans"
                  onClick={() => setMenuOpen(false)}
                  style={{ fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: 'bold' }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
