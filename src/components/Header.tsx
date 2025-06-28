import React, { useState, useEffect } from 'react';
import logo from '../assets/images/logo.png';
import { Menu, X } from 'lucide-react';

const Header = () => {
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

  return (
    <header id="home-header" className="bg-dark-gray text-white p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo da TNG Higienização */}
        <a href="#home" className="flex items-center" onClick={closeMobileMenu}>
          {/* ALTERAÇÃO AQUI: AUMENTADO PARA h-16 (64px) e md:h-20 (80px) */}
          <img src={logo} alt="TNG Higienização Logo" className="h-20 md:h-28 lg:h-32" />
        </a>

        <button
          className="md:hidden text-white text-3xl focus:outline-none z-[1001]"
          onClick={toggleMobileMenu}
          aria-label="Abrir/Fechar Menu"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>

        <nav className="hidden md:block">
          <ul className="flex space-x-6 lg:space-x-8">
            <li><a href="#home" className="text-white hover:text-primary-blue transition-colors duration-300 text-lg">Início</a></li>
            <li><a href="#services" className="text-white hover:text-primary-blue transition-colors duration-300 text-lg">Nossos Serviços</a></li>
            <li><a href="#testimonials" className="text-white hover:text-primary-blue transition-colors duration-300 text-lg">Depoimentos</a></li>
            <li><a href="#location" className="text-white hover:text-primary-blue transition-colors duration-300 text-lg">Localização</a></li>
            <li><a href="#contact" className="text-white hover:text-primary-blue transition-colors duration-300 text-lg">Contato</a></li>
          </ul>
        </nav>
      </div>

      {isMobileMenuOpen && (
        <nav className="md:hidden fixed inset-0 bg-dark-gray bg-opacity-95 z-[1000] flex flex-col items-center justify-center p-8 transition-opacity duration-300 ease-in-out">
          <ul className="flex flex-col space-y-6 text-2xl pt-20">
            <li><a href="#home" className="text-white hover:text-primary-blue transition-colors duration-300" onClick={closeMobileMenu}>Início</a></li>
            <li><a href="#services" className="text-white hover:text-primary-blue transition-colors duration-300" onClick={closeMobileMenu}>Nossos Serviços</a></li>
            <li><a href="#testimonials" className="text-white hover:text-primary-blue transition-colors duration-300" onClick={closeMobileMenu}>Depoimentos</a></li>
            <li><a href="#location" className="text-white hover:text-primary-blue transition-colors duration-300" onClick={closeMobileMenu}>Localização</a></li>
            <li><a href="#contact" className="text-white hover:text-primary-blue transition-colors duration-300" onClick={closeMobileMenu}>Contato</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;