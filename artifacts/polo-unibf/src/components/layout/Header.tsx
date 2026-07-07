import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { openWhatsApp } from '@/lib/whatsapp';

const LOGO = '/assets/logos/unibf-cristalina-go-logo.png';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { href: '/', label: 'Início' },
    { href: '/cursos', label: 'Cursos' },
    { href: '/sobre', label: 'Sobre o Polo' },
    { href: '/faq', label: 'Dúvidas' },
    { href: '/unibf-tv', label: 'UniBF TV' },
    { href: '/contato', label: 'Contato' },
  ];

  const LogoContent = ({ maxWidth }: { maxWidth: string }) =>
    !logoError ? (
      <img
        src={LOGO}
        alt="UniBF Cristalina-GO"
        style={{ maxWidth, height: 'auto', maxHeight: '52px' }}
        className="object-contain rounded-md"
        onError={() => setLogoError(true)}
      />
    ) : (
      <div className="flex flex-col">
        <span className="text-xl font-bold tracking-tight text-navy">UniBF</span>
        <span className="text-xs font-semibold tracking-wider text-primary uppercase">Cristalina-GO</span>
      </div>
    );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <LogoContent maxWidth="175px" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <Button onClick={() => openWhatsApp()} className="bg-primary hover:bg-primary/90 rounded-full">
            Fale conosco
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden p-2 text-foreground" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-20 w-full bg-white border-b shadow-lg flex flex-col py-4 px-4 space-y-4 z-50">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-medium text-foreground py-2 border-b border-muted w-full"
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
          <Button
            onClick={() => { openWhatsApp(); closeMenu(); }}
            className="w-full mt-4 bg-primary text-white"
            size="lg"
          >
            Fale conosco pelo WhatsApp
          </Button>
        </div>
      )}
    </header>
  );
}
