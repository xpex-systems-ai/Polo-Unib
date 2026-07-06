import { useState, useEffect } from 'react';
import { Lead } from '@/types/index';
import { getLeadsFromStorage, updateLeadStatus, exportLeadsToCSV } from '@/lib/leads';
import { Button } from '@/components/ui/button';
import { Download, Users, CheckCircle, Clock } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export function AdminLeadTable({ leads, onStatusChange }: { leads: Lead[], onStatusChange: (id: string, status: Lead['status']) => void }) {
  return (
    <div className="bg-white rounded-xl border border-border shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-muted/50 text-muted-foreground uppercase text-xs">
            <tr>
              <th className="px-6 py-4 font-medium">Data</th>
              <th className="px-6 py-4 font-medium">Nome / Contato</th>
              <th className="px-6 py-4 font-medium">Interesse</th>
              <th className="px-6 py-4 font-medium">Mensagem</th>
              <th className="px-6 py-4 font-medium text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {leads.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-muted-foreground">
                  Nenhum lead encontrado com os filtros atuais.
                </td>
              </tr>
            ) : (
              leads.map((lead) => (
                <tr key={lead.id} className="hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-muted-foreground">
                    {new Date(lead.createdAt).toLocaleDateString('pt-BR')}
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-foreground">{lead.nome}</div>
                    <div className="text-muted-foreground mt-1 text-xs">
                      {lead.telefone}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-muted mb-1">
                      {lead.modalidade}
                    </span>
                    <div className="text-foreground">{lead.cursoInteresse}</div>
                  </td>
                  <td className="px-6 py-4 max-w-[200px] truncate text-muted-foreground" title={lead.mensagem}>
                    {lead.mensagem}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Select 
                      defaultValue={lead.status} 
                      onValueChange={(val) => onStatusChange(lead.id, val as Lead['status'])}
                    >
                      <SelectTrigger className="w-[160px] h-8 text-xs ml-auto">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Novo">Novo</SelectItem>
                        <SelectItem value="Em contato">Em contato</SelectItem>
                        <SelectItem value="Aguardando resposta">Aguardando resposta</SelectItem>
                        <SelectItem value="Matriculado">Matriculado</SelectItem>
                        <SelectItem value="Perdido">Perdido</SelectItem>
                      </SelectContent>
                    </Select>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [leads, setLeads] = useState<Lead[]>([]);
  const [filter, setFilter] = useState<string>('Todos');

  const CORRECT_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD as string | undefined;
  const isFallback = !CORRECT_PASSWORD;

  useEffect(() => {
    if (isAuthenticated) {
      const loadLeads = () => setLeads(getLeadsFromStorage().sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()));
      loadLeads();
      
      const handleStorageUpdate = () => loadLeads();
      window.addEventListener('leads_updated', handleStorageUpdate);
      return () => window.removeEventListener('leads_updated', handleStorageUpdate);
    }
    return undefined;
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!CORRECT_PASSWORD) return;
    if (password === CORRECT_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert('Senha incorreta');
    }
  };

  const handleStatusChange = (id: string, status: Lead['status']) => {
    updateLeadStatus(id, status);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-muted flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-border w-full max-w-sm">
          <h1 className="text-2xl font-bold text-navy mb-6 text-center">Acesso Restrito</h1>
          {isFallback && (
            <div className="bg-red-50 text-red-800 p-3 rounded-lg text-xs mb-6 border border-red-200">
              Acesso desativado: a variável de ambiente <strong>VITE_ADMIN_PASSWORD</strong> não foi configurada. Defina-a nas secrets do projeto para habilitar o painel.
            </div>
          )}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Senha administrativa"
                className="w-full px-4 py-2.5 rounded-lg border border-input focus:ring-2 focus:ring-primary focus:border-primary outline-none"
              />
            </div>
            <Button type="submit" disabled={isFallback} className="w-full bg-navy hover:bg-navy/90 text-white disabled:opacity-50 disabled:cursor-not-allowed">
              Entrar
            </Button>
          </form>
        </div>
      </div>
    );
  }

  const filteredLeads = filter === 'Todos' ? leads : leads.filter(l => l.status === filter);
  
  const stats = {
    total: leads.length,
    novos: leads.filter(l => l.status === 'Novo').length,
    matriculados: leads.filter(l => l.status === 'Matriculado').length
  };

  return (
    <div className="min-h-screen bg-muted/30 flex flex-col">
      <header className="bg-navy text-white px-6 py-4 flex items-center justify-between shadow-md">
        <div className="font-bold text-lg">Painel Admin - UniBF</div>
        <Button variant="outline" className="text-white border-white/20 hover:bg-white/10" onClick={() => setIsAuthenticated(false)}>Sair</Button>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        
        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl border border-border shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground font-medium">Total de Leads</p>
              <p className="text-3xl font-bold">{stats.total}</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-border shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground font-medium">Novos (Aguardando)</p>
              <p className="text-3xl font-bold">{stats.novos}</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-border shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground font-medium">Matriculados</p>
              <p className="text-3xl font-bold">{stats.matriculados}</p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-6">
          <div className="flex gap-2 w-full sm:w-auto">
            <select 
              value={filter} 
              onChange={(e) => setFilter(e.target.value)}
              className="px-4 py-2 rounded-lg border border-input bg-white focus:outline-none focus:ring-2 focus:ring-primary w-full sm:w-auto"
            >
              <option value="Todos">Todos os status</option>
              <option value="Novo">Novo</option>
              <option value="Em contato">Em contato</option>
              <option value="Aguardando resposta">Aguardando resposta</option>
              <option value="Matriculado">Matriculado</option>
              <option value="Perdido">Perdido</option>
            </select>
          </div>
          
          <Button onClick={exportLeadsToCSV} variant="outline" className="w-full sm:w-auto bg-white">
            <Download className="w-4 h-4 mr-2" />
            Exportar CSV
          </Button>
        </div>

        {/* Table */}
        <AdminLeadTable leads={filteredLeads} onStatusChange={handleStatusChange} />

      </main>
    </div>
  );
}
