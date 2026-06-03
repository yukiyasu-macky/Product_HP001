export const dynamic = 'force-static'

export default function Home() {
  return (
    <main>
      {/* 1. Hero Section */}
      <section className="bg-navy min-h-screen flex flex-col justify-center pt-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center flex-1 py-20">
          <p className="text-gold text-sm font-bold tracking-[0.3em] mb-6 uppercase">
            ARCRISE LABO INC.
          </p>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
            地方事業者に
            <br />
            AIを届ける
          </h1>
          <div className="w-24 h-1 bg-gold my-6" />
          <p className="text-xl text-white/70 max-w-xl mb-10">
            地方中堅企業の業務を変革する、業界特化型AIプラットフォーム
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/service"
              className="inline-block bg-gold text-navy font-bold px-8 py-3 rounded hover:opacity-90 transition"
            >
              サービスを見る
            </a>
            <a
              href="/about"
              className="inline-block border border-gold text-gold font-bold px-8 py-3 rounded hover:bg-gold hover:text-navy transition"
            >
              会社を知る
            </a>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-xs">
          <span>SCROLL</span>
          <div className="w-px h-8 bg-white/30" />
        </div>
      </section>

      {/* 2. Numbers Section */}
      <section className="bg-navy border-t border-gold/20 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">実証された成果</h2>
          <div className="w-16 h-1 bg-gold mb-12" />
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-gold/30 bg-white/5 rounded-lg p-6 text-center">
              <p className="text-5xl font-black text-gold mb-2">20-30%</p>
              <p className="text-white font-bold text-lg mb-2">業務効率向上</p>
              <p className="text-white/50 text-sm">AI導入による業務効率化の実証値</p>
            </div>
            <div className="border border-gold/30 bg-white/5 rounded-lg p-6 text-center">
              <p className="text-5xl font-black text-gold mb-2">22万社</p>
              <p className="text-white font-bold text-lg mb-2">TAM市場規模</p>
              <p className="text-white/50 text-sm">建設・不動産・運送業の対象企業数</p>
            </div>
            <div className="border border-gold/30 bg-white/5 rounded-lg p-6 text-center">
              <p className="text-5xl font-black text-gold mb-2">100+</p>
              <p className="text-white font-bold text-lg mb-2">創業者実績</p>
              <p className="text-white/50 text-sm">CEOによるAI・DX導入支援実績件数</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Business Overview Section */}
      <section className="bg-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">事業概要</h2>
          <div className="w-16 h-1 bg-gold mb-12" />
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <p className="text-5xl font-black text-gold mb-4">01</p>
              <h3 className="text-xl font-bold text-navy mb-2">建設業向けAI</h3>
              <p className="text-gray-600 mb-2">見積AI + 工程管理</p>
              <p className="text-gray-500 text-sm mb-4">業務効率 +20-30%</p>
              <a href="/service" className="text-gold font-bold text-sm hover:opacity-70 transition">
                詳しく見る →
              </a>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <p className="text-5xl font-black text-gold mb-4">02</p>
              <h3 className="text-xl font-bold text-navy mb-2">不動産業向けAI</h3>
              <p className="text-gray-600 mb-2">物件マッチングAI</p>
              <p className="text-gray-500 text-sm mb-4">営業効率5倍</p>
              <a href="/service" className="text-gold font-bold text-sm hover:opacity-70 transition">
                詳しく見る →
              </a>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <p className="text-5xl font-black text-gold mb-4">03</p>
              <h3 className="text-xl font-bold text-navy mb-2">運送・物流向けAI</h3>
              <p className="text-gray-600 mb-2">配車最適化AI</p>
              <p className="text-gray-500 text-sm mb-4">コスト +15-25%削減</p>
              <a href="/service" className="text-gold font-bold text-sm hover:opacity-70 transition">
                詳しく見る →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Mission Section */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold text-sm font-bold tracking-[0.3em] mb-6 uppercase">
            OUR MISSION
          </p>
          <div className="w-16 h-1 bg-gold mb-8 mx-auto" />
          <blockquote className="text-3xl md:text-4xl font-black text-white leading-tight mb-8 max-w-3xl mx-auto">
            "地方中堅企業にAIを届け、日本の産業を再生する"
          </blockquote>
          <p className="text-white/60 max-w-2xl mx-auto mb-10 text-base leading-relaxed">
            年間849件の中小建設業倒産、少子高齢化による深刻な人手不足。一方でAI市場は今後9〜14倍の成長が見込まれています。
            私たちはその機会を地方の事業者に届け、日本の産業基盤を支え直します。
          </p>
          <a
            href="/mission"
            className="inline-block border border-gold text-gold font-bold px-8 py-3 rounded hover:bg-gold hover:text-navy transition"
          >
            ミッションを読む →
          </a>
        </div>
      </section>

      {/* 5. CTA Grid Section */}
      <section className="bg-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">詳しく見る</h2>
          <div className="w-16 h-1 bg-gold mb-12" />
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { label: '実績', href: '/results' },
              { label: 'チーム', href: '/team' },
              { label: '採用情報', href: '/recruit' },
              { label: '事業計画', href: '/roadmap' },
              { label: 'IR', href: '/ir' },
              { label: 'お問い合わせ', href: '/contact' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group bg-white border border-gray-200 rounded-lg p-6 shadow-sm flex items-center justify-between hover:border-gold transition"
              >
                <span className="text-navy font-bold text-lg">{item.label}</span>
                <span className="text-gray-300 group-hover:text-gold transition text-xl font-bold">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
