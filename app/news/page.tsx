import Link from 'next/link'
import FadeIn from '@/components/FadeIn'

export const dynamic = 'force-static'

export default function NewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0D1B2A] pt-36 pb-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4">NEWS</p>
          <h1
            className="text-white font-black mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1 }}
          >
            ニュース
          </h1>
          <div className="section-divider mb-0" />
        </div>
      </section>

      {/* News list */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="h2-fluid font-bold text-navy mb-2">最新情報</h2>
            <div className="section-divider mt-3 mb-10" />
          </FadeIn>

          <div>
            <FadeIn>
              <div className="flex items-start gap-6 border-b border-gray-100 py-8">
                <div className="flex-shrink-0 flex flex-col gap-2 w-44">
                  <span className="text-gold text-sm">2026年5月</span>
                  <span className="inline-block bg-navy/8 text-navy border border-navy/15 text-xs px-3 py-1 rounded w-fit">
                    プレスリリース
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-navy font-bold text-lg mb-2">
                    Arcrise Labo Inc. 創業のお知らせ
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    地方中堅企業向け業界特化型AIプラットフォームを提供するArcrise Labo Inc.が2026年5月に創業いたしました。
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
