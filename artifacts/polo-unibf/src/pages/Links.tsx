import { useState } from 'react';
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt, FaGraduationCap, FaEnvelope, FaYoutube, FaBlog } from 'react-icons/fa';
import { openWhatsApp } from '@/lib/whatsapp';
import { Link } from 'wouter';
import { socialChannels } from '@/data/socialChannels';

const LOGO = '/assets/logos/unibf-cristalina-go-logo.png';

export default function Links() {
  const [logoError, setLogoError] = useState(false);
  const channel = (id: string) => socialChannels.find((item) => item.id === id);

  const buttons = [
    { icon: FaWhatsapp, label: 'Fale com a equipe (WhatsApp)', action: () => openWhatsApp('Olá! Vim pelo link da bio e gostaria de informações sobre cursos na UniBF Cristalina-GO.'), color: 'bg-[#25D366] text-white hover:bg-[#20bd5a]' },
    { icon: FaGraduationCap, label: 'Ver Catálogo de Cursos', href: '/cursos', color: 'bg-navy text-white hover:bg-navy/90' },
    { icon: FaYoutube, label: 'UniBF TV', href: '/unibf-tv', color: 'bg-white text-navy border border-border hover:bg-muted' },
    { icon: FaEnvelope, label: 'Mídias e Redes Oficiais', href: '/midias', color: 'bg-white text-navy border border-border hover:bg-muted' },
    { icon: FaBlog, label: 'Blog UniBF Cristalina-GO', href: '/blog', color: 'bg-white text-navy border border-border hover:bg-muted' },
    { icon: FaEnvelope, label: 'Newsletter', href: '/newsletter', color: 'bg-white text-navy border border-border hover:bg-muted' },
    { icon: FaInstagram, label: 'Instagram', href: channel('instagram')?.href, external: true, status: channel('instagram')?.status, color: 'bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white hover:opacity-90' },
    { icon: FaMapMarkerAlt, label: 'Google Business Profile', href: channel('google-business')?.href, external: true, status: channel('google-business')?.status, color: 'bg-white text-navy border-2 border-navy hover:bg-muted' },
  ];

  return (
    <div className="min-h-screen bg-muted flex flex-col items-center py-12 px-4 relative overflow-hidden">
      <div className="absolute top-0 w-full h-[300px] bg-navy rounded-b-[50%] scale-x-150 -translate-y-1/2" />
      <div className="relative z-10 w-full max-w-[420px] flex flex-col items-center">
        <div className="mb-6">
          {!logoError ? (
            <div className="bg-navy rounded-2xl px-6 py-4 shadow-2xl">
              <img src={LOGO} alt="UniBF Cristalina-GO" style={{ maxWidth: '210px', height: 'auto', maxHeight: '70px' }} className="object-contain block mx-auto" onError={() => setLogoError(true)} />
            </div>
          ) : (
            <><div className="w-24 h-24 bg-white rounded-full p-1 shadow-xl mb-4 mx-auto"><div className="w-full h-full bg-accent rounded-full flex items-center justify-center"><FaGraduationCap className="w-10 h-10 text-primary" /></div></div><h1 className="text-xl font-bold text-navy text-center">UniBF Cristalina-GO</h1></>
          )}
        </div>
        <p className="text-muted-foreground text-sm mb-8 text-center px-4">Ensino superior em Cristalina-GO. Confirme cursos, condições e formas de ingresso no atendimento oficial.</p>
        <div className="w-full flex flex-col gap-4">
          {buttons.map((btn, i) => {
            const Icon = btn.icon;
            const pending = btn.status === 'Em implantação';
            const content = <div className={`w-full p-4 rounded-full flex items-center justify-center gap-3 font-semibold shadow-sm transition-transform hover:scale-[1.02] active:scale-[0.98] ${pending ? 'bg-white text-muted-foreground border border-border' : btn.color}`}><Icon className="w-5 h-5 shrink-0" /><span>{pending ? `${btn.label} — Em implantação` : btn.label}</span></div>;
            if (pending) return <div key={i} className="w-full outline-none cursor-not-allowed">{content}</div>;
            if (btn.action) return <button key={i} onClick={btn.action} className="w-full outline-none">{content}</button>;
            if (btn.external) return <a key={i} href={btn.href} target="_blank" rel="noreferrer" className="w-full outline-none">{content}</a>;
            return <Link key={i} href={btn.href!} className="w-full outline-none">{content}</Link>;
          })}
        </div>
        <div className="mt-12 text-xs text-muted-foreground">© {new Date().getFullYear()} Centro Universitário UniBF — Cristalina-GO</div>
      </div>
    </div>
  );
}
