import Link from "next/link";

export default function NotFound() {
  return (
    <section className="tool-page">
      <p className="kicker">404</p>
      <h1>Esta página não existe.</h1>
      <p className="lede">
        Talvez o endereço tenha mudado. Volte ao início ou abra as perguntas.
      </p>
      <p>
        <Link href="/">Início</Link>
        {" · "}
        <Link href="/faq">Perguntas</Link>
      </p>
    </section>
  );
}
