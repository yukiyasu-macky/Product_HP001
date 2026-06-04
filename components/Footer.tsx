import Link from 'next/link'

const legalLinks = [
  { href: '/legal/privacy', label: 'プライバシーポリシー' },
]

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-gold font-bold text-lg tracking-widest">ARCRISE</span>
              <span className="text-white/50 text-sm tracking-wider">LABS</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              地方中堅企業にAIを届け、<br />日本の産業を再生する。
            </p>
          </div>
          <div>
            <h4 className="text-gold text-sm font-semibold tracking-wider mb-4">PAGES</h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                ['/about', '会社概要'],
                ['/service', 'サービス'],
                ['/contact', 'お問い合わせ'],
              ].map(([href, label]) => (
                <Link key={href} href={href} className="text-white/50 hover:text-gold text-sm transition">
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-gold text-sm font-semibold tracking-wider mb-4">LEGAL</h4>
            <div className="flex flex-col gap-2">
              {legalLinks.map((item) => (
                <Link key={item.href} href={item.href} className="text-white/50 hover:text-gold text-sm transition">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gold/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">© 2026 Arcrise Labs株式会社 All rights reserved.</p>
          <Link href="/contact" className="text-gold text-sm hover:underline">
            お問い合わせ →
          </Link>
        </div>
      </div>
    </footer>
  )
}
