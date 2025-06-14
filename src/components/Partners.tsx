'use client';

import { motion } from 'framer-motion';

export function Partners() {
  const partners = [
    {
      name: 'パートナー企業A',
      category: 'Technology',
      description: 'デジタル変革を通じたコミュニティ支援'
    },
    {
      name: 'パートナー企業B',
      category: 'Culture',
      description: '伝統文化保存と現代アートの融合プロジェクト'
    },
    {
      name: 'パートナー企業C',
      category: 'Community',
      description: '地域住民との持続可能な関係構築'
    },
    {
      name: 'パートナー企業D',
      category: 'Innovation',
      description: '新たな価値創造への挑戦とサポート'
    }
  ];

  return (    <section id="partners" className="zeta-section bg-white">
      <div className="zeta-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-light text-black mb-8 tracking-wide">
            PARTNERS
          </h2>
        </motion.div>

        <div className="zeta-grid">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="zeta-card bg-gray-50 border border-gray-200 text-center"
            >
              <div className="w-16 h-16 bg-gray-200 rounded mx-auto mb-6"></div>
              <h3 className="text-xl font-medium text-black mb-2 tracking-wider">
                {partner.name}
              </h3>
              <p className="text-sm text-gray-700 mb-4 font-medium tracking-wider uppercase">
                {partner.category}
              </p>
              <p className="text-gray-600 leading-relaxed font-light">
                {partner.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
