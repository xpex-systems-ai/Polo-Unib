# Missão 03 — Preparação de segurança, privacidade e mensuração (REVISÃO)
Escopo exclusivo: site e atendimento publicitário do Polo UniBF Cristalina/GO. Nenhuma integração com projetos educacionais externos.

## Estado de infraestrutura
- Frontend React/Vite no monorepo; API autenticada e banco de leads não foram comprovados nesta inspeção.
- Não criar tabelas, contas, credenciais ou provedores externos sem autorização do responsável.
- Não há autorização para publicar, mesclar ou tratar dados reais.

## Decisão de segurança provisória
- O formulário de contato deixa de prometer recebimento pela equipe após gravar apenas no navegador: faz handoff explícito ao WhatsApp oficial após consentimento.
- Newsletter não deve armazenar telefone e nome em localStorage: handoff ao WhatsApp, com confirmação explícita do usuário.
- Painel /admin deve ficar indisponível até autenticação server-side, autorização por papel e persistência centralizada.
- Eventos locais sem PII permitem testar instrumentação. **Não equivalem a conversões reais** e não são enviados a terceiros.

## API futura — contrato proposto (não implementado)
POST /api/leads
- TLS obrigatório; validação server-side de nome, telefone, modalidade e curso.
- Registrar versão do aviso de privacidade, finalidade e origem sem armazenar segredos no cliente.
- Proteção anti-abuso, limitação de requisições, retenção definida, logs minimizados.
- Resposta 201 apenas após persistência efetiva; idempotência para evitar duplicidade.
GET /api/admin/leads e PATCH /api/admin/leads/:id
- Sessão segura HTTP-only, verificação server-side de papel, trilha de auditoria e controles de acesso.
- Exportação apenas para operador autorizado; nunca expor tokens de serviço no bundle Vite.

## Gates para revisão
1. Aprovação institucional dos textos de privacidade e finalidade (revisão jurídica LGPD).
2. Escolha e aprovação de infraestrutura de API/banco com acesso restrito.
3. Testes automatizados de validação, consentimento, submissão, falha de rede e duplicidade.
4. Testes E2E em preview isolado, inclusive WhatsApp e mobile.
5. Verificar eventos e consentimento antes de integrar GA4/Meta Pixel.
6. Revisão humana independente, CI verde e autorização explícita para eventual deploy.

## Evidências
- Branch de revisão apenas; nenhuma credencial criada.
- Não houve merge, deploy, coleta de lead real ou teste E2E.
