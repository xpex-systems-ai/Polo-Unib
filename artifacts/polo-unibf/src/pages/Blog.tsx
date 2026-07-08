import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { ArrowRight, BookOpen, Clock, Info, MessageCircle, X } from 'lucide-react';

type BlogPost = {
  category: string;
  title: string;
  summary: string;
  readingTime: string;
  body: string;
};

const posts: BlogPost[] = [
  {
    category: 'Orientação',
    title: 'Como escolher o curso ideal',
    summary: 'Entenda como comparar áreas, rotina, objetivos e modalidades antes de decidir.',
    readingTime: '4 min de leitura',
    body: 'Antes de escolher, observe sua rotina, afinidade com a área, objetivos profissionais e o formato de estudo que você consegue manter com constância. Liste dúvidas sobre modalidade, duração, documentos e próximos passos para confirmar tudo diretamente pelo WhatsApp oficial do polo antes de qualquer decisão.',
  },
  {
    category: 'Formação',
    title: 'Graduação, pós-graduação, tecnólogo e extensão',
    summary: 'Veja a diferença entre os principais caminhos de formação.',
    readingTime: '5 min de leitura',
    body: 'Graduação, tecnólogo, pós-graduação e extensão atendem momentos diferentes da jornada acadêmica. A escolha depende da sua formação atual, objetivo e disponibilidade. Cursos, condições, ingresso e enquadramento adequado devem ser confirmados com a Professora Kelle pelo WhatsApp oficial.',
  },
  {
    category: 'Matrícula',
    title: 'Documentos para iniciar sua matrícula',
    summary: 'Organize informações básicas antes de falar com o polo.',
    readingTime: '3 min de leitura',
    body: 'Separe documentos pessoais, comprovantes e histórico escolar quando aplicável. A lista exata pode variar conforme curso e modalidade, por isso use este conteúdo apenas como preparação inicial e confirme a documentação necessária no atendimento oficial pelo WhatsApp.',
  },
  {
    category: 'EAD',
    title: 'Como funciona o estudo a distância',
    summary: 'Entenda rotina, suporte, plataforma e acompanhamento.',
    readingTime: '4 min de leitura',
    body: 'No EAD, organização e acompanhamento são essenciais. Reserve horários de estudo, acompanhe a plataforma e tire dúvidas com o polo quando precisar de orientação. Disponibilidade de cursos, formato, atividades e requisitos precisam ser validados pelo WhatsApp oficial.',
  },
  {
    category: 'Produtividade',
    title: 'Como estudar mesmo trabalhando',
    summary: 'Dicas práticas para conciliar estudo, trabalho e família.',
    readingTime: '4 min de leitura',
    body: 'Comece com metas realistas, blocos curtos de estudo e revisão semanal. Combine estudo com sua rotina familiar e profissional sem depender de promessas prontas. Para entender qual modalidade se encaixa melhor no seu momento, confirme as opções pelo WhatsApp oficial.',
  },
  {
    category: 'Polo local',
    title: 'Por que contar com apoio presencial',
    summary: 'O papel do polo no atendimento, orientação e próximos passos.',
    readingTime: '3 min de leitura',
    body: 'O polo local ajuda na orientação inicial, documentos, dúvidas de acesso e encaminhamento para próximos passos. Esse suporte torna a jornada mais clara, mas informações de cursos, valores, condições e ingresso devem sempre ser confirmadas pelo WhatsApp oficial.',
  },
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost>(posts[0]);
  const featuredPost = posts[0];
  const otherPosts = posts.slice(1);

  return (
    <div className="min-h-screen flex flex-col w-full bg-muted/30">
      <Header />
      <main className="flex-1">
        <section className="bg-navy px-4 py-20 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,255,43,0.16),transparent_32%)]" />
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold mb-6"><BookOpen className="h-4 w-4 text-primary" /> Blog institucional</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-4xl">Orientações para escolher seu próximo passo com segurança</h1>
            <p className="text-white/80 text-lg max-w-3xl">Conteúdos editoriais do Polo UniBF Cristalina-GO em Campos Lindos para organizar dúvidas antes do atendimento oficial.</p>
          </div>
        </section>

        <section className="container mx-auto max-w-6xl px-4 py-16">
          <div className="mb-8 rounded-2xl border border-primary/20 bg-primary/10 p-5 text-sm text-navy flex gap-3"><Info className="h-5 w-5 text-primary shrink-0" /> Conteúdo orientativo. Cursos, valores, condições, modalidades e formas de ingresso precisam ser confirmados pelo WhatsApp oficial.</div>

          <article className="mb-8 grid gap-6 rounded-[32px] border border-border bg-white p-6 md:grid-cols-[1.1fr_0.9fr] md:p-8 shadow-xl">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Post em destaque • {featuredPost.category}</span>
              <h2 className="mt-4 text-3xl font-bold text-navy md:text-4xl">{featuredPost.title}</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{featuredPost.summary}</p>
            </div>
            <div className="rounded-3xl bg-navy p-6 text-white flex flex-col justify-between gap-6">
              <div className="flex items-center gap-2 text-white/70 text-sm"><Clock className="h-4 w-4 text-primary" /> {featuredPost.readingTime}</div>
              <p className="text-white/75 text-sm">Abra a orientação na própria página e, ao final, confirme informações com a Professora Kelle.</p>
              <Button onClick={() => setSelectedPost(featuredPost)} className="rounded-full bg-primary text-navy hover:bg-primary/90">Ler orientação <ArrowRight className="ml-2 h-4 w-4" /></Button>
            </div>
          </article>

          {selectedPost && (
            <section className="mb-10 rounded-[28px] border border-navy/10 bg-white p-6 md:p-8 shadow-sm" aria-live="polite">
              <div className="flex items-start justify-between gap-4">
                <div><span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">{selectedPost.category}</span><h2 className="mt-2 text-2xl font-bold text-navy">{selectedPost.title}</h2></div>
                <button aria-label="Fechar orientação" onClick={() => setSelectedPost(posts[0])} className="rounded-full p-2 text-muted-foreground hover:bg-muted"><X className="h-4 w-4" /></button>
              </div>
              <p className="mt-4 leading-relaxed text-muted-foreground">{selectedPost.body}</p>
            </section>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherPosts.map((post) => (
              <article key={post.title} className="rounded-3xl border border-border bg-white p-6 shadow-sm flex flex-col hover:shadow-xl transition-shadow">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">{post.category}</span>
                <h2 className="text-xl font-bold text-navy mb-3">{post.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{post.summary}</p>
                <div className="mt-5 flex items-center gap-2 text-xs text-muted-foreground"><Clock className="h-4 w-4" /> {post.readingTime}</div>
                <Button onClick={() => setSelectedPost(post)} className="mt-6 w-full rounded-full bg-navy hover:bg-navy/90">Ler orientação</Button>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-[32px] bg-navy p-8 text-white flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div><h2 className="text-2xl font-bold">Confirme sua orientação no atendimento oficial</h2><p className="text-white/70 mt-2">A Professora Kelle ajuda a validar cursos, condições e próximos passos pelo WhatsApp oficial.</p></div>
            <a href={getWhatsAppUrl('Olá, Professora Kelle! Vim pelo blog da UniBF Cristalina-GO e gostaria de orientação oficial.')} target="_blank" rel="noreferrer"><Button className="rounded-full bg-primary text-navy hover:bg-primary/90"><MessageCircle className="mr-2 h-5 w-5" /> Falar com a Professora Kelle no WhatsApp</Button></a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
