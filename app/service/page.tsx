import Link from 'next/link'
import Image from 'next/image'
import FadeIn from '@/components/FadeIn'
import CountUp from '@/components/CountUp'

export const dynamic = 'force-static'

export default function ServicePage() {
  const constructionFeatures = [
    { name: '見積AI', desc: '過去案件データから精度の高い見積を自動生成' },
    { name: '工程管理AI', desc: '最適な工程スケジュールを自動計画' },
    { name: '書類自動化', desc: '申請書類・報告書の自動生成' },
  ]

  const realEstateFeatures = [
    { name: '物件マッチングAI', desc: '顧客ニーズと物件の高精度マッチング' },
    { name: '営業LTV最適化', desc: '顧客生涯価値を最大化する営業戦略' },
    { name: '市場分析AI', desc: 'リアルタイム市場動向分析' },
  ]

  const logisticsFeatures = [
    { name: '配車最適化AI', desc: 'リアルタイムで最適な配車計画を生成' },
    { name: '需要予測AI', desc: '配送需要を予測し在庫・人員を最適化' },
    { name: 'ルート最適化', desc: '燃料コストと時間を最小化' },
  ]

  // ① desc フィールド追加
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
      {/* ── HERO ── */}
      <section className="bg-[#F8F9FA] pt-32 pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">SERVICE</p>
            <h1
              className="font-black text-navy leading-none mb-2"
              style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}
            >
              サービス・事業内容
            </h1>
            <div className="section-divider mt-3 mb-6" />
            <p className="text-gray-500 text-xl mt-4 pb-10">業界特化型AIプラットフォーム</p>
          </FadeIn>
        </div>
      </section>

      {/* ── HERO STATS BAR ── */}
      <section className="bg-white border-b border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-gray-200">
            {[
              { value: '100+', label: '支援実績', sub: 'CEO実績件数' },
              { value: '1/5', label: '価格', sub: '大手SIer比' },
              { value: '1/3', label: '期間', sub: '大手SIer比' },
              { value: '6ヶ月', label: '稼働まで', sub: '標準導入期間' },
            ].map((item) => (
              <div key={item.label} className="text-center md:px-8">
                <div className="font-black text-navy" style={{ fontSize: 'clamp(1.8rem,3vw,2.5rem)', lineHeight: 1 }}>
                  {item.value}
                </div>
                <div className="text-navy text-sm font-semibold mt-1">{item.label}</div>
                <div className="text-gray-400 text-xs mt-0.5">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLATFORM OVERVIEW ── */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">PLATFORM</p>
            <h2 className="h2-fluid font-bold text-white mb-2">なぜ業界特化か</h2>
            <div className="section-divider mx-auto mt-3 mb-10" />
            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">
              Palantirの手法を参考にした、業界ごとにカスタマイズされたAIプラットフォーム。汎用AIではなく、各業界の業務プロセスに最適化されたソリューションを提供します。
            </p>
            <div className="flex gap-4 flex-wrap justify-center mt-8">
              <span className="border border-white/40 text-white px-6 py-2 rounded-full text-sm tracking-wide">
                大手SIerの1/5価格
              </span>
              <span className="border border-white/40 text-white px-6 py-2 rounded-full text-sm tracking-wide">
                大手SIerの1/3期間
              </span>
              <span className="bg-gold text-navy px-6 py-2 rounded-full text-sm font-semibold tracking-wide">
                6ヶ月で稼働
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── COMPARISON ── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">COMPARISON</p>
            <h2 className="h2-fluid font-bold text-navy mb-2">他社比較</h2>
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
                  <tr className="border-b border-gray-100 bg-navy/5">
                    <td className="px-6 py-4 font-bold text-navy">Arcrise Labo</td>
                    {['✓', '✓', '✓', '✓'].map((v, i) => (
                      <td key={i} className="text-center px-4 py-4">
                        <span className="text-gold text-xl font-black">{v}</span>
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-6 py-4 font-semibold text-gray-600">大手SIer（平均）</td>
                    {[true, false, false, false].map((ok, i) => (
                      <td key={i} className="text-center px-4 py-4">
                        {ok ? <span className="text-gold text-xl font-black">✓</span> : <span className="text-gray-300 text-xl font-black">✗</span>}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-6 py-4 font-semibold text-gray-600">AIスタートアップ</td>
                    {[false, false, true, false].map((ok, i) => (
                      <td key={i} className="text-center px-4 py-4">
                        {ok ? <span className="text-gold text-xl font-black">✓</span> : <span className="text-gray-300 text-xl font-black">✗</span>}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-600">コンサルファーム</td>
                    {[false, false, false, false].map((ok, i) => (
                      <td key={i} className="text-center px-4 py-4">
                        {ok ? <span className="text-gold text-xl font-black">✓</span> : <span className="text-gray-300 text-xl font-black">✗</span>}
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

      {/* ── WHY CHOOSE US ── */}
      <section className="bg-[#F8F9FA] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">WHY CHOOSE US</p>
            <h2 className="h2-fluid font-bold text-navy mb-2">なぜArcrise Laboを選ぶのか</h2>
            <div className="section-divider mt-3 mb-10" />
          </FadeIn>

          {/* ② 購入者向けカード内容に差し替え */}
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
                <div className="card-hover bg-white border border-gray-200 rounded-xl p-8 relative overflow-hidden">
                  <span className="absolute top-4 right-6 text-4xl font-black text-gray-100 select-none leading-none">
                    {item.num}
                  </span>
                  <h3 className="text-navy font-bold text-lg mb-3 relative z-10">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed relative z-10">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRACK RECORD ── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">TRACK RECORD</p>
            <h2 className="h2-fluid font-bold text-navy mb-2">創業者の実績</h2>
            <div className="section-divider mt-3 mb-10" />
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn delay={100}>
              <div>
                <div className="font-black text-navy" style={{ fontSize: 'clamp(6rem,12vw,8rem)', lineHeight: 0.9 }}>
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

            <FadeIn delay={200}>
              <div>
                <div className="card-hover bg-white border border-gray-200 rounded-xl p-6 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-navy font-bold text-lg">製造業</h3>
                    <span className="font-black text-navy text-2xl">+25%</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    生産管理AIを導入し、業務効率を改善。現場の課題に即した設計で定着率も高評価。
                  </p>
                </div>
                <div className="card-hover bg-white border border-gray-200 rounded-xl p-6 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-navy font-bold text-lg">流通業</h3>
                    <span className="font-black text-navy text-2xl">-30%</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    在庫最適化AIにより廃棄ロスを削減。需要予測の精度向上でキャッシュフローも改善。
                  </p>
                </div>
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

      {/* ── SECTION A: 建設業 ── */}
      <section id="construction" className="bg-[#F8F9FA] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <span className="inline-block bg-navy/8 text-navy border border-navy/15 text-xs px-3 py-1 rounded mb-6 tracking-widest uppercase">
              建設業 / CONSTRUCTION
            </span>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-2">
            {/* LEFT: stats — ③ 数値フォント拡大・説明テキスト強化 */}
            <FadeIn delay={100}>
              <div className="card-hover bg-white border border-gray-200 rounded-xl p-8">
                <p className="text-gray-500 text-xs tracking-widest uppercase mb-3">導入効果</p>
                <div className="font-black text-navy" style={{ fontSize: 'clamp(4.5rem,9vw,7rem)', lineHeight: 1 }}>
                  <CountUp end={30} suffix="%" />
                </div>
                <p className="text-navy font-semibold text-lg mt-2">業務効率向上</p>
                <div className="border-t border-gray-100 my-6" />
                <ul className="space-y-4">
                  {constructionFeatures.map((f) => (
                    <li key={f.name} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                      <div>
                        <p className="text-navy font-semibold text-sm">{f.name}</p>
                        <p className="text-gray-500 text-xs mt-0.5">{f.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-400 text-xs tracking-wider mt-6 uppercase">対象企業数: 4万社</p>
              </div>
            </FadeIn>
            {/* RIGHT: image */}
            <FadeIn delay={200}>
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-lg">
                <Image
                  src="/service-construction.jpg"
                  alt="建設業の現場 – 工場・クレーン群の空撮"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white/60 text-xs tracking-widest uppercase mb-2">導入効果</p>
                  <p className="text-white font-black" style={{ fontSize: 'clamp(3rem,8vw,5rem)', lineHeight: 1 }}>
                    +30%
                  </p>
                  <p className="text-white/90 text-base font-medium mt-3">業務効率向上 / 対象 4万社</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── SECTION B: 不動産業 ── */}
      <section id="realestate" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <span className="inline-block bg-navy/8 text-navy border border-navy/15 text-xs px-3 py-1 rounded mb-6 tracking-widest uppercase">
              不動産業 / REAL ESTATE
            </span>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-2">
            {/* LEFT: stats — ③ */}
            <FadeIn delay={100}>
              <div className="card-hover bg-white border border-gray-200 rounded-xl p-8">
                <p className="text-gray-500 text-xs tracking-widest uppercase mb-3">導入効果</p>
                <div className="font-black text-navy" style={{ fontSize: 'clamp(4.5rem,9vw,7rem)', lineHeight: 1 }}>
                  ×5
                </div>
                <p className="text-navy font-semibold text-lg mt-2">営業効率向上</p>
                <div className="border-t border-gray-100 my-6" />
                <ul className="space-y-4">
                  {realEstateFeatures.map((f) => (
                    <li key={f.name} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                      <div>
                        <p className="text-navy font-semibold text-sm">{f.name}</p>
                        <p className="text-gray-500 text-xs mt-0.5">{f.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-400 text-xs tracking-wider mt-6 uppercase">対象企業数: 12万社</p>
              </div>
            </FadeIn>
            {/* RIGHT: image */}
            <FadeIn delay={200}>
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-lg">
                <Image
                  src="/service-realestate.jpg"
                  alt="地方都市の住宅街・マンション群の空撮"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white/60 text-xs tracking-widest uppercase mb-2">導入効果</p>
                  <p className="text-white font-black" style={{ fontSize: 'clamp(3rem,8vw,5rem)', lineHeight: 1 }}>
                    ×5
                  </p>
                  <p className="text-white/90 text-base font-medium mt-3">営業効率向上 / 対象 12万社</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── SECTION C: 運送業 ── */}
      <section id="logistics" className="bg-[#F8F9FA] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <span className="inline-block bg-navy/8 text-navy border border-navy/15 text-xs px-3 py-1 rounded mb-6 tracking-widest uppercase">
              運送・物流業 / LOGISTICS
            </span>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-2">
            {/* LEFT: stats — ③ */}
            <FadeIn delay={100}>
              <div className="card-hover bg-white border border-gray-200 rounded-xl p-8">
                <p className="text-gray-500 text-xs tracking-widest uppercase mb-3">導入効果</p>
                <div className="font-black text-navy" style={{ fontSize: 'clamp(4.5rem,9vw,7rem)', lineHeight: 1 }}>
                  <CountUp end={20} prefix="−" suffix="%" />
                </div>
                <p className="text-navy font-semibold text-lg mt-2">燃料コスト削減</p>
                <div className="border-t border-gray-100 my-6" />
                <ul className="space-y-4">
                  {logisticsFeatures.map((f) => (
                    <li key={f.name} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                      <div>
                        <p className="text-navy font-semibold text-sm">{f.name}</p>
                        <p className="text-gray-500 text-xs mt-0.5">{f.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-400 text-xs tracking-wider mt-6 uppercase">対象企業数: 6万社</p>
              </div>
            </FadeIn>
            {/* RIGHT: image */}
            <FadeIn delay={200}>
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-lg">
                <Image
                  src="/service-logistics.jpg"
                  alt="物流センターと高速道路の空撮"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white/60 text-xs tracking-widest uppercase mb-2">導入効果</p>
                  <p className="text-white font-black" style={{ fontSize: 'clamp(3rem,8vw,5rem)', lineHeight: 1 }}>
                    −20%
                  </p>
                  <p className="text-white/90 text-base font-medium mt-3">燃料コスト削減 / 対象 6万社</p>
                </div>
              </div>
            </FadeIn>
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
                {/* ④ カードをネイビー背景に */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="card-hover bg-navy rounded-xl p-6">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-4">
                      <span className="text-white/60 text-xs font-black">01</span>
                    </div>
                    <p className="text-xs font-bold text-gold uppercase tracking-wider mb-3">課題</p>
                    <p className="text-white/80 text-sm leading-relaxed">
                      大量の問合せメールへの対応に多くの人手が必要で、担当者の負担が増大していた。
                    </p>
                  </div>
                  <div className="card-hover bg-navy rounded-xl p-6">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-4">
                      <span className="text-white/60 text-xs font-black">02</span>
                    </div>
                    <p className="text-xs font-bold text-gold uppercase tracking-wider mb-3">ソリューション</p>
                    <p className="text-white/80 text-sm leading-relaxed">
                      AIによる返信文の自動生成システムを構築。問合せ内容を解析し、適切な返信文を即時生成。
                    </p>
                  </div>
                  <div className="card-hover bg-navy rounded-xl p-6">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-4">
                      <span className="text-white/60 text-xs font-black">03</span>
                    </div>
                    <p className="text-xs font-bold text-gold uppercase tracking-wider mb-3">効果</p>
                    <p className="text-white/80 text-sm leading-relaxed">
                      対応時間の大幅短縮を実現。担当者の負荷軽減により、コア業務への集中が可能に。
                    </p>
                  </div>
                </div>
                <p className="text-gold font-semibold text-sm mt-8 text-center">
                  現在稼働実証中 — 成果は順次更新予定
                </p>
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

          {/* ⑤ desc 追加・横並びステップ */}
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

            {/* ⑤ desc 追加・縦並びステップ */}
            <div className="sm:hidden space-y-6">
              {steps.map((s, i) => (
                <div key={s.num} className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full border-2 border-navy flex items-center justify-center text-navy font-bold text-sm shrink-0">
                      {s.num}
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-px flex-1 bg-gray-200 mt-2 h-6" />
                    )}
                  </div>
                  <div className="pt-2">
                    <p className="text-navy font-semibold">{s.label}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{s.period}</p>
                    <p className="text-gray-500 text-xs mt-1 leading-snug">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 border border-gray-200 bg-white rounded-xl p-6 text-center">
              <p className="text-gray-700 text-base">
                大手SIerの
                <span className="text-navy font-bold"> 1/3の期間</span>、
                <span className="text-navy font-bold"> 1/5の価格</span>
                で実現
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-navy py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">CONTACT</p>
            <h2 className="h2-fluid font-bold text-white mb-4">
              導入を検討されている企業様へ
            </h2>
            <div className="section-divider mx-auto mt-3 mb-6" />
            <p className="text-white/60 text-base mb-10 max-w-xl mx-auto">
              業界特化型AIプラットフォームについて、まずはお気軽にご相談ください。専門チームが貴社の課題をヒアリングし、最適なプランをご提案します。
            </p>
            <Link
              href="/contact"
              className="inline-block border border-gold/60 text-gold font-semibold px-8 py-3.5 rounded text-sm tracking-wide hover:bg-gold hover:text-navy transition-all"
            >
              無料相談はこちら
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
