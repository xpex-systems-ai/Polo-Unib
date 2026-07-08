import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { BookOpen, Info } from 'lucide-react';

const posts = [
  ['Orientação', 'Como escolher o curso ideal', 'Veja critérios para comparar áreas, rotina, objetivos e o tipo de formação que combina com seu momento.'],
  ['Formação', 'Graduação, pós e tecnólogo: entenda as diferenças', 'Conheça diferenças gerais entre caminhos de formação e confirme as opções disponíveis no atendimento oficial.'],
  ['Matrícula', 'Documentos para matrícula', 'Organize documentos pessoais e escolares antes de conversar com a equipe do polo.'],
  ['EAD', 'Como funciona o EAD', 'Entenda a rotina de estudos on-line, suporte do polo e pontos que precisam ser validados antes da inscrição.'],
  ['Produtividade', 'Dicas para estudar trabalhando', 'Sugestões de organização para conciliar estudo, trabalho, família e metas de formação.'],
  ['Polo local', 'Por que contar com apoio do polo', 'Saiba como o atendimento local pode orientar dúvidas sobre cursos, documentos e próximos passos.'],
];

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col w-full bg-muted/30">
      <Header />
      <main className="flex-1">
        <section className="bg-navy px-4 py-20 text-white">
          <div className="container mx-auto max-w-6xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold mb-6"><BookOpen className="h-4 w-4 text-primary" /> Blog institucional</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog UniBF Cristalina-GO</h1>
            <p className="text-white/80 text-lg max-w-3xl">Conteúdos orientativos para ajudar você a planejar seu próximo passo com responsabilidade.</p>
          </div>
        </section>
        <section className="container mx-auto max-w-6xl px-4 py-16">
          <div className="mb-8 rounded-2xl border border-primary/20 bg-primary/10 p-5 text-sm text-navy flex gap-3"><Info className="h-5 w-5 text-primary shrink-0" /> Conteúdo orientativo. Confirme cursos, condições e formas de ingresso no atendimento oficial.</div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map(([category, title, summary]) => (
              <article key={title} className="rounded-3xl border border-border bg-white p-6 shadow-sm flex flex-col">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">{category}</span>
                <h2 className="text-xl font-bold text-navy mb-3">{title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{summary}</p>
                <a href={getWhatsAppUrl(`Olá! Li a orientação "${title}" no blog da UniBF Cristalina-GO e gostaria de confirmar informações no atendimento oficial.`)} target="_blank" rel="noreferrer" className="mt-6">
                  <Button className="w-full rounded-full bg-navy hover:bg-navy/90">Ler orientação</Button>
                </a>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
