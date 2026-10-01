# Auditoria profunda — meuglp1.pt

**Data:** 1 de outubro de 2026  
**Âmbito:** design / UX · organização de conteúdo · SEO técnico · schemas  
**Sinal do produto:** GSC 3 meses ≈ 11 cliques · 625 impressões · CTR 1,8% · posição 34,8  
**Sinal do dono:** «vou ao site e não gosto»

---

## Veredicto

O site funciona como **catálogo educativo correcto**, mas lê-se como **produto genérico de AI/startup médica**: cinza flat, grelha de cards, hero com caneta num retângulo arredondado, tipografia única, zero atmosfera. Em YMYL isso não transmite autoridade — transmite template.

SEO e schemas estão **presentes mas poluídos e incompletos**. Conteúdo está **amplo e fino**: muitas URLs no mesmo molde, pouca profundidade, IA plana (lista sem jornada).

**Prioridade:** redesign de presença + limpeza de schema + reorganização editorial. Não mais titles isolados.

---

## 1. Design — porque o site «não agrada»

### 1.1 O que se vê (home / hubs)

| Zona | Estado actual | Problema |
|------|---------------|----------|
| Hero | H1 «Guia GLP-1» + lede + 2 CTAs + caneta Mounjaro em card 4:3 | Imagem **inset** com radius; não é full-bleed. Primeiro ecrã parece landing SaaS, não guia de saúde PT |
| Paths | 4 `path-card` brancos | Cards sem necessidade de interação rica — violam «cards só para interação» |
| Artigos hub | Grelha de cards texto-só | Parede de meta · título · blurb; sem filtros, sem imagem, sem hierarquia editorial |
| Medicamentos hub | 11 cards iguais | Zepbound / Lyxumia / Byetta competem visualmente com Rybelsus / Ozempic (queries reais) |
| Interior artigo | Hero split + disclaimer teal + secções curtas | Molde repetido; caneta decorativa em quase tudo; pouco «lugar» |
| Footer | 15 links flat | Dump de sitemap; sem agrupamento, sem peso de marca |
| Motion | Só hover 1px | Zero presença; regras pedem 2–3 motions intencionais |

### 1.2 Sistema visual

```
--ground: #eef1f4   (cinza frio flat)
--paper:  #ffffff
--accent: #0a5c63   (teal clínico)
--font:   Outfit only
--radius: 16px / 10px
```

- **Uma fonte** (Outfit) — legível, mas sem contraste display/body; não cria marca.
- **Fundo flat** — sem gradiente útil, textura ou imagem de contexto (farmácia PT, consulta, vida real). Canetas 3D em fundo escuro são o único «drama» e estão encaixotadas.
- **Cards em todo o lado** (`med-card`, `path-card`, `article-card`) — linguagem de dashboard/lista, não de guia.
- **Menu pill preto** no mobile — detalhe «app» que desalinha do tom editorial.
- **Brand no nav e no H1** — correcto em teoria; na prática o H1 = nome do site + lede genérico não responde a uma dor («quanto custa?», «é o Rybelsus…»).

### 1.3 Choque com as regras de design do projecto

| Regra | Live |
|-------|------|
| Uma composição no 1.º viewport | Parcial — texto + card de imagem competem |
| Brand hero-level | Sim (H1), mas sem personalidade |
| Full-bleed hero | Não — imagem inset arredondada |
| Sem cards no hero | Paths/secções usam cards logo a seguir |
| Sem overlays no hero | OK |
| Atmosfera (não flat) | Falha |
| Motion intencional | Falha |
| Evitar look «AI cluster» | Parcialmente em teal-on-grey (não purple, mas genérico clínico) |

### 1.4 Diagnóstico emocional

Quem chega do Google com ansiedade (preço, dose, «é seguro?») encontra:

1. Marca abstracta  
2. Caneta stock  
3. Quatro caixas  
4. Oito artigos em cartões  

Não encontra: confiança humana, Portugal «real», resposta imediata à query, sensação de sítio feito por alguém que conhece o INFARMED.

---

## 2. Organização de conteúdo

### 2.1 Inventário

| Tipo | Qtd | Notas |
|------|-----|--------|
| Medicamentos | 11 | Mesmo template; 3–4 irrelevantes para PT SEO (Zepbound, Lyxumia, Bydureon…) |
| Artigos | 21 | Eyebrows: Na prática / Comparar / Portugal — **sem hub filtrado** |
| FAQ | ~30+ | Bom; pouco linkado da home |
| Ferramentas | preços, comparar, pesquisa, checklist, clínicas | Nav principal só mostra 4; resto no footer |

### 2.2 Problemas de IA (information architecture)

1. **Lista, não jornada.** Home → «11 medicamentos» + «artigos recentes». Não há arcos: Antes da consulta · Dinheiro · Primeiras semanas · Alarmes · Parar.  
2. **Hub Artigos sem taxonomia utilizável.** Eyebrow existe no card; não filtra. Utilizador com query «ozempic dosagem» tem de adivinhar o slug.  
3. **Duplicação de job.** Rybelsus: ficha + artigo PT + vs Ozempic + FAQ + preços. Bom para SEO interno; mau se todos os textos soam ao mesmo tom e profundidade.  
4. **Medicamentos «de colecção».** Incluir Lyxumia (AIM retirada) e Zepbound (nome US) no mesmo grid que Ozempic dilui relevância e CTR interno.  
5. **Clínicas / Médicos** geram cliques GSC mas estão fora da nav principal — descoberta só por Google ou footer.  
6. **Conteúdo fino.** Artigos tipicamente 3 secções × 1 parágrafo + bullets. Suficiente para snippet; fraco para posição ~10–20 em YMYL.  
7. **Tom uniforme.** Tudo soa a «disclaimer + hábitos gerais». Falta voz, exemplos PT, citações Infomed/EMA com data, tabelas próprias (não só PVP).

### 2.3 Mapa mental proposto (não implementado aqui)

```
Home (uma composição: marca + 1 promessa + 1 CTA + visual full-bleed)
├── Dinheiro → /precos/ + comparticipação + Infomed
├── Começar → primeiras semanas + titulação + checklist
├── Comparar → hub filtrado (não 11 cards iguais)
├── Medicamento (pilares PT) → Rybelsus · Ozempic · Mounjaro · Wegovy · Trulicity
│                         └── «Outros nomes» colapsado
├── Confiança → Sobre · Fontes · Aviso · datas de revisão
└── Ferramentas → Pesquisa · Comparar · FAQ
```

---

## 3. SEO técnico

### 3.1 O que está bem

- `lang="pt-PT"`, canonicals com trailing slash  
- `sitemap.xml` + `robots.txt`  
- Titles/metas nas páginas-chave (iteração GSC recente)  
- FAQPage em `/perguntas/`  
- Breadcrumbs em muitas URLs  
- 301 www + `/brasil/*` + trailing slash em paths chave  

### 3.2 Falhas materiais

| Issue | Impacto |
|-------|---------|
| **Sem `og:image` / twitter:image** nas páginas | Partilhas e alguns scrapers sem visual; `summary_large_image` sem imagem |
| **Layout default title** ainda «Mounjaro, Ozempic, Wegovy» (sem Rybelsus) | Inconsistente com home |
| **Posição média ~35** | Titles sozinhos não resolvem; falta profundidade + EEAT |
| **URLs mortas no GSC** (`/brasil/…`, `http://meuglp1.pt/`) | Já redireccionadas; pedir remoção/inspecção no GSC |
| **Query `meuglp1.com.br`** | Brand confusion; Sobre já clarifica — reforçar nav/footer com domínio |
| **Páginas com impressões e 0 cliques** | Snippet + H1 ainda a competir com sites de preço/afiliado |

### 3.3 EEAT (crítico em YMYL)

Em falta ou fraco:

- Autor **Person** identificável (ou painel editorial nomeado)  
- «Revisado por» clínico (mesmo que «revisão editorial, não clínica» — ser explícito e visível no hero)  
- Datas por página (hoje `CONTENT_REVIEWED_AT` global)  
- Citações com link + data à Infomed/EMA **no corpo**, não só caixa no fundo  
- Página Sobre ainda abstracta («mapa em português»)  

Google não precisa de hospital; precisa de **entidade clara + rastreio de actualização**.

---

## 4. Schemas (JSON-LD) — levantamento

### 4.1 O que é emitido hoje

| Local | Tipos |
|-------|--------|
| Layout (todas as páginas) | `WebSite` + `SearchAction`, `Organization`, `MedicalWebPage` **do homepage** (`/#medical`) |
| Home | + `MedicalWebPage` + `ItemList` meds |
| Ficha med | `MedicalWebPage` + `Drug` + `BreadcrumbList` |
| Artigo | `Article` + `MedicalWebPage` + `BreadcrumbList` |
| FAQ | `FAQPage` + `BreadcrumbList` |
| Glossário | `DefinedTermSet` + `DefinedTerm` |
| Preços | `MedicalWebPage` + `ItemList` de `Drug` |
| Hubs | `CollectionPage` + `ItemList` |

### 4.2 Problemas de schema

1. **Poluição global:** o graph do layout injecta `MedicalWebPage` com `url: /` em **todas** as URLs. Em `/precos/` o Google vê MedicalWebPage do site inteiro + MedicalWebPage da página. Confuso.  
2. **Duplicação Article + MedicalWebPage** no mesmo artigo sem `@id` partilhado / `mainEntity`.  
3. **`Drug` incompleto:** falta `dosageForm`, `drugUnit`, `prescriptionStatus`, `image`, `sameAs` (EMA/Infomed), `isAvailableGenerically`, etc. Doses na ficha HTML **não** entram no JSON-LD.  
4. **`Article` incompleto:** sem `image`, sem `author` Person, sem `publisher.logo`, sem `mainEntityOfPage`.  
5. **`Organization` sem `logo` / `sameAs` (redes).**  
6. **`MedicalWebPage` em excesso** (quase tudo é MedicalWebPage, incluindo Sobre/Privacidade). Preferir `WebPage` + `about` onde não há conteúdo clínico.  
7. **FAQ só no hub** — perguntas chave (rybelsus preço, ozempic dosagem) podiam ser `FAQPage` embutido nas páginas que as respondem (com o mesmo texto visível).  
8. **Preços:** `ItemList` de Drug sem `offers` — correcto (não somos loja), mas também sem `price` genérico; OK. Não inventar Offer.  
9. **SearchAction** OK se `?q=` funcionar (já ligado no cliente).

### 4.3 Schema alvo (mínimo limpo)

```
Layout:
  WebSite (+ SearchAction)
  Organization (+ logo, alternateName, areaServed: PT)

Página medicamento:
  MedicalWebPage
    mainEntity → Drug (completo, sameAs Infomed/EMA)
  BreadcrumbList

Artigo:
  Article (image, dates, author Org/Person, publisher+logo)
  BreadcrumbList
  (FAQPage só se houver Q&A visível na página)

FAQ hub: FAQPage
Glossário: DefinedTermSet
Preços: MedicalWebPage + ItemList (sem Offer falso)
```

Remover do layout o `MedicalWebPage` global `#medical`.

---

## 5. Matriz de severidade

| # | Área | Severidade | Esforço | Efeito esperado |
|---|------|------------|---------|-----------------|
| D1 | Redesign home full-bleed + tipografia + sem cards no 1.º ecrã | Crítica | Alto | «Gosto» + brand + CTR marca |
| D2 | Artigos/Medicamentos: menos cards, mais hierarquia, filtros | Alta | Médio | Uso + SEO interno |
| C1 | Reorganizar IA por jornada; pilares PT vs «outros» | Alta | Médio | Relevância + engajamento |
| C2 | Aprofundar top 5 URLs GSC (não criar 10 artigos novos finos) | Alta | Médio | Posição |
| S1 | Limpar JSON-LD (sem MedicalWebPage global; Article/Drug completos) | Alta | Baixo | Rich results / confiança parsers |
| S2 | og:image por template + logo Organization | Média | Baixo | Partilhas |
| E1 | EEAT visível (Sobre, datas, fontes no corpo) | Alta | Médio | YMYL |
| T1 | GSC: remover URLs BR; monitorizar CTR pós-titles | Média | Baixo | Higiene |

---

## 6. O que **não** fazer a seguir

- Mais titles/metas sem mudar o site que o utilizador vê  
- Mais artigos no mesmo molde de 3 parágrafos  
- Purple glow / dark mode / pills de stats no hero  
- Rankings de clínicas ou doses prescritivas  
- Hub Brasil  

---

## 7. Sequência recomendada de execução

### Fase 1 — Presença (design)
1. Nova home: uma composição, brand forte, visual edge-to-edge, 1 CTA principal  
2. Tipografia: display + body (não só Outfit)  
3. Atmosfera: ground com profundidade; reduzir cards  
4. 2–3 motions (entrada hero, sticky header, transição de secção)

### Fase 2 — Clareza (conteúdo)
1. Hub Medicamentos: pilares PT + «Outros nomes»  
2. Hub Artigos: filtros Começar / Comparar / Dinheiro / Segurança  
3. Expandir corpo das 5 URLs com mais impressões GSC  
4. Sobre + datas + fontes no corpo

### Fase 3 — Machine-readable (schema/SEO)
1. Remover MedicalWebPage global do layout  
2. Completar Drug + Article + Organization.logo  
3. og:image  
4. FAQPage embutido onde o HTML já responde à query

### Fase 4 — Medir
1. GSC 14–28 dias (CTR + posição nas URLs tocadas)  
2. GA4 landings + scroll  
3. Só então novo lote de conteúdo

---

## 8. Evidência visual desta auditoria

Capturas em `/opt/cursor/artifacts/screenshots/audit/` (home mobile, artigos desktop, medicamentos hub) e home desktop prévia em `screenshots/home-guia-glp1.png`.

---

## 9. Resumo numa frase

**Temos um guia correcto vestido de template — schemas a mais e mal ligados, conteúdo a mais e pouco profundo, design que não faz a pessoa confiar nem clicar.**
