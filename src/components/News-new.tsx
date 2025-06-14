'use client';

import { motion } from 'framer-motion';

export function News() {
  const newsItems = [
    {
      date: '2025.06.14',
      category: 'EVENT',
      title: '第1回八雷神フォーラム開催決定',
      description: '港区白金において、地域活性化をテーマとした初回フォーラムを開催いたします。'
    },
    {
      date: '2025.06.01',
      category: 'TEAM',
      title: '八雷神発足のお知らせ',
      description: '混沌からの創造をテーマに、新たな市民団体「八雷神」が正式に発足いたしました。'
    },
    {
      date: '2025.05.28',
      category: 'PARTNERSHIP',
      title: '地域パートナーシップ締結',
      description: '白金地域の複数企業・団体とパートナーシップを締結し、活動基盤を構築しました。'
    }
  ];

  return (
    <section id="news" className="zeta-section bg-yakusa-white">
      <div className="zeta-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-light text-yakusa-dark mb-8 tracking-wide">
            NEWS
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {newsItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-b border-yakusa-gray/20 py-8 last:border-b-0"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-shrink-0">
                  <span className="text-sm font-medium text-yakusa-gray tracking-wider">
                    {item.date}
                  </span>
                  <span className="ml-4 px-3 py-1 bg-yakusa-red text-yakusa-white text-xs font-medium tracking-wider">
                    {item.category}
                  </span>
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-medium text-yakusa-dark mb-2 tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-yakusa-gray font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}