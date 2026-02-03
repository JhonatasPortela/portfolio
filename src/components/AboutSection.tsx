import { motion } from "framer-motion";
import {
  Code2,
  Database,
  TestTube,
  Rocket,
  Smartphone,
  Zap,
  Layout,
  ClipboardCheck,
} from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const skills = [
  {
    icon: TestTube,
    title: "Quality Assurance",
    description: "Garantia de Qualidade, Testes Manuais e Report de Bugs",
    color: "text-neon-pink",
  },
  {
    icon: Code2,
    title: "Backend",
    description: "Java, Spring Boot e Integração de APIs",
    color: "text-neon-purple",
  },
  {
    icon: Layout,
    title: "Frontend",
    description: "React, TypeScript, Tailwind CSS e Chakra UI",
    color: "text-neon-cyan",
  },
  {
    icon: Database,
    title: "Banco de Dados",
    description: "PostgreSQL e Supabase",
    color: "text-neon-cyan",
  },
  {
    icon: Smartphone,
    title: "Mobile & PWA",
    description: "Android Studio (APK) e Progressive Web Apps",
    color: "text-neon-purple",
  },
  {
    icon: Rocket,
    title: "Deploy & DevOps",
    description: "Docker, GitHub Actions e Gerenciamento de VPS",
    color: "text-neon-pink",
  },
  {
    icon: Zap,
    title: "IA & Produtividade",
    description: "Desenvolvimento assistido com Lovable e ferramentas de IA",
    color: "text-neon-cyan",
  },
  {
    icon: ClipboardCheck, // Você precisará importar o ClipboardCheck do lucide-react
    title: "Gestão & Processos",
    description: "Metodologias Ágeis, Clean Code e Foco em Entrega de Valor",
    color: "text-neon-purple",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/2 left-0 w-1/2 h-96 bg-neon-purple/5 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-1/3 h-64 bg-neon-cyan/5 blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-neon-pink text-sm font-medium tracking-wider uppercase">
            Sobre
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            Liderança e <span className="text-gradient">Visão</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo & Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center lg:items-start"
          >
            <div className="relative mb-8">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neon-cyan via-neon-purple to-neon-pink blur-lg opacity-50 animate-pulse-slow" />
              <div className="relative border-gradient rounded-full p-1">
                <img
                  src={profilePhoto}
                  alt="Jhonatas Portela"
                  className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover"
                />
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-2 text-center lg:text-left">
              Jhonatas Portela
            </h3>
            <p className="text-neon-cyan text-sm font-medium mb-4 text-center lg:text-left">
              Fundador da Portela Systems | QA & Full Stack Developer
            </p>

            <p className="text-muted-foreground leading-relaxed text-center lg:text-left max-w-lg">
              Formado em{" "}
              <span className="text-neon-cyan font-medium">
                Análise e Desenvolvimento de Sistemas
              </span>
              , especialista em{" "}
              <span className="text-neon-pink font-medium">
                Quality Assurance
              </span>{" "}
              e desenvolvedor focado em{" "}
              <span className="text-neon-purple font-medium">Java</span>, unindo
              experiência técnica à fundação da Portela Systems. Apaixonado por
              código limpo, boas práticas e entrega de valor.
            </p>
          </motion.div>

          {/* Skills Grid - Agora com suporte a mais itens e scroll suave no mobile */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid sm:grid-cols-2 gap-4 max-h-[600px] lg:max-h-none overflow-y-auto lg:overflow-visible pr-2 lg:pr-0"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card-hover p-5 group"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-white/5 to-white/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-all duration-300">
                  <skill.icon className={`w-5 h-5 ${skill.color}`} />
                </div>
                <h4 className="font-semibold mb-1 text-sm text-foreground">
                  {skill.title}
                </h4>
                <p className="text-xs text-muted-foreground leading-tight">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
