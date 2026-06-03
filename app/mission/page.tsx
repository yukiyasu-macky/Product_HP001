export const dynamic = 'force-static'

export default function MissionPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-4">
            MISSION & VISION
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ミッション・ビジョン
          </h1>
          <div className="w-16 h-1 bg-gold" />
        </div>
      </section>

      {/* 2. Mission Statement */}
      <section className="bg-navy py-24 border-t border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="text-8xl font-black text-gold/20 leading-none select-none mb-4">
            &ldquo;
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white text-center leading-tight">
            地方中堅企業にAIを届け、<br className="hidden md:block" />
            日本の産業を再生する
          </h2>
          <p className="text-white/60 text-center max-w-2xl mx-auto mt-8 text-lg leading-relaxed">
            私たちは、大企業だけがAIの恩恵を享受する時代に終止符を打ちます。
            地方に根ざした中堅企業こそが日本経済の真の担い手であり、
            その現場にAIを実装することで、産業全体の再生を目指します。
          </p>
        </div>
      </section>

      {/* 3. Crisis Section */}
      <section className="bg-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            なぜ今、地方企業のAIなのか
          </h2>
          <div className="w-16 h-1 bg-gold mb-12" />
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <p className="text-5xl font-black text-gold mb-3">849件</p>
              <p className="text-navy font-bold text-lg mb-2">
                2025年の地方企業倒産件数
              </p>
              <p className="text-gray-500 text-sm">人手不足と非効率業務が主因</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <p className="text-5xl font-black text-gold mb-3">9-14倍</p>
              <p className="text-navy font-bold text-lg mb-2">
                AI市場の成長予測
              </p>
              <p className="text-gray-500 text-sm">今後5年間のAI市場規模拡大</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <p className="text-5xl font-black text-gold mb-3">68pt</p>
              <p className="text-navy font-bold text-lg mb-2">
                空白市場スコア
              </p>
              <p className="text-gray-500 text-sm">大手SIerが参入しない中堅企業市場</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Vision Section */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-4">
            OUR VISION
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            2029年に向けたビジョン
          </h2>
          <div className="w-16 h-1 bg-gold mb-12" />
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-gold/30 bg-white/5 rounded-lg p-6">
              <span className="inline-block bg-gold/10 text-gold border border-gold/30 text-sm px-3 py-1 rounded mb-4">
                Phase 1｜2026-2027
              </span>
              <h3 className="text-white font-bold text-xl mb-3">
                建設・不動産・運送業でのAI導入実証
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                業界特化のAIソリューションを開発し、地方中堅企業への導入実績を積み上げ、
                ROIを明確に示すプレイブックを確立します。
              </p>
            </div>
            <div className="border border-gold/30 bg-white/5 rounded-lg p-6">
              <span className="inline-block bg-gold/10 text-gold border border-gold/30 text-sm px-3 py-1 rounded mb-4">
                Phase 2｜2027-2028
              </span>
              <h3 className="text-white font-bold text-xl mb-3">
                業界拡大とM&Aによる規模拡大
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                実証済みのモデルを他業界へ横展開しながら、M&Aを活用して
                専門知識を持つ企業を取り込み、急速なスケールを実現します。
              </p>
            </div>
            <div className="border border-gold/30 bg-white/5 rounded-lg p-6">
              <span className="inline-block bg-gold/10 text-gold border border-gold/30 text-sm px-3 py-1 rounded mb-4">
                Phase 3｜2028-2029
              </span>
              <h3 className="text-white font-bold text-xl mb-3">
                廉価版ASP展開で中小企業市場へ
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                蓄積した知見をASPプロダクトとして提供し、より小規模な企業にも
                AIの恩恵を届けることで、産業全体のDXを加速させます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Values Section */}
      <section className="bg-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            バリュー
          </h2>
          <div className="w-16 h-1 bg-gold mb-12" />
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <span className="inline-block bg-gold/10 text-gold border border-gold/30 text-sm px-3 py-1 rounded mb-4">
                「経営」
              </span>
              <p className="text-gray-600 leading-relaxed">
                事業成果を最優先にしたAI導入。技術のための技術ではなく、利益を生むAI。
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <span className="inline-block bg-gold/10 text-gold border border-gold/30 text-sm px-3 py-1 rounded mb-4">
                「AI」
              </span>
              <p className="text-gray-600 leading-relaxed">
                業界特化の深い専門知識とAI技術の融合。汎用ではなく、専門特化。
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <span className="inline-block bg-gold/10 text-gold border border-gold/30 text-sm px-3 py-1 rounded mb-4">
                「営業」
              </span>
              <p className="text-gray-600 leading-relaxed">
                現場に入り込むForward Deployed Engineer。コンサルではなく、実装者。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Social Impact Section */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-4">
            SOCIAL IMPACT
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            社会的意義
          </h2>
          <div className="w-16 h-1 bg-gold mb-12" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gold/30 bg-white/5 rounded-lg p-6">
              <h3 className="text-gold font-bold text-xl mb-3">地方創生</h3>
              <p className="text-white/70 leading-relaxed">
                地方企業の生産性向上が地域経済を支える。AIによる業務効率化は、
                地方に残る産業の競争力を回復させ、雇用と経済の好循環を生み出します。
              </p>
            </div>
            <div className="border border-gold/30 bg-white/5 rounded-lg p-6">
              <h3 className="text-gold font-bold text-xl mb-3">人手不足解消</h3>
              <p className="text-white/70 leading-relaxed">
                AIによる業務効率化で少子高齢化に対応。人口減少が進む日本において、
                AIは「もう一人の従業員」として、現場の生産性を劇的に底上げします。
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
