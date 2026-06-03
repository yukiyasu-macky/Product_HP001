import Link from 'next/link'
import FadeIn from '@/components/FadeIn'

export const dynamic = 'force-static'

export default function NewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#F8F9FA] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">NEWS</p>
          <h1 className="h1-fluid font-bold text-navy mb-2">ニュース</h1>
          <div className="section-divider mt-3" />
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
            {/* Item 1 */}
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

            {/* Item 2 */}
            <FadeIn>
              <div className="flex items-start gap-6 border-b border-gray-100 py-8">
                <div className="flex-shrink-0 flex flex-col gap-2 w-44">
                  <span className="text-gold text-sm">2026年5月</span>
                  <span className="inline-block bg-navy/8 text-navy border border-navy/15 text-xs px-3 py-1 rounded w-fit">
                    事業開始
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-navy font-bold text-lg mb-2">
                    マイルストン社へのAI導入を開始
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    第1号顧客として、マイルストン社への問合せメール返信AI自動生成システムの導入を開始しました。現在稼働実証中です。
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Coming soon */}
      <section className="bg-[#F8F9FA] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="h2-fluid font-bold text-navy mb-2">今後のニュース</h2>
            <div className="section-divider mt-3 mb-10" />
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FadeIn>
              <div className="card-hover bg-white border border-dashed border-gray-200 rounded-xl p-8 flex flex-col items-center text-center">
                <span className="text-gray-400 text-sm mb-3">Coming Soon</span>
                <p className="text-gray-300 font-medium">新規導入事例のご紹介（予定）</p>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="card-hover bg-white border border-dashed border-gray-200 rounded-xl p-8 flex flex-col items-center text-center">
                <span className="text-gray-400 text-sm mb-3">Coming Soon</span>
                <p className="text-gray-300 font-medium">資金調達完了のお知らせ（予定）</p>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="card-hover bg-white border border-dashed border-gray-200 rounded-xl p-8 flex flex-col items-center text-center">
                <span className="text-gray-400 text-sm mb-3">Coming Soon</span>
                <p className="text-gray-300 font-medium">新サービスリリース（予定）</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="h2-fluid font-bold text-navy mb-2">最新情報をお届けします</h2>
            <div className="section-divider mt-3 mb-8 mx-auto" />
            <p className="text-gray-600 max-w-xl mx-auto mb-10 leading-relaxed">
              Arcrise Laboのニュースレターに登録して、最新情報をいち早く受け取りましょう。
            </p>
            <Link
              href="/contact"
              className="inline-block bg-navy text-white font-semibold px-8 py-3.5 rounded text-sm tracking-wide hover:bg-[#1a2f45] transition-colors"
            >
              お問い合わせ・登録はこちら
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
