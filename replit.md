# UniBF Cristalina-GO

Site institucional premium da **UniBF Cristalina-GO** — Centro Universitário UniBF em Cristalina-GO, com foco em captação responsável via WhatsApp, catálogo visual e assistente virtual Professora Kelle.

## Run & Operate

- `pnpm --filter @workspace/polo-unibf run dev` — site frontend
- `pnpm --filter @workspace/polo-unibf run typecheck` — checar tipos do site
- `pnpm --filter @workspace/polo-unibf run build` — build de produção
- Workflow gerenciado: `artifacts/polo-unibf: web`

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- React 18 + Vite
- Tailwind CSS v4 + shadcn/ui
- framer-motion
- react-hook-form + zod
- wouter
- localStorage para leads no MVP

## Pages

| Rota | Página |
|---|---|
| `/` | Home premium com hero, modalidades, cursos, Professora Kelle, institucional, localização, FAQ e CTA |
| `/cursos` | Catálogo com busca, filtros, cards visuais, imagens locais e fallback premium |
| `/graduacao` | Página institucional — Graduação |
| `/pos-graduacao` | Página institucional — Pós-graduação |
| `/tecnologo` | Página institucional — Tecnólogo |
| `/extensao` | Página institucional — Extensão |
| `/sobre` | Sobre a UniBF Cristalina-GO |
| `/contato` | Contato com formulário de leads e WhatsApp principal |
| `/links` | Links da Bio |
| `/admin` | Painel admin protegido por senha |

## Where things live

- `artifacts/polo-unibf/src/pages/` — páginas por rota
- `artifacts/polo-unibf/src/components/` — componentes por domínio
- `artifacts/polo-unibf/src/lib/leads.ts` — CRUD de leads no localStorage + exportar CSV
- `artifacts/polo-unibf/src/lib/whatsapp.ts` — helpers para links WhatsApp; fallback principal `5561981571394`
- `artifacts/polo-unibf/src/data/courses.ts` — catálogo editável com imagens e status de validação
- `artifacts/polo-unibf/public/assets/` — imagens locais/autorizadas

## Architecture decisions

- **Frontend-only MVP**: sem banco de dados; leads salvos em `localStorage` com chave `polo_leads`.
- **Admin gate**: requer `VITE_ADMIN_PASSWORD`; sem ela o login fica desabilitado.
- **Compliance**: nenhum valor, desconto, bolsa, garantia de emprego ou disponibilidade automática deve ser afirmado.
- **Professora Kelle**: assistente virtual de orientação; não substitui atendimento humano oficial.
- **Replit plugins**: overlays visuais são condicionados a ambiente de desenvolvimento Replit e não entram no build de produção.

## User preferences

- Idioma do site: Português Brasileiro
- Marca pública: UniBF Cristalina-GO
- WhatsApp principal: `5561981571394`
- WhatsApp secundário: `5561982367003`
- Campo Lindo deve aparecer apenas como setor/bairro do endereço.

## Gotchas

- Para habilitar `/admin`, configure `VITE_ADMIN_PASSWORD` nos Secrets.
- Depoimentos reais só devem ser publicados com autorização.
- Imagens devem ser locais/autorizadas em `/public/assets`; não hotlinkar imagens do site oficial.
- Cursos, valores, modalidades e condições devem ser validados no atendimento oficial.

## Future roadmap

1. Substituir localStorage por Supabase ou API própria.
2. Integrar agente IA real para a Professora Kelle quando houver backend autorizado.
3. Adicionar pixel Meta e Google Analytics.
4. Deploy em domínio próprio via Vercel/Railway.
