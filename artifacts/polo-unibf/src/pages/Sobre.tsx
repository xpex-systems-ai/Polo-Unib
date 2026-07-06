import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MapPin, Users, HeartHandshake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { openWhatsApp } from '@/lib/whatsapp';

export default function Sobre() {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Header />
      
      <div className="bg-navy pt-20 pb-20 text-white relative overflow-hidden">
         <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nossa História</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
               Acreditamos que a educação transforma comunidades. Conheça o Polo UniBF Campos Lindos.
            </p>
         </div>
      </div>

      <main className="flex-1 container mx-auto px-4 py-20">
         <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg prose-slate mx-auto text-muted-foreground mb-16">
               <p className="lead text-xl text-foreground font-medium mb-6">
                  Nossa missão em Cristalina-GO é conectar pessoas a oportunidades reais de crescimento profissional através de um ensino superior de excelência, acessível e flexível.
               </p>
               <p className="mb-6">
                  Sabemos que a rotina de quem busca uma faculdade nem sempre é fácil. Trabalho, família e outras responsabilidades tomam tempo. Por isso, oferecemos o modelo EAD da UniBF com um diferencial crucial: o apoio de um polo físico acolhedor.
               </p>
               <p>
                  Aqui no Polo Campos Lindos, você não fala apenas com sistemas automáticos. Nossa equipe está sempre pronta para ajudar com sua matrícula, tirar dúvidas sobre o portal do aluno ou simplesmente oferecer um ambiente tranquilo para os seus estudos.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
               <div className="bg-muted/50 p-6 rounded-2xl text-center border border-border">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-primary shadow-sm">
                     <MapPin className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-navy mb-2">Presença Local</h3>
                  <p className="text-sm text-muted-foreground">Enraizados em Campos Lindos para atender a região de Cristalina.</p>
               </div>
               <div className="bg-muted/50 p-6 rounded-2xl text-center border border-border">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-primary shadow-sm">
                     <HeartHandshake className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-navy mb-2">Acolhimento</h3>
                  <p className="text-sm text-muted-foreground">Tratamento humano, focado em resolver seus problemas.</p>
               </div>
               <div className="bg-muted/50 p-6 rounded-2xl text-center border border-border">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-primary shadow-sm">
                     <Users className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-navy mb-2">Comunidade</h3>
                  <p className="text-sm text-muted-foreground">Faça networking com outros profissionais da nossa cidade.</p>
               </div>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-3xl p-10 text-center">
               <h2 className="text-3xl font-bold text-navy mb-4">Venha tomar um café conosco</h2>
               <p className="text-lg text-muted-foreground mb-8">
                  Estamos na R. Sem Nome, Qd. 1, Lt. 25, Sala 2, Setor D. Nossa equipe terá o maior prazer em apresentar nossa estrutura e os cursos disponíveis.
               </p>
               <Button size="lg" onClick={() => openWhatsApp('Olá, vi a página sobre o Polo e gostaria de agendar uma visita/tirar dúvidas.')}>
                  Agendar visita via WhatsApp
               </Button>
            </div>
         </div>
      </main>

      <Footer />
    </div>
  );
}
