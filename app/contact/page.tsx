'use client'

import { useState } from 'react'
import Link from 'next/link'

export const dynamic = 'force-static'

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState(0)

  const [form0, setForm0] = useState({
    company: '', name: '', email: '',
    industry: '', industryOther: '', employeeSize: '', message: ''
  })
  const [form0Sent, setForm0Sent] = useState(false)

  const handleSubmit0 = (e: React.FormEvent) => { e.preventDefault(); setForm0Sent(true) }

  const scrollToForm = (type?: string) => {
    if (type === 'service') setActiveTab(0)
    const el = document.getElementById('inquiry-form')
    if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 50)
  }

  const tabs = ['サービス・導入のご相談']

  const inputClass = 'w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:border-navy transition text-sm'
  const labelClass = 'text-navy text-sm font-semibold mb-1 block'
  const textareaClass = 'w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:border-navy transition text-sm h-32 resize-none'
  const selectClass = 'w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:border-navy transition text-sm bg-white'

  return (
    <>
      {/* Hero + 種別カード（統合） */}
      <section className="bg-[#0D1B2A] pt-36 pb-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4">CONTACT</p>
          <h1
            className="text-white font-black mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1 }}
          >
            お問い合わせ
          </h1>
          <div className="section-divider mb-10" />

          {/* 種別カード 1枚 */}
          <div className="max-w-sm">
            <button
              onClick={() => scrollToForm('service')}
              className="group text-left w-full p-8 border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-200"
            >
              <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">01</p>
              <h3 className="text-white font-bold text-lg mb-3">サービス・導入のご相談</h3>
              <p className="text-white/50 text-sm leading-relaxed">AI導入の検討、デモのご依頼、お見積もりなど</p>
              <span className="text-gold text-sm font-semibold mt-6 inline-block group-hover:translate-x-1 transition-transform">→ フォームへ</span>
            </button>
          </div>
        </div>
      </section>

      {/* Forms Section */}
      <section id="inquiry-form" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">INQUIRY FORM</p>
          <h2 className="h2-fluid font-bold text-navy mb-2">
            お問い合わせフォーム
          </h2>
          <div className="section-divider mt-3 mb-10" />

          {/* Tab Navigation */}
          <div className="flex gap-2 flex-wrap mb-8">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={
                  activeTab === index
                    ? 'bg-navy text-white px-6 py-2.5 rounded text-sm font-semibold'
                    : 'bg-white text-gray-600 border border-gray-200 px-6 py-2.5 rounded text-sm hover:border-navy transition'
                }
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Form 0: サービス・導入のご相談 */}
          {activeTab === 0 && (
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm max-w-2xl">
              {form0Sent ? (
                <div className="text-navy bg-green-50 border border-green-200 p-4 rounded">
                  送信しました。ありがとうございます。
                </div>
              ) : (
                <form onSubmit={handleSubmit0} className="space-y-6">
                  <div>
                    <label className={labelClass}>会社名</label>
                    <input type="text" className={inputClass} value={form0.company} onChange={(e) => setForm0({ ...form0, company: e.target.value })} required />
                  </div>
                  <div>
                    <label className={labelClass}>担当者名</label>
                    <input type="text" className={inputClass} value={form0.name} onChange={(e) => setForm0({ ...form0, name: e.target.value })} required />
                  </div>
                  <div>
                    <label className={labelClass}>メール</label>
                    <input type="email" className={inputClass} value={form0.email} onChange={(e) => setForm0({ ...form0, email: e.target.value })} required />
                  </div>
                  <div>
                    <label className={labelClass}>業界</label>
                    <select className={selectClass} value={form0.industry} onChange={(e) => setForm0({ ...form0, industry: e.target.value })} required>
                      <option value="">選択してください</option>
                      <option value="construction">建設業</option>
                      <option value="realestate">不動産業</option>
                      <option value="logistics">運送・物流業</option>
                      <option value="other">その他</option>
                    </select>
                    {form0.industry === 'other' && (
                      <div className="mt-3">
                        <label className={labelClass}>業界・業種を記入してください</label>
                        <input
                          type="text"
                          className={inputClass}
                          placeholder="例：製造業、医療・福祉 など"
                          value={form0.industryOther}
                          onChange={(e) => setForm0({ ...form0, industryOther: e.target.value })}
                          required
                        />
                      </div>
                    )}
                  </div>
                  <div>
                    <label className={labelClass}>従業員規模</label>
                    <select className={selectClass} value={form0.employeeSize} onChange={(e) => setForm0({ ...form0, employeeSize: e.target.value })} required>
                      <option value="">選択してください</option>
                      <option value="under50">50名以下</option>
                      <option value="50-200">50-200名</option>
                      <option value="200-500">200-500名</option>
                      <option value="over500">500名以上</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>お問い合わせ内容</label>
                    <textarea className={textareaClass} value={form0.message} onChange={(e) => setForm0({ ...form0, message: e.target.value })} required />
                  </div>
                  <button type="submit" className="w-full bg-navy text-white font-semibold py-3.5 rounded text-sm hover:bg-[#142d4a] transition-colors">
                    送信する
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
