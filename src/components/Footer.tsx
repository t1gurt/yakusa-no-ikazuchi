'use client';

export function Footer() {
  return (    <footer className="bg-yakusa-bg-main text-yakusa-text py-16 border-t border-yakusa-text/15">
      <div className="zeta-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* ロゴ・概要 */}          <div>            <h3 className="text-3xl font-light mb-4 tracking-wider text-yakusa-text">八雷神</h3>            <p className="text-xl text-yakusa-text-light font-light leading-relaxed mb-4">
              Creation out of decay.
            </p>
            <p className="text-lg text-yakusa-text-muted font-light">
              港区白金を拠点とするライフスタイルブランド
            </p>
          </div>

          {/* コンタクト */}          <div>            <h4 className="text-2xl font-medium mb-4 tracking-wider text-yakusa-text">CONTACT</h4>
            <div className="space-y-2 text-lg text-yakusa-text-light font-light">
              <p>東京都港区白金</p>
              <p>contact@8ikazuchi.jp</p>
            </div>
          </div>
        </div>

        {/* コピーライト */}        <div className="border-t border-yakusa-text/15 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">            <p className="text-lg text-yakusa-text-muted font-light">
              © 2025 八雷神. All rights reserved.
            </p>            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-lg text-yakusa-text-muted hover:text-yakusa-accent transition-colors duration-200 font-light">
                プライバシーポリシー
              </a>
              <a href="/terms" className="text-lg text-yakusa-text-muted hover:text-yakusa-accent transition-colors duration-200 font-light">
                利用規約
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}