'use client';

import { motion } from 'framer-motion';
import { Zap, Target, Users, Heart } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "混沌からの創造",
      description: "日本の創世神話に源流を持つ、イザナミの亡骸から生まれた八柱の雷神の力強い物語を現代に重ね合わせます。"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "地域の活性化",
      description: "白金の地に眠る守護の心と神話が示す創造の力を受け継ぎ、より豊かで活力に満ちたコミュニティを築きます。"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "多様性の統合",
      description: "歴史ある邸宅から新しい高層建築まで、この街を構成する多様な価値観を「八」として象徴化します。"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "コミュニティの絆",
      description: "異なるものが出会う時に生まれる「雷」のエネルギーで、停滞を打ち破り、未来を創造します。"
    }
  ];

  return (    <section id="about" className="py-20 bg-yakusa-navy relative overflow-hidden">
      {/* 背景エフェクト */}
      <div className="absolute inset-0 yakusa-pattern opacity-20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >          <h2 className="text-4xl sm:text-5xl font-bold text-yakusa-white mb-6">
            私たちの物語
          </h2>
          <p className="text-lg text-yakusa-light max-w-3xl mx-auto leading-relaxed">
            私たちの名は、日本の創世神話にその源流を持ちます。『古事記』において、
            女神イザナミの亡骸から八柱の雷神が生まれたと記されています。
            これは「死」や「穢れ」という究極の混沌の中から、
            世界を揺るがすほどの強大なエネルギーが生まれることを示す、始まりの物語です。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="bg-yakusa-red/20 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center group-hover:bg-yakusa-red/30 transition-colors duration-300">
                <div className="text-yakusa-red">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-yakusa-white mb-3">
                {feature.title}
              </h3>
              <p className="text-yakusa-light leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-yakusa-navy/30 rounded-lg p-8 border border-yakusa-red/20"
        >
          <h3 className="text-2xl font-bold text-yakusa-white mb-4 text-center">
            私たちの使命
          </h3>
          <p className="text-yakusa-light leading-relaxed text-center max-w-4xl mx-auto">
            現代社会が直面する、再開発による街の変化、コミュニティの希薄化、伝統の喪失といった、
            新たな「混沌」や「痛み」。私たちは、それらをただ嘆くのではなく、向き合い、受け入れ、
            未来を創造するためのエネルギーへと転換することを目指します。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
