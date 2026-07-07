import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { openWhatsApp } from '@/lib/whatsapp';
import { cn } from '@/lib/utils';

const campaignEnabled = false;

const fallbackGradient =
  'bg-[radial-gradient(circle_at_top_left,rgba(0,184,107,0.35),transparent_32%),linear-gradient(135deg,hsl(var(--navy))_0%,#071b35_48%,#00B86B_140%)]';

const heroSlides = [
  {
    title: 'Agora pode ser a sua vez de entrar na faculdade.',
    description:
      'Dê o próximo passo com orientação local em Cristalina-GO e atendimento direto pelo WhatsApp oficial.',
    image: '/assets/hero/hero-agora-pode-ser-sua-vez.png',
    alt: 'Banner UniBF com chamada Agora pode ser a sua vez',
    cta: 'Quero falar com a UniBF',
  },
  {
    title: 'Mais opções para estudar do seu jeito.',
    description:
      'Conheça possibilidades em graduação, pós-graduação, tecnólogo e extensão com suporte do polo Cristalina-GO.',
    image: '/assets/hero/hero-1200-opcoes-aluno.png',
    alt: 'Banner UniBF sobre opções de cursos para alunos',
    cta: 'Ver opções pelo WhatsApp',
  },
  {
    title: 'Imersões profissionais para impulsionar sua carreira.',
    description:
      'Fale com nossa equipe para entender cursos, modalidades e caminhos de formação disponíveis.',
    image: '/assets/hero/hero-imersoes-profissionais.png',
    alt: 'Banner UniBF sobre imersões profissionais',
    cta: 'Receber orientação',
  },
  ...(campaignEnabled
    ? [
        {
          title: 'Condição especial de graduação.',
          description:
            'Campanha promocional exibida somente quando a flag estiver ativa.',
          image: '/assets/hero/hero-graduacao-promocao-89.png',
          alt: 'Banner promocional UniBF de graduação',
          cta: 'Consultar campanha',
        },
      ]
    : []),
];

function HeroImage({ slide }: { slide: (typeof heroSlides)[number] }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className={cn('flex h-full min-h-[280px] items-center justify-center p-8 text-center', fallbackGradient)}>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">UniBF Cristalina-GO</p>
          <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">{slide.title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">{slide.description}</p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={slide.image}
      alt={slide.alt}
      className="h-full w-full object-cover"
      loading="eager"
      onError={() => setHasError(true)}
    />
  );
}

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = useMemo(() => heroSlides, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  const currentSlide = slides[activeSlide];
  const whatsappMessage = `Olá! Vim pelo site da UniBF Cristalina-GO e gostaria de atendimento sobre: ${currentSlide.title}`;

  function goToSlide(index: number) {
    setActiveSlide((index + slides.length) % slides.length);
  }

  return (
    <section className="relative overflow-hidden bg-navy pt-20 text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-navy/95 via-navy/90 to-foreground/95" />
      <div className="absolute left-[-10%] top-24 h-72 w-72 rounded-full bg-primary/25 blur-[100px]" />
      <div className="absolute bottom-0 right-[-8%] h-96 w-96 rounded-full bg-white/10 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-4 py-10 md:py-16">
        <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-sm font-medium backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Matrículas e informações em Cristalina-GO
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              {currentSlide.title}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80 md:text-xl lg:mx-0">
              {currentSlide.description}
            </p>

            <div className="mt-8 flex w-full flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <Button
                size="xl"
                onClick={() => openWhatsApp(whatsappMessage)}
                className="w-full rounded-full bg-primary shadow-lg shadow-primary/25 hover:bg-primary/90 sm:w-auto"
              >
                {currentSlide.cta}
              </Button>
              <Link href="/cursos" className="w-full sm:w-auto">
                <Button size="xl" variant="outline" className="w-full rounded-full border-white/30 bg-transparent text-white hover:bg-white/10 sm:w-auto">
                  Conheça nossos cursos
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 shadow-2xl shadow-black/30 backdrop-blur-sm">
              <div className="aspect-[4/5] sm:aspect-[16/10] lg:aspect-[1200/628]">
                <HeroImage slide={currentSlide} />
              </div>
            </div>

            <div className="mt-5 flex items-center justify-center gap-3">
              <Button type="button" size="icon" variant="outline" className="rounded-full border-white/20 bg-white/10 text-white hover:bg-white/20" onClick={() => goToSlide(activeSlide - 1)} aria-label="Banner anterior">
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <div className="flex gap-2" aria-label="Selecionar banner">
                {slides.map((slide, index) => (
                  <button
                    key={slide.image}
                    type="button"
                    onClick={() => goToSlide(index)}
                    className={cn('h-2.5 rounded-full transition-all', index === activeSlide ? 'w-8 bg-primary' : 'w-2.5 bg-white/40 hover:bg-white/70')}
                    aria-label={`Ir para o banner ${index + 1}`}
                    aria-current={index === activeSlide}
                  />
                ))}
              </div>
              <Button type="button" size="icon" variant="outline" className="rounded-full border-white/20 bg-white/10 text-white hover:bg-white/20" onClick={() => goToSlide(activeSlide + 1)} aria-label="Próximo banner">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
