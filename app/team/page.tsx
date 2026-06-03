export const dynamic = 'force-static';

export default function TeamPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-4">TEAM</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">チーム</h1>
          <div className="w-16 h-1 bg-gold" />
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-navy py-20 border-t border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">創業メンバー</h2>
          <div className="w-16 h-1 bg-gold mb-12" />

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 - CEO */}
            <div className="border border-gold/30 bg-white/5 rounded-lg p-6">
              <div className="aspect-square bg-white/10 rounded-lg mb-6" />
              <h3 className="text-xl font-bold text-white mb-2">内海 暢介</h3>
              <span className="inline-block bg-gold/10 text-gold border border-gold/30 text-sm px-3 py-1 rounded mb-3">
                代表取締役CEO / FDE Lead
              </span>
              <p className="text-gold/80 text-sm mb-4">FD 60%</p>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                経営×実務のハイブリッド型リーダー。M&Aを3回経験し、製造・流通・食品での100+件のAI・DX導入実績。Forward Deployed Engineerとして現場に入り込むスタイル。
              </p>
              <div className="flex flex-wrap gap-2">
                {["M&A 3回", "実績100+件", "FDE経験"].map((tag) => (
                  <span key={tag} className="inline-block bg-gold/10 text-gold border border-gold/30 text-sm px-3 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Card 2 - CTO */}
            <div className="border border-gold/30 bg-white/5 rounded-lg p-6">
              <div className="aspect-square bg-white/10 rounded-lg mb-6" />
              <h3 className="text-xl font-bold text-white mb-2">吉田 輝樹</h3>
              <span className="inline-block bg-gold/10 text-gold border border-gold/30 text-sm px-3 py-1 rounded mb-3">
                CTO / AI Lead
              </span>
              <p className="text-gold/80 text-sm mb-4">SO 25株 (FD 5%)</p>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                DeNA AI統括として大規模AI事業を技術統括。慶應義塾大学SFC出身。AIシステムの設計・開発・スケールのエキスパート。
              </p>
              <div className="flex flex-wrap gap-2">
                {["DeNA AI統括", "慶應SFC", "AI基盤設計"].map((tag) => (
                  <span key={tag} className="inline-block bg-gold/10 text-gold border border-gold/30 text-sm px-3 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Card 3 - Sales */}
            <div className="border border-gold/30 bg-white/5 rounded-lg p-6">
              <div className="aspect-square bg-white/10 rounded-lg mb-6" />
              <h3 className="text-xl font-bold text-white mb-2">佐々木（役員）</h3>
              <span className="inline-block bg-gold/10 text-gold border border-gold/30 text-sm px-3 py-1 rounded mb-3">
                営業役員 / Revenue Lead
              </span>
              <p className="text-gold/80 text-sm mb-1">¥5,000万 J-KISS出資</p>
              <p className="text-gold/80 text-sm mb-4">FD 20%</p>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                GTM戦略・営業の専門家。J-KISS形式での出資も行い、創業初期からコミット。地方企業への営業ネットワークを持つ。
              </p>
              <div className="flex flex-wrap gap-2">
                {["GTM戦略", "J-KISS出資", "営業ネットワーク"].map((tag) => (
                  <span key={tag} className="inline-block bg-gold/10 text-gold border border-gold/30 text-sm px-3 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="bg-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">なぜArcrise Laboか</h2>
          <div className="w-16 h-1 bg-gold mb-12" />

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "大きな裁量",
                desc: "少人数チームで大きな意思決定に関われる",
              },
              {
                title: "社会的インパクト",
                desc: "地方企業の変革に直接貢献できる",
              },
              {
                title: "経済的リターン",
                desc: "大手の+30-50%給与 + J-KISS SO",
              },
              {
                title: "成長環境",
                desc: "経営×AI×営業の3領域を横断的に学べる",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-navy mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">カルチャー</h2>
          <div className="w-16 h-1 bg-gold mb-12" />

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                value: "現場主義",
                desc: "会議室より現場。コンサルではなくFDE",
              },
              {
                value: "成果責任",
                desc: "技術よりビジネス成果を優先する",
              },
              {
                value: "高速実行",
                desc: "6ヶ月で稼働。スピードが競争優位",
              },
            ].map((item) => (
              <div key={item.value} className="border border-gold/30 bg-white/5 rounded-lg p-8">
                <p className="text-3xl font-bold text-gold mb-4">{item.value}</p>
                <p className="text-white/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8">チームに加わりませんか？</h2>
          <a
            href="/recruit"
            className="inline-block bg-gold text-navy font-bold px-8 py-3 rounded hover:opacity-90 transition"
          >
            採用情報を見る
          </a>
        </div>
      </section>
    </main>
  );
}
