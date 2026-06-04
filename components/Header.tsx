'use client'
import { useState } from 'react'
import Link from 'next/link'

const navItems = [
  { href: '/about', label: '会社概要' },
  { href: '/mission', label: 'ミッション' },
  { href: '/service', label: 'サービス' },
  { href: '/results', label: '実績' },
  { href: '/team', label: 'チーム' },
  { href: '/news', label: 'ニュース' },
  { href: '/recruit', label: '採用' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-1.5 shrink-0">
            <span className="text-navy font-black text-lg tracking-[0.2em]">ARCRISE</span>
            <span className="text-gray-400 font-light text-sm tracking-wider">LABO</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-navy text-sm font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-2 bg-navy text-white text-sm font-semibold px-5 py-2 rounded hover:bg-[#1a2f45] transition-colors"
            >
              お問い合わせ
            </Link>
          </nav>

          {/* Hamburger */}
          <button
            className="lg:hidden p-2 text-navy"
            onClick={() => setOpen(!open)}
            aria-label="メニュー"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-navy transition-all origin-center ${open ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 bg-navy transition-all ${open ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-navy transition-all origin-center ${open ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-6 py-3.5 text-gray-700 hover:text-navy hover:bg-gray-50 border-b border-gray-100 text-sm font-medium transition-colors"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-6 py-4">
              <Link
                href="/contact"
                className="block bg-navy text-white text-sm text-center font-semibold py-3 rounded hover:bg-[#1a2f45] transition-colors"
                onClick={() => setOpen(false)}
              >
                お問い合わせ
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
