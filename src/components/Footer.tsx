'use client';

import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="bg-yakusa-dark text-yakusa-white py-16">
      <div className="zeta-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* ロゴ・概要 */}
          <div>
            <h3 className="text-2xl font-light mb-4 tracking-wider">八雷神</h3>
            <p className="text-yakusa-light font-light leading-relaxed mb-4">
              Creation out of decay.
            </p>
            <p className="text-sm text-yakusa-gray font-light">
              港区白金を拠点とする市民団体
            </p>
          </div>

          {/* ナビゲーション */}
          <div>
            <h4 className="text-lg font-medium mb-4 tracking-wider">NAVIGATION</h4>
            <ul className="space-y-2">
              {['HOME', 'ABOUT', 'NEWS', 'MEMBERS', 'PARTNERS'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-sm text-yakusa-light hover:text-yakusa-red transition-colors duration-200 font-light tracking-wider"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* コンタクト */}
          <div>
            <h4 className="text-lg font-medium mb-4 tracking-wider">CONTACT</h4>
            <div className="space-y-2 text-sm text-yakusa-light font-light">
              <p>東京都港区白金</p>
              <p>contact@8ikazuchi.jp</p>
            </div>
          </div>
        </div>

        {/* コピーライト */}
        <div className="border-t border-yakusa-gray/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-yakusa-gray font-light">
              © 2025 八雷神. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-yakusa-gray hover:text-yakusa-red transition-colors duration-200 font-light">
                プライバシーポリシー
              </a>
              <a href="#" className="text-sm text-yakusa-gray hover:text-yakusa-red transition-colors duration-200 font-light">
                利用規約
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}