import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
      },      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",        // 八雷神ブランドカラー
        yakusa: {
          'bg-main': '#e4e5e6',      // メイン背景色
          'bg-sub': '#f0f1f2',       // サブ背景色（より明るい）
          'bg-card': '#ffffff',      // カード背景色
          accent: '#b20024',         // アクセントカラー
          text: '#000023',           // 文字色
          'text-light': '#4a4a5a',   // ライト文字色
          'text-muted': '#4a4a5a',   // ミュート文字色（text-lightと統一）
          white: '#ffffff',          // ホワイト
          gray: '#6c757d',           // グレー
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
