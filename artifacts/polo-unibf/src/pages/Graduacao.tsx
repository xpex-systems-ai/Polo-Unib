import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { GraduationCap, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { openWhatsApp } from '@/lib/whatsapp';

export default function Graduacao() {
  const benefits = [
    "Duração de 3 a 4 anos",
    "Material didático digital",
    "Tutor online e suporte presencial no polo",
    "Informações acadêmicas confirmadas no atendimento oficial",
    "Orientação sobre credenciamento e autorização conforme o curso"
  ];

  return (
    <div className="min-h-screen flex flex-col w-full">
      <Header />
      
      <div className="bg-navy pt-20 pb-20 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-sm font-medium mb-6">
              <GraduationCap className="w-4 h-4 text-primary" /> Modalidade
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Graduação</h1>
            <p className="text-lg text-white/80 max-w-xl mb-8 leading-relaxed">
              O primeiro grande passo da sua carreira. Construa uma base sólida com metodologia adaptada ao seu ritmo e confirme reconhecimento, disponibilidade e condições diretamente no atendimento oficial do UniBF Cristalina-GO.
            </p>
            <div className="flex gap-4">
              <Button size="lg" onClick={() => openWhatsApp('Olá, quero saber mais sobre os cursos de Graduação.')}>
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
            {/* Abstract visual representation */}
            <div className="w-72 h-72 rounded-full border-[20px] border-primary/20 relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent rounded-full flex items-center justify-center">
                <GraduationCap className="w-10 h-10 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-1 container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-navy mb-6">Como funciona?</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              A Graduação é a formação inicial no ensino superior. Nossos cursos oferecem a flexibilidade do ensino a distância, permitindo que você estude de onde quiser, com a segurança de um polo físico próximo para suporte acadêmico e administrativo.
            </p>
            <h3 className="text-xl font-bold text-foreground mb-4 mt-8">Principais vantagens:</h3>
            <ul className="space-y-4">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-foreground">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-muted/50 p-8 rounded-2xl border border-border">
            <h3 className="text-xl font-bold text-navy mb-6">Áreas de Interesse Populares</h3>
            <div className="space-y-4">
              {['Gestão e Negócios', 'Educação', 'Saúde', 'Jurídico', 'Tecnologia'].map((area, i) => (
                <div key={i} className="bg-white p-4 rounded-xl border border-border flex justify-between items-center group">
                  <span className="font-medium text-foreground">{area}</span>
                  <Link href="/cursos" className="text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
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
