# Missão de prontidão funcional — inspeção inicial e correções

## Escopo auditado no código
- `App.tsx`: rotas /, /cursos, /graduacao, /pos-graduacao, /tecnologo, /extensao, /sobre, /contato, /links, /faq, /unibf-tv, /midias, /blog, /newsletter, /admin e fallback 404.
- `Header.tsx`: navegação desktop e mobile, CTA WhatsApp; identificado botão mobile sem estado `aria-expanded`, sem `aria-controls` e com rótulo em inglês.
- `lib/whatsapp.ts`: contato usa `wa.me` e `window.open` com `noopener,noreferrer`, evento de clique separado; mensagem só enviada pelo usuário no WhatsApp.
- `HeroSection.tsx`: referência anterior usava arte futurista ausente no GitHub e banner como fallback, divergindo da captura institucional aprovada.
- `public/assets/hero/hero-agora-pode-ser-sua-vez.png`: API GitHub encontrou o arquivo (blob `3177e8807c544d97d4c6fa31c988bad3392b6e33`).

## Correções efetivamente aplicadas apenas na branch
- Header mobile: alternância funcional, rótulos em português Abrir/Fechar menu, `aria-expanded`, `aria-controls` e elemento `nav` com nome acessível.
- Hero: utiliza diretamente o banner institucional existente, sem tentar carregar automaticamente a arte futurista não aprovada.
- Teste estático do hero atualizado para exigir o banner aprovado e proibir referência ao robô no componente.

## Limites e gates
- Inspeção de rotas não equivale a navegação de ponta a ponta. Formulários, privacidade integral, CTA de todas as seções, dados institucionais e demais páginas ainda exigem auditoria.
- Testes reais em 375/768/1280, teclado, contraste e movimento reduzido não executados por ausência de preview atualizado do novo HEAD.
- Consulta inicial ao commit `88df7ac93ef8da17ce9505c486323cc077a88175` retornou zero runs e zero statuses; aguardar GitHub Actions antes de declarar PASS.
- Não houve merge, publicação manual ou deploy de produção. **NO-GO**.
