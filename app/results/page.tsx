import Link from 'next/link'
import FadeIn from '@/components/FadeIn'
import CountUp from '@/components/CountUp'

export const dynamic = 'force-static'

export default function ResultsPage() {
  return (
    <main>
      {/* 1. HERO */}
      <section className="bg-navy pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-gold text-xs tracking-[0.4em] mb-4 uppercase">RESULTS</p>
            <h1 className="text-5xl font-black text-white mb-6">実績</h1>
            <div className="section-divider mx-auto mt-5" />
          </FadeIn>
        </div>
      </section>

      {/* 2. CEO TRACK RECORD */}
      <section style={{ background: '#060D14' }} className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-gold text-xs tracking-[0.4em] mb-4 uppercase">FOUNDER TRACK RECORD</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">創業者 内海暢介 の実績</h2>
            <div className="section-divider mx-auto mt-5 mb-16" />
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* LEFT: Big Stat */}
            <FadeIn delay={100}>
              <div>
                <div
                  className="font-black gradient-text-gold glow-gold"
                  style={{ fontSize: 'clamp(6rem,15vw,10rem)', lineHeight: 0.9 }}
                >
                  <CountUp end={100} suffix="+" />
                </div>
                <p className="text-white/60 text-xl mt-4">AI・DX導入支援件数</p>
                <div className="mt-6">
                  <span className="inline-block bg-gold/10 border border-gold/30 text-gold text-sm px-4 py-1.5 rounded font-semibold">
                    業務効率+20-30%を実証済
                  </span>
                </div>
              </div>
            </FadeIn>

            {/* RIGHT: Industry cards */}
            <FadeIn delay={200}>
              <div>
                {/* 製造業 */}
                <div className="card-hover border border-gold/15 bg-white/[0.02] p-6 rounded-lg mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-white font-bold text-lg">製造業</h3>
                    <span className="font-black gradient-text-gold text-2xl">+25%</span>
                  </div>
                  <p className="text-white/40 text-sm leading-relaxed">
                    生産管理AIを導入し、業務効率を改善。現場の課題に即した設計で定着率も高評価。
                  </p>
                </div>

                {/* 流通業 */}
                <div className="card-hover border border-gold/15 bg-white/[0.02] p-6 rounded-lg mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-white font-bold text-lg">流通業</h3>
                    <span className="font-black gradient-text-gold text-2xl">-30%</span>
                  </div>
                  <p className="text-white/40 text-sm leading-relaxed">
                    在庫最適化AIにより廃棄ロスを削減。需要予測の精度向上でキャッシュフローも改善。
                  </p>
                </div>

                {/* 食品業 */}
                <div className="card-hover border border-gold/15 bg-white/[0.02] p-6 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-white font-bold text-lg">食品業</h3>
                    <span className="font-black gradient-text-gold text-2xl">-40%</span>
                  </div>
                  <p className="text-white/40 text-sm leading-relaxed">
                    品質管理AIを導入し、不良品率を低減。検査工程の自動化で品質の均一化を実現。
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. CTO TRACK RECORD */}
      <section className="bg-navy py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-gold text-xs tracking-[0.4em] mb-4 uppercase">CO-FOUNDER</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">共同創業者 吉田輝樹 の実績</h2>
            <div className="section-divider mx-auto mt-5 mb-16" />
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* LEFT: Photo placeholder */}
            <FadeIn delay={100}>
              <div className="aspect-square rounded-lg border border-gold/20 bg-gradient-to-br from-[#162233] to-navy max-w-xs mx-auto md:mx-0 flex items-center justify-center">
                <span className="text-gold/20 text-7xl font-black">吉田</span>
              </div>
            </FadeIn>

            {/* RIGHT: Details */}
            <FadeIn delay={200}>
              <div>
                <p className="text-white text-2xl font-bold mb-1">吉田 輝樹</p>
                <span className="inline-block bg-gold/10 border border-gold/30 text-gold text-xs font-bold px-3 py-1 rounded tracking-wider uppercase">
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
                      <span className="text-white/80 text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {['DeNA', '慶應SFC', 'AI基盤設計', 'プロダクト開発'].map((tag) => (
                    <span
                      key={tag}
                      className="bg-white/[0.04] border border-gold/20 text-white/50 text-xs px-3 py-1 rounded"
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
      <section style={{ background: '#060D14' }} className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-gold text-xs tracking-[0.4em] mb-4 uppercase">CASE STUDY</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">導入事例</h2>
            <div className="section-divider mx-auto mt-5 mb-16" />
          </FadeIn>

          <FadeIn delay={100}>
            <div className="border border-gold/30 rounded-xl overflow-hidden">
              {/* Top bar */}
              <div className="bg-gold/10 border-b border-gold/20 px-8 py-4 flex items-center justify-between">
                <span className="text-white font-bold text-xl">マイルストン社</span>
                <span className="bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full">稼働実証中</span>
              </div>

              {/* Body */}
              <div className="bg-white/[0.02] p-8 md:p-10">
                <p className="text-gold text-lg font-semibold mb-8">問合せメール返信AI自動生成システム</p>

                <div className="grid md:grid-cols-3 gap-6">
                  {/* 課題 */}
                  <div className="border border-gold/10 bg-white/[0.02] rounded-lg p-6">
                    <div className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center mb-4">
                      <span className="text-gold/60 text-xs font-black">01</span>
                    </div>
                    <p className="text-xs font-bold text-gold uppercase tracking-wider mb-3">課題</p>
                    <p className="text-white/50 text-sm leading-relaxed">
                      大量の問合せメールへの対応に多くの人手が必要で、担当者の負担が増大していた。
                    </p>
                  </div>

                  {/* ソリューション */}
                  <div className="border border-gold/10 bg-white/[0.02] rounded-lg p-6">
                    <div className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center mb-4">
                      <span className="text-gold/60 text-xs font-black">02</span>
                    </div>
                    <p className="text-xs font-bold text-gold uppercase tracking-wider mb-3">ソリューション</p>
                    <p className="text-white/50 text-sm leading-relaxed">
                      AIによる返信文の自動生成システムを構築。問合せ内容を解析し、適切な返信文を即時生成。
                    </p>
                  </div>

                  {/* 効果 */}
                  <div className="border border-gold/10 bg-white/[0.02] rounded-lg p-6">
                    <div className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center mb-4">
                      <span className="text-gold/60 text-xs font-black">03</span>
                    </div>
                    <p className="text-xs font-bold text-gold uppercase tracking-wider mb-3">効果</p>
                    <p className="text-white/50 text-sm leading-relaxed">
                      対応時間の大幅短縮を実現。担当者の負荷軽減により、コア業務への集中が可能に。
                    </p>
                  </div>
                </div>

                <p className="text-white/30 text-sm mt-8 text-center">
                  現在稼働実証中 — 成果は順次更新予定
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 5. COMPETITIVE ANALYSIS */}
      <section className="bg-navy py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-gold text-xs tracking-[0.4em] mb-4 uppercase">COMPETITIVE ANALYSIS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">競合比較</h2>
            <div className="section-divider mx-auto mt-5 mb-4" />
            <p className="text-white/50 text-sm mb-12 text-center">日本のAI企業10社調査結果</p>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="border border-gold/15 rounded-lg overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gold/10 border-b border-gold/20">
                    <th className="text-left text-gold font-semibold px-6 py-4">比較項目</th>
                    <th className="text-center text-gold font-semibold px-4 py-4">業界特化</th>
                    <th className="text-center text-gold font-semibold px-4 py-4">地方中堅対応</th>
                    <th className="text-center text-gold font-semibold px-4 py-4">1/5価格</th>
                    <th className="text-center text-gold font-semibold px-4 py-4">6ヶ月稼働</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Arcrise Labo */}
                  <tr className="border-b border-gold/10 bg-white/[0.04]">
                    <td className="px-6 py-4 font-bold text-gold">Arcrise Labo</td>
                    {['✓', '✓', '✓', '✓'].map((v, i) => (
                      <td key={i} className="text-center px-4 py-4">
                        <span className="text-gold text-xl font-black">{v}</span>
                      </td>
                    ))}
                  </tr>

                  {/* 大手SIer */}
                  <tr className="border-b border-gold/10">
                    <td className="px-6 py-4 font-semibold text-white/70">大手SIer（平均）</td>
                    {[true, false, false, false].map((ok, i) => (
                      <td key={i} className="text-center px-4 py-4">
                        {ok ? (
                          <span className="text-gold text-xl font-black">✓</span>
                        ) : (
                          <span className="text-white/20 text-xl font-black">✗</span>
                        )}
                      </td>
                    ))}
                  </tr>

                  {/* AIスタートアップ */}
                  <tr className="border-b border-gold/10">
                    <td className="px-6 py-4 font-semibold text-white/70">AIスタートアップ</td>
                    {[false, false, true, false].map((ok, i) => (
                      <td key={i} className="text-center px-4 py-4">
                        {ok ? (
                          <span className="text-gold text-xl font-black">✓</span>
                        ) : (
                          <span className="text-white/20 text-xl font-black">✗</span>
                        )}
                      </td>
                    ))}
                  </tr>

                  {/* コンサルファーム */}
                  <tr>
                    <td className="px-6 py-4 font-semibold text-white/70">コンサルファーム</td>
                    {[false, false, false, false].map((ok, i) => (
                      <td key={i} className="text-center px-4 py-4">
                        {ok ? (
                          <span className="text-gold text-xl font-black">✓</span>
                        ) : (
                          <span className="text-white/20 text-xl font-black">✗</span>
                        )}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-center mt-6 text-sm text-white/50">
              <span className="text-gold font-semibold">4条件全て○はArcrise Laboのみ</span>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 6. CTA */}
      <section style={{ background: '#060D14' }} className="py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-gold text-xs tracking-[0.4em] mb-4 uppercase">NEXT STEP</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              導入事例・詳細資料のご請求
            </h2>
            <p className="text-white/50 text-sm mb-10 max-w-xl mx-auto leading-relaxed">
              実績の詳細や導入事例の資料をご希望の方は、お気軽にお問い合わせください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gold text-navy font-bold px-8 py-3.5 rounded text-sm tracking-wider hover:opacity-90 transition"
              >
                お問い合わせ・資料請求
              </Link>
              <Link
                href="/services"
                className="border border-gold/50 text-gold font-semibold px-8 py-3.5 rounded text-sm tracking-wider hover:bg-gold hover:text-navy transition"
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
