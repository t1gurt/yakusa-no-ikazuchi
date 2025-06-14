'use client';

import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-yakusa-dark text-yakusa-white">
      <div className="zeta-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="zeta-text-hero mb-4">
            八雷神
          </h1>
          <p className="text-lg font-light tracking-wider mb-8 text-yakusa-light">
            やくさのいかづち
          </p>
          <p className="zeta-text-xl text-yakusa-red font-medium tracking-wide">
            Creation out of decay.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
