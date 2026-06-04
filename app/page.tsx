import Link from 'next/link'
import HeroSlider from '@/components/HeroSlider'

export const dynamic = 'force-static'

export default function Home() {
  return (
    <>
      <HeroSlider />

      {/* ── SITE NAV GRID ── */}
      <section className="bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 min-h-[480px]">

          {/* 会社概要 */}
          <Link
            href="/about"
            className="group relative flex flex-col justify-between p-12 border-b border-r border-gray-100 bg-white hover:bg-[#F8F9FA] transition-colors duration-300"
          >
            <div>
              <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4">ABOUT US</p>
              <h2 className="text-navy font-black leading-tight mb-4"
                style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
                会社概要
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                地方産業をAIで拓く。私たちのミッション・ビジョン・チームをご紹介します。
              </p>
            </div>
            <div className="flex items-center gap-2 text-gold text-sm font-semibold mt-8 group-hover:gap-4 transition-all duration-300">
              <span>詳しく見る</span>
              <span>→</span>
            </div>
          </Link>

          {/* サービス */}
          <Link
            href="/service"
            className="group relative flex flex-col justify-between p-12 border-b border-gray-100 bg-[#0D1B2A] hover:bg-[#162636] transition-colors duration-300"
          >
            <div>
              <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4">SERVICE</p>
              <h2 className="text-white font-black leading-tight mb-4"
                style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
                サービス
              </h2>
              <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                建設・不動産・物流業に特化したAIプラットフォーム。大手SIerの1/5価格、6ヶ月で稼働。
              </p>
              <div className="flex gap-6 mt-6">
                {[
                  { value: '+30%', label: '建設業効率向上' },
                  { value: '×5', label: '不動産営業効率' },
                  { value: '−20%', label: '物流コスト削減' },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-gold font-black text-lg leading-none">{s.value}</div>
                    <div className="text-white/40 text-xs mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2 text-gold text-sm font-semibold mt-8 group-hover:gap-4 transition-all duration-300">
              <span>詳しく見る</span>
              <span>→</span>
            </div>
          </Link>

          {/* 採用 */}
          <Link
            href="/recruit"
            className="group relative flex flex-col justify-between p-12 border-r border-gray-100 bg-[#F8F9FA] hover:bg-white transition-colors duration-300"
          >
            <div>
              <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4">RECRUIT</p>
              <h2 className="text-navy font-black leading-tight mb-4"
                style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
                採用情報
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                日本のリアルな産業をAIで変革するミッションに共感するプロフェッショナルを募集しています。
              </p>
            </div>
            <div className="flex items-center gap-2 text-gold text-sm font-semibold mt-8 group-hover:gap-4 transition-all duration-300">
              <span>詳しく見る</span>
              <span>→</span>
            </div>
          </Link>

          {/* お問い合わせ */}
          <Link
            href="/contact"
            className="group relative flex flex-col justify-between p-12 bg-white hover:bg-[#F8F9FA] transition-colors duration-300"
          >
            <div>
              <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4">CONTACT</p>
              <h2 className="text-navy font-black leading-tight mb-4"
                style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
                お問い合わせ
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                導入相談・資料請求・採用エントリーはこちら。まずはお気軽にご連絡ください。
              </p>
            </div>
            <div className="flex items-center gap-2 text-gold text-sm font-semibold mt-8 group-hover:gap-4 transition-all duration-300">
              <span>お問い合わせ</span>
              <span>→</span>
            </div>
          </Link>

        </div>
      </section>
    </>
  )
}
