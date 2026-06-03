export const dynamic = 'force-static';

export default function RoadmapPage() {
  return (
    <main>
      {/* 1. Hero */}
      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-4">
            BUSINESS PLAN
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            事業計画
          </h1>
          <div className="w-16 h-1 bg-gold" />
        </div>
      </section>

      {/* 2. 3-Year Strategy */}
      <section className="bg-navy py-20 border-t border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            3年戦略
          </h2>
          <div className="w-16 h-1 bg-gold mb-12" />

          <div className="grid md:grid-cols-3 gap-8">
            {/* Year 1 */}
            <div className="border border-gold/30 bg-white/5 rounded-lg p-8">
              <span className="inline-block bg-gold/10 text-gold border border-gold/30 text-sm px-3 py-1 rounded mb-4">
                Year 1
              </span>
              <p className="text-xs text-gold/60 mb-2">2026–2027</p>
              <h3 className="text-2xl font-bold text-white mb-6">垂直展開</h3>
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="text-gold/70 mb-1">注力業界</dt>
                  <dd className="text-white">建設・不動産・運送の3業界</dd>
                </div>
                <div>
                  <dt className="text-gold/70 mb-1">目標</dt>
                  <dd className="text-white">マイルストン社など初期顧客獲得</dd>
                </div>
                <div>
                  <dt className="text-gold/70 mb-1">売上目標</dt>
                  <dd className="text-2xl font-bold text-gold">¥3.5–4億</dd>
                </div>
              </dl>
            </div>

            {/* Year 2 */}
            <div className="border border-gold/30 bg-white/5 rounded-lg p-8">
              <span className="inline-block bg-gold/10 text-gold border border-gold/30 text-sm px-3 py-1 rounded mb-4">
                Year 2
              </span>
              <p className="text-xs text-gold/60 mb-2">2027–2028</p>
              <h3 className="text-2xl font-bold text-white mb-6">水平拡大</h3>
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="text-gold/70 mb-1">注力業界</dt>
                  <dd className="text-white">業界拡大 + M&Aによる規模拡大</dd>
                </div>
                <div>
                  <dt className="text-gold/70 mb-1">目標</dt>
                  <dd className="text-white">新業界参入、M&A候補探索</dd>
                </div>
                <div>
                  <dt className="text-gold/70 mb-1">売上目標</dt>
                  <dd className="text-2xl font-bold text-gold">¥7–10億</dd>
                </div>
              </dl>
            </div>

            {/* Year 3 */}
            <div className="border border-gold/30 bg-white/5 rounded-lg p-8">
              <span className="inline-block bg-gold/10 text-gold border border-gold/30 text-sm px-3 py-1 rounded mb-4">
                Year 3
              </span>
              <p className="text-xs text-gold/60 mb-2">2028–2029</p>
              <h3 className="text-2xl font-bold text-white mb-6">ASP展開</h3>
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="text-gold/70 mb-1">注力業界</dt>
                  <dd className="text-white">廉価版ASPで中小企業市場へ</dd>
                </div>
                <div>
                  <dt className="text-gold/70 mb-1">目標</dt>
                  <dd className="text-white">Exit準備、¥100–150億評価</dd>
                </div>
                <div>
                  <dt className="text-gold/70 mb-1">売上目標</dt>
                  <dd className="text-2xl font-bold text-gold">¥18–25億</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Revenue Plan Chart */}
      <section className="bg-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            売上計画
          </h2>
          <div className="w-16 h-1 bg-gold mb-12" />

          <div className="flex items-end justify-center gap-12 h-64">
            {/* Year 1 bar */}
            <div className="flex flex-col items-center gap-3">
              <span className="text-xl font-bold text-gold">¥3.5–4億</span>
              <div
                className="bg-gold w-28 rounded-t"
                style={{ height: '80px' }}
              />
              <div className="text-center">
                <p className="font-bold text-navy">Year 1</p>
                <p className="text-sm text-gray-500">2026–2027</p>
              </div>
            </div>

            {/* Year 2 bar */}
            <div className="flex flex-col items-center gap-3">
              <span className="text-xl font-bold text-gold">¥7–10億</span>
              <div
                className="bg-gold w-28 rounded-t"
                style={{ height: '140px' }}
              />
              <div className="text-center">
                <p className="font-bold text-navy">Year 2</p>
                <p className="text-sm text-gray-500">2027–2028</p>
              </div>
            </div>

            {/* Year 3 bar */}
            <div className="flex flex-col items-center gap-3">
              <span className="text-xl font-bold text-gold">¥18–25億</span>
              <div
                className="bg-gold w-28 rounded-t"
                style={{ height: '220px' }}
              />
              <div className="text-center">
                <p className="font-bold text-navy">Year 3</p>
                <p className="text-sm text-gray-500">2028–2029</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Fundraising Plan */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            資金調達計画
          </h2>
          <div className="w-16 h-1 bg-gold mb-12" />

          {/* Timeline indicator */}
          <div className="flex items-center gap-2 mb-10 text-sm text-gold/60">
            <span>2026</span>
            <div className="flex-1 h-px bg-gold/20" />
            <span>2027</span>
            <div className="flex-1 h-px bg-gold/20" />
            <span>2028</span>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Pre-Seed */}
            <div className="border border-gold/30 bg-white/5 rounded-lg p-8">
              <span className="inline-block bg-gold/10 text-gold border border-gold/30 text-sm px-3 py-1 rounded mb-4">
                Pre-Seed
              </span>
              <p className="text-3xl font-black text-gold mb-1">¥2億</p>
              <p className="text-xs text-gold/60 mb-6">J-KISS / Pre-money Cap ¥6億</p>
              <div>
                <p className="text-gold/70 text-sm mb-2">資金用途</p>
                <p className="text-white text-sm">開発・初期顧客獲得</p>
              </div>
            </div>

            {/* Seed */}
            <div className="border border-gold/30 bg-white/5 rounded-lg p-8">
              <span className="inline-block bg-gold/10 text-gold border border-gold/30 text-sm px-3 py-1 rounded mb-4">
                Seed
              </span>
              <p className="text-3xl font-black text-gold mb-1">¥10億</p>
              <p className="text-xs text-gold/60 mb-6">2027年</p>
              <div>
                <p className="text-gold/70 text-sm mb-2">資金用途</p>
                <p className="text-white text-sm">チーム拡大・マーケティング</p>
              </div>
            </div>

            {/* Series A */}
            <div className="border border-gold/30 bg-white/5 rounded-lg p-8">
              <span className="inline-block bg-gold/10 text-gold border border-gold/30 text-sm px-3 py-1 rounded mb-4">
                Series A
              </span>
              <p className="text-3xl font-black text-gold mb-1">¥10億</p>
              <p className="text-xs text-gold/60 mb-6">2028年</p>
              <div>
                <p className="text-gold/70 text-sm mb-2">資金用途</p>
                <p className="text-white text-sm">業界拡大・M&A資金</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Exit Strategy */}
      <section className="bg-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Exit戦略
          </h2>
          <div className="w-16 h-1 bg-gold mb-12" />

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm max-w-2xl mx-auto text-center">
            <p className="text-sm font-semibold text-gold tracking-widest uppercase mb-4">
              Target Valuation
            </p>
            <p className="text-6xl font-black text-gold mb-4">
              ¥100–150億
            </p>
            <div className="w-12 h-px bg-gold/30 mx-auto mb-4" />
            <p className="text-xl font-bold text-navy mb-2">
              2029年Q4 &nbsp;IPO or M&A
            </p>
            <p className="text-sm text-gray-500 mt-4">
              同業界のAI企業の評価倍率から算出
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
