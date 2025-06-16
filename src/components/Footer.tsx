'use client';

import { motion } from 'framer-motion';

export function Footer() {
  const socialLinks = [
    { name: 'Instagram', href: '#', icon: 'instagram' },
    { name: 'Twitter', href: '#', icon: 'twitter' },
    { name: 'LinkedIn', href: '#', icon: 'linkedin' }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Members', href: '#members' },
    { name: 'News', href: '#news' },
    { name: 'Partners', href: '#partners' }
  ];

  return (
    <footer className="relative py-20 overflow-hidden">
      {/* グラデーション背景 */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-slate-900 to-slate-800"></div>
      
      {/* 装飾的要素 */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-900/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-800/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative zeta-container">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          {/* ロゴ・概要 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="relative">
              <motion.h3 
                className="text-4xl font-light mb-6 tracking-wider text-white"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                八雷神
              </motion.h3>
              <motion.div 
                className="w-16 h-1 bg-gradient-to-r from-red-600 to-orange-500 mb-6"
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                transition={{ duration: 1, delay: 0.4 }}
                viewport={{ once: true }}
              ></motion.div>
            </div>
            
            <motion.p 
              className="text-xl text-gray-300 font-light leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Creation out of decay.
            </motion.p>
            <motion.p 
              className="text-lg text-gray-400 font-light leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              港区白金を拠点とするライフスタイルブランド
            </motion.p>

            {/* ソーシャルリンク */}
            <motion.div 
              className="flex space-x-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-600 transition-all duration-300 group backdrop-blur-sm border border-white/20"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-white group-hover:scale-110 transition-transform duration-300">
                    {social.icon === 'instagram' && '📷'}
                    {social.icon === 'twitter' && '🐦'}
                    {social.icon === 'linkedin' && '💼'}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* クイックリンク */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-2xl font-medium mb-6 tracking-wider text-white">クイックリンク</h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a 
                    href={link.href} 
                    className="text-lg text-gray-300 hover:text-red-400 transition-colors duration-300 font-light tracking-wide hover:pl-2 transform transition-all duration-300"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* コンタクト */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-2xl font-medium mb-6 tracking-wider text-white">CONTACT</h4>
            <div className="space-y-4">
              <motion.div 
                className="flex items-start space-x-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="text-red-400 mt-1">📍</span>
                <p className="text-lg text-gray-300 font-light">東京都港区白金</p>
              </motion.div>
              <motion.div 
                className="flex items-start space-x-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="text-red-400 mt-1">✉️</span>
                <a 
                  href="mailto:contact@8ikazuchi.jp" 
                  className="text-lg text-gray-300 hover:text-red-400 transition-colors duration-300 font-light"
                >
                  contact@8ikazuchi.jp
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* コピーライト */}
        <motion.div 
          className="border-t border-white/20 pt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <motion.p 
              className="text-lg text-gray-400 font-light"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
            >
              © 2025 八雷神. All rights reserved.
            </motion.p>
            <motion.div 
              className="flex space-x-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <a 
                href="/privacy" 
                className="text-lg text-gray-400 hover:text-red-400 transition-colors duration-300 font-light tracking-wide"
              >
                プライバシーポリシー
              </a>
              <a 
                href="/terms" 
                className="text-lg text-gray-400 hover:text-red-400 transition-colors duration-300 font-light tracking-wide"
              >
                利用規約
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}