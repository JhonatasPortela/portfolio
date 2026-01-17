import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/logo-ps.png";

const navLinks = [
  { href: "/", label: "Home", isRoute: true },
  { href: "/projetos", label: "Projetos", isRoute: true },
  { href: "#about", label: "Sobre", isRoute: false },
  { href: "#contact", label: "Contato", isRoute: false },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (link: typeof navLinks[0]) => {
    setIsMobileMenuOpen(false);
    if (link.isRoute) {
      navigate(link.href);
    } else {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-card py-3" : "py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/">
          <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <img
              src={logo}
              alt="Portela Systems"
              className="h-12 md:h-14 w-auto object-contain"
            />
            <span className="text-xl md:text-2xl font-bold tracking-wide bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent" style={{ fontFamily: "'Orbitron', sans-serif" }}>
              Portela Systems
            </span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <motion.button
              key={link.href}
              onClick={() => handleNavClick(link)}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink group-hover:w-full transition-all duration-300" />
            </motion.button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-foreground"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass-card mt-2 mx-4 rounded-xl overflow-hidden"
        >
          <div className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link)}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium py-2 text-left"
              >
                {link.label}
              </button>
            ))}
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
};

export default Header;
