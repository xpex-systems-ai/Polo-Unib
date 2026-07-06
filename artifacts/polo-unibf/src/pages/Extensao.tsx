import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BookOpen, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { openWhatsApp } from '@/lib/whatsapp';

export default function Extensao() {
  const benefits = [
    "Cursos de curtíssima duração",
    "Foco em habilidades específicas",
    "Ótimo para horas complementares",
    "Certificado válido em todo Brasil",
    "Acessível para qualquer pessoa"
  ];

  return (
    <div className="min-h-screen flex flex-col w-full">
      <Header />
      
      <div className="bg-navy pt-20 pb-20 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4 text-indigo-400" /> Modalidade
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Extensão</h1>
            <p className="text-lg text-white/80 max-w-xl mb-8 leading-relaxed">
              Atualize-se constantemente. Cursos livres para desenvolver novas habilidades, melhorar seu currículo ou cumprir horas complementares.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-indigo-500 hover:bg-indigo-600 text-white border-none" onClick={() => openWhatsApp('Olá, quero saber mais sobre os cursos de Extensão.')}>
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
            <div className="w-72 h-72 rounded-full border-[20px] border-indigo-500/20 relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center">
                <BookOpen className="w-10 h-10 text-indigo-600" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-1 container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-navy mb-6">Educação contínua</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              O aprendizado não termina com o diploma. Os cursos de extensão são perfeitos para quem precisa aprender uma ferramenta nova, entender uma nova lei ou se capacitar em um nicho muito específico rapidamente.
            </p>
            <h3 className="text-xl font-bold text-foreground mb-4 mt-8">Por que fazer Extensão?</h3>
            <ul className="space-y-4">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
                  <span className="text-foreground">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-indigo-50/50 p-8 rounded-2xl border border-indigo-100">
            <h3 className="text-xl font-bold text-navy mb-6">Cursos em Destaque</h3>
            <div className="space-y-4">
              {['Cuidador de Idosos', 'Informática para Negócios', 'Libras Básico', 'Gestão do Tempo', 'Oratória'].map((area, i) => (
                <div key={i} className="bg-white p-4 rounded-xl border border-indigo-100 flex justify-between items-center group">
                  <span className="font-medium text-foreground">{area}</span>
                  <Link href="/cursos" className="text-sm text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity">
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
