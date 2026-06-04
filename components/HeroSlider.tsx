'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const slides = [
  {
    id: 'top',
    image: '/images/hero-bg.jpg',
    industryEn: 'ARCRISE LABO INC.',
    navLabel: 'TOP',
    headline: '地方産業を\nAIで拓く。',
    headlineGold: 'AI',
    subline: '1/5価格で、経営成果まで伴走する。',
    cta: { label: 'サービスを見る', href: '/service' },
    ctaSub: { label: '会社を知る', href: '/about' },
  },
  {
    id: 'construction',
    image: '/service-construction.jpg',
    industry: '建設業',
    industryEn: 'CONSTRUCTION',
    navLabel: 'CONSTRUCTION',
    headline: '建設現場を、\nAIで変える。',
    subline: '見積・工程・書類をAIが自動化。現場監督の事務負担を削減し、限られた人員でも高品質な施工管理を実現します。',
    stat: '+30%',
    statLabel: '業務効率向上',
    href: '/service#construction',
  },
  {
    id: 'realestate',
    image: '/service-realestate.jpg',
    industry: '不動産業',
    industryEn: 'REAL ESTATE',
    navLabel: 'REAL ESTATE',
    headline: '不動産営業を、\nAIで変える。',
    subline: '物件マッチング・顧客LTV最適化・市場分析をAIが担う。営業担当者が成約活動に集中できる環境を構築します。',
    stat: '×5',
    statLabel: '営業効率向上',
    href: '/service#realestate',
  },
  {
    id: 'logistics',
    image: '/service-logistics.jpg',
    industry: '運送業',
    industryEn: 'LOGISTICS',
    navLabel: 'LOGISTICS',
    headline: '物流・配送を、\nAIで変える。',
    subline: '配車・ルート・需要予測をリアルタイムで最適化。燃料コストと残業時間を大幅に削減します。',
    stat: '−20%',
    statLabel: '燃料コスト削減',
    href: '/service#logistics',
  },
]

const INTERVAL = 6000

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [progress, setProgress] = useState(0)

  const goTo = useCallback((index: number) => {
    if (isAnimating) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrent(index)
      setIsAnimating(false)
      setProgress(0)
    }, 600)
  }, [isAnimating])

  // 自動スライド
  useEffect(() => {
    const interval = setInterval(() => {
      goTo((current + 1) % slides.length)
    }, INTERVAL)
    return () => clearInterval(interval)
  }, [current, goTo])

  // プログレスバー
  useEffect(() => {
    setProgress(0)
    const start = Date.now()
    const timer = setInterval(() => {
      const elapsed = Date.now() - start
      setProgress(Math.min((elapsed / INTERVAL) * 100, 100))
    }, 50)
    return () => clearInterval(timer)
  }, [current])

  const slide = slides[current]

  return (
    <section className="relative min-h-screen flex items-end bg-navy overflow-hidden">

      {/* 背景画像（フェードトランジション） */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === current && !isAnimating ? 1 : 0 }}
        >
          <Image
            src={s.image}
            alt={s.navLabel}
            fill
            className="object-cover"
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* オーバーレイ：下から濃いグラデーション */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/20 pointer-events-none" style={{ zIndex: 1 }} />
      {/* オーバーレイ：左から薄いグラデーション（テキスト側を暗く） */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/70 via-navy/30 to-transparent pointer-events-none" style={{ zIndex: 1 }} />

      {/* コンテンツ */}
      <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-24 pt-32" style={{ zIndex: 2 }}>

        {/* 業種ラベル */}
        <div
          key={`label-${current}`}
          className="inline-flex items-center gap-3 mb-6 animate-fadeSlideUp"
          style={{ animationDuration: '0.5s', animationFillMode: 'both' }}
        >
          <span className="w-6 h-px bg-gold" />
          <span className="text-gold text-xs tracking-[0.4em] uppercase font-medium">
            {slide.industryEn}
          </span>
        </div>

        {/* メインヘッドライン */}
        <h1
          key={`h1-${current}`}
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
          {'headlineGold' in slide && slide.headlineGold
            ? slide.headline.split(slide.headlineGold).map((part, i, arr) => (
                <span key={i}>
                  {part}
                  {i < arr.length - 1 && (
                    <span style={{ color: '#C9A96E', textShadow: '0 0 15px rgba(201,169,110,0.45)' }}>
                      {slide.headlineGold}
                    </span>
                  )}
                </span>
              ))
            : slide.headline}
        </h1>

        {/* サブテキスト */}
        <p
          key={`sub-${current}`}
          className="text-white/70 text-base md:text-lg max-w-xl mb-10 leading-relaxed animate-fadeSlideUp"
          style={{ animationDuration: '0.5s', animationDelay: '0.16s', animationFillMode: 'both' }}
        >
          {slide.subline}
        </p>

        {/* CTA */}
        <div
          key={`cta-${current}`}
          className="flex items-center gap-6 animate-fadeSlideUp"
          style={{ animationDuration: '0.5s', animationDelay: '0.24s', animationFillMode: 'both' }}
        >
          {'cta' in slide ? (
            <>
              <Link
                href={slide.cta!.href}
                className="inline-flex items-center gap-2 bg-gold text-navy font-bold px-8 py-4 rounded text-sm tracking-wide hover:bg-gold/90 transition-colors"
              >
                {slide.cta!.label}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link
                href={slide.ctaSub!.href}
                className="text-white/70 text-sm hover:text-white transition-colors underline underline-offset-4"
              >
                {slide.ctaSub!.label}
              </Link>
            </>
          ) : (
            <>
              <Link
                href={slide.href}
                className="inline-flex items-center gap-2 bg-gold text-navy font-bold px-8 py-4 rounded text-sm tracking-wide hover:bg-gold/90 transition-colors"
              >
                {slide.industry}の詳細を見る
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link
                href="/contact"
                className="text-white/70 text-sm hover:text-white transition-colors underline underline-offset-4"
              >
                お問い合わせ
              </Link>
            </>
          )}
        </div>

        {/* スライドナビゲーション */}
        <div className="flex items-center gap-8 mt-16">
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => goTo(i)}
              className="flex flex-col items-start gap-2 group"
            >
              {/* プログレスバー */}
              <div className="w-16 h-px bg-white/20 relative overflow-hidden">
                <div
                  className="absolute left-0 top-0 h-full bg-gold transition-none"
                  style={{ width: i === current ? `${progress}%` : i < current ? '100%' : '0%' }}
                />
              </div>
              {/* 業種名 */}
              <span className={`text-xs tracking-widest uppercase transition-colors ${i === current ? 'text-gold' : 'text-white/40 group-hover:text-white/70'}`}>
                {s.navLabel}
              </span>
            </button>
          ))}
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
