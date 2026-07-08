import { FormEvent, useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { Home, MailCheck, MessageCircle } from 'lucide-react';
import { Link } from 'wouter';

type NewsletterLead = { name: string; whatsapp: string; interest: string; createdAt: string };

export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false);
  const [consent, setConsent] = useState(false);
  const [form, setForm] = useState({ name: '', whatsapp: '', interest: '' });
  const [error, setError] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const name = form.name.trim();
    const whatsapp = form.whatsapp.trim();
    const interest = form.interest.trim();
    if (!name || !whatsapp || !interest) {
      setError('Preencha nome, WhatsApp e interesse para continuar.');
      return;
    }
    if (!consent) {
      setError('Confirme o consentimento LGPD simples para enviar o cadastro.');
      return;
    }
    setError('');
    const lead: NewsletterLead = { name, whatsapp, interest, createdAt: new Date().toISOString() };
    const current = JSON.parse(localStorage.getItem('unibf_newsletter_leads') ?? '[]') as NewsletterLead[];
    localStorage.setItem('unibf_newsletter_leads', JSON.stringify([lead, ...current].slice(0, 100)));
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen flex flex-col w-full bg-soft-gray">
      <Header />
      <main className="flex-1">
        <section className="bg-navy px-4 py-20 text-white">
          <div className="container mx-auto max-w-5xl text-center">
            <MailCheck className="mx-auto mb-5 h-12 w-12 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Receba novidades da UniBF Cristalina-GO</h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">Cadastre seu interesse para receber orientações educacionais e atualizações do polo.</p>
            <p className="mt-4 text-sm text-white/60">Cadastro inicial de interesse. Para atendimento imediato, fale pelo WhatsApp oficial.</p>
          </div>
        </section>
        <section className="container mx-auto max-w-3xl px-4 py-16">
          <div className="rounded-[32px] border border-border bg-white p-6 md:p-8 shadow-xl">
            {submitted ? (
              <div className="text-center py-8">
                <MailCheck className="mx-auto mb-5 h-14 w-14 text-primary" />
                <h2 className="text-2xl font-bold text-navy mb-3">Cadastro recebido com sucesso.</h2>
                <p className="text-muted-foreground mb-6">Obrigado! Para atendimento imediato, fale com a equipe pelo WhatsApp oficial.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <a href={getWhatsAppUrl('Olá! Cadastrei meu interesse na newsletter da UniBF Cristalina-GO e gostaria de atendimento oficial.')} target="_blank" rel="noreferrer">
                    <Button className="w-full rounded-full bg-primary hover:bg-primary/90"><MessageCircle className="mr-2 h-5 w-5" /> Falar no WhatsApp</Button>
                  </a>
                  <Link href="/">
                    <Button variant="outline" className="w-full rounded-full"><Home className="mr-2 h-5 w-5" /> Voltar para o site</Button>
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2"><Label htmlFor="name">Nome</Label><Input id="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Seu nome" /></div>
                <div className="space-y-2"><Label htmlFor="whatsapp">WhatsApp</Label><Input id="whatsapp" required value={form.whatsapp} onChange={(e) => setForm({ ...form, whatsapp: e.target.value })} placeholder="(00) 00000-0000" /></div>
                <div className="space-y-2">
                  <Label>Interesse</Label>
                  <Select required onValueChange={(interest) => setForm({ ...form, interest })}>
                    <SelectTrigger><SelectValue placeholder="Selecione uma área de interesse" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="graduacao">Graduação</SelectItem>
                      <SelectItem value="pos-graduacao">Pós-graduação</SelectItem>
                      <SelectItem value="tecnologo">Tecnólogo</SelectItem>
                      <SelectItem value="extensao">Extensão</SelectItem>
                      <SelectItem value="orientacao">Ainda estou escolhendo</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <label className="flex items-start gap-3 rounded-2xl bg-muted/60 p-4 text-sm text-muted-foreground">
                  <Checkbox checked={consent} onCheckedChange={(checked) => setConsent(Boolean(checked))} className="mt-0.5" />
                  <span>Ao enviar, você autoriza o contato do polo para orientações educacionais. Seus dados não serão vendidos.</span>
                </label>
                {error && <p className="rounded-2xl bg-destructive/10 p-3 text-sm text-destructive">{error}</p>}
                <Button type="submit" className="w-full rounded-full bg-navy hover:bg-navy/90">Enviar cadastro</Button>
              </form>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
