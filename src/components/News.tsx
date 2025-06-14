'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export function News() {
  const newsItems = [
    {
      id: 1,
      title: "八雷神設立記念イベント開催のお知らせ",
      summary: "港区白金にて設立記念イベントを開催いたします。地域の皆様との交流を深める機会として...",
      date: "2025.06.14",
      category: "イベント",
      image: "/news-1.jpg"
    },
    {
      id: 2,
      title: "地域活性化プロジェクト始動",
      summary: "白金地区の歴史と文化を保護しながら、新たなコミュニティ形成を目指すプロジェクトが...",
      date: "2025.06.10",
      category: "プロジェクト",
      image: "/news-2.jpg"
    },
    {
      id: 3,
      title: "パートナー企業との連携について",
      summary: "地域発展に向けた取り組みを強化するため、新たなパートナー企業との連携を発表...",
      date: "2025.06.05",
      category: "パートナーシップ",
      image: "/news-3.jpg"
    }
  ];

  return (
    <section id="news" className="py-20 bg-yakusa-navy relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-yakusa-white mb-6">
            NEWS
          </h2>
          <p className="text-lg text-yakusa-light max-w-2xl mx-auto">
            八雷神の最新の活動やイベント情報をお届けします
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-black/50 rounded-lg overflow-hidden border border-yakusa-red/20 hover:border-yakusa-red/40 transition-all duration-300 group cursor-pointer"
            >
              <div className="relative h-48 bg-yakusa-light/10">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-yakusa-red text-yakusa-white px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-yakusa-light text-sm mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {item.date}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-yakusa-white mb-3 group-hover:text-yakusa-red transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-yakusa-light leading-relaxed mb-4">
                  {item.summary}
                </p>
                
                <div className="flex items-center justify-between">
                  <button className="text-yakusa-red hover:text-yakusa-white flex items-center gap-2 font-medium group-hover:gap-3 transition-all duration-300">
                    詳細を見る
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="bg-yakusa-red hover:bg-yakusa-red/80 text-yakusa-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
            すべてのニュースを見る
          </button>
        </motion.div>
      </div>
    </section>
  );
}
