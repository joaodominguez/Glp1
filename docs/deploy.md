# Deploy — meuglp1.pt

Site estático (`output: "export"`). Publicação = rsync da pasta `out/` para o Apache.

## Build

```bash
npm ci
npm run build
```

## Publicar

Utilizador preferido: `portal` (dono de `/var/www/meuglp1.pt/public/`).

```bash
rsync -avz --delete out/ portal@91.99.167.243:/var/www/meuglp1.pt/public/
```

Com chave em ficheiro:

```bash
rsync -avz --delete -e "ssh -i ~/.ssh/meuglp1_deploy" \
  out/ portal@91.99.167.243:/var/www/meuglp1.pt/public/
```

## Cloud Agent

Preferir secret `DEPLOY_SSH_PRIVATE_KEY` (e opcionalmente host/user). Evitar password de `root` em chat.

## Pós-deploy

- Confirmar `https://www.meuglp1.pt/` (HTTP 200).
- Se imagens de canetas não mudarem no browser: URLs já usam `?v=` em `PenIllustration`; incrementar `PEN_ASSET_VERSION` quando regenerar PNGs.
- GA4: `G-NQVW713D8K` no layout — não remover em wipes.
