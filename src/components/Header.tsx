import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Importe Link e useLocation
import logo from '../assets/images/logo.png'; // Importação do logo
import { Menu, X } from 'lucide-react';
import { SectionRefs } from '../pages/Index'; // Importe SectionRefs
import { Button } from './ui/button'; // Importe Button (se usado no header)
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'; // Importe componentes do Sheet

interface HeaderProps {
  refs?: SectionRefs; // refs agora é opcional
}

const Header: React.FC<HeaderProps> = ({ refs }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation(); // Hook para obter a localização atual

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

  const handleScrollTo = (ref?: React.RefObject<HTMLElement>) => {
    // Só tenta rolar se a página atual for a homepage ('/') E o ref existir
    if (location.pathname === '/' && ref && ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    closeMobileMenu(); // Feche o menu mobile após a ação
  };

  // Links de navegação. O item "Links" foi removido.
  const navLinks = [
    { href: '/', sectionRef: refs?.inicioRef, label: 'Início', targetSectionId: 'inicio' },
    { href: '/', sectionRef: refs?.servicosRef, label: 'Serviços', targetSectionId: 'servicos' },
    { href: '/', sectionRef: refs?.depoimentosRef, label: 'Depoimentos', targetSectionId: 'depoimentos' },
    { href: '/', sectionRef: refs?.localizacaoRef, label: 'Localização', targetSectionId: 'localizacao' },
    { href: '/', sectionRef: refs?.contatoRef, label: 'Contato', targetSectionId: 'contato' },
    // { href: '/links', sectionRef: undefined, label: 'Links', targetSectionId: '' }, // <-- Linha removida
  ];

  return (
    <header className="bg-text-primary text-text-white p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Link do logo para a página inicial, com rolagem para o início */}
        <Link to="/" className="flex items-center" onClick={() => handleScrollTo(refs?.inicioRef)}>
          <img src={logo} alt="TNG Clean Higienização Logo" className="h-20 md:h-28 lg:h-32" />
        </Link>

        {/* Botão para abrir/fechar menu mobile */}
        <button
          className="md:hidden text-text-white text-3xl focus:outline-none z-[1001]"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Fechar Menu" : "Abrir Menu"}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Links de navegação para desktop */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <li key={link.label}> {/* Use label como key ou um ID único */}
                <Link
                  to={link.href + (link.targetSectionId && location.pathname === '/' ? `#${link.targetSectionId}` : '')}
                  className="text-text-white hover:text-brand-blue-light transition-colors duration-300 text-lg"
                  onClick={(e) => {
                    // Se o link é para uma seção na homepage E estamos na homepage
                    if (link.sectionRef && location.pathname === '/') {
                      e.preventDefault(); // Previne a navegação padrão para rolar
                      handleScrollTo(link.sectionRef);
                    } else if (link.href === location.pathname && link.targetSectionId) {
                      // Caso o usuário esteja na homepage e clique em um link de seção da própria homepage
                      e.preventDefault();
                      document.getElementById(link.targetSectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                    // Para links de outras páginas ou se não rolar, o 'to' do Link cuidará da navegação
                    closeMobileMenu(); // Feche o menu mobile se aplicável
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Botão de orçamento para desktop (se usado) */}
        {/* <Button className="hidden md:block">Orçamento</Button> */}

        {/* Menu responsivo para mobile */}
        {isMobileMenuOpen && (
          <nav className="md:hidden fixed inset-0 bg-text-primary/95 z-[1000] flex flex-col items-center justify-center p-8">
            <ul className="flex flex-col space-y-6 text-2xl text-center">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href + (link.targetSectionId && location.pathname === '/' ? `#${link.targetSectionId}` : '')}
                    className="text-text-white hover:text-brand-blue-light transition-colors duration-300"
                    onClick={(e) => {
                      if (link.sectionRef && location.pathname === '/') {
                        e.preventDefault();
                        handleScrollTo(link.sectionRef);
                      } else if (link.href === location.pathname && link.targetSectionId) {
                        e.preventDefault();
                        document.getElementById(link.targetSectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                      closeMobileMenu();
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Adicione um botão aqui se precisar dele na visualização móvel */}
            {/* <Button className="mt-6">Orçamento</Button> */}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;