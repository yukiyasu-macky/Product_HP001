"use client";

import { useState } from "react";

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState(0);

  const [form1, setForm1] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [form1Sent, setForm1Sent] = useState(false);

  const [form2, setForm2] = useState({
    nameOrCompany: "",
    email: "",
    investmentScale: "",
    message: "",
  });
  const [form2Sent, setForm2Sent] = useState(false);

  const [form3, setForm3] = useState({
    company: "",
    name: "",
    email: "",
    industry: "",
    employeeSize: "",
    message: "",
  });
  const [form3Sent, setForm3Sent] = useState(false);

  const handleSubmit1 = (e: React.FormEvent) => {
    e.preventDefault();
    setForm1Sent(true);
  };

  const handleSubmit2 = (e: React.FormEvent) => {
    e.preventDefault();
    setForm2Sent(true);
  };

  const handleSubmit3 = (e: React.FormEvent) => {
    e.preventDefault();
    setForm3Sent(true);
  };

  const tabs = [
    "銀行・金融機関の方",
    "投資家・パートナーの方",
    "サービスに関するお問い合わせ",
  ];

  const inputClass =
    "w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-gold text-navy";
  const labelClass = "block text-navy font-semibold text-sm mb-1";
  const textareaClass =
    "w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-gold text-navy h-32 resize-none";
  const selectClass =
    "w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-gold text-navy bg-white";

  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-sm font-semibold tracking-widest mb-4">
            CONTACT
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            お問い合わせ
          </h1>
          <div className="w-16 h-1 bg-gold" />
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-navy py-12 border-t border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 電話 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 border border-gold/50 rounded flex items-center justify-center shrink-0">
                <div className="w-6 h-6 bg-gold/30 rounded-sm" />
              </div>
              <div>
                <p className="text-gold font-semibold text-sm mb-1">電話</p>
                <p className="text-white/70 text-sm">準備中</p>
              </div>
            </div>

            {/* メール */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 border border-gold/50 rounded flex items-center justify-center shrink-0">
                <div className="w-6 h-6 bg-gold/30 rounded-sm" />
              </div>
              <div>
                <p className="text-gold font-semibold text-sm mb-1">メール</p>
                <p className="text-white/70 text-sm">info@arcrise-labo.com</p>
              </div>
            </div>

            {/* 住所 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 border border-gold/50 rounded flex items-center justify-center shrink-0">
                <div className="w-6 h-6 bg-gold/30 rounded-sm" />
              </div>
              <div>
                <p className="text-gold font-semibold text-sm mb-1">住所</p>
                <p className="text-white/70 text-sm">準備中</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Forms Section */}
      <section className="bg-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            お問い合わせフォーム
          </h2>
          <div className="w-16 h-1 bg-gold mb-10" />

          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 mb-10">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={
                  activeTab === index
                    ? "px-5 py-3 rounded font-semibold text-sm bg-navy text-white transition"
                    : "px-5 py-3 rounded font-semibold text-sm bg-white text-navy border border-gray-200 hover:border-gold transition"
                }
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Form 1: 銀行・金融機関 */}
          {activeTab === 0 && (
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm max-w-2xl">
              {form1Sent ? (
                <div className="text-center py-12">
                  <p className="text-navy font-semibold text-lg">
                    送信しました。ありがとうございます。
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit1} className="space-y-6">
                  <div>
                    <label className={labelClass}>会社名</label>
                    <input
                      type="text"
                      className={inputClass}
                      value={form1.company}
                      onChange={(e) =>
                        setForm1({ ...form1, company: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <label className={labelClass}>ご担当者名</label>
                    <input
                      type="text"
                      className={inputClass}
                      value={form1.name}
                      onChange={(e) =>
                        setForm1({ ...form1, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <label className={labelClass}>メールアドレス</label>
                    <input
                      type="email"
                      className={inputClass}
                      value={form1.email}
                      onChange={(e) =>
                        setForm1({ ...form1, email: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <label className={labelClass}>電話番号</label>
                    <input
                      type="tel"
                      className={inputClass}
                      value={form1.phone}
                      onChange={(e) =>
                        setForm1({ ...form1, phone: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className={labelClass}>お問い合わせ内容</label>
                    <textarea
                      className={textareaClass}
                      value={form1.message}
                      onChange={(e) =>
                        setForm1({ ...form1, message: e.target.value })
                      }
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-block bg-gold text-navy font-bold px-8 py-3 rounded hover:opacity-90 transition w-full"
                  >
                    送信する
                  </button>
                </form>
              )}
            </div>
          )}

          {/* Form 2: 投資家・パートナー */}
          {activeTab === 1 && (
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm max-w-2xl">
              {form2Sent ? (
                <div className="text-center py-12">
                  <p className="text-navy font-semibold text-lg">
                    送信しました。ありがとうございます。
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit2} className="space-y-6">
                  <div>
                    <label className={labelClass}>会社名・お名前</label>
                    <input
                      type="text"
                      className={inputClass}
                      value={form2.nameOrCompany}
                      onChange={(e) =>
                        setForm2({ ...form2, nameOrCompany: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <label className={labelClass}>メールアドレス</label>
                    <input
                      type="email"
                      className={inputClass}
                      value={form2.email}
                      onChange={(e) =>
                        setForm2({ ...form2, email: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <label className={labelClass}>投資規模・関心領域</label>
                    <select
                      className={selectClass}
                      value={form2.investmentScale}
                      onChange={(e) =>
                        setForm2({ ...form2, investmentScale: e.target.value })
                      }
                      required
                    >
                      <option value="">選択してください</option>
                      <option value="pre-seed">Pre-Seed</option>
                      <option value="seed">Seed以降</option>
                      <option value="partnership">パートナーシップ</option>
                      <option value="other">その他</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>メッセージ</label>
                    <textarea
                      className={textareaClass}
                      value={form2.message}
                      onChange={(e) =>
                        setForm2({ ...form2, message: e.target.value })
                      }
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-block bg-gold text-navy font-bold px-8 py-3 rounded hover:opacity-90 transition w-full"
                  >
                    送信する
                  </button>
                </form>
              )}
            </div>
          )}

          {/* Form 3: サービスに関するお問い合わせ */}
          {activeTab === 2 && (
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm max-w-2xl">
              {form3Sent ? (
                <div className="text-center py-12">
                  <p className="text-navy font-semibold text-lg">
                    送信しました。ありがとうございます。
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit3} className="space-y-6">
                  <div>
                    <label className={labelClass}>会社名</label>
                    <input
                      type="text"
                      className={inputClass}
                      value={form3.company}
                      onChange={(e) =>
                        setForm3({ ...form3, company: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <label className={labelClass}>ご担当者名</label>
                    <input
                      type="text"
                      className={inputClass}
                      value={form3.name}
                      onChange={(e) =>
                        setForm3({ ...form3, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <label className={labelClass}>メールアドレス</label>
                    <input
                      type="email"
                      className={inputClass}
                      value={form3.email}
                      onChange={(e) =>
                        setForm3({ ...form3, email: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <label className={labelClass}>業界</label>
                    <select
                      className={selectClass}
                      value={form3.industry}
                      onChange={(e) =>
                        setForm3({ ...form3, industry: e.target.value })
                      }
                      required
                    >
                      <option value="">選択してください</option>
                      <option value="construction">建設業</option>
                      <option value="realestate">不動産業</option>
                      <option value="logistics">運送・物流業</option>
                      <option value="other">その他</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>従業員規模</label>
                    <select
                      className={selectClass}
                      value={form3.employeeSize}
                      onChange={(e) =>
                        setForm3({ ...form3, employeeSize: e.target.value })
                      }
                      required
                    >
                      <option value="">選択してください</option>
                      <option value="under50">50名以下</option>
                      <option value="50-200">50-200名</option>
                      <option value="200-500">200-500名</option>
                      <option value="over500">500名以上</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>お問い合わせ内容</label>
                    <textarea
                      className={textareaClass}
                      value={form3.message}
                      onChange={(e) =>
                        setForm3({ ...form3, message: e.target.value })
                      }
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-block bg-gold text-navy font-bold px-8 py-3 rounded hover:opacity-90 transition w-full"
                  >
                    無料相談を申し込む
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
