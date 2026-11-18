# Redesign premium — Polo UniBF Cristalina/GO (revisão)

## Identidade e escopo
- Referência de layout: hero cinematográfico, cards premium e seções com contraste alto.
- Paleta exclusiva: azul institucional #003B5C, verde #00B86B, branco.
- Conteúdo de cursos e orientações permanece sujeito a confirmação da equipe responsável.
- Nenhuma integração ou branding de outros projetos educacionais.

## Arquivos de interface modificados
- `src/components/home/HeroSection.tsx`: hero responsivo com efeito de flutuação e halo, suporte a `prefers-reduced-motion`, CTA WhatsApp e navegação de modalidades.
- `src/components/home/ModalityCards.tsx`: cards com gradientes da paleta oficial, hover e sombras.
- `src/components/home/CourseHighlights.tsx`: cards destacados e revisão de textos.
- `src/components/home/FinalCTA.tsx`: atendimento em azul/verde.
- `src/components/layout/Header.tsx` e `Footer.tsx`: navegação e rodapé alinhados.

## Asset do robô
Foi criada uma imagem original de robô com a Terra na mão na conversa. O arquivo está disponível na sessão de criação, mas **não foi transferido ao repositório GitHub** nesta execução. O hero aponta para `/assets/hero/polo-ai-earth.webp` e, na ausência do arquivo, usa `/assets/hero/hero-agora-pode-ser-sua-vez.png`.
Para conclusão visual, exportar a arte aprovada como WebP otimizado, adicionar a `artifacts/polo-unibf/public/assets/hero/polo-ai-earth.webp` na mesma branch e verificar peso, licença e renderização no preview. Não declarar integração concluída antes da confirmação do asset.

## Gates
- Verificar o CI do HEAD atual (test:privacy, typecheck, build).
- Conferir desktop/mobile e movimento reduzido.
- Confirmar direitos de uso e aprovação institucional do personagem visual.
- Validar contraste, texto e botão de WhatsApp.
- Revisão humana independente e autorização explícita antes de merge/deploy.

**Produção: NO-GO.**
