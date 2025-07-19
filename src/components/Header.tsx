import React, { useState, useEffect } from 'react';
// Garantindo que estamos importando o arquivo de logo correto do seu projeto.
import logo from '../assets/images/logo.png';
import { Menu, X } from 'lucide-react';
import { SectionRefs } from '../pages/Index';

interface HeaderProps {
  refs: SectionRefs;
}

const Header: React.FC<HeaderProps> = ({ refs }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleScrollTo = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    closeMobileMenu();
  };
  
  const navLinks = [
    { href: '#inicio', ref: refs.inicioRef, label: 'Início' },
    { href: '#servicos', ref: refs.servicosRef, label: 'Serviços' },
    { href: '#depoimentos', ref: refs.depoimentosRef, label: 'Depoimentos' },
    { href: '#localizacao', ref: refs.localizacaoRef, label: 'Localização' },
    { href: '#contato', ref: refs.contatoRef, label: 'Contato' },
  ];

  return (
    // APLICAÇÃO DA PALETA: Usando as novas cores semânticas.
    <header className="bg-text-primary text-text-white p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <a href="#inicio" className="flex items-center" onClick={(e) => { e.preventDefault(); handleScrollTo(refs.inicioRef); }}>
          {/* Ajustado o tamanho do logo para o que você tinha originalmente, que era maior. */}
          <img src={logo} alt="TNG Clean Higienização Logo" className="h-20 md:h-28 lg:h-32" />
        </a>

        <button
          className="md:hidden text-text-white text-3xl focus:outline-none z-[1001]"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Fechar Menu" : "Abrir Menu"}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>

        <nav className="hidden md:block">
          <ul className="flex space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href} 
                  // APLICAÇÃO DA PALETA: Usando as novas cores semânticas para texto e hover.
                  className="text-text-white hover:text-brand-blue-light transition-colors duration-300 text-lg"
                  onClick={(e) => { e.preventDefault(); handleScrollTo(link.ref); }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {isMobileMenuOpen && (
        // APLICAÇÃO DA PALETA: Usando bg-text-primary com 95% de opacidade.
        <nav className="md:hidden fixed inset-0 bg-text-primary/95 z-[1000] flex flex-col items-center justify-center p-8">
          <ul className="flex flex-col space-y-6 text-2xl text-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href} 
                  className="text-text-white hover:text-brand-blue-light transition-colors duration-300"
                  onClick={(e) => { e.preventDefault(); handleScrollTo(link.ref); }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;