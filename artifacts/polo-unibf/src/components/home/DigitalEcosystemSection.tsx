import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { openWhatsApp } from '@/lib/whatsapp';
import { BookOpen, Mail, MessageCircle, Share2 } from 'lucide-react';

const cards = [
  { title: 'WhatsApp', text: 'Atendimento oficial para tirar dúvidas e confirmar informações.', icon: MessageCircle },
  { title: 'Redes Sociais', text: 'Canais preparados para relacionamento e presença local.', icon: Share2 },
  { title: 'Blog', text: 'Orientações editoriais para escolher seu próximo passo.', icon: BookOpen },
  { title: 'Newsletter', text: 'Cadastro de interesse para receber novidades do polo.', icon: Mail },
];

export function DigitalEcosystemSection() {
  return (
    <section className="py-20 px-4 bg-navy text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="max-w-3xl mb-10">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Ecossistema digital</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Tudo conectado para orientar melhor você</h2>
          <p className="text-white/75 text-lg">Site, WhatsApp, redes sociais, blog e UniBF TV trabalhando juntos para facilitar seu próximo passo.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {cards.map(({ title, text, icon: Icon }) => (
            <div key={title} className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm">
              <Icon className="h-8 w-8 text-primary mb-5" />
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-sm text-white/70 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" onClick={() => openWhatsApp('Olá! Vim pelo ecossistema digital da UniBF Cristalina-GO e gostaria de atendimento oficial.')} className="rounded-full bg-primary hover:bg-primary/90">Falar no WhatsApp</Button>
          <Link href="/midias"><Button size="lg" variant="outline" className="rounded-full border-white/30 bg-transparent text-white hover:bg-white/10">Ver mídias oficiais</Button></Link>
        </div>
      </div>
    </section>
  );
}
