# Missão — Verificação do HEAD 4a86ac49

## Consulta remota
- HEAD solicitado: `4a86ac49d67c189a3f436b94fd77288541f1210f`.
- GitHub Actions: execução #18, ID `44234682600`, workflow `Polo UniBF - verificacao isolada`, `completed/success`.
- Vercel: quatro statuses `failure`, com destino `upgradeToPro=build-rate-limit`.
- Asset `artifacts/polo-unibf/public/assets/hero/polo-ai-earth.webp`: consulta na branch retornou 404 `NOT_FOUND`. Não há SHA remoto para comparar com o esperado `04423cfc877818f858e12328c04d46c8a76747ab`.

## Pacote de origem
- ZIP local reaberto: inclui `artifacts/polo-unibf/public/assets/hero/polo-ai-earth.webp` com 108200 bytes e `INSTRUCOES.txt`.
- A tentativa de acesso Git direto retornou `Could not resolve host: github.com`. Sem upload remoto confirmado.

## Gates
| Verificação | Estado |
|---|---|
| CI do commit solicitado | PASS |
| WebP na branch | FAIL — ausente |
| Comparação SHA remoto | BLOCKED |
| Preview atualizado | BLOCKED — build rate limit |
| HTTP 200 da imagem | NOT_TESTED |
| Breakpoints 375/768/1280 | NOT_TESTED |
| Movimento reduzido | NOT_TESTED |
| Acessibilidade de navegador | NOT_TESTED |

Sem merge nem deploy manual de produção. **NO-GO**.
