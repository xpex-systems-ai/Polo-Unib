import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { socialChannels } from '@/data/socialChannels';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { Link } from 'wouter';
import { MessageCircle, Radio, ShieldCheck } from 'lucide-react';

export default function Midias() {
  return (
    <div className="min-h-screen flex flex-col w-full bg-soft-gray">
      <Header />
      <main className="flex-1">
        <section className="bg-navy text-white px-4 py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,255,43,0.18),transparent_34%)]" />
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold mb-6">
              <Radio className="h-4 w-4 text-primary" /> Mídias e Redes Oficiais
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-5">Ecossistema digital UniBF Cristalina-GO</h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl">
              Canais preparados para atendimento, conteúdo, relacionamento e presença local em Campos Lindos.
            </p>
          </div>
        </section>

        <section className="container mx-auto max-w-6xl px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialChannels.map((channel) => {
              const isPending = channel.status === 'Em implantação';
              const card = (
                <div className="h-full rounded-3xl border border-border bg-white p-6 shadow-sm hover:shadow-xl transition-shadow">
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="h-12 w-12 rounded-2xl bg-navy text-primary flex items-center justify-center font-bold">
                      {channel.name.slice(0, 2).toUpperCase()}
                    </div>
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${isPending ? 'bg-muted text-muted-foreground' : 'bg-primary/10 text-primary'}`}>
                      {channel.status}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-navy mb-3">{channel.name}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{channel.purpose}</p>
                  <Button disabled={isPending} className="w-full rounded-full bg-navy hover:bg-navy/90 disabled:opacity-70">
                    {isPending ? 'Modelo em implantação' : channel.ctaLabel ?? 'Acessar canal'}
                  </Button>
                </div>
              );

              if (isPending) return <div key={channel.id}>{card}</div>;
              if (channel.external) return <a key={channel.id} href={channel.href} target="_blank" rel="noreferrer" className="block h-full">{card}</a>;
              return <Link key={channel.id} href={channel.href} className="block h-full">{card}</Link>;
            })}
          </div>

          <div className="mt-14 rounded-[32px] bg-navy p-8 md:p-10 text-white flex flex-col md:flex-row md:items-center md:justify-between gap-6 shadow-2xl">
            <div>
              <div className="flex items-center gap-2 text-primary font-semibold mb-3"><ShieldCheck className="h-5 w-5" /> Atendimento oficial</div>
              <h2 className="text-3xl font-bold mb-2">Quer falar agora com a Professora Kelle?</h2>
              <p className="text-white/70">Use o WhatsApp oficial para confirmar cursos, condições, formas de ingresso e próximos passos.</p>
            </div>
            <a href={getWhatsAppUrl('Olá, Professora Kelle! Vim pela página de mídias e gostaria de atendimento oficial.')} target="_blank" rel="noreferrer">
              <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90"><MessageCircle className="mr-2 h-5 w-5" /> Falar no WhatsApp</Button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
