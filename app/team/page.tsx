import Link from 'next/link'
import FadeIn from '@/components/FadeIn'

export const dynamic = 'force-static'

const reasons = [
  {
    num: '01',
    title: '大きな裁量',
    desc: '少人数チームで大きな意思決定に関われる。プロダクト・事業・組織を横断して動ける環境。',
  },
  {
    num: '02',
    title: '社会的インパクト',
    desc: '地方企業の変革に直接貢献できる。AIによって日本のリアルな産業を変える最前線。',
  },
  {
    num: '03',
    title: '経済的リターン',
    desc: '大手の+30-50%給与 + J-KISS SO。成果に応じたアップサイドが明確に設計されている。',
  },
  {
    num: '04',
    title: '成長環境',
    desc: '経営×AI×営業の3領域を横断的に学べる。スタートアップ初期だからこそ得られる密度の高い経験。',
  },
]

const cultureValues = [
  {
    value: '現場主義',
    desc: '会議室より現場。コンサルではなくFDE。クライアントの現場に入り込み、共に変革を起こす。',
  },
  {
    value: '成果責任',
    desc: '技術よりビジネス成果を優先する。美しいコードより、動く事業を。',
  },
  {
    value: '高速実行',
    desc: '6ヶ月で稼働。スピードが競争優位。考え抜いた後は迷わず動く。',
  },
]

export default function TeamPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-[#F8F9FA] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">TEAM</p>
            <h1 className="h1-fluid font-black text-navy mb-2">チーム</h1>
            <div className="section-divider mt-3 mb-10" />
          </FadeIn>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">FOUNDER</p>
            <h2 className="h2-fluid font-bold text-navy mb-2">創業者</h2>
            <div className="section-divider mt-3 mb-10" />
          </FadeIn>

          <FadeIn>
            <div className="max-w-2xl">
              <h3 className="text-navy text-2xl font-bold mb-1">内海 暢介</h3>
              <span className="inline-block bg-navy text-white text-xs px-3 py-1 rounded mb-5 self-start">
                代表取締役CEO / FDE Lead
              </span>
              <div className="w-10 h-0.5 bg-gold mb-5" />
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                経営×実務のハイブリッド型リーダー。M&Aを3回経験し、製造・流通・食品での100+件のAI・DX導入実績。Forward Deployed Engineerとして現場に入り込むスタイル。
              </p>
              <div className="flex flex-wrap gap-2">
                {['M&A 3回', '実績100+件', 'FDE経験', '製造・流通・食品'].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-[#F8F9FA] text-gray-600 border border-gray-200 px-3 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* WHY JOIN */}
      <section className="bg-[#F8F9FA] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">WHY JOIN</p>
            <h2 className="h2-fluid font-bold text-navy mb-2">なぜArcrise Laboか</h2>
            <div className="section-divider mt-3 mb-10" />
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {reasons.map((item, i) => (
              <FadeIn key={item.num} delay={i * 100}>
                <div className="card-hover bg-white border border-gray-200 rounded-xl p-8 relative overflow-hidden">
                  <span className="absolute top-4 right-6 text-4xl font-black text-gray-100 select-none leading-none">
                    {item.num}
                  </span>
                  <h3 className="text-navy font-bold text-lg mb-3 relative z-10">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed relative z-10">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CULTURE */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">CULTURE</p>
            <h2 className="h2-fluid font-bold text-navy mb-2">カルチャー</h2>
            <div className="section-divider mt-3 mb-10" />
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {cultureValues.map((item, i) => (
              <FadeIn key={item.value} delay={i * 100}>
                <div className="border-l-4 border-gold pl-6 py-2">
                  <p className="text-navy font-black text-2xl mb-2">{item.value}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">JOIN US</p>
            <h2 className="h2-fluid font-bold text-white mb-4">
              チームに加わりませんか？
            </h2>
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
    </main>
  )
}
