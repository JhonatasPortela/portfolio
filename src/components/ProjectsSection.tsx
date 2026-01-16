import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
}

const projects: Project[] = [
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
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="glass-card-hover overflow-hidden group"
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
      </div>

      <div className="p-6 md:p-8 flex flex-col">
        <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground group-hover:text-gradient transition-all duration-300">
          {project.title}
        </h3>
        
        <p className="text-muted-foreground text-sm md:text-base mb-6 flex-grow leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
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

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="btn-neon-outline flex items-center justify-center gap-2 text-sm w-full"
        >
          <ExternalLink size={16} />
          Ver Detalhes
        </motion.button>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-neon-cyan text-sm font-medium tracking-wider uppercase">
            Portfólio
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            Projetos em <span className="text-gradient">Destaque</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Soluções desenvolvidas com foco em qualidade, performance e experiência do usuário.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Ver todos os projetos button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mt-12"
        >
          <Link to="/projetos">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="btn-neon flex items-center gap-3 text-base px-8 py-4"
            >
              Ver todos os projetos
              <ArrowRight size={20} />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
