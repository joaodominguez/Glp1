import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getFicha } from "@/content/ficha";
import {
  getMedication,
  medications,
  relatedMedications,
} from "@/content/medications";
import { getMedicationImages } from "@/content/medication-media";
import { CONTENT_REVIEWED_LABEL } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return medications.map((med) => ({ slug: med.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const med = getMedication(slug);
  if (!med) return { title: "Medicamento" };
  return {
    title: `${med.brandName} (${med.substance})`,
    description: med.summary,
  };
}

export default async function MedicationPage({ params }: Props) {
  const { slug } = await params;
  const med = getMedication(slug);
  if (!med) notFound();

  const ficha = getFicha(slug);
  const images = getMedicationImages(slug);
  const lead = images[0];
  const related = relatedMedications(med);

  return (
    <div className="shell">
      <nav className="crumbs" aria-label="Trilho">
        <Link href="/">Início</Link>
        {" / "}
        <Link href="/medicamentos/">Medicamentos</Link>
        {" / "}
        {med.brandName}
      </nav>

      <header className="med-hero">
        <div>
          <h1>{med.brandName}</h1>
          <p className="substance">
            {med.substance} · {med.frequency}
          </p>
          <p className="lede">{med.lede}</p>
        </div>
        {lead ? (
          <figure className="med-photo">
            <Image
              src={lead.src}
              alt={lead.alt}
              width={1200}
              height={900}
              priority
            />
            <figcaption>
              {lead.illustrative ? "Imagem ilustrativa · " : null}
              {lead.attribution}
            </figcaption>
          </figure>
        ) : null}
      </header>

      {ficha ? (
        <section className="ficha" aria-label={`Ficha ${med.brandName}`}>
          <div className="ficha-label">Ficha · {med.brandName}</div>
          <dl>
            <div>
              <dt>Substância activa</dt>
              <dd>{med.substance}</dd>
            </div>
            <div>
              <dt>Como actua</dt>
              <dd>{med.mechanismLabel}</dd>
            </div>
            <div>
              <dt>Como se administra</dt>
              <dd>{med.route}</dd>
            </div>
            <div>
              <dt>Frequência</dt>
              <dd>{med.frequency}</dd>
            </div>
            <div>
              <dt>Dose inicial</dt>
              <dd>{ficha.doseInicial}</dd>
            </div>
            <div>
              <dt>Dose máxima</dt>
              <dd>{ficha.doseMaxima}</dd>
            </div>
            <div>
              <dt>Fora do frigorífico</dt>
              <dd>{ficha.foraDoFrio}</dd>
            </div>
            <div>
              <dt>Indicação</dt>
              <dd>{ficha.indicacao}</dd>
            </div>
            <div>
              <dt>Estatuto</dt>
              <dd>{ficha.estatuto}</dd>
            </div>
            <div>
              <dt>Titular</dt>
              <dd>{med.company}</dd>
            </div>
          </dl>
        </section>
      ) : null}

      <article className="article">
        <h2>O que é</h2>
        <ul className="points">
          {med.whatItIs.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2>Em que difere</h2>
        <ul className="points">
          {med.howItDiffers.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2>Na prática</h2>
        <ul className="points">
          {med.practicalNotes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <p className="disclaimer" style={{ marginTop: "1.6rem" }}>
          {med.indicationSummary} {med.availabilityNote} Nada nesta página é
          recomendação de dose ou de troca de medicamento.
        </p>

        {related.length > 0 ? (
          <section className="siblings">
            <h2>A mesma substância, noutro nome</h2>
            <ul>
              {related.map((item) => (
                <li key={item.slug}>
                  <Link href={`/medicamentos/${item.slug}/`}>
                    <strong>{item.brandName}</strong>
                    <span>{item.summary}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <section className="next-reads">
          <h2>O que ler a seguir</h2>
          <ul>
            <li>
              <Link href="/precos/">
                <strong>Preços</strong>
                <span>Ordens de grandeza e o que verificar</span>
              </Link>
            </li>
            <li>
              <Link href="/medicos/">
                <strong>Médicos</strong>
                <span>Que especialidade consultar</span>
              </Link>
            </li>
            <li>
              <Link href="/medicamentos/">
                <strong>Todos os medicamentos</strong>
                <span>Os 11 no mesmo formato</span>
              </Link>
            </li>
          </ul>
        </section>

        <p className="verified">
          Verificado a {CONTENT_REVIEWED_LABEL}. Verificação editorial — não é
          revisão clínica.
        </p>
      </article>
    </div>
  );
}
