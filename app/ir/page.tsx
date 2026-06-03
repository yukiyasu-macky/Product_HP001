import Link from 'next/link'
import FadeIn from '@/components/FadeIn'

export const dynamic = 'force-static'

export default function IRPage() {
  return (
    <main>
      {/* 1. Hero */}
      <section className="bg-[#F8F9FA] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">
            INVESTOR RELATIONS
          </p>
          <h1 className="h1-fluid font-bold text-navy mb-4">
            投資家情報
          </h1>
          <div className="section-divider mt-3" />
        </div>
      </section>

      {/* 2. Investor Message */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">
              投資家の皆様へ
            </p>
            <h2 className="h2-fluid font-bold text-navy mb-2">
              代表メッセージ
            </h2>
            <div className="section-divider mt-3 mb-10" />
            <p className="text-gray-700 text-lg leading-relaxed max-w-3xl">
              Arcrise Laboは、日本最大の空白市場である地方中堅企業22万社へのAI導入に特化したプラットフォーム企業です。Palantir Technologiesが米国で実証したFDEモデルを日本の地方中堅企業に適用し、大手SIerの1/5の価格・1/3の期間でAIを届けます。創業者CEOは100+件のAI・DX支援実績を持ち、CTOはDeNA AI統括経験者です。Pre-Seedでは¥2億のJ-KISSを調達し、2029年Q4のExit（¥100-150億）を目指します。
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 3. Capital Structure */}
      <section className="bg-[#F8F9FA] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">
              CAPITAL STRUCTURE
            </p>
            <h2 className="h2-fluid font-bold text-navy mb-2">
              資本構成
            </h2>
            <div className="section-divider mt-3 mb-10" />

            <div className="max-w-2xl flex flex-col gap-6">
              {/* 内海暢介 (CEO) 60% */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-navy font-semibold">内海暢介（CEO）</span>
                  <span className="text-navy font-bold">60%</span>
                </div>
                <div className="relative bg-gray-100 h-3 rounded">
                  <div className="h-3 bg-navy rounded" style={{ width: '60%' }} />
                </div>
              </div>

              {/* 佐々木 (営業役員) 20% */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-navy font-semibold">佐々木（営業役員）</span>
                  <span className="text-navy font-bold">20%</span>
                </div>
                <div className="relative bg-gray-100 h-3 rounded">
                  <div className="h-3 bg-[#1a4a6e] rounded" style={{ width: '20%' }} />
                </div>
              </div>

              {/* 吉田 (CTO) 5% */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-navy font-semibold">吉田（CTO）</span>
                  <span className="text-navy font-bold">5%</span>
                </div>
                <div className="relative bg-gray-100 h-3 rounded">
                  <div className="h-3 bg-gold rounded" style={{ width: '5%' }} />
                </div>
              </div>

              {/* 投資家 15% */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-navy font-semibold">投資家</span>
                  <span className="text-navy font-bold">15%</span>
                </div>
                <div className="relative bg-gray-100 h-3 rounded">
                  <div className="h-3 bg-gray-300 rounded" style={{ width: '15%' }} />
                </div>
              </div>

              <p className="text-gray-500 text-sm mt-2">
                ※ FD（Fully Diluted）ベース
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 4. Fundraising Detail */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">
              FUNDRAISING
            </p>
            <h2 className="h2-fluid font-bold text-navy mb-2">
              調達計画
            </h2>
            <div className="section-divider mt-3 mb-10" />

            {/* Pre-Seed — prominent */}
            <div className="border-2 border-navy bg-white rounded-xl p-8 mb-8 max-w-xl">
              <span className="inline-block bg-navy text-white text-xs font-bold px-3 py-1 rounded mb-6 uppercase tracking-wide">
                現在のラウンド — Pre-Seed
              </span>
              <div className="grid grid-cols-2 gap-y-6 gap-x-8">
                <div>
                  <p className="text-gray-500 text-sm mb-1">調達額</p>
                  <p className="font-black text-navy text-5xl">¥2億</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1">調達形式</p>
                  <p className="text-gray-600 text-xl font-semibold">J-KISS</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1">Valuation Cap</p>
                  <p className="text-navy font-bold text-xl">¥6億</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1">ステータス</p>
                  <span className="inline-block bg-navy/8 text-navy border border-navy/15 text-xs px-3 py-1 rounded font-semibold">
                    調達中
                  </span>
                </div>
              </div>
            </div>

            {/* Future rounds */}
            <div className="grid md:grid-cols-2 gap-6 max-w-xl">
              <div className="card-hover bg-white border border-gray-200 rounded-xl p-6">
                <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">Seed</p>
                <p className="font-black text-navy text-3xl mb-1">¥10億</p>
                <p className="text-gray-500 text-sm">2027年予定</p>
              </div>
              <div className="card-hover bg-white border border-gray-200 rounded-xl p-6">
                <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">Series A</p>
                <p className="font-black text-navy text-3xl mb-1">¥10億</p>
                <p className="text-gray-500 text-sm">2028年予定</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 5. Investment Highlights */}
      <section className="bg-[#F8F9FA] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">
              INVESTMENT HIGHLIGHTS
            </p>
            <h2 className="h2-fluid font-bold text-navy mb-2">
              投資ハイライト
            </h2>
            <div className="section-divider mt-3 mb-10" />

            <div className="grid md:grid-cols-2 gap-6">
              <div className="card-hover bg-white border border-gray-200 rounded-xl p-8">
                <span className="inline-block bg-navy/8 text-navy border border-navy/15 text-xs px-3 py-1 rounded mb-4">
                  市場規模
                </span>
                <h3 className="text-navy font-bold text-xl mb-3">大きな市場</h3>
                <p className="text-gray-600 leading-relaxed">
                  22万社のTAM（Total Addressable Market）、AI市場9〜14倍成長。地方中堅企業へのAI導入は日本最大の未開拓市場です。
                </p>
              </div>

              <div className="card-hover bg-white border border-gray-200 rounded-xl p-8">
                <span className="inline-block bg-navy/8 text-navy border border-navy/15 text-xs px-3 py-1 rounded mb-4">
                  トラクション
                </span>
                <h3 className="text-navy font-bold text-xl mb-3">実証済みモデル</h3>
                <p className="text-gray-600 leading-relaxed">
                  100+件のAI・DX支援実績。マイルストン社での稼働実証中。再現性ある導入プロセスを確立しています。
                </p>
              </div>

              <div className="card-hover bg-white border border-gray-200 rounded-xl p-8">
                <span className="inline-block bg-navy/8 text-navy border border-navy/15 text-xs px-3 py-1 rounded mb-4">
                  競合優位性
                </span>
                <h3 className="text-navy font-bold text-xl mb-3">競合優位</h3>
                <p className="text-gray-600 leading-relaxed">
                  「地方特化 × AI × FDEモデル × 価格競争力」4条件全て○はArcrise Laboのみ。参入障壁の高いポジションを確立しています。
                </p>
              </div>

              <div className="card-hover bg-white border border-gray-200 rounded-xl p-8">
                <span className="inline-block bg-navy/8 text-navy border border-navy/15 text-xs px-3 py-1 rounded mb-4">
                  チーム
                </span>
                <h3 className="text-navy font-bold text-xl mb-3">強力なチーム</h3>
                <p className="text-gray-600 leading-relaxed">
                  経営×AI×営業の3ピース体制。CEO（100+ AI支援実績）、CTO（DeNA AI統括経験）、営業役員による最強トリオ。
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">
              CONTACT
            </p>
            <h2 className="h2-fluid font-bold text-white mb-2">
              投資家・パートナーの方へ
            </h2>
            <div className="section-divider mt-3 mb-8 mx-auto" />
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
              詳細資料（ティーザー・事業計画書）のご要望、面談のご希望はお問い合わせください。
            </p>
            <Link
              href="/contact"
              className="inline-block border border-gold/60 text-gold font-semibold px-8 py-3.5 rounded text-sm tracking-wide hover:bg-gold hover:text-navy transition-all"
            >
              お問い合わせはこちら
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
