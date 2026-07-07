import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Briefcase, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { openWhatsApp } from '@/lib/whatsapp';

export default function Tecnologo() {
  const benefits = [
    "Formação rápida (2 a 3 anos)",
    "Foco em disciplinas práticas",
    "Orientação sobre possibilidades de atuação",
    "Diploma de nível superior",
    "Permite cursar pós-graduação depois"
  ];

  return (
    <div className="min-h-screen flex flex-col w-full">
      <Header />
      
      <div className="bg-navy pt-20 pb-20 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-sm font-medium mb-6">
              <Briefcase className="w-4 h-4 text-amber-400" /> Modalidade
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Tecnólogo</h1>
            <p className="text-lg text-white/80 max-w-xl mb-8 leading-relaxed">
              Cursos superiores de curta duração com foco em habilidades profissionais. Consulte a equipe oficial para confirmar opções disponíveis, condições e caminhos de atuação para o seu objetivo.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white border-none" onClick={() => openWhatsApp('Olá, quero saber mais sobre os cursos de Tecnólogo.')}>
                Consultar disponibilidade
              </Button>
              <Link href="/cursos">
                <Button size="lg" variant="outline" className="text-white border-white/30 bg-transparent hover:bg-white/10">
                  Ver cursos
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-72 h-72 rounded-full border-[20px] border-amber-500/20 relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center">
                <Briefcase className="w-10 h-10 text-amber-600" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-1 container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-navy mb-6">Prático e direto ao ponto</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              O tecnólogo costuma ter uma proposta mais objetiva e direcionada para competências profissionais. Fale com o atendimento oficial para entender carga horária, matriz, disponibilidade e aderência ao seu momento de carreira.
            </p>
            <h3 className="text-xl font-bold text-foreground mb-4 mt-8">Vantagens do Tecnólogo:</h3>
            <ul className="space-y-4">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                  <span className="text-foreground">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-amber-50/50 p-8 rounded-2xl border border-amber-100">
            <h3 className="text-xl font-bold text-navy mb-6">Áreas de Atuação</h3>
            <div className="space-y-4">
              {['Gestão Comercial', 'Logística', 'Recursos Humanos', 'Marketing', 'Análise de Sistemas'].map((area, i) => (
                <div key={i} className="bg-white p-4 rounded-xl border border-amber-100 flex justify-between items-center group">
                  <span className="font-medium text-foreground">{area}</span>
                  <Link href="/cursos" className="text-sm text-amber-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    Explorar →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
