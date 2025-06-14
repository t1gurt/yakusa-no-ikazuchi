
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

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">        {/* Logo */}
        <Link 
          href="/" 
          className="text-4xl font-bold text-gray-900 hover:text-blue-600"
          style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
        >
          八雷神
        </Link>        {/* Desktop Menu */}
        <ul className="flex gap-8 items-center list-none">
          {navLinks.map((link) => (
            <li key={link.name} className="list-none">              <Link
                href={link.href}
                className="text-2xl font-bold"
                style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
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
          <span className="block w-6 h-0.5 bg-gray-800"></span>
          <span className="block w-6 h-0.5 bg-gray-800"></span>
          <span className="block w-6 h-0.5 bg-gray-800"></span>
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 border-t border-gray-100 shadow-sm">          <ul className="flex flex-col px-4 py-4 list-none">
            {navLinks.map((link) => (
              <li key={link.name} className="list-none">
                <Link
                  href={link.href}
                  className="block py-2 text-lg font-bold"
                  onClick={() => setMenuOpen(false)}
                  style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
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
