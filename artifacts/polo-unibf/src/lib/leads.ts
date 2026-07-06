import { Lead } from '../types';

const LEADS_KEY = 'polo_leads';

export function getLeadsFromStorage(): Lead[] {
  try {
    const data = localStorage.getItem(LEADS_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Failed to get leads from storage', error);
    return [];
  }
}

export function saveLeadToStorage(lead: Omit<Lead, 'id' | 'createdAt' | 'status'>): Lead {
  const currentLeads = getLeadsFromStorage();
  const newLead: Lead = {
    ...lead,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    status: 'Novo'
  };
  
  localStorage.setItem(LEADS_KEY, JSON.stringify([...currentLeads, newLead]));
  
  // Custom event so hooks can listen
  window.dispatchEvent(new Event('leads_updated'));
  
  return newLead;
}

export function updateLeadStatus(id: string, status: Lead['status']): void {
  const currentLeads = getLeadsFromStorage();
  const updatedLeads = currentLeads.map(lead => 
    lead.id === id ? { ...lead, status } : lead
  );
  localStorage.setItem(LEADS_KEY, JSON.stringify(updatedLeads));
  window.dispatchEvent(new Event('leads_updated'));
}

export function exportLeadsToCSV(): void {
  const leads = getLeadsFromStorage();
  if (leads.length === 0) return;

  const headers = ['Data', 'Nome', 'Telefone', 'WhatsApp', 'Cidade', 'Modalidade', 'Curso de Interesse', 'Mensagem', 'Status'];
  
  const esc = (v: string) => `"${String(v ?? '').replace(/"/g, '""').replace(/\n/g, ' ')}"`;

  const rows = leads.map(lead => [
    new Date(lead.createdAt).toLocaleDateString('pt-BR'),
    esc(lead.nome),
    esc(lead.telefone),
    esc(lead.whatsapp),
    esc(lead.cidade),
    esc(lead.modalidade),
    esc(lead.cursoInteresse),
    esc(lead.mensagem),
    esc(lead.status),
  ]);
  
  const csvContent = [
    headers.join(','),
    ...rows.map(row => row.join(','))
  ].join('\n');
  
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `leads_unibf_${new Date().toISOString().split('T')[0]}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
