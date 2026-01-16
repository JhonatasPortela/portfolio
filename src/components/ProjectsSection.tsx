import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
}

const projects: Project[] = [
  {
    title: "Sistema de Gestão Empresarial",
    description:
      "Plataforma completa para gerenciamento de empresas com módulos de finanças, RH e estoque. Desenvolvido com arquitetura escalável e foco em performance.",
    technologies: ["Java", "Spring Boot", "React", "PostgreSQL"],
  },
  {
    title: "E-commerce Moderno",
    description:
      "Loja virtual com integração de pagamentos, gestão de pedidos e painel administrativo completo. UI/UX otimizada para conversão.",
    technologies: ["React", "Node.js", "Supabase", "Stripe"],
  },
  {
    title: "App de Automação QA",
    description:
      "Framework de testes automatizados para garantir qualidade em aplicações web e mobile. Relatórios detalhados e integração CI/CD.",
    technologies: ["Selenium", "Java", "Jenkins", "TestNG"],
  },
];

const techColors: Record<string, string> = {
  Java: "text-neon-pink",
  "Spring Boot": "text-neon-cyan",
  React: "text-neon-cyan",
  PostgreSQL: "text-neon-purple",
  "Node.js": "text-neon-cyan",
  Supabase: "text-neon-purple",
  Stripe: "text-neon-pink",
  Selenium: "text-neon-cyan",
  Jenkins: "text-neon-pink",
  TestNG: "text-neon-purple",
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="glass-card-hover p-6 md:p-8 group"
    >
      <div className="flex flex-col h-full">
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

        <div className="flex gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="btn-neon-outline flex items-center gap-2 text-sm"
          >
            <ExternalLink size={16} />
            Visualizar Projeto
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="p-2 rounded-lg border border-glass-border text-muted-foreground hover:text-foreground hover:border-neon-purple/50 transition-all duration-300"
          >
            <Github size={18} />
          </motion.button>
        </div>
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
      </div>
    </section>
  );
};

export default ProjectsSection;
