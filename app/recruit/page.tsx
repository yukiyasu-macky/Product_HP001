import Link from 'next/link'
import FadeIn from '@/components/FadeIn'

export const dynamic = 'force-static'

export default function RecruitPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">RECRUIT</p>
          <h1 className="text-5xl font-black text-white mb-4">採用情報</h1>
          <p className="text-white/80 text-2xl mt-4">経営×AI×現場を変えたい人へ</p>
          <div className="section-divider mt-6" />
        </div>
      </section>

      {/* Message */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">MESSAGE</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-2">
              Arcrise Laboが求めるもの
            </h2>
            <div className="section-divider mt-3 mb-8" />
            <p className="text-gray-700 text-lg leading-relaxed max-w-3xl">
              AI技術は、それだけでは社会を変えられません。
              必要なのは、現場を理解し、経営課題を解決し、
              実際に成果へつなげる力です。<br /><br />
              Arcrise Laboは、建設・不動産・物流といった
              日本を支える産業の変革に挑戦しています。
              私たちが目指すのは、現場にAIを根付かせ、
              地方から日本の産業を再生することです。<br /><br />
              その挑戦を、共に担える仲間を探しています。
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-[#F8F9FA] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">POSITIONS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-2">募集ポジション</h2>
            <div className="section-divider mt-3 mb-10" />
          </FadeIn>
          <div className="grid grid-cols-1 gap-6">

            {/* Position 1: FDE */}
            <FadeIn>
              <div className="card-hover bg-white border border-gray-200 rounded-xl p-8">
                <span className="inline-block bg-navy text-white text-xs px-3 py-1 rounded mb-4">
                  エンジニアリング
                </span>
                <h3 className="text-xl font-bold text-navy mb-2">
                  FDE（Forward Deployed Engineer）
                </h3>
                <p className="text-gray-600 text-sm mb-4">AIシステムの設計・開発・顧客現場への導入</p>
                <div className="mb-4">
                  <p className="text-sm font-semibold text-navy mb-2">必須要件</p>
                  <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                    <li>AI/MLシステムの開発経験</li>
                    <li>顧客折衝・コミュニケーション能力</li>
                    <li>不確実な環境での問題解決能力</li>
                  </ul>
                </div>
                <div className="mb-4">
                  <p className="text-sm font-semibold text-navy mb-2">歓迎要件</p>
                  <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                    <li>建設・不動産・物流業界の知見</li>
                  </ul>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-gold font-semibold text-sm">報酬: 大手SIの+30-50%給与 + J-KISS SO</p>
                </div>
              </div>
            </FadeIn>

            {/* Position 2: 営業 */}
            <FadeIn>
              <div className="card-hover bg-white border border-gray-200 rounded-xl p-8">
                <span className="inline-block bg-navy text-white text-xs px-3 py-1 rounded mb-4">
                  営業・GTM
                </span>
                <h3 className="text-xl font-bold text-navy mb-2">営業</h3>
                <p className="text-gray-600 text-sm mb-4">地方中堅企業への新規開拓・導入支援</p>
                <div className="mb-4">
                  <p className="text-sm font-semibold text-navy mb-2">必須要件</p>
                  <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                    <li>BtoB営業経験3年以上</li>
                    <li>地方企業とのリレーション構築経験</li>
                    <li>自走できる営業スタイル</li>
                  </ul>
                </div>
                <div className="mb-4">
                  <p className="text-sm font-semibold text-navy mb-2">歓迎要件</p>
                  <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                    <li>IT・SaaS営業経験</li>
                  </ul>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-gold font-semibold text-sm">報酬: 大手SIの+30-50%給与 + J-KISS SO</p>
                </div>
              </div>
            </FadeIn>

            {/* Position 3: エンジニア（AI/ML） */}
            <FadeIn>
              <div className="card-hover bg-white border border-gray-200 rounded-xl p-8">
                <span className="inline-block bg-navy text-white text-xs px-3 py-1 rounded mb-4">
                  エンジニアリング
                </span>
                <h3 className="text-xl font-bold text-navy mb-2">エンジニア（AI/ML）</h3>
                <p className="text-gray-600 text-sm mb-4">AIモデルの開発・改善・本番運用</p>
                <div className="mb-4">
                  <p className="text-sm font-semibold text-navy mb-2">必須要件</p>
                  <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                    <li>Python, LLM, RAGの実務経験</li>
                    <li>クラウドインフラ（AWS/GCP）の運用経験</li>
                    <li>生成AI活用の実績</li>
                  </ul>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-gold font-semibold text-sm">報酬: 大手SIの+30-50%給与 + J-KISS SO</p>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Compensation */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">BENEFITS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-2">待遇・福利厚生</h2>
            <div className="section-divider mt-3 mb-10" />
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <FadeIn>
              <div className="card-hover bg-white border border-gray-200 rounded-xl p-8">
                <div className="w-10 h-10 bg-[#F8F9FA] rounded-lg flex items-center justify-center text-gold mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-navy font-bold mb-2">給与</p>
                <p className="text-gray-600 text-sm leading-relaxed">大手SIer比+30-50%（経験・スキルによる）</p>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="card-hover bg-white border border-gray-200 rounded-xl p-8">
                <div className="w-10 h-10 bg-[#F8F9FA] rounded-lg flex items-center justify-center text-gold mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <p className="text-navy font-bold mb-2">ストックオプション</p>
                <p className="text-gray-600 text-sm leading-relaxed">J-KISS形式のSO付与</p>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="card-hover bg-white border border-gray-200 rounded-xl p-8">
                <div className="w-10 h-10 bg-[#F8F9FA] rounded-lg flex items-center justify-center text-gold mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-navy font-bold mb-2">裁量</p>
                <p className="text-gray-600 text-sm leading-relaxed">少人数チームで大きな意思決定に参加</p>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="card-hover bg-white border border-gray-200 rounded-xl p-8">
                <div className="w-10 h-10 bg-[#F8F9FA] rounded-lg flex items-center justify-center text-gold mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <p className="text-navy font-bold mb-2">成長</p>
                <p className="text-gray-600 text-sm leading-relaxed">経営×AI×営業の3領域を横断的に経験</p>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#F8F9FA] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">PROCESS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-2">選考プロセス</h2>
            <div className="section-divider mt-3 mb-10" />
          </FadeIn>
          <FadeIn>
            <div className="flex flex-col md:flex-row items-center gap-0">

              {/* Step 1 */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center text-sm font-bold">
                  1
                </div>
                <p className="text-navy font-semibold mt-3 text-sm text-center">書類選考</p>
              </div>

              <div className="flex-1 h-0.5 bg-gray-200 hidden md:block mx-4" />

              {/* Step 2 */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center text-sm font-bold">
                  2
                </div>
                <p className="text-navy font-semibold mt-3 text-sm text-center">カジュアル面談</p>
              </div>

              <div className="flex-1 h-0.5 bg-gray-200 hidden md:block mx-4" />

              {/* Step 3 */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center text-sm font-bold">
                  3
                </div>
                <p className="text-navy font-semibold mt-3 text-sm text-center">技術・営業面接</p>
              </div>

              <div className="flex-1 h-0.5 bg-gray-200 hidden md:block mx-4" />

              {/* Step 4 */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center text-sm font-bold">
                  4
                </div>
                <p className="text-navy font-semibold mt-3 text-sm text-center">最終面接</p>
              </div>

            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">APPLY</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">応募・お問い合わせ</h2>
            <div className="section-divider mt-3 mb-8 mx-auto" />
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              ご興味をお持ちの方は、お気軽にお問い合わせください。カジュアル面談から始めることも可能です。
            </p>
            <Link
              href="/contact"
              className="inline-block border border-gold/60 text-gold font-semibold px-8 py-3.5 rounded text-sm tracking-wide hover:bg-gold hover:text-navy transition-all"
            >
              応募・問い合わせる
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
