import Link from 'next/link'
import Image from 'next/image'
import FadeIn from '@/components/FadeIn'
import CountUp from '@/components/CountUp'

export const dynamic = 'force-static'

function ConstructionIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Crane arm */}
      <line x1="8" y1="40" x2="8" y2="8" />
      <line x1="8" y1="10" x2="36" y2="10" />
      <line x1="36" y1="10" x2="36" y2="20" />
      <line x1="8" y1="10" x2="14" y2="4" />
      {/* Hook */}
      <line x1="28" y1="10" x2="28" y2="18" />
      <path d="M25 18 Q24 22 27 22 Q30 22 30 19" />
      {/* Building frame */}
      <rect x="14" y="22" width="26" height="18" />
      <line x1="14" y1="30" x2="40" y2="30" />
      <line x1="22" y1="22" x2="22" y2="40" />
      <line x1="32" y1="22" x2="32" y2="40" />
      {/* Ground */}
      <line x1="4" y1="40" x2="44" y2="40" />
      {/* Workers */}
      <circle cx="10" cy="36" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="43" cy="36" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  )
}


function LogisticsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Truck body */}
      <rect x="2" y="18" width="28" height="18" />
      {/* Truck cab */}
      <path d="M30 26 L30 36 L46 36 L46 28 L40 18 L30 18 L30 26 Z" />
      {/* Cab window */}
      <path d="M32 20 L40 20 L44 26 L32 26 Z" />
      {/* Wheels */}
      <circle cx="10" cy="38" r="4" />
      <circle cx="22" cy="38" r="4" />
      <circle cx="38" cy="38" r="4" />
      {/* Route dots */}
      <circle cx="6" cy="12" r="2" fill="currentColor" stroke="none" />
      <circle cx="16" cy="8" r="2" fill="currentColor" stroke="none" />
      <circle cx="26" cy="12" r="2" fill="currentColor" stroke="none" />
      <path d="M6 12 Q11 6 16 8 Q21 10 26 12" strokeDasharray="2 2" />
    </svg>
  )
}

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

  const steps = [
    { num: '01', label: 'ヒアリング', period: 'Week 1–2' },
    { num: '02', label: '課題分析', period: 'Week 3–4' },
    { num: '03', label: '設計', period: 'Month 2' },
    { num: '04', label: '開発', period: 'Month 3–4' },
    { num: '05', label: 'テスト', period: 'Month 5' },
    { num: '06', label: '稼働', period: 'Month 6' },
  ]

  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-[#F8F9FA] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">SERVICE</p>
            <h1
              className="font-black text-navy leading-none mb-2"
              style={{ fontSize: 'clamp(2.5rem,6vw,4.5rem)' }}
            >
              サービス・事業内容
            </h1>
            <div className="section-divider mt-3 mb-6" />
            <p className="text-gray-500 text-xl mt-4">業界特化型AIプラットフォーム</p>
          </FadeIn>
        </div>
      </section>

      {/* ── PLATFORM OVERVIEW ── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">PLATFORM</p>
            <h2 className="h2-fluid font-bold text-navy mb-2">なぜ業界特化か</h2>
            <div className="section-divider mx-auto mt-3 mb-10" />
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
              Palantirの手法を参考にした、業界ごとにカスタマイズされたAIプラットフォーム。汎用AIではなく、各業界の業務プロセスに最適化されたソリューションを提供します。
            </p>
            <div className="flex gap-4 flex-wrap justify-center mt-8">
              <span className="border border-navy text-navy px-6 py-2 rounded-full text-sm tracking-wide">
                大手SIerの1/5価格
              </span>
              <span className="border border-navy text-navy px-6 py-2 rounded-full text-sm tracking-wide">
                大手SIerの1/3期間
              </span>
              <span className="bg-navy text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide">
                6ヶ月で稼働
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── SECTION A: 建設業 ── */}
      <section className="bg-[#F8F9FA] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <span className="inline-block bg-navy/8 text-navy border border-navy/15 text-xs px-3 py-1 rounded mb-6 tracking-widest uppercase">
              建設業 / CONSTRUCTION
            </span>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-2">
            {/* LEFT: features */}
            <FadeIn delay={100}>
              <ConstructionIcon className="text-gold w-14 h-14 mb-6" />
              <h2 className="h2-fluid font-bold text-navy mb-4">
                建設業向けAIプラットフォーム
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                見積作成、工程管理、報告書作成、安全管理などの業務をAIで効率化。
                現場監督や管理職の事務負担を削減し、
                限られた人員でも高品質な施工管理を実現します。
              </p>
              <ul className="space-y-5">
                {constructionFeatures.map((f) => (
                  <li key={f.name} className="flex items-start gap-4">
                    <span className="mt-1.5 shrink-0 w-2 h-2 rounded-full bg-gold" />
                    <div>
                      <p className="text-navy font-semibold">{f.name}</p>
                      <p className="text-gray-500 text-sm mt-0.5">{f.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="text-gray-400 text-xs tracking-wider mt-8 uppercase">
                米国実例: Palantir × Jacobs Engineering
              </p>
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
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="text-white/70 text-xs tracking-widest uppercase mb-1">導入効果</p>
                  <p className="text-white font-black" style={{ fontSize: 'clamp(2rem,5vw,3rem)', lineHeight: 1 }}>
                    +30%
                  </p>
                  <p className="text-white/80 text-sm mt-1">業務効率向上 / 対象 4万社</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── SECTION B: 不動産業 ── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <span className="inline-block bg-navy/8 text-navy border border-navy/15 text-xs px-3 py-1 rounded mb-6 tracking-widest uppercase">
              不動産業 / REAL ESTATE
            </span>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-2">
            {/* LEFT: stats */}
            <FadeIn delay={100}>
              <div className="card-hover bg-white border border-gray-200 rounded-xl p-10">
                <p className="text-gray-500 text-xs tracking-widest uppercase mb-3">導入効果</p>
                <div
                  className="font-black text-navy"
                  style={{ fontSize: 'clamp(3.5rem,7vw,5rem)', lineHeight: 1 }}
                >
                  ×5
                </div>
                <p className="text-gray-600 text-base mt-2">営業効率向上</p>
                <div className="border-t border-gray-100 my-6" />
                <p className="text-gray-500 text-sm">対象企業数: 12万社</p>
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
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="text-white/70 text-xs tracking-widest uppercase mb-1">導入効果</p>
                  <p className="text-white font-black" style={{ fontSize: 'clamp(2rem,5vw,3rem)', lineHeight: 1 }}>
                    ×5
                  </p>
                  <p className="text-white/80 text-sm mt-1">営業効率向上 / 対象 12万社</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── SECTION C: 運送・物流業 ── */}
      <section className="bg-[#F8F9FA] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <span className="inline-block bg-navy/8 text-navy border border-navy/15 text-xs px-3 py-1 rounded mb-6 tracking-widest uppercase">
              運送・物流業 / LOGISTICS
            </span>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-2">
            {/* LEFT: features */}
            <FadeIn delay={100}>
              <LogisticsIcon className="text-gold w-14 h-14 mb-6" />
              <h2 className="h2-fluid font-bold text-navy mb-4">
                運送・物流業向けAIプラットフォーム
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                配車計画、運行管理、問い合わせ対応、日報処理などをAIで最適化。
                ドライバー不足への対応と運行効率向上を同時に実現します。
              </p>
              <ul className="space-y-5">
                {logisticsFeatures.map((f) => (
                  <li key={f.name} className="flex items-start gap-4">
                    <span className="mt-1.5 shrink-0 w-2 h-2 rounded-full bg-gold" />
                    <div>
                      <p className="text-navy font-semibold">{f.name}</p>
                      <p className="text-gray-500 text-sm mt-0.5">{f.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="text-gray-400 text-xs tracking-wider mt-8 uppercase">
                米国実例: Palantir × Uber Freight
              </p>
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
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="text-white/70 text-xs tracking-widest uppercase mb-1">導入効果</p>
                  <p className="text-white font-black" style={{ fontSize: 'clamp(2rem,5vw,3rem)', lineHeight: 1 }}>
                    −20%
                  </p>
                  <p className="text-white/80 text-sm mt-1">燃料コスト削減 / 対象 6万社</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── MARKET SIZE ── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">MARKET SIZE</p>
            <h2 className="h2-fluid font-bold text-navy mb-2">市場規模</h2>
            <div className="section-divider mx-auto mt-3 mb-10" />
            <div
              className="font-black text-navy"
              style={{ fontSize: 'clamp(5rem,10vw,7rem)', lineHeight: 1 }}
            >
              <CountUp end={22} suffix="万社" />
            </div>
            <p className="text-gray-600 text-base mt-4 mb-12 tracking-wider">
              建設 4万 + 不動産 12万 + 運送 6万
            </p>
          </FadeIn>

          {/* Progress bars */}
          <FadeIn delay={100}>
            <div className="max-w-2xl mx-auto space-y-6">
              {/* 建設業 */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600 text-sm">建設業</span>
                  <span className="text-navy text-sm font-bold">4万社</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-2 bg-navy rounded-full" style={{ width: '18%' }} />
                </div>
              </div>
              {/* 不動産業 */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600 text-sm">不動産業</span>
                  <span className="text-navy text-sm font-bold">12万社</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-2 bg-navy rounded-full" style={{ width: '55%' }} />
                </div>
              </div>
              {/* 運送業 */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600 text-sm">運送業</span>
                  <span className="text-navy text-sm font-bold">6万社</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-2 bg-navy rounded-full" style={{ width: '27%' }} />
                </div>
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

          {/* Horizontal steps (sm+) */}
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
                  </div>
                  {i < steps.length - 1 && (
                    <div className="flex-1 h-px bg-gray-200 mt-5 min-w-0" />
                  )}
                </div>
              ))}
            </div>

            {/* Vertical steps (mobile) */}
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

      {/* ── COMPETITIVE ADVANTAGE ── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">WHY ARCRISE</p>
            <h2 className="h2-fluid font-bold text-navy mb-2">競合優位性</h2>
            <div className="section-divider mt-3 mb-12" />
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <p className="text-gray-700 text-lg leading-relaxed">
                Arcrise Laboは、AI技術だけでなく
                <span className="text-navy font-semibold">「経営」と「現場」</span>の両方を理解しています。
                100件以上の経営支援実績を持つCEOと、
                大規模AI開発を統括してきたCTOが連携し、
                業界特化型AIを短期間で実装します。
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mt-6">
                一般的なSI開発のような高額・長期プロジェクトではなく、
                成果創出までを見据えた実践型導入を提供できることが
                <span className="text-navy font-semibold">最大の強み</span>です。
              </p>
            </FadeIn>
            <FadeIn direction="right">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: '価格', value: '1/5', sub: '大手SIer比' },
                  { label: '期間', value: '1/3', sub: '大手SIer比' },
                  { label: '支援実績', value: '100+', sub: 'CEO実績件数' },
                  { label: '稼働まで', value: '6ヶ月', sub: '標準導入期間' },
                ].map((item) => (
                  <div key={item.label}
                    className="card-hover bg-white border border-gray-200 rounded-xl p-6 text-center">
                    <div className="font-black text-navy text-2xl mb-1">{item.value}</div>
                    <div className="text-navy text-sm font-semibold">{item.label}</div>
                    <div className="text-gray-500 text-xs mt-0.5">{item.sub}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
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
