import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects, techColors } from "@/data/projects";
import type { Project } from "@/data/projects";

// Show only first 3 projects on home
const featuredProjects = projects.filter((project) => project.featured);

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="glass-card-hover overflow-hidden group flex flex-col h-full"
    >
      {/* Project Image */}
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
          {project.shortDescription}
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
          <Link
            to={`/projects/${project.id}`}
            onClick={() => window.scrollTo(0, 0)}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="btn-neon-outline flex items-center justify-center gap-2 text-sm w-full"
            >
              <ExternalLink size={16} />
              Ver Detalhes
            </motion.button>
          </Link>
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
            Soluções desenvolvidas com foco em qualidade, performance e
            experiência do usuário.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
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
          <Link to="/projetos" onClick={() => window.scrollTo(0, 0)}>
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
