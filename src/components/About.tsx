'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export function About() {
  const [showConcepts, setShowConcepts] = useState(false);

  const toggleConcepts = () => {
    setShowConcepts(!showConcepts);
  };

  return (
    <section id="about" className="zeta-section relative overflow-hidden">
      {/* 背景グラデーション */}
      <div className="absolute inset-0 bg-gradient-to-br from-yakusa-bg-main via-yakusa-bg-main/95 to-yakusa-bg-sub opacity-95" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(139,_69,_19,_0.1)_0%,transparent_50%)] opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(139,_69,_19,_0.05)_0%,transparent_50%)]" />
      
      <div className="zeta-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extralight text-yakusa-text mb-6 tracking-[0.02em] relative">
              ABOUT
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-gradient-to-r from-transparent via-yakusa-accent to-transparent opacity-70" />
            </h2>
          </motion.div>
          
          {/* ロゴ */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center mb-16"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-yakusa-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500" />
              <div className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden bg-gradient-to-br from-yakusa-accent/10 to-yakusa-accent/5 border border-white/10 group-hover:border-yakusa-accent/30 transition-all duration-500 group-hover:scale-105">
                <img 
                  src="/images/logo/yakusa-logo-square.png" 
                  alt="八雷神ロゴ" 
                  className="w-full h-full object-contain p-4"
                />
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            {/* メインメッセージ */}
            <div className="mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="relative group mb-12"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yakusa-accent/5 via-yakusa-accent/10 to-yakusa-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
                <p className="text-3xl lg:text-4xl text-yakusa-text-light leading-relaxed font-light text-left relative z-10 p-6">
                  Creation out of decay. (混沌からの創造)
                </p>
              </motion.div>
              
              <div className="space-y-12 text-yakusa-text-muted text-left">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-yakusa-accent/50 to-yakusa-accent/20 rounded-full" />
                  <div className="pl-8">
                    <p className="text-xl lg:text-2xl leading-relaxed font-light">
                      社会の歪みや課題、そこに宿る痛みを、私たちは「穢れ」とは呼ばない。
                      それは、新たな創造の源泉だ。
                      神話の雷神が混沌から生まれたように、最も強大なエネルギーは、最も深い課題の中にこそ眠っている。
                    </p>
                  </div>
                </motion.div>

                {/* Our People */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-3 h-8 bg-gradient-to-b from-yakusa-accent to-yakusa-accent/50 rounded-full" />
                    <h4 className="text-2xl lg:text-3xl font-medium text-yakusa-text">
                      Our People: 変革者と挑戦者
                    </h4>
                  </div>
                  
                  <div className="pl-7">
                    <p className="text-xl lg:text-2xl leading-relaxed font-light mb-8">
                      八雷神の物語は、二種類の人間によって紡がれる。
                    </p>

                    <div className="space-y-8">
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 1.4 }}
                        viewport={{ once: true }}
                        className="relative group bg-gradient-to-r from-yakusa-bg-card/30 to-yakusa-bg-card/10 rounded-xl p-6 border border-white/5 hover:border-yakusa-accent/20 transition-all duration-500"
                      >
                        <p className="text-lg lg:text-xl leading-relaxed font-light">
                          <strong className="text-yakusa-accent font-semibold">挑戦者 (Challenger):</strong><br />
                          社会課題の渦中にいる当事者。私たちは彼らを、単なる「救われるべき存在」とは捉えない。その内に、現状を打破しうる巨大なエネルギーを秘めた、未来への「挑戦者」と捉える。
                        </p>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 1.6 }}
                        viewport={{ once: true }}
                        className="relative group bg-gradient-to-r from-yakusa-bg-card/30 to-yakusa-bg-card/10 rounded-xl p-6 border border-white/5 hover:border-yakusa-accent/20 transition-all duration-500"
                      >
                        <p className="text-lg lg:text-xl leading-relaxed font-light">
                          <strong className="text-yakusa-accent font-semibold">変革者 (Changemaker):</strong><br />
                          挑戦者の内に眠るそのエネルギーを見出し、共鳴し、解放する触媒。彼らは課題を「解決」するだけでなく、挑戦者の痛みを、社会を前進させる力強い「創造のエネルギー」へと昇華させる。
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* Our Mission */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.8 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-3 h-8 bg-gradient-to-b from-yakusa-accent to-yakusa-accent/50 rounded-full" />
                    <h4 className="text-2xl lg:text-3xl font-medium text-yakusa-text">
                      Our Mission: A New Style of Change.
                    </h4>
                  </div>
                  
                  <div className="pl-7">
                    <p className="text-lg lg:text-2xl leading-relaxed font-light">
                      八雷神は、この二者が出会い、化学反応を起こすための<strong className="text-yakusa-accent font-bold">ライフスタイルブランド</strong>であり、カルチャーそのものである。
                      私たちは、社会課題への取り組みを、義務や自己犠牲ではなく、<strong className="text-yakusa-accent font-bold">洗練された自己表現</strong>であり、<strong className="text-yakusa-accent font-bold">最もクールなスタイル</strong>であると再定義する。
                    </p>
                  </div>
                </motion.div>

                {/* Our Vision */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 2.0 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-3 h-8 bg-gradient-to-b from-yakusa-accent to-yakusa-accent/50 rounded-full" />
                    <h4 className="text-2xl lg:text-3xl font-medium text-yakusa-text">
                      Our Vision: A Society of Changemakers.
                    </h4>
                  </div>
                  
                  <div className="pl-7 space-y-6">
                    <p className="text-lg lg:text-2xl leading-relaxed font-light">
                      私たちの最終的な目標は、特別な誰かだけが社会を語るのではない、未来の創造。
                      すべての人が社会に関心を持ち、自らのスタイルで課題解決に挑むことが「当たり前」で「かっこいい」と誰もが信じる<strong className="text-yakusa-accent font-bold">文化を、この国に根付かせる</strong>ことだ。
                    </p>

                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-yakusa-accent/10 to-yakusa-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
                      <p className="text-xl lg:text-2xl leading-relaxed font-medium text-yakusa-accent relative z-10 p-4">
                        八雷神は、その狼煙（のろし）となる。
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
              
            {/* ストーリートグル */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.2 }}
              viewport={{ once: true }}
              className="border-t border-white/10 pt-8"
            >
              <div className="flex items-center justify-between mb-6">
                <p className="text-xl lg:text-2xl text-yakusa-text-muted leading-relaxed font-light">
                  八雷神のストーリーを知る。
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleConcepts}
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-yakusa-accent to-yakusa-accent/80 hover:from-yakusa-accent/90 hover:to-yakusa-accent/70 transition-all duration-300 group shadow-lg"
                  aria-label={showConcepts ? "コンセプトを非表示" : "コンセプトを表示"}
                >
                  <svg
                    className={`w-6 h-6 text-white transition-transform duration-300 ${
                      showConcepts ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* コンセプトセクション - 条件付き表示 */}
          {showConcepts && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="overflow-hidden mt-12"
            >
              {/* ストーリーセクション */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="mb-12 text-left max-w-4xl mx-auto"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-3 h-8 bg-gradient-to-b from-yakusa-accent to-yakusa-accent/50 rounded-full" />
                  <h3 className="text-3xl lg:text-4xl font-medium text-yakusa-text">
                    ストーリー
                  </h3>
                </div>
                
                <div className="space-y-8 text-yakusa-text-muted pl-7">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="bg-gradient-to-r from-yakusa-bg-card/20 to-yakusa-bg-card/10 rounded-xl p-6 border border-white/5"
                  >
                    <p className="text-lg leading-relaxed font-light">
                      私たちの団体名『八雷神』は、古代の書物『古事記』に登場する、黄泉の国の恐ろしい神々の名を思い起こさせるかもしれません。しかし、私たちのインスピレーションの源は、神話の彼方にあるのではなく、もっと身近な、この白金の土そのものにあります。
                    </p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="bg-gradient-to-r from-yakusa-bg-card/20 to-yakusa-bg-card/10 rounded-xl p-6 border border-white/5"
                  >
                    <p className="text-lg leading-relaxed font-light">
                      古く平安の時代、この白金の地に疫病が流行し、人々が苦しんでいた時、私たちの祖先は力強い守護の神に救いを求めました。それが、現在も白金六丁目にその名を残す『雷神山』に祀られた、偉大なる雷の神でした。
                    </p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="bg-gradient-to-r from-yakusa-bg-card/20 to-yakusa-bg-card/10 rounded-xl p-6 border border-white/5"
                  >
                    <p className="text-lg leading-relaxed font-light">
                      私たちが『八』という数字を選んだのは、黄泉の国の八柱の神々のためではありません。古来より『八』は、『八方（はっぽう）』という言葉に象徴されるように、あらゆる方角、すなわち『すべて』を意味する縁起の良い数字です。
                    </p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    className="bg-gradient-to-r from-yakusa-bg-card/20 to-yakusa-bg-card/10 rounded-xl p-6 border border-white/5"
                  >
                    <p className="text-lg leading-relaxed font-light">
                      私たちが考える『雷神』とは、停滞した空気を一掃し、大地に実りをもたらす恵みの雨を呼ぶ、力強い活性化のエネルギーの比喩です。雷鳴のように私たちの活動の声を響かせ、稲妻のように新たな光を街にもたらし、白金の未来をより豊かに耕していく。
                    </p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                    className="bg-gradient-to-r from-yakusa-accent/10 to-yakusa-accent/5 rounded-xl p-6 border border-yakusa-accent/20"
                  >
                    <p className="text-lg leading-relaxed font-light">
                      かつて白金を守った雷神の御霊は、失われたわけではありません。地域の総鎮守である白金氷川神社に合祀され、今も静かに私たちを見守っています。私たち『八雷神』は、その守護と活性化の御心を受け継ぎ、現代における地域の担い手として、白金のために尽力することを誓うものです。
                    </p>
                  </motion.div>
                </div>
              </motion.div>
              
              {/* 非表示ボタン */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex justify-center mt-8"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleConcepts}
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-yakusa-accent to-yakusa-accent/80 hover:from-yakusa-accent/90 hover:to-yakusa-accent/70 transition-all duration-300 group shadow-lg"
                  aria-label="コンセプトを非表示"
                >
                  <svg
                    className="w-6 h-6 text-white transition-transform duration-300 rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
