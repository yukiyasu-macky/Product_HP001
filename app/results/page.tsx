export const dynamic = 'force-static'

export default function ResultsPage() {
  return (
    <main>
      {/* 1. Hero */}
      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-4">RESULTS</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">実績</h1>
          <div className="w-16 h-1 bg-gold mx-auto" />
        </div>
      </section>

      {/* 2. CEO Track Record */}
      <section className="bg-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">創業者 内海暢介 の実績</h2>
          <div className="w-16 h-1 bg-gold mb-12" />

          {/* Large stat */}
          <div className="text-center mb-14">
            <p className="text-7xl md:text-8xl font-bold text-navy leading-none">100<span className="text-gold">+</span></p>
            <p className="text-lg text-gray-600 mt-3 font-medium">AI・DX導入支援件数</p>
          </div>

          {/* Industry cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-gold font-bold text-sm">製造</span>
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">製造業</h3>
              <p className="text-gray-600 text-sm leading-relaxed">生産管理AIを導入し、業務効率を<span className="text-gold font-semibold">+25%</span>改善。現場の課題に即した設計で定着率も高評価。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-gold font-bold text-sm">流通</span>
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">流通業</h3>
              <p className="text-gray-600 text-sm leading-relaxed">在庫最適化AIにより廃棄ロスを<span className="text-gold font-semibold">-30%</span>削減。需要予測の精度向上でキャッシュフローも改善。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-gold font-bold text-sm">食品</span>
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">食品業</h3>
              <p className="text-gray-600 text-sm leading-relaxed">品質管理AIを導入し、不良品率を<span className="text-gold font-semibold">-40%</span>低減。検査工程の自動化で品質の均一化を実現。</p>
            </div>
          </div>

          {/* Tag */}
          <div className="text-center">
            <span className="inline-block bg-gold/10 text-gold border border-gold/30 text-sm px-3 py-1 rounded font-semibold">
              業務効率+20-30%を実証済
            </span>
          </div>
        </div>
      </section>

      {/* 3. CTO Track Record */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">共同創業者 吉田輝樹 の実績</h2>
          <div className="w-16 h-1 bg-gold mb-12" />

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left: Profile */}
            <div className="flex flex-col items-center md:items-start gap-6">
              {/* Photo placeholder */}
              <div className="w-40 h-40 rounded-full bg-white/10 border border-gold/40 flex items-center justify-center">
                <span className="text-gold/60 text-4xl font-bold">Y</span>
              </div>
              <div>
                <p className="text-white text-xl font-bold">吉田 輝樹</p>
                <p className="text-gold text-sm mt-1">共同創業者 / CTO</p>
              </div>
            </div>

            {/* Right: Details */}
            <div className="space-y-4">
              {[
                { icon: '▶', text: 'DeNA AI統括として大規模AI事業を技術統括' },
                { icon: '▶', text: '慶應義塾大学SFC出身' },
                { icon: '▶', text: '複数のAIプロダクト開発・スケール実績' },
                { icon: '▶', text: 'AI基盤設計の専門家' },
              ].map((item, i) => (
                <div key={i} className="border border-gold/30 bg-white/5 rounded-lg p-5 flex items-start gap-4">
                  <span className="text-gold mt-0.5 text-xs">{item.icon}</span>
                  <p className="text-white/90 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Case Study */}
      <section className="bg-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">導入事例</h2>
          <div className="w-16 h-1 bg-gold mb-12" />

          {/* Featured card */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-md">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <h3 className="text-2xl font-bold text-navy">マイルストン社</h3>
              <span className="inline-block bg-gold/10 text-gold border border-gold/30 text-sm px-3 py-1 rounded font-semibold">
                稼働実証中
              </span>
            </div>
            <p className="text-lg text-gray-700 font-medium mb-8">問合せメール返信AI自動生成システム</p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-light rounded-lg p-5">
                <p className="text-xs font-bold text-gold uppercase tracking-wider mb-2">課題</p>
                <p className="text-sm text-gray-700 leading-relaxed">大量の問合せメールへの対応に多くの人手が必要で、担当者の負担が増大していた。</p>
              </div>
              <div className="bg-light rounded-lg p-5">
                <p className="text-xs font-bold text-gold uppercase tracking-wider mb-2">ソリューション</p>
                <p className="text-sm text-gray-700 leading-relaxed">AIによる返信文の自動生成システムを構築。問合せ内容を解析し、適切な返信文を即時生成。</p>
              </div>
              <div className="bg-light rounded-lg p-5">
                <p className="text-xs font-bold text-gold uppercase tracking-wider mb-2">効果</p>
                <p className="text-sm text-gray-700 leading-relaxed">対応時間の大幅短縮を実現。担当者の負荷軽減により、コア業務への集中が可能に。</p>
              </div>
            </div>

            <div className="flex justify-end">
              <span className="inline-block bg-gold text-navy font-bold px-5 py-2 rounded text-sm">
                現在稼働実証中
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Competitive Analysis */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">競合比較</h2>
          <div className="w-16 h-1 bg-gold mb-4" />
          <p className="text-white/70 text-sm mb-12">日本のAI企業10社調査結果</p>

          {/* Comparison table */}
          <div className="bg-white/5 border border-gold/20 rounded-lg overflow-hidden mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gold/20 bg-white/5">
                  <th className="text-left text-gold font-semibold px-6 py-4">条件</th>
                  <th className="text-center text-gold font-semibold px-4 py-4">業界特化</th>
                  <th className="text-center text-gold font-semibold px-4 py-4">地方中堅対応</th>
                  <th className="text-center text-gold font-semibold px-4 py-4">1/5価格</th>
                  <th className="text-center text-gold font-semibold px-4 py-4">6ヶ月稼働</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: 'Arcrise Labo',
                    highlight: true,
                    vals: ['○', '○', '○', '○'],
                  },
                  {
                    name: '大手SIer（平均）',
                    highlight: false,
                    vals: ['○', '×', '×', '×'],
                  },
                  {
                    name: 'AI系スタートアップ',
                    highlight: false,
                    vals: ['×', '×', '○', '×'],
                  },
                  {
                    name: 'コンサルファーム',
                    highlight: false,
                    vals: ['×', '×', '×', '×'],
                  },
                ].map((row, i) => (
                  <tr
                    key={i}
                    className={`border-b border-gold/10 last:border-b-0 ${row.highlight ? 'bg-gold/10' : ''}`}
                  >
                    <td className={`px-6 py-4 font-semibold ${row.highlight ? 'text-gold' : 'text-white/80'}`}>
                      {row.name}
                    </td>
                    {row.vals.map((v, j) => (
                      <td key={j} className="text-center px-4 py-4">
                        {v === '○' ? (
                          <span className="text-gold font-bold text-lg">✓</span>
                        ) : (
                          <span className="text-white/30 font-bold text-lg">✗</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Caption */}
          <p className="text-center text-white/70 text-sm">
            <span className="text-gold font-semibold">4条件全て○はArcrise Laboのみ</span>
          </p>
        </div>
      </section>
    </main>
  )
}
