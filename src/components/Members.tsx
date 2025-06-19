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
      image: "/images/members/keisuke.svg",
      tags: ["テクノロジー", "越境学習", "ビール", "コミュニティ"],
      achievements: ["地域IT推進賞受賞", "クラフトビール検定1級", "越境学習プログラム設計"],
      interests: ["醸造技術", "デジタル変革", "地域活性化"]
    },
    {
      name: "中村 綾子",
      role: "ママ",
      description: "恋愛バラエティが大好き！",
      detailedDescription: "家族の絆を大切にしながら、現代的な価値観で地域コミュニティに貢献するママ。恋愛バラエティを通じて人間関係の機微を理解し、それをコミュニティ運営に活かしています。温かい人柄で多くの人々に愛されています。",
      image: "/images/members/ayako.svg",
      tags: ["ファミリー", "コミュニティ", "エンターテイメント", "人間関係"],
      achievements: ["地域子育て支援功労賞", "コミュニティイベント企画100回達成"],
      interests: ["恋愛バラエティ", "子育て支援", "地域イベント企画"]
    },
    {
      name: "中村 虎政",
      role: "かわいい担当",
      description: "とにかくかわいい1年生。",
      detailedDescription: "八雷神の最年少メンバーとして、純粋な心と無限の可能性を持つ1年生。その愛らしさで周囲の人々を笑顔にし、新鮮な視点で組織に活力をもたらしています。未来のリーダーとして期待されています。",
      image: "/images/members/toramasa.svg",
      tags: ["次世代", "純粋", "エネルギー", "未来"],
      achievements: ["地域子ども大使任命", "笑顔大賞受賞"],
      interests: ["遊び", "学習", "新しい発見"]
    }
  ];

  const closeModal = () => {
    setSelectedMember(null);
  };
  return (
    <section id="members" className="zeta-section relative overflow-hidden">
      {/* 背景グラデーション */}
      <div className="absolute inset-0 bg-gradient-to-br from-yakusa-bg-sub via-yakusa-bg-sub/90 to-yakusa-bg-main opacity-95" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,_69,_19,_0.1)_0%,transparent_50%)] opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,_69,_19,_0.05)_0%,transparent_50%)]" />
      
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
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extralight text-yakusa-text mb-4 tracking-[0.02em] relative">
              MEMBERS
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-gradient-to-r from-transparent via-yakusa-accent to-transparent opacity-70" />
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-yakusa-text-muted font-light tracking-wide max-w-2xl mx-auto"
          >
            八雷神を支える個性豊かなメンバーたち
          </motion.p>
        </motion.div>        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {members.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.15,
                type: "spring",
                bounce: 0.1
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3, type: "spring", bounce: 0.4 }
              }}
              className="group relative cursor-pointer"
              onClick={() => setSelectedMember(member)}
            >
              {/* カード背景 */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl border border-white/10 group-hover:border-yakusa-accent/30 transition-all duration-500" />
              <div className="absolute inset-0 bg-yakusa-bg-card/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* カードコンテンツ */}
              <div className="relative p-8 lg:p-10 text-center h-full flex flex-col">
                {/* アバター */}
                <div className="relative mb-8 mx-auto">
                  <div className="w-32 h-32 lg:w-40 lg:h-40 relative rounded-full overflow-hidden bg-gradient-to-br from-yakusa-accent/20 to-yakusa-accent/5 border-2 border-white/10 group-hover:border-yakusa-accent/40 transition-all duration-500 group-hover:scale-105">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-all duration-500 group-hover:scale-110"
                      sizes="(max-width: 1024px) 128px, 160px"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                  {/* グロー効果 */}
                  <div className="absolute inset-0 rounded-full bg-yakusa-accent/20 blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500 -z-10" />
                </div>

                {/* 名前 */}
                <h3 className="text-2xl lg:text-3xl font-medium text-yakusa-text mb-3 tracking-wider group-hover:text-yakusa-accent transition-colors duration-300">
                  {member.name}
                </h3>

                {/* 役割 */}
                <div className="relative mb-6">
                  <p className="text-lg lg:text-xl text-yakusa-text-light font-medium tracking-widest uppercase relative z-10">
                    {member.role}
                  </p>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-16 h-0.5 bg-gradient-to-r from-transparent via-yakusa-accent to-transparent transition-all duration-500" />
                </div>

                {/* 説明 */}
                <p className="text-lg lg:text-xl text-yakusa-text-muted leading-relaxed font-light flex-grow">
                  {member.description}
                </p>                {/* タグプレビュー */}
                <div className="mt-6 flex flex-wrap justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  {member.tags.slice(0, 2).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-4 py-2 text-yakusa-text-muted text-sm font-medium tracking-wide uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                  {member.tags.length > 2 && (
                    <span className="px-4 py-2 text-yakusa-text-muted text-sm font-medium tracking-wide uppercase">
                      +{member.tags.length - 2}
                    </span>
                  )}
                </div>

                {/* ホバー時のCTA */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="text-sm text-yakusa-accent font-medium flex items-center justify-center gap-2">
                    <span>詳細を見る</span>
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>        {/* モーダル */}        {selectedMember && (          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-40 flex items-center justify-center p-4 pt-24 overflow-hidden"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ 
                duration: 0.4,
                type: "spring",
                bounce: 0.1
              }}
              className="bg-gradient-to-br from-yakusa-bg-card/95 to-yakusa-bg-card/90 backdrop-blur-xl rounded-3xl max-w-5xl w-full h-[85vh] flex flex-col border border-white/15 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* 背景装飾 */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-yakusa-accent/10 to-transparent rounded-full blur-3xl opacity-60" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-yakusa-accent/5 to-transparent rounded-full blur-2xl" />
                {/* ヘッダー */}
              <div className="relative p-6 lg:p-8 border-b border-white/10 flex-shrink-0">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-200 hover:scale-105 group"
                  aria-label="閉じる"
                >
                  <svg className="w-5 h-5 text-yakusa-text group-hover:text-yakusa-accent transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="flex flex-col lg:flex-row items-center gap-6">
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-32 h-32 lg:w-40 lg:h-40 relative rounded-full overflow-hidden bg-gradient-to-br from-yakusa-accent/20 to-yakusa-accent/5 border-2 border-white/20 flex-shrink-0"
                  >
                    <Image
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 128px, 160px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                  </motion.div>
                  
                  <motion.div 
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-center lg:text-left"
                  >
                    <h2 className="text-3xl lg:text-4xl font-light text-yakusa-text mb-3 tracking-wide">
                      {selectedMember.name}
                    </h2>
                    <div className="relative inline-block">
                      <p className="text-xl lg:text-2xl text-yakusa-text-light font-medium tracking-widest uppercase">
                        {selectedMember.role}
                      </p>
                      <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-yakusa-accent/50 to-transparent" />
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* コンテンツ - スクロール可能 */}
              <div className="flex-1 overflow-y-auto p-6 lg:p-8">
                {/* 詳細説明 */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="mb-8"
                >
                  <h3 className="text-xl lg:text-2xl font-medium text-yakusa-text mb-4 tracking-wide flex items-center gap-3">
                    <div className="w-2 h-6 bg-gradient-to-b from-yakusa-accent to-yakusa-accent/50 rounded-full" />
                    プロフィール
                  </h3>
                  <p className="text-base lg:text-lg text-yakusa-text-muted leading-relaxed font-light pl-5">
                    {selectedMember.detailedDescription}
                  </p>
                </motion.div>

                {/* タグ */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="mb-8"
                >
                  <div className="flex flex-wrap gap-2">                    {selectedMember.tags.map((tag, index) => (
                      <motion.span
                        key={index}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                        className="px-4 py-2 text-yakusa-text-muted text-sm font-medium tracking-wide uppercase"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                  {/* 実績 */}
                  {selectedMember.achievements && (
                    <motion.div 
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      <h3 className="text-xl font-medium text-yakusa-text mb-4 tracking-wide flex items-center gap-3">
                        <div className="w-2 h-6 bg-gradient-to-b from-yakusa-accent to-yakusa-accent/50 rounded-full" />
                        実績・受賞歴
                      </h3>
                      <ul className="space-y-3 pl-5">
                        {selectedMember.achievements.map((achievement, index) => (
                          <motion.li 
                            key={index} 
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                            className="flex items-start gap-3 group"
                          >
                            <div className="w-2.5 h-2.5 bg-yakusa-accent rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                            <span className="text-base text-yakusa-text-muted font-light leading-relaxed">
                              {achievement}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                  {/* 興味・関心 */}
                  {selectedMember.interests && (
                    <motion.div 
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                    >
                      <h3 className="text-xl font-medium text-yakusa-text mb-4 tracking-wide flex items-center gap-3">
                        <div className="w-2 h-6 bg-gradient-to-b from-yakusa-text/50 to-yakusa-text/25 rounded-full" />
                        興味・関心
                      </h3>
                      <ul className="space-y-3 pl-5">
                        {selectedMember.interests.map((interest, index) => (
                          <motion.li 
                            key={index} 
                            initial={{ x: 10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                            className="flex items-start gap-3 group"
                          >
                            <div className="w-2.5 h-2.5 bg-yakusa-text/40 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                            <span className="text-base text-yakusa-text-muted font-light leading-relaxed">
                              {interest}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
