import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';

export default function Privacy() {
  return (
    <main className="relative">
      <Navigation />
      
      {/* グラデーション背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black"></div>
      
      {/* 装飾的要素 */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-900/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-800/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative pt-32 pb-16 min-h-screen">
        <div className="zeta-container">
          <div className="max-w-4xl mx-auto">
            {/* ヘッダー */}
            <div className="mb-16 text-center">
              <h1 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-wider">
                プライバシーポリシー
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-orange-500 mx-auto mb-6"></div>
              <p className="text-xl text-gray-300 font-light leading-relaxed">
                八雷神における個人情報の取り扱いについて
              </p>
            </div>

            {/* コンテンツ */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
              <div className="prose prose-lg max-w-none">
                <section className="mb-12">
                  <h2 className="text-3xl font-medium mb-6 text-white tracking-wide">
                    1. 個人情報の収集について
                  </h2>
                  <p className="text-lg leading-relaxed mb-4 text-gray-300">
                    八雷神（以下「当団体」）では、お客様からお預かりする個人情報の重要性を強く認識し、個人情報の保護に関する法律、その他の関係法令を遵守すると共に、以下のプライバシーポリシーに従って、個人情報を適切に取り扱います。
                  </p>
                  <p className="text-lg leading-relaxed text-gray-300">
                    当団体では、以下の目的のために必要な範囲で個人情報を収集することがあります：
                  </p>
                  <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-300">
                    <li>各種お問い合わせへの回答のため</li>
                    <li>サービス・商品に関する情報提供のため</li>
                    <li>当団体のイベント・活動に関するご案内のため</li>
                    <li>統計的データの作成のため</li>
                  </ul>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-medium mb-6 text-white tracking-wide">
                    2. 個人情報の利用目的
                  </h2>
                  <p className="text-lg leading-relaxed mb-4 text-gray-300">
                    当団体は、お客様の個人情報を以下の目的で利用いたします：
                  </p>
                  <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-300">
                    <li>お客様への連絡・情報提供</li>                    <li>お客様からのお問い合わせへの対応</li>
                    <li>当団体のサービス向上・新サービス開発</li>
                    <li>マーケティング・統計分析</li>
                    <li>その他、お客様にとって有益と思われる情報の提供</li>
                  </ul>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-medium mb-6 text-white tracking-wide">
                    3. 個人情報の第三者提供
                  </h2>
                  <p className="text-lg leading-relaxed text-gray-300">
                    当団体は、以下の場合を除き、お客様の同意なく個人情報を第三者に提供することはありません：
                  </p>
                  <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-300">
                    <li>法令に基づく場合</li>
                    <li>人の生命、身体又は財産の保護のために必要がある場合</li>
                    <li>公衆衛生の向上又は児童の健全な育成の推進のために特に必要がある場合</li>
                    <li>国の機関もしくは地方公共団体又はその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合</li>
                  </ul>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-medium mb-6 text-white tracking-wide">
                    4. 個人情報の管理
                  </h2>
                  <p className="text-lg leading-relaxed text-gray-300">
                    当団体は、お客様の個人情報を適切に管理し、紛失、破壊、改ざん及び漏洩などを防止するため、必要かつ適切な安全管理措置を講じます。また、個人情報の取り扱いを委託する場合は、委託先に対して適切な監督を行います。
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-medium mb-6 text-white tracking-wide">
                    5. 個人情報の開示・訂正等
                  </h2>
                  <p className="text-lg leading-relaxed text-gray-300">
                    お客様は、当団体が保有する個人情報について、開示、訂正、追加、削除、利用停止等を求めることができます。これらのお申し出をいただいた場合は、お客様ご本人であることを確認させていただいた上で、法令に従って対応いたします。
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-medium mb-6 text-white tracking-wide">
                    6. Cookieの使用について
                  </h2>
                  <p className="text-lg leading-relaxed text-gray-300">
                    当団体のウェブサイトでは、より良いサービス提供のため、Cookieを使用することがあります。Cookieの使用を希望されない場合は、ブラウザの設定により無効にすることができます。ただし、この場合、一部のサービスがご利用いただけない場合があります。
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-medium mb-6 text-white tracking-wide">
                    7. プライバシーポリシーの変更
                  </h2>
                  <p className="text-lg leading-relaxed text-gray-300">
                    当団体は、法令の変更等に伴い、このプライバシーポリシーを変更することがあります。変更後のプライバシーポリシーは、当ウェブサイトに掲載した時点から効力を生じるものとします。
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-3xl font-medium mb-6 text-white tracking-wide">
                    8. お問い合わせ
                  </h2>
                  <p className="text-lg leading-relaxed mb-4 text-gray-300">
                    個人情報の取り扱いに関するお問い合わせは、以下までご連絡ください：
                  </p>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-lg">
                    <p className="text-lg font-medium text-white mb-2">八雷神</p>
                    <p className="text-gray-300">東京都港区白金</p>
                    <p className="text-gray-300">メール: contact@8ikazuchi.jp</p>
                  </div>
                </section>

                <div className="text-center pt-8 border-t border-white/20">
                  <p className="text-gray-400">
                    制定日：2025年6月16日
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
