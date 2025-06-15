'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export function About() {
  const [showConcepts, setShowConcepts] = useState(false);

  const toggleConcepts = () => {
    setShowConcepts(!showConcepts);
  };

  return (
    <section id="about" className="zeta-section bg-yakusa-bg-main">
      <div className="zeta-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}          viewport={{ once: true }}
          className="text-center mb-20"        >          <h2 className="text-4xl sm:text-5xl font-light text-yakusa-text mb-8 tracking-wide">
            ABOUT
          </h2>
          
          {/* ロゴ */}
          <div className="flex justify-center mb-12">
            <img 
              src="/images/logo/yakusa-logo-square.png" 
              alt="八雷神ロゴ" 
              className="w-24 h-24 object-contain"
            />
          </div>

          <div className="max-w-3xl mx-auto">{/* メインメッセージ - 団体の位置づけ */}
            <div className="mb-12">
              <p className="text-3xl text-yakusa-text-light leading-relaxed font-light mb-8 text-left">
                Creation out of decay. (混沌からの創造)
              </p>              
              <div className="space-y-8 text-yakusa-text-muted mb-8 text-left">
                <p className="text-2xl leading-relaxed font-light">
                  社会の歪みや課題、そこに宿る痛みを、私たちは「穢れ」とは呼ばない。
                  それは、新たな創造の源泉だ。
                  神話の雷神が混沌から生まれたように、最も強大なエネルギーは、最も深い課題の中にこそ眠っている。
                </p>

                <div className="space-y-6">
                  <h4 className="text-3xl mb-4">
                    Our People: 変革者と挑戦者 (Changemakers & Challengers)
                  </h4>
                  
                  <p className="text-2xl leading-relaxed font-light">
                    八雷神の物語は、二種類の人間によって紡がれる。
                  </p>

                  <div className="space-y-4">
                    <p className="text-2xl leading-relaxed font-light">
                      <strong>挑戦者 (Challenger):</strong><br />
                      社会課題の渦中にいる当事者。私たちは彼らを、単なる「救われるべき存在」とは捉えない。その内に、現状を打破しうる巨大なエネルギーを秘めた、未来への「挑戦者」と捉える。
                    </p>

                    <p className="text-2xl leading-relaxed font-light">
                      <strong>変革者 (Changemaker):</strong><br />
                      挑戦者の内に眠るそのエネルギーを見出し、共鳴し、解放する触媒。彼らは課題を「解決」するだけでなく、挑戦者の痛みを、社会を前進させる力強い「創造のエネルギー」へと昇華させる。
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 className="text-3xl mb-4">
                    Our Mission: A New Style of Change.
                  </h4>
                  
                  <p className="text-2xl leading-relaxed font-light">
                    八雷神は、この二者が出会い、化学反応を起こすための<strong className="text-yakusa-accent font-bold">ライフスタイルブランド</strong>であり、カルチャーそのものである。
                    私たちは、社会課題への取り組みを、義務や自己犠牲ではなく、<strong className="text-yakusa-accent font-bold">洗練された自己表現</strong>であり、<strong className="text-yakusa-accent font-bold">最もクールなスタイル</strong>であると再定義する。既存の枠にとらわれないプロダクトやプロジェクトを通じて、変革者と挑戦者、そしてその活動を取り巻く世界を、より豊かに、より刺激的に彩っていく。
                  </p>
                </div>

                <div className="space-y-6">
                  <h4 className="text-3xl mb-4">
                    Our Vision: A Society of Changemakers.
                  </h4>
                  
                  <p className="text-2xl leading-relaxed font-light">
                    私たちの最終的な目標は、特別な誰かだけが社会を語るのではない、未来の創造。
                    すべての人が社会に関心を持ち、自らのスタイルで課題解決に挑むことが「当たり前」で「かっこいい」と誰もが信じる<strong className="text-yakusa-accent font-bold">文化を、この国に根付かせる</strong>ことだ。
                  </p>

                  <p className="text-2xl leading-relaxed font-light font-medium">
                    八雷神は、その狼煙（のろし）となる。
                  </p>
                </div>
              </div>
            </div>              <div className="border-t border-yakusa-text/10 pt-8">
              <div className="flex items-center justify-between mb-6">
                <p className="text-2xl text-yakusa-text-muted leading-relaxed font-light">
                  八雷神のストーリーを知る。
                </p>
                <button
                  onClick={toggleConcepts}
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-yakusa-accent hover:bg-yakusa-accent/80 transition-colors duration-200 group"
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
                    />                  </svg>
                </button>
              </div>
            </div>
          </div>
            {/* コンセプトセクション - 条件付き表示 */}
          {showConcepts && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="overflow-hidden mt-12"
            >              {/* ストーリーセクション */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="mb-12 text-left max-w-3xl mx-auto"
              >
                <h3 className="text-3xl font-bold mb-8">
                  ストーリー
                </h3>
                <div className="space-y-6 text-yakusa-text-muted">
                  <p className="text-lg leading-relaxed font-light">
                    私たちの団体名『八雷神』は、古代の書物『古事記』に登場する、黄泉の国の恐ろしい神々の名を思い起こさせるかもしれません。しかし、私たちのインスピレーションの源は、神話の彼方にあるのではなく、もっと身近な、この白金の土そのものにあります。
                  </p>
                  
                  <p className="text-lg leading-relaxed font-light">
                    古く平安の時代、この白金の地に疫病が流行し、人々が苦しんでいた時、私たちの祖先は力強い守護の神に救いを求めました。それが、現在も白金六丁目にその名を残す『雷神山』に祀られた、偉大なる雷の神でした。この雷神は、災厄を打ち払い、人々に健康と安全をもたらす希望の象徴として、永くこの地で崇敬されてきたのです。
                  </p>
                  
                  <p className="text-lg leading-relaxed font-light">
                    私たちが『八』という数字を選んだのは、黄泉の国の八柱の神々のためではありません。古来より『八』は、『八方（はっぽう）』という言葉に象徴されるように、あらゆる方角、すなわち『すべて』を意味する縁起の良い数字です。これは、私たちの活動が白金の隅々にまで行き渡り、地域全体を包括的に盛り上げていきたいという願いを表しています。
                  </p>
                  
                  <p className="text-lg leading-relaxed font-light">
                    私たちが考える『雷神』とは、停滞した空気を一掃し、大地に実りをもたらす恵みの雨を呼ぶ、力強い活性化のエネルギーの比喩です。雷鳴のように私たちの活動の声を響かせ、稲妻のように新たな光を街にもたらし、白金の未来をより豊かに耕していく。それが私たちの目指す『雷神』の姿です。
                  </p>
                  
                  <p className="text-lg leading-relaxed font-light">
                    かつて白金を守った雷神の御霊は、失われたわけではありません。地域の総鎮守である白金氷川神社に合祀され、今も静かに私たちを見守っています。私たち『八雷神』は、その守護と活性化の御心を受け継ぎ、現代における地域の担い手として、白金のために尽力することを誓うものです。
                  </p>                </div>
              </motion.div>
              
              {/* 非表示ボタン - ストーリーの下 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex justify-center mt-8"
              >
                <button
                  onClick={toggleConcepts}
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-yakusa-accent hover:bg-yakusa-accent/80 transition-colors duration-200 group"
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
                </button>
              </motion.div>

            </motion.div>
          )}        </motion.div>
      </div>
    </section>
  );
}
