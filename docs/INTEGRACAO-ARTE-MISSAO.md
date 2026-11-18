# Missão — integração da arte original e validação técnica

## Arquivo original inspecionado
- Origem local: `polo-ai-earth.webp`, WebP VP8 RGB, 1672 × 941 px, 108.200 bytes (106 KB).
- Caminho esperado: `artifacts/polo-unibf/public/assets/hero/polo-ai-earth.webp`.
- Tentativa de leitura do caminho na branch: GitHub retornou 404. **Asset não integrado**.
- Tentativa de acesso Git local: DNS de github.com indisponível no executor. O conector GitHub permite criar blobs base64, mas o ambiente de execução não tem ponte para enviar bytes locais ao conector. Não há evidência de upload concluído.
- O hero usa fallback de banner. Não há confirmação de WebP carregado por HTTP 200 em preview.

## CI verificado
- HEAD anterior `f2a14e0ed901ff602500906721c56a79fa01e3d8`: workflow GitHub Actions `Polo UniBF - verificacao isolada`, execução #9 (ID 44233057481), `completed/success`.
- Quatro checks Vercel desse HEAD = `failure` com `upgradeToPro=build-rate-limit`. Falha de limite de builds, sem evidência de falha de código.
- O workflow testa privacidade, TypeScript e build; o resultado agregado de sucesso não substitui logs detalhados.
- Novos testes estáticos do hero: `tests/hero-contract.test.mjs`; script `test:design` e etapa de CI adicionados na branch. Execução desse novo HEAD precisa ser confirmada.

## Cobertura de teste adicionada
- Cores azul/verde.
- Referência ao WebP e fallback.
- Breakpoints de alturas mobile/tablet.
- `useReducedMotion` e anel sem animação com movimento reduzido.
- Texto do CTA em azul sobre verde, foco visível, texto alternativo.
- Carregamento prioritário da imagem.

## Limitações
Testes de contrato são inspeções do código e não provam layout real, carregamento do WebP, contraste completo nem acessibilidade WCAG. Executar preview em navegador após upload do asset, capturar Network HTTP 200, testar 375/768/1280 px, teclado e movimento reduzido.

## Decisão
**NO-GO produção**. Não foi realizado merge nem deploy manual de produção.
