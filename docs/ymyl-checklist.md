# Checklist YMYL — antes de publicar

Usar em qualquer página clínica (ficha, artigo, FAQ, preço).

## Conteúdo

- [ ] Não recomenda dose, marca ou esquema de tratamento
- [ ] Não rankeia médicos nem clínicas
- [ ] Não promete resultados de peso/açúcar
- [ ] Tem disclaimer ou link para `/aviso/`
- [ ] Secção «quando contactar médico/urgência» se falar de efeitos
- [ ] Pelo menos uma fonte oficial relevante (Infomed / EMA / bula)
- [ ] Ortografia pt-PT; reguladores de Portugal (não misturar ANVISA sem secção BR)

## SEO / técnica

- [ ] Title e description únicos
- [ ] Canonical correcto
- [ ] Entrada no sitemap (rotas estáticas ou array de conteúdo)
- [ ] Internal links (ficha ↔ artigo ↔ FAQ)
- [ ] JSON-LD adequado se for FAQ/Article/Drug

## Revisão

- [ ] Actualizar `CONTENT_REVIEWED_AT` / label se a mudança for material
- [ ] Build (`npm run build`) sem erros
- [ ] Deploy só depois de validar URLs críticas

## Depois do deploy

- [ ] HTTP 200 nas URLs novas
- [ ] Se mudou PNGs de canetas, bump `PEN_ASSET_VERSION`
- [ ] GA4 `G-NQVW713D8K` continua no layout
