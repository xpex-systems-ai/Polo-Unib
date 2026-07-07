import { useMemo, useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BookOpenCheck, CheckCircle2, Clock3, GraduationCap, Heart, HelpCircle, Search, ShieldCheck, Sparkles, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { openWhatsApp } from '@/lib/whatsapp';
import { graduationAreas, graduationDurations, graduationEadCourses } from '@/data/graduationEadCourses';

const safeDisclaimer = 'Valores, disponibilidade, duração, matriz curricular e condições comerciais devem ser confirmados diretamente com o atendimento oficial do Polo UniBF Cristalina-GO.';

export default function Graduacao() {
  const [search, setSearch] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('Todos');
  const [selectedArea, setSelectedArea] = useState('Todas');

  const filteredCourses = useMemo(() => {
    const query = search.trim().toLowerCase();

    return graduationEadCourses.filter((course) => {
      const matchesSearch = !query || course.title.toLowerCase().includes(query) || course.area.toLowerCase().includes(query);
      const matchesDuration = selectedDuration === 'Todos' || course.duration === selectedDuration;
      const matchesArea = selectedArea === 'Todas' || course.area === selectedArea;

      return matchesSearch && matchesDuration && matchesArea;
    });
  }, [search, selectedArea, selectedDuration]);

  const clearFilters = () => {
    setSearch('');
    setSelectedDuration('Todos');
    setSelectedArea('Todas');
  };

  return (
    <div className="min-h-screen flex flex-col w-full bg-slate-50">
      <Header />

      <section className="bg-navy pt-20 pb-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,159,227,0.28),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(153,204,0,0.20),transparent_30%)]" />
        <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] items-center gap-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-sm font-medium mb-6">
              <GraduationCap className="w-4 h-4 text-primary" /> Catálogo local orientativo
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Graduação a Distância</h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed">
              Escolha sua formação com orientação local do Polo UniBF Cristalina-GO. Consulte algumas opções de Graduação EaD disponíveis no portal UniBF e confirme disponibilidade, valores e condições com nosso atendimento oficial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => openWhatsApp('Olá! Quero consultar a disponibilidade de cursos de Graduação EaD no Polo UniBF Cristalina-GO.')}>
                Consultar disponibilidade
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white/30 bg-transparent hover:bg-white/10" onClick={() => openWhatsApp('Olá, Professora Kelle! Quero orientação sobre Graduação EaD no Polo UniBF Cristalina-GO.')}>
                Falar com a Professora Kelle
              </Button>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white/10 border border-white/15 p-5 shadow-2xl backdrop-blur">
            <div className="bg-white rounded-[1.5rem] p-5 text-navy">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-primary/15 flex items-center justify-center">
                  <Search className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Encontre seu curso</p>
                  <h2 className="text-2xl font-bold">Busca rápida</h2>
                </div>
              </div>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Digite o nome do curso ou área"
                  className="w-full rounded-2xl border border-border bg-slate-50 py-4 pl-12 pr-4 outline-none focus:border-primary focus:ring-4 focus:ring-primary/10"
                />
              </div>
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{safeDisclaimer}</p>
            </div>
          </div>
        </div>
      </section>

      <main className="flex-1 container mx-auto px-4 py-16">
        <section className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 items-start">
          <aside className="bg-white rounded-3xl border border-border shadow-sm p-6 lg:sticky lg:top-24">
            <div className="flex items-center justify-between gap-3 mb-6">
              <h2 className="text-xl font-bold text-navy">Filtros</h2>
              <button onClick={clearFilters} className="text-sm font-semibold text-primary hover:text-navy">Limpar</button>
            </div>

            <div className="space-y-7">
              <div>
                <h3 className="text-sm font-bold text-navy mb-3 flex items-center gap-2"><Clock3 className="w-4 h-4 text-primary" /> Duração</h3>
                <div className="flex flex-wrap gap-2">
                  {['Todos', ...graduationDurations].map((duration) => (
                    <button key={duration} onClick={() => setSelectedDuration(duration)} className={`rounded-full px-4 py-2 text-sm font-semibold border transition-colors ${selectedDuration === duration ? 'bg-navy text-white border-navy' : 'bg-slate-50 text-foreground border-border hover:border-primary'}`}>
                      {duration}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold text-navy mb-3 flex items-center gap-2"><BookOpenCheck className="w-4 h-4 text-primary" /> Áreas de Conhecimento</h3>
                <div className="space-y-2">
                  {['Todas', ...graduationAreas].map((area) => (
                    <button key={area} onClick={() => setSelectedArea(area)} className={`w-full rounded-2xl px-4 py-3 text-left text-sm font-semibold border transition-colors ${selectedArea === area ? 'bg-primary text-navy border-primary' : 'bg-white text-foreground border-border hover:border-primary hover:bg-primary/5'}`}>
                      {area}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <section>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
              <div>
                <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em]">Lista de cursos</p>
                <h2 className="text-3xl font-bold text-navy mt-2">Opções de Graduação EaD</h2>
              </div>
              <p className="text-sm text-muted-foreground">{filteredCourses.length} curso(s) encontrado(s)</p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
              {filteredCourses.map((course) => (
                <article key={course.title} className="group bg-white rounded-3xl border border-border p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <span className="inline-flex items-center rounded-full bg-navy/5 px-3 py-1 text-xs font-bold text-navy border border-navy/10">{course.modality}</span>
                      <h3 className="text-xl font-bold text-navy mt-3 group-hover:text-primary transition-colors">{course.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{course.area}</p>
                    </div>
                    <button aria-label={`Favoritar ${course.title}`} className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                      <Heart className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-3 my-5">
                    <div className="rounded-2xl bg-slate-50 border border-border p-4">
                      <p className="text-xs text-muted-foreground">Duração</p>
                      <p className="font-bold text-navy mt-1">{course.duration}</p>
                    </div>
                    <div className="rounded-2xl bg-primary/10 border border-primary/20 p-4">
                      <p className="text-xs text-muted-foreground">Condição</p>
                      <p className="font-bold text-navy mt-1">{course.priceLabel}</p>
                    </div>
                  </div>

                  <Button className="w-full" onClick={() => openWhatsApp(course.whatsappMessage)}>
                    Saiba mais
                  </Button>
                </article>
              ))}
            </div>

            {filteredCourses.length === 0 && (
              <div className="bg-white rounded-3xl border border-border p-10 text-center">
                <h3 className="text-2xl font-bold text-navy">Nenhum curso encontrado</h3>
                <p className="text-muted-foreground mt-2">Ajuste a busca ou fale com o polo para consultar outras opções disponíveis.</p>
                <Button className="mt-6" onClick={() => openWhatsApp('Olá! Não encontrei o curso que procuro na página de Graduação EaD. Pode me ajudar?')}>Consultar no WhatsApp</Button>
              </div>
            )}
          </section>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-16">
          <div className="lg:col-span-2 bg-white rounded-3xl border border-border p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-navy mb-4">Como funciona a graduação EaD?</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A Graduação EaD permite estudar com flexibilidade, materiais digitais e apoio do polo local para orientação sobre matrícula, documentação e próximos passos. O Polo UniBF Cristalina-GO ajuda você a consultar opções no portal UniBF e confirmar as condições oficiais antes da decisão.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {['Estude com flexibilidade e acompanhamento local', 'Atendimento pelo WhatsApp oficial do polo', 'Orientação para escolher área e curso', 'Confirmação segura antes da matrícula'].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 border border-border">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-navy text-white rounded-3xl p-8 shadow-sm">
            <Sparkles className="w-9 h-9 text-primary mb-4" />
            <h2 className="text-2xl font-bold mb-4">Vantagens</h2>
            <ul className="space-y-4 text-white/80">
              <li className="flex gap-3"><ShieldCheck className="w-5 h-5 text-primary shrink-0" /> Consulta segura de valores e condições.</li>
              <li className="flex gap-3"><Users className="w-5 h-5 text-primary shrink-0" /> Suporte local em Cristalina-GO.</li>
              <li className="flex gap-3"><HelpCircle className="w-5 h-5 text-primary shrink-0" /> Professora Kelle para orientar o primeiro contato.</li>
            </ul>
          </div>
        </section>

        <section className="mt-16 bg-white rounded-3xl border border-border p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-navy mb-6">Perguntas frequentes</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              ['Os cursos e valores são definitivos?', safeDisclaimer],
              ['Posso consultar pelo WhatsApp?', 'Sim. Cada card abre uma conversa com o WhatsApp oficial 5561982367003 com o curso escolhido.'],
              ['A lista substitui o portal oficial?', 'Não. Esta página é uma vitrine local orientativa para facilitar seu atendimento com o Polo UniBF Cristalina-GO.'],
            ].map(([question, answer]) => (
              <div key={question} className="rounded-2xl bg-slate-50 border border-border p-5">
                <h3 className="font-bold text-navy mb-2">{question}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{answer}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
