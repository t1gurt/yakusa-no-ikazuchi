'use client';

import { motion } from 'framer-motion';

export function Members() {
  const members = [
    {
      name: "田中 雷太",
      role: "代表理事",
      description: "地域活性化の専門家として、白金地区の歴史的価値を現代に活かす活動を推進。"
    },
    {
      name: "佐藤 雷子",
      role: "プロジェクトマネージャー",
      description: "コミュニティビルディングの経験を活かし、多世代交流の場づくりを担当。"
    },
    {
      name: "鈴木 雷介",
      role: "文化企画担当",
      description: "伝統文化の継承と革新的アプローチの融合により、新しい文化体験を創造。"
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
        >
          <h2 className="text-4xl sm:text-5xl font-light text-yakusa-text mb-8 tracking-wide">
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
              <div className="w-24 h-24 bg-yakusa-text/8 rounded-full mx-auto mb-6"></div>
              <h3 className="text-xl font-medium text-yakusa-text mb-2 tracking-wider">
                {member.name}
              </h3>
              <p className="text-sm text-yakusa-text-light mb-4 font-medium tracking-wider uppercase">
                {member.role}
              </p>
              <p className="text-yakusa-text-muted leading-relaxed font-light">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
