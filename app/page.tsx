import Link from 'next/link'
import HeroSlider from '@/components/HeroSlider'

export const dynamic = 'force-static'

export default function Home() {
  return (
    <>
      <HeroSlider />

      {/* ── SITE NAV GRID（案B：ネイビーベース） ── */}
      <section className="bg-[#0D1B2A]">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-white/10">

            {/* 会社概要 */}
            <Link
              href="/about"
              className="group flex flex-col justify-between p-10 lg:p-14 border-b border-r border-white/10 bg-[#0D1B2A] hover:bg-white transition-colors duration-300 min-h-[280px] lg:min-h-[320px]"
            >
              <div>
                <p className="text-gold text-xs tracking-[0.4em] uppercase mb-5">ABOUT US</p>
                <h2
                  className="text-white group-hover:text-navy font-black leading-tight mb-4 transition-colors duration-300"
                  style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)' }}
                >
                  会社概要
                </h2>
                <p className="text-white/50 group-hover:text-gray-500 text-sm leading-relaxed transition-colors duration-300">
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
              className="group flex flex-col justify-between p-10 lg:p-14 border-b border-white/10 bg-[#0D1B2A] hover:bg-white transition-colors duration-300 min-h-[280px] lg:min-h-[320px]"
            >
              <div>
                <p className="text-gold text-xs tracking-[0.4em] uppercase mb-5">SERVICE</p>
                <h2
                  className="text-white group-hover:text-navy font-black leading-tight mb-4 transition-colors duration-300"
                  style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)' }}
                >
                  サービス
                </h2>
                <p className="text-white/50 group-hover:text-gray-500 text-sm leading-relaxed mb-5 transition-colors duration-300">
                  建設・不動産・物流業に特化したAIプラットフォーム。大手SIerの1/5価格、6ヶ月で稼働。
                </p>
                <div className="flex gap-6">
                  {[
                    { value: '+30%', label: '建設業効率向上' },
                    { value: '×5',   label: '不動産営業効率' },
                    { value: '−20%', label: '物流コスト削減' },
                  ].map((s) => (
                    <div key={s.label}>
                      <div className="text-gold font-black text-base leading-none">{s.value}</div>
                      <div className="text-white/30 group-hover:text-gray-400 text-xs mt-1 transition-colors duration-300">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2 text-gold text-sm font-semibold mt-8 group-hover:gap-4 transition-all duration-300">
                <span>詳しく見る</span>
                <span>→</span>
              </div>
            </Link>

            {/* お問い合わせ — 下段全幅 */}
            <Link
              href="/contact"
              className="group flex flex-col justify-between p-10 lg:p-14 sm:col-span-2 bg-[#0D1B2A] hover:bg-white transition-colors duration-300 min-h-[280px] lg:min-h-[320px]"
            >
              <div>
                <p className="text-gold text-xs tracking-[0.4em] uppercase mb-5">CONTACT</p>
                <h2
                  className="text-white group-hover:text-navy font-black leading-tight mb-4 transition-colors duration-300"
                  style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)' }}
                >
                  お問い合わせ
                </h2>
                <p className="text-white/50 group-hover:text-gray-500 text-sm leading-relaxed transition-colors duration-300">
                  導入相談・資料請求・採用エントリーはこちら。まずはお気軽にご連絡ください。
                </p>
              </div>
              <div className="flex items-center gap-2 text-gold text-sm font-semibold mt-8 group-hover:gap-4 transition-all duration-300">
                <span>お問い合わせ</span>
                <span>→</span>
              </div>
            </Link>

          </div>
        </div>
      </section>
    </>
  )
}
