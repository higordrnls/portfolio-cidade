export type Project={id:string;order:number;name:string;subtitle:string;description:string;status:'built'|'building'|'planned';repo?:string;deploy?:string};
export const projects:Project[]=[
  {
    "id": "dash",
    "order": 1,
    "name": "Dashboard Vendas Power BI",
    "subtitle": "Inteligência de negócios · Power BI / DAX",
    "description": "Uma análise comercial baseada em dados reais de operação: R$ 214.262 em faturamento, 7.924 unidades vendidas e indicadores de ticket médio, evolução das vendas e desempenho por produto. A visualização transforma números dispersos em decisões práticas.",
    "status": "built",
    "repo": "https://github.com/higordrnls/Dashboard-Vendas-PowerBI"
  },
  {
    "id": "kanban",
    "order": 2,
    "name": "Kanban Financeiro",
    "subtitle": "Gestão financeira · JavaScript",
    "description": "Uma interface visual para organizar receitas e despesas em cartões, acompanhar períodos e calcular saldos automaticamente. Desenvolvido com HTML, CSS e JavaScript, incluindo persistência local e alternância de tema.",
    "status": "built",
    "repo": "https://github.com/higordrnls/Kanban-Financeiro",
    "deploy": "https://higordrnls.github.io/Kanban-Financeiro/"
  },
  {
    "id": "archdaily",
    "order": 3,
    "name": "ArchDaily Pipeline Creator",
    "subtitle": "Arquitetura encontra automação · Angular / Python",
    "description": "Portal full stack que reúne notícias recentes de arquitetura por meio de scraping com Python e BeautifulSoup. Um frontend Angular consome uma API serverless hospedada na Vercel, aproximando pesquisa arquitetônica e desenvolvimento web.",
    "status": "built",
    "repo": "https://github.com/higordrnls/ArchDaily-Pipeline-Creator",
    "deploy": "https://arch-daily-pipeline-creator.vercel.app/"
  },
  {
    "id": "retro",
    "order": 4,
    "name": "Retro Game Y2K",
    "subtitle": "Experimento em jogos · Rust / Bevy / WASM",
    "description": "Um experimento de desenvolvimento de jogos com Rust e Bevy, explorando mecânicas, renderização e execução no navegador por WebAssembly. Representa a expansão do portfólio para além de aplicações web convencionais.",
    "status": "built",
    "repo": "https://github.com/higordrnls/retro-game-2000"
  },
  {
    "id": "hevy",
    "order": 5,
    "name": "Hevy AI Automator",
    "subtitle": "Automação de treinos · TypeScript / Playwright",
    "description": "Motor de automação que converte treinos estruturados em rotinas configuradas no Hevy. Usa validação de dados com Zod e automação de navegador com Playwright para reduzir tarefas repetitivas de cadastro de exercícios, séries e intervalos.",
    "status": "built",
    "repo": "https://github.com/higordrnls/hevy-ai-automator"
  },
  {
    "id": "distributed",
    "order": 6,
    "name": "Distributed Wagering Processor",
    "subtitle": "Engenharia backend · Bun / NestJS / PostgreSQL",
    "description": "Processador distribuído de operações de carteira virtual com idempotência, concorrência controlada, ledger e mensageria. No mesmo repositório, o Tigrinho de Mentirinha demonstra uma experiência jogável com backend serverless e saldo persistido.",
    "status": "built",
    "repo": "https://github.com/higordrnls/distributed-wagering-processor",
    "deploy": "https://distributed-wagering-processor.pages.dev/"
  },
  {
    "id": "agade",
    "order": 7,
    "name": "Agadê",
    "subtitle": "Design autoral · Produto / Marca / Tecnologia",
    "description": "Uma marca conceitual de óculos que investiga fabricação digital, linguagem de produto e circularidade. O projeto reúne branding, documentação de produto, protótipos e uma experiência digital de catálogo. É o edifício central desta cidade por representar uma ideia cultivada há anos.",
    "status": "built",
    "repo": "https://github.com/higordrnls/agade",
    "deploy": "https://agade.vercel.app/"
  },
  {
    "id": "lumear",
    "order": 8,
    "name": "Lumear",
    "subtitle": "Arquitetura e construção · Em desenvolvimento",
    "description": "Conceito de escritório e construtora que articula projeto arquitetônico, bem-estar ambiental e diferentes repertórios culturais. O canteiro representa um empreendimento em desenvolvimento: sua arquitetura, serviços e identidade ainda estão sendo construídos.",
    "status": "building",
    "repo": "https://github.com/higordrnls/lumear"
  },
  {
    "id": "pastelaria",
    "order": 9,
    "name": "Pastelaria PDV",
    "subtitle": "Varejo e memória afetiva · Projeto futuro",
    "description": "Lote reservado para uma futura aplicação de ponto de venda de pastelaria, conectando gestão de pedidos, caixa e operação comercial a um projeto de negócio inspirado em receitas de família. Ainda não existe repositório público.",
    "status": "planned"
  }
];
