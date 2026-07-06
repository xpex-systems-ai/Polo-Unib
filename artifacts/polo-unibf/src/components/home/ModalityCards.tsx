import { motion } from 'framer-motion';
import { BookOpen, Award, Briefcase, GraduationCap } from 'lucide-react';
import { Link } from 'wouter';

export function ModalityCards() {
  const modalities = [
    {
      title: 'Graduação',
      description: 'Formação completa para iniciar sua carreira com base sólida.',
      icon: GraduationCap,
      href: '/graduacao',
      color: 'bg-primary/10 text-primary'
    },
    {
      title: 'Pós-graduação',
      description: 'Especialização para quem quer se destacar no mercado.',
      icon: Award,
      href: '/pos-graduacao',
      color: 'bg-navy/10 text-navy'
    },
    {
      title: 'Tecnólogo',
      description: 'Cursos rápidos e práticos focados na necessidade do mercado.',
      icon: Briefcase,
      href: '/tecnologo',
      color: 'bg-amber-500/10 text-amber-600'
    },
    {
      title: 'Extensão',
      description: 'Aprimoramento rápido e atualização profissional contínua.',
      icon: BookOpen,
      href: '/extensao',
      color: 'bg-indigo-500/10 text-indigo-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-24 bg-background relative -mt-10 z-20 container mx-auto px-4">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {modalities.map((modality, i) => {
          const Icon = modality.icon;
          return (
            <motion.div key={i} variants={itemVariants}>
              <Link href={modality.href}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-border hover:shadow-xl hover:border-primary/20 transition-all duration-300 group h-full flex flex-col">
                  <div className={`w-14 h-14 rounded-2xl ${modality.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{modality.title}</h3>
                  <p className="text-muted-foreground leading-relaxed flex-1">{modality.description}</p>
                  <div className="mt-6 flex items-center text-sm font-semibold text-primary group-hover:translate-x-1 transition-transform">
                    Saiba mais <span className="ml-2">→</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
