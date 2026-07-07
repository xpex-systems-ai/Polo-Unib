import { useState } from 'react';
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { openWhatsApp } from '@/lib/whatsapp';
import { motion } from 'framer-motion';

const FACADE = '/assets/polo/fachada-unibf-cristalina-go.jpg';
const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Centro+Universit%C3%A1rio+UniBF+Cristalina+GO';

export function LocationSection() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="py-20 px-4 bg-soft-gray">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" /> Venha nos visitar
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Nosso polo em Cristalina
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Venha conhecer nossa estrutura, tirar dúvidas com a equipe e dar o próximo passo na sua formação. Estamos de portas abertas.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-white border border-border flex items-center justify-center shrink-0 shadow-sm">
                  <MapPin className="text-primary w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-sm mb-0.5">Endereço</h4>
                  <p className="text-muted-foreground text-sm">R. Sem Nome, Qd. 1, Lt. 25, Sala 2, Setor D<br />Campo Lindo, Cristalina-GO — CEP 73850-000</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-white border border-border flex items-center justify-center shrink-0 shadow-sm">
                  <Clock className="text-primary w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-sm mb-0.5">Horário de Atendimento</h4>
                  <p className="text-muted-foreground text-sm">Segunda a sexta: 08h às 18h<br />Sábado: 08h às 12h</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-white border border-border flex items-center justify-center shrink-0 shadow-sm">
                  <Phone className="text-primary w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-sm mb-0.5">Contato</h4>
                  <p className="text-muted-foreground text-sm">WhatsApp oficial: (61) 9 8236-7003 &nbsp;|&nbsp; Alternativo: (61) 9 8157-1394</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-6"
                onClick={() => openWhatsApp('Olá! Vim pelo site e gostaria de atendimento no Polo UniBF Cristalina-GO.')}
              >
                <MessageCircle className="w-4 h-4 mr-2" /> Falar no WhatsApp oficial
              </Button>
              <a href={MAPS_URL} target="_blank" rel="noreferrer" className="inline-block">
                <Button variant="outline" className="border-navy/20 text-navy hover:bg-navy/5 rounded-full px-6">
                  Abrir no Google Maps
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Facade photo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-3xl overflow-hidden border border-border shadow-[0_24px_60px_rgba(0,31,51,0.18)] aspect-[4/3] min-h-[300px] sm:min-h-[420px] relative"
          >
            {!imgError ? (
              <img
                src={FACADE}
                alt="Entrada do Polo UniBF Cristalina-GO"
                className="w-full h-full object-cover object-top"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-navy to-[#002F4B] flex flex-col items-center justify-center text-white/60 gap-4 p-8 text-center">
                <MapPin className="w-16 h-16 opacity-30" />
                <p className="font-semibold text-white/80">Centro Universitário UniBF Cristalina-GO</p>
                <p className="text-sm">R. Sem Nome, Qd. 1, Lt. 25 — Campo Lindo</p>
                <a href={MAPS_URL} target="_blank" rel="noreferrer" className="mt-2">
                  <Button size="sm" variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-full">
                    Ver no Google Maps
                  </Button>
                </a>
                <p className="text-xs text-white/30 mt-2">Adicione a foto em /assets/polo/fachada-unibf-cristalina-go.jpg</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
