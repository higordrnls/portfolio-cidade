export type Project={id:string;order:number;name:string;subtitle:string;description:string;status:'built'|'building'|'planned';repo?:string;deploy?:string};
export const projects:Project[]=[
  {
    "id": "dash",
    "order": 1,
    "name": "Dashboard Vendas Power BI",
    "subtitle": "Inteligência comercial",
    "description": "Inteligência comercial.",
    "status": "built",
    "repo": "https://github.com/higordrnls/Dashboard-Vendas-PowerBI"
  },
  {
    "id": "kanban",
    "order": 2,
    "name": "Kanban Financeiro",
    "subtitle": "Organização financeira",
    "description": "Organização financeira.",
    "status": "built",
    "repo": "https://github.com/higordrnls/Kanban-Financeiro"
  },
  {
    "id": "archdaily",
    "order": 3,
    "name": "ArchDaily Pipeline Creator",
    "subtitle": "Pesquisa e automação",
    "description": "Pesquisa e automação.",
    "status": "built",
    "repo": "https://github.com/higordrnls/ArchDaily-Pipeline-Creator"
  },
  {
    "id": "retro",
    "order": 4,
    "name": "Retro Game Y2K",
    "subtitle": "Jogos e experimentação",
    "description": "Jogos e experimentação.",
    "status": "built",
    "repo": "https://github.com/higordrnls/retro-game-2000"
  },
  {
    "id": "hevy",
    "order": 5,
    "name": "Hevy AI Automator",
    "subtitle": "Automação e inteligência",
    "description": "Automação e inteligência.",
    "status": "built",
    "repo": "https://github.com/higordrnls/hevy-ai-automator"
  },
  {
    "id": "distributed",
    "order": 6,
    "name": "Distributed Wagering Processor",
    "subtitle": "Sistemas distribuídos",
    "description": "Sistemas distribuídos.",
    "status": "built",
    "repo": "https://github.com/higordrnls/distributed-wagering-processor"
  },
  {
    "id": "agade",
    "order": 7,
    "name": "Agadê",
    "subtitle": "Design de produto e óculos",
    "description": "Design de produto e óculos.",
    "status": "built",
    "repo": "https://github.com/higordrnls/agade",
    "deploy": "https://agade.vercel.app/"
  },
  {
    "id": "lumear",
    "order": 8,
    "name": "Lumear",
    "subtitle": "Arquitetura em desenvolvimento",
    "description": "Arquitetura em desenvolvimento.",
    "status": "building",
    "repo": "https://github.com/higordrnls/lumear"
  },
  {
    "id": "pastelaria",
    "order": 9,
    "name": "Pastelaria PDV",
    "subtitle": "Lote reservado para futuro projeto",
    "description": "Lote reservado para futuro projeto.",
    "status": "planned"
  }
];
