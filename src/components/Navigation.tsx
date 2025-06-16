"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav 
        className={`fixed top-0 left-0 w-full z-[60] transition-all duration-500 ${
          scrolled 
            ? 'bg-black/80 backdrop-blur-xl border-b border-white/20 shadow-2xl shadow-black/50' 
            : 'bg-transparent border-b border-white/10'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">          {/* Desktop Menu - Center Layout */}
          <div className="hidden md:grid grid-cols-3 items-center w-full">
            {/* Left Navigation */}
            <motion.ul 
              className="flex gap-12 items-center list-none justify-end"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {navLinksLeft.map((link, index) => (
                <motion.li 
                  key={link.name} 
                  className="list-none"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="relative font-medium text-white/90 hover:text-red-400 transition-all duration-300 uppercase tracking-wider font-sans text-sm group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-orange-500 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>

            {/* Center Logo - Perfectly centered */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <Link 
                href="/" 
                className="relative group hover:opacity-80 transition-all duration-300"
              >
                <div className="relative">
                  <Image
                    src="/images/logo/yakusa-logo-horizontal.png"
                    alt="八雷神"
                    width={180}
                    height={54}
                    className="h-12 w-auto transform group-hover:scale-105 transition-transform duration-300"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                </div>
              </Link>
            </motion.div>

            {/* Right Navigation */}
            <motion.ul 
              className="flex gap-12 items-center list-none justify-start"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {navLinksRight.map((link, index) => (
                <motion.li 
                  key={link.name} 
                  className="list-none"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="relative font-medium text-white/90 hover:text-red-400 transition-all duration-300 uppercase tracking-wider font-sans text-sm group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-orange-500 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Mobile Menu Layout */}
          <div className="md:hidden flex items-center justify-between">
            {/* Mobile Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link 
                href="/" 
                className="relative group hover:opacity-80 transition-opacity duration-200"
              >
                <Image
                  src="/images/logo/yakusa-logo-square.png"
                  alt="八雷神"
                  width={48}
                  height={48}
                  className="h-12 w-12 transform group-hover:scale-105 transition-transform duration-300"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              className="relative flex flex-col gap-1 px-3 py-2 group"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="メニューを開く"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.span 
                className="block w-6 h-0.5 bg-white transition-all duration-300"
                animate={{
                  rotate: menuOpen ? 45 : 0,
                  y: menuOpen ? 6 : 0,
                }}
              ></motion.span>
              <motion.span 
                className="block w-6 h-0.5 bg-white transition-all duration-300"
                animate={{
                  opacity: menuOpen ? 0 : 1,
                }}
              ></motion.span>
              <motion.span 
                className="block w-6 h-0.5 bg-white transition-all duration-300"
                animate={{
                  rotate: menuOpen ? -45 : 0,
                  y: menuOpen ? -6 : 0,
                }}
              ></motion.span>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div 
              className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-t border-white/20 shadow-2xl"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.ul 
                className="flex flex-col px-6 py-4 list-none space-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {[...navLinksLeft, ...navLinksRight].map((link, index) => (
                  <motion.li 
                    key={link.name} 
                    className="list-none"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="relative block py-4 px-4 font-medium text-white/90 hover:text-red-400 transition-all duration-300 uppercase tracking-wider font-sans text-sm rounded-lg hover:bg-white/5 group"
                      onClick={() => setMenuOpen(false)}
                    >
                      <span className="relative z-10">{link.name}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-orange-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[59] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
