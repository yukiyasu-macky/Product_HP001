import Link from 'next/link'
import FadeIn from '@/components/FadeIn'

export const dynamic = 'force-static'

export default function RoadmapPage() {
  return (
    <main>
      {/* 1. Hero */}
      <section className="bg-[#F8F9FA] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">BUSINESS PLAN</p>
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">事業計画</h1>
          <div className="section-divider mt-3" />
        </div>
      </section>

      {/* 2. 3-Year Strategy */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">STRATEGY</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-2">3年戦略</h2>
            <div className="section-divider mt-3 mb-10" />
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Year 1 */}
            <FadeIn>
              <div className="card-hover bg-white border border-gray-200 rounded-xl p-8 h-full">
                <span className="inline-block bg-navy text-white text-xs px-3 py-1 rounded mb-4">
                  Year 1
                </span>
                <p className="text-xs text-gray-500 mb-2">2026–2027</p>
                <h3 className="text-2xl font-bold text-navy mb-6">垂直展開</h3>
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="text-gold font-semibold mb-1">注力業界</dt>
                    <dd className="text-gray-600">建設・不動産・運送の3業界</dd>
                  </div>
                  <div>
                    <dt className="text-gold font-semibold mb-1">目標</dt>
                    <dd className="text-gray-600">マイルストン社など初期顧客獲得</dd>
                  </div>
                  <div>
                    <dt className="text-gold font-semibold mb-1">売上目標</dt>
                    <dd className="text-gold font-bold text-2xl">¥3.5–4億</dd>
                  </div>
                </dl>
              </div>
            </FadeIn>

            {/* Year 2 */}
            <FadeIn>
              <div className="card-hover bg-white border border-gray-200 rounded-xl p-8 h-full">
                <span className="inline-block bg-navy text-white text-xs px-3 py-1 rounded mb-4">
                  Year 2
                </span>
                <p className="text-xs text-gray-500 mb-2">2027–2028</p>
                <h3 className="text-2xl font-bold text-navy mb-6">水平拡大</h3>
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="text-gold font-semibold mb-1">注力業界</dt>
                    <dd className="text-gray-600">業界拡大 + M&Aによる規模拡大</dd>
                  </div>
                  <div>
                    <dt className="text-gold font-semibold mb-1">目標</dt>
                    <dd className="text-gray-600">新業界参入、M&A候補探索</dd>
                  </div>
                  <div>
                    <dt className="text-gold font-semibold mb-1">売上目標</dt>
                    <dd className="text-gold font-bold text-2xl">¥7–10億</dd>
                  </div>
                </dl>
              </div>
            </FadeIn>

            {/* Year 3 */}
            <FadeIn>
              <div className="card-hover bg-white border border-gray-200 rounded-xl p-8 h-full">
                <span className="inline-block bg-navy text-white text-xs px-3 py-1 rounded mb-4">
                  Year 3
                </span>
                <p className="text-xs text-gray-500 mb-2">2028–2029</p>
                <h3 className="text-2xl font-bold text-navy mb-6">ASP展開</h3>
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="text-gold font-semibold mb-1">注力業界</dt>
                    <dd className="text-gray-600">廉価版ASPで中小企業市場へ</dd>
                  </div>
                  <div>
                    <dt className="text-gold font-semibold mb-1">目標</dt>
                    <dd className="text-gray-600">Exit準備、¥100–150億評価</dd>
                  </div>
                  <div>
                    <dt className="text-gold font-semibold mb-1">売上目標</dt>
                    <dd className="text-gold font-bold text-2xl">¥18–25億</dd>
                  </div>
                </dl>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. Revenue Plan */}
      <section className="bg-[#F8F9FA] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">REVENUE FORECAST</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-2">売上計画</h2>
            <div className="section-divider mt-3 mb-10" />
          </FadeIn>

          <FadeIn>
            <div className="space-y-8 max-w-2xl">
              {/* Year 1 */}
              <div>
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-gray-600 text-sm">Year 1　2026–2027</span>
                  <span className="font-black text-navy text-2xl">¥3.5–4億</span>
                </div>
                <div className="bg-gray-200 h-3 rounded overflow-hidden">
                  <div className="bg-navy h-3 rounded" style={{ width: '40%' }} />
                </div>
              </div>

              {/* Year 2 */}
              <div>
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-gray-600 text-sm">Year 2　2027–2028</span>
                  <span className="font-black text-navy text-2xl">¥7–10億</span>
                </div>
                <div className="bg-gray-200 h-3 rounded overflow-hidden">
                  <div className="bg-navy h-3 rounded" style={{ width: '65%' }} />
                </div>
              </div>

              {/* Year 3 */}
              <div>
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-gray-600 text-sm">Year 3　2028–2029</span>
                  <span className="font-black text-navy text-2xl">¥18–25億</span>
                </div>
                <div className="bg-gray-200 h-3 rounded overflow-hidden">
                  <div className="bg-navy h-3 rounded" style={{ width: '100%' }} />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 4. Fundraising Plan */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">FUNDING</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-2">資金調達計画</h2>
            <div className="section-divider mt-3 mb-10" />
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Pre-Seed — current round, emphasized */}
            <FadeIn>
              <div className="card-hover bg-white border-2 border-navy rounded-xl p-8 h-full">
                <span className="inline-block bg-navy/8 text-navy border border-navy/15 text-xs px-3 py-1 rounded mb-4">
                  Pre-Seed
                </span>
                <p className="font-black text-navy text-3xl mb-1">¥2億</p>
                <p className="text-xs text-gray-500 mb-6">J-KISS / Pre-money Cap ¥6億</p>
                <div>
                  <p className="text-gold font-semibold text-sm mb-2">資金用途</p>
                  <p className="text-gray-600 text-sm">開発・初期顧客獲得</p>
                </div>
              </div>
            </FadeIn>

            {/* Seed */}
            <FadeIn>
              <div className="card-hover bg-white border border-gray-200 rounded-xl p-8 h-full">
                <span className="inline-block bg-navy/8 text-navy border border-navy/15 text-xs px-3 py-1 rounded mb-4">
                  Seed
                </span>
                <p className="font-black text-navy text-3xl mb-1">¥10億</p>
                <p className="text-xs text-gray-500 mb-6">2027年</p>
                <div>
                  <p className="text-gold font-semibold text-sm mb-2">資金用途</p>
                  <p className="text-gray-600 text-sm">チーム拡大・マーケティング</p>
                </div>
              </div>
            </FadeIn>

            {/* Series A */}
            <FadeIn>
              <div className="card-hover bg-white border border-gray-200 rounded-xl p-8 h-full">
                <span className="inline-block bg-navy/8 text-navy border border-navy/15 text-xs px-3 py-1 rounded mb-4">
                  Series A
                </span>
                <p className="font-black text-navy text-3xl mb-1">¥10億</p>
                <p className="text-xs text-gray-500 mb-6">2028年</p>
                <div>
                  <p className="text-gold font-semibold text-sm mb-2">資金用途</p>
                  <p className="text-gray-600 text-sm">業界拡大・M&A資金</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 5. Exit Strategy */}
      <section className="bg-[#F8F9FA] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">EXIT</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-2">Exit戦略</h2>
            <div className="section-divider mt-3 mb-10" />
          </FadeIn>

          <FadeIn>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-xs text-gold tracking-[0.4em] uppercase mb-4">Target Valuation</p>
              <p
                className="font-black text-navy leading-none mb-6"
                style={{ fontSize: 'clamp(3rem,8vw,5rem)' }}
              >
                ¥100–150億
              </p>
              <div className="w-12 h-px bg-gray-300 mx-auto mb-6" />
              <p className="text-gray-600 text-xl font-semibold mb-3">
                2029年Q4　IPO or M&A
              </p>
              <p className="text-gray-500 text-sm">同業界のAI企業の評価倍率から算出</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4">CONTACT</p>
            <h2 className="text-3xl font-bold text-white mb-6">投資家の方へ</h2>
            <p className="text-white/70 mb-8">事業計画の詳細資料をご希望の方はお問い合わせください。</p>
            <Link
              href="/contact"
              className="inline-block border border-gold/60 text-gold font-semibold px-8 py-3.5 rounded text-sm tracking-wide hover:bg-gold hover:text-navy transition-all"
            >
              お問い合わせ
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
