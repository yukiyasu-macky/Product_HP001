import Link from 'next/link'
import Image from 'next/image'
import FadeIn from '@/components/FadeIn'
import CountUp from '@/components/CountUp'

export const dynamic = 'force-static'

export default function ServicePage() {
  const steps = [
    { num: '01', label: 'ヒアリング', period: 'Week 1–2', desc: '現場課題・業務フローの詳細ヒアリング' },
    { num: '02', label: '課題分析', period: 'Week 3–4', desc: 'データ分析とAI適用箇所の特定' },
    { num: '03', label: '設計', period: 'Month 2', desc: 'システム設計とプロトタイプ作成' },
    { num: '04', label: '開発', period: 'Month 3–4', desc: '業界特化AIモデルの構築・実装' },
    { num: '05', label: 'テスト', period: 'Month 5', desc: '現場での実証テストと精度検証' },
    { num: '06', label: '稼働', period: 'Month 6', desc: '本番稼働開始・効果測定・改善継続' },
  ]

  return (
    <>
      {/* ── HERO（統合） ── */}
      <section className="relative overflow-hidden">
        {/* 背景画像 */}
        <div className="absolute inset-0">
          <Image
            src="/service-construction.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-navy/88" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 70% 60% at 30% 50%, rgba(201,169,110,0.05) 0%, transparent 70%)',
          }}
        />

        {/* コンテンツ */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-20">
          <FadeIn>
            {/* ラベル＋タイトル */}
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4">SERVICE</p>
            <h1
              className="text-white font-black leading-none mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              サービス・事業内容
            </h1>
            <div className="section-divider mb-8" />

            {/* PLATFORMコピー */}
            <h2
              className="text-white font-black leading-tight mb-5"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.4rem)' }}
            >
              なぜ業界特化か
            </h2>
            <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl mb-10">
              Palantirの手法を参考にした、業界ごとにカスタマイズされたAIプラットフォーム。
              汎用AIではなく、各業界の業務プロセスに最適化されたソリューションを提供します。
            </p>

          </FadeIn>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="bg-[#F8F9FA] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">WHY CHOOSE US</p>
            <h2 className="h2-fluid font-bold text-navy mb-2">なぜArcrise Labsを選ぶのか</h2>
            <div className="section-divider mt-3 mb-10" />
          </FadeIn>
          {/* ③ アイコンバッジ＋ホバーアニメーション追加 */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                num: '01',
                title: '業界特化の深い知見',
                desc: '建設・不動産・物流に特化したAIを提供。汎用ツールではなく、現場の業務プロセスに最適化されたソリューションです。',
              },
              {
                num: '02',
                title: '経営×現場を両方理解',
                desc: '100件超の経営支援実績を持つCEOと大規模AI開発を統括したCTOが直接支援。コンサルではなく実装まで行います。',
              },
              {
                num: '03',
                title: '大手SIerの1/5価格・1/3期間',
                desc: '高額・長期のSI開発は不要。成果創出を見据えた実践型導入で、6ヶ月での稼働を標準としています。',
              },
              {
                num: '04',
                title: '地方中堅企業に特化',
                desc: '大手SIerが参入しない22万社の市場に集中。地域に根ざした課題を深く理解したパートナーとして伴走します。',
              },
            ].map((item, i) => (
              <FadeIn key={item.num} delay={i * 100}>
                <div className="bg-white border border-gray-200 hover:border-gold/40 rounded-xl p-8 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <span className="absolute top-4 right-6 text-4xl font-black text-gray-100 select-none leading-none">
                    {item.num}
                  </span>
                  {/* ③ アイコンバッジ */}
                  <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center mb-4">
                    <span className="text-gold font-black text-lg">{item.num}</span>
                  </div>
                  <h3 className="text-navy font-bold text-lg mb-3 relative z-10">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed relative z-10">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDY ── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">CASE STUDY</p>
            <h2 className="h2-fluid font-bold text-navy mb-2">導入事例</h2>
            <div className="section-divider mt-3 mb-10" />
          </FadeIn>
          <FadeIn delay={100}>
            <div className="border border-gray-200 rounded-xl overflow-hidden card-hover">
              <div className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
                <span className="text-navy font-bold text-xl">流通企業 M社</span>
                <span className="bg-navy text-white text-xs font-bold px-3 py-1 rounded-full">稼働実証中</span>
              </div>
              <div className="p-8 md:p-10">
                <p className="text-gold font-semibold text-lg mb-6">問合せメール返信AI自動生成システム</p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="card-hover bg-navy rounded-xl p-6">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-4">
                      <span className="text-white/60 text-xs font-black">01</span>
                    </div>
                    <p className="text-xs font-bold text-gold uppercase tracking-wider mb-3">課題</p>
                    <p className="text-white/80 text-sm leading-relaxed">大量の問合せメールへの対応に多くの人手が必要で、担当者の負担が増大していた。</p>
                  </div>
                  <div className="card-hover bg-navy rounded-xl p-6">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-4">
                      <span className="text-white/60 text-xs font-black">02</span>
                    </div>
                    <p className="text-xs font-bold text-gold uppercase tracking-wider mb-3">ソリューション</p>
                    <p className="text-white/80 text-sm leading-relaxed">AIによる返信文の自動生成システムを構築。問合せ内容を解析し、適切な返信文を即時生成。</p>
                  </div>
                  <div className="card-hover bg-navy rounded-xl p-6">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-4">
                      <span className="text-white/60 text-xs font-black">03</span>
                    </div>
                    <p className="text-xs font-bold text-gold uppercase tracking-wider mb-3">効果</p>
                    <p className="text-white/80 text-sm leading-relaxed">対応時間の大幅短縮を実現。担当者の負荷軽減により、コア業務への集中が可能に。</p>
                  </div>
                </div>
                <p className="text-gold font-semibold text-sm mt-8 text-center">現在稼働実証中 — 成果は順次更新予定</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── IMPLEMENTATION PROCESS ── */}
      <section className="bg-[#F8F9FA] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">PROCESS</p>
            <h2 className="h2-fluid font-bold text-navy mb-2">導入プロセス</h2>
            <div className="section-divider mt-3 mb-14" />
          </FadeIn>
          <FadeIn delay={100}>
            <div className="hidden sm:flex items-start">
              {steps.map((s, i) => (
                <div key={s.num} className="flex items-start flex-1 min-w-0">
                  <div className="flex flex-col items-center flex-1">
                    <div className="w-10 h-10 rounded-full border-2 border-navy flex items-center justify-center text-navy font-bold text-sm shrink-0">
                      {s.num}
                    </div>
                    <p className="text-navy text-xs font-semibold mt-3 text-center">{s.label}</p>
                    <p className="text-gray-400 text-xs mt-1 text-center">{s.period}</p>
                    <p className="text-gray-500 text-xs mt-2 text-center leading-snug px-1">{s.desc}</p>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="flex-1 h-px bg-gray-200 mt-5 min-w-0" />
                  )}
                </div>
              ))}
            </div>
            <div className="sm:hidden space-y-6">
              {steps.map((s, i) => (
                <div key={s.num} className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full border-2 border-navy flex items-center justify-center text-navy font-bold text-sm shrink-0">
                      {s.num}
                    </div>
                    {i < steps.length - 1 && <div className="w-px flex-1 bg-gray-200 mt-2 h-6" />}
                  </div>
                  <div className="pt-2">
                    <p className="text-navy font-semibold">{s.label}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{s.period}</p>
                    <p className="text-gray-500 text-xs mt-1 leading-snug">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-navy py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">CONTACT</p>
            <h2 className="h2-fluid font-bold text-white mb-4">導入を検討されている企業様へ</h2>
            <div className="section-divider mx-auto mt-3 mb-6" />
            <p className="text-white/60 text-base mb-10 max-w-xl mx-auto">
              業界特化型AIプラットフォームについて、まずはお気軽にご相談ください。専門チームが貴社の課題をヒアリングし、最適なプランをご提案します。
            </p>
            {/* ⑤ 2ボタン構成 */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-gold text-navy font-bold px-10 py-4 rounded text-sm tracking-wide hover:bg-gold/90 transition-all"
              >
                無料相談はこちら →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
