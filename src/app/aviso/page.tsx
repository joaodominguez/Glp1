import type { Metadata } from "next";
import Link from "next/link";
import { Article } from "@/components/Article";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Aviso médico",
  description:
    "O Guia GLP-1 é informativo e não substitui consulta, diagnóstico nem prescrição. Limites do conteúdo, conflitos de interesse e responsabilidade.",
  path: "/aviso",
});

export default function Page() {
  return (
    <Article
      kicker="Leia isto até ao fim"
      title="O que este site é — e o que não é"
      lede="Foi feito porque a informação em português sobre Mounjaro e GLP-1 está dispersa e, muitas vezes, má. Isso não o transforma num médico."
    >
      <h2>Não é aconselhamento médico</h2>
      <p>
        Nada aqui é diagnóstico, prescrição, plano alimentar individual ou
        urgência. Não inicia, aumenta, reduz nem interrompe medicamentos com
        base nestas páginas. Se está em sofrimento ou com sintomas graves,
        contacte os serviços de saúde do seu país.
      </p>

      <h2>Não é o folheto oficial</h2>
      <p>
        A informação resume e explica documentos públicos (EMA, reguladores
        nacionais, bulas). Pode ficar incompleta, desatualizada ou simplificada
        demais para o seu caso. A embalagem que tem na mão e o profissional que
        o segue são a referência.
      </p>

      <h2>Não cobre todos os países da mesma forma</h2>
      <p>
        Nomes comerciais, doses disponíveis, comparticipação e indicações
        (diabetes, peso, ambos) mudam. O português deste site é genérico de
        propósito: serve leitores de vários países, não substitui a regra local.
      </p>

      <h2>Conflitos que este projeto evita</h2>
      <ul>
        <li>Não vende medicamentos nem comissões de farmácia.</li>
        <li>Não mostra anúncios de clínicas milagrosas.</li>
        <li>Não tem «antes e depois» para vender uma ideia.</li>
      </ul>
      <p>
        As <Link href="/fontes">fontes</Link> estão listadas. Se encontrar um
        erro factual, o repositório é o sítio certo para o assinalar.
      </p>
    </Article>
  );
}
