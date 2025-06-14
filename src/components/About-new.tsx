'use client';

import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="zeta-section bg-yakusa-light">
      <div className="zeta-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-light text-yakusa-dark mb-8 tracking-wide">
            ABOUT
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-yakusa-gray leading-relaxed font-light mb-8">
              私たちの名は、日本の創世神話にその源流を持ちます。
            </p>
            <p className="text-lg text-yakusa-gray leading-relaxed font-light">
              『古事記』において、女神イザナミの亡骸から八柱の雷神が生まれたと記されています。
              これは「死」や「穢れ」という究極の混沌の中から、
              世界を揺るがすほどの強大なエネルギーが生まれることを示す、始まりの物語です。
            </p>
          </div>
        </motion.div>

        <div className="zeta-grid">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="zeta-card bg-yakusa-white"
          >
            <h3 className="text-xl font-medium text-yakusa-dark mb-4 tracking-wider">
              混沌からの創造
            </h3>
            <p className="text-yakusa-gray leading-relaxed font-light">
              日本の創世神話に源流を持つ、イザナミの亡骸から生まれた八柱の雷神の力強い物語を現代に重ね合わせます。
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="zeta-card bg-yakusa-white"
          >
            <h3 className="text-xl font-medium text-yakusa-dark mb-4 tracking-wider">
              地域の活性化
            </h3>
            <p className="text-yakusa-gray leading-relaxed font-light">
              白金の地に眠る守護の心と神話が示す創造の力を受け継ぎ、より豊かで活力に満ちたコミュニティを築きます。
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="zeta-card bg-yakusa-white"
          >
            <h3 className="text-xl font-medium text-yakusa-dark mb-4 tracking-wider">
              多様性の統合
            </h3>
            <p className="text-yakusa-gray leading-relaxed font-light">
              歴史ある邸宅から新しい高層建築まで、この街を構成する多様な価値観を「八」として象徴化します。
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="zeta-card bg-yakusa-white"
          >
            <h3 className="text-xl font-medium text-yakusa-dark mb-4 tracking-wider">
              コミュニティの絆
            </h3>
            <p className="text-yakusa-gray leading-relaxed font-light">
              異なるものが出会う時に生まれる「雷」のエネルギーで、停滞を打ち破り、未来を創造します。
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
