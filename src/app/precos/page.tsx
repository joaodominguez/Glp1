import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import {
  comparticipacaoNotes,
  priceBands,
  pricePageDisclaimer,
} from "@/content/prices";
import {
  absoluteUrl,
  breadcrumbLd,
  pageMetadata,
  webPageLd,
} from "@/lib/seo";
import { CONTENT_REVIEWED_AT, CONTENT_REVIEWED_LABEL } from "@/lib/site";

const description =
  "Preço Mounjaro, Ozempic, Wegovy e Rybelsus em Portugal: ordens de grandeza de PVP por dose, comparticipação SNS e o que confirmar na Infomed — a dosagem muda o recibo.";

export const metadata: Metadata = pageMetadata({
  title: "Preço Mounjaro e Ozempic em Portugal (PVP por dose)",
  description,
  path: "/precos",
  keywords: [
    "mounjaro preço portugal",
    "ozempic preço portugal",
    "ozempic dosagem",
    "preço Wegovy Portugal",
    "rybelsus preço",
    "trulicity preço",
    "GLP-1 comparticipação",
    "INFARMED Infomed",
  ],
});

export default function PrecosPage() {
  return (
    <div className="shell page-simple">
      <JsonLd
        data={[
          webPageLd({
            name: "Preços GLP-1 em Portugal",
            description,
            path: "/precos",
            type: "MedicalWebPage",
          }),
          breadcrumbLd([
            { name: "Início", path: "/" },
            { name: "Preços", path: "/precos" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Ordens de grandeza de PVP GLP-1 em Portugal",
            itemListElement: priceBands.map((row, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "Drug",
                name: row.brandName,
                nonProprietaryName: row.substance,
                url: absoluteUrl(`/medicamentos/${row.slug}/`),
              },
            })),
          },
        ]}
      />
      <p className="eyebrow">Portugal · dinheiro</p>
      <h1>Preço Mounjaro e Ozempic em Portugal (PVP por dose)</h1>
      <p className="lede">
        A pergunta mais frequente depois de «isto é para mim?» é «quanto custa?».
        Aqui vai a ordem de grandeza de PVP — e o que a muda: dose/titulação,
        indicação e comparticipação.
      </p>

      <div className="disclaimer">
        <strong>Isto não é uma tabela oficial.</strong> {pricePageDisclaimer}{" "}
        Confirme em{" "}
        <a
          href="https://extranet.infarmed.pt/INFOMED-fo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Infomed (INFARMED)
        </a>{" "}
        e no recibo da farmácia.
      </div>

      <section className="content-block">
        <h2>Ordens de grandeza (PVP / mês)</h2>
        <div className="price-table-wrap">
          <table className="price-table">
            <thead>
              <tr>
                <th scope="col">Medicamento</th>
                <th scope="col">Faixa típica</th>
                <th scope="col">Comparticipação</th>
              </tr>
            </thead>
            <tbody>
              {priceBands.map((row) => (
                <tr key={row.slug}>
                  <th scope="row">
                    <Link href={`/medicamentos/${row.slug}/`}>
                      {row.brandName}
                    </Link>
                    <span className="price-sub">{row.substance}</span>
                  </th>
                  <td>
                    <strong>{row.monthlyBandEur}</strong>
                    <span className="price-sub">{row.packNote}</span>
                    <span className="price-sub">{row.caveat}</span>
                  </td>
                  <td>{row.comparticipacao}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="content-block article">
        <h2>Comparticipação SNS</h2>
        <ul className="points">
          {comparticipacaoNotes.map((note) => (
            <li key={note.slice(0, 48)}>{note}</li>
          ))}
        </ul>
        <p className="soft-note">
          Ter receita médica <strong>não</strong> significa automaticamente
          comparticipação. Contam a indicação, o medicamento e as regras do
          INFARMED / Ministério da Saúde.
        </p>

        <h2>Dose e titulação mudam o recibo</h2>
        <p>
          Em Ozempic, Mounjaro ou Wegovy, o PVP típico sobe quando a caneta
          passa de dose de arranque para doses de manutenção. Isso não é um
          esquema de «dosagem» para seguir sozinho — é o motivo pelo qual a
          tabela acima é faixa, não preço fixo. Para o <em>porquê</em> da
          subida gradual (e o que não inventar), leia{" "}
          <Link href="/artigos/titulacao-doses/">titulação e doses</Link>.
        </p>

        <h2>O que entra na conta real</h2>
        <ul className="plain-list">
          <li>Preço da caneta / embalagem (sobe com a dose).</li>
          <li>Consultas (SNS ou privadas) e análises.</li>
          <li>Nutrição e, se fizer sentido, psicologia.</li>
          <li>Deslocações — sobretudo se a farmácia tiver de encomendar.</li>
        </ul>

        <h2>Como verificar</h2>
        <ol className="plain-list numbered">
          <li>
            Abra a{" "}
            <a
              href="https://extranet.infarmed.pt/INFOMED-fo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Infomed
            </a>{" "}
            e procure o nome comercial.
          </li>
          <li>Compare com o PVP no ticket da farmácia.</li>
          <li>
            Pergunte se há comparticipação para a sua indicação — não para «o
            que o vizinho pagou».
          </li>
        </ol>

        <div className="next-reads">
          <h2>Continuar</h2>
          <ul>
            <li>
              <Link href="/artigos/como-ler-infomed/">
                <strong>Como ler a Infomed</strong>
                <span>PVP e estatuto oficiais.</span>
              </Link>
            </li>
            <li>
              <Link href="/artigos/comparticipacao-sns/">
                <strong>Comparticipação SNS</strong>
                <span>O que verificar além do PVP.</span>
              </Link>
            </li>
            <li>
              <Link href="/artigos/titulacao-doses/">
                <strong>Titulação e doses</strong>
                <span>Porque o PVP sobe com a caneta.</span>
              </Link>
            </li>
            <li>
              <Link href="/artigos/rybelsus-portugal/">
                <strong>Rybelsus em Portugal</strong>
                <span>Contexto local do comprimido.</span>
              </Link>
            </li>
            <li>
              <Link href="/clinicas/">
                <strong>Clínicas</strong>
                <span>Critério — sem ranking.</span>
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <p className="verified">
        Revisão editorial:{" "}
        <time dateTime={CONTENT_REVIEWED_AT}>{CONTENT_REVIEWED_LABEL}</time>
      </p>
    </div>
  );
}
