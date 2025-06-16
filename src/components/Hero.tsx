'use client';

import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* 背景グラデーション */}
      <div className="absolute inset-0 bg-gradient-to-br from-yakusa-bg-main via-yakusa-bg-main/95 to-yakusa-bg-sub opacity-95" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,_69,_19,_0.15)_0%,transparent_50%)] opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,_69,_19,_0.1)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.1)_100%)]" />
      
      {/* 装飾的な要素 */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-yakusa-accent/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-32 right-32 w-48 h-48 bg-yakusa-accent/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="zeta-container text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 1,
            delay: 0.2,
            type: "spring",
            bounce: 0.1
          }}
          className="space-y-8"
        >
          {/* メインタイトル */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <h1 className="zeta-text-hero mb-6 text-yakusa-text relative">
              八雷神
              {/* タイトル装飾 */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-yakusa-accent/50 to-transparent" />
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-yakusa-accent/70 to-transparent" />
            </h1>
          </motion.div>
          
          {/* 読み仮名 */}          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative"
          >
            <div className="text-2xl lg:text-3xl font-light tracking-[0.3em] mb-12 text-yakusa-text-light relative">
              やくさのいかづち
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yakusa-accent/10 to-transparent blur-xl opacity-0 hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>
          
          {/* サブタイトル */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative group"
          >
            <div className="inline-block relative">
              <p className="text-3xl lg:text-5xl text-yakusa-text-light font-light tracking-wide relative z-10 group-hover:text-yakusa-accent transition-colors duration-500">
                Creation out of decay.
              </p>
              {/* サブタイトル背景効果 */}
              <div className="absolute inset-0 bg-gradient-to-r from-yakusa-accent/5 via-yakusa-accent/10 to-yakusa-accent/5 rounded-lg opacity-0 group-hover:opacity-100 transform scale-110 transition-all duration-500 blur-xl" />
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-32 h-0.5 bg-gradient-to-r from-transparent via-yakusa-accent to-transparent transition-all duration-700" />
            </div>
          </motion.div>
          
        </motion.div>
      </div>
    </section>
  );
}
