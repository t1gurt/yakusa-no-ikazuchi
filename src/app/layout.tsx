import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "八雷神 | やくさのいかづち",
  description: "港区白金を拠点とし、伝統と革新を繋ぐ市民団体",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
