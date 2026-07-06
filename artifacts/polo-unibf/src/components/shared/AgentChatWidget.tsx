import { useState, useEffect } from 'react';
import { X, GraduationCap, Award, Briefcase, BookOpen, Wallet, MapPin, MessageCircle } from 'lucide-react';
import { openWhatsApp } from '@/lib/whatsapp';

const AVATAR = '/assets/avatars/professora-kelle-avatar.png';

const QUICK_ACTIONS = [
  { label: 'Quero fazer graduação', icon: GraduationCap, message: 'Olá, Professora Kelle! Tenho interesse em graduação. Pode me orientar?' },
  { label: 'Quero fazer pós-graduação', icon: Award, message: 'Olá, Professora Kelle! Tenho interesse em pós-graduação. Pode me orientar?' },
  { label: 'Quero saber sobre tecnólogo', icon: Briefcase, message: 'Olá, Professora Kelle! Quero saber mais sobre cursos tecnólogos.' },
  { label: 'Quero saber sobre extensão', icon: BookOpen, message: 'Olá, Professora Kelle! Quero saber mais sobre cursos de extensão.' },
  { label: 'Consultar valores e condições', icon: Wallet, message: 'Olá, Professora Kelle! Quero consultar valores, modalidades e condições disponíveis.' },
  { label: 'Quero visitar o polo', icon: MapPin, message: 'Olá, Professora Kelle! Quero agendar uma visita ao polo.' },
  { label: 'Falar com atendimento humano', icon: MessageCircle, message: 'Olá! Quero falar com o atendimento oficial do Polo UniBF Campos Lindos.' },
];

const SESSION_KEY = 'kelle_auto_opened';

export function AgentChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [avatarError, setAvatarError] = useState(false);

  // Auto-open after 2.5 s on first session visit
  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;
    const t = setTimeout(() => {
      setIsOpen(true);
      setShowBubble(false);
      sessionStorage.setItem(SESSION_KEY, '1');
    }, 2500);
    return () => clearTimeout(t);
  }, []);

  // Show teaser bubble after 1 s if not already opened
  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;
    const t = setTimeout(() => setShowBubble(true), 1000);
    return () => clearTimeout(t);
  }, []);

  const open = () => {
    setIsOpen(true);
    setShowBubble(false);
    sessionStorage.setItem(SESSION_KEY, '1');
  };

  const close = () => setIsOpen(false);

  return (
    <>
      {/* ── Panel ── */}
      {isOpen && (
        <div
          className="fixed bottom-6 right-6 z-[9999] flex flex-col overflow-hidden"
          style={{
            width: 'min(380px, calc(100vw - 24px))',
            borderRadius: 24,
            boxShadow: '0 20px 50px rgba(0,0,0,0.22)',
          }}
        >
          {/* Header */}
          <div
            className="relative flex items-center gap-3 px-5 py-4 text-white"
            style={{ background: 'linear-gradient(135deg, #003B5C 0%, #002F4B 100%)' }}
          >
            {/* Avatar */}
            <div className="relative shrink-0">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/30 shadow-lg bg-white/10">
                {!avatarError ? (
                  <img
                    src={AVATAR}
                    alt="Professora Kelle"
                    className="w-full h-full object-cover"
                    onError={() => setAvatarError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white font-bold text-xl">K</div>
                )}
              </div>
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-[#002F4B]" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-bold text-base leading-tight">Professora Kelle</span>
                <span className="text-[10px] font-semibold bg-green-400/20 text-green-300 border border-green-400/30 rounded-full px-2 py-0.5 uppercase tracking-wide">
                  Assistente IA
                </span>
              </div>
              <p className="text-xs text-white/60 mt-0.5">Assistente Virtual do Polo UniBF</p>
              <div className="flex items-center gap-1 mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[11px] text-green-300 font-medium">Online agora</span>
              </div>
            </div>

            <button
              onClick={close}
              className="shrink-0 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-colors"
              aria-label="Fechar"
            >
              <X size={16} />
            </button>
          </div>

          {/* Body */}
          <div className="bg-white flex flex-col">
            {/* Intro message */}
            <div className="px-5 py-4 border-b border-border/50">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full overflow-hidden border border-border shrink-0 bg-navy/5">
                  {!avatarError ? (
                    <img src={AVATAR} alt="Kelle" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-navy font-bold text-sm">K</div>
                  )}
                </div>
                <div className="bg-muted/50 rounded-2xl rounded-tl-none px-4 py-3 text-sm text-foreground leading-relaxed max-w-[260px]">
                  Estou aqui para ajudar você com informações sobre cursos, modalidades e próximos passos. O que você procura hoje?
                </div>
              </div>
            </div>

            {/* Quick actions */}
            <div className="px-4 py-3 flex flex-col gap-2 max-h-72 overflow-y-auto">
              {QUICK_ACTIONS.map((action) => (
                <button
                  key={action.label}
                  onClick={() => openWhatsApp(action.message)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl border border-border bg-white hover:bg-navy hover:text-white hover:border-navy text-left transition-all group"
                >
                  <action.icon size={15} className="text-primary group-hover:text-white shrink-0 transition-colors" />
                  <span className="text-sm font-medium text-foreground group-hover:text-white transition-colors leading-tight">
                    {action.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Footer disclaimer */}
            <div className="px-5 py-3 bg-muted/30 border-t border-border/50">
              <p className="text-[11px] text-muted-foreground leading-snug text-center">
                A Professora Kelle é uma assistente virtual de orientação e não substitui o atendimento humano oficial do polo.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ── Teaser speech bubble ── */}
      {showBubble && !isOpen && (
        <div
          className="fixed bottom-36 right-6 z-[9998] max-w-[220px] bg-white rounded-2xl rounded-br-sm shadow-xl border border-border px-4 py-3 cursor-pointer"
          onClick={open}
        >
          <p className="text-sm text-foreground leading-snug font-medium">
            Oi! Eu sou a Professora Kelle 👋
          </p>
          <p className="text-xs text-muted-foreground mt-1">Posso te ajudar a escolher o melhor caminho para sua formação.</p>
          <div className="absolute -bottom-2 right-5 w-4 h-4 bg-white border-r border-b border-border rotate-45" />
        </div>
      )}

      {/* ── Floating launcher button ── */}
      {!isOpen && (
        <button
          onClick={open}
          aria-label="Falar com a Professora Kelle"
          className="fixed bottom-6 right-6 z-[9998] flex flex-col items-center gap-1.5 group"
        >
          {/* Glow rings */}
          <div className="relative">
            <span className="absolute inset-0 rounded-full bg-primary/20 animate-ping scale-110" />
            <span className="absolute inset-0 rounded-full bg-primary/10 animate-pulse scale-125" />
            <div className="relative w-[84px] h-[84px] rounded-full overflow-hidden border-[3px] border-white shadow-2xl bg-navy/10">
              {!avatarError ? (
                <img
                  src={AVATAR}
                  alt="Professora Kelle"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={() => setAvatarError(true)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-navy text-white font-bold text-2xl">K</div>
              )}
            </div>
            {/* Online dot */}
            <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white shadow" />
          </div>
          {/* Label */}
          <div className="bg-white rounded-full px-3 py-1 shadow-md border border-border text-center">
            <p className="text-[11px] font-bold text-navy leading-tight">Professora Kelle</p>
            <p className="text-[10px] text-green-600 font-medium">Online agora</p>
          </div>
        </button>
      )}
    </>
  );
}
