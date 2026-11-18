# Missão 06 — Evidências de CI e testes

Escopo: Polo UniBF Cristalina/GO. Não houve merge, deploy manual de produção, uso de dados reais ou integração com serviços de outros projetos.

## Estado observado
- HEAD de entrada: `91f967a0febf922bdbf17211d046215ae5f62e12`.
- Quatro statuses Vercel = `success` para esse commit.
- GitHub Actions: nenhuma execução associada ao commit de entrada.
- Acesso local à origem GitHub indisponível no executor desta missão (falha DNS), impossibilitando clone e instalação de dependências no ambiente local.

## Alteração realizada
- Criado `.github/workflows/polo-unibf-verify.yml` na branch de revisão, com job Node 24 + pnpm 10:
  1. `pnpm install --frozen-lockfile`
  2. `pnpm --filter @workspace/polo-unibf run test:privacy`
  3. `pnpm --filter @workspace/polo-unibf run typecheck`
  4. `pnpm --filter @workspace/polo-unibf run build`
- O workflow não contém credenciais nem etapas de deploy.
- Não confundir workflow criado com testes executados: ainda é necessário comprovar a execução do job.
- O HEAD do workflow `d478d3c0e79defe23c356bb2a936cc224e3f38e2` apresentou quatro checks Vercel pendentes na primeira consulta e nenhuma execução Actions retornada.

## Plano de E2E com dados sintéticos (não executado)
- Sem consentimento: formulário e newsletter bloqueiam encaminhamento.
- Com consentimento: WhatsApp abre mensagem revisável; simular popup bloqueado.
- Conferir que nenhum dado pessoal sintético foi gravado em storage ou enviado a pixel.
- `/admin`: somente aviso de indisponibilidade, sem dados de contato.
- Capturar evento local `polo:conversion` sem PII; não classificá-lo como lead entregue.
- Verificar viewport mobile, teclado, leitores de tela e mensagens de erro.
- Validar número e texto institucional com responsável antes da publicação.

## Gates
G1 execução real do workflow, G2 typecheck/build, G3 E2E sintético, G4 aprovação institucional e LGPD, G5 revisão humana independente, G6 autorização de merge/deploy.

**NO-GO para produção.**
