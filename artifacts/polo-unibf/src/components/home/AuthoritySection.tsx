import { motion } from 'framer-motion';
import { ShieldCheck, BookOpen, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { openWhatsApp } from '@/lib/whatsapp';

const items = [
  {
    icon: ShieldCheck,
    title: 'Informações oficiais',
    description:
      'Cursos, condições e modalidades devem ser confirmados diretamente com a equipe do polo, com base em dados atualizados.',
  },
  {
    icon: BookOpen,
    title: 'Referência institucional',
    description:
      'A UniBF Centro Universitário possui informações disponíveis nos canais institucionais e no sistema e-MEC.',
  },
  {
    icon: Users,
    title: 'Orientação segura',
    description:
      'A comunicação do polo prioriza clareza, responsabilidade e atendimento humano. Nada é prometido sem confirmação oficial.',
  },
];

export function AuthoritySection() {
  return (
    <section className="py-20 px-4 bg-soft-gray border-y border-border">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">Transparência</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Atendimento local conectado a uma instituição de ensino
          </h2>
          <p className="text-muted-foreground">
            O UniBF Cristalina-GO orienta interessados com base nas informações oficiais da instituição e nos canais autorizados.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-border/60 shadow-sm flex flex-col gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center">
                <item.icon size={24} className="text-navy" />
              </div>
              <h3 className="font-semibold text-navy text-lg">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            onClick={() =>
              openWhatsApp(
                'Olá! Gostaria de confirmar informações oficiais sobre cursos e modalidades do UniBF Cristalina-GO.'
              )
            }
            className="bg-navy hover:bg-navy/90 text-white rounded-full px-8"
          >
            Consultar informações
          </Button>
          <p className="text-muted-foreground/60 text-xs mt-3">
            Informações institucionais devem ser conferidas nos canais oficiais da UniBF e no sistema e-MEC.
          </p>
        </div>
      </div>
    </section>
  );
}
