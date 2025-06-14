'use client';

import { motion } from 'framer-motion';
import { Zap, Mail, MapPin, Phone, Twitter, Facebook, Instagram, Youtube } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Youtube className="w-5 h-5" />, href: "#", label: "YouTube" }
  ];

  const quickLinks = [
    { href: "#about", label: "私たちについて" },
    { href: "#news", label: "ニュース" },
    { href: "#members", label: "メンバー" },
    { href: "#partners", label: "パートナー" }
  ];

  const contactInfo = [
    { icon: <MapPin className="w-5 h-5" />, text: "東京都港区白金" },
    { icon: <Mail className="w-5 h-5" />, text: "info@8ikazuchi.jp" },
    { icon: <Phone className="w-5 h-5" />, text: "03-XXXX-XXXX" }
  ];

  return (
    <footer className="bg-black border-t border-yakusa-red/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* ブランド情報 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-yakusa-red rounded-lg">
                <Zap className="w-8 h-8 text-yakusa-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-yakusa-white">八雷神</h3>
                <p className="text-yakusa-light text-sm">やくさのいかづち</p>
              </div>
            </div>
            
            <p className="text-yakusa-light leading-relaxed mb-6 max-w-md">
              Creation out of decay. <br />
              混沌からの創造。港区白金を拠点とし、伝統と革新を繋ぐ市民団体として、
              新たな価値創造に挑戦し続けます。
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 bg-yakusa-navy rounded-lg text-yakusa-light hover:text-yakusa-red hover:bg-yakusa-red/20 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* クイックリンク */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-yakusa-white mb-4">
              クイックリンク
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-yakusa-light hover:text-yakusa-red transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 連絡先情報 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-yakusa-white mb-4">
              お問い合わせ
            </h4>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <div className="text-yakusa-red">{info.icon}</div>
                  <span className="text-yakusa-light">{info.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* 下部セクション */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-yakusa-red/20 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-yakusa-light text-sm mb-4 md:mb-0">
              © 2025 八雷神（やくさのいかづち）All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-yakusa-light hover:text-yakusa-red transition-colors duration-300"
              >
                プライバシーポリシー
              </Link>
              <Link
                href="/terms"
                className="text-yakusa-light hover:text-yakusa-red transition-colors duration-300"
              >
                利用規約
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
