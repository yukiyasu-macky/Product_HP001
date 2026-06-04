import Link from 'next/link'
import Image from 'next/image'
import FadeIn from '@/components/FadeIn'

export const dynamic = 'force-static'

export default function AboutPage() {
  return (
    <>
      {/* 1. Hero + Mission（統合） */}
      <section className="relative overflow-hidden" style={{ paddingTop: '5rem', paddingBottom: '0' }}>
        {/* 背景画像 */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt=""
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        <div className="absolute inset-0 bg-navy/85" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(201,169,110,0.06) 0%, transparent 70%)',
          }}
        />

        {/* コンテンツ */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <FadeIn>
            {/* ページラベル＋タイトル（左寄せ） */}
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4">ABOUT US</p>
            <h1 className="text-white font-black mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1 }}>
              会社概要
            </h1>
            <div className="section-divider mb-10" />

            {/* ミッション（左寄せ） */}
            <h2 className="font-black leading-tight mb-8" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)', lineHeight: 1.15 }}>
              <span className="block text-white">
                地方中堅企業にAIを届け、
              </span>
              <span className="block gradient-text-gold glow-gold mt-1">
                日本の産業を再生する
              </span>
            </h2>
            <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl">
              私たちは、AIの力を地方中堅企業へ届けることで、日本の基幹産業を再生します。
              建設、不動産、物流など地域経済を支える企業の生産性向上を実現し、
              人手不足や事業承継といった社会課題の解決に挑戦します。
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 2. Values */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">VALUES</p>
            <h2 className="h2-fluid font-bold text-navy mb-2">バリュー</h2>
            <div className="section-divider mt-3 mb-10" />
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            <FadeIn delay={0}>
              <div className="card-hover bg-white border border-gray-200 rounded-xl p-8 h-full flex flex-col border-l-4 border-l-gold pl-6">
                <div className="font-black text-navy text-4xl mb-4 leading-none">「経営」</div>
                <p className="text-gray-600 text-sm leading-relaxed mt-auto">事業成果を最優先にしたAI導入。技術のための技術ではなく、利益を生むAI。</p>
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <div className="card-hover bg-white border border-gray-200 rounded-xl p-8 h-full flex flex-col border-l-4 border-l-gold pl-6">
                <div className="font-black text-navy text-4xl mb-4 leading-none">「AI」</div>
                <p className="text-gray-600 text-sm leading-relaxed mt-auto">業界特化の深い専門知識とAI技術の融合。汎用ではなく、専門特化。</p>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="card-hover bg-white border border-gray-200 rounded-xl p-8 h-full flex flex-col border-l-4 border-l-gold pl-6">
                <div className="font-black text-navy text-4xl mb-4 leading-none">「営業」</div>
                <p className="text-gray-600 text-sm leading-relaxed mt-auto">現場に入り込むForward Deployed Engineer。コンサルではなく、実装者。</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. CEO Message */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-2xl">
              <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">代表者メッセージ</p>
              <h2 className="text-navy font-bold mb-1" style={{ fontSize: '1.5rem' }}>内海 暢介</h2>
              <div className="section-divider mt-4 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-6">
                日本の地方には、優れた技術や豊富な経験を持ちながらも、
                人材不足や業務負荷の増加に苦しむ企業が数多く存在します。
                私はこれまで100件を超える経営・事業支援の現場に携わり、
                「本当に必要なのは、現場で使われる仕組みである」と確信してきました。
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Arcrise Laboは、最先端AIを地方中堅企業の実務へ落とし込み、
                経営成果へ直結させるために創業しました。
                私たちは単なるシステム導入会社ではありません。
                現場と経営を理解し、企業の未来を共に創るパートナーです。
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                地方から日本を変える。その挑戦を、私たちは本気で実現していきます。
              </p>
              <p className="text-navy font-semibold text-sm tracking-wider mt-6">
                代表取締役 CEO　内海 暢介
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 8. Company Info */}
      <section className="bg-[#F8F9FA] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">COMPANY INFO</p>
            <h2 className="h2-fluid font-bold text-navy mb-2">基本情報</h2>
            <div className="section-divider mt-3 mb-10" />
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* LEFT: Building image */}
              <div className="relative min-h-[400px] rounded-xl overflow-hidden sticky top-8">
                <Image
                  src="/about-building.jpg"
                  alt="ビジネス街のビル群"
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
              </div>
              {/* RIGHT: Table */}
              <dl>
                {[
                  { dt: '商号', dd: 'Arcrise Labs株式会社' },
                  { dt: '設立', dd: '2026年6月' },
                  { dt: '所在地', dd: '東京都港区六本木5-2-1' },
                  { dt: '代表者', dd: '代表取締役CEO 内海暢介' },
                  { dt: '事業内容', dd: '業界特化型AIプラットフォームの開発・提供、AI導入コンサルティング' },
                ].map(({ dt, dd }, i) => (
                  <div
                    key={dt}
                    className={`flex flex-col md:flex-row py-4 px-3 gap-1 md:gap-2 rounded ${i % 2 === 0 ? 'bg-gray-50' : ''}`}
                  >
                    <dt className="text-navy text-xs font-semibold tracking-wide md:text-sm md:w-40 md:shrink-0 md:pt-0.5">{dt}</dt>
                    <dd className="text-gray-700 text-sm md:text-base">{dd}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 9. Join Us CTA */}
      <section className="bg-navy py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">JOIN US</p>
            <h2 className="h2-fluid font-bold text-white mb-4">チームに加わりませんか？</h2>
            <p className="text-white/50 text-sm mb-10 max-w-xl mx-auto">
              日本のリアルな産業をAIで変革するミッションに共感するプロフェッショナルを探しています。
            </p>
            <Link
              href="/recruit"
              className="inline-block border border-gold/60 text-gold font-semibold px-8 py-3.5 rounded text-sm tracking-wide hover:bg-gold hover:text-navy transition-all"
            >
              採用情報を見る
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
