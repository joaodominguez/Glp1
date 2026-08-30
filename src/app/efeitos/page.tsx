import type { Metadata } from "next";
import Link from "next/link";
import { Article } from "@/components/Article";

export const metadata: Metadata = {
  title: "Efeitos e sinais de alerta",
};

export default function Page() {
  return (
    <Article
      kicker="Segurança"
      title="Efeitos secundários: o comum e o urgente"
      lede="«Toda a gente tem náuseas» não é um diagnóstico. Separar desconforto esperado de emergência evita dois erros: panicar com tudo, ou ignorar o que não se ignora."
    >
      <h2>O que aparece com frequência</h2>
      <p>
        Nos ensaios e nas bulas, os efeitos mais referidos são digestivos:
        náusea, vómito, diarreia, prisão de ventre, dor abdominal, digestão
        lenta, menos apetite, azia, enfartamento, cansaço. Costumam ser mais
        intensos ao começar e a cada subida de dose. Muita gente sente melhoria
        com o tempo — mas «muita gente» não é a mesma coisa que «você».
      </p>
      <p>Coisas que costumam ajudar, se o profissional concordar:</p>
      <ul>
        <li>refeições mais pequenas e mais lentas;</li>
        <li>menos fritura, menos álcool, menos volume de uma vez;</li>
        <li>água ao longo do dia, sobretudo se houver vómito ou diarreia;</li>
        <li>não trepar a dose se ainda estiver no pior da adaptação.</li>
      </ul>

      <h2>Riscos de que a bula fala com mais gravidade</h2>
      <ul>
        <li>
          <strong>Pancreatite:</strong> dor forte e persistente na barriga,
          muitas vezes com vómitos. Não se espera em casa com chá.
        </li>
        <li>
          <strong>Problemas da vesícula:</strong> dor à direita, em cima, por
          vezes com ombro ou costas.
        </li>
        <li>
          <strong>Desidratação e rins:</strong> se os vómitos ou a diarreia não
          param, o que falha a seguir pode ser o rim.
        </li>
        <li>
          <strong>Hipoglicemia:</strong> risco maior se já usar insulina ou
          certos comprimidos para o açúcar.
        </li>
        <li>
          <strong>Olhos:</strong> em diabetes, baixar o açúcar depressa pode
          agitar retinopatia. Visão a piorar merece avaliação, não espera.
        </li>
        <li>
          <strong>Reação alérgica grave:</strong> inchaço, falta de ar, urticária
          intensa — urgência.
        </li>
        <li>
          <strong>Tiroide (aviso de classe):</strong> tumores de células C em
          roedores; contraindicação se houver carcinoma medular da tiroide ou
          MEN2 na pessoa ou na família. Leia o{" "}
          <Link href="/aviso">aviso</Link> e leve isto à consulta.
        </li>
      </ul>

      <div className="callout warning">
        <p>
          Este site não classifica os seus sintomas. Se estiver em dúvida entre
          «é normal» e «é grave», trate como grave até um profissional dizer o
          contrário.
        </p>
      </div>

      <h2>O que muita gente pergunta e a ciência ainda discute</h2>
      <p>
        Queda de cabelo, «cara de emagrecimento», alterações de humor, massa
        muscular. Parte disto aparece em perdas de peso rápidas com ou sem
        medicamento. Vale a pena falar disso na consulta, não fechar o tema com
        um fórum. A página de <Link href="/faq">perguntas</Link> junta as dúvidas
        mais repetidas — incluindo mitos de compra online e de «quanto mais
        dose, melhor».
      </p>
    </Article>
  );
}
