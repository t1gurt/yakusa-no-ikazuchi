'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function Partners() {  const partners = [
    {
      name: 'パートナー企業A',
      category: 'Technology',
      description: 'デジタル変革を通じたコミュニティ支援',
      logo: '/images/partners/partner-a.svg'
    },
    {
      name: 'パートナー企業B',
      category: 'Culture',
      description: '伝統文化保存と現代アートの融合プロジェクト',
      logo: '/images/partners/partner-b.svg'
    },
    {
      name: 'パートナー企業C',
      category: 'Community',
      description: '地域住民との持続可能な関係構築',
      logo: '/images/partners/partner-c.svg'
    }
  ];

  return (    <section id="partners" className="zeta-section bg-yakusa-bg-main">
      <div className="zeta-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}          viewport={{ once: true }}
          className="text-center mb-20"        >          <h2 className="text-4xl sm:text-5xl font-light text-yakusa-text mb-8 tracking-wide">
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
              viewport={{ once: true }}              className="zeta-card bg-yakusa-bg-card/90 border border-yakusa-text/8 text-center"
            >
              <div className="w-24 h-24 relative mx-auto mb-6 rounded-full overflow-hidden bg-yakusa-text/8">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  fill
                  className="object-contain p-2"
                  sizes="96px"
                  onError={(e) => {
                    // フォールバック：画像が見つからない場合は非表示にしてプレースホルダーを表示
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>              <h3 className="text-2xl font-medium text-yakusa-text mb-2 tracking-wider">
                {partner.name}
              </h3>
              <p className="text-xl text-yakusa-text-light mb-4 font-medium tracking-wider uppercase">
                {partner.category}
              </p>
              <p className="text-xl text-yakusa-text-muted leading-relaxed font-light">
                {partner.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
