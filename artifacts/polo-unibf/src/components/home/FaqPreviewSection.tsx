import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

const faqs = [
  {
    question: 'Como faço para saber quais cursos estão disponíveis?',
    answer:
      'Fale com a equipe do polo pelo WhatsApp para receber orientação atualizada sobre cursos e modalidades disponíveis.',
  },
  {
    question: 'O polo ajuda na escolha do curso?',
    answer:
      'Sim. A equipe pode orientar você sobre modalidades, áreas de interesse e próximos passos.',
  },
  {
    question: 'Como confirmo valores e condições?',
    answer:
      'Valores, condições e campanhas devem ser confirmados diretamente no atendimento oficial do polo.',
  },
];

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="border border-border rounded-xl bg-white overflow-hidden"
    >
      <button
        className="w-full flex items-center justify-between px-5 py-4 text-left gap-4"
        onClick={() => setOpen(!open)}
      >
        <span className="font-medium text-navy text-sm">{q}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-primary transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.18 }}
          >
            <div className="px-5 pb-4 text-muted-foreground text-sm leading-relaxed border-t border-border/40 pt-3">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FaqPreviewSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-10">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">Dúvidas frequentes</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy">Perguntas frequentes</h2>
        </div>

        <div className="space-y-3 mb-8">
          {faqs.map((f, i) => (
            <FaqItem key={i} q={f.question} a={f.answer} index={i} />
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" size="lg" className="rounded-full border-navy text-navy hover:bg-navy hover:text-white">
            <Link href="/faq">Ver todas as dúvidas</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
