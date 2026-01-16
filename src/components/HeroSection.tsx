import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />
      
      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-neon-purple/10 blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-neon-cyan/10 blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-neon-pink/10 blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block px-4 py-2 mb-6 text-sm font-medium text-neon-cyan border border-neon-cyan/30 rounded-full glass-card"
            >
              Fullstack Developer & QA Specialist
            </motion.span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Transformando ideias em{" "}
            <span className="text-gradient neon-text-glow">
              sistemas robustos
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            Especialista em Desenvolvimento Fullstack & QA
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#projects"
              className="btn-neon text-foreground"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Ver Projetos
            </motion.a>
            <motion.a
              href="#contact"
              className="btn-neon-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Entrar em Contato
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.a
            href="#projects"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-xs font-medium">Scroll</span>
            <ArrowDown size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
