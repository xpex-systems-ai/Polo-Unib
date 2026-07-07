import { useMemo, useState } from 'react';
import { Link } from 'wouter';
import { ArrowRight, ExternalLink, MessageCircle, Play, Search, ShieldCheck, Sparkles, Video } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { unibfTvVideos, type UnibfTvVideo } from '@/data/unibfTvVideos';
import { openWhatsApp } from '@/lib/whatsapp';

const WHATSAPP_MESSAGE =
  'Olá, Professora Kelle! Vi os vídeos da UniBF TV e quero orientação para escolher meu curso na UniBF Cristalina-GO.';
const DISCLAIMER =
  'Os vídeos incorporados são conteúdos oficiais da UniBF. Para confirmar cursos, valores, condições, modalidades e formas de ingresso, fale com o atendimento oficial do Polo UniBF Cristalina-GO.';

function VideoCard({ video, isSelected, onSelect }: { video: UnibfTvVideo; isSelected: boolean; onSelect: () => void }) {
  return (
    <article
      className={`group overflow-hidden rounded-3xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,31,51,0.14)] ${
        isSelected ? 'border-primary ring-2 ring-primary/20' : 'border-border'
      }`}
    >
      <button type="button" onClick={onSelect} className="relative block w-full text-left" aria-label={`Assistir ${video.title}`}>
        <img src={video.thumbnailUrl} alt={`Thumbnail do vídeo ${video.title}`} className="aspect-video w-full object-cover" loading="lazy" />
        <span className="absolute inset-0 flex items-center justify-center bg-navy/20 opacity-95 transition-colors group-hover:bg-navy/35">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-primary shadow-xl transition-transform group-hover:scale-110">
            <Play className="ml-1 h-7 w-7 fill-current" />
          </span>
        </span>
        <span className="absolute left-4 top-4 rounded-full bg-navy/90 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-white">
          {video.category}
        </span>
      </button>
      <div className="p-6">
        <h3 className="text-xl font-bold text-navy">{video.title}</h3>
        <p className="mt-2 min-h-[48px] text-sm leading-relaxed text-muted-foreground">{video.description}</p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <Button onClick={onSelect} className="rounded-full bg-primary hover:bg-primary/90">
            <Play className="mr-2 h-4 w-4" /> Assistir aqui
          </Button>
          <Button asChild variant="outline" className="rounded-full">
            <a href={video.youtubeUrl} target="_blank" rel="noreferrer">
              YouTube <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </article>
  );
}

export default function UnibfTv() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedVideo, setSelectedVideo] = useState<UnibfTvVideo>(unibfTvVideos[0]);

  const categories = useMemo(() => ['Todos', ...Array.from(new Set(unibfTvVideos.map((video) => video.category)))], []);

  const filteredVideos = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return unibfTvVideos.filter((video) => {
      const matchesCategory = selectedCategory === 'Todos' || video.category === selectedCategory;
      const matchesSearch =
        !normalizedSearch ||
        [video.title, video.description, video.category].some((field) => field.toLowerCase().includes(normalizedSearch));

      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  const handleSelectVideo = (video: UnibfTvVideo) => {
    setSelectedVideo(video);
    document.getElementById('unibf-tv-player')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div className="min-h-screen w-full bg-muted/30">
      <Header />

      <section className="relative overflow-hidden bg-navy px-4 py-20 text-white md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,184,107,0.28),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.12),transparent_28%)]" />
        <div className="container relative z-10 mx-auto grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              <Sparkles className="h-4 w-4" /> Conteúdo oficial
            </div>
            <h1 className="text-4xl font-black tracking-tight md:text-6xl">UniBF TV</h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/78">
              Assista vídeos oficiais da UniBF e entenda melhor cursos, EAD, portal do aluno, carreira e próximos passos.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90" onClick={() => openWhatsApp(WHATSAPP_MESSAGE)}>
                <MessageCircle className="mr-2 h-5 w-5" /> Falar com a Professora Kelle
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-white/30 bg-white/10 text-white hover:bg-white hover:text-navy">
                <Link href="/cursos">Ver cursos <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
          </div>

          <div id="unibf-tv-player" className="rounded-[2rem] border border-white/15 bg-white/10 p-3 shadow-[0_32px_90px_rgba(0,0,0,0.3)] backdrop-blur">
            <div className="overflow-hidden rounded-[1.5rem] bg-black">
              <iframe
                title={selectedVideo.title}
                src={selectedVideo.embedUrl}
                className="aspect-video w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Agora na UniBF TV</p>
              <h2 className="mt-2 text-2xl font-bold">{selectedVideo.title}</h2>
              <p className="mt-2 text-sm text-white/70">{selectedVideo.description}</p>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12 md:py-16">
        <section className="mb-10 rounded-[2rem] border border-border bg-white p-5 shadow-sm md:p-7">
          <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Buscar por tema, categoria ou título..."
                className="h-14 rounded-full border-border bg-muted/40 pl-12 text-base"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    selectedCategory === category ? 'bg-primary text-white shadow-sm' : 'bg-muted text-navy hover:bg-primary/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-10 flex flex-col gap-4 rounded-3xl border border-primary/20 bg-primary/5 p-6 text-navy md:flex-row md:items-center md:justify-between">
          <div className="flex gap-3">
            <ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-primary" />
            <p className="text-sm leading-relaxed text-muted-foreground">{DISCLAIMER}</p>
          </div>
          <Button className="shrink-0 rounded-full bg-primary hover:bg-primary/90" onClick={() => openWhatsApp(WHATSAPP_MESSAGE)}>
            Confirmar com atendimento oficial
          </Button>
        </section>

        {filteredVideos.length > 0 ? (
          <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredVideos.map((video) => (
              <VideoCard key={video.id} video={video} isSelected={selectedVideo.id === video.id} onSelect={() => handleSelectVideo(video)} />
            ))}
          </section>
        ) : (
          <section className="rounded-3xl border border-border bg-white px-6 py-16 text-center">
            <Video className="mx-auto mb-4 h-12 w-12 text-primary" />
            <h2 className="text-2xl font-bold text-navy">Nenhum vídeo encontrado</h2>
            <p className="mt-2 text-muted-foreground">Tente buscar por outro termo ou selecione outra categoria.</p>
          </section>
        )}

        <section className="mt-12 overflow-hidden rounded-[2rem] bg-navy p-8 text-white shadow-[0_24px_70px_rgba(0,31,51,0.22)] md:p-10">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-primary">Orientação personalizada</p>
              <h2 className="mt-3 text-3xl font-bold">Ficou com dúvidas após assistir?</h2>
              <p className="mt-3 max-w-2xl text-white/70">
                A Professora Kelle pode orientar você pelo WhatsApp oficial do Polo UniBF Cristalina-GO sobre cursos, modalidades e próximos passos.
              </p>
            </div>
            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90" onClick={() => openWhatsApp(WHATSAPP_MESSAGE)}>
              <MessageCircle className="mr-2 h-5 w-5" /> Falar com a Professora Kelle
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
