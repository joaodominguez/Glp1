# Guia GLP-1

Site em português claro sobre **medicamentos GLP-1 e afins**: Mounjaro (tirzepatida), Ozempic, Wegovy, Saxenda, Victoza, Trulicity, Rybelsus e outros. O ponto de partida é simples: a informação que uma pessoa encontra quando vai começar o tratamento está dispersa, confusa e muitas vezes má.

Produção: [https://www.meuglp1.pt](https://www.meuglp1.pt)

Isto é um guia educativo. **Não é aconselhamento médico** e não substitui a bula do seu país nem a consulta.

## O que está nesta versão (0.1)

- Levantamento de medicamentos da classe (`/medicamentos`)
- Páginas de contexto: o que é, como funciona, o tratamento, efeitos, primeiras semanas
- FAQ pesquisável + glossário + checklist para a consulta
- SEO: sitemap, robots, canonicals, Open Graph, JSON-LD
- Fontes oficiais e aviso médico

## Desenvolvimento

```bash
npm ci
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

```bash
npm run lint
npm run build
```

O build estático (`output: "export"`) gera a pasta `out/` para servir no Apache.

## Stack

**Next.js** (App Router), TypeScript, Tailwind CSS. Sem backend e sem contas de utilizador nesta versão.
