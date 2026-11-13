# Cidade-Portfólio — Higor Dornelas

Maquete arquitetônica **diurna** que apresenta projetos de software, dados e arquitetura como edificações de uma cidade.

## Percurso definido

1. Dashboard Vendas Power BI
2. Kanban Financeiro
3. ArchDaily Pipeline Creator
4. Retro Game Y2K
5. Hevy AI Automator
6. Distributed Wagering Processor
7. **Agadê** — maior edifício, no centro
8. **Lumear** — em construção, perto da Agadê
9. **Pastelaria PDV** — lote reservado, ainda sem repositório

A sequência é a ordem de visita; a **implantação preserva a composição anterior**, com projetos nas bordas em torno da Agadê.

## Rodar localmente

    npm install
    npm run dev

## Build

    npm run build

Projeto em React, TypeScript e Vite. O mapa é uma imagem SVG de apoio sob áreas interativas em SVG, com hover, foco por teclado, zoom, seleção e painel de detalhes; no celular há uma lista de navegação alternativa.

**Para ativar a maquete aprovada:** envie o arquivo `cidade-estudo-01.png` à pasta `public/` pelo botão **Add file → Upload files** no GitHub. A aplicação tenta carregar essa imagem primeiro; enquanto ela não estiver disponível, mostra automaticamente o SVG provisório. O PNG original está disponível na conversa do projeto. Depois de enviar, confira os hotspots, pois a arte tem rótulos antigos incorporados e as áreas clicáveis ainda exigem calibração.\n\n**Nota sobre a arte:** a maquete detalhada aprovada em estudo preliminar existe como PNG, mas a integração GitHub disponível nesta sessão não aceita seu envio binário. O repositório inclui uma **ilustração esquemática SVG provisória**, autoral e editável, para que o site funcione desde o primeiro commit. A próxima revisão substituirá essa arte pela maquete detalhada, removendo rótulos incorporados e refinando os polígonos clicáveis.

Implementação independente, inspirada no conceito de cidade interativa do portfólio da Luana Groth; não replica seu código ou recursos visuais.
