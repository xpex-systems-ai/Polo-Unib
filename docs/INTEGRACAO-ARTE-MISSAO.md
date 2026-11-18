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

## Atualização de evidências — Missão seguinte
- CI no commit `fecafeca6a4506bbf1253973312ab87cd0cdff1a`: GitHub Actions execução #13, ID `44233504528`, `completed/success`.
- Quatro statuses Vercel do mesmo commit: `failure`, URL com `upgradeToPro=build-rate-limit`. Não há novo preview comprovado.
- Arquivo WebP original reaberto e validado localmente: 1672×941, 108200 bytes, SHA-256 `16e64eb4d62c8226ba1d235ee0d843036fe5f81d29e3bd97f349c1c406c1940c`; SHA-1 de blob Git esperado `04423cfc877818f858e12328c04d46c8a76747ab`.
- Pacote ZIP local preparado com o caminho de destino correto para aplicação na branch. A ferramenta GitHub não aceita referência direta ao arquivo binário local, e o executor não resolve github.com; **upload ainda não comprovado**.
- HTTP 200 da arte, visualização de preview, responsividade real e acessibilidade de navegador **não testados**.
- **NO-GO produção**. Nenhum merge ou deploy manual solicitado.
