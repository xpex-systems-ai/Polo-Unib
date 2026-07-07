import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { LeadForm } from '@/components/forms/LeadForm';
import { MapPin, Phone, Instagram, Clock } from 'lucide-react';

const LOGO = '/assets/logos/unibf-cristalina-go-logo.png';
const FACADE = '/assets/polo/fachada-unibf-cristalina-go.jpg';

export default function Contato() {
  const [logoError, setLogoError] = useState(false);
  const [facadeError, setFacadeError] = useState(false);
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Header />
      
      {/* Page Header */}
      <div className="bg-navy pt-16 pb-32 text-center px-4 relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contato</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Fale com a equipe do UniBF Cristalina-GO. Estamos prontos para ajudar você a dar o próximo passo.
          </p>
        </div>
      </div>

      <main className="flex-1 container mx-auto px-4 -mt-20 mb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form */}
          <div>
            <LeadForm />
          </div>

          {/* Info & Map */}
          <div className="flex flex-col gap-8 pt-8 lg:pt-0 lg:pl-8">
            <div className="bg-white rounded-2xl p-8 border border-border shadow-sm">
              {/* Logo inside contact card */}
              <div className="mb-5 pb-5 border-b border-border">
                {!logoError ? (
                  <img
                    src={LOGO}
                    alt="UniBF Cristalina-GO"
                    style={{ maxWidth: '170px', height: 'auto', maxHeight: '56px' }}
                    className="object-contain rounded-md"
                    onError={() => setLogoError(true)}
                  />
                ) : (
                  <span className="text-lg font-bold text-navy">UniBF Cristalina-GO</span>
                )}
              </div>
              <h3 className="text-2xl font-bold text-navy mb-6">Informações do Polo</h3>

              <div className="mb-6 overflow-hidden rounded-2xl border border-border shadow-[0_16px_40px_rgba(0,31,51,0.14)] bg-navy aspect-[16/10]">
                {!facadeError ? (
                  <img
                    src={FACADE}
                    alt="Fachada do Centro Universitário UniBF Cristalina-GO"
                    className="h-full w-full object-cover object-top"
                    onError={() => setFacadeError(true)}
                  />
                ) : (
                  <div className="h-full w-full bg-gradient-to-br from-navy to-[#002F4B] flex flex-col items-center justify-center gap-2 p-6 text-center text-white/70">
                    <MapPin className="h-10 w-10 text-primary/80" />
                    <p className="font-semibold text-white">Centro Universitário UniBF Cristalina-GO</p>
                    <p className="text-xs text-white/50">Adicione a foto em /assets/polo/fachada-unibf-cristalina-go.jpg</p>
                  </div>
                )}
              </div>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shrink-0">
                    <Phone className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">WhatsApp oficial e telefone alternativo</h4>
                    <p className="text-muted-foreground">WhatsApp oficial: (61) 9 8236-7003</p>
                    <p className="text-muted-foreground">Telefone alternativo: (61) 9 8157-1394</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shrink-0">
                    <MapPin className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Endereço</h4>
                    <p className="text-muted-foreground">R. Sem Nome, Qd. 1, Lt. 25, Sala 2, Setor D<br/>Campo Lindo, Cristalina-GO<br/>CEP 73850-000</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shrink-0">
                    <Clock className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Horário de Funcionamento</h4>
                    <p className="text-muted-foreground">Segunda a Sexta: 08h às 18h<br/>Sábado: 08h às 12h</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shrink-0">
                    <Instagram className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Redes Sociais</h4>
                    <a href="https://instagram.com/universidadeunibf" target="_blank" rel="noreferrer" className="text-primary hover:underline">@universidadeunibf</a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="h-64 bg-muted rounded-2xl overflow-hidden relative border border-border flex items-center justify-center text-center p-4">
               <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-navy to-transparent"></div>
               <div>
                  <MapPin className="w-10 h-10 text-primary mb-2 mx-auto opacity-50" />
                  <h3 className="font-bold mb-1">Localização no Mapa</h3>
                  <a href="https://maps.google.com/?q=Polo+UniBF+Campos+Lindos+Cristalina+GO" target="_blank" rel="noreferrer" className="text-primary text-sm hover:underline">Abrir no Google Maps</a>
               </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
