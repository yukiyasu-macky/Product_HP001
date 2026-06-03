'use client'
import { useState } from 'react'
import Link from 'next/link'

const navItems = [
  { href: '/about', label: '会社概要' },
  { href: '/mission', label: 'ミッション' },
  { href: '/service', label: 'サービス' },
  { href: '/results', label: '実績' },
  { href: '/team', label: 'チーム' },
  { href: '/roadmap', label: '事業計画' },
  { href: '/ir', label: 'IR' },
  { href: '/news', label: 'ニュース' },
  { href: '/recruit', label: '採用' },
  { href: '/contact', label: 'お問い合わせ' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-gold font-bold text-xl tracking-widest">ARCRISE</span>
            <span className="text-white/70 font-light text-sm tracking-wider">LABO</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/70 hover:text-gold text-sm tracking-wide transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Hamburger */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="メニュー"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-gold transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 bg-white transition-all ${open ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-gold transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-navy border-t border-gold/20">
          <nav className="flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-6 py-3 text-white/80 hover:text-gold hover:bg-gold/5 border-b border-white/5 transition"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
