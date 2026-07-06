export interface Course {
  id: string;
  title: string;
  modality: 'Graduação' | 'Pós-graduação' | 'Tecnólogo' | 'Extensão';
  area: string;
  description: string;
  cta: string;
  icon?: string;
  whatsappMessage?: string;
}

export interface Lead {
  id: string;
  createdAt: string;
  nome: string;
  telefone: string;
  whatsapp: string;
  cidade: string;
  cursoInteresse: string;
  modalidade: string;
  mensagem: string;
  status: 'Novo' | 'Em contato' | 'Aguardando resposta' | 'Matriculado' | 'Perdido';
}
