# Evidências incrementais — HEAD 484827a9

Data da verificação: 2026-11-18.

- Arquivo `artifacts/polo-unibf/public/assets/hero/polo-ai-earth.webp`: API GitHub na branch retornou 404. SHA remoto não disponível; SHA esperado `04423cfc877818f858e12328c04d46c8a76747ab`.
- CI do commit `484827a955ebe92df0dd6ce1688e57bd9cf519d9`: GitHub Actions `Polo UniBF - verificacao isolada`, execução #19 (`44234804037`), `completed/success`.
- Quatro statuses Vercel no mesmo commit: `failure`, `upgradeToPro=build-rate-limit`.
- Consulta Vercel ao projeto `polo-unib-polo-unibf` na branch retornou deployments antigos READY. Mais recente da amostra: `dpl_A9NPi9dK4WmcDzTWkLCkD1Yy293H`, SHA `54b92000f62f75aa77af2abcfe3c4eef6d672b02`. Não corresponde ao HEAD solicitado. Não valida a imagem nem o novo código.
- Sem preview atualizado, não foram realizados testes de HTTP 200 da arte, responsividade 375/768/1280, movimento reduzido ou acessibilidade no navegador.
- Nenhum merge nem deploy manual de produção executado. **NO-GO produção**.
