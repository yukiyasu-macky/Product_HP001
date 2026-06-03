import Link from 'next/link'
import ParticleBackground from '@/components/ParticleBackground'
import CountUp from '@/components/CountUp'
import FadeIn from '@/components/FadeIn'

export const dynamic = 'force-static'

const ConstructionIcon = () => (
  <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 42h36M10 42V26M38 42V26M2 26h44M24 6l-8 12h16L24 6zM16 26V14M32 26V14" />
  </svg>
)
const RealEstateIcon = () => (
  <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 44h40M8 44V20l16-14 16 14v24M20 44V32h8v12M16 28h4M28 28h4M16 20h4M28 20h4" />
  </svg>
)
const LogisticsIcon = () => (
  <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
    features: ['見積AI', '工程管理AI', '書類自動化'],
    stat: '+20-30%', statLabel: '業務効率向上',
    gradient: 'from-[#162233] to-[#0D1B2A]',
    ref: 'Palantir × Jacobs',
  },
  {
    num: '02', icon: <RealEstateIcon />,
    industry: '不動産業', en: 'REAL ESTATE',
    features: ['物件マッチングAI', '営業LTV最適化', '市場分析AI'],
    stat: '5×', statLabel: '営業効率向上',
    gradient: 'from-[#162219] to-[#0D1B2A]',
    ref: 'Palantir × Lowe\'s',
  },
  {
    num: '03', icon: <LogisticsIcon />,
    industry: '運送・物流業', en: 'LOGISTICS',
    features: ['配車最適化AI', '需要予測AI', 'ルート最適化'],
    stat: '+15-25%', statLabel: 'コスト削減',
    gradient: 'from-[#22180f] to-[#0D1B2A]',
    ref: 'Palantir × Uber Freight',
  },
]

const ctaLinks = [
  { href: '/results', label: '実績', en: 'RESULTS', desc: '100+件の導入支援実績' },
  { href: '/team', label: 'チーム', en: 'TEAM', desc: '経営×AI×営業の3ピース' },
  { href: '/recruit', label: '採用情報', en: 'RECRUIT', desc: '大手+30-50%給与 + SO' },
  { href: '/roadmap', label: '事業計画', en: 'ROADMAP', desc: '3年でExit ¥100-150億' },
  { href: '/ir', label: 'IR', en: 'INVESTOR RELATIONS', desc: 'Pre-Seed J-KISS ¥2億' },
  { href: '/contact', label: 'お問い合わせ', en: 'CONTACT', desc: '無料相談・資料請求' },
]

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center bg-navy overflow-hidden pt-16">
        <ParticleBackground />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(201,169,110,0.06) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, #0D1B2A)' }} />

        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* CSS keyframe animations — no JS/IntersectionObserver dependency */}
          <p
            className="hero-appear text-gold tracking-[0.5em] text-xs font-medium uppercase mb-8"
            style={{ animationDelay: '0ms', opacity: 0 }}
          >
            Arcrise Labo Inc.
          </p>

          <h1
            className="hero-appear font-black mb-6 select-none"
            style={{
              fontSize: 'clamp(2.25rem, 5.5vw, 4.5rem)',
              lineHeight: 1.15,
              animationDelay: '150ms',
              opacity: 0,
            }}
          >
            <span style={{ color: '#FFFFFF' }}>地方産業を、</span>
            <span style={{ color: '#C9A96E', textShadow: '0 0 15px rgba(201,169,110,0.45)' }}>AI</span>
            <span style={{ color: '#FFFFFF' }}>で拓く。</span>
          </h1>

          <p
            className="hero-appear text-base sm:text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
            style={{ color: '#C9A96E', animationDelay: '300ms', opacity: 0 }}
          >
            1/5価格で、経営成果まで伴走する。
          </p>

          <div
            className="hero-appear flex flex-col sm:flex-row gap-4 justify-center"
            style={{ animationDelay: '450ms', opacity: 0 }}
          >
            <Link href="/service"
              className="inline-block bg-gold text-navy font-bold px-10 py-4 rounded text-sm tracking-widest hover:opacity-90 transition-all hover:shadow-[0_0_30px_rgba(201,169,110,0.4)]"
            >
              サービスを見る
            </Link>
            <Link href="/about"
              className="inline-block border border-gold/50 text-gold font-bold px-10 py-4 rounded text-sm tracking-widest hover:bg-gold hover:text-navy transition-all"
            >
              会社を知る
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
          <span className="text-white/20 text-[10px] tracking-[0.4em]">SCROLL</span>
          <div className="w-px h-10" style={{ background: 'linear-gradient(to bottom, rgba(201,169,110,0.5), transparent)' }} />
        </div>
      </section>

      {/* ── Numbers ── */}
      <section className="py-28 border-t border-gold/10" style={{ background: '#060D14' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-20">
              <p className="text-gold text-xs tracking-[0.4em] mb-4 uppercase">Proven Results</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">実証された成果</h2>
              <div className="section-divider mx-auto mt-5" />
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { end: 30, display: '20-30%', label: '業務効率向上', desc: 'AI導入による業務効率化の実証値' },
              { end: 22, suffix: '万社', label: 'TAM市場規模', desc: '建設・不動産・運送業の対象企業数' },
              { end: 100, suffix: '+', label: '創業者実績', desc: 'CEOによるAI・DX導入支援実績件数' },
            ].map((s, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="card-hover text-center p-10 rounded-lg border border-gold/10 bg-white/[0.02]">
                  <div className="font-black mb-4 glow-gold gradient-text-gold"
                    style={{ fontSize: 'clamp(3.5rem, 8vw, 5.5rem)', lineHeight: 1 }}>
                    {s.display
                      ? s.display
                      : <CountUp end={s.end} suffix={s.suffix ?? ''} />}
                  </div>
                  <div className="text-white font-semibold text-lg mb-2">{s.label}</div>
                  <div className="text-white/35 text-sm leading-relaxed">{s.desc}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="bg-navy py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-20">
              <p className="text-gold text-xs tracking-[0.4em] mb-4 uppercase">Our Services</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">業界特化型AIプラットフォーム</h2>
              <div className="section-divider mx-auto mt-5" />
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <FadeIn key={i} delay={i * 110}>
                <div className={`card-hover group relative rounded-lg overflow-hidden border border-gold/15 bg-gradient-to-br ${s.gradient} p-8 h-full flex flex-col`}>
                  <span className="absolute top-4 right-5 text-7xl font-black text-gold/[0.06] select-none leading-none">
                    {s.num}
                  </span>
                  <div className="text-gold mb-5">{s.icon}</div>
                  <p className="text-gold/40 text-[10px] tracking-[0.35em] mb-1">{s.en}</p>
                  <h3 className="text-white text-xl font-bold mb-5">{s.industry}</h3>
                  <ul className="space-y-2.5 mb-6">
                    {s.features.map(f => (
                      <li key={f} className="text-white/55 text-sm flex items-center gap-2.5">
                        <span className="w-1 h-1 rounded-full bg-gold shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto border-t border-gold/15 pt-5">
                    <div className="glow-gold-sm gradient-text-gold font-black text-3xl">{s.stat}</div>
                    <div className="text-white/40 text-xs mt-0.5 mb-1">{s.statLabel}</div>
                    <div className="text-gold/25 text-[10px] tracking-wider">{s.ref}</div>
                  </div>
                  <Link href="/service"
                    className="mt-4 inline-block text-gold/45 group-hover:text-gold text-sm transition">
                    詳しく見る →
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={200}>
            <div className="mt-10 text-center">
              <Link href="/service"
                className="inline-block border border-gold/40 text-gold px-8 py-3 rounded text-sm tracking-wider hover:bg-gold hover:text-navy transition">
                全サービスを見る →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="relative py-36 overflow-hidden diagonal-gold"
        style={{ background: '#060D14' }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 70% at 50% 50%, rgba(201,169,110,0.04) 0%, transparent 70%)' }} />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-gold text-xs tracking-[0.5em] mb-10 uppercase">Our Mission</p>
            <div className="text-[7rem] font-black leading-none text-gold/[0.07] select-none -mb-6">&ldquo;</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              地方中堅企業にAIを届け、<br />
              <span className="glow-gold gradient-text-gold">日本の産業を再生する</span>
            </h2>
          </FadeIn>
          <FadeIn delay={150}>
            <p className="text-white/45 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-12">
              2025年、地方企業の倒産件数849件。AI市場は9-14倍に成長する中、大手SIerが届かない
              <span className="text-gold/70">22万社</span>の中堅企業市場が空白のまま残されています。
            </p>
            <Link href="/mission"
              className="inline-block border border-gold/50 text-gold font-semibold px-10 py-3.5 rounded text-sm tracking-wider hover:bg-gold hover:text-navy transition">
              ミッションを読む →
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA Grid ── */}
      <section className="bg-navy py-28 border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <h2 className="text-2xl font-bold text-white">詳しく見る</h2>
              <div className="section-divider mx-auto mt-4" />
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {ctaLinks.map((item, i) => (
              <FadeIn key={i} delay={i * 60}>
                <Link href={item.href}
                  className="card-hover group block p-7 border border-gold/12 rounded-lg bg-white/[0.02] hover:bg-white/[0.04]">
                  <p className="text-gold/35 text-[10px] tracking-[0.3em] mb-2">{item.en}</p>
                  <h3 className="text-white font-bold text-lg mb-2 group-hover:text-gold transition-colors">{item.label}</h3>
                  <p className="text-white/35 text-sm mb-4">{item.desc}</p>
                  <span className="text-gold/40 group-hover:text-gold transition-colors text-sm">→</span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
