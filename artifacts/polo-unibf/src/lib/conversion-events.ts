/** Eventos locais, sem identificadores pessoais. Não envia dados a terceiros.
 * Um adaptador de analytics só pode ser adicionado após aprovação e gestão de consentimento. */
export type PoloEvent = 'whatsapp_click' | 'lead_submit_attempt' | 'lead_handoff_whatsapp' | 'newsletter_handoff_whatsapp';
export function recordPoloEvent(event: PoloEvent, source: string): void {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent('polo:conversion', {
    detail: { event, source, timestamp: new Date().toISOString() },
  }));
}
