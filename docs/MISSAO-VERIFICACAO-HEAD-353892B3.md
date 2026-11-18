# Missão — verificação do HEAD 353892b3

## Evidências verificadas
- Commit: `353892b33c78e4f548c88403587841f2fe62ed6c`.
- GitHub Actions: execução #17 (`44234535524`), `completed/success`.
- Quatro statuses Vercel: `failure`, todos com URL `upgradeToPro=build-rate-limit`. Sem preview novo validado.
- Arquivo `artifacts/polo-unibf/public/assets/hero/polo-ai-earth.webp` consultado na branch de revisão: 404 NOT_FOUND.
- SHA de blob Git esperado: `04423cfc877818f858e12328c04d46c8a76747ab`. **Não há SHA remoto para comparação**.
- A tentativa local de acesso Git retornou `Could not resolve host: github.com`; transferência binária não executada.

## Matriz de verificação
| Critério | Situação |
|---|---|
| CI de entrada | PASS |
| SHA remoto do asset | BLOCKED (arquivo ausente) |
| HTTP 200 do asset no preview | NOT_TESTED |
| Responsividade 375 / 768 / 1280 | NOT_TESTED |
| Movimento reduzido | NOT_TESTED |
| Acessibilidade em navegador | NOT_TESTED |
| Merge e deploy de produção | NÃO EXECUTADOS |

## Próximo gate
1. Incluir o WebP original na branch por canal de upload autorizado.
2. Comparar SHA remoto e rodar `verify:hero-asset`.
3. Esperar desbloqueio do limite Vercel ou disponibilização de preview autorizado, sem upgrade pago automático.
4. Validar HTTP 200, breakpoints, teclado, contraste e movimento reduzido.
5. Manter **NO-GO produção** até revisão humana e autorização.
