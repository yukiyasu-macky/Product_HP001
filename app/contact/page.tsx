'use client'

import { useState } from 'react'
import Link from 'next/link'

export const dynamic = 'force-static'

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState(0)

  const [form1, setForm1] = useState({ company: '', name: '', email: '', phone: '', message: '' })
  const [form1Sent, setForm1Sent] = useState(false)

  const [form2, setForm2] = useState({ nameOrCompany: '', email: '', investmentScale: '', message: '' })
  const [form2Sent, setForm2Sent] = useState(false)

  const [form3, setForm3] = useState({ company: '', name: '', email: '', industry: '', employeeSize: '', message: '' })
  const [form3Sent, setForm3Sent] = useState(false)

  const [form4, setForm4] = useState({ name: '', email: '', type: '', message: '' })
  const [form4Sent, setForm4Sent] = useState(false)

  const handleSubmit1 = (e: React.FormEvent) => { e.preventDefault(); setForm1Sent(true) }
  const handleSubmit2 = (e: React.FormEvent) => { e.preventDefault(); setForm2Sent(true) }
  const handleSubmit3 = (e: React.FormEvent) => { e.preventDefault(); setForm3Sent(true) }
  const handleSubmit4 = (e: React.FormEvent) => { e.preventDefault(); setForm4Sent(true) }

  const scrollToForm = (tabIndex: number) => {
    setActiveTab(tabIndex)
    const el = document.getElementById('inquiry-form')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const tabs = [
    '銀行・金融機関の方',
    '投資家・パートナーの方',
    'サービスに関するお問い合わせ',
    '採用エントリー',
  ]

  const inputClass = 'w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:border-navy transition text-sm'
  const labelClass = 'text-navy text-sm font-semibold mb-1 block'
  const textareaClass = 'w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:border-navy transition text-sm h-32 resize-none'
  const selectClass = 'w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:border-navy transition text-sm bg-white'

  return (
    <>
      {/* Hero */}
      <section className="bg-[#F8F9FA] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">CONTACT</p>
          <h1 className="h1-fluid font-bold text-navy mb-4">
            お問い合わせ
          </h1>
          <div className="section-divider mt-3" />
        </div>
      </section>

      {/* Inquiry Type Cards */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">SELECT TYPE</p>
          <h2 className="h2-fluid font-bold text-navy mb-2">お問い合わせ種別</h2>
          <div className="section-divider mt-3 mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Card 1: サービス・導入のご相談 */}
            <button
              onClick={() => scrollToForm(2)}
              className="card-hover text-left bg-white border border-gray-200 rounded-xl p-8 hover:border-gold hover:shadow-md transition-all group"
            >
              <div className="text-gold mb-5">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="14" width="30" height="22" />
                  <polyline points="5,14 20,4 35,14" />
                  <rect x="15" y="24" width="10" height="12" />
                  <line x1="12" y1="20" x2="16" y2="20" />
                  <line x1="24" y1="20" x2="28" y2="20" />
                </svg>
              </div>
              <h3 className="text-navy font-bold text-lg mb-2">サービス・導入のご相談</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                AI導入の検討、デモのご依頼、お見積もりなど
              </p>
              <div className="flex justify-end">
                <span className="text-gold text-xl font-bold group-hover:translate-x-1 transition-transform inline-block">→</span>
              </div>
            </button>

            {/* Card 2: 資料請求 */}
            <button
              onClick={() => scrollToForm(2)}
              className="card-hover text-left bg-white border border-gray-200 rounded-xl p-8 hover:border-gold hover:shadow-md transition-all group"
            >
              <div className="text-gold mb-5">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="8" y="4" width="24" height="32" rx="2" />
                  <line x1="14" y1="13" x2="26" y2="13" />
                  <line x1="14" y1="19" x2="26" y2="19" />
                  <line x1="14" y1="25" x2="22" y2="25" />
                </svg>
              </div>
              <h3 className="text-navy font-bold text-lg mb-2">資料請求</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                会社資料・サービス詳細資料のご請求
              </p>
              <div className="flex justify-end">
                <span className="text-gold text-xl font-bold group-hover:translate-x-1 transition-transform inline-block">→</span>
              </div>
            </button>

            {/* Card 3: 採用エントリー */}
            <button
              onClick={() => scrollToForm(3)}
              className="card-hover text-left bg-white border border-gray-200 rounded-xl p-8 hover:border-gold hover:shadow-md transition-all group"
            >
              <div className="text-gold mb-5">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="20" cy="13" r="7" />
                  <path d="M6 36 C6 27 12 22 20 22 C28 22 34 27 34 36" />
                </svg>
              </div>
              <h3 className="text-navy font-bold text-lg mb-2">採用エントリー</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                求人へのご応募、カジュアル面談のご希望
              </p>
              <div className="flex justify-end">
                <span className="text-gold text-xl font-bold group-hover:translate-x-1 transition-transform inline-block">→</span>
              </div>
            </button>

          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-white py-12 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <div className="bg-[#F8F9FA] border border-gray-200 rounded-xl p-6 text-center w-full max-w-sm">
            <p className="text-navy font-semibold text-sm mb-2">メール</p>
            <p className="text-gray-600 text-sm">info@arcrise-labo.com</p>
          </div>
        </div>
      </section>

      {/* Forms Section */}
      <section id="inquiry-form" className="bg-[#F8F9FA] py-20">
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

          {/* Form 1: 銀行・金融機関 */}
          {activeTab === 0 && (
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm max-w-2xl">
              {form1Sent ? (
                <div className="text-navy bg-green-50 border border-green-200 p-4 rounded">
                  送信しました。ありがとうございます。
                </div>
              ) : (
                <form onSubmit={handleSubmit1} className="space-y-6">
                  <div>
                    <label className={labelClass}>会社名</label>
                    <input type="text" className={inputClass} value={form1.company} onChange={(e) => setForm1({ ...form1, company: e.target.value })} required />
                  </div>
                  <div>
                    <label className={labelClass}>担当者名</label>
                    <input type="text" className={inputClass} value={form1.name} onChange={(e) => setForm1({ ...form1, name: e.target.value })} required />
                  </div>
                  <div>
                    <label className={labelClass}>メール</label>
                    <input type="email" className={inputClass} value={form1.email} onChange={(e) => setForm1({ ...form1, email: e.target.value })} required />
                  </div>
                  <div>
                    <label className={labelClass}>電話</label>
                    <input type="tel" className={inputClass} value={form1.phone} onChange={(e) => setForm1({ ...form1, phone: e.target.value })} />
                  </div>
                  <div>
                    <label className={labelClass}>お問い合わせ内容</label>
                    <textarea className={textareaClass} value={form1.message} onChange={(e) => setForm1({ ...form1, message: e.target.value })} required />
                  </div>
                  <button type="submit" className="w-full bg-navy text-white font-semibold py-3.5 rounded text-sm hover:bg-[#1a2f45] transition-colors">
                    送信する
                  </button>
                </form>
              )}
            </div>
          )}

          {/* Form 2: 投資家・パートナー */}
          {activeTab === 1 && (
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm max-w-2xl">
              {form2Sent ? (
                <div className="text-navy bg-green-50 border border-green-200 p-4 rounded">
                  送信しました。ありがとうございます。
                </div>
              ) : (
                <form onSubmit={handleSubmit2} className="space-y-6">
                  <div>
                    <label className={labelClass}>会社名・お名前</label>
                    <input type="text" className={inputClass} value={form2.nameOrCompany} onChange={(e) => setForm2({ ...form2, nameOrCompany: e.target.value })} required />
                  </div>
                  <div>
                    <label className={labelClass}>メール</label>
                    <input type="email" className={inputClass} value={form2.email} onChange={(e) => setForm2({ ...form2, email: e.target.value })} required />
                  </div>
                  <div>
                    <label className={labelClass}>投資規模</label>
                    <select className={selectClass} value={form2.investmentScale} onChange={(e) => setForm2({ ...form2, investmentScale: e.target.value })} required>
                      <option value="">選択してください</option>
                      <option value="pre-seed">Pre-Seed</option>
                      <option value="seed">Seed以降</option>
                      <option value="partnership">パートナーシップ</option>
                      <option value="other">その他</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>メッセージ</label>
                    <textarea className={textareaClass} value={form2.message} onChange={(e) => setForm2({ ...form2, message: e.target.value })} required />
                  </div>
                  <button type="submit" className="w-full bg-navy text-white font-semibold py-3.5 rounded text-sm hover:bg-[#1a2f45] transition-colors">
                    送信する
                  </button>
                </form>
              )}
            </div>
          )}

          {/* Form 3: サービスに関するお問い合わせ */}
          {activeTab === 2 && (
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm max-w-2xl">
              {form3Sent ? (
                <div className="text-navy bg-green-50 border border-green-200 p-4 rounded">
                  送信しました。ありがとうございます。
                </div>
              ) : (
                <form onSubmit={handleSubmit3} className="space-y-6">
                  <div>
                    <label className={labelClass}>会社名</label>
                    <input type="text" className={inputClass} value={form3.company} onChange={(e) => setForm3({ ...form3, company: e.target.value })} required />
                  </div>
                  <div>
                    <label className={labelClass}>担当者名</label>
                    <input type="text" className={inputClass} value={form3.name} onChange={(e) => setForm3({ ...form3, name: e.target.value })} required />
                  </div>
                  <div>
                    <label className={labelClass}>メール</label>
                    <input type="email" className={inputClass} value={form3.email} onChange={(e) => setForm3({ ...form3, email: e.target.value })} required />
                  </div>
                  <div>
                    <label className={labelClass}>業界</label>
                    <select className={selectClass} value={form3.industry} onChange={(e) => setForm3({ ...form3, industry: e.target.value })} required>
                      <option value="">選択してください</option>
                      <option value="construction">建設業</option>
                      <option value="realestate">不動産業</option>
                      <option value="logistics">運送・物流業</option>
                      <option value="other">その他</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>従業員規模</label>
                    <select className={selectClass} value={form3.employeeSize} onChange={(e) => setForm3({ ...form3, employeeSize: e.target.value })} required>
                      <option value="">選択してください</option>
                      <option value="under50">50名以下</option>
                      <option value="50-200">50-200名</option>
                      <option value="200-500">200-500名</option>
                      <option value="over500">500名以上</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>お問い合わせ内容</label>
                    <textarea className={textareaClass} value={form3.message} onChange={(e) => setForm3({ ...form3, message: e.target.value })} required />
                  </div>
                  <button type="submit" className="w-full bg-navy text-white font-semibold py-3.5 rounded text-sm hover:bg-[#1a2f45] transition-colors">
                    送信する
                  </button>
                </form>
              )}
            </div>
          )}

          {/* Form 4: 採用エントリー */}
          {activeTab === 3 && (
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm max-w-2xl">
              {form4Sent ? (
                <div className="text-navy bg-green-50 border border-green-200 p-4 rounded">
                  送信しました。ありがとうございます。
                </div>
              ) : (
                <form onSubmit={handleSubmit4} className="space-y-6">
                  <div>
                    <label className={labelClass}>お名前</label>
                    <input type="text" className={inputClass} value={form4.name} onChange={(e) => setForm4({ ...form4, name: e.target.value })} required />
                  </div>
                  <div>
                    <label className={labelClass}>メール</label>
                    <input type="email" className={inputClass} value={form4.email} onChange={(e) => setForm4({ ...form4, email: e.target.value })} required />
                  </div>
                  <div>
                    <label className={labelClass}>ご希望の種別</label>
                    <select className={selectClass} value={form4.type} onChange={(e) => setForm4({ ...form4, type: e.target.value })} required>
                      <option value="">選択してください</option>
                      <option value="apply">求人への応募</option>
                      <option value="casual">カジュアル面談</option>
                      <option value="other">その他</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>メッセージ・自己紹介</label>
                    <textarea className={textareaClass} value={form4.message} onChange={(e) => setForm4({ ...form4, message: e.target.value })} required />
                  </div>
                  <button type="submit" className="w-full bg-navy text-white font-semibold py-3.5 rounded text-sm hover:bg-[#1a2f45] transition-colors">
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
