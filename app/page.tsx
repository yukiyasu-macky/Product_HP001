import Link from 'next/link'
import Image from 'next/image'
import ParticleBackground from '@/components/ParticleBackground'
import CountUp from '@/components/CountUp'
import FadeIn from '@/components/FadeIn'

export const dynamic = 'force-static'

const ConstructionIcon = () => (
  <svg viewBox="0 0 48 48" className="w-9 h-9" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 42h36M10 42V26M38 42V26M2 26h44M24 6l-8 12h16L24 6zM16 26V14M32 26V14" />
  </svg>
)
const RealEstateIcon = () => (
  <svg viewBox="0 0 48 48" className="w-9 h-9" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 44h40M8 44V20l16-14 16 14v24M20 44V32h8v12M16 28h4M28 28h4M16 20h4M28 20h4" />
  </svg>
)
const LogisticsIcon = () => (
  <svg viewBox="0 0 48 48" className="w-9 h-9" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 34h30V10H2v24zM32 18h8l6 8v8H32V18z" />
    <path d="M6 20h20M6 26h14" />
    <circle cx="10" cy="38" r="3" fill="currentColor" stroke="none" />
    <circle cx="22" cy="38" r="3" fill="currentColor" stroke="none" />
    <circle cx="38" cy="38" r="3" fill="currentColor" stroke="none" />
  </svg>
)

const services = [
  {
    num: '01', icon: <ConstructionIcon />,
    industry: '建設業', en: 'CONSTRUCTION',
    desc: '見積作成、工程管理、報告書作成をAIで効率化。現場監督や管理職の事務負担を削減します。',
    stat: '+20-30%', statLabel: '業務効率向上',
    ref: 'Palantir × Jacobs',
  },
  {
    num: '02', icon: <RealEstateIcon />,
    industry: '不動産業', en: 'REAL ESTATE',
    desc: '物件情報整理、顧客対応、営業資料作成をAIで自動化。営業担当者が成約活動に集中できる環境を構築。',
    stat: '×5', statLabel: '営業効率向上',
    ref: 'Palantir × Lowe\'s',
  },
  {
    num: '03', icon: <LogisticsIcon />,
    industry: '運送・物流業', en: 'LOGISTICS',
    desc: '配車計画、運行管理、日報処理などをAIで最適化。ドライバー不足への対応と運行効率向上を同時に実現。',
    stat: '+15-25%', statLabel: 'コスト削減',
    ref: 'Palantir × Uber Freight',
  },
]

const ctaLinks = [
  { href: '/results', label: '実績', desc: '100+件の導入支援実績' },
  { href: '/team', label: 'チーム', desc: '経営×AI×営業の3ピース' },
  { href: '/recruit', label: '採用情報', desc: '大手+30-50%給与 + SO' },
  { href: '/contact', label: 'お問い合わせ', desc: '無料相談・資料請求' },
]

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center bg-navy overflow-hidden pt-16">
        {/* Layer 1: background image */}
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
          <Image src="/images/hero-bg.jpg" alt="" fill className="object-cover" priority />
        </div>
        {/* Layer 2: navy overlay */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ zIndex: 1, background: 'rgba(13, 27, 42, 0.5)' }} />
        {/* Layer 3: particles (z-index 2 set inside component) */}
        <ParticleBackground />
        <div className="absolute inset-0 pointer-events-none"
          style={{ zIndex: 3, background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(201,169,110,0.06) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{ zIndex: 3, background: 'linear-gradient(to bottom, transparent, #0D1B2A)' }} />

        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="hero-appear text-gold tracking-[0.5em] text-xs font-medium uppercase mb-8"
            style={{ animationDelay: '0ms', opacity: 0 }}>
            Arcrise Labo Inc.
          </p>
          <h1 className="hero-appear font-black mb-6 select-none"
            style={{ fontSize: 'clamp(1.75rem, 0.8rem + 4vw, 4.5rem)', lineHeight: 1.15, animationDelay: '150ms', opacity: 0 }}>
            <span style={{ color: '#FFFFFF' }}>地方産業を </span>
            <span style={{ color: '#C9A96E', textShadow: '0 0 15px rgba(201,169,110,0.45)' }}>AI</span>
            <span style={{ color: '#FFFFFF' }}>で拓く。</span>
          </h1>
          <p className="hero-appear text-base sm:text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
            style={{ color: '#C9A96E', animationDelay: '300ms', opacity: 0 }}>
            1/5価格で、経営成果まで伴走する。
          </p>
          <div className="hero-appear flex flex-col sm:flex-row gap-4 justify-center"
            style={{ animationDelay: '450ms', opacity: 0 }}>
            <Link href="/service"
              className="inline-block bg-gold text-navy font-bold px-10 py-4 rounded text-sm tracking-widest hover:opacity-90 transition-all hover:shadow-[0_0_30px_rgba(201,169,110,0.4)]">
              サービスを見る
            </Link>
            <Link href="/about"
              className="inline-block border border-white/40 text-white font-bold px-10 py-4 rounded text-sm tracking-widest hover:bg-white hover:text-navy transition-all">
              会社を知る
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
          <span className="text-white/25 text-[10px] tracking-[0.4em]">SCROLL</span>
          <div className="w-px h-10" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)' }} />
        </div>
      </section>

      {/* ── NUMBERS (white) ── */}
      <section className="bg-white py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">Proven Results</p>
              <h2 className="h2-fluid font-bold text-navy">実証された成果</h2>
              <div className="section-divider mx-auto mt-5" />
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { display: '20-30%', label: '業務効率向上', desc: 'AI導入による業務効率化の実証値' },
              { end: 22, suffix: '万社', label: 'TAM市場規模', desc: '建設・不動産・運送業の対象企業数' },
              { end: 100, suffix: '+件', label: '創業者実績', desc: 'CEOによるAI・DX導入支援件数' },
            ].map((s, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="card-hover text-center p-10 rounded-xl border border-gray-100">
                  <div className="font-black text-navy mb-3 whitespace-nowrap"
                    style={{ fontSize: 'clamp(2.25rem, 5.5vw, 4rem)', lineHeight: 1 }}>
                    {s.display ? s.display : <CountUp end={s.end!} suffix={s.suffix!} />}
                  </div>
                  <div className="text-navy font-semibold text-base mb-2">{s.label}</div>
                  <div className="text-gray-500 text-sm leading-relaxed">{s.desc}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES (light gray) ── */}
      <section className="bg-[#F8F9FA] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">Our Services</p>
              <h2 className="h2-fluid font-bold text-navy">業界特化型AIプラットフォーム</h2>
              <div className="section-divider mx-auto mt-5" />
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="card-hover group bg-white border border-gray-200 rounded-xl p-8 h-full flex flex-col">
                  <span className="text-gray-300 text-4xl font-black leading-none mb-4 select-none">{s.num}</span>
                  <div className="text-gold mb-4">{s.icon}</div>
                  <p className="text-gold/70 text-[10px] tracking-[0.3em] uppercase mb-1">{s.en}</p>
                  <h3 className="text-navy text-lg font-bold mb-3">{s.industry}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">{s.desc}</p>
                  <div className="border-t border-gray-100 pt-5 mt-auto">
                    <div className="text-navy font-black text-2xl">{s.stat}</div>
                    <div className="text-gray-500 text-xs mt-0.5 mb-1">{s.statLabel}</div>
                    <div className="text-gray-300 text-[10px] tracking-wide">{s.ref}</div>
                  </div>
                  <Link href="/service" className="mt-4 inline-block text-gold text-sm font-medium hover:underline">
                    詳しく見る →
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={200}>
            <div className="mt-10 text-center">
              <Link href="/service"
                className="inline-block bg-navy text-white font-semibold px-8 py-3 rounded text-sm tracking-wide hover:bg-[#1a2f45] transition-colors">
                全サービスを見る →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── MISSION (dark navy — contrast section) ── */}
      <section className="relative bg-navy py-32 overflow-hidden diagonal-gold">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 70% at 50% 50%, rgba(201,169,110,0.04) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-gold text-xs tracking-[0.5em] uppercase mb-8">Our Mission</p>
            <div className="text-[6rem] font-black leading-none text-gold/[0.07] select-none -mb-4">&ldquo;</div>
            <h2 className="h2-hero font-black text-white leading-tight mb-6">
              地方中堅企業にAIを届け、<br />
              <span className="glow-gold gradient-text-gold">日本の産業を再生する</span>
            </h2>
          </FadeIn>
          <FadeIn delay={150}>
            <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
              私たちは、AIの力を地方中堅企業へ届けることで、日本の基幹産業を再生します。
              建設、不動産、物流など地域経済を支える企業の生産性向上を実現し、
              人手不足や事業承継といった社会課題の解決に挑戦します。
            </p>
            <Link href="/mission"
              className="inline-block border border-gold/60 text-gold font-semibold px-10 py-3.5 rounded text-sm tracking-wider hover:bg-gold hover:text-navy transition-all">
              ミッションを読む →
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA GRID (white) ── */}
      <section className="bg-white py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <h2 className="text-2xl font-bold text-navy">詳しく見る</h2>
              <div className="section-divider mx-auto mt-4" />
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {ctaLinks.map((item, i) => (
              <FadeIn key={i} delay={i * 60}>
                <Link href={item.href}
                  className="card-hover group block p-7 border border-gray-200 rounded-xl bg-white hover:bg-[#F8F9FA] transition-all">
                  <h3 className="text-navy font-bold text-lg mb-2 group-hover:text-gold transition-colors">{item.label}</h3>
                  <p className="text-gray-500 text-sm mb-4">{item.desc}</p>
                  <span className="text-gold text-sm">→</span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
