import FadeIn from '@/components/FadeIn'

export const dynamic = 'force-static';

export default function AntisocialPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#F8F9FA] pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">Legal</p>
          <h1 className="h2-fluid font-bold text-navy mb-2">
            反社会的勢力排除方針
          </h1>
          <p className="text-gold text-sm">制定日：2026年5月1日</p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16">
        <FadeIn>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-gray-700 leading-relaxed mb-4 text-sm">
              Arcrise Labo Inc.（以下「当社」といいます）は、反社会的勢力との関係を一切遮断し、健全な企業活動を推進するため、以下のとおり反社会的勢力排除方針（以下「本方針」といいます）を定めます。
            </p>

            <h2 className="text-navy text-xl font-bold mt-10 mb-3 border-b border-gray-100 pb-2">第1条　基本方針</h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-sm">
              当社は、社会的責任を果たす企業として、反社会的勢力との関係を一切持たないことを基本方針とします。当社は、反社会的勢力による不当要求を断固として拒絶し、これに対して組織全体で毅然とした態度で対応します。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 text-sm">
              当社の役員および従業員は、反社会的勢力の排除を業務遂行上の前提とし、いかなる場合においても反社会的勢力との関与を行いません。
            </p>

            <h2 className="text-navy text-xl font-bold mt-10 mb-3 border-b border-gray-100 pb-2">第2条　反社会的勢力の定義</h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-sm">
              本方針において「反社会的勢力」とは、暴力、威力または詐欺的手法を用いて経済的利益を追求する個人または団体をいい、以下の者を含みます。
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-2 mb-4 pl-2">
              <li>暴力団</li>
              <li>暴力団員および暴力団員でなくなった日から5年を経過しない者</li>
              <li>暴力団準構成員</li>
              <li>暴力団関係企業</li>
              <li>総会屋等、社会運動等標ぼうゴロまたは特殊知能暴力集団等</li>
              <li>テロリスト集団その他これらに準ずる者</li>
              <li>上記各号に該当する者が経営を支配し、または経営に実質的に関与していると認められる法人その他の団体</li>
              <li>上記各号に該当する者と社会的に非難されるべき関係を有している者</li>
            </ul>

            <h2 className="text-navy text-xl font-bold mt-10 mb-3 border-b border-gray-100 pb-2">第3条　対応原則（5原則）</h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-sm">
              当社は、反社会的勢力への対応にあたり、以下の5つの原則を徹底します。
            </p>
            <ol className="list-decimal list-inside text-gray-700 text-sm space-y-3 mb-4 pl-2">
              <li>
                <span className="font-semibold text-navy">組織としての対応</span>
                <br />
                <span className="pl-4 block mt-1">反社会的勢力からの不当要求に対し、担当者や担当部署が単独で判断・対処するのではなく、代表取締役を含む組織全体として統一的に対応します。</span>
              </li>
              <li>
                <span className="font-semibold text-navy">外部専門機関との連携</span>
                <br />
                <span className="pl-4 block mt-1">警察、暴力追放運動推進センター、弁護士等の外部専門機関と緊密に連携し、不当要求に対して適切かつ迅速に対処します。</span>
              </li>
              <li>
                <span className="font-semibold text-navy">取引の全面遮断</span>
                <br />
                <span className="pl-4 block mt-1">反社会的勢力との間では、いかなる名目や理由があっても、取引・契約・資金提供等の関係を一切持ちません。</span>
              </li>
              <li>
                <span className="font-semibold text-navy">有事における民事・刑事両面での対応</span>
                <br />
                <span className="pl-4 block mt-1">反社会的勢力による不当要求が発生した場合、民事上の法的手段と刑事上の告訴・告発を積極的に活用し、断固たる態度で対応します。</span>
              </li>
              <li>
                <span className="font-semibold text-navy">裏取引・資金提供の禁止</span>
                <br />
                <span className="pl-4 block mt-1">反社会的勢力から不当要求を受けた場合においても、業務への支障や個人の安全を理由とした裏取引や資金提供は、いかなる状況においても行いません。</span>
              </li>
            </ol>

            <h2 className="text-navy text-xl font-bold mt-10 mb-3 border-b border-gray-100 pb-2">第4条　取引拒絶</h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-sm">
              当社は、取引の相手方が反社会的勢力に該当すると判明した場合、直ちに当該取引を停止・解除します。また、新たな取引・契約の締結にあたっては、相手方が反社会的勢力でないことを確認するための審査を実施します。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 text-sm">
              当社は、取引契約書等に暴力団排除条項を整備し、取引相手が反社会的勢力であることが判明した場合には、催告なく契約を解除できる旨を定めます。
            </p>

            <h2 className="text-navy text-xl font-bold mt-10 mb-3 border-b border-gray-100 pb-2">第5条　法的措置</h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-sm">
              当社は、反社会的勢力から不当要求、脅迫、威圧その他の違法または不当な行為を受けた場合、速やかに警察・弁護士等の外部専門機関に相談・通報するとともに、以下の法的措置を講じます。
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-2 mb-4 pl-2">
              <li>刑事告訴・告発</li>
              <li>差止請求・損害賠償請求等の民事上の請求</li>
              <li>仮処分・仮差押えその他の保全措置</li>
              <li>その他必要と認める一切の法的手段</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4 text-sm">
              当社は、反社会的勢力への対応にあたり、役員および従業員の安全確保を最優先とし、組織として適切な支援体制を整備します。
            </p>

            <div className="border-t border-gray-100 mt-12 pt-8">
              <p className="text-gray-500 text-sm text-right">
                制定日：2026年5月1日<br />
                Arcrise Labo Inc.<br />
                代表取締役　内海暢介
              </p>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
