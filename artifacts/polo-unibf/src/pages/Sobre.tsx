import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MapPin, Users, HeartHandshake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { openWhatsApp } from '@/lib/whatsapp';
import { motion } from 'framer-motion';

const FACADE = '/assets/polo/fachada-unibf-cristalina-go.jpg';

export default function Sobre() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="min-h-screen flex flex-col w-full">
      <Header />

      {/* Hero */}
      <div className="bg-navy pt-20 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,176,80,0.12),transparent)]" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Quem somos</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nossa História</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Acreditamos que a educação transforma comunidades. Conheça a UniBF Cristalina-GO.
          </p>
        </div>
      </div>

      <main className="flex-1">

        {/* Facade photo + text */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Photo */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl overflow-hidden border border-border shadow-xl aspect-[4/3]"
              >
                {!imgError ? (
                  <img
                    src={FACADE}
                    alt="Fachada do Centro Universitário UniBF Cristalina-GO"
                    className="w-full h-full object-cover"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-navy to-[#002F4B] flex flex-col items-center justify-center text-white/60 gap-3 p-8 text-center">
                    <MapPin className="w-12 h-12 opacity-30" />
                    <p className="font-semibold text-white/80">Centro Universitário UniBF Cristalina-GO</p>
                    <p className="text-sm text-white/50">Adicione a foto em /assets/polo/fachada-unibf-cristalina-go.jpg</p>
                  </div>
                )}
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Nossa missão</p>
                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                  Ensino superior com presença local em Cristalina-GO
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Nossa missão em Cristalina-GO é conectar pessoas a oportunidades reais de crescimento profissional
                    através de ensino superior acessível, orientação local e atendimento humanizado.
                  </p>
                  <p>
                    Sabemos que a rotina de quem busca uma faculdade nem sempre é fácil. Por isso, o polo oferece
                    apoio para orientar interessados sobre cursos, modalidades, matrícula e próximos passos.
                  </p>
                  <p>
                    Aqui, você encontra uma equipe preparada para tirar dúvidas e ajudar no caminho da sua formação —
                    com clareza, respeito e proximidade.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 px-4 bg-soft-gray">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: MapPin, title: 'Presença Local', desc: 'Atendimento presencial em Cristalina-GO e região, próximo de você.' },
                { icon: HeartHandshake, title: 'Acolhimento', desc: 'Tratamento humano, claro e direto. Você não é só um número de matrícula.' },
                { icon: Users, title: 'Comunidade', desc: 'Educação como caminho para fortalecer pessoas e criar oportunidades.' },
              ].map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-7 border border-border shadow-sm text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center mx-auto mb-4">
                    <v.icon className="w-6 h-6 text-navy" />
                  </div>
                  <h3 className="font-bold text-navy mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Visit CTA */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-3xl text-center">
            <div className="bg-gradient-to-br from-navy to-[#002F4B] rounded-3xl p-12 text-white">
              <h2 className="text-3xl font-bold mb-4">Venha tomar um café conosco</h2>
              <p className="text-white/70 mb-8 max-w-lg mx-auto">
                Nossa equipe terá prazer em apresentar a estrutura, tirar dúvidas e orientar sobre cursos disponíveis.
                Estamos em Campo Lindo, Cristalina-GO.
              </p>
              <Button
                size="lg"
                onClick={() => openWhatsApp('Olá! Gostaria de agendar uma visita à UniBF Cristalina-GO.')}
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 font-bold"
              >
                Agendar visita via WhatsApp
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
