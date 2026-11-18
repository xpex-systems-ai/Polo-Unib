# Aceite visual e preparação da próxima missão — 18/11/2026

## Referência aprovada pelo operador
Captura fornecida do site oficial Polo UniBF Cristalina/GO: cabeçalho e navegação; banner principal de campanha; cards de modalidades; cursos em destaque; apresentação da professora; atendimento; benefícios; unidade física; depoimentos; conteúdos; FAQ; CTA final; rodapé. Preservar arquitetura comercial, identidade azul/verde/branco, hierarquia e conteúdo sujeito a aprovação institucional.

## Evidências técnicas nesta revisão
- Branch exclusiva: `feat/polo-m03-privacy-leads-review`, PR #21.
- GitHub Actions para `da2ea702ab075705c4b372271d02bae692a04dff`: execução #20 (`44234903812`) concluída com sucesso.
- `src/components/home/HeroSection.tsx` na branch contém hero futurista, diferente do banner de campanha da captura; não declarar que a captura representa a versão da PR.
- `public/assets/hero/polo-ai-earth.webp` consultado na branch: 404. A imagem futurista não está integrada; o código usa fallback de banner.
- A captura visual não prova HTTP 200 da arte nova, funcionamento de CTAs, acessibilidade, privacidade de leads nem disponibilidade de cursos e preços.

## Próxima missão: prontidão funcional sem alterar produção
1. Inventariar todas as rotas e CTAs e verificar destino, teclado e feedback de erro.
2. Conferir WhatsApp e formulários sem transmitir dados pessoais reais; não gravar leads no navegador.
3. Conferir informações institucionais e campanhas apenas com fontes e aprovações autorizadas.
4. Confirmar qual hero é a referência final: banner institucional aprovado na captura ou arte futurista ainda pendente. Não substituir o banner sem aceite específico.
5. Validar em preview correspondente ao HEAD: desktop 1280px, tablet 768px, mobile 375px, redução de movimento, contraste, navegação por teclado e Network HTTP 200 dos assets.
6. Exigir GitHub Actions verde, preview rastreável por SHA, checklist assinado e revisão humana antes de considerar merge ou produção.

**Estado:** aceite visual de referência recebido; prontidão funcional e deploy da PR não comprovados. **NO-GO merge/produção.**
