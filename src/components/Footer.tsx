'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function Footer() {
  const quickLinks = [
    { href: "#about", label: "ABOUT" },
    { href: "#news", label: "NEWS" },
    { href: "#members", label: "MEMBERS" },
    { href: "#partners", label: "PARTNERS" }
  ];

  return (
    <footer className="bg-yakusa-dark text-yakusa-white py-16">
      <div className="zeta-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* ブランド情報 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="mb-8">
              <h3 className="text-3xl font-light text-yakusa-white mb-2 tracking-wider">
                八雷神
              </h3>
              <p className="text-yakusa-gray text-sm tracking-widest uppercase">
                やくさのいかづち
              </p>
            </div>
            
            <p className="text-yakusa-gray leading-relaxed mb-8 max-w-md font-light">
              混沌からの創造。港区白金を拠点とし、伝統と革新を繋ぐ市民団体として、
              新たな価値創造に挑戦し続けます。
            </p>
          </motion.div>

          {/* ナビゲーション */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-medium text-yakusa-white mb-6 tracking-wider uppercase">
              NAVIGATION
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-yakusa-gray hover:text-yakusa-red transition-colors duration-300 text-sm font-light tracking-wide"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 連絡先 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-medium text-yakusa-white mb-6 tracking-wider uppercase">
              CONTACT
            </h4>
            <div className="space-y-3">
              <p className="text-yakusa-gray text-sm font-light">
                東京都港区白金
              </p>
              <p className="text-yakusa-gray text-sm font-light">
                info@8ikazuchi.jp
              </p>
            </div>
          </motion.div>
        </div>

        {/* 下部 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-yakusa-gray/20 mt-16 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-yakusa-gray text-sm font-light">
              © 2025 八雷神. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-yakusa-gray hover:text-yakusa-red transition-colors duration-300 text-sm font-light">
                プライバシーポリシー
              </Link>
              <Link href="#" className="text-yakusa-gray hover:text-yakusa-red transition-colors duration-300 text-sm font-light">
                利用規約
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
