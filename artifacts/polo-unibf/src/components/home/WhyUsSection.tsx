import { MapPin, Users, BookCheck, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export function WhyUsSection() {
  const benefits = [
    {
      title: 'Atendimento local',
      description: 'Atendimento presencial em Cristalina-GO para tirar dúvidas e oferecer todo suporte que você precisa durante o curso.',
      icon: MapPin
    },
    {
      title: 'Suporte Humanizado',
      description: 'Não fale apenas com robôs. Nossa equipe local conhece você pelo nome e acompanha sua jornada acadêmica.',
      icon: Users
    },
    {
      title: 'Orientação institucional',
      description: 'Informações sobre cursos e modalidades são conduzidas com responsabilidade e confirmação nos canais oficiais.',
      icon: BookCheck
    },
    {
      title: 'Flexibilidade Real',
      description: 'Estude de onde estiver, no seu ritmo, mas sabendo que tem um porto seguro físico quando precisar.',
      icon: Clock
    }
  ];

  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Por que estudar na UniBF Cristalina-GO?</h2>
          <p className="text-lg text-muted-foreground">
            A conveniência do ensino moderno combinada com o suporte e a segurança de um polo físico próximo a você.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center p-6"
              >
                <div className="w-16 h-16 rounded-full bg-accent text-primary flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
