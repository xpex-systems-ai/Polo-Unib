import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter } from 'wouter';

// Pages
import Home from '@/pages/Home';
import Cursos from '@/pages/Cursos';
import Graduacao from '@/pages/Graduacao';
import PosGraduacao from '@/pages/PosGraduacao';
import Tecnologo from '@/pages/Tecnologo';
import Extensao from '@/pages/Extensao';
import Sobre from '@/pages/Sobre';
import Contato from '@/pages/Contato';
import Links from '@/pages/Links';
import Admin from '@/pages/Admin';
import Faq from '@/pages/Faq';
import UnibfTv from '@/pages/UnibfTv';

// Shared Components
import { FloatingWhatsApp } from '@/components/shared/FloatingWhatsApp';
import { AgentChatWidget } from '@/components/shared/AgentChatWidget';

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/cursos" component={Cursos} />
      <Route path="/graduacao" component={Graduacao} />
      <Route path="/pos-graduacao" component={PosGraduacao} />
      <Route path="/tecnologo" component={Tecnologo} />
      <Route path="/extensao" component={Extensao} />
      <Route path="/sobre" component={Sobre} />
      <Route path="/contato" component={Contato} />
      <Route path="/links" component={Links} />
      <Route path="/faq" component={Faq} />
      <Route path="/unibf-tv" component={UnibfTv} />
      <Route path="/admin" component={Admin} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL?.replace(/\/$/, '') || ''}>
          <div className="relative flex min-h-screen flex-col">
            <Router />
            <FloatingWhatsApp />
            <AgentChatWidget />
          </div>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
