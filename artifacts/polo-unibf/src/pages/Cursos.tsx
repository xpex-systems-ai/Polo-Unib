import { useState, useMemo } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CourseSearch } from '@/components/courses/CourseSearch';
import { CourseCard } from '@/components/courses/CourseCard';
import { courses } from '@/data/courses';

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
