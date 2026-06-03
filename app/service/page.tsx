export const dynamic = 'force-static'

export default function ServicePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-4">SERVICE</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">サービス・事業内容</h1>
          <div className="w-16 h-1 bg-gold mb-6" />
          <p className="text-xl text-white/80">業界特化型AIプラットフォーム</p>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="bg-navy py-20 border-t border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-4">PLATFORM</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">業界特化型AIプラットフォームとは</h2>
          <div className="w-16 h-1 bg-gold mb-8" />
          <p className="text-white/70 text-lg max-w-3xl mb-12">
            Palantirの手法を参考にした、業界ごとにカスタマイズされたAIプラットフォーム。汎用AIではなく、各業界の業務プロセスに最適化されたソリューションを提供します。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gold/30 bg-white/5 rounded-lg p-6 text-center">
              <p className="text-gold text-4xl font-black mb-2">1/5</p>
              <p className="text-white font-semibold">大手SIerの価格</p>
            </div>
            <div className="border border-gold/30 bg-white/5 rounded-lg p-6 text-center">
              <p className="text-gold text-4xl font-black mb-2">1/3</p>
              <p className="text-white font-semibold">大手SIerの期間</p>
            </div>
            <div className="border border-gold/30 bg-white/5 rounded-lg p-6 text-center">
              <p className="text-gold text-4xl font-black mb-2">6ヶ月</p>
              <p className="text-white font-semibold">で稼働</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section A: 建設業 */}
      <section className="bg-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-gold/10 text-gold border border-gold/30 text-sm px-3 py-1 rounded mb-6">
            建設業 / CONSTRUCTION
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">建設業向けAIプラットフォーム</h2>
          <div className="w-16 h-1 bg-gold mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Features */}
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-navy font-bold text-lg mb-2">見積AI</h3>
                <p className="text-gray-600">過去案件データから精度の高い見積を自動生成</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-navy font-bold text-lg mb-2">工程管理AI</h3>
                <p className="text-gray-600">最適な工程スケジュールを自動計画</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-navy font-bold text-lg mb-2">書類自動化</h3>
                <p className="text-gray-600">申請書類・報告書の自動生成</p>
              </div>
            </div>
            {/* Stats */}
            <div className="bg-navy text-white rounded-lg p-8">
              <h3 className="text-gold font-bold text-lg mb-6">導入効果・市場規模</h3>
              <div className="space-y-6">
                <div className="border-b border-gold/20 pb-4">
                  <p className="text-white/60 text-sm mb-1">業務効率</p>
                  <p className="text-gold text-3xl font-black">+20-30%</p>
                </div>
                <div className="border-b border-gold/20 pb-4">
                  <p className="text-white/60 text-sm mb-1">対象企業数</p>
                  <p className="text-gold text-3xl font-black">4万社</p>
                </div>
                <div>
                  <p className="text-white/60 text-sm mb-1">米国実例</p>
                  <p className="text-white font-semibold">Palantir × Jacobs Engineering</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section B: 不動産業 */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-gold/10 text-gold border border-gold/30 text-sm px-3 py-1 rounded mb-6">
            不動産業 / REAL ESTATE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">不動産業向けAIプラットフォーム</h2>
          <div className="w-16 h-1 bg-gold mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Stats */}
            <div className="bg-white/5 border border-gold/30 rounded-lg p-8">
              <h3 className="text-gold font-bold text-lg mb-6">導入効果・市場規模</h3>
              <div className="space-y-6">
                <div className="border-b border-gold/20 pb-4">
                  <p className="text-white/60 text-sm mb-1">営業効率</p>
                  <p className="text-gold text-3xl font-black">5倍</p>
                </div>
                <div className="border-b border-gold/20 pb-4">
                  <p className="text-white/60 text-sm mb-1">対象企業数</p>
                  <p className="text-gold text-3xl font-black">12万社</p>
                </div>
                <div>
                  <p className="text-white/60 text-sm mb-1">米国実例</p>
                  <p className="text-white font-semibold">Palantir × Lowe's</p>
                </div>
              </div>
            </div>
            {/* Features */}
            <div className="space-y-6">
              <div className="border border-gold/30 bg-white/5 rounded-lg p-6">
                <h3 className="text-white font-bold text-lg mb-2">物件マッチングAI</h3>
                <p className="text-white/60">顧客ニーズと物件の高精度マッチング</p>
              </div>
              <div className="border border-gold/30 bg-white/5 rounded-lg p-6">
                <h3 className="text-white font-bold text-lg mb-2">営業LTV最適化</h3>
                <p className="text-white/60">顧客生涯価値を最大化する営業戦略</p>
              </div>
              <div className="border border-gold/30 bg-white/5 rounded-lg p-6">
                <h3 className="text-white font-bold text-lg mb-2">市場分析AI</h3>
                <p className="text-white/60">リアルタイム市場動向分析</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section C: 運送・物流業 */}
      <section className="bg-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-gold/10 text-gold border border-gold/30 text-sm px-3 py-1 rounded mb-6">
            運送・物流業 / LOGISTICS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">運送・物流業向けAIプラットフォーム</h2>
          <div className="w-16 h-1 bg-gold mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Features */}
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-navy font-bold text-lg mb-2">配車最適化AI</h3>
                <p className="text-gray-600">リアルタイムで最適な配車計画を生成</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-navy font-bold text-lg mb-2">需要予測AI</h3>
                <p className="text-gray-600">配送需要を予測し在庫・人員を最適化</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-navy font-bold text-lg mb-2">ルート最適化</h3>
                <p className="text-gray-600">燃料コストと時間を最小化</p>
              </div>
            </div>
            {/* Stats */}
            <div className="bg-navy text-white rounded-lg p-8">
              <h3 className="text-gold font-bold text-lg mb-6">導入効果・市場規模</h3>
              <div className="space-y-6">
                <div className="border-b border-gold/20 pb-4">
                  <p className="text-white/60 text-sm mb-1">コスト削減</p>
                  <p className="text-gold text-3xl font-black">+15-25%</p>
                </div>
                <div className="border-b border-gold/20 pb-4">
                  <p className="text-white/60 text-sm mb-1">対象企業数</p>
                  <p className="text-gold text-3xl font-black">6万社</p>
                </div>
                <div>
                  <p className="text-white/60 text-sm mb-1">米国実例</p>
                  <p className="text-white font-semibold">Palantir × Uber Freight</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Size */}
      <section className="bg-navy py-20 border-t border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">市場規模</h2>
          <div className="w-16 h-1 bg-gold mb-10 mx-auto" />
          <p className="text-7xl font-black text-gold mb-4">22万社</p>
          <p className="text-white/60 text-lg mb-10">建設4万 + 不動産12万 + 運送6万</p>
          {/* Visual bar */}
          <div className="max-w-2xl mx-auto">
            <div className="flex rounded-full overflow-hidden h-8 mb-4">
              <div
                className="bg-gold flex items-center justify-center text-navy text-xs font-bold"
                style={{ width: '18.2%' }}
              >
                建設
              </div>
              <div
                className="bg-gold/60 flex items-center justify-center text-navy text-xs font-bold"
                style={{ width: '54.5%' }}
              >
                不動産
              </div>
              <div
                className="bg-gold/30 flex items-center justify-center text-white text-xs font-bold"
                style={{ width: '27.3%' }}
              >
                運送
              </div>
            </div>
            <div className="flex justify-between text-white/60 text-sm">
              <span>4万社 (18%)</span>
              <span>12万社 (55%)</span>
              <span>6万社 (27%)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="bg-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">導入プロセス</h2>
          <div className="w-16 h-1 bg-gold mb-10" />
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
            {[
              { step: '01', label: 'ヒアリング', period: 'Week 1-2' },
              { step: '02', label: '課題分析', period: 'Week 3-4' },
              { step: '03', label: '設計', period: 'Month 2' },
              { step: '04', label: '開発', period: 'Month 3-4' },
              { step: '05', label: 'テスト', period: 'Month 5' },
              { step: '06', label: '稼働', period: 'Month 6' },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm text-center">
                  <p className="text-gold font-black text-xl mb-1">{item.step}</p>
                  <p className="text-navy font-bold text-sm mb-2">{item.label}</p>
                  <p className="text-gray-500 text-xs">{item.period}</p>
                </div>
                {index < 5 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-gold z-10 -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
          <div className="bg-white border border-gold/30 rounded-lg p-6 shadow-sm text-center">
            <p className="text-navy font-bold text-lg">
              大手SIerの<span className="text-gold">1/3の期間</span>、
              <span className="text-gold">1/5の価格</span>で実現
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">導入を検討されている企業様へ</h2>
          <div className="w-16 h-1 bg-gold mb-8 mx-auto" />
          <a
            href="/contact"
            className="inline-block bg-gold text-navy font-bold px-8 py-3 rounded hover:opacity-90 transition"
          >
            無料相談はこちら
          </a>
        </div>
      </section>
    </>
  )
}
