import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function LocationSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent text-primary text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" /> Venha nos visitar
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">Nosso polo em Cristalina</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Estamos de portas abertas para receber você. Venha tomar um café, conhecer nossa estrutura e tirar todas as suas dúvidas pessoalmente com nossa equipe.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center shrink-0">
                  <MapPin className="text-navy w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Endereço</h4>
                  <p className="text-muted-foreground">R. Sem Nome, Qd. 1, Lt. 25, Sala 2, Setor D<br/>Campo Lindo, Cristalina-GO<br/>CEP 73850-000</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center shrink-0">
                  <Clock className="text-navy w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Horário de Atendimento</h4>
                  <p className="text-muted-foreground">Segunda a Sexta: 08:00 às 18:00<br/>Sábado: 08:00 às 12:00</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center shrink-0">
                  <Phone className="text-navy w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Contato Rápido</h4>
                  <p className="text-muted-foreground">(61) 9 8236-7003 / (61) 9 8157-1394</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="h-[500px] bg-muted rounded-3xl overflow-hidden relative group border border-border shadow-sm flex items-center justify-center flex-col text-center p-8">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-navy to-transparent"></div>
            <MapPin className="w-16 h-16 text-primary mb-4 opacity-50" />
            <h3 className="font-bold text-xl mb-2">Mapa Interativo</h3>
            <p className="text-muted-foreground mb-6 max-w-sm">Placeholder para incorporação do Google Maps.</p>
            <a 
              href="https://maps.google.com/?q=Polo+UniBF+Campos+Lindos+Cristalina+GO" 
              target="_blank" 
              rel="noreferrer"
            >
              <Button variant="navy">Abrir no Google Maps</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
