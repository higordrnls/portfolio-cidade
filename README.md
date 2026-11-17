# Cidade-Portfólio — Higor Dornelas

**Uma cidade interativa em 3D onde arquitetura, tecnologia e criação se encontram.**

Em vez de apresentar meus trabalhos em uma coleção de cartões, construí uma cidade navegável. Cada edifício representa um projeto, e os espaços em construção e lotes reservados representam ideias que ainda estão tomando forma.

[**Explorar a cidade**](https://higordrnls.github.io/portfolio-cidade/) · [LinkedIn](https://www.linkedin.com/in/hdornelas)

## Experiência

- Cena tridimensional em tempo real, com câmera ortográfica, edifícios, vegetação, vias e elementos animados.
- Alternância entre dia e noite na mesma composição urbana, com iluminação, materiais e emissão de luz ajustados ao horário.
- Exploração por arraste, zoom e retorno à visão geral.
- Nove marcadores interativos: acesso à aplicação publicada quando disponível, ou ao GitHub; projetos planejados exibem informações.
- Interface adaptada a desktop e dispositivos móveis, com marcadores compactos em telas menores.
- Seções de apresentação pessoal, trajetória, habilidades, projetos e contato.

## Projetos da cidade

| Nº | Projeto | Área | Acesso |
|---|---|---|---|
| 1 | Dashboard Vendas Power BI | Inteligência de negócios · Power BI / DAX | [GitHub](https://github.com/higordrnls/Dashboard-Vendas-PowerBI) |
| 2 | Kanban Financeiro | Gestão financeira · JavaScript | [Acessar projeto](https://higordrnls.github.io/Kanban-Financeiro/) · [GitHub](https://github.com/higordrnls/Kanban-Financeiro) |
| 3 | ArchDaily Pipeline Creator | Arquitetura encontra automação · Angular / Python | [Acessar projeto](https://arch-daily-pipeline-creator.vercel.app/) · [GitHub](https://github.com/higordrnls/ArchDaily-Pipeline-Creator) |
| 4 | Retro Game Y2K | Experimento em jogos · Rust / Bevy / WASM | [Acessar projeto](https://higordrnls.github.io/retro-game-2000/) · [GitHub](https://github.com/higordrnls/retro-game-2000) |
| 5 | Hevy AI Automator | Automação de treinos · TypeScript / Playwright | [GitHub](https://github.com/higordrnls/hevy-ai-automator) |
| 6 | Distributed Wagering Processor | Engenharia backend · Bun / NestJS / PostgreSQL | [Acessar projeto](https://distributed-wagering-processor.pages.dev/) · [GitHub](https://github.com/higordrnls/distributed-wagering-processor) |
| 7 | Agadê | Design autoral · Produto / Marca / Tecnologia | [Acessar projeto](https://agade.vercel.app/) · [GitHub](https://github.com/higordrnls/agade) |
| 8 | Lumear | Arquitetura e construção · Em desenvolvimento | [GitHub](https://github.com/higordrnls/lumear) |
| 9 | Pastelaria PDV | Varejo e memória afetiva · Projeto futuro | Planejado |

O edifício central é a Agadê. A Lumear ocupa um canteiro em construção e a Pastelaria PDV tem um lote reservado.

## Arquitetura técnica

A experiência principal utiliza **HTML, CSS, JavaScript e Three.js (r128)**, com WebGL para renderizar a cidade. A geometria é construída por código, não por sobreposição de uma imagem estática. Texturas geradas em canvas, materiais, luzes, sombras e malhas instanciadas compõem o cenário.

O repositório mantém também a implementação anterior em React 19 e TypeScript. Vite organiza o desenvolvimento e o build; GitHub Actions publica os arquivos no GitHub Pages.

| Caminho | Responsabilidade |
|---|---|
| `index.html` | Entrada do site e redirecionamento à cidade 3D |
| `public/experimento-3d/index.html` | Experiência 3D oficial, interface e dados dos projetos |
| `public/experimento-3d/perfil.png` | Retrato do autor |
| `public/preview-dia/index.html` | Ambiente de experimentação visual |
| `src/` | Implementação anterior em React e TypeScript |
| `public/cidade-master.webp` | Cenário da implementação anterior |
| `.github/workflows/deploy.yml` | Build e publicação automatizada |

## Desenvolvimento local

Requer Node.js 22, npm e um navegador com suporte a WebGL. A cena utiliza Three.js via CDN, portanto requer conexão para carregar essa dependência.

```bash
git clone https://github.com/higordrnls/portfolio-cidade.git
cd portfolio-cidade
npm install
npm run dev
```

Para gerar e visualizar o build:

```bash
npm run build
npm run preview
```

## Publicação

A branch `main` aciona o workflow de GitHub Actions, que gera `dist` e publica no GitHub Pages. O workflow também inclui a experiência experimental 2D da branch `feat/cidade-2d-interativa` em `/preview/`.

- [Portfólio oficial](https://higordrnls.github.io/portfolio-cidade/)
- [Prévia de materiais e iluminação](https://higordrnls.github.io/portfolio-cidade/preview-dia/)

## Contato

- [LinkedIn](https://www.linkedin.com/in/hdornelas)
- [GitHub](https://github.com/higordrnls)
- [E-mail](mailto:higordrnls02@gmail.com)

---

Uma cidade em constante construção, assim como minha trajetória.
