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
artifacts/polo-unibf/dist/public
```

## Configuração da Vercel

Use as seguintes opções no projeto `unibf-cristalina-go`:

| Campo | Valor |
| --- | --- |
| Framework Preset | Vite |
| Root Directory | `artifacts/polo-unibf` |
| Install Command | `pnpm install` |
| Build Command | `pnpm run build` |
| Output Directory | `dist/public` |
| Production Branch | `main` |
| Node.js | `20.x` |

O arquivo `artifacts/polo-unibf/vercel.json` já define o build, o diretório de saída, cache de assets e rewrite de SPA para que rotas como `/cursos`, `/sobre`, `/faq`, `/contato` e `/links` recarreguem sem 404.

## Variáveis de ambiente

Copie `artifacts/polo-unibf/.env.example` para `.env.local` no desenvolvimento, se necessário. Não versione `.env`, senhas, tokens ou dados sensíveis.

| Variável | Obrigatória | Ambientes | Descrição |
| --- | --- | --- | --- |
| `VITE_WHATSAPP_NUMBER` | Sim | Production, Preview, Development | Número principal dos CTAs. Valor padrão seguro: `5561981571394`. |
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
