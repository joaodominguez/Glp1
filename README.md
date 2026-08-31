# Guia GLP-1

Site em português claro sobre **medicamentos GLP-1 e afins**: Mounjaro (tirzepatida), Ozempic, Wegovy, Saxenda, Victoza, Trulicity, Rybelsus e outros. O ponto de partida é simples: a informação que uma pessoa encontra quando vai começar o tratamento está dispersa, confusa e muitas vezes má.

Produção: [https://www.meuglp1.pt](https://www.meuglp1.pt)

Isto é um guia educativo. **Não é aconselhamento médico** e não substitui a bula do seu país nem a consulta.

## O que está nesta versão

- Levantamento de medicamentos da classe (`/medicamentos`)
- Páginas de contexto: o que é, como funciona, o tratamento, efeitos, primeiras semanas
- Hub Portugal (preços, médicos, clínicas) e Brasil (`/brasil`)
- FAQ pesquisável + glossário + checklist + apps
- Landing pages de intenção: náuseas, dose esquecida, gravidez, pílula, comprar online, Mounjaro vs Ozempic
- Transparência: `/sobre`, `/privacidade`, `/aviso`, `/sugerir`
- SEO: sitemap, robots, canonicals, Open Graph (`/og-image.png`), JSON-LD

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

Para regenerar a imagem Open Graph a partir do SVG:

```bash
node scripts/make-og.mjs
```

## Deploy

Rsync da pasta `out/` para o servidor de produção (`www.meuglp1.pt`).

## Google Search Console

A configuração do Search Console (propriedade, verificação DNS/HTML, sitemap) tem de ser feita manualmente na conta Google do projecto. Sitemap canónico: `https://www.meuglp1.pt/sitemap.xml`.

## Stack

**Next.js** (App Router), TypeScript, Tailwind CSS. Sem backend e sem contas de utilizador nesta versão.
