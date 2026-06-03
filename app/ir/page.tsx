export const dynamic = 'force-static'

export default function IRPage() {
  return (
    <main>
      {/* 1. Hero */}
      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-4">
            INVESTOR RELATIONS
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            投資家情報
          </h1>
          <div className="w-16 h-1 bg-gold" />
        </div>
      </section>

      {/* 2. Investment message */}
      <section className="bg-navy py-20 border-t border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            投資家の皆様へ
          </h2>
          <div className="w-16 h-1 bg-gold mb-8" />
          <p className="text-gray-300 text-lg leading-relaxed">
            Arcrise Laboは、日本最大の空白市場である地方中堅企業22万社へのAI導入に特化したプラットフォーム企業です。Palantir Technologiesが米国で実証したFDEモデルを日本の地方中堅企業に適用し、大手SIerの1/5の価格・1/3の期間でAIを届けます。創業者CEOは100+件のAI・DX支援実績を持ち、CTOはDeNA AI統括経験者です。Pre-Seedでは¥2億のJ-KISSを調達し、2029年Q4のExit（¥100-150億）を目指します。
          </p>
        </div>
      </section>

      {/* 3. Capital structure */}
      <section className="bg-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            資本構成
          </h2>
          <div className="w-16 h-1 bg-gold mb-8" />

          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Donut chart using conic-gradient */}
            <div className="flex-shrink-0">
              <div
                className="w-56 h-56 rounded-full"
                style={{
                  background:
                    'conic-gradient(#C9A96E 0% 60%, #0D1B2A 60% 80%, rgba(201,169,110,0.5) 80% 85%, #9CA3AF 85% 100%)',
                }}
              >
                <div className="w-56 h-56 rounded-full flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-light flex items-center justify-center">
                    <span className="text-navy text-xs font-bold text-center leading-tight">
                      FD<br />ベース
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="flex flex-col gap-4 w-full max-w-sm">
              <div className="flex items-center gap-3">
                <span className="w-4 h-4 rounded-sm flex-shrink-0" style={{ backgroundColor: '#C9A96E' }} />
                <span className="text-navy font-semibold flex-1">内海暢介（CEO）</span>
                <span className="text-navy font-bold">60%</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-4 h-4 rounded-sm flex-shrink-0" style={{ backgroundColor: '#0D1B2A' }} />
                <span className="text-navy font-semibold flex-1">佐々木（営業役員）</span>
                <span className="text-navy font-bold">20%</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-4 h-4 rounded-sm flex-shrink-0" style={{ backgroundColor: 'rgba(201,169,110,0.5)' }} />
                <span className="text-navy font-semibold flex-1">吉田（CTO）</span>
                <span className="text-navy font-bold">5%</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-4 h-4 rounded-sm flex-shrink-0 bg-gray-400" />
                <span className="text-navy font-semibold flex-1">投資家</span>
                <span className="text-navy font-bold">15%</span>
              </div>
              <p className="text-gray-500 text-sm mt-2">
                ※ FD（Fully Diluted）ベース
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Fundraising detail */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            調達計画
          </h2>
          <div className="w-16 h-1 bg-gold mb-12" />

          {/* Current round - prominent */}
          <div className="border border-gold rounded-xl p-8 mb-8 bg-white/5 max-w-xl">
            <span className="inline-block bg-gold text-navy text-xs font-bold px-3 py-1 rounded mb-4 uppercase tracking-wide">
              現在のラウンド
            </span>
            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
              <div>
                <p className="text-gray-400 text-sm mb-1">ラウンド</p>
                <p className="text-white font-bold text-lg">Pre-Seed</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">調達形式</p>
                <p className="text-white font-bold text-lg">J-KISS</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">調達額</p>
                <p className="text-gold font-bold text-2xl">¥2億</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Pre-money Valuation Cap</p>
                <p className="text-white font-bold text-lg">¥6億</p>
              </div>
              <div className="col-span-2">
                <p className="text-gray-400 text-sm mb-1">ステータス</p>
                <span className="inline-block bg-gold/20 text-gold border border-gold/40 text-sm px-3 py-1 rounded font-semibold">
                  調達中
                </span>
              </div>
            </div>
          </div>

          {/* Future rounds */}
          <div className="grid md:grid-cols-2 gap-6 max-w-xl">
            <div className="border border-gold/30 bg-white/5 rounded-lg p-6">
              <p className="text-gold text-sm font-semibold mb-2">Seed</p>
              <p className="text-white font-bold text-xl mb-1">¥10億</p>
              <p className="text-gray-400 text-sm">2027年予定</p>
            </div>
            <div className="border border-gold/30 bg-white/5 rounded-lg p-6">
              <p className="text-gold text-sm font-semibold mb-2">Series A</p>
              <p className="text-white font-bold text-xl mb-1">¥10億</p>
              <p className="text-gray-400 text-sm">2028年予定</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Investment highlights */}
      <section className="bg-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            投資ハイライト
          </h2>
          <div className="w-16 h-1 bg-gold mb-12" />

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <span className="inline-block bg-gold/10 text-gold border border-gold/30 text-sm px-3 py-1 rounded mb-4">
                市場規模
              </span>
              <h3 className="text-navy font-bold text-xl mb-3">大きな市場</h3>
              <p className="text-gray-600 leading-relaxed">
                22万社のTAM（Total Addressable Market）、AI市場9〜14倍成長。地方中堅企業へのAI導入は日本最大の未開拓市場です。
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <span className="inline-block bg-gold/10 text-gold border border-gold/30 text-sm px-3 py-1 rounded mb-4">
                トラクション
              </span>
              <h3 className="text-navy font-bold text-xl mb-3">実証済みモデル</h3>
              <p className="text-gray-600 leading-relaxed">
                100+件のAI・DX支援実績。マイルストン社での稼働実証中。再現性ある導入プロセスを確立しています。
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <span className="inline-block bg-gold/10 text-gold border border-gold/30 text-sm px-3 py-1 rounded mb-4">
                競合優位性
              </span>
              <h3 className="text-navy font-bold text-xl mb-3">競合優位</h3>
              <p className="text-gray-600 leading-relaxed">
                「地方特化 × AI × FDEモデル × 価格競争力」4条件全て○はArcrise Laboのみ。参入障壁の高いポジションを確立しています。
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <span className="inline-block bg-gold/10 text-gold border border-gold/30 text-sm px-3 py-1 rounded mb-4">
                チーム
              </span>
              <h3 className="text-navy font-bold text-xl mb-3">強力なチーム</h3>
              <p className="text-gray-600 leading-relaxed">
                経営×AI×営業の3ピース体制。CEO（100+ AI支援実績）、CTO（DeNA AI統括経験）、営業役員による最強トリオ。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Contact */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            投資家・パートナーの方へ
          </h2>
          <div className="w-16 h-1 bg-gold mb-8 mx-auto" />
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            詳細資料（ティーザー・事業計画書）のご要望、面談のご希望はお問い合わせください。
          </p>
          <a
            href="/contact"
            className="inline-block bg-gold text-navy font-bold px-8 py-3 rounded hover:opacity-90 transition"
          >
            お問い合わせはこちら
          </a>
        </div>
      </section>
    </main>
  )
}
