export type GraduationEadCourse = {
  title: string;
  area: string;
  duration: '2 anos' | '3 anos' | '4 anos' | '5 anos';
  modality: 'Graduação EaD';
  priceLabel: 'Consulte condições';
  whatsappMessage: string;
};

const messageFor = (course: string) =>
  `Olá, Professora Kelle! Tenho interesse no curso de ${course} em Graduação EaD pelo Polo UniBF Cristalina-GO. Pode consultar disponibilidade, valores e condições para mim?`;

export const graduationEadCourses: GraduationEadCourse[] = [
  { title: 'Administração', area: 'Gestão e Negócios', duration: '4 anos', modality: 'Graduação EaD', priceLabel: 'Consulte condições', whatsappMessage: messageFor('Administração') },
  { title: 'Análise e Desenvolvimento de Sistemas', area: 'Tecnologia', duration: '3 anos', modality: 'Graduação EaD', priceLabel: 'Consulte condições', whatsappMessage: messageFor('Análise e Desenvolvimento de Sistemas') },
  { title: 'Artes Visuais', area: 'Artes', duration: '4 anos', modality: 'Graduação EaD', priceLabel: 'Consulte condições', whatsappMessage: messageFor('Artes Visuais') },
  { title: 'Ciências Contábeis', area: 'Gestão e Negócios', duration: '4 anos', modality: 'Graduação EaD', priceLabel: 'Consulte condições', whatsappMessage: messageFor('Ciências Contábeis') },
  { title: 'Ciências Econômicas', area: 'Ciências Sociais', duration: '4 anos', modality: 'Graduação EaD', priceLabel: 'Consulte condições', whatsappMessage: messageFor('Ciências Econômicas') },
  { title: 'Educação Física', area: 'Saúde', duration: '4 anos', modality: 'Graduação EaD', priceLabel: 'Consulte condições', whatsappMessage: messageFor('Educação Física') },
  { title: 'Engenharia de Software', area: 'Tecnologia', duration: '4 anos', modality: 'Graduação EaD', priceLabel: 'Consulte condições', whatsappMessage: messageFor('Engenharia de Software') },
  { title: 'Gestão Pública', area: 'Gestão e Negócios', duration: '2 anos', modality: 'Graduação EaD', priceLabel: 'Consulte condições', whatsappMessage: messageFor('Gestão Pública') },
  { title: 'Letras - Português', area: 'Educação', duration: '4 anos', modality: 'Graduação EaD', priceLabel: 'Consulte condições', whatsappMessage: messageFor('Letras - Português') },
  { title: 'Matemática', area: 'Ciências Exatas', duration: '4 anos', modality: 'Graduação EaD', priceLabel: 'Consulte condições', whatsappMessage: messageFor('Matemática') },
  { title: 'Pedagogia', area: 'Educação', duration: '4 anos', modality: 'Graduação EaD', priceLabel: 'Consulte condições', whatsappMessage: messageFor('Pedagogia') },
  { title: 'Processos Gerenciais', area: 'Gestão e Negócios', duration: '2 anos', modality: 'Graduação EaD', priceLabel: 'Consulte condições', whatsappMessage: messageFor('Processos Gerenciais') },
  { title: 'Serviço Social', area: 'Ciências Sociais', duration: '4 anos', modality: 'Graduação EaD', priceLabel: 'Consulte condições', whatsappMessage: messageFor('Serviço Social') },
  { title: 'Sistemas para Internet', area: 'Tecnologia', duration: '3 anos', modality: 'Graduação EaD', priceLabel: 'Consulte condições', whatsappMessage: messageFor('Sistemas para Internet') },
];

export const graduationDurations = ['2 anos', '3 anos', '4 anos', '5 anos'] as const;

export const graduationAreas = [
  'Ciências Exatas',
  'Educação',
  'Artes',
  'Ciências Sociais',
  'Gestão e Negócios',
  'Saúde',
  'Jurídico',
  'Tecnologia',
] as const;
