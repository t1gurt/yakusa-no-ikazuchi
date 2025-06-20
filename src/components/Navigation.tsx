"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { getImagePath } from "@/utils/paths";

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
  const scrollPositionRef = useRef(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);  // モバイルメニューが開いているときにスクロールを防ぐ
  useEffect(() => {
    if (menuOpen) {
      // 現在のスクロール位置を保存
      const scrollY = window.scrollY;
      scrollPositionRef.current = scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      // スクロール位置を復元
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      
      // 保存されたスクロール位置に戻す
      const savedPosition = scrollPositionRef.current;
      if (savedPosition > 0) {
        requestAnimationFrame(() => {
          window.scrollTo(0, savedPosition);
        });
      }
    }

    // クリーンアップ関数でスクロールを復元
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>      <motion.nav 
        className={`fixed top-0 left-0 w-full z-[60] transition-all duration-500 ${
          scrolled 
            ? 'bg-yakusa-bg-main/90 backdrop-blur-xl border-b border-yakusa-text/10 shadow-2xl shadow-yakusa-bg-main/30' 
            : 'bg-transparent border-b border-white/10'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >        <div className="max-w-7xl mx-auto px-6 py-0 md:py-4">          {/* Desktop Menu - Center Layout */}
          <div className="hidden md:grid grid-cols-3 items-center w-full">
            {/* Left Navigation */}
            <motion.ul 
              className="flex gap-12 items-center list-none justify-end"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >              {navLinksLeft.map((link, index) => (
                <motion.li 
                  key={link.name} 
                  className="list-none"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className={`relative font-medium transition-all duration-300 uppercase tracking-wider font-sans text-sm group ${
                      scrolled ? 'text-yakusa-text hover:text-yakusa-accent' : 'text-white/90 hover:text-red-400'
                    }`}
                  >
                    {link.name}
                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                      scrolled ? 'bg-gradient-to-r from-yakusa-accent to-yakusa-accent/70' : 'bg-gradient-to-r from-red-600 to-orange-500'
                    }`}></span>
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
              >                <div className="relative">
                  <Image
                    src={getImagePath("/images/logo/yakusa-logo-horizontal.png")}
                    alt="八雷神"
                    width={180}
                    height={54}
                    className="h-12 w-auto transform group-hover:scale-105 transition-transform duration-300"
                    priority
                  />
                  <div className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl ${
                    scrolled ? 'bg-gradient-to-r from-yakusa-accent/30 to-yakusa-accent/20' : 'bg-gradient-to-r from-red-600/20 to-orange-500/20'
                  }`}></div>
                </div>
              </Link>
            </motion.div>

            {/* Right Navigation */}
            <motion.ul 
              className="flex gap-12 items-center list-none justify-start"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >              {navLinksRight.map((link, index) => (
                <motion.li 
                  key={link.name} 
                  className="list-none"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className={`relative font-medium transition-all duration-300 uppercase tracking-wider font-sans text-sm group ${
                      scrolled ? 'text-yakusa-text hover:text-yakusa-accent' : 'text-white/90 hover:text-red-400'
                    }`}
                  >
                    {link.name}
                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                      scrolled ? 'bg-gradient-to-r from-yakusa-accent to-yakusa-accent/70' : 'bg-gradient-to-r from-red-600 to-orange-500'
                    }`}></span>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </div>          {/* Mobile Menu Layout */}
          <div className="md:hidden flex items-center justify-center py-0 relative">
            {/* Mobile Logo - 中央配置 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >              <Link 
                href="/" 
                className="relative group hover:opacity-80 transition-opacity duration-200"
              >                <Image
                  src={getImagePath("/images/logo/yakusa-logo-horizontal.png")}
                  alt="八雷神"
                  width={120}
                  height={36}
                  className="h-8 w-auto transform group-hover:scale-105 transition-transform duration-300"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
              </Link>
            </motion.div>            {/* Mobile Menu Button - 右端に絶対配置 */}
            <motion.button
              className="absolute right-0 flex flex-col gap-1 px-3 py-2 group"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="メニューを開く"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.span 
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  scrolled ? 'bg-yakusa-text' : 'bg-white'
                }`}
                animate={{
                  rotate: menuOpen ? 45 : 0,
                  y: menuOpen ? 6 : 0,
                }}
              ></motion.span>
              <motion.span 
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  scrolled ? 'bg-yakusa-text' : 'bg-white'
                }`}
                animate={{
                  opacity: menuOpen ? 0 : 1,
                }}
              ></motion.span>
              <motion.span 
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  scrolled ? 'bg-yakusa-text' : 'bg-white'
                }`}
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
          {menuOpen && (            <motion.div 
              className="md:hidden absolute top-full left-0 w-full bg-yakusa-bg-main/95 backdrop-blur-xl border-t border-yakusa-text/10 shadow-2xl"
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
                  >                    <Link
                      href={link.href}
                      className="relative block py-3 px-4 font-medium text-yakusa-text hover:text-yakusa-accent transition-all duration-300 uppercase tracking-wider font-sans text-sm rounded-lg hover:bg-yakusa-accent/5 group"
                      onClick={() => setMenuOpen(false)}
                    >
                      <span className="relative z-10">{link.name}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-yakusa-accent/10 to-yakusa-accent/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
              
              {/* スクエアロゴ - 下部左寄せ、リンクなし */}
              <motion.div 
                className="flex justify-start px-6 py-4 border-t border-yakusa-text/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <div className="relative">
                  <Image
                    src={getImagePath("/images/logo/yakusa-logo-square.png")}
                    alt="八雷神"
                    width={60}
                    height={60}
                    className="h-14 w-14"
                    priority
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (          <motion.div
            className="fixed inset-0 bg-yakusa-bg-main/50 backdrop-blur-sm z-[59] md:hidden"
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
