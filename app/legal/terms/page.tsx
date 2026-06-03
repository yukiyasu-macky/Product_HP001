export const dynamic = 'force-static';

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-gold/10 text-gold border border-gold/30 text-sm px-3 py-1 rounded mb-4">
            Legal
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            利用規約
          </h1>
          <div className="w-16 h-1 bg-gold mx-auto" />
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-sm mb-8">制定日: 2026年5月1日</p>

          <p className="text-gray-700 leading-relaxed mb-4">
            本利用規約（以下「本規約」）は、Arcrise Labo Inc.（以下「当社」）が提供するサービス（以下「本サービス」）の利用条件を定めるものです。本サービスをご利用いただく前に、本規約をよくお読みください。本サービスをご利用いただいた場合、本規約に同意したものとみなします。
          </p>

          {/* 1. 適用範囲 */}
          <h2 className="text-xl font-bold text-navy mt-8 mb-3">
            第1条（適用範囲）
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            本規約は、当社が提供するすべての製品・サービス・ウェブサイト（以下、総称して「本サービス」）に適用されます。ユーザーが本サービスにアクセスまたは利用することにより、本規約の全条項に同意したものとみなします。当社が別途定める個別規約、ガイドライン、ポリシー等は本規約の一部を構成し、本規約と個別規約が矛盾する場合は個別規約が優先されます。
          </p>

          {/* 2. 定義 */}
          <h2 className="text-xl font-bold text-navy mt-8 mb-3">
            第2条（定義）
          </h2>
          <p className="text-gray-700 leading-relaxed mb-2">
            本規約において使用する用語の定義は以下のとおりです。
          </p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-1 pl-2">
            <li>「ユーザー」とは、本サービスを利用するすべての個人・法人・団体を指します。</li>
            <li>「コンテンツ」とは、本サービスを通じてアクセスできるテキスト、画像、映像、音声、データ等の一切の情報を指します。</li>
            <li>「アカウント」とは、ユーザーが本サービスを利用するために登録する資格情報を指します。</li>
            <li>「知的財産権」とは、著作権、特許権、商標権、意匠権、その他一切の知的財産に関する権利を指します。</li>
          </ul>

          {/* 3. サービスの利用 */}
          <h2 className="text-xl font-bold text-navy mt-8 mb-3">
            第3条（サービスの利用）
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            ユーザーは、本規約を遵守することを条件として、当社が定める方法により本サービスを利用することができます。アカウントを作成する場合、ユーザーは正確かつ最新の情報を提供し、その情報を常に最新の状態に保つ義務を負います。アカウントの管理はユーザー自身の責任において行われ、アカウントを通じて行われたすべての行為についてユーザーが責任を負います。未成年者が本サービスを利用する場合は、法定代理人の同意が必要です。
          </p>

          {/* 4. 禁止事項 */}
          <h2 className="text-xl font-bold text-navy mt-8 mb-3">
            第4条（禁止事項）
          </h2>
          <p className="text-gray-700 leading-relaxed mb-2">
            ユーザーは、本サービスの利用にあたり、以下の行為を行ってはなりません。
          </p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-1 pl-2">
            <li>法令または公序良俗に違反する行為</li>
            <li>当社または第三者の知的財産権、プライバシー権、名誉権その他の権利を侵害する行為</li>
            <li>当社または第三者を誹謗中傷し、または名誉・信用を傷つける行為</li>
            <li>虚偽の情報を登録・送信する行為</li>
            <li>本サービスのシステムへの不正アクセス、改ざん、またはウイルスの送信等の行為</li>
            <li>本サービスの運営を妨害する行為</li>
            <li>スパム、フィッシング、マルウェア配布その他の迷惑行為</li>
            <li>本サービスを商業目的で無断で複製・転用する行為</li>
            <li>その他当社が不適切と判断する行為</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            当社は、上記禁止事項に違反したユーザーのアカウントを事前通知なく停止または削除する権利を有します。
          </p>

          {/* 5. 知的財産権 */}
          <h2 className="text-xl font-bold text-navy mt-8 mb-3">
            第5条（知的財産権）
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            本サービスおよび本サービスを通じて提供されるすべてのコンテンツ（テキスト、画像、ロゴ、デザイン、ソフトウェア等を含む）に関する知的財産権は、当社または正当な権利者に帰属します。ユーザーは、当社の書面による事前の承諾なく、これらを複製、改変、転載、配布、販売、または二次利用することはできません。ユーザーが本サービスを通じてアップロード・投稿したコンテンツについては、ユーザーが必要な権利を保有していることを表明・保証するものとします。
          </p>

          {/* 6. 免責事項 */}
          <h2 className="text-xl font-bold text-navy mt-8 mb-3">
            第6条（免責事項）
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            当社は、本サービスの内容の正確性、完全性、有用性について保証しません。本サービスは現状有姿（as-is）で提供され、当社は明示・黙示を問わず一切の保証を行いません。当社は、本サービスの利用または利用不能により生じたいかなる損害（直接損害、間接損害、逸失利益、データ損失等を含む）についても、当社に故意または重大な過失がない限り、責任を負いません。また、ユーザーと第三者との間で生じたトラブルについて、当社は関与する義務を負いません。
          </p>

          {/* 7. サービスの変更・中断 */}
          <h2 className="text-xl font-bold text-navy mt-8 mb-3">
            第7条（サービスの変更・中断）
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            当社は、ユーザーへの事前の通知なく、本サービスの内容を変更、追加、または一部もしくは全部を中断・終了することがあります。システムの保守・点検、障害対応、天災地変、その他やむを得ない事由による本サービスの中断・停止について、当社は一切の責任を負いません。サービスの終了にあたっては、可能な限り事前にユーザーへ通知するよう努めます。
          </p>

          {/* 8. 準拠法・管轄 */}
          <h2 className="text-xl font-bold text-navy mt-8 mb-3">
            第8条（準拠法・管轄裁判所）
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            本規約の解釈および適用は、日本法に準拠します。本サービスに関して当社とユーザーの間で紛争が生じた場合、東京地方裁判所または東京簡易裁判所を第一審の専属的合意管轄裁判所とします。
          </p>

          {/* 9. お問い合わせ */}
          <h2 className="text-xl font-bold text-navy mt-8 mb-3">
            第9条（お問い合わせ）
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            本規約に関するお問い合わせは、以下の窓口までご連絡ください。
          </p>
          <div className="border border-gray-200 rounded-lg p-6 shadow-sm bg-white">
            <p className="text-gray-700 leading-relaxed">
              <span className="font-bold text-navy">Arcrise Labo Inc.</span><br />
              メール: <a href="mailto:info@arcriselabo.jp" className="text-gold hover:underline">info@arcriselabo.jp</a>
            </p>
          </div>

          <p className="text-gray-500 text-sm mt-12">
            以上<br />
            制定日: 2026年5月1日<br />
            Arcrise Labo Inc.
          </p>
        </div>
      </section>
    </>
  );
}
