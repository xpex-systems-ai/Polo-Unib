const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '5561981571394';

export function getWhatsAppUrl(message?: string): string {
  const baseUrl = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!message) {
    return baseUrl;
  }

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
