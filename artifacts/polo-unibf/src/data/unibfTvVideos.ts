export type UnibfTvVideo = {
  id: string;
  title: string;
  description: string;
  category: string;
  youtubeUrl: string;
  embedUrl: string;
  thumbnailUrl: string;
};

const videos = [
  { id: 'VnOjDS6hZ-U', category: 'Conheça a UniBF', title: 'Conheça a UniBF', description: 'Vídeo oficial para conhecer melhor a instituição.' },
  { id: 'z7cxbqqUOTU', category: 'Conheça a UniBF', title: 'Apresentação institucional UniBF', description: 'Conteúdo institucional oficial da UniBF.' },
  { id: 'KRYThuQeTSI', category: 'EAD', title: 'Como funciona o EAD', description: 'Entenda melhor a modalidade de ensino a distância.' },
  { id: 'qDO3Z0nk0xg', category: 'EAD', title: 'Dúvidas sobre EAD', description: 'Vídeo oficial para esclarecer dúvidas comuns sobre EAD.' },
  { id: 'dEwHdW1DjHc', category: 'EAD', title: 'O que você precisa saber sobre EAD', description: 'Conteúdo de apoio para quem deseja estudar online.' },
  { id: 'e7_tH0DnCwU', category: 'Cursos', title: 'Cursos UniBF', description: 'Conheça possibilidades de formação.' },
  { id: 'HZSSpG-vY74', category: 'Cursos', title: 'Graduação, pós e cursos livres', description: 'Conteúdo oficial sobre opções de formação.' },
  { id: 'Ope-f0Sftxs', category: 'Cursos', title: 'Escolha sua formação', description: 'Vídeo para apoiar a escolha do curso ideal.' },
  { id: 'dqxj7zPPfRc', category: 'Carreira', title: 'Mercado de trabalho', description: 'Conteúdo sobre carreira e formação profissional.' },
  { id: 'VN9YoKxxv6w', category: 'Carreira', title: 'Futuro profissional', description: 'Vídeo de orientação sobre carreira e próximos passos.' },
  { id: 'cauWVtLvl4M', category: 'Credibilidade', title: 'Credibilidade e instituição', description: 'Conteúdo oficial para aumentar confiança do visitante.' },
  { id: 'JkO6B0gzfF0', category: 'Credibilidade', title: 'Reconhecimento e orientação institucional', description: 'Vídeo oficial relacionado à credibilidade da instituição.' },
  { id: 'D-IAC3PzbB0', category: 'Portal do Aluno', title: 'Portal do Aluno UniBF', description: 'Conheça recursos e funcionamento do portal do aluno.' },
];

export const unibfTvVideos: UnibfTvVideo[] = videos.map((video) => ({
  ...video,
  youtubeUrl: `https://youtu.be/${video.id}`,
  embedUrl: `https://www.youtube.com/embed/${video.id}`,
  thumbnailUrl: `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`,
}));
