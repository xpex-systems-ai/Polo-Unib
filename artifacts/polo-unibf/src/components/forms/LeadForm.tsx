import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { openWhatsApp } from '@/lib/whatsapp';
import { recordPoloEvent } from '@/lib/conversion-events';
import { CheckCircle2 } from 'lucide-react';

const leadSchema = z.object({
  nome: z.string().min(2, 'Nome é obrigatório'),
  telefone: z.string().min(10, 'Telefone inválido'),
  whatsapp: z.string().min(10, 'WhatsApp inválido'),
  cidade: z.string().min(2, 'Cidade é obrigatória'),
  modalidade: z.string().min(1, 'Selecione uma modalidade'),
  cursoInteresse: z.string().min(2, 'Curso é obrigatório'),
  mensagem: z.string().optional(),
});

type LeadFormValues = z.infer<typeof leadSchema>;

export function LeadForm() {
  const [consent, setConsent] = useState(false);
  const [handoff, setHandoff] = useState(false);
  const [error, setError] = useState('');

  const form = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      nome: '',
      telefone: '',
      whatsapp: '',
      cidade: '',
      modalidade: '',
      cursoInteresse: '',
      mensagem: '',
    }
  });

  const onSubmit = (data: LeadFormValues) => {
    recordPoloEvent('lead_submit_attempt', 'contact_form');
    if (!consent) {
      setError('Confirme que deseja encaminhar seus dados ao atendimento pelo WhatsApp.');
      return;
    }
    setError('');
    const message = [
      'Olá! Quero atendimento do Polo UniBF Cristalina-GO.',
      'Nome: ' + data.nome,
      'Telefone: ' + data.telefone,
      'WhatsApp: ' + data.whatsapp,
      'Cidade: ' + data.cidade,
      'Modalidade: ' + data.modalidade,
      'Curso: ' + data.cursoInteresse,
      'Mensagem: ' + (data.mensagem || 'Sem mensagem'),
    ].join('\\n');
    openWhatsApp(message, 'contact_form');
    recordPoloEvent('lead_handoff_whatsapp', 'contact_form');
    setHandoff(true);
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-border">
      <h3 className="text-2xl font-bold text-navy mb-6">Fale com o Polo</h3>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        
        <div>
          <label className="block text-sm font-medium mb-1">Nome completo</label>
          <input 
            {...form.register('nome')} 
            className="w-full px-4 py-2.5 rounded-lg border border-input focus:ring-2 focus:ring-primary focus:border-primary outline-none"
            placeholder="Seu nome"
          />
          {form.formState.errors.nome && <span className="text-destructive text-xs mt-1 block">{form.formState.errors.nome.message}</span>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Telefone</label>
            <input 
              {...form.register('telefone')} 
              className="w-full px-4 py-2.5 rounded-lg border border-input focus:ring-2 focus:ring-primary focus:border-primary outline-none"
              placeholder="(61) 90000-0000"
            />
            {form.formState.errors.telefone && <span className="text-destructive text-xs mt-1 block">{form.formState.errors.telefone.message}</span>}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">WhatsApp</label>
            <input 
              {...form.register('whatsapp')} 
              className="w-full px-4 py-2.5 rounded-lg border border-input focus:ring-2 focus:ring-primary focus:border-primary outline-none"
              placeholder="(61) 90000-0000"
            />
            {form.formState.errors.whatsapp && <span className="text-destructive text-xs mt-1 block">{form.formState.errors.whatsapp.message}</span>}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Cidade</label>
          <input 
            {...form.register('cidade')} 
            className="w-full px-4 py-2.5 rounded-lg border border-input focus:ring-2 focus:ring-primary focus:border-primary outline-none"
            placeholder="Ex: Cristalina-GO"
          />
          {form.formState.errors.cidade && <span className="text-destructive text-xs mt-1 block">{form.formState.errors.cidade.message}</span>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Modalidade de Interesse</label>
          <select 
            {...form.register('modalidade')}
            className="w-full px-4 py-2.5 rounded-lg border border-input focus:ring-2 focus:ring-primary focus:border-primary outline-none bg-white"
          >
            <option value="">Selecione...</option>
            <option value="Graduação">Graduação</option>
            <option value="Pós-graduação">Pós-graduação</option>
            <option value="Tecnólogo">Tecnólogo</option>
            <option value="Extensão">Extensão</option>
            <option value="Ainda não sei">Ainda não sei</option>
          </select>
          {form.formState.errors.modalidade && <span className="text-destructive text-xs mt-1 block">{form.formState.errors.modalidade.message}</span>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Curso de Interesse</label>
          <input 
            {...form.register('cursoInteresse')} 
            className="w-full px-4 py-2.5 rounded-lg border border-input focus:ring-2 focus:ring-primary focus:border-primary outline-none"
            placeholder="Ex: Administração"
          />
          {form.formState.errors.cursoInteresse && <span className="text-destructive text-xs mt-1 block">{form.formState.errors.cursoInteresse.message}</span>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Mensagem (opcional)</label>
          <textarea 
            {...form.register('mensagem')} 
            rows={3}
            className="w-full px-4 py-2.5 rounded-lg border border-input focus:ring-2 focus:ring-primary focus:border-primary outline-none resize-none"
            placeholder="Como podemos ajudar?"
          />
        </div>

        <label className="flex items-start gap-2 text-sm text-muted-foreground">
          <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-1" />
          <span>Autorizo o encaminhamento dos dados informados ao WhatsApp oficial do Polo para atendimento sobre cursos. A mensagem será aberta no WhatsApp para minha confirmação; este formulário não registra o cadastro em banco de dados.</span>
        </label>
        {error && <p role="alert" className="text-destructive text-sm">{error}</p>}
        {handoff && <p role="status" className="text-sm text-muted-foreground">WhatsApp aberto para você revisar e enviar sua mensagem. O contato só será recebido após o envio no aplicativo.</p>}
        <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white" size="lg">
          Continuar pelo WhatsApp
        </Button>
      </form>
    </div>
  );
}
