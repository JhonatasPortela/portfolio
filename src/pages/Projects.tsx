import { motion } from "framer-motion";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
}

const allProjects: Project[] = [
  {
    title: "Sistema de Gestão Empresarial",
    description:
      "Plataforma completa para gerenciamento de empresas com módulos de finanças, RH e estoque. Desenvolvido com arquitetura escalável e foco em performance.",
    technologies: ["Java", "Spring Boot", "React", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    title: "E-commerce Moderno",
    description:
      "Loja virtual com integração de pagamentos, gestão de pedidos e painel administrativo completo. UI/UX otimizada para conversão.",
    technologies: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
  },
  {
    title: "Dashboard Analítico",
    description:
      "Painel de controle com visualização de dados em tempo real, relatórios personalizados e métricas de performance.",
    technologies: ["React", "TypeScript", "PostgreSQL", "Docker"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    title: "Sistema de Agendamentos",
    description:
      "Aplicação para gestão de agendamentos e reservas com notificações automáticas e integração com calendários.",
    technologies: ["Java", "React", "MySQL", "Docker"],
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&h=400&fit=crop",
  },
  {
    title: "Portal Administrativo",
    description:
      "Sistema administrativo completo com controle de usuários, permissões e auditoria de ações.",
    technologies: ["React", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
  },
  {
    title: "API de Integração",
    description:
      "Backend robusto com APIs RESTful para integração entre sistemas, documentação completa e alta disponibilidade.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
  },
];

const techColors: Record<string, string> = {
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

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-card-hover overflow-hidden group flex flex-col h-full"
    >
      <div className="relative h-48 overflow-hidden flex-shrink-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
      </div>

      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground group-hover:text-gradient transition-all duration-300 line-clamp-1">
          {project.title}
        </h3>
        
        <p className="text-muted-foreground text-sm md:text-base mb-6 leading-relaxed line-clamp-3 min-h-[4.5rem]">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6 min-h-[2rem]">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className={`px-3 py-1 text-xs font-medium rounded-full border border-glass-border ${
                techColors[tech] || "text-foreground"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="btn-neon-outline flex items-center justify-center gap-2 text-sm w-full"
          >
            <ExternalLink size={16} />
            Ver Detalhes
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <section className="py-16 md:py-24 relative">
          <div className="container mx-auto px-6">
            {/* Back button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-8"
            >
              <Link to="/">
                <motion.button
                  whileHover={{ scale: 1.05, x: -4 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowLeft size={20} />
                  Voltar
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="text-neon-cyan text-sm font-medium tracking-wider uppercase">
                Vitrine Completa
              </span>
              <h1 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
                Todos os <span className="text-gradient">Projetos</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore todos os projetos desenvolvidos pela Portela Systems com foco em qualidade, 
                performance e experiência do usuário.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {allProjects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
