import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    author: "Carlos Silva",
    role: "Diretor de Operações",
    company: "TechCorp Brasil",
    content:
      "A Portela Systems transformou completamente nossa operação. O sistema integrado reduziu nosso tempo de fechamento mensal de 5 dias para apenas 1. Profissionalismo e qualidade excepcionais.",
    rating: 5,
  },
  {
    id: "2",
    author: "Ana Rodrigues",
    role: "CEO",
    company: "Fashion Store",
    content:
      "Nossa taxa de conversão aumentou 35% após a implementação do e-commerce. A equipe da Portela Systems entendeu exatamente o que precisávamos e entregou além das expectativas.",
    rating: 5,
  },
  {
    id: "3",
    author: "Roberto Mendes",
    role: "CFO",
    company: "DataDriven Inc",
    content:
      "Agora tomamos decisões baseadas em dados atualizados em tempo real. A qualidade da entrega e o suporte contínuo superaram todas as nossas expectativas.",
    rating: 5,
  },
];

const TestimonialCard = ({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="glass-card-hover p-8 md:p-10 relative group"
    >
      {/* Quote Icon */}
      <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-40 transition-opacity">
        <Quote className="w-12 h-12 text-neon-purple" />
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-6">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-neon-pink text-neon-pink" />
        ))}
      </div>

      {/* Content */}
      <blockquote className="text-foreground text-base md:text-lg leading-relaxed mb-8 italic">
        "{testimonial.content}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-neon-purple to-neon-pink p-0.5">
          <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
            <span className="text-xl font-bold text-gradient">
              {testimonial.author.charAt(0)}
            </span>
          </div>
        </div>
        <div>
          <p className="font-bold text-foreground">{testimonial.author}</p>
          <p className="text-muted-foreground text-sm">
            {testimonial.role} • {testimonial.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialsSection = () => {
  // Set to true to show testimonials when you have real feedback
  const showTestimonials = false;

  if (!showTestimonials) {
    return null;
  }

  return (
    <section id="testimonials" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-purple/5 to-transparent" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-neon-cyan text-sm font-medium tracking-wider uppercase">
            Prova Social
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            Depoimentos de <span className="text-gradient">Sucesso</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            O que nossos clientes dizem sobre trabalhar com a Portela Systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
