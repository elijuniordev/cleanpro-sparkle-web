// src/components/Header.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Importe useLocation
import { Button } from './ui/button'; // Exemplo de importação de botão
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'; // Se você usa um menu responsivo
import { Menu } from 'lucide-react';

// Importe SectionRefs de onde ele é definido (provavelmente Index.tsx)
import { SectionRefs } from '../pages/Index';

interface HeaderProps {
  refs?: SectionRefs; // refs agora é opcional
}

const Header: React.FC<HeaderProps> = ({ refs }) => {
  const location = useLocation(); // Hook para obter a localização atual

  // Função para rolar até a seção, só se os refs existirem E estiver na homepage
  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    if (ref && ref.current && location.pathname === '/') { // Só rola se estiver na homepage
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white shadow-md p-4 sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-800">TNG Clean</Link>

        {/* Links de navegação para desktop */}
        <div className="hidden md:flex space-x-6">
          {/* Altere os links para usar Link do react-router-dom
              e chame scrollToSection condicionalmente */}
          <Link to="/" onClick={() => scrollToSection(refs?.inicioRef)} className="text-gray-600 hover:text-blue-600">Início</Link>
          <Link to="/" onClick={() => scrollToSection(refs?.servicosRef)} className="text-gray-600 hover:text-blue-600">Serviços</Link>
          <Link to="/" onClick={() => scrollToSection(refs?.depoimentosRef)} className="text-gray-600 hover:text-blue-600">Depoimentos</Link>
          <Link to="/" onClick={() => scrollToSection(refs?.localizacaoRef)} className="text-gray-600 hover:text-blue-600">Localização</Link>
          <Link to="/" onClick={() => scrollToSection(refs?.contatoRef)} className="text-gray-600 hover:text-blue-600">Contato</Link>
          <Link to="/links" className="text-gray-600 hover:text-blue-600">Links</Link> {/* Exemplo de link para outra página */}
        </div>

        {/* Botão de contato (exemplo) */}
        <Button className="hidden md:block">Orçamento</Button>

        {/* Menu responsivo para mobile */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 py-6">
                <Link to="/" onClick={() => scrollToSection(refs?.inicioRef)} className="text-gray-600 hover:text-blue-600">Início</Link>
                <Link to="/" onClick={() => scrollToSection(refs?.servicosRef)} className="text-gray-600 hover:text-blue-600">Serviços</Link>
                <Link to="/" onClick={() => scrollToSection(refs?.depoimentosRef)} className="text-gray-600 hover:text-blue-600">Depoimentos</Link>
                <Link to="/" onClick={() => scrollToSection(refs?.localizacaoRef)} className="text-gray-600 hover:text-blue-600">Localização</Link>
                <Link to="/" onClick={() => scrollToSection(refs?.contatoRef)} className="text-gray-600 hover:text-blue-600">Contato</Link>
                <Link to="/links" className="text-gray-600 hover:text-blue-600">Links</Link>
                <Button>Orçamento</Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Header;