import FadeIn from '@/components/FadeIn'

export const dynamic = 'force-static';

export default function CookiePolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#F8F9FA] pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">Legal</p>
          <h1 className="h2-fluid font-bold text-navy mb-2">
            Cookieポリシー
          </h1>
          <p className="text-gold text-sm">制定日：2026年5月1日</p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16">
        <FadeIn>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-gray-700 leading-relaxed mb-4 text-sm">
              Arcrise Labo Inc.（以下「当社」）は、当社が運営するウェブサイト（以下「本サイト」）において Cookie を使用しています。本ポリシーでは、Cookie の概要、使用目的、および無効化の方法についてご説明します。本サイトをご利用いただくことで、本ポリシーに同意いただいたものとみなします。
            </p>

            <h2 className="text-navy text-xl font-bold mt-10 mb-3 border-b border-gray-100 pb-2">1. Cookieとは</h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-sm">
              Cookie とは、ウェブサイトがお客様のブラウザに保存する小さなテキストファイルです。お客様が本サイトを再訪問した際に Cookie が読み取られることで、サイトがお客様の設定や行動を記憶し、より快適な閲覧体験を提供することができます。Cookie そのものはプログラムではなく、ウイルスやマルウェアを含みません。
            </p>

            <h2 className="text-navy text-xl font-bold mt-10 mb-3 border-b border-gray-100 pb-2">2. 使用するCookieの種類</h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-sm">
              当社は、以下の種類の Cookie を使用しています。
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm text-gray-700 border-collapse">
                <thead>
                  <tr className="bg-[#F8F9FA]">
                    <th className="border border-gray-200 px-4 py-2 text-left text-navy font-semibold">種類</th>
                    <th className="border border-gray-200 px-4 py-2 text-left text-navy font-semibold">目的</th>
                    <th className="border border-gray-200 px-4 py-2 text-left text-navy font-semibold">保存期間</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2">必須Cookie</td>
                    <td className="border border-gray-200 px-4 py-2">サイトの基本機能の提供</td>
                    <td className="border border-gray-200 px-4 py-2">セッション〜1年</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2">分析・パフォーマンスCookie</td>
                    <td className="border border-gray-200 px-4 py-2">アクセス解析・改善</td>
                    <td className="border border-gray-200 px-4 py-2">最大26ヶ月</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2">機能Cookie</td>
                    <td className="border border-gray-200 px-4 py-2">ユーザー設定の記憶</td>
                    <td className="border border-gray-200 px-4 py-2">最大1年</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-navy text-xl font-bold mt-10 mb-3 border-b border-gray-100 pb-2">3. 必須Cookie</h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-sm">
              必須 Cookie は、本サイトを正常に動作させるために不可欠なものです。これらの Cookie がなければ、ページのナビゲーションやフォームの送信など、基本的な機能が利用できなくなります。必須 Cookie はお客様の同意なく設定されますが、個人を特定できる情報を収集することはありません。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 text-sm">
              必須 Cookie の主な用途は以下のとおりです。
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4 pl-2">
              <li>セッション管理（ログイン状態の維持など）</li>
              <li>セキュリティの確保（CSRF 対策トークンなど）</li>
              <li>負荷分散・サーバー割り当ての最適化</li>
            </ul>

            <h2 className="text-navy text-xl font-bold mt-10 mb-3 border-b border-gray-100 pb-2">4. 分析・パフォーマンスCookie（Google Analytics等）</h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-sm">
              当社は、本サイトのアクセス状況や利用状況を把握し、コンテンツ品質の向上を目的として、Google LLC が提供する Google Analytics を使用しています。Google Analytics は Cookie を利用してお客様の行動データ（訪問ページ、滞在時間、参照元など）を匿名で収集・分析します。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 text-sm">
              収集される主なデータは以下のとおりです。
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4 pl-2">
              <li>閲覧したページの URL およびタイトル</li>
              <li>本サイトへの流入経路（検索エンジン・SNS・参照元 URL）</li>
              <li>デバイス種別・OS・ブラウザの種類</li>
              <li>大まかな地域情報（国・都道府県レベル）</li>
              <li>セッション時間・ページ滞在時間</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4 text-sm">
              これらのデータは個人を特定するものではなく、統計的な分析にのみ使用されます。Google による Cookie の利用については、
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold underline hover:opacity-80 transition"
              >
                Google プライバシーポリシー
              </a>
              をご参照ください。また、Google Analytics のオプトアウトには
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold underline hover:opacity-80 transition"
              >
                Google Analytics オプトアウトアドオン
              </a>
              をご利用いただけます。
            </p>

            <h2 className="text-navy text-xl font-bold mt-10 mb-3 border-b border-gray-100 pb-2">5. Cookieの無効化方法</h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-sm">
              お客様はブラウザの設定を変更することで、Cookie の受け入れを拒否したり、すでに保存された Cookie を削除したりすることができます。各ブラウザでの設定方法は以下を参照してください。
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4 pl-2">
              <li>
                <span className="font-semibold">Google Chrome：</span>設定 &gt; プライバシーとセキュリティ &gt; Cookie と他のサイトデータ
              </li>
              <li>
                <span className="font-semibold">Mozilla Firefox：</span>設定 &gt; プライバシーとセキュリティ &gt; Cookie とサイトデータ
              </li>
              <li>
                <span className="font-semibold">Apple Safari：</span>環境設定 &gt; プライバシー &gt; Cookie とウェブサイトのデータを管理
              </li>
              <li>
                <span className="font-semibold">Microsoft Edge：</span>設定 &gt; Cookie とサイトのアクセス許可 &gt; Cookie とサイトデータの管理と削除
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4 text-sm">
              なお、Cookie を無効にした場合、本サイトの一部機能が正常に動作しない場合がありますので、あらかじめご了承ください。
            </p>

            <h2 className="text-navy text-xl font-bold mt-10 mb-3 border-b border-gray-100 pb-2">6. お問い合わせ</h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-sm">
              本ポリシーに関するご質問・ご意見は、以下の窓口までお問い合わせください。
            </p>
            <div className="bg-[#F8F9FA] border border-gray-200 rounded-xl p-6 mb-4">
              <p className="font-semibold text-navy text-sm mb-1">Arcrise Labo Inc.</p>
              <p className="text-gray-700 text-sm">個人情報保護担当</p>
              <p className="text-gray-700 text-sm">
                メール：
                <a
                  href="mailto:privacy@arcriselabo.jp"
                  className="text-gold underline hover:opacity-80 transition"
                >
                  privacy@arcriselabo.jp
                </a>
              </p>
            </div>

            <div className="border-t border-gray-100 mt-12 pt-8">
              <p className="text-gray-500 text-sm">
                本ポリシーは予告なく改定する場合があります。改定後のポリシーは本ページに掲載した時点で効力を生じます。
              </p>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
