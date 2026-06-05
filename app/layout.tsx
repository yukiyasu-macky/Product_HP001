import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Arcrise Labs株式会社 | 地方産業をAIで拓く",
  description: "Arcrise Labs株式会社は地方中堅企業にAIを届け、日本の産業を再生する会社です。建設・不動産・運送業界向けの業界特化型AIプラットフォームを提供します。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="h-full">
      <body className="min-h-full flex flex-col font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
