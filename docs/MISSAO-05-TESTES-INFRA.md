# Missão 05 — Evidências, testes sintéticos e infraestrutura

Escopo exclusivo: Polo UniBF Cristalina/GO; sem alteração de produção, dados reais, integração educacional externa ou merge.

## HEAD anterior verificado
- `ba7f7f8109e6b980e5431729fbd2298758426d68`: quatro checks Vercel `success`; quatro deployments `READY`, `target: null` (preview).
- Nenhum workflow GitHub Actions retornado para o commit anterior.
- Nenhuma revisão humana registrada na consulta da PR #21.

## Infraestrutura
- Projeto Vercel `polo-unib-api-server` existe: `prj_gcGHFvvAITKeI4LWnMKxL4HO9NjE`; framework não declarado; deployment de preview READY. Isso NÃO comprova API operacional, banco de dados ou autorização para uso.
- Não foi verificado banco dedicado ao Polo. Nenhum serviço, banco ou credencial foi criado.
- O frontend contém encaminhamento ao WhatsApp; isso não equivale a persistência nem entrega confirmada.

## Testes preparados
- `artifacts/polo-unibf/tests/privacy-contract.test.mjs`: testes de contrato estático com `node:test`, usando somente dados sintéticos/inspeção de código.
- Comando: `pnpm --filter @workspace/polo-unibf run test:privacy`.
- Inspeção estática de oito critérios feita por leitura da branch, 8/8 aprovados: consentimento nos dois formulários, ausência de armazenamento local nos três componentes examinados, painel sem senha no cliente, URL WhatsApp codificada, janela com noopener, evento local sem PII, mensagens sem falsa confirmação de recebimento.
- O runner `node --test`, `typecheck`, `build` e E2E em navegador **não foram executados** nesta missão. Executar em CI/ambiente isolado antes de considerar a PR validada.
- Os novos commits precisam de novos checks; sucesso do commit anterior não vale automaticamente para HEAD novo.

## Pendências de maior prioridade
1. Executar runner e corrigir eventuais falhas no código/testes.
2. Testar WhatsApp e consentimento em navegador de preview com dados sintéticos.
3. Confirmar com responsável o número de WhatsApp, os textos de privacidade e o fluxo de atendimento.
4. Validar se há API e banco dedicados e aprovados, sem reutilizar serviços externos.
5. Revisão independente e aprovação formal antes de merge ou produção.

Status de publicação: **NO-GO**.
