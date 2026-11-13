# Cidade-Portfólio — Higor Dornelas

Portfólio interativo inspirado em uma maquete urbana isométrica. A cidade usa a imagem autoral `public/cidade-master.webp` como cenário principal e sobrepõe **nove marcadores clicáveis**, com descrições, status e links de cada projeto.

## Experiência

- **Dia e noite**: controles de iluminação visual.
- **Exploração**: zoom, arraste e centralização da maquete.
- **Projetos**: marcadores numerados de 01 a 09, painel com detalhes, links e navegação por teclado (setas e Esc).
- **Responsividade**: interface adaptada para telas menores.
- **Agadê**: marco central da cidade; **Lumear**: em construção; **Pastelaria PDV**: lote reservado.

> A alternância dia/noite aplica filtros sobre a mesma imagem-base. Não são duas renderizações independentes.

## Desenvolvimento

Requer Node.js 22 ou superior.

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Deploy

### GitHub Pages

O workflow `.github/workflows/deploy.yml` executa o build e publica `dist` quando a branch `main` recebe atualizações. O endereço é:

https://higordrnls.github.io/portfolio-cidade/

O `vite.config.ts` usa `/portfolio-cidade/` como base fora da Vercel.

### Vercel

Importe o repositório `higordrnls/portfolio-cidade` em https://vercel.com/new e escolha a branch `main`.

- Framework preset: **Vite**
- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`
- Root directory: `./`

O projeto inclui `vercel.json` para configurar o build. Na Vercel, `vite.config.ts` usa base `/`. A publicação automática na Vercel depende da integração do repositório na sua conta.

## Percurso

1. Dashboard Vendas Power BI
2. Kanban Financeiro
3. ArchDaily Pipeline Creator
4. Retro Game Y2K
5. Hevy AI Automator
6. Distributed Wagering Processor / Tigrinho de Mentirinha
7. Agadê — edifício central
8. Lumear — em construção
9. Pastelaria PDV — lote reservado

## Arquivos principais

- `public/cidade-master.webp`: cenário renderizado aprovado
- `src/main.tsx`: interface e interações
- `src/projects.ts`: dados e links dos nove projetos
- `src/style.css`: layout e estilos
