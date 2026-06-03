export const dynamic = 'force-static'

export default function NewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-4">NEWS</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">ニュース</h1>
          <div className="w-16 h-1 bg-gold" />
        </div>
      </section>

      {/* News list */}
      <section className="bg-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">最新情報</h2>
          <div className="w-16 h-1 bg-gold mb-12" />

          <div className="divide-y divide-gray-200">
            {/* Item 1 */}
            <div className="flex flex-col sm:flex-row gap-4 py-6">
              <div className="sm:w-48 flex-shrink-0 flex flex-col gap-2">
                <span className="text-gold text-sm font-medium">2026年5月</span>
                <span className="inline-block bg-gold/10 text-gold border border-gold/30 text-sm px-3 py-1 rounded w-fit">
                  プレスリリース
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-navy mb-2">
                  Arcrise Labo Inc. 創業のお知らせ
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  地方中堅企業向け業界特化型AIプラットフォームを提供するArcrise Labo Inc.が2026年5月に創業いたしました。
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col sm:flex-row gap-4 py-6">
              <div className="sm:w-48 flex-shrink-0 flex flex-col gap-2">
                <span className="text-gold text-sm font-medium">2026年5月</span>
                <span className="inline-block bg-gold/10 text-gold border border-gold/30 text-sm px-3 py-1 rounded w-fit">
                  事業開始
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-navy mb-2">
                  マイルストン社へのAI導入を開始
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  第1号顧客として、マイルストン社への問合せメール返信AI自動生成システムの導入を開始しました。現在稼働実証中です。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming soon */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">今後のニュース</h2>
          <div className="w-16 h-1 bg-gold mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border-2 border-dashed border-gold/40 rounded-lg p-8 flex flex-col items-center text-center">
              <span className="inline-block bg-gold/10 text-gold border border-gold/30 text-sm px-3 py-1 rounded mb-4">
                Coming Soon
              </span>
              <p className="text-white font-medium">新規導入事例のご紹介（予定）</p>
            </div>

            <div className="border-2 border-dashed border-gold/40 rounded-lg p-8 flex flex-col items-center text-center">
              <span className="inline-block bg-gold/10 text-gold border border-gold/30 text-sm px-3 py-1 rounded mb-4">
                Coming Soon
              </span>
              <p className="text-white font-medium">資金調達完了のお知らせ（予定）</p>
            </div>

            <div className="border-2 border-dashed border-gold/40 rounded-lg p-8 flex flex-col items-center text-center">
              <span className="inline-block bg-gold/10 text-gold border border-gold/30 text-sm px-3 py-1 rounded mb-4">
                Coming Soon
              </span>
              <p className="text-white font-medium">新サービスリリース（予定）</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">最新情報をお届けします</h2>
          <div className="w-16 h-1 bg-gold mb-8 mx-auto" />
          <p className="text-gray-600 max-w-xl mx-auto mb-10 leading-relaxed">
            Arcrise Laboのニュースレターに登録して、最新情報をいち早く受け取りましょう。
          </p>
          <a
            href="/contact"
            className="inline-block bg-gold text-navy font-bold px-8 py-3 rounded hover:opacity-90 transition"
          >
            お問い合わせ・登録はこちら
          </a>
        </div>
      </section>
    </>
  )
}
