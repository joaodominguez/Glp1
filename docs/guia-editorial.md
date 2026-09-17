# Guia editorial — meuglp1.pt

## Decisão de mercado

**Portugal only** no produto actual. Linguagem pt-PT, Infomed/SNS/Ordem.
Hub Brasil fica fora de âmbito até haver capacidade de localizar FAQ/artigos e reguladores (ANVISA) sem misturar.

## Onde vive o quê

| Tipo | Ficheiro |
|------|----------|
| Medicamentos | `src/content/medications.ts` + `ficha.ts` |
| Artigos | `src/content/articles.ts` |
| FAQ | `src/content/faq.ts` |
| Glossário | `src/content/glossary.ts` |
| Preços | `src/content/prices.ts` |
| Fontes | `src/content/sources.ts` |
| Checklist | `src/content/checklist.ts` |

## Tom

Claro, calmo, sem milagres. Uma pergunta por página. Comparações = factos, não veredicto.

## Cadência

1. GSC / dúvidas repetidas → FAQ ou artigo  
2. Mudança Infomed/EMA → ficha + preços + data de revisão  
3. Antes de merge → `docs/ymyl-checklist.md`

## Ferramentas do site

- `/pesquisa/` — índice local  
- `/comparar/` — dois medicamentos, factos  
- `/sugerir/` — correcções (copia texto; sem backend)  
- `/medicos/#checklist` — vistos em localStorage  

## Deploy

Ver `docs/deploy.md`.
