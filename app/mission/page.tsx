import Link from 'next/link'
import FadeIn from '@/components/FadeIn'
import CountUp from '@/components/CountUp'

export const dynamic = 'force-static'

export default function MissionPage() {
  return (
    <>
      {/* 1. HERO */}
      <section className="bg-[#F8F9FA] pt-32 pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">
              MISSION &amp; VISION
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-2 leading-tight">
              ミッション・ビジョン
            </h1>
            <div className="section-divider mt-3" />
          </FadeIn>
        </div>
      </section>

      {/* 2. MISSION STATEMENT — keep DARK for impact */}
      <section className="bg-navy py-32 diagonal-gold relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(201,169,110,0.06) 0%, transparent 70%)',
          }}
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
          <FadeIn>
            {/* Decorative quote mark */}
            <div
              className="font-black text-gold/[0.07] leading-none select-none mb-2"
              style={{ fontSize: '8rem' }}
              aria-hidden="true"
            >
              &ldquo;
            </div>

            <h2 className="font-black leading-tight">
              <span className="block text-white text-4xl md:text-6xl">
                地方中堅企業にAIを届け、
              </span>
              <span className="block gradient-text-gold glow-gold text-4xl md:text-6xl mt-2">
                日本の産業を再生する
              </span>
            </h2>

            <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto mt-8">
              私たちは、AIの力を地方中堅企業へ届けることで、<br className="hidden md:block" />
              日本の基幹産業を再生します。建設、不動産、物流など<br className="hidden md:block" />
              地域経済を支える企業の生産性向上を実現し、<br className="hidden md:block" />
              人手不足や事業承継といった社会課題の解決に挑戦します。<br className="hidden md:block" />
              テクノロジーを現場の力へ変え、<br className="hidden md:block" />
              日本の未来を支える産業基盤を強くします。
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 3. CRISIS NUMBERS */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">
              THE PROBLEM
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-2">
              なぜ今、地方企業のAIなのか
            </h2>
            <div className="section-divider mt-3 mb-10" />
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Stat 1 */}
            <FadeIn delay={0}>
              <div className="card-hover bg-white border border-gray-200 rounded-xl p-8 h-full flex flex-col">
                <div
                  className="font-black text-navy mb-4 leading-none"
                  style={{ fontSize: 'clamp(3rem,7vw,5rem)' }}
                >
                  <CountUp end={849} suffix="件" />
                </div>
                <p className="text-navy font-bold text-lg mb-2">
                  2025年地方企業倒産件数
                </p>
                <p className="text-gray-500 text-sm mt-auto">人手不足と非効率業務が主因</p>
              </div>
            </FadeIn>

            {/* Stat 2 */}
            <FadeIn delay={100}>
              <div className="card-hover bg-white border border-gray-200 rounded-xl p-8 h-full flex flex-col">
                <div
                  className="font-black text-navy mb-4 leading-none"
                  style={{ fontSize: 'clamp(3rem,7vw,5rem)' }}
                >
                  9-14×
                </div>
                <p className="text-navy font-bold text-lg mb-2">
                  AI市場の成長予測
                </p>
                <p className="text-gray-500 text-sm mt-auto">今後5年間のAI市場規模拡大</p>
              </div>
            </FadeIn>

            {/* Stat 3 */}
            <FadeIn delay={200}>
              <div className="card-hover bg-white border border-gray-200 rounded-xl p-8 h-full flex flex-col">
                <div
                  className="font-black text-navy mb-4 leading-none"
                  style={{ fontSize: 'clamp(3rem,7vw,5rem)' }}
                >
                  68pt
                </div>
                <p className="text-navy font-bold text-lg mb-2">
                  空白市場スコア
                </p>
                <p className="text-gray-500 text-sm mt-auto">大手SIerが参入しない中堅企業市場</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 4. VISION */}
      <section className="bg-[#F8F9FA] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">
              OUR VISION
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-2">
              2029年に向けたビジョン
            </h2>
            <div className="section-divider mt-3 mb-10" />
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Phase 1 */}
            <FadeIn delay={0}>
              <div className="card-hover bg-white border border-gray-200 rounded-xl p-8 h-full flex flex-col relative overflow-hidden">
                <div
                  className="absolute -right-4 -top-4 font-black text-navy/[0.04] select-none pointer-events-none leading-none"
                  style={{ fontSize: '8rem' }}
                  aria-hidden="true"
                >
                  1
                </div>
                <span className="inline-block bg-navy/8 text-navy border border-navy/15 text-xs px-3 py-1 rounded mb-5 self-start tracking-wider">
                  Phase 1｜2026-2027
                </span>
                <h3 className="text-navy font-bold text-xl mb-4 leading-snug">
                  建設・不動産・運送業での<br />AI導入実証
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mt-auto">
                  業界特化のAIソリューションを開発し、地方中堅企業への導入実績を積み上げ、
                  ROIを明確に示すプレイブックを確立します。
                </p>
              </div>
            </FadeIn>

            {/* Phase 2 */}
            <FadeIn delay={100}>
              <div className="card-hover bg-white border border-gray-200 rounded-xl p-8 h-full flex flex-col relative overflow-hidden">
                <div
                  className="absolute -right-4 -top-4 font-black text-navy/[0.04] select-none pointer-events-none leading-none"
                  style={{ fontSize: '8rem' }}
                  aria-hidden="true"
                >
                  2
                </div>
                <span className="inline-block bg-navy/8 text-navy border border-navy/15 text-xs px-3 py-1 rounded mb-5 self-start tracking-wider">
                  Phase 2｜2027-2028
                </span>
                <h3 className="text-navy font-bold text-xl mb-4 leading-snug">
                  業界拡大と<br />M&amp;Aによる規模拡大
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mt-auto">
                  実証済みのモデルを他業界へ横展開しながら、M&amp;Aを活用して
                  専門知識を持つ企業を取り込み、急速なスケールを実現します。
                </p>
              </div>
            </FadeIn>

            {/* Phase 3 */}
            <FadeIn delay={200}>
              <div className="card-hover bg-white border border-gray-200 rounded-xl p-8 h-full flex flex-col relative overflow-hidden">
                <div
                  className="absolute -right-4 -top-4 font-black text-navy/[0.04] select-none pointer-events-none leading-none"
                  style={{ fontSize: '8rem' }}
                  aria-hidden="true"
                >
                  3
                </div>
                <span className="inline-block bg-navy/8 text-navy border border-navy/15 text-xs px-3 py-1 rounded mb-5 self-start tracking-wider">
                  Phase 3｜2028-2029
                </span>
                <h3 className="text-navy font-bold text-xl mb-4 leading-snug">
                  廉価版ASP展開で<br />中小企業市場へ
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mt-auto">
                  蓄積した知見をASPプロダクトとして提供し、より小規模な企業にも
                  AIの恩恵を届けることで、産業全体のDXを加速させます。
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 5. VALUES */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">
              VALUES
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-2">
              バリュー
            </h2>
            <div className="section-divider mt-3 mb-10" />
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Value 1 */}
            <FadeIn delay={0}>
              <div className="card-hover bg-white border border-gray-200 rounded-xl p-8 h-full flex flex-col border-l-4 border-l-gold pl-6">
                <div className="font-black text-navy text-4xl mb-4 leading-none">
                  「経営」
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mt-auto">
                  事業成果を最優先にしたAI導入。技術のための技術ではなく、利益を生むAI。
                </p>
              </div>
            </FadeIn>

            {/* Value 2 */}
            <FadeIn delay={100}>
              <div className="card-hover bg-white border border-gray-200 rounded-xl p-8 h-full flex flex-col border-l-4 border-l-gold pl-6">
                <div className="font-black text-navy text-4xl mb-4 leading-none">
                  「AI」
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mt-auto">
                  業界特化の深い専門知識とAI技術の融合。汎用ではなく、専門特化。
                </p>
              </div>
            </FadeIn>

            {/* Value 3 */}
            <FadeIn delay={200}>
              <div className="card-hover bg-white border border-gray-200 rounded-xl p-8 h-full flex flex-col border-l-4 border-l-gold pl-6">
                <div className="font-black text-navy text-4xl mb-4 leading-none">
                  「営業」
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mt-auto">
                  現場に入り込むForward Deployed Engineer。コンサルではなく、実装者。
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 6. SOCIAL IMPACT */}
      <section className="bg-[#F8F9FA] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">
              SOCIAL IMPACT
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-2">
              社会的意義
            </h2>
            <div className="section-divider mt-3 mb-10" />
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left card — 地方創生 */}
            <FadeIn delay={0}>
              <div className="card-hover bg-white border border-gray-200 rounded-xl p-10 h-full flex flex-col">
                <div className="mb-6">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <circle cx="24" cy="24" r="23" stroke="#C9A96E" strokeWidth="1.5" strokeOpacity="0.6" />
                    <path
                      d="M14 32 L24 16 L34 32"
                      stroke="#C9A96E"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeOpacity="0.9"
                    />
                    <path
                      d="M18 26 L30 26"
                      stroke="#C9A96E"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeOpacity="0.7"
                    />
                    <circle cx="24" cy="36" r="2" fill="#C9A96E" fillOpacity="0.7" />
                  </svg>
                </div>
                <h3 className="text-navy font-bold text-2xl mb-4">地方創生</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  地方企業の生産性向上が地域経済を支える。AIによる業務効率化は、
                  地方に残る産業の競争力を回復させ、雇用と経済の好循環を生み出します。
                </p>
              </div>
            </FadeIn>

            {/* Right card — 人手不足解消 */}
            <FadeIn delay={150}>
              <div className="card-hover bg-white border border-gray-200 rounded-xl p-10 h-full flex flex-col">
                <div className="mb-6">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <circle cx="24" cy="24" r="23" stroke="#C9A96E" strokeWidth="1.5" strokeOpacity="0.6" />
                    <circle cx="24" cy="18" r="5" stroke="#C9A96E" strokeWidth="1.5" strokeOpacity="0.9" />
                    <path
                      d="M13 36 C13 30 18 26 24 26 C30 26 35 30 35 36"
                      stroke="#C9A96E"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeOpacity="0.7"
                    />
                    <path
                      d="M30 20 L38 20 M34 16 L38 20 L34 24"
                      stroke="#C9A96E"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeOpacity="0.6"
                    />
                  </svg>
                </div>
                <h3 className="text-navy font-bold text-2xl mb-4">人手不足解消</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  AIによる業務効率化で少子高齢化に対応。人口減少が進む日本において、
                  AIは「もう一人の従業員」として、現場の生産性を劇的に底上げします。
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
