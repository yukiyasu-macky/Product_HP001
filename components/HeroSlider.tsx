'use client'

import Image from 'next/image'
import Link from 'next/link'

const slide = {
  image: '/images/hero-bg.jpg',
  industryEn: 'ARCRISE LABS',
  headline: '地方産業を\nAIで拓く。',
  headlineGold: 'AI',
  cta: { label: 'サービスを見る', href: '/service' },
  ctaSub: { label: '会社を知る', href: '/about' },
}

export default function HeroSlider() {
  return (
    <section className="relative min-h-screen flex items-end bg-navy overflow-hidden">

      {/* 背景画像 */}
      <div className="absolute inset-0">
        <Image
          src={slide.image}
          alt="ARCRISE LABS"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* オーバーレイ */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/20 pointer-events-none" style={{ zIndex: 1 }} />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/70 via-navy/30 to-transparent pointer-events-none" style={{ zIndex: 1 }} />

      {/* コンテンツ */}
      <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-24 pt-32" style={{ zIndex: 2 }}>

        {/* ラベル */}
        <div className="inline-flex items-center gap-3 mb-6 animate-fadeSlideUp"
          style={{ animationDuration: '0.5s', animationFillMode: 'both' }}>
          <span className="w-6 h-px bg-gold" />
          <span className="text-gold text-xs tracking-[0.4em] uppercase font-medium">
            {slide.industryEn}
          </span>
        </div>

        {/* ヘッドライン */}
        <h1
          className="text-white font-black mb-6 animate-fadeSlideUp whitespace-pre-line"
          style={{
            fontSize: 'clamp(2.8rem, 7vw, 6.5rem)',
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            animationDuration: '0.5s',
            animationDelay: '0.08s',
            animationFillMode: 'both',
          }}
        >
          {slide.headline.split(slide.headlineGold).map((part, i, arr) => (
            <span key={i}>
              {part}
              {i < arr.length - 1 && (
                <span style={{ color: '#C9A96E', textShadow: '0 0 15px rgba(201,169,110,0.45)' }}>
                  {slide.headlineGold}
                </span>
              )}
            </span>
          ))}
        </h1>

        {/* CTA */}
        <div className="flex items-center gap-6 animate-fadeSlideUp"
          style={{ animationDuration: '0.5s', animationDelay: '0.16s', animationFillMode: 'both' }}>
          <Link
            href={slide.cta.href}
            className="inline-flex items-center gap-2 bg-gold text-navy font-bold px-8 py-4 rounded text-sm tracking-wide hover:bg-gold/90 transition-colors"
          >
            {slide.cta.label}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <Link
            href={slide.ctaSub.href}
            className="text-white/70 text-sm hover:text-white transition-colors underline underline-offset-4"
          >
            {slide.ctaSub.label}
          </Link>
        </div>

      </div>

      {/* 下スクロール誘導 */}
      <div className="absolute bottom-8 right-10 flex flex-col items-center gap-2 animate-bounce" style={{ zIndex: 2 }}>
        <span className="text-white/30 text-xs tracking-widest rotate-90 origin-center" style={{ writingMode: 'vertical-rl' }}>SCROLL</span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none" className="text-white/30">
          <path d="M8 4v16M2 14l6 6 6-6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
      </div>

    </section>
  )
}
