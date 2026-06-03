export const dynamic = 'force-static'

const rows = [
  { dt: '販売業者', dd: 'Arcrise Labo Inc.（アークライズラボ株式会社）' },
  { dt: '代表者', dd: '内海暢介' },
  { dt: '所在地', dd: '準備中' },
  {
    dt: '電話番号',
    dd: '準備中（お問い合わせはメールにてお願いします）',
  },
  { dt: 'メールアドレス', dd: 'info@arcrise-labo.com' },
  { dt: '販売価格', dd: '個別見積（詳細はお問い合わせください）' },
  { dt: '支払方法', dd: '銀行振込' },
  { dt: '支払時期', dd: '契約締結後、請求書に記載の期日まで' },
  { dt: 'サービス提供時期', dd: '契約締結後、個別に定める期日' },
  { dt: '返品・キャンセル', dd: '契約締結後のキャンセルは原則不可' },
  { dt: '特別条件', dd: '個別契約書に記載' },
]

export default function TokushohoPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-4">
            LEGAL
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            特定商取引法に基づく表記
          </h1>
          <div className="w-16 h-1 bg-gold" />
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-sm mb-8">
            最終更新日: 2026年6月3日
          </p>

          <dl className="divide-y divide-gray-100">
            {rows.map(({ dt, dd }) => (
              <div key={dt} className="flex flex-col sm:flex-row py-5 gap-2">
                <dt className="text-navy font-semibold sm:w-48 shrink-0">{dt}</dt>
                <dd className="text-gray-700 leading-relaxed">{dd}</dd>
              </div>
            ))}
          </dl>

          <p className="text-gray-700 leading-relaxed mb-4 mt-12">
            本表記は特定商取引に関する法律第11条に基づき掲載しています。記載内容に変更が生じた場合は、本ページを更新します。
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            ご不明な点がございましたら、メールアドレス（info@arcrise-labo.com）までお問い合わせください。
          </p>
        </div>
      </section>
    </>
  )
}
