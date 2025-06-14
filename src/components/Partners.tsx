'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

export function Partners() {
  const partners = [
    {
      id: 1,
      name: "白金商工会",
      description: "地域商業の発展と活性化をサポート",
      category: "地域団体",
      logo: "/partner-1.svg",
      website: "#"
    },
    {
      id: 2,
      name: "港区文化財団",
      description: "文化保護と継承活動で連携",
      category: "文化団体",
      logo: "/partner-2.svg",
      website: "#"
    },
    {
      id: 3,
      name: "テック・ソリューションズ",
      description: "デジタル技術による地域DX推進",
      category: "テクノロジー",
      logo: "/partner-3.svg",
      website: "#"
    },
    {
      id: 4,
      name: "グリーン・アーキテクト",
      description: "持続可能な都市開発の設計・建築",
      category: "建築・デザイン",
      logo: "/partner-4.svg",
      website: "#"
    },
    {
      id: 5,
      name: "コミュニティ・バンク",
      description: "地域経済の発展をサポート",
      category: "金融",
      logo: "/partner-5.svg",
      website: "#"
    },
    {
      id: 6,
      name: "メディア・コネクト",
      description: "地域情報の発信と広報活動",
      category: "メディア",
      logo: "/partner-6.svg",
      website: "#"
    }
  ];

  const categories = ["すべて", "地域団体", "文化団体", "テクノロジー", "建築・デザイン", "金融", "メディア"];

  return (
    <section id="partners" className="py-20 bg-yakusa-navy relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-yakusa-white mb-6">
            PARTNERS
          </h2>
          <p className="text-lg text-yakusa-light max-w-2xl mx-auto">
            八雷神の活動を支えてくださるパートナー企業・団体をご紹介します
          </p>
        </motion.div>

        {/* カテゴリフィルター */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full border border-yakusa-red/30 text-yakusa-light hover:bg-yakusa-red hover:text-yakusa-white transition-all duration-300"
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-black/50 rounded-lg p-6 border border-yakusa-red/20 hover:border-yakusa-red/40 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-16 h-16 bg-yakusa-white rounded-lg flex items-center justify-center">
                  <div className="w-12 h-12 bg-yakusa-navy rounded flex items-center justify-center">
                    <span className="text-yakusa-red font-bold text-lg">
                      {partner.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <a
                  href={partner.website}
                  className="text-yakusa-light hover:text-yakusa-red transition-colors duration-300"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              
              <div className="mb-3">
                <span className="text-xs font-medium text-yakusa-red bg-yakusa-red/20 px-2 py-1 rounded-full">
                  {partner.category}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold text-yakusa-white mb-3 group-hover:text-yakusa-red transition-colors duration-300">
                {partner.name}
              </h3>
              
              <p className="text-yakusa-light leading-relaxed">
                {partner.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-yakusa-red/10 rounded-lg p-8 border border-yakusa-red/30">
            <h3 className="text-2xl font-bold text-yakusa-white mb-4">
              パートナーシップのご相談
            </h3>
            <p className="text-yakusa-light mb-6 max-w-3xl mx-auto">
              八雷神では、地域の発展と創造的な未来づくりに共感していただける企業・団体との
              パートナーシップを積極的に推進しています。一緒に新しい価値を創造しませんか？
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yakusa-red hover:bg-yakusa-red/80 text-yakusa-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                パートナーシップについて
              </button>
              <button className="border-2 border-yakusa-red text-yakusa-red hover:bg-yakusa-red hover:text-yakusa-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                スポンサーシップについて
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
