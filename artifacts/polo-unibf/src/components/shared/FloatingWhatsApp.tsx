import { FaWhatsapp } from 'react-icons/fa';
import { openWhatsApp } from '@/lib/whatsapp';
import { Button } from '@/components/ui/button';

export function FloatingWhatsApp() {
  return (
    <Button
      onClick={() => openWhatsApp()}
      className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl z-40 flex items-center justify-center p-0 hover:scale-105 transition-transform"
      aria-label="Falar no WhatsApp"
    >
      <FaWhatsapp className="w-8 h-8" />
    </Button>
  );
}
