'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import Link from 'next/link';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'HOME' },
    { href: '#about', label: 'ABOUT' },
    { href: '#news', label: 'NEWS' },
    { href: '#members', label: 'MEMBERS' },
    { href: '#partners', label: 'PARTNERS' },
  ];

  return (    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-yakusa-navy/95 backdrop-blur-sm border-b border-yakusa-red/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* ロゴ */}          <Link href="/" className="flex items-center space-x-2 hover-lift">
            <div className="p-2 bg-yakusa-red rounded-lg">
              <Zap className="w-6 h-6 text-yakusa-white" />
            </div>            <span className="text-xl font-bold text-yakusa-white tracking-wider">
              八雷神
            </span>
          </Link>

          {/* デスクトップメニュー */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-yakusa-white hover:text-yakusa-red transition-colors duration-200 px-3 py-2 text-sm font-medium tracking-wider hover-lift"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* モバイルメニューボタン */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-yakusa-white hover:text-yakusa-red p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* モバイルメニュー */}
        {isOpen && (
          <motion.div 
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-yakusa-navy/95 backdrop-blur-sm">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-yakusa-white hover:text-yakusa-red block px-3 py-2 text-base font-medium tracking-wider"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
