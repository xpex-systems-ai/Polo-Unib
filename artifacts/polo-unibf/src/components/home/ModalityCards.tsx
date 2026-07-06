import { motion } from 'framer-motion';
import { BookOpen, Award, Briefcase, GraduationCap } from 'lucide-react';
import { Link } from 'wouter';
import { openWhatsApp } from '@/lib/whatsapp';

const modalities = [
  {
    title: 'Graduação',
    description: 'Formação superior para iniciar uma carreira com base sólida e ampla.',
    icon: GraduationCap,
    href: '/graduacao',
    gradient: 'from-[#003B5C] via-[#004E7A] to-[#005580]',
    ctaMsg: 'Olá, Professora Kelle! Tenho interesse em graduação na UniBF Cristalina-GO. Pode me orientar?',
  },
  {
    title: 'Pós-graduação',
    description: 'Especialização para quem quer crescer profissionalmente e se destacar.',
    icon: Award,
    href: '/pos-graduacao',
    gradient: 'from-[#2D1B69] via-[#3D2687] to-[#4A2F8A]',
    ctaMsg: 'Olá, Professora Kelle! Tenho interesse em pós-graduação na UniBF Cristalina-GO. Pode me orientar?',
  },
  {
    title: 'Tecnólogo',
    description: 'Cursos práticos e objetivos, conectados diretamente ao mercado de trabalho.',
    icon: Briefcase,
    href: '/tecnologo',
    gradient: 'from-[#78350F] via-[#92400E] to-[#B45309]',
    ctaMsg: 'Olá, Professora Kelle! Quero saber mais sobre cursos tecnólogos na UniBF Cristalina-GO.',
  },
  {
    title: 'Extensão',
    description: 'Cursos de curta duração para atualizar conhecimentos e fortalecer o currículo.',
    icon: BookOpen,
    href: '/extensao',
    gradient: 'from-[#064E3B] via-[#065F46] to-[#059669]',
    ctaMsg: 'Olá, Professora Kelle! Quero saber mais sobre cursos de extensão na UniBF Cristalina-GO.',
  },
];

export function ModalityCards() {
  return (
    <section className="py-20 px-4 bg-soft-gray">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">Modalidades</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">
            Escolha o caminho ideal para sua formação
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Conheça as principais modalidades e consulte disponibilidade com nossa equipe.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {modalities.map((mod, i) => {
            const Icon = mod.icon;
            return (
              <motion.div
                key={mod.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl hover:border-transparent transition-all duration-300 flex flex-col"
              >
                {/* Gradient image panel */}
                <div className={`bg-gradient-to-br ${mod.gradient} h-36 flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.12),_transparent)]" />
                  <Icon className="w-14 h-14 text-white/80 group-hover:scale-110 transition-transform duration-300" />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-primary transition-colors">
                    {mod.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">
                    {mod.description}
                  </p>
                  <div className="flex gap-2">
                    <Link
                      href={mod.href}
                      className="flex-1 text-center text-xs font-semibold py-2 rounded-lg border border-navy/20 text-navy hover:bg-navy hover:text-white transition-colors"
                    >
                      Saiba mais
                    </Link>
                    <button
                      onClick={() => openWhatsApp(mod.ctaMsg)}
                      className="flex-1 text-xs font-semibold py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors"
                    >
                      Consultar
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
