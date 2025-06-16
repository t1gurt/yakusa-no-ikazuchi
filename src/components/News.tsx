'use client';

import { motion } from 'framer-motion';

export function News() {
  const newsItems = [
    {
      date: '2025.06.01',
      category: 'TEAM',
      title: '八雷神発足のお知らせ',
      description: '混沌からの創造をテーマに、新たなライフスタイルブランド「八雷神(yakusa-no-ikazuchi)」が正式に発足いたしました。'
    }
  ];

  return (    <section id="news" className="zeta-section bg-yakusa-bg-sub">
      <div className="zeta-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}          viewport={{ once: true }}
          className="text-center mb-20"
        >          <h2 className="text-4xl sm:text-5xl font-light text-yakusa-text mb-8 tracking-wide">
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
              className="border-b border-yakusa-text/15 py-8 last:border-b-0"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-shrink-0">                  <span className="text-lg font-medium text-yakusa-text-light tracking-wider">
                    {item.date}
                  </span>
                  <span className="ml-4 px-3 py-1 bg-yakusa-accent text-white text-sm font-medium tracking-wider">
                    {item.category}
                  </span>
                </div>
                <div className="flex-grow">                  <h3 className="text-2xl font-medium text-yakusa-text mb-2 tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-xl text-yakusa-text-muted font-light leading-relaxed">
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