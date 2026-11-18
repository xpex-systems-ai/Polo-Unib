# Missão 04 — Validação de preview e gates de publicação
Escopo: operação digital e publicitária do Polo UniBF Cristalina/GO.

## Evidências observadas (18/11/2026)
- PR #21 em draft, sem revisão humana registrada na consulta.
- Commit da Missão 03 `de5999efa535a950e02d63504d3869b0322b8585`: quatro statuses Vercel = success; quatro deployments READY, target = null (preview, não produção).
- Projeto de produção `polo-unib-polo-unibf` configurado com Vite; proteção SSO ativada para domínios Vercel, exceto custom domains.
- Não houve workflow GitHub Actions retornado para esse commit.
- Os checks anteriores não validam os commits adicionais desta Missão 04. Reexecutar verificação no novo HEAD.

## Revisão estática dos fluxos
- Formulário: zod valida campos; exige aceite antes de abrir WhatsApp; não grava dados em localStorage. Verificar teclado, foco, popup bloqueado, envio real e copy LGPD em E2E.
- Newsletter: exige aceite, prepara mensagem e abre WhatsApp; não persiste leads. O evento de handoff significa tentativa, NÃO envio ou recebimento.
- Admin: página informativa substitui login com senha client-side. Acesso operacional indisponível até backend autorizado.
- Eventos: CustomEvent local com nome, origem e timestamp; sem identificadores pessoais; sem pixel externo e sem garantia de persistência.
- Número de WhatsApp codificado no frontend: confirmar com operador antes da liberação.

## Matriz de testes planejados (NÃO EXECUTADOS)
| Teste | Esperado |
| --- | --- |
| Formulário inválido | bloqueia envio |
| Formulário sem consentimento | mostra erro, não abre WhatsApp |
| Formulário com consentimento | abre mensagem codificada; exige envio manual |
| Popup bloqueado | interface não afirma recebimento |
| Newsletter sem consentimento | bloqueia encaminhamento |
| Newsletter com consentimento | abre WhatsApp sem gravar PII no navegador |
| Admin | não mostra dados nem aceita senha do bundle |
| Eventos | emite apenas evento/origem/horário, sem PII |
| Mobile | navegação, labels e botões acessíveis |
| Build e typecheck | `pnpm --filter @workspace/polo-unibf run typecheck` e `pnpm --filter @workspace/polo-unibf run build` |

## Infraestrutura e decisão
O projeto `polo-unib-api-server` existe como deployment Vercel, mas isso não comprova endpoint ativo, persistência ou autenticação. Nenhum banco dedicado ao Polo foi confirmado. Não conectar serviços de terceiros ou outros projetos sem autorização específica.

## Gates de liberação
G0 revisão de código e documentação; G1 CI/build/typecheck; G2 testes de preview com dados sintéticos; G3 aprovação dos textos e política de privacidade; G4 validação do número oficial e UX; G5 revisão humana independente; G6 autorização explícita de publicação.
**NO-GO produção até G0–G6 concluídos.**
