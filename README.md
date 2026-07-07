# UniBF Cristalina-GO

Site institucional premium do **Centro Universitário UniBF — Cristalina-GO**, com foco em apresentação local, catálogo moderno de cursos e captação responsável via WhatsApp.

## Descrição

A aplicação é uma SPA em React + Vite para divulgar a marca pública **UniBF Cristalina-GO**, orientar visitantes sobre modalidades de ensino e direcionar contatos para a **Professora Kelle**, assistente virtual de orientação do polo.

## Objetivo comercial

- Fortalecer a presença digital da UniBF Cristalina-GO.
- Gerar conversas qualificadas pelo WhatsApp principal **5561981571394**.
- Exibir modalidades e cursos em cards visuais sem publicar informações comerciais não validadas.
- Preparar o projeto para deploy profissional em domínio próprio.

## Stack

- PNPM workspace
- React 18 + Vite
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- framer-motion
- wouter
- localStorage para leads no MVP

## Funcionalidades

- Home premium com hero, modalidades, cursos em destaque, Professora Kelle, localização, FAQ e CTA final.
- Catálogo de cursos com busca, filtros, imagens locais e fallback visual premium.
- Assistente virtual global **Professora Kelle** com ações rápidas para WhatsApp.
- Formulários e CTAs com mensagem pré-preenchida.
- SEO básico com Open Graph, theme-color e canonical placeholder.
- Fallback textual/visual para imagens, logo e avatar ausentes.

## Estrutura de pastas

```text
artifacts/polo-unibf/
  public/assets/
    avatars/   # avatar autorizado da Professora Kelle
    courses/   # imagens locais/autorizadas dos cursos
    hero/      # imagens de hero
    logos/     # logos e favicon
    news/      # imagens de cards editoriais
    polo/      # fachada e fotos do polo
    social/    # imagem Open Graph
  src/
    components/
    data/
    lib/
    pages/
    types/
```

## Como rodar localmente

```bash
pnpm install
pnpm --filter @workspace/polo-unibf run dev
```

## Variáveis de ambiente

- `VITE_WHATSAPP_NUMBER` — opcional; fallback de produção: `5561981571394`.
- `VITE_ADMIN_PASSWORD` — habilita o painel administrativo local do MVP.
- `BASE_PATH` — opcional para deploy em subdiretório.

## Compliance

**Não publicar cursos/valores/promoções sem validação oficial.** Cursos, valores, condições, modalidades e formas de ingresso devem ser confirmados diretamente com o atendimento oficial da UniBF Cristalina-GO.

O número **5561982367003** pode ser usado somente como contato secundário. Campo Lindo deve aparecer apenas como setor/bairro do endereço.

## Roadmap

1. Substituir localStorage por backend persistente para leads.
2. Adicionar domínio final no canonical.
3. Publicar imagens reais/autorizadas em todos os diretórios de `/public/assets`.
4. Integrar analytics e pixels após aprovação.
5. Evoluir a Professora Kelle para integração real quando houver backend autorizado.

## Deploy

Build recomendado:

```bash
pnpm --filter @workspace/polo-unibf run typecheck
pnpm --filter @workspace/polo-unibf run build
```

O resultado é gerado em `artifacts/polo-unibf/dist/public`.
