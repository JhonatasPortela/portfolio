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
  {
    id: "emprega-itabela",
    featured: true,
    title: "Emprega Itabela",
    shortDescription:
      "Plataforma completa de empregabilidade e serviços autônomos, integrando candidatos, empresas e gerador de currículos profissional.",
    challenge:
      "Desenvolver uma solução centralizada para o mercado de trabalho local. O maior desafio foi criar um fluxo de dados seguro para três tipos de usuários distintos e implementar a tecnologia PWA para que o sistema funcionasse como um aplicativo nativo (APK) nos celulares dos usuários.",
    solution:
      "Construí uma plataforma robusta com React e Supabase, focada em acessibilidade. Implementei um gerador de currículos dinâmico que exporta dados em PDF, um painel para empresas gerenciarem vagas e uma vitrine para profissionais autônomos divulgarem seus serviços, tudo otimizado para instalação via PWA.",
    qualityHighlights: [
      {
        icon: "User", // Remete aos candidatos e empresas
        iconColor: "text-neon-cyan",
        title: "Ecossistema Completo",
        description:
          "Interface dedicada para empresas postarem vagas e candidatos gerenciarem candidaturas e serviços autônomos.",
      },
      {
        icon: "Zap", // Remete ao gerador automático
        iconColor: "text-neon-purple",
        title: "Gerador de Currículos",
        description:
          "Ferramenta integrada que transforma os dados do perfil em um currículo profissional pronto para o mercado.",
      },
      {
        icon: "Shield", // Remete à segurança e deploy PWA/APK
        iconColor: "text-neon-pink",
        title: "Tecnologia PWA/APK",
        description:
          "Sistema instalável diretamente no smartphone, garantindo acesso rápido e performance de aplicativo nativo.",
      },
    ],
    technologies: [
      "React",
      "Supabase",
      "PWA",
      "Tailwind CSS",
      "PDF Generation",
    ],
    image:
      "https://wqwmqsbzilykkyhjgosu.supabase.co/storage/v1/object/public/projects/Captura%20de%20tela%202026-01-27%20204331.png",
    gallery: [
      "https://wqwmqsbzilykkyhjgosu.supabase.co/storage/v1/object/public/projects/Captura%20de%20tela%202026-01-27%20203734.png",
      "https://wqwmqsbzilykkyhjgosu.supabase.co/storage/v1/object/public/projects/Captura%20de%20tela%202026-01-27%20203806.png",
      "https://wqwmqsbzilykkyhjgosu.supabase.co/storage/v1/object/public/projects/Captura%20de%20tela%202026-01-27%20203849.png",
      "https://wqwmqsbzilykkyhjgosu.supabase.co/storage/v1/object/public/projects/Captura%20de%20tela%202026-01-27%20203932.png",
      "https://wqwmqsbzilykkyhjgosu.supabase.co/storage/v1/object/public/projects/Captura%20de%20tela%202026-01-27%20204024.png",
      "https://wqwmqsbzilykkyhjgosu.supabase.co/storage/v1/object/public/projects/Captura%20de%20tela%202026-01-27%20204041.png",
      "https://wqwmqsbzilykkyhjgosu.supabase.co/storage/v1/object/public/projects/Captura%20de%20tela%202026-01-27%20204104.png",
      "https://wqwmqsbzilykkyhjgosu.supabase.co/storage/v1/object/public/projects/Captura%20de%20tela%202026-01-27%20204148.png",
    ],
    productionUrl: "https://empregaitabela.portela.app.br", // Ex: emprega-itabela.vercel.app
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
