import { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Briefcase, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { openWhatsApp } from '@/lib/whatsapp';

const AVATAR = '/assets/avatars/professora-kelle-avatar.png';

const quickActions = [
  {
    label: 'Quero fazer graduação',
    icon: GraduationCap,
    message: 'Olá, Professora Kelle! Tenho interesse em cursos de graduação. Pode me orientar?',
  },
  {
    label: 'Quero fazer pós-graduação',
    icon: Award,
    message: 'Olá, Professora Kelle! Tenho interesse em pós-graduação. Pode me passar informações?',
  },
  {
    label: 'Quero saber sobre tecnólogo',
    icon: Briefcase,
    message: 'Olá, Professora Kelle! Quero saber mais sobre cursos tecnólogos. Pode me ajudar?',
  },
  {
    label: 'Falar com atendimento',
    icon: MessageCircle,
    message: 'Olá! Quero falar com a equipe do UniBF Cristalina-GO.',
  },
];

export function KellyIntroSection() {
  const [avatarError, setAvatarError] = useState(false);

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-navy via-[#003B5C] to-[#002F4B] text-white overflow-hidden relative">
      {/* Decorative blobs */}
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start gap-6"
          >
            {/* Avatar */}
            <div className="relative">
              {/* Pulse rings */}
              <span className="absolute inset-0 rounded-full bg-primary/25 animate-ping scale-110" />
              <span className="absolute inset-0 rounded-full bg-primary/15 animate-pulse scale-125" />
              <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl bg-navy/20">
                {!avatarError ? (
                  <img
                    src={AVATAR}
                    alt="Professora Kelle"
                    className="w-full h-full object-cover"
                    onError={() => setAvatarError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white font-bold text-4xl">K</div>
                )}
              </div>
              {/* Online dot */}
              <span className="absolute bottom-2 right-2 w-5 h-5 bg-green-400 rounded-full border-2 border-[#002F4B] shadow" />
            </div>

            <div className="text-center md:text-left">
              <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-1">
                Assistente Virtual
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                Conheça a{' '}
                <span className="text-primary">Professora Kelle</span>
              </h2>
              <p className="text-white/70 leading-relaxed max-w-sm">
                Uma assistente virtual criada para orientar visitantes e facilitar o contato com a equipe do polo.
                Ela direciona você para informações seguras e para o atendimento oficial.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <Button
                  onClick={() => openWhatsApp('Olá! Quero falar com a Professora Kelle do UniBF Cristalina-GO.')}
                  className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full px-6"
                >
                  Falar com a Professora Kelle
                </Button>
                <Button
                  variant="outline"
                  onClick={() => openWhatsApp('Olá! Quero falar com o atendimento oficial do UniBF Cristalina-GO.')}
                  className="border-white/30 text-white hover:bg-white/10 rounded-full px-6"
                >
                  Atendimento oficial
                </Button>
              </div>

              <p className="text-white/35 text-xs mt-4 italic">
                A Professora Kelle é uma assistente virtual de orientação e não substitui o atendimento humano oficial do polo.
              </p>
            </div>
          </motion.div>

          {/* Right: Chat card mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm"
          >
            {/* Chat header inside card */}
            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/10">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20 bg-white/10">
                {!avatarError ? (
                  <img src={AVATAR} alt="Kelle" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white font-bold">K</div>
                )}
              </div>
              <div>
                <p className="text-white text-sm font-semibold leading-tight">Professora Kelle</p>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-[11px] text-green-300">Online</span>
                </div>
              </div>
            </div>

            {/* Chat bubbles */}
            <div className="space-y-3 mb-5">
              <div className="flex items-start gap-2">
                <div className="w-7 h-7 rounded-full overflow-hidden bg-white/10 shrink-0">
                  {!avatarError ? (
                    <img src={AVATAR} alt="Kelle" className="w-full h-full object-cover" />
                  ) : (
                    <span className="w-full h-full flex items-center justify-center text-white text-xs font-bold">K</span>
                  )}
                </div>
                <div className="bg-white/10 rounded-2xl rounded-tl-none px-4 py-2.5 text-sm text-white/90 leading-relaxed max-w-[260px]">
                  Olá! Eu sou a Professora Kelle. Posso te ajudar a encontrar o melhor caminho para sua formação.
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-7 h-7 rounded-full overflow-hidden bg-white/10 shrink-0">
                  {!avatarError ? (
                    <img src={AVATAR} alt="Kelle" className="w-full h-full object-cover" />
                  ) : (
                    <span className="w-full h-full flex items-center justify-center text-white text-xs font-bold">K</span>
                  )}
                </div>
                <div className="bg-white/10 rounded-2xl rounded-tl-none px-4 py-2.5 text-sm text-white/90 leading-relaxed max-w-[260px]">
                  Escolha uma opção abaixo para começar 👇
                </div>
              </div>
            </div>

            {/* Quick action buttons */}
            <div className="flex flex-col gap-2">
              {quickActions.map((action) => (
                <button
                  key={action.label}
                  onClick={() => openWhatsApp(action.message)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/10 hover:bg-primary/30 border border-white/10 hover:border-primary/50 text-left transition-all group"
                >
                  <action.icon size={15} className="text-primary shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm text-white/80 group-hover:text-white transition-colors">{action.label}</span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
