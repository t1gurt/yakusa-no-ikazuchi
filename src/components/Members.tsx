'use client';

import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, ExternalLink } from 'lucide-react';

export function Members() {
  const members = [
    {
      id: 1,
      name: "雷神 太郎",
      role: "代表理事",
      description: "地域コミュニティ活性化のスペシャリスト。15年以上の経験を持つ。",
      image: "/member-1.jpg",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      }
    },
    {
      id: 2,
      name: "八束 花子",
      role: "プロジェクトマネージャー",
      description: "文化保護と都市開発の調和を専門とする建築・都市計画の専門家。",
      image: "/member-2.jpg",
      social: {
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      id: 3,
      name: "稲妻 次郎",
      role: "コミュニティデザイナー",
      description: "デジタル技術を活用したコミュニティ形成のエキスパート。",
      image: "/member-3.jpg",
      social: {
        twitter: "#",
        github: "#"
      }
    },
    {
      id: 4,
      name: "神鳴 美咲",
      role: "イベントプランナー",
      description: "地域イベントの企画・運営を通じて人々を繋ぐ活動を展開。",
      image: "/member-4.jpg",
      social: {
        twitter: "#",
        linkedin: "#"
      }
    }
  ];

  return (
    <section id="members" className="py-20 bg-black relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-yakusa-white mb-6">
            MEMBERS
          </h2>
          <p className="text-lg text-yakusa-light max-w-2xl mx-auto">
            八雷神を支えるメンバーたちをご紹介します
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-yakusa-navy/30 rounded-lg overflow-hidden border border-yakusa-red/20 hover:border-yakusa-red/40 transition-all duration-300 group"
            >
              <div className="relative h-64 bg-yakusa-light/10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-semibold text-yakusa-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-yakusa-red font-medium">
                    {member.role}
                  </p>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-yakusa-light leading-relaxed mb-4">
                  {member.description}
                </p>
                
                <div className="flex gap-3">
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      className="text-yakusa-light hover:text-yakusa-red transition-colors duration-300"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      className="text-yakusa-light hover:text-yakusa-red transition-colors duration-300"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      className="text-yakusa-light hover:text-yakusa-red transition-colors duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-yakusa-navy/30 rounded-lg p-8 border border-yakusa-red/20">
            <h3 className="text-2xl font-bold text-yakusa-white mb-4">
              メンバー募集中
            </h3>
            <p className="text-yakusa-light mb-6 max-w-2xl mx-auto">
              八雷神と共に地域の未来を創造したい方を募集しています。
              あなたの専門性や情熱を活かして、一緒に新しい価値を生み出しませんか？
            </p>
            <button className="bg-yakusa-red hover:bg-yakusa-red/80 text-yakusa-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              参加について問い合わせる
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
