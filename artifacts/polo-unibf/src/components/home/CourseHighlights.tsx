import { useRef } from 'react';
import { courses } from '@/data/courses';
import { CourseCard } from '../courses/CourseCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

export function CourseHighlights() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const featuredCourses = courses.filter((course) => course.featured).slice(0, 5);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350; // Approx card width + gap
      const currentScroll = scrollContainerRef.current.scrollLeft;
      scrollContainerRef.current.scrollTo({
        left: direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 mb-10 flex flex-col md:flex-row justify-between items-end gap-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Explore áreas de formação</h2>
          <p className="text-lg text-muted-foreground">
            Confira algumas áreas procuradas e fale com a equipe para confirmar disponibilidade, valores e condições.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="icon" onClick={() => scroll('left')} className="rounded-full">
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button variant="outline" size="icon" onClick={() => scroll('right')} className="rounded-full">
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {featuredCourses.map(course => (
            <div key={course.id} className="min-w-[320px] max-w-[320px] snap-start rounded-2xl ring-1 ring-[#003B5C]/10 shadow-[0_12px_36px_rgba(0,59,92,.07)] transition-transform hover:-translate-y-1">
              <CourseCard course={course} />
            </div>
          ))}
          <div className="min-w-[320px] max-w-[320px] snap-start flex items-center justify-center p-6 border border-[#00B86B]/35 rounded-2xl bg-[#EAF7F0]">
            <div className="text-center">
              <h3 className="font-bold text-lg mb-2">Quer ver mais?</h3>
              <p className="text-sm text-muted-foreground mb-4">Confira outras possibilidades de formação e confirme a oferta com a equipe.</p>
              <Link href="/cursos">
                <Button>Ver todos os cursos</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
