import { getWhatsAppUrl } from '@/lib/whatsapp';

export type SocialChannelStatus = 'Ativo' | 'Em implantação';

export type SocialChannel = {
  id: string;
  name: string;
  purpose: string;
  status: SocialChannelStatus;
  href: string;
  external?: boolean;
  ctaLabel?: string;
};

export const socialChannels: SocialChannel[] = [
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    purpose: 'Atendimento oficial para cursos, matrícula, documentos e orientações do polo.',
    status: 'Ativo',
    href: getWhatsAppUrl('Olá! Vim pelos canais digitais da UniBF Cristalina-GO e gostaria de atendimento oficial.'),
    external: true,
    ctaLabel: 'Falar no WhatsApp',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    purpose: 'Conteúdo institucional, avisos e relacionamento com estudantes e comunidade.',
    status: 'Ativo',
    href: 'https://instagram.com/universidadeunibf',
    external: true,
    ctaLabel: 'Acessar Instagram',
  },
  {
    id: 'facebook',
    name: 'Facebook',
    purpose: 'Presença social local para publicações, eventos e comunicação com a comunidade.',
    status: 'Em implantação',
    href: '',
  },
  {
    id: 'x',
    name: 'X',
    purpose: 'Canal complementar para atualizações rápidas e posicionamentos institucionais.',
    status: 'Em implantação',
    href: '',
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    purpose: 'Vídeos curtos com dicas de estudo, bastidores e conteúdo educativo.',
    status: 'Em implantação',
    href: '',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    purpose: 'Relacionamento profissional, educação continuada e presença institucional.',
    status: 'Em implantação',
    href: '',
  },
  {
    id: 'google-business',
    name: 'Google Business Profile',
    purpose: 'Localização, avaliações e informações do polo para quem busca atendimento presencial.',
    status: 'Ativo',
    href: 'https://www.google.com/maps/search/?api=1&query=Centro+Universit%C3%A1rio+UniBF+Cristalina+GO',
    external: true,
    ctaLabel: 'Ver localização',
  },
  {
    id: 'blog',
    name: 'Blog',
    purpose: 'Orientações editoriais sobre cursos, documentos, EAD e rotina de estudos.',
    status: 'Ativo',
    href: '/blog',
    ctaLabel: 'Abrir blog',
  },
  {
    id: 'newsletter',
    name: 'Newsletter',
    purpose: 'Cadastro para receber novidades e orientações educacionais do polo.',
    status: 'Ativo',
    href: '/newsletter',
    ctaLabel: 'Cadastrar interesse',
  },
  {
    id: 'unibf-tv',
    name: 'UniBF TV',
    purpose: 'Conteúdos em vídeo para conhecer melhor a instituição, cursos e trilhas de formação.',
    status: 'Ativo',
    href: '/unibf-tv',
    ctaLabel: 'Assistir vídeos',
  },
];

export function getSocialChannel(id: string) {
  return socialChannels.find((channel) => channel.id === id);
}
