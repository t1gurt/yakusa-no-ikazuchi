'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

interface Member {
  name: string;
  role: string;
  description: string;
  detailedDescription: string;
  image: string;
  tags: string[];
  achievements?: string[];
  interests?: string[];
}

export function Members() {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  const members: Member[] = [
    {
      name: "中村 圭輔",
      role: "ビール党",
      description: "42歳。越境学習が趣味。",
      detailedDescription: "テクノロジーと伝統の架け橋として活動する42歳。日々の越境学習を通じて新しい価値創造に取り組んでいます。ビール愛好家としても知られ、醸造文化と地域コミュニティの発展に情熱を注いでいます。",
      image: "/images/members/keisuke.jpg",
      tags: ["テクノロジー", "越境学習", "ビール", "コミュニティ"],
      achievements: ["地域IT推進賞受賞", "クラフトビール検定1級", "越境学習プログラム設計"],
      interests: ["醸造技術", "デジタル変革", "地域活性化"]
    },
    {
      name: "中村 綾子",
      role: "ママ",
      description: "恋愛バラエティが大好き！",
      detailedDescription: "家族の絆を大切にしながら、現代的な価値観で地域コミュニティに貢献するママ。恋愛バラエティを通じて人間関係の機微を理解し、それをコミュニティ運営に活かしています。温かい人柄で多くの人々に愛されています。",
      image: "/images/members/ayako.jpg",
      tags: ["ファミリー", "コミュニティ", "エンターテイメント", "人間関係"],
      achievements: ["地域子育て支援功労賞", "コミュニティイベント企画100回達成"],
      interests: ["恋愛バラエティ", "子育て支援", "地域イベント企画"]
    },
    {
      name: "中村 虎政",
      role: "かわいい担当",
      description: "とにかくかわいい1年生。",
      detailedDescription: "八雷神の最年少メンバーとして、純粋な心と無限の可能性を持つ1年生。その愛らしさで周囲の人々を笑顔にし、新鮮な視点で組織に活力をもたらしています。未来のリーダーとして期待されています。",
      image: "/images/members/toramasa.jpg",
      tags: ["次世代", "純粋", "エネルギー", "未来"],
      achievements: ["地域子ども大使任命", "笑顔大賞受賞"],
      interests: ["遊び", "学習", "新しい発見"]
    }
  ];

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (    <section id="members" className="zeta-section bg-yakusa-bg-sub">
      <div className="zeta-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}          viewport={{ once: true }}
          className="text-center mb-20"        >          <h2 className="text-4xl sm:text-5xl font-light text-yakusa-text mb-8 tracking-wide">
            MEMBERS
          </h2>
        </motion.div>        <div className="zeta-grid">
          {members.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="zeta-card bg-yakusa-bg-card/90 border border-yakusa-text/8 text-center cursor-pointer hover:border-yakusa-accent/30 transition-all duration-300 hover:transform hover:scale-105"
              onClick={() => setSelectedMember(member)}
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
              </div>
              <h3 className="text-2xl font-medium text-yakusa-text mb-2 tracking-wider">
                {member.name}
              </h3>
              <p className="text-xl text-yakusa-text-light mb-4 font-medium tracking-wider uppercase">
                {member.role}
              </p>
              <p className="text-xl text-yakusa-text-muted leading-relaxed font-light">
                {member.description}
              </p>
              <div className="mt-4 text-sm text-yakusa-text-muted">
                クリックして詳細を見る
              </div>
            </motion.div>
          ))}
        </div>

        {/* モーダル */}
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ duration: 0.3 }}
              className="bg-yakusa-bg-card rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-yakusa-text/15 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* ヘッダー */}
              <div className="relative p-8 border-b border-yakusa-text/15">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-yakusa-text/5 hover:bg-yakusa-text/10 transition-colors duration-200"
                  aria-label="閉じる"
                >
                  <svg className="w-6 h-6 text-yakusa-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="flex items-center gap-6">                  <div className="w-96 h-96 relative rounded-full overflow-hidden bg-yakusa-text/8 flex-shrink-0">
                    <Image
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      fill
                      className="object-cover"
                      sizes="384px"
                    />
                  </div>
                  <div>
                    <h2 className="text-3xl font-medium text-yakusa-text mb-2 tracking-wider">
                      {selectedMember.name}
                    </h2>
                    <p className="text-xl text-yakusa-text-light font-medium tracking-wider uppercase">
                      {selectedMember.role}
                    </p>
                  </div>
                </div>
              </div>

              {/* コンテンツ */}
              <div className="p-8">
                {/* 詳細説明 */}
                <div className="mb-8">
                  <h3 className="text-2xl font-medium text-yakusa-text mb-4 tracking-wide">
                    プロフィール
                  </h3>
                  <p className="text-lg text-yakusa-text-muted leading-relaxed font-light">
                    {selectedMember.detailedDescription}
                  </p>
                </div>

                {/* タグ */}
                <div className="mb-8">
                  <div className="flex flex-wrap gap-2">
                    {selectedMember.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-yakusa-accent/10 text-yakusa-accent rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 実績 */}
                {selectedMember.achievements && (
                  <div className="mb-8">
                    <h3 className="text-2xl font-medium text-yakusa-text mb-4 tracking-wide">
                      実績・受賞歴
                    </h3>
                    <ul className="space-y-2">
                      {selectedMember.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-yakusa-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-lg text-yakusa-text-muted font-light">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* 興味・関心 */}
                {selectedMember.interests && (
                  <div>
                    <h3 className="text-2xl font-medium text-yakusa-text mb-4 tracking-wide">
                      興味・関心
                    </h3>
                    <ul className="space-y-2">
                      {selectedMember.interests.map((interest, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-yakusa-text/30 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-lg text-yakusa-text-muted font-light">
                            {interest}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
