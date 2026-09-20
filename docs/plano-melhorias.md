# Plano de melhorias — meuglp1.pt

**Data:** 20 de setembro de 2026  
**Base:** site live (~40 URLs), Guia GLP-1 pt-PT, YMYL educativo  
**Princípio:** clareza e confiança acima de volume ou marketing

---

## 0. Onde estamos (inventário)

### Já em produção
| Área | Estado |
|------|--------|
| 11 fichas de medicamentos | Live |
| 14 artigos «Na prática» / comparar / segurança | Live |
| FAQ, glossário, fontes, aviso, sobre, privacidade | Live |
| Preços, médicos + checklist interactiva, onde comprar | Live |
| Pesquisa, comparar, sugerir correcção | Live |
| GA4 `G-NQVW713D8K` + CTAs na home | Live |
| Canetas editoriais + cache-bust | Live |
| Docs internos (deploy, YMYL, editorial, GSC) | Repo |

### Decisões fechadas
- **Portugal only** (sem hub BR por agora)
- Sem venda, sem rankings de clínicas, sem doses prescritivas
- Logo live (ondas) — não reinventar identidade sem pedido

---

## 1. Objectivos do próximo ciclo

1. **Subir no Search Console** nas queries que já impressam (Rybelsus, comparações, preço/stock).
2. **Fechar lacunas de jornada** (consulta → farmácia → primeiras semanas → alarmes → parar).
3. **Endurecer confiança YMYL** (datas, citações, revisão visível).
4. **Operar sem atrito** (deploy por chave, não password root).

---

## 2. Melhorias por prioridade

### P0 — Impacto alto / esforço contido

| # | Melhoria | Porque | Como |
|---|----------|--------|------|
| P0.1 | Auditoria GSC → 3 páginas-alvo | CTR/posição reais mandam no backlog | Rotina `docs/gsc-rotina.md`; ajustar title/H1/internal links |
| P0.2 | Pacote Rybelsus reforçado | Já foi sinal forte de impressões | Links cruzados preços↔artigo↔ficha↔FAQ; snippet FAQ destacado |
| P0.3 | Deploy por chave SSH | Password root no chat é risco | Secret `DEPLOY_SSH_PRIVATE_KEY` + user `portal` |
| P0.4 | Eventos GA4 além da home | Saber o que retém leitura | Eventos em comparar, pesquisa, checklist, artigos-chave |
| P0.5 | Data de revisão nas fichas individual | Trust YMYL | Mostrar `CONTENT_REVIEWED_*` + nota «confirme Infomed» já existe — tornar mais visível no hero |

### P1 — Conteúdo útil em falta

| # | Página / artigo | Job do utente |
|---|-----------------|---------------|
| P1.1 | Obstipação e GLP-1 | Efeito comum pouco coberto |
| P1.2 | Titulação: porque sobe aos poucos | Expectativa vs redes sociais |
| P1.3 | Saxenda vs Wegovy | Comparação diário vs semanal |
| P1.4 | Victoza vs Saxenda | Mesma substância, indicações |
| P1.5 | Antes de cirurgia / exames | Pergunta frequente em consulta |
| P1.6 | Saúde mental e imagem corporal | YMYL sensível, tom cuidadoso |
| P1.7 | Como ler Infomed (mini-guia) | Literacia do regulador |
| P1.8 | FAQ: álcool (aprofundar) + interação com outros orais matinal (Rybelsus) | Long-tail |

### P2 — Produto / UX

| # | Melhoria | Nota |
|---|----------|------|
| P2.1 | Pesquisa na header (atalho) | Hoje só `/pesquisa/` e nav |
| P2.2 | Comparador: link «ver artigo» se existir par conhecido | Ex.: Mounjaro+Ozempic → artigo |
| P2.3 | Checklist: botão imprimir / partilhar texto | Útil antes da consulta |
| P2.4 | Hub Artigos com filtros (Começar / Comparar / Segurança / Dinheiro) | Escala editorial |
| P2.5 | Breadcrumbs consistentes em todas as páginas simples | Já em várias; auditar |
| P2.6 | Empty states pesquisa com sugestões | Rybelsus, náuseas, preços |
| P2.7 | Acessibilidade: foco, contraste, labels | Passada rápida WCAG |

### P3 — Confiança e conformidade

| # | Melhoria |
|---|----------|
| P3.1 | Página Sobre: critérios de revisão mais explícitos (sem fingir ser sociedade médica) |
| P3.2 | Banner discreto «conteúdo educativo» só em páginas clínicas novas? (avaliar — evitar clutter) |
| P3.3 | Privacidade: menção a retenção/anonimização GA4 alinhada à política Google |
| P3.4 | `sugerir`: opcional Formspree/email real quando existir caixa |
| P3.5 | Changelog público curto (`/novidades/`) — o que mudou e quando |

### P4 — Técnico / escala

| # | Melhoria |
|---|----------|
| P4.1 | Artigos em MDX (ou ficheiros por slug) quando `articles.ts` ficar pesado |
| P4.2 | Testes smoke das rotas do sitemap no CI |
| P4.3 | Purge Cloudflare API após deploy de assets |
| P4.4 | Preview deploy em subdomínio antes de produção |
| P4.5 | Monitor uptime simples (já houve 521) |

---

## 3. Organização da informação (manter)

```
Camada A  Fichas medicamento     → verdade estável
Camada B  Artigos                → momentos da jornada
Camada C  Confiança              → glossário, fontes, aviso, sobre
Camada D  Ferramentas PT         → preços, médicos, pesquisa, comparar
```

**Nav principal (proposta estável):** Medicamentos · Artigos · Preços · Pesquisar  
**Footer:** resto (perguntas, comparar, médicos, confiança)

Não voltar a menus infinitos nem hub BR até haver capacidade de localizar de verdade.

---

## 4. Mapa de jornada → melhorias

| Momento | Já coberto | Melhorar |
|---------|------------|----------|
| Descoberta Google | Rybelsus PT, comparações | Titles/CTR (P0.1–0.2) |
| Antes da consulta | Checklist, médicos | Imprimir checklist (P2.3) |
| Receita / dinheiro | Preços, comparticipação, stock | Mini-guia Infomed (P1.7) |
| Primeiras semanas | Artigos + FAQ | Titulação, obstipação (P1.1–1.2) |
| Alarmes | Dor, hipoglicemia | Manter tom; linkar mais a partir de náuseas |
| Parar / longo prazo | Se eu parar | Saúde mental (P1.6) |

---

## 5. Backlog de ideias (parking lot)

Útil, mas **não** prioritário agora:

- Calculadora de IMC (cuidado YMYL)
- Chatbot clínico (evitar)
- Afiliados farmácia (evitar)
- App nativa
- Tradução pt-BR completa
- Pipeline fármacos (retatrutide) como fichas — só nota breve se fizer sentido editorial
- Vídeos / YouTube embeds
- Newsletter

---

## 6. Roadmap por fases (próximas)

### Fase A — Medir e capitalizar (primeiro)
1. Correr GSC e listar top 15 queries  
2. Ajustar 3–5 titles/metas + internal links  
3. Eventos GA4 em ferramentas  
4. Chave SSH de deploy  

### Fase B — Conteúdo de lacunas
1. Obstipação + titulação  
2. Saxenda vs Wegovy  
3. Como ler Infomed  
4. Expandir FAQ long-tail  

### Fase C — UX de escala
1. Filtros no hub Artigos  
2. Pesquisa na header  
3. Comparador → artigos relacionados  
4. Checklist imprimível  

### Fase D — Endurecer operação
1. `/novidades/`  
2. Smoke tests sitemap  
3. MDX se o ficheiro de artigos doer  
4. Preview + purge CDN  

---

## 7. Critérios de sucesso

| Sinal | Meta qualitativa |
|-------|------------------|
| GSC | Subida de posição/CTR em Rybelsus e 2 comparações |
| GA4 | Eventos de ferramenta > 0 e landings de artigo com scroll |
| Qualidade | Zero páginas sem disclaimer/fonte em conteúdo clínico novo |
| Ops | Deploy sem password root |

---

## 8. Checklist rápida antes de cada melhoria

Ver `docs/ymyl-checklist.md`. Em resumo: sem dose, sem ranking, fonte oficial, internal links, build + deploy verificado.

---

## 9. Próximos 5 movimentos concretos

1. **Auditoria GSC** (queries → acções de SEO)  
2. **Reforço Rybelsus** (malha de links + FAQ)  
3. **Artigos obstipação + titulação**  
4. **GA4 nas ferramentas** (pesquisa, comparar, checklist)  
5. **Deploy por chave SSH** (secret no ambiente)

---

## 10. Resumo

O site já é um guia completo e utilizável. O plano de melhorias deixa de ser «construir o mapa» e passa a ser **medir o que as pessoas procuram, fechar lacunas de jornada, e operar com mais confiança e menos risco**.
