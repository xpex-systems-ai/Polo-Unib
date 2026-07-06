import { useState } from 'react';
import { ChevronDown, Search, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { openWhatsApp } from '@/lib/whatsapp';

interface FaqItem {
  category: string;
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    category: 'Atendimento',
    question: 'Como faço para saber quais cursos estão disponíveis?',
    answer:
      'Você pode falar com a equipe do polo pelo WhatsApp. A disponibilidade de cursos, valores e condições deve ser confirmada diretamente no atendimento oficial.',
  },
  {
    category: 'Atendimento',
    question: 'O polo ajuda a escolher o curso?',
    answer:
      'Sim. A equipe do polo pode orientar você sobre modalidades, áreas de interesse e próximos passos para sua formação.',
  },
  {
    category: 'Graduação',
    question: 'Como funciona a graduação?',
    answer:
      'A equipe do polo pode explicar as modalidades disponíveis, duração, documentação e formas de ingresso conforme informações oficiais.',
  },
  {
    category: 'Pós-graduação',
    question: 'Como funciona a pós-graduação?',
    answer:
      'A pós-graduação é indicada para quem já possui graduação e busca especialização. Consulte a equipe para conhecer opções disponíveis.',
  },
  {
    category: 'Tecnólogo',
    question: 'O que é um curso tecnólogo?',
    answer:
      'É uma formação superior mais direcionada ao mercado. Consulte a equipe para confirmar cursos, duração e condições disponíveis.',
  },
  {
    category: 'Extensão',
    question: 'O que são cursos de extensão?',
    answer:
      'São cursos voltados ao desenvolvimento de conhecimentos específicos. A disponibilidade deve ser confirmada com o polo.',
  },
  {
    category: 'Atendimento',
    question: 'Como confirmo valores e promoções?',
    answer:
      'Valores, promoções e condições comerciais devem ser confirmados diretamente com a equipe oficial do UniBF Cristalina-GO.',
  },
  {
    category: 'Atendimento',
    question: 'Posso visitar o polo pessoalmente?',
    answer:
      'Sim. Você pode falar pelo WhatsApp para combinar um melhor horário de atendimento. Estamos em Cristalina-GO.',
  },
  {
    category: 'Atendimento',
    question: 'Qual o horário de atendimento do polo?',
    answer:
      'Atendemos de segunda a sexta das 08h às 18h e aos sábados das 08h às 12h. Pelo WhatsApp respondemos o mais rápido possível dentro do horário comercial.',
  },
  {
    category: 'Graduação',
    question: 'Quais documentos são necessários para a matrícula?',
    answer:
      'Os documentos variam conforme o curso e a modalidade. Consulte a equipe do polo para receber uma lista completa e atualizada de acordo com sua situação.',
  },
  {
    category: 'Pós-graduação',
    question: 'Preciso ter graduação completa para fazer pós?',
    answer:
      'Em geral sim, mas os requisitos podem variar. Fale com nossa equipe para confirmar as condições específicas de acordo com o curso de seu interesse.',
  },
  {
    category: 'Atendimento',
    question: 'O polo atende pessoas de outras cidades?',
    answer:
      'Sim. Atendemos Cristalina-GO e toda a região. Você pode iniciar o atendimento pelo WhatsApp independentemente da sua cidade.',
  },
];

const categories = ['Todos', 'Graduação', 'Pós-graduação', 'Tecnólogo', 'Extensão', 'Atendimento'];

function AccordionItem({ item, index }: { item: FaqItem; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04 }}
      className="border border-border rounded-xl overflow-hidden bg-white"
    >
      <button
        className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-semibold text-navy text-sm md:text-base leading-snug">{item.question}</span>
        <ChevronDown
          size={20}
          className={`shrink-0 text-primary transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-6 pb-5 text-muted-foreground text-sm leading-relaxed border-t border-border/50 pt-4">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Faq() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filtered = faqItems.filter((item) => {
    const matchesCategory = activeCategory === 'Todos' || item.category === activeCategory;
    const q = search.toLowerCase();
    const matchesSearch =
      !search ||
      item.question.toLowerCase().includes(q) ||
      item.answer.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col w-full">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-navy py-20 px-4 text-white text-center">
          <div className="container mx-auto max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
                Tire suas dúvidas
              </p>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">Perguntas Frequentes</h1>
              <p className="text-white/70 text-lg">
                Encontre respostas rápidas ou fale diretamente com nossa equipe pelo WhatsApp.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search + Filter */}
        <section className="py-10 px-4 bg-soft-gray border-b border-border sticky top-20 z-10">
          <div className="container mx-auto max-w-3xl space-y-4">
            {/* Search */}
            <div className="relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar pergunta..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>

            {/* Category pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                    activeCategory === cat
                      ? 'bg-navy text-white border-navy'
                      : 'bg-white text-navy border-border hover:border-navy'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ List */}
        <section className="py-14 px-4 bg-accent/20">
          <div className="container mx-auto max-w-3xl">
            {filtered.length > 0 ? (
              <div className="space-y-3">
                {filtered.map((item, i) => (
                  <AccordionItem key={`${item.category}-${i}`} item={item} index={i} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 text-muted-foreground">
                <p className="text-lg font-medium mb-2">Nenhuma pergunta encontrada.</p>
                <p className="text-sm">Tente outro termo ou fale direto com nossa equipe.</p>
              </div>
            )}
          </div>
        </section>

        {/* WhatsApp CTA */}
        <section className="py-20 px-4 bg-navy text-white text-center">
          <div className="container mx-auto max-w-xl">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                <MessageCircle size={32} className="text-primary" />
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Ainda com dúvidas?</h2>
            <p className="text-white/70 mb-8">
              Fale agora com nossa equipe e receba orientação personalizada para o seu momento.
            </p>
            <Button
              size="lg"
              onClick={() =>
                openWhatsApp('Olá! Tenho dúvidas sobre cursos e atendimento do UniBF Cristalina-GO.')
              }
              className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-full text-lg"
            >
              Tirar dúvidas no WhatsApp
            </Button>
            <p className="text-white/40 text-xs mt-4">
              Consulte condições no atendimento oficial do polo.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
