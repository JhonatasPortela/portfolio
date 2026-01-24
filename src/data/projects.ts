export interface QualityHighlight {
  icon: string;
  iconColor: string;
  title: string;
  description: string;
}

export interface Project {
  id: string;
  featured: boolean;
  title: string;
  shortDescription: string;
  challenge: string;
  solution: string;
  qualityHighlights: QualityHighlight[];
  technologies: string[];
  image: string;
  gallery: string[];
  productionUrl?: string;
  testimonial?: {
    author: string;
    role: string;
    company: string;
    content: string;
    avatar?: string;
  };
}

export const projects: Project[] = [
  {
    id: "wiki-rick-and-morty",
    featured: true,
    title: "Wiki Rick and Morty",
    shortDescription:
      "Enciclopédia interativa desenvolvida como desafio técnico para a Gestão Maker, conquistando o 2º lugar no processo seletivo através de uma arquitetura sólida em TS.",
    challenge:
      "Meu primeiro grande desafio utilizando TypeScript e React simultaneamente. O objetivo era integrar a 'The Rick and Morty API' em uma interface de alta fidelidade, superando a curva de aprendizado inicial e entregando funcionalidades complexas em tempo recorde.",
    solution:
      "Desenvolvi uma SPA robusta utilizando Chakra UI para uma interface moderna e acessível. Implementei tipagem estrita com TypeScript para garantir a segurança dos dados, além de um sistema de Toggle para Mode Dark/Light, demonstrando domínio em bibliotecas de componentes e estados globais.",
    qualityHighlights: [
      {
        icon: "Globe", // Remete ao consumo de API e alcance Web
        iconColor: "text-neon-cyan",
        title: "TypeScript & Chakra",
        description:
          "Uso de interfaces personalizadas e componentes estilizados para garantir um código limpo, tipado e visualmente impactante.",
      },
      {
        icon: "Paintbrush", // Remete ao tema, UI e Dark/Light mode
        iconColor: "text-neon-purple",
        title: "Dark/Light Mode",
        description:
          "Implementação de tema dinâmico através do Chakra UI, proporcionando uma experiência de usuário personalizada e moderna.",
      },
      {
        icon: "TrendingUp", // Remete ao sucesso no processo seletivo (2º lugar)
        iconColor: "text-neon-pink",
        title: "Destaque Seletivo",
        description:
          "Projeto premiado com o 2º lugar entre os candidatos, validando a qualidade da entrega e proatividade técnica.",
      },
    ],
    technologies: ["React", "TypeScript", "Chakra UI", "Rest API", "Vercel"],
    image:
      "https://wqwmqsbzilykkyhjgosu.supabase.co/storage/v1/object/public/projects/Captura%20de%20tela%202026-01-18%20171712.png",
    gallery: [
      "https://wqwmqsbzilykkyhjgosu.supabase.co/storage/v1/object/public/projects/Captura%20de%20tela%202026-01-18%20171712.png",
      "https://wqwmqsbzilykkyhjgosu.supabase.co/storage/v1/object/public/projects/Captura%20de%20tela%202026-01-18%20171803.png",
      "https://wqwmqsbzilykkyhjgosu.supabase.co/storage/v1/object/public/projects/Captura%20de%20tela%202026-01-18%20171818.png",
      "https://wqwmqsbzilykkyhjgosu.supabase.co/storage/v1/object/public/projects/Captura%20de%20tela%202026-01-18%20171838.png",
    ],
    productionUrl: "https://processo-seletivo-gestao-maker.vercel.app/",
    /*testimonial: {
      author: "Gestão Maker",
      role: "Desafio de Contratação",
      company: "Software House",
      content:
        "Este projeto foi o marco da minha entrada na empresa. Mesmo enfrentando ferramentas novas (TS/Chakra), a persistência em entregar uma solução completa me garantiu o reconhecimento e a vaga.",
    }, */
  },
];

export const techColors: Record<string, string> = {
  Java: "text-neon-pink",
  "Spring Boot": "text-neon-cyan",
  React: "text-neon-cyan",
  PostgreSQL: "text-neon-purple",
  TypeScript: "text-neon-cyan",
  Supabase: "text-neon-purple",
  "Tailwind CSS": "text-neon-pink",
  Docker: "text-neon-cyan",
  MySQL: "text-neon-purple",
  "Chakra UI": "text-neon-purple",
  "Rest API": "text-neon-pink",
  Vercel: "text-neon-cyan",
};

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};
