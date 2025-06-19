'use client';

import { motion } from 'framer-motion';
import { getImagePath } from '@/utils/paths';
import Image from 'next/image';

export function Partners() {
  const partners = [
    {
      name: 'パートナー企業A',
      category: 'Technology',
      description: 'デジタル変革を通じたコミュニティ支援',
      logo: getImagePath('/images/partners/partner-a.svg')
    },
    {
      name: 'パートナー企業B',
      category: 'Culture',
      description: '伝統文化保存と現代アートの融合プロジェクト',
      logo: getImagePath('/images/partners/partner-b.svg')
    },
    {
      name: 'パートナー企業C',
      category: 'Community',
      description: '地域住民との持続可能な関係構築',
      logo: getImagePath('/images/partners/partner-c.svg')
    },
    {
      name: 'パートナー企業D',
      category: 'Innovation',
      description: '革新的なソリューションによる地域課題解決',
      logo: getImagePath('/images/partners/partner-d.svg')
    }
  ];

  return (
    <section id="partners" className="zeta-section relative overflow-hidden">
      {/* 背景グラデーション */}
      <div className="absolute inset-0 bg-gradient-to-br from-yakusa-bg-main via-yakusa-bg-main/95 to-yakusa-bg-sub opacity-95" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,_69,_19,_0.1)_0%,transparent_50%)] opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,_69,_19,_0.05)_0%,transparent_50%)]" />
      
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
              PARTNERS
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
            共に未来を創造するパートナーシップ
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-10">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
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
                y: -12,
                transition: { duration: 0.3, type: "spring", bounce: 0.4 }
              }}
              className="group relative"
            >
              {/* カード背景 */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl border border-white/10 group-hover:border-yakusa-accent/30 transition-all duration-500" />
              <div className="absolute inset-0 bg-yakusa-bg-card/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* カードコンテンツ */}
              <div className="relative p-8 text-center h-full flex flex-col">                {/* ロゴ */}
                <div className="relative mb-8 mx-auto">
                  <div className="w-24 h-24 lg:w-28 lg:h-28 relative rounded-2xl overflow-hidden group-hover:scale-105 transition-all duration-500 flex items-center justify-center">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      fill
                      className="object-contain p-4 transition-all duration-500 group-hover:scale-110"
                      sizes="(max-width: 1024px) 96px, 112px"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                  {/* グロー効果 */}
                  <div className="absolute inset-0 rounded-2xl bg-yakusa-accent/20 blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500 -z-10" />
                </div>                {/* カテゴリー */}
                <div className="mb-4">
                  <span className="inline-block px-4 py-2 text-yakusa-text-muted text-sm font-medium tracking-wide uppercase">
                    {partner.category}
                  </span>
                </div>

                {/* 名前 */}
                <h3 className="text-xl lg:text-2xl font-medium text-yakusa-text mb-4 tracking-wider group-hover:text-yakusa-accent transition-colors duration-300">
                  {partner.name}
                </h3>

                {/* 説明 */}
                <p className="text-base lg:text-lg text-yakusa-text-muted leading-relaxed font-light flex-grow">
                  {partner.description}
                </p>

                {/* 装飾線 */}
                <div className="mt-6">
                  <div className="w-0 group-hover:w-12 h-0.5 bg-gradient-to-r from-transparent via-yakusa-accent to-transparent transition-all duration-500 mx-auto" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* パートナーシップ募集セクション */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}              className="relative group bg-gradient-to-br from-yakusa-bg-card/30 to-yakusa-bg-card/10 rounded-3xl p-12 border border-white/10 hover:border-yakusa-accent/30 transition-all duration-500"
            >
              
              <div className="relative z-10">
                <h3 className="text-3xl lg:text-4xl font-medium text-yakusa-text mb-6 tracking-wide">
                  パートナーシップ募集
                </h3>
                <p className="text-xl lg:text-2xl text-yakusa-text-muted leading-relaxed font-light mb-8">
                  共に社会課題解決に取り組み、<br className="hidden sm:block" />
                  未来の文化を創造するパートナーを募集しています。
                </p>
                  <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-block"
                >
                  <div className="relative px-8 py-3 text-yakusa-text font-light tracking-wide border border-yakusa-accent/30 hover:border-yakusa-accent/50 rounded-lg transition-all duration-300 cursor-pointer group overflow-hidden">
                    <span className="relative z-10">お問い合わせ</span>
                    <div className="absolute inset-0 bg-yakusa-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
