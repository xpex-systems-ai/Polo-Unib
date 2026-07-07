import { Button } from '@/components/ui/button';
import { openWhatsApp } from '@/lib/whatsapp';
import { FaWhatsapp } from 'react-icons/fa';

export function FinalCTA() {
  return (
    <section className="bg-navy py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Pronto para dar o próximo passo?</h2>
        <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
          Fale com nossa equipe e receba orientação sobre cursos, modalidades e atendimento na UniBF Cristalina-GO.
        </p>
        <Button 
          size="xl" 
          onClick={() => openWhatsApp('Olá! Estou no site e gostaria de saber como faço para me matricular.')}
          className="rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl shadow-[#25D366]/20 border-none"
        >
          <FaWhatsapp className="w-6 h-6 mr-2" />
          Falar com atendimento oficial
        </Button>
        <p className="mt-6 text-sm text-white/50">Consulte condições no atendimento oficial do polo.</p>
      </div>
    </section>
  );
}
