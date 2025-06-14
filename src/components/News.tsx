'use client';

import { motion } from 'framer-motion';

export function News() {
  const newsItems = [
    {
      id: 1,
      title: "八雷神設立記念イベント開催のお知らせ",
      summary: "港区白金にて設立記念イベントを開催いたします。地域の皆様との交流を深める機会として...",
      date: "2025.06.14",
      category: "EVENT"
    },
    {
      id: 2,
      title: "地域活性化プロジェクト始動",
      summary: "白金地区の歴史と文化を保護しながら、新たなコミュニティ形成を目指すプロジェクトが...",
      date: "2025.06.10",
      category: "PROJECT"
    },
    {
      id: 3,
      title: "パートナー企業との連携について",
      summary: "地域発展に向けた取り組みを強化するため、新たなパートナー企業との連携を発表...",
      date: "2025.06.05",
      category: "PARTNERSHIP"
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

        <div className="space-y-8 max-w-4xl mx-auto">
          {newsItems.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-b border-yakusa-gray/20 pb-8 hover:border-yakusa-red/50 transition-colors duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-sm text-yakusa-gray font-medium tracking-wider uppercase">
                      {item.category}
                    </span>
                    <span className="text-sm text-yakusa-gray">
                      {item.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-medium text-yakusa-dark mb-3 hover:text-yakusa-red transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-yakusa-gray leading-relaxed font-light">
                    {item.summary}
                  </p>
                </div>
                <div className="md:ml-8">
                  <button className="text-yakusa-red hover:text-yakusa-dark text-sm font-medium tracking-wider uppercase transition-colors duration-300">
                    READ MORE
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="border border-yakusa-dark text-yakusa-dark hover:bg-yakusa-dark hover:text-yakusa-white px-8 py-4 text-sm font-medium tracking-wider uppercase transition-colors duration-300">
            VIEW ALL NEWS
          </button>
        </motion.div>
      </div>
    </section>
  );
}
