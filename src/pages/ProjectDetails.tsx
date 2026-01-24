import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Shield,
  User,
  Zap,
  ChevronRight,
  Home,
  Paintbrush,
  Globe,
  Headset,
  TrendingUp,
  Database,
  LucideIcon,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GalleryLightbox from "@/components/GalleryLightbox";
import { getProjectById, techColors, QualityHighlight } from "@/data/projects";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// Icon mapping for dynamic rendering
const iconMap: Record<string, LucideIcon> = {
  Shield,
  User,
  Zap,
  Paintbrush,
  Globe,
  Headset,
  TrendingUp,
  Database,
};

// Helper function to get background color from text color
const getIconBgColor = (iconColor: string): string => {
  const colorMap: Record<string, string> = {
    "text-neon-pink": "bg-neon-pink/20",
    "text-neon-cyan": "bg-neon-cyan/20",
    "text-neon-purple": "bg-neon-purple/20",
  };
  return colorMap[iconColor] || "bg-neon-purple/20";
};

const ProjectDetails = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const project = projectId ? getProjectById(projectId) : undefined;

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Projeto não encontrado
          </h1>
          <Link to="/projetos" className="text-neon-cyan hover:underline">
            Voltar para projetos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-12 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-neon-purple/5 via-transparent to-transparent" />
          <div className="container mx-auto px-6 relative z-10">
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-8"
            >
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link
                        to="/"
                        className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Home size={14} />
                        Home
                      </Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <ChevronRight size={14} />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link
                        to="/projetos"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        Projetos
                      </Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <ChevronRight size={14} />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbPage className="text-foreground">
                      {project.title}
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </motion.div>

            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mb-8"
            >
              <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft size={20} />
                Voltar
              </button>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-4xl"
            >
              <span className="text-neon-cyan text-sm font-medium tracking-wider uppercase">
                Estudo de Caso
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mt-3 mb-6">
                <span className="text-gradient">{project.title}</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {project.shortDescription}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-3 mt-8">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className={`px-4 py-2 text-sm font-medium rounded-full border border-glass-border glass-effect ${
                      techColors[tech] || "text-foreground"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Challenge & Solution */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* Challenge */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-card p-8 md:p-10"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-neon-pink/20 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-neon-pink" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    O Desafio
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                  {project.challenge}
                </p>
              </motion.div>

              {/* Solution */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="glass-card p-8 md:p-10"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-neon-cyan/20 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-neon-cyan" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    A Solução
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                  {project.solution}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quality Highlights - Dynamic Rendering */}
        <section className="py-16 md:py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-purple/5 to-transparent" />
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="text-neon-cyan text-sm font-medium tracking-wider uppercase">
                Qualidade Garantida
              </span>
              <h2 className="text-2xl md:text-4xl font-bold mt-3">
                Diferenciais e <span className="text-gradient">QA</span>
              </h2>
            </motion.div>

            <div
              className={`grid gap-6 md:gap-8 ${
                project.qualityHighlights.length === 1
                  ? "md:grid-cols-1 max-w-md mx-auto"
                  : project.qualityHighlights.length === 2
                    ? "md:grid-cols-2 max-w-3xl mx-auto"
                    : "md:grid-cols-3"
              }`}
            >
              {project.qualityHighlights.map((highlight, index) => {
                const IconComponent = iconMap[highlight.icon];

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="glass-card-hover p-8 text-center"
                  >
                    <div
                      className={`w-16 h-16 mx-auto mb-6 rounded-full ${getIconBgColor(highlight.iconColor)} flex items-center justify-center`}
                    >
                      {IconComponent && (
                        <IconComponent
                          className={`w-8 h-8 ${highlight.iconColor}`}
                        />
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      {highlight.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {highlight.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="text-neon-cyan text-sm font-medium tracking-wider uppercase">
                Galeria
              </span>
              <h2 className="text-2xl md:text-4xl font-bold mt-3">
                Screenshots do <span className="text-gradient">Sistema</span>
              </h2>
            </motion.div>

            <GalleryLightbox
              images={project.gallery}
              projectTitle={project.title}
            />
          </div>
        </section>

        {/* CTA - Only show if production URL exists */}
        {project.productionUrl && (
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <a
                  href={project.productionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-neon flex items-center gap-3 text-lg px-10 py-5 mx-auto"
                  >
                    <ExternalLink size={22} />
                    Acessar Sistema
                  </motion.button>
                </a>
              </motion.div>
            </div>
          </section>
        )}

        {/* Testimonial Section - Conditional Rendering */}
        {project.testimonial && (
          <section className="py-16 md:py-24 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-purple/5 to-transparent" />
            <div className="container mx-auto px-6 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-12"
                >
                  <span className="text-neon-cyan text-sm font-medium tracking-wider uppercase">
                    Feedback do Cliente
                  </span>
                  <h2 className="text-2xl md:text-4xl font-bold mt-3">
                    O que dizem sobre <span className="text-gradient">nós</span>
                  </h2>
                </motion.div>

                <div className="glass-card p-8 md:p-12 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-neon-purple to-neon-pink p-1">
                    {project.testimonial.avatar ? (
                      <img
                        src={project.testimonial.avatar}
                        alt={project.testimonial.author}
                        className="w-full h-full rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                        <span className="text-2xl font-bold text-gradient">
                          {project.testimonial.author.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>
                  <blockquote className="text-lg md:text-xl text-foreground italic mb-6 leading-relaxed">
                    "{project.testimonial.content}"
                  </blockquote>
                  <div>
                    <p className="font-bold text-foreground">
                      {project.testimonial.author}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {project.testimonial.role} • {project.testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Back to Projects */}
        <section className="py-12">
          <div className="container mx-auto px-6 text-center">
            <Link to="/projetos">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="btn-neon-outline flex items-center gap-2 mx-auto"
              >
                <ArrowLeft size={18} />
                Ver todos os projetos
              </motion.button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetails;
