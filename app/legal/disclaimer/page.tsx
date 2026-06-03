export const dynamic = 'force-static'

export default function DisclaimerPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-4">
            LEGAL
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            免責事項
          </h1>
          <div className="w-16 h-1 bg-gold" />
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-sm mb-8">制定日: 2026年5月1日</p>

          {/* 1. 情報の正確性について */}
          <h2 className="text-xl font-bold text-navy mt-8 mb-3">
            1. 情報の正確性について
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Arcrise Labo Inc.（以下「当社」）は、本ウェブサイト（以下「本サイト」）に掲載する情報の正確性・完全性・最新性の確保に努めておりますが、その内容を保証するものではありません。
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            本サイトに掲載されている情報は、予告なく変更・修正・削除される場合があります。掲載情報の利用により生じたいかなる結果についても、当社は一切の責任を負いかねます。重要な判断を行う際は、必ず最新の公式情報をご確認いただくか、専門家にご相談ください。
          </p>

          {/* 2. 損害についての免責 */}
          <h2 className="text-xl font-bold text-navy mt-8 mb-3">
            2. 損害についての免責
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            当社は、本サイトのご利用または利用不能により生じたいかなる直接的・間接的・偶発的・特別・派生的損害（データの滅失、逸失利益、業務の中断等を含むがこれに限られません）についても、当社が損害の可能性について事前に通知を受けていた場合であっても、一切の責任を負いません。
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            本サイトへのアクセスおよびその利用は、利用者ご自身の責任と判断のもとで行ってください。
          </p>

          {/* 3. リンクについて */}
          <h2 className="text-xl font-bold text-navy mt-8 mb-3">
            3. リンクについて
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            本サイトには、当社以外の第三者が運営するウェブサイトへのリンクが含まれる場合があります。これらのリンク先サイトは当社の管理下にはなく、その内容・プライバシーポリシー・運営について当社は一切の責任を負いません。リンク先サイトのご利用は、利用者ご自身の責任において行ってください。
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            本サイトへのリンクを設定する場合は、事前に当社（info@arcrise-labo.com）へご連絡ください。フレーム内表示など、本サイトの内容を当社の運営するサイトと混同させるおそれのある形式でのリンクはお断りする場合があります。
          </p>

          {/* 4. 著作権・知的財産権 */}
          <h2 className="text-xl font-bold text-navy mt-8 mb-3">
            4. 著作権・知的財産権
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            本サイトに掲載されているテキスト・画像・デザイン・ロゴ・その他のコンテンツ（以下「コンテンツ」）に関する著作権その他の知的財産権は、当社または正当な権利を有する第三者に帰属します。
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            コンテンツの複製・転載・改変・再配布・販売等は、当社の書面による事前の許可なく行うことはできません。私的使用の範囲を超える利用を希望される場合は、info@arcrise-labo.com までお問い合わせください。
          </p>

          {/* 5. 準拠法 */}
          <h2 className="text-xl font-bold text-navy mt-8 mb-3">
            5. 準拠法
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            本免責事項は、日本法に準拠し解釈されます。本サイトのご利用または本免責事項に関連して生じた紛争については、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
          </p>

          {/* Footer note */}
          <p className="text-gray-700 leading-relaxed mb-4 mt-12">
            本免責事項に関するお問い合わせは、下記までご連絡ください。
          </p>
          <p className="text-gray-700 leading-relaxed">
            Arcrise Labo Inc.<br />
            メール: info@arcrise-labo.com
          </p>
        </div>
      </section>
    </>
  )
}
