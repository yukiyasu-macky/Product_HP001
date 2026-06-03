import Link from 'next/link'
import FadeIn from '@/components/FadeIn'

export const dynamic = 'force-static'

const members = [
  {
    initial: '内',
    name: '内海 暢介',
    role: '代表取締役CEO / FDE Lead',
    equity: 'FD 60%',
    bio: '経営×実務のハイブリッド型リーダー。M&Aを3回経験し、製造・流通・食品での100+件のAI・DX導入実績。Forward Deployed Engineerとして現場に入り込むスタイル。',
    tags: ['M&A 3回', '実績100+件', 'FDE経験', '製造・流通・食品'],
  },
  {
    initial: '吉',
    name: '吉田 輝樹',
    role: 'CTO / AI Lead',
    equity: 'SO 25株 (FD 5%)',
    bio: 'DeNA AI統括として大規模AI事業を技術統括。慶應義塾大学SFC出身。AIシステムの設計・開発・スケールのエキスパート。',
    tags: ['DeNA AI統括', '慶應SFC', 'AI基盤設計', '大規模AI'],
  },
  {
    initial: '佐',
    name: '佐々木（役員）',
    role: '営業役員 / Revenue Lead',
    equity: '¥5,000万 J-KISS出資 / FD 20%',
    bio: 'GTM戦略・営業の専門家。J-KISS形式での出資も行い、創業初期からコミット。地方企業への営業ネットワークを持つ。',
    tags: ['GTM戦略', 'J-KISS出資', '営業ネットワーク', 'FD 20%'],
  },
]

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
            <h1 className="text-5xl font-black text-navy mb-2">チーム</h1>
            <p className="text-gray-500 text-xl mt-2">経営×AI×営業の3ピース</p>
            <div className="section-divider mt-3 mb-10" />
          </FadeIn>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">FOUNDERS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-2">創業メンバー</h2>
            <div className="section-divider mt-3 mb-10" />
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {members.map((member, i) => (
              <FadeIn key={member.name} delay={i * 100}>
                <div className="card-hover bg-white border border-gray-200 rounded-xl overflow-hidden h-full flex flex-col">
                  {/* Photo area */}
                  <div className="aspect-[4/3] bg-[#F8F9FA] border-b border-gray-100 flex items-center justify-center relative">
                    <span className="text-navy/10 text-8xl font-black select-none">
                      {member.initial}
                    </span>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold" />
                  </div>

                  {/* Content area */}
                  <div className="p-7 flex flex-col flex-1">
                    <h3 className="text-navy text-xl font-bold mb-1">{member.name}</h3>
                    <span className="inline-block bg-navy text-white text-xs px-3 py-1 rounded mb-4 self-start">
                      {member.role}
                    </span>
                    <div className="w-10 h-0.5 bg-gold mb-4" />
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                      {member.bio}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {member.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] bg-[#F8F9FA] text-gray-600 border border-gray-200 px-2 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-400 text-xs mt-4 pt-4 border-t border-gray-100">
                      {member.equity}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* WHY JOIN */}
      <section className="bg-[#F8F9FA] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">WHY JOIN</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-2">なぜArcrise Laboか</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-2">カルチャー</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
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
