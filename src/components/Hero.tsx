'use client';

import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-yakusa-white">
      <div className="zeta-container">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="zeta-text-hero text-yakusa-dark mb-8">
              八雷神
            </h1>
            <div className="text-lg text-yakusa-gray font-light tracking-widest mb-12 uppercase">
              やくさのいかづち
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <p className="zeta-text-xl text-yakusa-red mb-6 font-light">
              Creation out of decay.
            </p>
            <p className="text-lg text-yakusa-gray leading-relaxed font-light">
              混沌からの創造。港区白金を拠点とし、伝統と革新を繋ぐ市民団体として、
              新たな価値創造に挑戦し続けます。
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16"
          >
            <button className="bg-yakusa-red text-yakusa-white px-8 py-4 text-sm font-medium tracking-wider uppercase hover:bg-yakusa-dark transition-colors duration-300">
              私たちについて
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
