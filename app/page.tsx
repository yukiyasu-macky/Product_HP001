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
                <p className="text-white/50 group-hover:text-gray-500 text-sm leading-relaxed transition-colors duration-300">
                  建設・不動産・物流業に特化したAIプラットフォーム。大手SIerの1/5価格、6ヶ月で稼働。
                </p>
              </div>
              <div className="flex items-center gap-2 text-gold text-sm font-semibold mt-8 group-hover:gap-4 transition-all duration-300">
                <span>詳しく見る</span>
                <span>→</span>
              </div>
            </Link>

          </div>
        </div>
      </section>
    </>
  )
}
