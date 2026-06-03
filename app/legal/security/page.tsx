import FadeIn from '@/components/FadeIn'

export const dynamic = 'force-static';

export default function SecurityPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#F8F9FA] pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">Legal</p>
          <h1 className="h2-fluid font-bold text-navy mb-2">
            セキュリティポリシー
          </h1>
          <p className="text-gold text-sm">制定日：2026年5月1日</p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16">
        <FadeIn>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-gray-700 leading-relaxed mb-4 text-sm">
              Arcrise Labo Inc.（以下「当社」）は、お客様および関係者の情報資産を適切に保護することを経営上の重要課題と捉え、以下のセキュリティポリシーを定め、これを遵守します。
            </p>

            <h2 className="text-navy text-xl font-bold mt-10 mb-3 border-b border-gray-100 pb-2">1. 基本方針</h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-sm">
              当社は、事業活動において取り扱うすべての情報資産（顧客情報・従業員情報・業務情報・システム情報等）の機密性・完全性・可用性を確保するため、情報セキュリティ管理体制を構築・維持・継続的に改善します。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 text-sm">
              本ポリシーは、当社の役員・従業員・業務委託先を含むすべての関係者に適用されます。各自はポリシーの内容を理解し、情報セキュリティの実現に積極的に取り組む義務を負います。
            </p>

            <h2 className="text-navy text-xl font-bold mt-10 mb-3 border-b border-gray-100 pb-2">2. 情報セキュリティの定義</h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-sm">
              当社における情報セキュリティとは、以下の3要素を維持・確保することを指します。
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-2 mb-4 pl-2">
              <li>
                <span className="font-semibold text-navy">機密性（Confidentiality）：</span>
                正当な権限を持つ者のみが情報にアクセスできる状態を確保すること。
              </li>
              <li>
                <span className="font-semibold text-navy">完全性（Integrity）：</span>
                情報が正確かつ完全であり、不正な改ざんや破壊から保護されている状態を維持すること。
              </li>
              <li>
                <span className="font-semibold text-navy">可用性（Availability）：</span>
                正当な権限を持つ者が必要なときに情報へアクセスできる状態を確保すること。
              </li>
            </ul>

            <h2 className="text-navy text-xl font-bold mt-10 mb-3 border-b border-gray-100 pb-2">3. 組織的安全管理措置</h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-sm">
              当社は、情報セキュリティを組織全体で推進するため、以下の体制および措置を整備します。
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-2 mb-4 pl-2">
              <li>情報セキュリティ責任者（CISO相当）を任命し、管理体制を明確化する。</li>
              <li>情報資産の分類・管理規程を策定し、取り扱いルールを明文化する。</li>
              <li>情報セキュリティリスクを定期的に評価し、対応策を講じる。</li>
              <li>委託先・パートナー企業に対しても、適切なセキュリティ水準の維持を契約上求める。</li>
              <li>情報セキュリティに関する規程・手順を定期的に見直し、最新の状態を保つ。</li>
            </ul>

            <h2 className="text-navy text-xl font-bold mt-10 mb-3 border-b border-gray-100 pb-2">4. 技術的安全管理措置</h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-sm">
              当社は、情報システムおよびデータを保護するため、以下の技術的対策を実施します。
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-2 mb-4 pl-2">
              <li>アクセス制御：システムおよびデータへのアクセスは、業務上の必要性に基づき最小権限の原則で付与する。</li>
              <li>認証強化：多要素認証（MFA）等の強固な認証手段を導入し、不正アクセスを防止する。</li>
              <li>通信の暗号化：外部通信にはTLS等の暗号化プロトコルを使用し、データの盗聴・改ざんを防ぐ。</li>
              <li>保存データの保護：重要なデータは暗号化して保存し、漏洩時の被害を最小化する。</li>
              <li>脆弱性管理：OS・ミドルウェア・アプリケーションに対して定期的な脆弱性スキャンおよびパッチ適用を行う。</li>
              <li>ログ管理：アクセスログ・操作ログ等を取得・保管し、不審な行動の検知・追跡を可能にする。</li>
              <li>マルウェア対策：アンチウイルス・EDR等のエンドポイント保護ツールを導入・運用する。</li>
            </ul>

            <h2 className="text-navy text-xl font-bold mt-10 mb-3 border-b border-gray-100 pb-2">5. 物理的安全管理措置</h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-sm">
              当社は、物理的な情報資産の保護のため、以下の対策を実施します。
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-2 mb-4 pl-2">
              <li>サーバー・ネットワーク機器等の重要設備は、入退室管理が整備された施設に設置する。</li>
              <li>業務端末（PC・スマートフォン等）は、紛失・盗難対策としてデバイス暗号化を適用する。</li>
              <li>重要書類・記録媒体は施錠管理し、不要になった場合は適切な方法で廃棄する。</li>
              <li>第三者が社内設備・システムに物理的にアクセスできないよう、入退館記録の管理を行う。</li>
            </ul>

            <h2 className="text-navy text-xl font-bold mt-10 mb-3 border-b border-gray-100 pb-2">6. 人的安全管理措置</h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-sm">
              当社は、情報セキュリティにおける人的リスクを低減するため、以下の取り組みを行います。
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-2 mb-4 pl-2">
              <li>役員・従業員に対して、入社時および定期的に情報セキュリティ教育・研修を実施する。</li>
              <li>フィッシング詐欺・ソーシャルエンジニアリング等の脅威に関する啓発活動を継続的に行う。</li>
              <li>情報セキュリティポリシーへの遵守を雇用契約・業務委託契約において明示し、違反時の対応を定める。</li>
              <li>退職・契約終了時には、アクセス権の即時失効および情報資産の返却・削除を徹底する。</li>
            </ul>

            <h2 className="text-navy text-xl font-bold mt-10 mb-3 border-b border-gray-100 pb-2">7. インシデント対応</h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-sm">
              情報セキュリティインシデント（不正アクセス・情報漏洩・マルウェア感染等）が発生した場合、または発生の疑いがある場合は、以下の手順に従い迅速に対応します。
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-2 mb-4 pl-2">
              <li>
                <span className="font-semibold text-navy">報告：</span>
                インシデントを発見した者は、直ちに情報セキュリティ責任者へ報告する。
              </li>
              <li>
                <span className="font-semibold text-navy">初動対応：</span>
                被害の拡大を防ぐため、影響範囲の特定・隔離・証拠保全を速やかに行う。
              </li>
              <li>
                <span className="font-semibold text-navy">原因究明：</span>
                インシデントの根本原因を調査・分析し、再発防止策を検討する。
              </li>
              <li>
                <span className="font-semibold text-navy">通知・報告：</span>
                法令上の通知義務が生じる場合は、関係当局・影響を受けるお客様等に対し、適時かつ適切に通知する。
              </li>
              <li>
                <span className="font-semibold text-navy">再発防止：</span>
                インシデントの教訓を踏まえ、セキュリティ対策の改善を実施する。
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4 text-sm">
              セキュリティに関するご報告・お問い合わせは、下記までご連絡ください。
            </p>
            <div className="bg-[#F8F9FA] border border-gray-200 rounded-xl p-6 mb-4">
              <p className="text-gray-700 text-sm leading-relaxed">
                Arcrise Labo Inc. セキュリティ担当窓口<br />
                メール：<a href="mailto:security@arcrise-labo.com" className="text-gold hover:underline">security@arcrise-labo.com</a>
              </p>
            </div>

            <h2 className="text-navy text-xl font-bold mt-10 mb-3 border-b border-gray-100 pb-2">8. 継続的改善</h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-sm">
              当社は、情報セキュリティ管理体制を静的なものとせず、以下の取り組みにより継続的に改善します。
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-2 mb-4 pl-2">
              <li>セキュリティリスクの定期的な評価・見直しを実施し、新たな脅威に対応する。</li>
              <li>社内監査またはサードパーティによる外部監査を定期的に実施し、実効性を検証する。</li>
              <li>法令・規制・業界標準の改定に合わせ、本ポリシーおよび関連規程を随時更新する。</li>
              <li>インシデントや演習から得られた教訓をセキュリティ施策にフィードバックする。</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4 text-sm">
              本ポリシーは、経営トップの承認のもとで制定・改定され、全役職員に周知されます。
            </p>

            <div className="border-t border-gray-100 mt-12 pt-8">
              <p className="text-gray-500 text-sm text-right">
                制定日：2026年5月1日<br />
                Arcrise Labo Inc.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
