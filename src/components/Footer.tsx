import { motion } from "framer-motion";
import { Linkedin, Github, Mail } from "lucide-react";
import miniLogo from "@/assets/mini-logo.png";

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/jhonatasportela",
    label: "LinkedIn",
  },
  {
    icon: Github,
    href: "https://github.com/jhonatasportela",
    label: "GitHub",
  },
  {
    icon: Mail,
    href: "mailto:contato@portelasystems.com",
    label: "Email",
  },
];

const Footer = () => {
  return (
    <footer id="contact" className="py-16 relative">
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-purple/50 to-transparent" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          {/* CTA Section */}
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Vamos <span className="text-gradient">trabalhar juntos</span>?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-md">
            Entre em contato para discutir seu próximo projeto ou oportunidade de colaboração.
          </p>

          {/* Social Links */}
          <div className="flex gap-4 mb-12">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-neon-cyan hover:border-neon-cyan/50 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 Portela Systems - Desenvolvido por Jhonatas Portela
            </p>
            
            <motion.img
              src={miniLogo}
              alt="PS Logo"
              className="h-10 w-10 object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
              whileHover={{ scale: 1.1 }}
            />
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
