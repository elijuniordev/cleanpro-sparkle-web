// src/components/Header.tsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // <-- Adicione useNavigate
import logo from '../assets/images/logo.png';
import { Menu, X } from 'lucide-react';
import { SectionRefs } from '../pages/Index';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

interface HeaderProps {
  refs?: SectionRefs;
}

const Header: React.FC<HeaderProps> = ({ refs }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate(); // <-- Obtenha a função de navegação

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

  // Esta função agora lida com a rolagem E a atualização da URL
  const handleScrollTo = (ref?: React.RefObject<HTMLElement>, targetSectionId?: string) => { // <-- targetSectionId adicionado
    if (location.pathname === '/' && ref && ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      // Atualizar a URL na barra de endereço após a rolagem suave
      if (targetSectionId) {
        navigate(`#${targetSectionId}`, { replace: true }); // Atualiza apenas o hash sem adicionar ao histórico
      }
    }
    closeMobileMenu();
  };

  const navLinks = [
    { href: '/', sectionRef: refs?.inicioRef, label: 'Início', targetSectionId: 'inicio' },
    { href: '/', sectionRef: refs?.servicosRef, label: 'Serviços', targetSectionId: 'servicos' },
    { href: '/', sectionRef: refs?.depoimentosRef, label: 'Depoimentos', targetSectionId: 'depoimentos' },
    { href: '/', sectionRef: refs?.localizacaoRef, label: 'Localização', targetSectionId: 'localizacao' },
    { href: '/', sectionRef: refs?.contatoRef, label: 'Contato', targetSectionId: 'contato' },
  ];

  return (
    <header className="bg-text-primary text-text-white p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Link do logo para a página inicial, com rolagem e atualização da URL */}
        <Link
          to="/"
          className="flex items-center"
          onClick={() => handleScrollTo(refs?.inicioRef, 'inicio')} // <-- Passa targetSectionId
        >
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
              <li key={link.label}>
                <Link
                  to={link.href + (link.targetSectionId ? `#${link.targetSectionId}` : '')}
                  className="text-text-white hover:text-brand-blue-light transition-colors duration-300 text-lg"
                  onClick={(e) => {
                    if (location.pathname === '/' && link.targetSectionId) {
                      e.preventDefault(); // Previne a navegação padrão (recarga)
                      handleScrollTo(link.sectionRef, link.targetSectionId); // <-- Passa targetSectionId
                    }
                    closeMobileMenu();
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
                    to={link.href + (link.targetSectionId ? `#${link.targetSectionId}` : '')}
                    className="text-text-white hover:text-brand-blue-light transition-colors duration-300"
                    onClick={(e) => {
                      if (location.pathname === '/' && link.targetSectionId) {
                        e.preventDefault();
                        handleScrollTo(link.sectionRef, link.targetSectionId); // <-- Passa targetSectionId
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