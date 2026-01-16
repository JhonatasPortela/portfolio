import { motion } from "framer-motion";
import { Code2, Database, TestTube, Rocket } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const skills = [
  {
    icon: Code2,
    title: "Desenvolvimento Fullstack",
    description: "Java, React, Node.js, TypeScript",
  },
  {
    icon: Database,
    title: "Banco de Dados",
    description: "PostgreSQL, MySQL, MongoDB",
  },
  {
    icon: TestTube,
    title: "Quality Assurance",
    description: "Selenium, Jest, TestNG, CI/CD",
  },
  {
    icon: Rocket,
    title: "Deploy & DevOps",
    description: "Docker, AWS, GitHub Actions",
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
            Conheça o <span className="text-gradient">Desenvolvedor</span>
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

            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center lg:text-left">
              Jhonatas Portela
            </h3>
            
            <p className="text-muted-foreground leading-relaxed text-center lg:text-left max-w-lg">
              Formado em <span className="text-neon-cyan font-medium">Análise e Desenvolvimento de Sistemas</span>, 
              com sólida experiência em <span className="text-neon-pink font-medium">QA e Suporte</span>, 
              e focado em construir soluções escaláveis com <span className="text-neon-purple font-medium">Java</span> e 
              tecnologias modernas. Apaixonado por código limpo, boas práticas e entrega de valor.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card-hover p-6 group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-neon-purple/20 to-neon-pink/20 flex items-center justify-center mb-4 group-hover:from-neon-purple/30 group-hover:to-neon-pink/30 transition-all duration-300">
                  <skill.icon className="w-6 h-6 text-neon-cyan" />
                </div>
                <h4 className="font-semibold mb-2 text-foreground">{skill.title}</h4>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
