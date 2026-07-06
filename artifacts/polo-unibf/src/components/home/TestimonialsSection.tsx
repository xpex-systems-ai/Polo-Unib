import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { openWhatsApp } from '@/lib/whatsapp';

export function TestimonialsSection() {
  return (
    <section className="py-20 px-4 bg-accent/30">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-navy/5 flex items-center justify-center border border-border">
              <MessageSquare size={28} className="text-navy/40" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">O que dizem nossos alunos</h2>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto leading-relaxed">
            Depoimentos reais serão inseridos aqui mediante autorização dos alunos.
            Se você já estudou com a gente, adoraríamos ouvir sua história!
          </p>
          <div className="inline-block bg-amber-50 border border-amber-200 text-amber-800 text-xs rounded-lg px-4 py-2 mb-8">
            Espaço reservado para depoimentos autorizados — em breve.
          </div>
          <div className="mt-2">
            <Button
              onClick={() =>
                openWhatsApp('Olá! Sou aluno do Polo UniBF Campos Lindos e gostaria de compartilhar minha experiência.')
              }
              variant="outline"
              className="rounded-full border-navy text-navy hover:bg-navy hover:text-white"
            >
              Compartilhar minha experiência
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
