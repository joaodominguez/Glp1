import type { Metadata } from "next";
import Link from "next/link";
import { checklistSections } from "@/content/checklist";
import {
  careRedFlags,
  howToFindDoctors,
  ordemMedicosUrl,
  specialistProfiles,
} from "@/content/doctors";
import { CONTENT_REVIEWED_AT, CONTENT_REVIEWED_LABEL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Médicos para GLP-1 em Portugal",
  description:
    "Que médicos fazem sentido para GLP-1: endocrinologia, consulta de obesidade, médico de família, sinais de alerta e checklist para a consulta.",
};

export default function MedicosPage() {
  return (
    <div className="shell page-simple page-wide">
      <p className="eyebrow">Portugal · quem acompanha</p>
      <h1>Médicos — o critério, não um ranking</h1>
      <p className="lede">
        Não publicamos um «top 10» de nomes. Publicamos o critério: especialidade,
        rigor clínico e sinais de que a consulta serve a si — não a venda da
        caneta.
      </p>

      <div className="disclaimer">
        <strong>O Guia GLP-1 não indica o seu médico.</strong> Não temos
        parcerias pagas com prescritores. Um bom profissional pode ser do SNS ou
        do privado; o que importa é a avaliação, não o Instagram.
      </div>

      <section className="content-block article">
        <h2>Perfis que costumam fazer sentido</h2>
        <ul className="profile-list">
          {specialistProfiles.map((profile) => (
            <li key={profile.id}>
              <strong>{profile.title}</strong>
              <p>{profile.why}</p>
              <p className="ask-label">O que pedir</p>
              <ul>
                {profile.askFor.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <h2>Como encontrar</h2>
        {howToFindDoctors.map((block) => (
          <div key={block.title} className="find-block">
            <h3>{block.title}</h3>
            <p>{block.body}</p>
          </div>
        ))}
        <p>
          Confirme cédula e especialidade no diretório da{" "}
          <a href={ordemMedicosUrl} target="_blank" rel="noopener noreferrer">
            Ordem dos Médicos
          </a>
          .
        </p>

        <h2>Sinais de alerta</h2>
        <ul className="points">
          {careRedFlags.map((flag) => (
            <li key={flag.id}>
              <strong className="ink">{flag.title}.</strong> {flag.detail}
            </li>
          ))}
        </ul>
      </section>

      <section className="content-block" id="checklist">
        <div className="section-head">
          <h2>Checklist para a consulta</h2>
          <p>
            Uma consulta rende mais com factos. Escolha o que se aplica — não
            precisa de marcar tudo.
          </p>
        </div>
        <div className="checklist-stack">
          {checklistSections.map((section) => (
            <div key={section.id} className="checklist-block">
              <h3>{section.title}</h3>
              <p>{section.intro}</p>
              <ul className="checklist">
                {section.items.map((item) => (
                  <li key={item.id}>
                    <span className="check-box" aria-hidden />
                    <span>
                      <strong>{item.label}</strong>
                      {item.hint ? (
                        <span className="hint">{item.hint}</span>
                      ) : null}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <div className="next-reads">
        <h2>Continuar</h2>
        <ul>
          <li>
            <Link href="/precos/">
              <strong>Preços</strong>
              <span>Ordens de grandeza e comparticipação.</span>
            </Link>
          </li>
          <li>
            <Link href="/onde-comprar/">
              <strong>Onde comprar</strong>
              <span>Farmácia legal, sem atalhos perigosos.</span>
            </Link>
          </li>
          <li>
            <Link href="/perguntas/">
              <strong>Perguntas</strong>
              <span>FAQ em português claro.</span>
            </Link>
          </li>
        </ul>
      </div>

      <p className="verified">
        Revisão editorial:{" "}
        <time dateTime={CONTENT_REVIEWED_AT}>{CONTENT_REVIEWED_LABEL}</time>
      </p>
    </div>
  );
}
