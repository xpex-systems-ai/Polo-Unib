import { useMemo, useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CourseSearch } from '@/components/courses/CourseSearch';
import { CourseCard } from '@/components/courses/CourseCard';
import { courses } from '@/data/courses';
import { Button } from '@/components/ui/button';
import { openWhatsApp } from '@/lib/whatsapp';

function CoursesHeroBanner() {
  const [hasImageError, setHasImageError] = useState(false);

  return (
    <section className="mb-10 overflow-hidden rounded-[2rem] border border-border bg-white shadow-xl shadow-navy/10">
      <div className="grid items-stretch lg:grid-cols-[1.08fr_0.92fr]">
        <div className="relative min-h-[260px] bg-navy">
          {hasImageError ? (
            <div className="flex h-full min-h-[260px] items-center justify-center bg-[radial-gradient(circle_at_top_left,rgba(0,184,107,0.28),transparent_32%),linear-gradient(135deg,hsl(var(--navy))_0%,#071b35_55%,#00B86B_145%)] p-8 text-center text-white">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">Conheça nossos cursos</p>
                <h2 className="mt-4 text-3xl font-bold md:text-5xl">Opções para todos os momentos da sua carreira.</h2>
              </div>
            </div>
          ) : (
            <img
              src="/assets/hero/hero-1200-opcoes-dividido.png"
              alt="Banner UniBF com opções de cursos dividido em áreas de estudo"
              className="h-full w-full object-cover"
              loading="lazy"
              onError={() => setHasImageError(true)}
            />
          )}
        </div>
        <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
          <span className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-primary">Conheça nossos cursos</span>
          <h2 className="text-3xl font-bold leading-tight text-foreground md:text-4xl">Escolha sua formação com apoio do polo UniBF Cristalina-GO.</h2>
          <p className="mt-4 text-muted-foreground">
            Compare modalidades, áreas e possibilidades de estudo. Se preferir, fale direto no WhatsApp oficial para receber orientação personalizada.
          </p>
          <Button
            size="lg"
            className="mt-6 w-full rounded-full bg-primary hover:bg-primary/90 sm:w-fit"
            onClick={() => openWhatsApp('Olá! Vim pelo site da UniBF Cristalina-GO e quero conhecer as opções de cursos disponíveis.')}
          >
            Falar sobre cursos no WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}

export default function Cursos() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedModality, setSelectedModality] = useState('Todos');

  const filteredCourses = useMemo(() => {
    return courses.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            course.area.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesModality = selectedModality === 'Todos' || course.modality === selectedModality;
      return matchesSearch && matchesModality;
    });
  }, [searchTerm, selectedModality]);

  return (
    <div className="min-h-screen flex flex-col w-full bg-muted/30">
      <Header />
      
      {/* Page Header */}
      <div className="bg-navy pt-20 pb-24 text-center px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Catálogo de Cursos</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Encontre a formação ideal para o seu momento de carreira. Oferecemos opções em diversas áreas do conhecimento.
          </p>
        </div>
      </div>

      <main className="flex-1 container mx-auto px-4 -mt-12 mb-20 relative z-10">
        <CoursesHeroBanner />

        <CourseSearch 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} 
          selectedModality={selectedModality} 
          setSelectedModality={setSelectedModality} 
        />

        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-border">
            <h3 className="text-xl font-bold mb-2">Nenhum curso encontrado</h3>
            <p className="text-muted-foreground">Tente buscar com outros termos ou altere os filtros.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
