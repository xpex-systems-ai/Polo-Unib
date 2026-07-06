# Polo UniBF Campos Lindos

Site oficial do Polo UniBF Campos Lindos (Cristalina-GO) — institucional premium, focado em captação de alunos via WhatsApp.

## Run & Operate

- `pnpm --filter @workspace/polo-unibf run dev` — site frontend (porta configurada pelo workflow)
- `pnpm --filter @workspace/polo-unibf run typecheck` — checar tipos do site
- Workflow gerenciado: `artifacts/polo-unibf: web`

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- React 18 + Vite
- Tailwind CSS v4 + shadcn/ui
- framer-motion (animações)
- react-hook-form + zod (formulários)
- wouter (roteamento SPA)
- localStorage (armazenamento de leads no MVP)

## Pages

| Rota | Página |
|---|---|
| `/` | Home — hero, cards de modalidades, benefícios, cursos em destaque, depoimentos, localização, CTA |
| `/cursos` | Catálogo com busca e filtro por modalidade |
| `/graduacao` | Página institucional — Graduação |
| `/pos-graduacao` | Página institucional — Pós-graduação |
| `/tecnologo` | Página institucional — Tecnólogo |
| `/extensao` | Página institucional — Extensão |
| `/sobre` | Sobre o Polo |
| `/contato` | Contato com formulário de leads |
| `/links` | Links da Bio (estilo Linktree) |
| `/admin` | Painel admin protegido por senha |

## Where things live

- `artifacts/polo-unibf/src/pages/` — páginas (uma por rota)
- `artifacts/polo-unibf/src/components/` — componentes organizados por domínio (home/, layout/, courses/, forms/, shared/)
- `artifacts/polo-unibf/src/lib/leads.ts` — CRUD de leads no localStorage + exportar CSV
- `artifacts/polo-unibf/src/lib/whatsapp.ts` — helpers para links WhatsApp
- `artifacts/polo-unibf/src/data/courses.ts` — catálogo de cursos (editável)
- `artifacts/polo-unibf/src/types/index.ts` — tipos `Course` e `Lead`

## Architecture decisions

- **Frontend-only MVP**: sem banco de dados; leads salvos em `localStorage` com chave `polo_leads`
- **Admin gate**: requer variável de ambiente `VITE_ADMIN_PASSWORD`; sem ela o login fica desabilitado (sem fallback inseguro)
- **Compliance**: nenhum valor, desconto, bolsa ou garantia de emprego é afirmado; todos os CTAs direcionam para consulta via WhatsApp
- **Chat widget**: agente simulado sem IA externa; coleta nome/telefone/modalidade e encaminha para WhatsApp com mensagem pré-preenchida

## User preferences

- Idioma do site: Português Brasileiro
- WhatsApp principal: 5561982367003

## Gotchas

- Para habilitar o painel `/admin`, configure `VITE_ADMIN_PASSWORD` nos Replit Secrets
- Os depoimentos na Home são exemplos ilustrativos — substituir por depoimentos reais quando disponíveis
- O mapa na Home e no Contato é um placeholder; substituir pelo embed real do Google Maps quando disponível

## Future roadmap

1. Substituir localStorage por Supabase para leads persistentes
2. Adicionar agente IA real (OpenAI/OpenRouter) no widget
3. Integrar pixel Meta e Google Analytics
4. Deploy em domínio próprio via Vercel/Railway
