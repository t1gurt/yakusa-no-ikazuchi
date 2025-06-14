
"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { name: "ABOUT", href: "#about" },
  { name: "NEWS", href: "#news" },
  { name: "MEMBERS", href: "#members" },
  { name: "PARTNERS", href: "#partners" },
];

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (    <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur border-b border-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">        {/* Logo */}        <Link 
          href="/" 
          className="text-3xl font-bold text-white hover:text-gray-300 transition-colors duration-200 font-sans"
        >
          八雷神
        </Link>        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-12 items-center list-none">          {navLinks.map((link, index) => (
            <li key={link.name} className="list-none">
              <Link
                href={link.href}
                className="font-medium text-white/80 hover:text-white transition-colors duration-200 uppercase tracking-wider font-sans"
                style={{ fontSize: '2.25rem', lineHeight: '2.5rem', fontWeight: 'bold' }}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1 px-2 py-1"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="メニューを開く"
        >
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
      </div>      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 border-t border-gray-800 shadow-lg">
          <ul className="flex flex-col px-6 py-4 list-none">
            {navLinks.map((link) => (
              <li key={link.name} className="list-none">                <Link
                  href={link.href}
                  className="block py-3 font-medium text-white/80 hover:text-white transition-colors duration-200 uppercase tracking-wider font-sans"
                  onClick={() => setMenuOpen(false)}
                  style={{ fontSize: '1.875rem', lineHeight: '2.25rem', fontWeight: 'bold' }}
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
