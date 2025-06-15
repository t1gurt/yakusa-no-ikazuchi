'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function Members() {  const members = [
    {
      name: "中村 圭輔",
      role: "ビール党",
      description: "42歳。越境学習が趣味。",
      image: "/images/members/keisuke.jpg"
    },
    {
      name: "中村 綾子",
      role: "ママ",
      description: "恋愛バラエティが大好き！ジュエリーも作るよ！",
      image: "/images/members/ayako.jpg"
    },
    {
      name: "中村 虎政",
      role: "かわいい担当",
      description: "とにかくかわいい1年生。マイブームはマインクラフト。",
      image: "/images/members/toramasa.jpg"
    }
  ];

  return (    <section id="members" className="zeta-section bg-yakusa-bg-sub">
      <div className="zeta-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >          <h2 className="text-6xl sm:text-7xl font-light text-yakusa-text mb-8 tracking-wide">
            MEMBERS
          </h2>
        </motion.div>

        <div className="zeta-grid">
          {members.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}              className="zeta-card bg-yakusa-bg-card/90 border border-yakusa-text/8 text-center"
            >
              <div className="w-24 h-24 relative mx-auto mb-6 rounded-full overflow-hidden bg-yakusa-text/8">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="96px"
                  onError={(e) => {
                    // フォールバック：画像が見つからない場合は非表示にしてプレースホルダーを表示
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>              <h3 className="text-3xl font-medium text-yakusa-text mb-2 tracking-wider">
                {member.name}
              </h3>
              <p className="text-2xl text-yakusa-text-light mb-4 font-medium tracking-wider uppercase">
                {member.role}
              </p>
              <p className="text-2xl text-yakusa-text-muted leading-relaxed font-light">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
