import { useState } from 'react';
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt, FaGraduationCap, FaEnvelope } from 'react-icons/fa';
import { openWhatsApp } from '@/lib/whatsapp';
import { Link } from 'wouter';

const LOGO = '/assets/logos/unibf-cristalina-go-logo.png';
const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Centro+Universit%C3%A1rio+UniBF+Cristalina+GO';

export default function Links() {
  const [logoError, setLogoError] = useState(false);

  const buttons = [
    {
      icon: FaWhatsapp,
      label: 'Fale com a equipe (WhatsApp)',
      action: () => openWhatsApp('Olá! Vim pelo link da bio e gostaria de informações sobre cursos na UniBF Cristalina-GO.'),
      color: 'bg-[#25D366] text-white hover:bg-[#20bd5a]'
    },
    {
      icon: FaGraduationCap,
      label: 'Ver Catálogo de Cursos',
      href: '/cursos',
      color: 'bg-navy text-white hover:bg-navy/90'
    },
    {
      icon: FaInstagram,
      label: 'Siga no Instagram',
      href: 'https://instagram.com/universidadeunibf',
      external: true,
      color: 'bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white hover:opacity-90'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Como chegar no Polo',
      href: MAPS_URL,
      external: true,
      color: 'bg-white text-navy border-2 border-navy hover:bg-muted'
    },
    {
      icon: FaEnvelope,
      label: 'Ir para o site oficial',
      href: '/',
      color: 'bg-white text-foreground border border-border hover:bg-muted'
    }
  ];

  return (
    <div className="min-h-screen bg-muted flex flex-col items-center py-12 px-4 relative overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute top-0 w-full h-[300px] bg-navy rounded-b-[50%] scale-x-150 -translate-y-1/2" />

      <div className="relative z-10 w-full max-w-[400px] flex flex-col items-center">
        {/* Logo */}
        <div className="mb-6">
          {!logoError ? (
            <div className="bg-navy rounded-2xl px-6 py-4 shadow-2xl">
              <img
                src={LOGO}
                alt="UniBF Cristalina-GO"
                style={{ maxWidth: '210px', height: 'auto', maxHeight: '70px' }}
                className="object-contain block mx-auto"
                onError={() => setLogoError(true)}
              />
            </div>
          ) : (
            <>
              <div className="w-24 h-24 bg-white rounded-full p-1 shadow-xl mb-4 mx-auto">
                <div className="w-full h-full bg-accent rounded-full flex items-center justify-center">
                  <FaGraduationCap className="w-10 h-10 text-primary" />
                </div>
              </div>
              <h1 className="text-xl font-bold text-navy text-center">UniBF Cristalina-GO</h1>
            </>
          )}
        </div>

        <p className="text-muted-foreground text-sm mb-8 text-center px-4">
          Ensino superior de qualidade em Cristalina-GO. Graduação, Pós e Tecnólogo.
        </p>

        {/* Links */}
        <div className="w-full flex flex-col gap-4">
          {buttons.map((btn, i) => {
            const Icon = btn.icon;

            const content = (
              <div className={`w-full p-4 rounded-full flex items-center justify-center gap-3 font-semibold shadow-sm transition-transform hover:scale-[1.02] active:scale-[0.98] ${btn.color}`}>
                <Icon className="w-5 h-5 shrink-0" />
                <span>{btn.label}</span>
              </div>
            );

            if (btn.action) {
              return (
                <button key={i} onClick={btn.action} className="w-full outline-none">
                  {content}
                </button>
              );
            }

            if (btn.external) {
              return (
                <a key={i} href={btn.href} target="_blank" rel="noreferrer" className="w-full outline-none">
                  {content}
                </a>
              );
            }

            return (
              <Link key={i} href={btn.href!} className="w-full outline-none">
                {content}
              </Link>
            );
          })}
        </div>

        <div className="mt-12 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Centro Universitário UniBF — Cristalina-GO
        </div>
      </div>
    </div>
  );
}
