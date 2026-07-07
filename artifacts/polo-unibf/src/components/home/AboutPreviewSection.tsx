import { useState } from 'react';
import { Link } from 'wouter';
import { MapPin, Users, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FACADE = '/assets/fachada-unibf-cristalina-go.jpg';

export function AboutPreviewSection() {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="py-24 bg-white px-4">
      <div className="container mx-auto max-w-6xl grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative rounded-[32px] overflow-hidden border border-border shadow-2xl aspect-[4/3] bg-navy">
          {!imageError ? (
            <img src={FACADE} alt="Fachada da UniBF Cristalina-GO" className="w-full h-full object-cover" onError={() => setImageError(true)} />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#003B5C] via-[#002F4B] to-[#001F33] flex flex-col items-center justify-center p-8 text-center text-white">
              <MapPin className="w-16 h-16 text-[#7CFF2B] mb-5" />
              <p className="text-2xl font-bold">UniBF Cristalina-GO</p>
              <p className="text-white/70 mt-2">Foto da fachada em breve</p>
            </div>
          )}
        </div>
        <div>
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Presença local</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-5">Somos a UniBF Cristalina-GO</h2>
          <p className="text-muted-foreground leading-relaxed mb-7">
            Um polo de atendimento local para ajudar pessoas de Cristalina-GO e região a darem o próximo passo na formação, com orientação clara sobre cursos, modalidades e atendimento oficial.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="rounded-2xl bg-soft-gray border border-border p-4"><Users className="text-primary mb-3" /><strong className="block text-navy">Acolhimento</strong><span className="text-sm text-muted-foreground">Atendimento próximo e humanizado.</span></div>
            <div className="rounded-2xl bg-soft-gray border border-border p-4"><ShieldCheck className="text-primary mb-3" /><strong className="block text-navy">Responsabilidade</strong><span className="text-sm text-muted-foreground">Informações comerciais validadas no atendimento.</span></div>
          </div>
          <Button asChild className="rounded-full bg-navy hover:bg-navy/90 px-7"><Link href="/sobre">Conheça o polo</Link></Button>
        </div>
      </div>
    </section>
  );
}
