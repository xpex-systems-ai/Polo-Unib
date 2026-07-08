import { Link } from 'wouter';
import { Facebook, Instagram, MapPin, Phone, MessageCircle, Linkedin, Music2, BriefcaseBusiness } from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { socialChannels } from '@/data/socialChannels';
import { useState } from 'react';

const LOGO = '/assets/logos/unibf-cristalina-go-logo.png';

export function Footer() {
  const [logoError, setLogoError] = useState(false);
  const activeSocials = socialChannels.filter((channel) => channel.external && channel.status === 'Ativo');

  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          <div className="md:col-span-1">
            {/* Logo in white container so it pops on navy */}
            <div className="mb-5 inline-block">
              {!logoError ? (
                <div className="bg-white rounded-xl p-2.5 inline-block">
                  <img
                    src={LOGO}
                    alt="UniBF Cristalina-GO"
                    style={{ maxWidth: '170px', height: 'auto', maxHeight: '56px' }}
                    className="object-contain block"
                    onError={() => setLogoError(true)}
                  />
                </div>
              ) : (
                <div className="flex flex-col">
                  <span className="text-2xl font-bold tracking-tight text-white">UniBF</span>
                  <span className="text-sm font-semibold tracking-wider text-primary uppercase">Cristalina-GO</span>
                </div>
              )}
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Ensino superior acessível e de qualidade em Cristalina-GO e região. Dê o próximo passo na sua carreira.
            </p>
            <div className="flex flex-wrap gap-3">
              {activeSocials.map((channel) => {
                const Icon = channel.id === 'instagram' ? Instagram : channel.id === 'whatsapp' ? MessageCircle : channel.id === 'google-business' ? BriefcaseBusiness : channel.id === 'linkedin' ? Linkedin : channel.id === 'tiktok' ? Music2 : Facebook;
                return (
                  <a key={channel.id} href={channel.href} target="_blank" rel="noreferrer" aria-label={channel.name} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Modalidades</h3>
            <ul className="space-y-3">
              <li><Link href="/graduacao" className="text-white/60 hover:text-white transition-colors text-sm">Graduação</Link></li>
              <li><Link href="/pos-graduacao" className="text-white/60 hover:text-white transition-colors text-sm">Pós-graduação</Link></li>
              <li><Link href="/tecnologo" className="text-white/60 hover:text-white transition-colors text-sm">Tecnólogo</Link></li>
              <li><Link href="/extensao" className="text-white/60 hover:text-white transition-colors text-sm">Extensão</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li><Link href="/cursos" className="text-white/60 hover:text-white transition-colors text-sm">Catálogo de Cursos</Link></li>
              <li><Link href="/sobre" className="text-white/60 hover:text-white transition-colors text-sm">Sobre o Polo</Link></li>
              <li><Link href="/contato" className="text-white/60 hover:text-white transition-colors text-sm">Contato</Link></li>
              <li><Link href="/faq" className="text-white/60 hover:text-white transition-colors text-sm">Perguntas Frequentes</Link></li>
              <li><Link href="/unibf-tv" className="text-white/60 hover:text-white transition-colors text-sm">UniBF TV</Link></li>
              <li><Link href="/midias" className="text-white/60 hover:text-white transition-colors text-sm">Mídias</Link></li>
              <li><Link href="/blog" className="text-white/60 hover:text-white transition-colors text-sm">Blog</Link></li>
              <li><Link href="/newsletter" className="text-white/60 hover:text-white transition-colors text-sm">Newsletter</Link></li>
              <li><Link href="/links" className="text-white/60 hover:text-white transition-colors text-sm">Links da Bio</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/60">
                <Phone size={18} className="shrink-0 text-primary mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+5561982367003" className="hover:text-white">(61) 9 8236-7003</a>
                  <a href={getWhatsAppUrl('Olá! Vim pelo rodapé do site da UniBF Cristalina-GO e gostaria de atendimento oficial.')} target="_blank" rel="noreferrer" className="hover:text-white">WhatsApp oficial</a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/60">
                <MapPin size={18} className="shrink-0 text-primary mt-0.5" />
                <span>R. Sem Nome, Qd. 1, Lt. 25, Sala 2, Setor D, Campos Lindos, Cristalina-GO, 73850-000</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} UniBF Cristalina-GO. Todos os direitos reservados.</p>
          <p>Consulte cursos, valores, condições, modalidades e formas de ingresso diretamente com o atendimento oficial da UniBF Cristalina-GO.</p>
        </div>
      </div>
    </footer>
  );
}
