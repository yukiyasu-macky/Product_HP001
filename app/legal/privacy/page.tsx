export const dynamic = 'force-static';

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-gold/10 text-gold border border-gold/30 text-sm px-3 py-1 rounded mb-4">
            Legal
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            プライバシーポリシー
          </h1>
          <div className="w-16 h-1 bg-gold mx-auto" />
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-sm mb-8">制定日：2026年5月1日</p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Arcrise Labo Inc.（以下「当社」）は、お客様の個人情報の保護を重要な社会的責務と認識し、以下のプライバシーポリシー（以下「本ポリシー」）を定め、適切に取り扱います。
          </p>

          {/* 1. 基本方針 */}
          <h2 className="text-xl font-bold text-navy mt-8 mb-3">1. 基本方針</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            当社は、個人情報の保護に関する法律（個人情報保護法）その他の関連法令・ガイドラインを遵守し、お客様からお預かりした個人情報を適正かつ安全に取り扱います。当社は、個人情報の適切な取得・利用・管理に努め、継続的な改善を行います。
          </p>

          {/* 2. 取得する個人情報 */}
          <h2 className="text-xl font-bold text-navy mt-8 mb-3">2. 取得する個人情報</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            当社は、サービスの提供にあたり、以下の個人情報を取得することがあります。
          </p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-1 pl-2">
            <li>氏名</li>
            <li>メールアドレス</li>
            <li>電話番号</li>
            <li>会社名・所属部署・役職</li>
            <li>お問い合わせ内容・ご相談内容</li>
            <li>Cookie・アクセスログ等の利用情報（詳細は第7条参照）</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            個人情報は、お客様ご本人から適正な手段により取得します。
          </p>

          {/* 3. 利用目的 */}
          <h2 className="text-xl font-bold text-navy mt-8 mb-3">3. 利用目的</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            当社は、取得した個人情報を以下の目的のために利用します。
          </p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-1 pl-2">
            <li>お問い合わせへの対応および回答</li>
            <li>当社サービスのご提供・運営・改善</li>
            <li>サービスに関するご案内・情報提供（メールマガジン等）</li>
            <li>契約の締結・履行および請求・支払い処理</li>
            <li>アンケートの実施および統計データの作成（個人を特定しない形式）</li>
            <li>法令に基づく対応</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            上記以外の目的で個人情報を利用する場合は、事前にお客様の同意を得るものとします。
          </p>

          {/* 4. 第三者提供 */}
          <h2 className="text-xl font-bold text-navy mt-8 mb-3">4. 第三者提供</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            当社は、以下のいずれかに該当する場合を除き、お客様の個人情報を第三者に提供しません。
          </p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-1 pl-2">
            <li>お客様の事前の同意がある場合</li>
            <li>法令に基づき開示が必要な場合</li>
            <li>人の生命・身体・財産の保護のために必要で、本人の同意取得が困難な場合</li>
            <li>公衆衛生の向上または児童の健全育成のために必要で、本人の同意取得が困難な場合</li>
            <li>国の機関・地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            なお、当社はサービス提供のために業務委託先（クラウドサービス事業者等）に個人情報を預託することがあります。その場合、適切な監督のもとで取り扱いを委託します。
          </p>

          {/* 5. 安全管理措置 */}
          <h2 className="text-xl font-bold text-navy mt-8 mb-3">5. 安全管理措置</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            当社は、お客様の個人情報の漏えい・滅失・毀損を防止するため、以下の安全管理措置を講じます。
          </p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-1 pl-2">
            <li>個人情報へのアクセス権限の管理および制限</li>
            <li>SSL/TLSによる通信の暗号化</li>
            <li>個人情報取扱いに関する従業員への教育・研修の実施</li>
            <li>個人情報の取り扱いに関する規程の整備および定期的な見直し</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            個人情報の漏えい等が発生した場合は、個人情報保護法の定めに従い、速やかに必要な対応を行います。
          </p>

          {/* 6. 開示・訂正・削除 */}
          <h2 className="text-xl font-bold text-navy mt-8 mb-3">6. 開示・訂正・削除</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            お客様は、当社が保有するご自身の個人情報について、以下の権利を有します。
          </p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-1 pl-2">
            <li>利用目的の通知</li>
            <li>保有個人データの開示</li>
            <li>内容の訂正・追加・削除</li>
            <li>利用の停止・消去</li>
            <li>第三者への提供の停止</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            上記のご請求は、本ポリシー第8条のお問い合わせ窓口にご連絡ください。ご請求者がご本人であることを確認のうえ、法令に従い合理的な期間内に対応いたします。なお、法令の規定により対応できない場合はその旨をお知らせします。
          </p>

          {/* 7. Cookie・アクセス解析 */}
          <h2 className="text-xl font-bold text-navy mt-8 mb-3">7. Cookie・アクセス解析</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            当社のウェブサイトでは、利便性の向上およびアクセス状況の把握を目的として、Cookie（クッキー）を使用することがあります。Cookieは、お客様のブラウザに保存される小さなデータファイルです。
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            当社では、Google Analytics等のアクセス解析ツールを利用して、ウェブサイトの利用状況を分析する場合があります。これらのツールはCookieを使用してデータを収集しますが、個人を特定する情報は含みません。収集されたデータはGoogleのプライバシーポリシーに従って管理されます。
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            お客様はブラウザの設定によりCookieを無効にすることができます。ただし、一部のサービスが正常に機能しなくなる場合があります。
          </p>

          {/* 8. お問い合わせ */}
          <h2 className="text-xl font-bold text-navy mt-8 mb-3">8. お問い合わせ</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            本ポリシーに関するお問い合わせ、個人情報の開示・訂正・削除等のご請求は、以下の窓口までご連絡ください。
          </p>
          <div className="bg-light rounded-lg p-6 mb-4">
            <p className="text-gray-700 leading-relaxed">
              <span className="font-bold text-navy">事業者名：</span>Arcrise Labo Inc.<br />
              <span className="font-bold text-navy">代表者：</span>内海暢介<br />
              <span className="font-bold text-navy">所在地：</span>準備中<br />
              <span className="font-bold text-navy">お問い合わせ：</span>当社ウェブサイトのお問い合わせフォームよりご連絡ください。
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            ご本人確認のため、お名前・ご連絡先・ご請求内容を明記いただくようお願いします。
          </p>

          {/* 9. 改定について */}
          <h2 className="text-xl font-bold text-navy mt-8 mb-3">9. 改定について</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            当社は、法令の改正、社会情勢の変化、業務の変更等に応じて、本ポリシーを改定することがあります。改定後のポリシーは、当社ウェブサイトへの掲載をもって効力を生じるものとします。重要な変更がある場合は、ウェブサイト上での告知等、適切な方法によりお客様にお知らせします。
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            最新のプライバシーポリシーは常に当ページにてご確認いただけます。
          </p>

          <div className="border-t border-gray-200 mt-12 pt-8">
            <p className="text-gray-500 text-sm text-right">
              制定日：2026年5月1日<br />
              Arcrise Labo Inc.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
