import { useState } from 'react';
import { BookOpen, Briefcase, GraduationCap } from 'lucide-react';

const posts = [
  { title: 'Como escolher o curso ideal para seu momento?', category: 'Orientação', image: '/assets/news/escolher-curso.jpg', icon: GraduationCap },
  { title: 'Graduação, pós ou tecnólogo: entenda a diferença', category: 'Educação', image: '/assets/news/modalidades.jpg', icon: BookOpen },
  { title: 'Voltar a estudar pode abrir novas possibilidades', category: 'Carreira', image: '/assets/news/carreira.jpg', icon: Briefcase },
];

function NewsCard({ post }: { post: (typeof posts)[number] }) {
  const [error, setError] = useState(false);
  const Icon = post.icon;
  return (
    <article className="rounded-[24px] overflow-hidden border border-border bg-white shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="aspect-video bg-gradient-to-br from-navy to-primary relative overflow-hidden">
        {!error ? <img src={post.image} alt={post.title} onError={() => setError(true)} className="h-full w-full object-cover" loading="lazy" /> : <div className="h-full w-full flex items-center justify-center"><Icon className="w-14 h-14 text-white/80" /></div>}
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-navy">{post.category}</span>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-navy text-lg leading-snug mb-2">{post.title}</h3>
        <p className="text-sm text-muted-foreground">Conteúdo local de orientação. Confirme cursos, valores e condições com o atendimento oficial.</p>
      </div>
    </article>
  );
}

export function NewsSection() {
  return (
    <section className="py-24 px-4 bg-soft-gray">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">Novidades e carreira</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">Conteúdos para pensar no seu futuro</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Materiais introdutórios para apoiar sua decisão antes de falar com a Professora Kelle.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">{posts.map((post) => <NewsCard key={post.title} post={post} />)}</div>
      </div>
    </section>
  );
}
