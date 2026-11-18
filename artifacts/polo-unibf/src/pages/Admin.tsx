/** Acesso administrativo desabilitado até implantação de autenticação server-side.
 * Não incluir senhas VITE_* nem exibir leads armazenados no navegador. */
export default function Admin() {
  return (
    <main className="min-h-screen bg-muted flex items-center justify-center p-6">
      <section className="max-w-lg rounded-2xl bg-white p-8 shadow-sm border border-border text-center">
        <h1 className="text-2xl font-bold text-navy mb-4">Painel temporariamente indisponível</h1>
        <p className="text-muted-foreground">
          O acesso administrativo está em revisão de segurança e privacidade.
          Para atendimento, utilize os canais oficiais do Polo UniBF Cristalina-GO.
        </p>
      </section>
    </main>
  );
}
