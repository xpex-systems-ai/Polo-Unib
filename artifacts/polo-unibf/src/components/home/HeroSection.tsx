import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, GraduationCap, MessageCircle, Sparkles } from 'lucide-react';
import { openWhatsApp } from '@/lib/whatsapp';

/** Banner institucional preservado conforme referência visual aprovada. */
const HERO_BANNER = '/assets/hero/hero-agora-pode-ser-sua-vez.png';

const highlights = [
  { label: 'Graduação', href: '/graduacao' },
  { label: 'Pós-graduação', href: '/pos-graduacao' },
  { label: 'Tecnólogo', href: '/tecnologo' },
  { label: 'Extensão', href: '/extensao' },
];

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-[#002b46] text-white">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_74%_42%,rgba(0,184,107,.22),transparent_36%),linear-gradient(110deg,#00253d_4%,#003b5c_62%,#001a2d_100%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(rgba(255,255,255,.32)_1px,transparent_1px)] [background-size:32px_32px]" />
      <div className="relative mx-auto grid min-h-[560px] max-w-[1440px] items-center gap-8 px-5 py-14 md:grid-cols-[.94fr_1.06fr] md:px-10 lg:min-h-[710px] lg:px-16">
        <motion.div initial={reduceMotion ? false : {opacity:0,y:22}} animate={{opacity:1,y:0}} transition={{duration:.65}} className="relative z-10 max-w-[650px]">
          <div className="mb-7 inline-flex items-center gap-2 border-l-2 border-[#00B86B] pl-3 text-xs font-semibold uppercase tracking-[.22em] text-[#9bf5c6]">
            <Sparkles size={15} /> Educação, tecnologia e atendimento humano
          </div>
          <h1 className="text-[clamp(2.65rem,5.6vw,5.7rem)] font-extrabold leading-[1.04] tracking-[-.055em]">
            Seu futuro começa <span className="text-[#4de29b]">aqui.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            Conheça possibilidades de formação e receba orientação da equipe do Polo UniBF Cristalina-GO sobre cursos e modalidades disponíveis.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <button type="button" onClick={() => openWhatsApp('Olá! Vim pelo site do Polo UniBF Cristalina-GO e gostaria de orientação sobre cursos.', 'hero')}
              className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-[#00B86B] px-6 py-3 font-semibold text-[#003B5C] transition hover:bg-[#00a65f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              <MessageCircle size={19} /> Falar com o Polo <ArrowRight size={17}/>
            </button>
            <Link href="/cursos" className="inline-flex min-h-12 items-center gap-2 rounded-lg border border-white/35 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
              <GraduationCap size={19} /> Explorar cursos
            </Link>
          </div>
          <p className="mt-5 text-xs text-white/55">Informações e disponibilidade sujeitas à confirmação da equipe responsável.</p>
        </motion.div>
        <div className="relative min-h-[260px] sm:min-h-[330px] md:min-h-[540px]">
          <motion.div aria-hidden="true" className="absolute inset-0 rounded-full bg-[#00B86B]/15 blur-[100px]" animate={reduceMotion ? undefined : {opacity:[.45,.8,.45],scale:[.96,1.05,.96]}} transition={{duration:7,repeat:Infinity,ease:'easeInOut'}}/>
          <motion.div className="relative flex h-full min-h-[260px] items-center justify-center sm:min-h-[330px] md:min-h-[540px]" animate={reduceMotion ? undefined : {y:[0,-10,0]}} transition={{duration:6,repeat:Infinity,ease:'easeInOut'}}>
            <img src={HERO_BANNER} alt="Banner institucional do Polo UniBF Cristalina-GO" className="max-h-[620px] w-full rounded-xl object-contain [mask-image:linear-gradient(to_right,transparent_0%,black_12%,black_100%)]" loading="eager" decoding="async" fetchPriority="high" />
          </motion.div>
          {!reduceMotion && <div aria-hidden="true" className="pointer-events-none absolute left-[25%] top-[20%] h-[46%] w-[46%] animate-[spin_28s_linear_infinite] rounded-full border border-[#00B86B]/30 motion-reduce:animate-none" />}
        </div>
      </div>
      <div className="relative z-10 border-t border-white/10 bg-[#001f34]/80">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-px px-5 py-4 md:grid-cols-4 md:px-10 lg:px-16">
          {highlights.map(({label,href}) => <Link key={href} href={href} className="group flex items-center justify-between gap-2 border-r border-white/10 px-3 py-3 text-sm font-medium text-white/85 transition hover:text-[#4de29b] sm:px-5">{label}<ArrowRight size={15} className="opacity-50 transition group-hover:translate-x-1"/></Link>)}
        </div>
      </div>
    </section>
  );
}
