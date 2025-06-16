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

  return (
    <section id="news" className="relative py-32 overflow-hidden">
      {/* グラデーション背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      
      {/* 装飾的要素 */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-800/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative zeta-container">
        {/* セクションヘッダー */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="relative inline-block">
            <motion.h2 
              className="text-5xl sm:text-6xl font-light text-white mb-6 tracking-wide"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              NEWS
            </motion.h2>
            <motion.div 
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-red-600 to-orange-500"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            ></motion.div>
          </div>
          <motion.p 
            className="text-xl text-gray-300 font-light mt-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
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
            >
              <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-red-900/20">
                {/* カード装飾 */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-orange-500 rounded-t-2xl"></div>
                
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
                      <span className="text-xl font-light text-gray-300 tracking-wider">
                        {item.date}
                      </span>
                      <span className="inline-block px-4 py-2 bg-gradient-to-r from-red-600 to-orange-500 text-white text-sm font-medium tracking-wider rounded-full">
                        {item.category}
                      </span>
                    </motion.div>
                  </div>

                  {/* コンテンツ */}
                  <div className="flex-grow">
                    <motion.h3 
                      className="text-2xl sm:text-3xl font-medium text-white mb-4 tracking-wide group-hover:text-red-400 transition-colors duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                    >
                      {item.title}
                    </motion.h3>
                    <motion.p 
                      className="text-lg text-gray-300 font-light leading-relaxed mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                      viewport={{ once: true }}
                    >
                      {item.description}
                    </motion.p>
                    <motion.p 
                      className="text-base text-gray-400 font-light leading-relaxed"
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
                    >
                      <button className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 font-medium tracking-wide transition-colors duration-300 group/btn">
                        詳細を見る
                        <svg 
                          className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* もっと見るボタン */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-500 text-white font-medium tracking-wider rounded-full hover:shadow-lg hover:shadow-red-900/30 transform hover:scale-105 transition-all duration-300">
            全てのニュースを見る
          </button>
        </motion.div>
      </div>
    </section>
  );
}