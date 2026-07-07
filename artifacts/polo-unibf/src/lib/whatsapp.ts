export const WHATSAPP_NUMBER = '5561982367003';
export const DEFAULT_WHATSAPP_MESSAGE =
  'Olá! Vim pelo site da UniBF Cristalina-GO e gostaria de receber atendimento.';

export function getWhatsAppUrl(message = DEFAULT_WHATSAPP_MESSAGE): string {
  const baseUrl = `https://wa.me/${WHATSAPP_NUMBER}`;
  return `${baseUrl}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(message?: string): void {
  window.open(getWhatsAppUrl(message), '_blank');
}

export function getCourseMessage(courseName: string): string {
  return `Olá! Vi o curso de ${courseName} no site do UniBF Cristalina-GO e gostaria de consultar a disponibilidade e obter mais informações.`;
}

export function getAgentHandoffMessage(nome: string, telefone: string, modalidade: string, curso?: string): string {
  let msg = `Olá, sou ${nome} (Tel: ${telefone}).\nFalei com o assistente virtual no site e tenho interesse na modalidade ${modalidade}.`;
  if (curso) {
    msg += `\nGostaria de mais informações sobre: ${curso}.`;
  } else {
    msg += `\nGostaria de conhecer as opções disponíveis.`;
  }
  return msg;
}
