'use client';

import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="zeta-section bg-yakusa-bg-main">
      <div className="zeta-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}          viewport={{ once: true }}
          className="text-center mb-20"        >          <h2 className="text-4xl sm:text-5xl font-light text-yakusa-text mb-8 tracking-wide">
            ABOUT
          </h2><div className="max-w-4xl mx-auto">{/* メインメッセージ - 団体の位置づけ */}
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
            </div>
              <div className="border-t border-yakusa-text/10 pt-8">
              <p className="text-2xl text-yakusa-text-muted leading-relaxed font-light">
                八雷神の理念を構成する重要なコンセプトについて詳しく解説します。
              </p>
            </div>
          </div>
        </motion.div>

        <div className="zeta-grid">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="zeta-card bg-yakusa-bg-card/90 border border-yakusa-text/8"
          >            <h3 className="text-3xl font-medium text-yakusa-text mb-4 tracking-wider">
              変革者 (Changemaker)
            </h3>
            <p className="text-2xl text-yakusa-text-muted leading-relaxed font-light">
              挑戦者の内に眠るエネルギーを見出し、共鳴し、解放する触媒となる人々。単なる支援者ではなく、挑戦者と共に社会を前進させる創造的パートナーです。
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="zeta-card bg-yakusa-bg-card/90 border border-yakusa-text/8"
          >            <h3 className="text-3xl font-medium text-yakusa-text mb-4 tracking-wider">
              挑戦者 (Challenger)
            </h3>
            <p className="text-2xl text-yakusa-text-muted leading-relaxed font-light">
              社会課題の当事者でありながら、その現状を打破する巨大なエネルギーを内に秘めた人々。被支援者ではなく、未来を創造する主体として捉えています。
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="zeta-card bg-yakusa-bg-card/90 border border-yakusa-text/8"
          >            <h3 className="text-3xl font-medium text-yakusa-text mb-4 tracking-wider">
              ライフスタイルブランド
            </h3>
            <p className="text-2xl text-yakusa-text-muted leading-relaxed font-light">
              社会課題解決を生活様式として統合し、それを洗練されたカルチャーとして表現する仕組み。社会参加を義務ではなく、魅力的な自己表現にします。
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="zeta-card bg-yakusa-bg-card/90 border border-yakusa-text/8"
          >            <h3 className="text-3xl font-medium text-yakusa-text mb-4 tracking-wider">
              文化の創造
            </h3>
            <p className="text-2xl text-yakusa-text-muted leading-relaxed font-light">
              社会課題に取り組むことが「当たり前」で「かっこいい」と認識される新しい価値観を社会に根付かせること。これが八雷神の最終的な目標です。
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
