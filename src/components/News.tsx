'use client';

import { motion } from 'framer-motion';

export function News() {
  const newsItems = [
    {
      date: '2025.06.01',
      category: 'TEAM',
      title: '八雷神発足のお知らせ',
      description: '混沌からの創造をテーマに、新たなライフスタイルブランド「八雷神(yakusa-no-ikazuchi)」が正式に発足いたしました。',
      content: 'この度、混沌からの創造という理念のもと、新しいライフスタイルブランド「八雷神」を発足いたしました。港区白金を拠点に、伝統と革新を融合した独自のアプローチで、新しい価値創造に挑戦してまいります。'
    },
    {
      date: '2025.05.15',
      category: 'UPDATE',
      title: 'ブランドアイデンティティ策定',
      description: 'ブランドの核となるアイデンティティとビジュアルシステムが完成いたしました。',
      content: '数ヶ月にわたる検討を重ね、八雷神のブランドアイデンティティが策定されました。ロゴデザイン、カラーパレット、タイポグラフィなど、ブランドの統一感を保つための包括的なガイドラインを制定いたしました。'
    }
  ];

  return (    <section id="news" className="zeta-section relative overflow-hidden">
      {/* 背景グラデーション */}
      <div className="absolute inset-0 bg-gradient-to-br from-yakusa-bg-main via-yakusa-bg-main/95 to-yakusa-bg-sub opacity-95" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,_69,_19,_0.1)_0%,transparent_50%)] opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,_69,_19,_0.05)_0%,transparent_50%)]" />      <div className="zeta-container relative z-10">
        {/* セクションヘッダー */}
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
              NEWS
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
            八雷神の最新情報をお届けします
          </motion.p>
        </motion.div>

        {/* ニュースリスト */}
        <div className="max-w-4xl mx-auto space-y-8">
          {newsItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >              <div className="relative p-8 lg:p-10 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 hover:border-yakusa-accent/30 transition-all duration-500">
                
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* 日付とカテゴリ */}
                  <div className="flex-shrink-0 lg:w-48">
                    <motion.div 
                      className="flex flex-col sm:flex-row lg:flex-col gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-xl font-light text-yakusa-text-muted tracking-wider">
                        {item.date}
                      </span>
                      <span className="inline-block px-4 py-2 text-yakusa-text-muted text-sm font-medium tracking-wide uppercase">
                        {item.category}
                      </span>
                    </motion.div>
                  </div>                  {/* コンテンツ */}
                  <div className="flex-grow">
                    <motion.h3 
                      className="text-2xl sm:text-3xl font-medium text-yakusa-text mb-4 tracking-wide group-hover:text-yakusa-accent transition-colors duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                    >
                      {item.title}
                    </motion.h3>
                    <motion.p 
                      className="text-lg text-yakusa-text-muted font-light leading-relaxed mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                      viewport={{ once: true }}
                    >
                      {item.description}
                    </motion.p>
                    <motion.p 
                      className="text-base text-yakusa-text-muted font-light leading-relaxed opacity-75"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                    >
                      {item.content}
                    </motion.p>

                    {/* 詳細ボタン */}
                    <motion.div 
                      className="mt-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.6 }}
                      viewport={{ once: true }}
                    >                      <button className="inline-flex items-center gap-2 text-yakusa-text-muted hover:text-yakusa-accent font-light tracking-wide transition-all duration-300 group/btn relative">
                        <span className="relative z-10">詳細を見る</span>
                        <svg 
                          className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300 relative z-10" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                        </svg>
                        <div className="absolute inset-0 bg-yakusa-accent/5 rounded opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 -m-2" />
                      </button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>        {/* もっと見るボタン */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative px-8 py-3 text-yakusa-text font-light tracking-wide border border-yakusa-accent/30 hover:border-yakusa-accent/50 rounded-lg transition-all duration-300 group overflow-hidden"
          >
            <span className="relative z-10">全てのニュースを見る</span>
            <div className="absolute inset-0 bg-yakusa-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}