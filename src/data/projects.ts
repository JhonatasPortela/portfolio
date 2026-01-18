export interface QualityHighlight {
  icon: string;
  iconColor: string;
  title: string;
  description: string;
}

export interface Project {
  id: string;
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
    id: "sistema-gestao-empresarial",
    title: "Sistema de Gestão Empresarial",
    shortDescription:
      "Plataforma completa para gerenciamento de empresas com módulos de finanças, RH e estoque. Desenvolvido com arquitetura escalável e foco em performance.",
    challenge:
      "O cliente enfrentava dificuldades em integrar múltiplos sistemas legados que não se comunicavam entre si, resultando em retrabalho manual e inconsistência de dados entre os departamentos de finanças, RH e estoque.",
    solution:
      "Desenvolvemos uma plataforma unificada com arquitetura modular em Java Spring Boot, permitindo que cada departamento opere de forma independente enquanto compartilha uma base de dados consistente. A integração via APIs RESTful eliminou o retrabalho e proporcionou visibilidade em tempo real.",
    qualityHighlights: [
      {
        icon: "Shield",
        iconColor: "text-neon-pink",
        title: "Segurança",
        description: "Autenticação JWT com refresh tokens, criptografia AES-256 para dados sensíveis e auditoria completa de ações.",
      },
      {
        icon: "User",
        iconColor: "text-neon-cyan",
        title: "Usabilidade",
        description: "Interface intuitiva com dashboard personalizado por perfil, reduzindo o tempo de treinamento em 60%.",
      },
      {
        icon: "Zap",
        iconColor: "text-neon-purple",
        title: "Performance",
        description: "Queries otimizadas com índices estratégicos, cache Redis e lazy loading, garantindo resposta < 200ms.",
      },
    ],
    technologies: ["Java", "Spring Boot", "React", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
    ],
    productionUrl: undefined,
    testimonial: {
      author: "Carlos Silva",
      role: "Diretor de Operações",
      company: "TechCorp Brasil",
      content: "A Portela Systems transformou completamente nossa operação. O sistema integrado reduziu nosso tempo de fechamento mensal de 5 dias para apenas 1.",
    },
  },
  {
    id: "ecommerce-moderno",
    title: "E-commerce Moderno",
    shortDescription:
      "Loja virtual com integração de pagamentos, gestão de pedidos e painel administrativo completo. UI/UX otimizada para conversão.",
    challenge:
      "A empresa precisava migrar de uma plataforma engessada para uma solução personalizada que permitisse maior controle sobre a experiência do usuário e integrações com múltiplos gateways de pagamento.",
    solution:
      "Criamos um e-commerce headless com React e Supabase, oferecendo total flexibilidade no frontend enquanto mantemos um backend robusto. Implementamos checkout otimizado com múltiplas opções de pagamento e gestão de estoque em tempo real.",
    qualityHighlights: [
      {
        icon: "Shield",
        iconColor: "text-neon-pink",
        title: "Segurança",
        description: "Checkout seguro com tokenização de cartões, proteção contra fraudes e conformidade PCI-DSS.",
      },
      {
        icon: "User",
        iconColor: "text-neon-cyan",
        title: "Usabilidade",
        description: "Jornada de compra simplificada em 3 passos, aumentando a taxa de conversão em 35%.",
      },
      {
        icon: "Zap",
        iconColor: "text-neon-purple",
        title: "Performance",
        description: "SSG para páginas de produtos, lazy loading de imagens e CDN global para carregamento < 1.5s.",
      },
    ],
    technologies: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    ],
    productionUrl: undefined,
    testimonial: {
      author: "Ana Rodrigues",
      role: "CEO",
      company: "Fashion Store",
      content: "Nossa taxa de conversão aumentou 35% após a implementação. A equipe da Portela Systems entendeu exatamente o que precisávamos.",
    },
  },
  {
    id: "dashboard-analitico",
    title: "Dashboard Analítico",
    shortDescription:
      "Painel de controle com visualização de dados em tempo real, relatórios personalizados e métricas de performance.",
    challenge:
      "A diretoria precisava de visibilidade em tempo real sobre KPIs críticos do negócio, mas os relatórios existentes eram gerados manualmente em planilhas, com atraso de dias.",
    solution:
      "Desenvolvemos um dashboard interativo com atualizações em tempo real via WebSocket, gráficos customizáveis e sistema de alertas automáticos. A integração com múltiplas fontes de dados consolida todas as métricas em uma única visualização.",
    qualityHighlights: [
      {
        icon: "Shield",
        iconColor: "text-neon-pink",
        title: "Segurança",
        description: "Controle de acesso granular por departamento, logs de auditoria e mascaramento de dados sensíveis.",
      },
      {
        icon: "User",
        iconColor: "text-neon-cyan",
        title: "Usabilidade",
        description: "Widgets drag-and-drop, filtros intuitivos e exportação em múltiplos formatos (PDF, Excel, CSV).",
      },
      {
        icon: "Database",
        iconColor: "text-neon-purple",
        title: "Inteligência de Dados",
        description: "Agregação de dados em background, cache inteligente e renderização otimizada para datasets massivos.",
      },
    ],
    technologies: ["React", "TypeScript", "PostgreSQL", "Docker"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
    ],
    productionUrl: undefined,
    testimonial: {
      author: "Roberto Mendes",
      role: "CFO",
      company: "DataDriven Inc",
      content: "Agora tomamos decisões baseadas em dados atualizados em tempo real. A qualidade da entrega superou nossas expectativas.",
    },
  },
  {
    id: "sistema-agendamentos",
    title: "Sistema de Agendamentos",
    shortDescription:
      "Aplicação para gestão de agendamentos e reservas com notificações automáticas e integração com calendários.",
    challenge:
      "A clínica perdia aproximadamente 30% dos agendamentos por faltas, além de enfrentar conflitos de horários devido ao controle manual em agenda física.",
    solution:
      "Implementamos um sistema completo de agendamentos com lembretes automáticos via SMS e e-mail, sincronização com Google Calendar e painel administrativo para gestão de profissionais e salas.",
    qualityHighlights: [
      {
        icon: "Shield",
        iconColor: "text-neon-pink",
        title: "Segurança",
        description: "Dados de pacientes criptografados em conformidade com LGPD, backups automáticos e acesso controlado.",
      },
      {
        icon: "User",
        iconColor: "text-neon-cyan",
        title: "Usabilidade",
        description: "Agendamento online 24/7, confirmação em um clique e interface responsiva para todas as telas.",
      },
      {
        icon: "Globe",
        iconColor: "text-neon-purple",
        title: "Alta Disponibilidade",
        description: "Notificações em tempo real, sincronização instantânea entre dispositivos e zero downtime.",
      },
    ],
    technologies: ["Java", "React", "MySQL", "Docker"],
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
    ],
    productionUrl: undefined,
    testimonial: {
      author: "Dra. Marina Costa",
      role: "Diretora Clínica",
      company: "Clínica Vida",
      content: "Reduzimos as faltas em 70% com o sistema de lembretes. A organização da agenda melhorou drasticamente.",
    },
  },
  {
    id: "portal-administrativo",
    title: "Portal Administrativo",
    shortDescription:
      "Sistema administrativo completo com controle de usuários, permissões e auditoria de ações.",
    challenge:
      "A empresa não tinha controle centralizado sobre quem acessava quais recursos, gerando riscos de segurança e dificuldade em auditorias internas.",
    solution:
      "Desenvolvemos um portal com sistema RBAC (Role-Based Access Control) completo, permitindo gestão granular de permissões e rastreabilidade total de todas as ações realizadas no sistema.",
    qualityHighlights: [
      {
        icon: "Shield",
        iconColor: "text-neon-pink",
        title: "Segurança",
        description: "Autenticação multi-fator, sessões com timeout, logs imutáveis e detecção de atividades suspeitas.",
      },
      {
        icon: "Paintbrush",
        iconColor: "text-neon-cyan",
        title: "Personalização",
        description: "Gestão visual de hierarquia de permissões, bulk operations e templates de perfis pré-configurados.",
      },
      {
        icon: "TrendingUp",
        iconColor: "text-neon-purple",
        title: "Estrutura Escalável",
        description: "Cache de permissões em memória, verificação de acesso em < 5ms e escalabilidade horizontal.",
      },
    ],
    technologies: ["React", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
    ],
    productionUrl: undefined,
    testimonial: {
      author: "Fernando Lima",
      role: "Gerente de TI",
      company: "SecureTech",
      content: "Passamos em todas as auditorias de compliance após implementar o portal. A rastreabilidade é impecável.",
    },
  },
  {
    id: "api-integracao",
    title: "API de Integração",
    shortDescription:
      "Backend robusto com APIs RESTful para integração entre sistemas, documentação completa e alta disponibilidade.",
    challenge:
      "Múltiplos sistemas da empresa precisavam trocar dados, mas cada um usava formatos diferentes, resultando em integrações frágeis e manutenção complexa.",
    solution:
      "Criamos uma API Gateway centralizada com transformação de dados, versionamento semântico, documentação OpenAPI interativa e monitoramento de saúde em tempo real.",
    qualityHighlights: [
      {
        icon: "Shield",
        iconColor: "text-neon-pink",
        title: "Segurança",
        description: "Rate limiting, API keys com escopos, validação de schemas e proteção contra injeção.",
      },
      {
        icon: "Headset",
        iconColor: "text-neon-cyan",
        title: "Suporte Especializado",
        description: "Documentação Swagger interativa, SDKs auto-gerados e sandbox para testes.",
      },
      {
        icon: "Globe",
        iconColor: "text-neon-purple",
        title: "Alta Disponibilidade",
        description: "Load balancing automático, circuit breaker pattern e SLA de 99.9% uptime.",
      },
    ],
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
    ],
    productionUrl: undefined,
    testimonial: {
      author: "Lucas Ferreira",
      role: "Tech Lead",
      company: "IntegraSoft",
      content: "A documentação é tão boa que integramos novos parceiros em menos de uma semana. Excelente trabalho técnico.",
    },
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
};

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};
