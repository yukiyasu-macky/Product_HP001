import Link from 'next/link'
import FadeIn from '@/components/FadeIn'

export const dynamic = 'force-static'

export default function AboutPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="bg-[#F8F9FA] pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">ABOUT US</p>
          <h1 className="text-4xl font-bold text-navy mb-2">会社概要</h1>
          <div className="section-divider mt-3" />
        </div>
      </section>

      {/* 2. Company Info */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">COMPANY INFO</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-2">基本情報</h2>
            <div className="section-divider mt-3 mb-10" />
            <dl className="max-w-3xl divide-y divide-gray-100">
              {[
                { dt: '商号', dd: 'Arcrise Labo Inc.（アークライズラボ株式会社）' },
                { dt: '設立', dd: '2026年5月' },
                { dt: '資本金', dd: '準備中' },
                { dt: '法人番号', dd: '準備中' },
                { dt: '登記住所', dd: '準備中' },
                { dt: '事業所住所', dd: '準備中' },
                { dt: '代表電話', dd: '準備中' },
                { dt: '代表者', dd: '代表取締役CEO 内海暢介' },
                {
                  dt: '事業内容',
                  dd: '業界特化型AIプラットフォームの開発・提供、AI導入コンサルティング',
                },
              ].map(({ dt, dd }, i) => (
                <div
                  key={dt}
                  className={`flex flex-col md:flex-row py-4 gap-0.5 md:gap-2 ${i % 2 === 0 ? 'bg-gray-50 px-3 rounded' : ''}`}
                >
                  <dt className="text-navy text-xs font-semibold tracking-wide md:text-sm md:w-40 md:shrink-0 md:pt-0.5">{dt}</dt>
                  <dd className="text-gray-700 text-sm md:text-base">{dd}</dd>
                </div>
              ))}
            </dl>
          </FadeIn>
        </div>
      </section>

      {/* 3. CEO Message */}
      <section className="bg-[#F8F9FA] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Photo placeholder */}
              <div className="aspect-square bg-gray-200 rounded-xl flex items-center justify-center">
                <span className="text-navy/30 text-6xl font-black">内海</span>
              </div>
              {/* Message */}
              <div>
                <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">代表者メッセージ</p>
                <h2 className="text-navy text-2xl font-bold mb-1">内海 暢介</h2>
                <p className="text-gray-500">代表取締役CEO</p>
                <div className="section-divider mt-4 mb-6" />
                <p className="text-gray-700 leading-relaxed mb-6">
                  日本の地方には、優れた技術や豊富な経験を持ちながらも、
                  人材不足や業務負荷の増加に苦しむ企業が数多く存在します。
                  私はこれまで100件を超える経営・事業支援の現場に携わり、
                  「本当に必要なのは、現場で使われる仕組みである」と
                  確信してきました。
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Arcrise Laboは、最先端AIを地方中堅企業の実務へ落とし込み、
                  経営成果へ直結させるために創業しました。
                  私たちは単なるシステム導入会社ではありません。
                  現場と経営を理解し、企業の未来を共に創るパートナーです。
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  地方から日本を変える。その挑戦を、
                  私たちは本気で実現していきます。
                </p>
                <p className="text-navy font-semibold text-sm tracking-wider mt-6">
                  代表取締役 CEO　内海 暢介
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 4. Founding Story */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">創業ストーリー</p>
            <h2 className="text-3xl font-bold text-navy mb-2">なぜ、地方企業のAIなのか</h2>
            <div className="section-divider mt-3 mb-12" />
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: '課題の発見',
                  body: '製造・流通・食品での100+件の支援で見えた地方企業の実態',
                },
                {
                  title: '市場の空白',
                  body: '大手SIerが手を出せない22万社の中堅企業市場',
                },
                {
                  title: '技術の民主化',
                  body: 'Palantirモデルをベースにした業界特化型プラットフォーム',
                },
              ].map(({ title, body }) => (
                <div key={title} className="card-hover bg-white border border-gray-200 rounded-xl p-8">
                  <h3 className="text-navy font-bold text-lg mb-3">{title}</h3>
                  <p className="text-gray-600 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 5. Timeline */}
      <section className="bg-[#F8F9FA] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">沿革</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-2">会社沿革</h2>
            <div className="section-divider mt-3 mb-12" />
            <ol className="relative border-l-2 border-gold ml-4 space-y-10 max-w-2xl">
              {[
                {
                  year: '2026年5月',
                  event: '創業',
                },
                {
                  year: '2026年5月',
                  event: 'マイルストン社AI導入開始',
                },
              ].map(({ year, event }) => (
                <li key={year + event} className="ml-8">
                  <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-gold">
                    <span className="h-2 w-2 rounded-full bg-white" />
                  </span>
                  <time className="text-gold text-sm font-semibold block mb-1">{year}</time>
                  <p className="text-gray-700">{event}</p>
                </li>
              ))}
            </ol>
          </FadeIn>
        </div>
      </section>

      {/* 6. Advisory */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">ADVISORY</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-2">顧問一覧</h2>
            <div className="section-divider mt-3 mb-10" />
            <div className="bg-white border border-gray-200 rounded-xl p-10 flex items-center justify-center">
              <span className="text-gray-400 text-lg">準備中</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 7. Access */}
      <section className="bg-[#F8F9FA] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">ACCESS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-2">アクセス</h2>
            <div className="section-divider mt-3 mb-10" />
            <div className="bg-white border border-gray-200 rounded-xl p-10 flex items-center justify-center">
              <span className="text-gray-400 text-lg">準備中</span>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
