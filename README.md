# UniBF Cristalina-GO

Site institucional premium do **Centro Universitário UniBF — Cristalina-GO**, preparado para deploy profissional na **Vercel** com SPA em Vite, SEO básico, assets locais e CTAs responsáveis para WhatsApp.

## Onde fica o projeto

O app principal está em:

```text
artifacts/polo-unibf
```

A raiz do repositório contém o workspace PNPM, documentação e artefatos auxiliares. Configure a Vercel para usar `artifacts/polo-unibf` como **Root Directory**.

## Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- shadcn/ui
- wouter
- pnpm workspace
- localStorage para leads no MVP

## Comandos locais

Na raiz do repositório:

```bash
pnpm install
pnpm --filter @workspace/polo-unibf run dev
pnpm --filter @workspace/polo-unibf run typecheck
pnpm --filter @workspace/polo-unibf run build
```

Ou diretamente no app:

```bash
cd artifacts/polo-unibf
pnpm install
pnpm run dev
pnpm run typecheck
pnpm run build
```

O build de produção é gerado em:

```text
artifacts/polo-unibf/dist
```


## Módulos finais de apresentação

O site institucional está organizado para a apresentação final com os seguintes módulos integrados:

- **Site institucional:** páginas públicas, catálogo de cursos, dúvidas frequentes, contato e links da bio.
- **WhatsApp oficial:** CTAs principais direcionados para o atendimento oficial no número `5561982367003`.
- **Mídias:** página de ecossistema digital com canais ativos e modelos em implantação.
- **Blog:** cards editoriais orientativos, sem promessa comercial, com confirmação pelo atendimento oficial.
- **Newsletter:** formulário MVP com consentimento simples e armazenamento local para captação inicial de interesse.
- **UniBF TV:** rota dedicada para conteúdos em vídeo.
- **Professora Kelle IA:** assistente virtual para triagem e orientação inicial, com encaminhamento ao atendimento oficial.

As redes sociais locais podem iniciar como modelos/apresentação e serem ativadas após aprovação da professora.

## Deploy Vercel correto

> **Importante:** o deploy oficial deve usar o app em `artifacts/polo-unibf` como **Root Directory**. Não aponte a Vercel para a raiz do monorepo, porque o `package.json` raiz executa builds recursivos do workspace e pode tentar buildar artefatos externos ao site público.

O projeto Vercel production-ready é **`polo-unib-polo-unibf`**. Após o merge do PR #15 na `main`, considere esse como o único projeto oficial para produção e mantenha o build verde nele.

Use as seguintes opções no projeto `polo-unib-polo-unibf`:

| Campo | Valor |
| --- | --- |
| Framework Preset | Vite |
| Root Directory | `artifacts/polo-unibf` |
| Install Command | `pnpm install` |
| Build Command | `pnpm run build` |
| Output Directory | `dist` |
| Production Branch | `main` |
| Node.js | `20.x` |

O arquivo `artifacts/polo-unibf/vercel.json` já define o framework Vite, install command, build command, output directory `dist` e rewrite de SPA para que rotas como `/cursos`, `/sobre`, `/faq`, `/contato` e `/links` recarreguem sem 404.

### Projetos Vercel duplicados ou legados

Projetos Vercel antigos ou duplicados, como `polo-unib`, `polo-unibf` e `polo-unib-api-server`, podem falhar quando apontam para a raiz do monorepo ou para artefatos que não são o site público oficial. Essas falhas não devem ser corrigidas alterando o código do app oficial apenas para apagar alertas de projetos legados.

Para limpar a Vercel, remova, arquive ou desconecte os projetos duplicados/legados no painel da Vercel e mantenha somente `polo-unib-polo-unibf` conectado à branch `main` com **Root Directory** `artifacts/polo-unibf`.


### Deploy na Vercel

- **Root Directory recomendado:** `artifacts/polo-unibf`.
- Caso o projeto seja importado usando a raiz do repositório, o `vercel.json` da raiz já força o build correto do site do polo com `pnpm install`, `pnpm --filter @workspace/polo-unibf run build` e saída em `artifacts/polo-unibf/dist`.
- O rewrite SPA direciona as rotas internas para `/index.html`, mantendo a navegação do app estável em produção.

## Variáveis de ambiente

Copie `artifacts/polo-unibf/.env.example` para `.env.local` no desenvolvimento, se necessário. Não versione `.env`, senhas, tokens ou dados sensíveis.

| Variável | Obrigatória | Ambientes | Descrição |
| --- | --- | --- | --- |
| `VITE_WHATSAPP_NUMBER` | Sim | Production, Preview, Development | Número principal dos CTAs. Valor oficial: `5561982367003`. |
| `VITE_ADMIN_PASSWORD` | Não | Production, Preview | Senha do painel admin MVP. Configure manualmente na Vercel e nunca publique no GitHub. |

## Assets obrigatórios

Os assets principais ficam em `artifacts/polo-unibf/public/assets`:

- `/assets/logos/unibf-cristalina-go-logo.png`
- `/assets/logos/unibf-cristalina-go-logo-white.png`
- `/assets/logos/favicon.png`
- `/assets/avatars/professora-kelle-avatar.png`
- `/assets/fachada-unibf-cristalina-go.jpg`
- `/assets/social/unibf-cristalina-go-og.png`

As imagens devem ser locais/autorizadas. Não importe imagens externas do site oficial e não copie imagens oficiais sem autorização. Componentes que exibem imagem devem manter fallback elegante; o `CourseCard` deve funcionar com ou sem imagem.

## SEO e social

O `index.html` mantém `lang="pt-BR"`, título profissional, descrição com UniBF Cristalina-GO, `theme-color` `#003B5C`, favicon local e Open Graph apontando para `/assets/social/unibf-cristalina-go-og.png`.

## Compliance

Regras obrigatórias para conteúdo, atendimento e campanhas:

- A **Professora Kelle** é assistente virtual de orientação, não substitui o atendimento oficial.
- Cursos, valores, condições, modalidades, disponibilidade e formas de ingresso precisam de validação oficial antes de publicação ou promessa comercial.
- Não prometer bolsa, desconto, emprego, diploma garantido ou resultado profissional.
- Não publicar curso sem validação oficial.
- Consulte cursos, valores, condições, modalidades e formas de ingresso diretamente com o atendimento oficial da UniBF Cristalina-GO.

## Roadmap

- Integrar Supabase para persistência de leads, autenticação e painel administrativo.
- Integrar Senara para automações de atendimento e acompanhamento comercial, quando aprovado.
- Integrar XpeX Academy para trilhas, capacitações e evolução do ecossistema educacional.
- Substituir placeholders por domínio final, assets reais/autorizados e analytics/pixels aprovados.
