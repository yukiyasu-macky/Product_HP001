export const dynamic = 'force-static'

export default function AboutPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-4">
            ABOUT US
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            会社概要
          </h1>
          <div className="w-16 h-1 bg-gold" />
        </div>
      </section>

      {/* 2. Company info table */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">基本情報</h2>
          <div className="w-16 h-1 bg-gold mb-10" />
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
            ].map(({ dt, dd }) => (
              <div key={dt} className="flex flex-col sm:flex-row py-4 gap-2">
                <dt className="text-navy font-semibold sm:w-40 shrink-0">{dt}</dt>
                <dd className="text-gray-700">{dd}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 3. CEO message */}
      <section className="bg-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo placeholder */}
            <div className="aspect-square bg-navy/10 rounded-lg flex items-center justify-center">
              <span className="text-gold text-lg font-semibold">Photo</span>
            </div>
            {/* Message */}
            <div>
              <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-4">
                代表者メッセージ
              </p>
              <h2 className="text-navy text-2xl font-bold mb-1">内海 暢介</h2>
              <p className="text-gray-500 mb-6">代表取締役CEO</p>
              <div className="w-16 h-1 bg-gold mb-8" />
              <p className="text-gray-700 leading-relaxed">
                私が地方企業のAI導入に取り組む理由は、現場で見てきた「優れた技術を持ちながら、人手不足と非効率な業務に苦しむ地方企業」の姿にあります。東京の大手コンサルやSIerには頼れない、でも変わらなければ生き残れない。その中間にいる22万社のために、私たちArcrise
                Laboは存在しています。業界特化のAIを、大手の1/5の価格で、1/3の期間で届ける。これが私たちの約束です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Founding story */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-4">
            創業ストーリー
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            なぜ、地方企業のAIなのか
          </h2>
          <div className="w-16 h-1 bg-gold mb-12" />
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
              <div key={title} className="border border-gold/30 bg-white/5 rounded-lg p-6">
                <h3 className="text-gold text-lg font-bold mb-3">{title}</h3>
                <p className="text-gray-300 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Timeline */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">沿革</h2>
          <div className="w-16 h-1 bg-gold mb-12" />
          <ol className="relative border-l border-gold/40 ml-4 space-y-10">
            {[
              {
                year: '2026年5月',
                event: 'Arcrise Labo Inc. 創業',
              },
              {
                year: '2026年5月',
                event: 'マイルストン社へのAI導入開始（問合せ自動返信AI稼働）',
              },
              {
                year: '2026年以降',
                event: '更なるマイルストン社への展開予定',
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
        </div>
      </section>

      {/* 6. Advisory */}
      <section className="bg-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">顧問一覧</h2>
          <div className="w-16 h-1 bg-gold mb-10" />
          <div className="bg-white border border-gray-200 rounded-lg p-10 shadow-sm flex items-center justify-center">
            <span className="text-gray-400 text-lg">準備中</span>
          </div>
        </div>
      </section>

      {/* 7. Access */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">アクセス</h2>
          <div className="w-16 h-1 bg-gold mb-10" />
          <div className="border border-gold/30 bg-white/5 rounded-lg p-10 flex items-center justify-center">
            <span className="text-gray-400 text-lg">準備中</span>
          </div>
        </div>
      </section>
    </>
  )
}
