# Missão — Arte do robô, responsividade e contraste

## Arte original
- Origem: imagem gerada nesta conversa, 1672 × 941 px, PNG original 1,8 MB.
- Otimização local: WebP qualidade 84, 108.200 bytes, dimensões 1672 × 941.
- Arquivo de entrega local: `polo-ai-earth.webp`.
- **Upload ao repositório não realizado**: o conector GitHub disponível aceita conteúdo textual/base64 mas não transfere diretamente o arquivo binário do ambiente de edição. A origem GitHub não pôde ser acessada por git local devido a falha DNS.
- O hero aponta para `/assets/hero/polo-ai-earth.webp`; na ausência da arte usa o banner institucional. **Renderização da arte em preview não comprovada**.
- Destino obrigatório após transferência autorizada: `artifacts/polo-unibf/public/assets/hero/polo-ai-earth.webp`.

## Correções na branch
- Reduzida altura mínima do hero em telas estreitas; tamanhos progressivos em sm/md.
- Imagem com `loading=eager`, `decoding=async` e `fetchPriority=high`.
- Animações Framer Motion respeitam `useReducedMotion`; anel decorativo tem `motion-reduce:animate-none`.
- CTA verde passou a usar texto azul escuro para contraste.

## Contraste calculado (WCAG)
- Branco sobre azul #003B5C: 11,80:1.
- Branco sobre verde #00B86B: 2,60:1 (inadequado para texto normal).
- Azul #003B5C sobre verde #00B86B: 4,53:1 (atinge AA para texto normal).
- Branco sobre azul #002b46: 14,64:1.
- Esses valores cobrem apenas pares específicos; auditoria visual e de acessibilidade completa pendente.

## Gates pendentes
- Transferir arte otimizada à branch e verificar arquivo retornado no GitHub.
- Validar em preview que o navegador carregou WebP (HTTP 200), sem fallback.
- Rodar `pnpm --filter @workspace/polo-unibf run test:privacy`, `typecheck`, `build`.
- Testar 375, 768, 1280 px e preferência de movimento reduzido.
- Aprovação institucional e revisão independente antes de qualquer merge/deploy.

Status: **NO-GO produção**. Nenhum deploy manual ou merge foi realizado.
