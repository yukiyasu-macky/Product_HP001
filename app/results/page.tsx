import Link from 'next/link'
import FadeIn from '@/components/FadeIn'
import CountUp from '@/components/CountUp'

export const dynamic = 'force-static'

export default function ResultsPage() {
  return (
    <main>
      {/* 1. HERO */}
      <section className="bg-[#F8F9FA] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">RESULTS</p>
            <h1 className="text-4xl font-bold text-navy mb-2">実績</h1>
            <div className="section-divider mx-auto mt-3 mb-10" />
          </FadeIn>
        </div>
      </section>

      {/* 2. CEO TRACK RECORD */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">FOUNDER TRACK RECORD</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-2">創業者 内海暢介 の実績</h2>
            <div className="section-divider mt-3 mb-10" />
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* LEFT: Big Stat */}
            <FadeIn delay={100}>
              <div>
                <div
                  className="font-black text-navy"
                  style={{ fontSize: 'clamp(6rem,12vw,8rem)', lineHeight: 0.9 }}
                >
                  <CountUp end={100} suffix="+" />
                </div>
                <p className="text-gray-600 text-xl mt-4">AI・DX導入支援件数</p>
                <div className="mt-6">
                  <span className="inline-block bg-navy text-white text-sm px-4 py-2 rounded font-semibold">
                    業務効率+20-30%を実証済
                  </span>
                </div>
              </div>
            </FadeIn>

            {/* RIGHT: Industry cards */}
            <FadeIn delay={200}>
              <div>
                {/* 製造業 */}
                <div className="card-hover bg-white border border-gray-200 rounded-xl p-6 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-navy font-bold text-lg">製造業</h3>
                    <span className="font-black text-navy text-2xl">+25%</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    生産管理AIを導入し、業務効率を改善。現場の課題に即した設計で定着率も高評価。
                  </p>
                </div>

                {/* 流通業 */}
                <div className="card-hover bg-white border border-gray-200 rounded-xl p-6 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-navy font-bold text-lg">流通業</h3>
                    <span className="font-black text-navy text-2xl">-30%</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    在庫最適化AIにより廃棄ロスを削減。需要予測の精度向上でキャッシュフローも改善。
                  </p>
                </div>

                {/* 食品業 */}
                <div className="card-hover bg-white border border-gray-200 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-navy font-bold text-lg">食品業</h3>
                    <span className="font-black text-navy text-2xl">-40%</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    品質管理AIを導入し、不良品率を低減。検査工程の自動化で品質の均一化を実現。
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. CTO TRACK RECORD */}
      <section className="bg-[#F8F9FA] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">CO-FOUNDER</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-2">共同創業者 吉田輝樹 の実績</h2>
            <div className="section-divider mt-3 mb-10" />
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* LEFT: Photo placeholder */}
            <FadeIn delay={100}>
              <div className="aspect-square bg-gray-200 rounded-xl max-w-xs mx-auto md:mx-0 flex items-center justify-center">
                <span className="text-navy/20 text-7xl font-black">吉田</span>
              </div>
            </FadeIn>

            {/* RIGHT: Details */}
            <FadeIn delay={200}>
              <div>
                <p className="text-navy text-2xl font-bold mb-1">吉田 輝樹</p>
                <span className="inline-block bg-navy/8 text-navy border border-navy/15 text-xs px-3 py-1 rounded tracking-wider uppercase">
                  CTO / AI Lead
                </span>
                <div className="section-divider mt-4 mb-6" />

                <ul className="space-y-4 mb-8">
                  {[
                    'DeNA AI統括として大規模AI事業を技術統括',
                    '慶應義塾大学SFC出身',
                    '複数のAIプロダクト開発・スケール実績',
                    'AI基盤設計の専門家',
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-gold mt-1 text-xs leading-none">&#9654;</span>
                      <span className="text-gray-700 text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {['DeNA', '慶應SFC', 'AI基盤設計', 'プロダクト開発'].map((tag) => (
                    <span
                      key={tag}
                      className="inline-block bg-navy/8 text-navy border border-navy/15 text-xs px-3 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 4. CASE STUDY */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">CASE STUDY</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-2">導入事例</h2>
            <div className="section-divider mt-3 mb-10" />
          </FadeIn>

          <FadeIn delay={100}>
            <div className="border border-gray-200 rounded-xl overflow-hidden card-hover">
              {/* Top bar */}
              <div className="bg-[#F8F9FA] border-b border-gray-200 px-8 py-4 flex items-center justify-between">
                <span className="text-navy font-bold text-xl">マイルストン社</span>
                <span className="bg-navy text-white text-xs font-bold px-3 py-1 rounded-full">稼働実証中</span>
              </div>

              {/* Body */}
              <div className="p-8 md:p-10">
                <p className="text-gold font-semibold text-lg mb-6">問合せメール返信AI自動生成システム</p>

                <div className="grid md:grid-cols-3 gap-6">
                  {/* 課題 */}
                  <div className="card-hover bg-white border border-gray-200 rounded-xl p-6">
                    <div className="w-10 h-10 rounded-full border border-gray-200 bg-[#F8F9FA] flex items-center justify-center mb-4">
                      <span className="text-navy/40 text-xs font-black">01</span>
                    </div>
                    <p className="text-xs font-bold text-gold uppercase tracking-wider mb-3">課題</p>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      大量の問合せメールへの対応に多くの人手が必要で、担当者の負担が増大していた。
                    </p>
                  </div>

                  {/* ソリューション */}
                  <div className="card-hover bg-white border border-gray-200 rounded-xl p-6">
                    <div className="w-10 h-10 rounded-full border border-gray-200 bg-[#F8F9FA] flex items-center justify-center mb-4">
                      <span className="text-navy/40 text-xs font-black">02</span>
                    </div>
                    <p className="text-xs font-bold text-gold uppercase tracking-wider mb-3">ソリューション</p>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      AIによる返信文の自動生成システムを構築。問合せ内容を解析し、適切な返信文を即時生成。
                    </p>
                  </div>

                  {/* 効果 */}
                  <div className="card-hover bg-white border border-gray-200 rounded-xl p-6">
                    <div className="w-10 h-10 rounded-full border border-gray-200 bg-[#F8F9FA] flex items-center justify-center mb-4">
                      <span className="text-navy/40 text-xs font-black">03</span>
                    </div>
                    <p className="text-xs font-bold text-gold uppercase tracking-wider mb-3">効果</p>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      対応時間の大幅短縮を実現。担当者の負荷軽減により、コア業務への集中が可能に。
                    </p>
                  </div>
                </div>

                <p className="text-gray-500 text-sm mt-8 text-center">
                  現在稼働実証中 — 成果は順次更新予定
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 5. COMPETITIVE ANALYSIS */}
      <section className="bg-[#F8F9FA] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">COMPETITIVE ANALYSIS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-2">競合比較</h2>
            <div className="section-divider mt-3 mb-4" />
            <p className="text-gray-500 text-sm mb-10 text-center">日本のAI企業10社調査結果</p>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#F8F9FA] border-b border-gray-200">
                    <th className="text-left text-navy font-semibold px-6 py-4">比較項目</th>
                    <th className="text-center text-navy font-semibold px-4 py-4">業界特化</th>
                    <th className="text-center text-navy font-semibold px-4 py-4">地方中堅対応</th>
                    <th className="text-center text-navy font-semibold px-4 py-4">1/5価格</th>
                    <th className="text-center text-navy font-semibold px-4 py-4">6ヶ月稼働</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Arcrise Labo */}
                  <tr className="border-b border-gray-100 bg-navy/5">
                    <td className="px-6 py-4 font-bold text-navy">Arcrise Labo</td>
                    {['✓', '✓', '✓', '✓'].map((v, i) => (
                      <td key={i} className="text-center px-4 py-4">
                        <span className="text-gold text-xl font-black">{v}</span>
                      </td>
                    ))}
                  </tr>

                  {/* 大手SIer */}
                  <tr className="border-b border-gray-100">
                    <td className="px-6 py-4 font-semibold text-gray-600">大手SIer（平均）</td>
                    {[true, false, false, false].map((ok, i) => (
                      <td key={i} className="text-center px-4 py-4">
                        {ok ? (
                          <span className="text-gold text-xl font-black">✓</span>
                        ) : (
                          <span className="text-gray-300 text-xl font-black">✗</span>
                        )}
                      </td>
                    ))}
                  </tr>

                  {/* AIスタートアップ */}
                  <tr className="border-b border-gray-100">
                    <td className="px-6 py-4 font-semibold text-gray-600">AIスタートアップ</td>
                    {[false, false, true, false].map((ok, i) => (
                      <td key={i} className="text-center px-4 py-4">
                        {ok ? (
                          <span className="text-gold text-xl font-black">✓</span>
                        ) : (
                          <span className="text-gray-300 text-xl font-black">✗</span>
                        )}
                      </td>
                    ))}
                  </tr>

                  {/* コンサルファーム */}
                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-600">コンサルファーム</td>
                    {[false, false, false, false].map((ok, i) => (
                      <td key={i} className="text-center px-4 py-4">
                        {ok ? (
                          <span className="text-gold text-xl font-black">✓</span>
                        ) : (
                          <span className="text-gray-300 text-xl font-black">✗</span>
                        )}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-navy font-semibold text-center mt-6">
              4条件全て○はArcrise Laboのみ
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="bg-navy py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">NEXT STEP</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              導入事例・詳細資料のご請求
            </h2>
            <p className="text-white/60 text-sm mb-10 max-w-xl mx-auto leading-relaxed">
              実績の詳細や導入事例の資料をご希望の方は、お気軽にお問い合わせください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block border border-gold/60 text-gold font-semibold px-8 py-3.5 rounded text-sm tracking-wide hover:bg-gold hover:text-navy transition-all"
              >
                お問い合わせ・資料請求
              </Link>
              <Link
                href="/services"
                className="inline-block border border-white/30 text-white/80 font-semibold px-8 py-3.5 rounded text-sm tracking-wide hover:border-white hover:text-white transition-all"
              >
                サービス詳細を見る
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
