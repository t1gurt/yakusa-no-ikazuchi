'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Zap } from 'lucide-react';

export function Hero() {
  return (    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">      {/* 背景エフェクト */}
      <div className="absolute inset-0 yakusa-gradient">
        <div className="absolute inset-0 yakusa-pattern opacity-30"></div>
      </div>

      {/* 雷エフェクト */}
      <div className="absolute inset-0 thunder-effect"></div>

      {/* メインコンテンツ */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >          <div className="flex justify-center mb-6">
            <div className="p-4 bg-yakusa-red/20 rounded-full border border-yakusa-red/30 glass-effect">
              <Zap className="w-16 h-16 text-yakusa-red animate-pulse-slow" />
            </div>
          </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-yakusa-white mb-6 tracking-wide text-glow">
            八雷神
            <br />
            <span className="text-2xl sm:text-3xl lg:text-4xl font-normal text-yakusa-light">
              やくさのいかづち
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-12"
        >          <p className="text-xl sm:text-2xl text-yakusa-red font-semibold mb-4 tracking-wider text-glow">
            Creation out of decay.
          </p>
          <p className="text-lg text-yakusa-light max-w-2xl mx-auto leading-relaxed">
            混沌からの創造。港区白金を拠点とし、伝統と革新を繋ぐ市民団体として、
            新たな価値創造に挑戦し続けます。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >          <button className="bg-red-600 hover:bg-red-600/80 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
            私たちについて
          </button>
          <button className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
            活動を見る
          </button>
        </motion.div>
      </div>

      {/* スクロールインジケーター */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-red-600" />
      </motion.div>
    </section>
  );
}
