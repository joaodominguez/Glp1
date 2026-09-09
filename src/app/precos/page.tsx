import type { Metadata } from "next";
import Link from "next/link";
import {
  comparticipacaoNotes,
  priceBands,
  pricePageDisclaimer,
} from "@/content/prices";
import { CONTENT_REVIEWED_AT, CONTENT_REVIEWED_LABEL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Preços Mounjaro, Ozempic e Wegovy em Portugal",
  description:
    "Quanto custam Mounjaro, Wegovy, Ozempic e outros GLP-1 em Portugal: ordens de grandeza de PVP, comparticipação SNS e o que verificar na Infomed.",
};

export default function PrecosPage() {
  return (
    <div className="shell page-simple page-wide">
      <p className="eyebrow">Portugal · dinheiro</p>
      <h1>Preços dos medicamentos GLP-1</h1>
      <p className="lede">
        A pergunta mais frequente depois de «isto é para mim?» é «quanto custa?».
        Aqui vai a ordem de grandeza — e o que a muda.
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
              <Link href="/onde-comprar/">
                <strong>Onde comprar</strong>
                <span>Farmácia legal — não anúncios baratos.</span>
              </Link>
            </li>
            <li>
              <Link href="/medicos/">
                <strong>Médicos</strong>
                <span>Quem acompanha e o que perguntar.</span>
              </Link>
            </li>
            <li>
              <Link href="/medicamentos/">
                <strong>Medicamentos</strong>
                <span>As 11 fichas no mesmo formato.</span>
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
