import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { openWhatsApp } from '@/lib/whatsapp';
import { Link } from 'wouter';

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-navy text-white overflow-hidden">
      {/* Background patterns/texture could go here */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/90 to-foreground/90 z-0"></div>
      
      {/* Decorative blurred circles for modern vibe */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-overlay filter blur-[100px] opacity-70 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full mix-blend-overlay filter blur-[120px] opacity-50"></div>

      <div className="container relative z-10 mx-auto px-4 py-20 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium mb-8 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          Matrículas e informações em Cristalina-GO
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl leading-[1.1]"
        >
          Seu futuro começa com <span className="text-primary block md:inline">uma decisão.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-white/80 max-w-2xl mb-10 leading-relaxed"
        >
          Ensino superior com orientação local em Cristalina-GO. Escolha sua formação e fale com nossa equipe para confirmar cursos, modalidades e condições.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Button 
            size="xl" 
            onClick={() => openWhatsApp('Olá, Professora Kelle! Vim pelo site da UniBF Cristalina-GO e gostaria de receber orientação sobre cursos e modalidades.')}
            className="w-full sm:w-auto shadow-lg shadow-primary/25 rounded-full bg-primary hover:bg-primary/90"
          >
            Falar com a Professora Kelle
          </Button>
          <Link href="/cursos" className="w-full sm:w-auto">
            <Button size="xl" variant="outline" className="w-full sm:w-auto text-white border-white/30 bg-transparent hover:bg-white/10 rounded-full">
              Ver cursos
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-8 w-full max-w-3xl rounded-3xl border border-white/15 bg-white/10 p-4 backdrop-blur-md"
        >
          <p className="text-sm text-white/70 mb-3">O que você quer aprender hoje?</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {['Graduação', 'Pós-graduação', 'Tecnólogo', 'Extensão'].map((item) => (
              <Link key={item} href={`/cursos?modalidade=${encodeURIComponent(item)}`}>
                <span className="block rounded-full bg-white/10 border border-white/15 px-3 py-2 text-sm font-semibold hover:bg-white hover:text-navy transition-colors">{item}</span>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
