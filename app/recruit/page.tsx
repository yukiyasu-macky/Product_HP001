export const dynamic = 'force-static'

export default function RecruitPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-sm font-semibold tracking-widest mb-4">RECRUIT</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">採用情報</h1>
          <p className="text-3xl text-white/80 font-bold mb-6">経営×AI×現場を変えたい人へ</p>
          <div className="w-16 h-1 bg-gold" />
        </div>
      </section>

      {/* Message */}
      <section className="bg-navy py-20 border-t border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Arcrise Laboが求めるもの
          </h2>
          <div className="w-16 h-1 bg-gold mb-8" />
          <p className="text-white/80 text-lg leading-relaxed max-w-3xl">
            AI技術は、それだけでは社会を変えられません。
            必要なのは、現場を理解し、経営課題を解決し、
            実際に成果へつなげる力です。<br /><br />
            Arcrise Laboは、建設・不動産・物流といった
            日本を支える産業の変革に挑戦しています。
            私たちが目指すのは、現場にAIを根付かせ、
            地方から日本の産業を再生することです。<br /><br />
            その挑戦を、共に担える仲間を探しています。
          </p>
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">募集ポジション</h2>
          <div className="w-16 h-1 bg-gold mb-8" />
          <div className="grid grid-cols-1 gap-6">

            {/* Position 1: FDE */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <span className="inline-block bg-gold/10 text-gold border border-gold/30 text-sm px-3 py-1 rounded mb-4">
                エンジニアリング
              </span>
              <h3 className="text-xl font-bold text-navy mb-2">
                FDE（Forward Deployed Engineer）
              </h3>
              <p className="text-gray-600 mb-4">AIシステムの設計・開発・顧客現場への導入</p>
              <div className="mb-4">
                <p className="text-sm font-semibold text-navy mb-2">必須要件</p>
                <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                  <li>AI/MLシステムの開発経験</li>
                  <li>顧客折衝・コミュニケーション能力</li>
                  <li>不確実な環境での問題解決能力</li>
                </ul>
              </div>
              <div className="mb-4">
                <p className="text-sm font-semibold text-navy mb-2">歓迎要件</p>
                <p className="text-gray-600 text-sm">建設・不動産・物流業界の知見</p>
              </div>
              <div className="border-t border-gray-100 pt-4">
                <p className="text-sm font-semibold text-navy mb-1">報酬</p>
                <p className="text-gray-600 text-sm">大手SIの+30-50%給与 + J-KISS SO</p>
              </div>
            </div>

            {/* Position 2: 営業 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <span className="inline-block bg-gold/10 text-gold border border-gold/30 text-sm px-3 py-1 rounded mb-4">
                営業・GTM
              </span>
              <h3 className="text-xl font-bold text-navy mb-2">営業</h3>
              <p className="text-gray-600 mb-4">地方中堅企業への新規開拓・導入支援</p>
              <div className="mb-4">
                <p className="text-sm font-semibold text-navy mb-2">必須要件</p>
                <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                  <li>BtoB営業経験3年以上</li>
                  <li>地方企業とのリレーション構築経験</li>
                  <li>自走できる営業スタイル</li>
                </ul>
              </div>
              <div className="mb-4">
                <p className="text-sm font-semibold text-navy mb-2">歓迎要件</p>
                <p className="text-gray-600 text-sm">IT・SaaS営業経験</p>
              </div>
              <div className="border-t border-gray-100 pt-4">
                <p className="text-sm font-semibold text-navy mb-1">報酬</p>
                <p className="text-gray-600 text-sm">大手SIの+30-50%給与 + J-KISS SO</p>
              </div>
            </div>

            {/* Position 3: エンジニア（AI/ML） */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <span className="inline-block bg-gold/10 text-gold border border-gold/30 text-sm px-3 py-1 rounded mb-4">
                エンジニアリング
              </span>
              <h3 className="text-xl font-bold text-navy mb-2">エンジニア（AI/ML）</h3>
              <p className="text-gray-600 mb-4">AIモデルの開発・改善・本番運用</p>
              <div className="mb-4">
                <p className="text-sm font-semibold text-navy mb-2">必須要件</p>
                <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                  <li>Python, LLM, RAGの実務経験</li>
                  <li>クラウドインフラ（AWS/GCP）の運用経験</li>
                  <li>生成AI活用の実績</li>
                </ul>
              </div>
              <div className="border-t border-gray-100 pt-4">
                <p className="text-sm font-semibold text-navy mb-1">報酬</p>
                <p className="text-gray-600 text-sm">大手SIの+30-50%給与 + J-KISS SO</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Compensation */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">待遇・福利厚生</h2>
          <div className="w-16 h-1 bg-gold mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border border-gold/30 bg-white/5 rounded-lg p-6">
              <p className="text-gold font-bold text-lg mb-3">給与</p>
              <p className="text-white/80 text-sm leading-relaxed">大手SIer比+30-50%（経験・スキルによる）</p>
            </div>
            <div className="border border-gold/30 bg-white/5 rounded-lg p-6">
              <p className="text-gold font-bold text-lg mb-3">ストックオプション</p>
              <p className="text-white/80 text-sm leading-relaxed">J-KISS形式のSO付与</p>
            </div>
            <div className="border border-gold/30 bg-white/5 rounded-lg p-6">
              <p className="text-gold font-bold text-lg mb-3">裁量</p>
              <p className="text-white/80 text-sm leading-relaxed">少人数チームで大きな意思決定に参加</p>
            </div>
            <div className="border border-gold/30 bg-white/5 rounded-lg p-6">
              <p className="text-gold font-bold text-lg mb-3">成長</p>
              <p className="text-white/80 text-sm leading-relaxed">経営×AI×営業の3領域を横断的に経験</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">選考プロセス</h2>
          <div className="w-16 h-1 bg-gold mb-8" />
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-0">

            {/* Step 1 */}
            <div className="flex-1 bg-white border border-gray-200 rounded-lg p-6 shadow-sm text-center">
              <p className="text-gold font-bold text-2xl mb-2">01</p>
              <p className="text-navy font-bold">書類選考</p>
            </div>

            <div className="hidden md:flex items-center justify-center px-4">
              <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>

            {/* Step 2 */}
            <div className="flex-1 bg-white border border-gray-200 rounded-lg p-6 shadow-sm text-center">
              <p className="text-gold font-bold text-2xl mb-2">02</p>
              <p className="text-navy font-bold">カジュアル面談</p>
            </div>

            <div className="hidden md:flex items-center justify-center px-4">
              <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>

            {/* Step 3 */}
            <div className="flex-1 bg-white border border-gray-200 rounded-lg p-6 shadow-sm text-center">
              <p className="text-gold font-bold text-2xl mb-2">03</p>
              <p className="text-navy font-bold">技術・営業面接</p>
            </div>

            <div className="hidden md:flex items-center justify-center px-4">
              <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>

            {/* Step 4 */}
            <div className="flex-1 bg-white border border-gray-200 rounded-lg p-6 shadow-sm text-center">
              <p className="text-gold font-bold text-2xl mb-2">04</p>
              <p className="text-navy font-bold">最終面接</p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">応募・お問い合わせ</h2>
          <div className="w-16 h-1 bg-gold mb-8 mx-auto" />
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            ご興味をお持ちの方は、お気軽にお問い合わせください。カジュアル面談から始めることも可能です。
          </p>
          <a
            href="/contact"
            className="inline-block bg-gold text-navy font-bold px-8 py-3 rounded hover:opacity-90 transition"
          >
            応募・問い合わせる
          </a>
        </div>
      </section>
    </>
  )
}
