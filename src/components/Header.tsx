import React from 'react';

const Header = () => {
  return (
    <header id="home-header" className="bg-dark-gray text-white p-4 sticky top-0 z-1000 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <a href="#home" className="text-2xl md:text-3xl font-bold text-white hover:text-primary-blue transition-colors duration-300">
          CleanPro
        </a>
        <nav>
          <ul className="flex space-x-6 md:space-x-8">
            <li><a href="#home" className="text-white hover:text-primary-blue transition-colors duration-300 text-lg">Início</a></li>
            <li><a href="#services" className="text-white hover:text-primary-blue transition-colors duration-300 text-lg">Nossos Serviços</a></li>
            <li><a href="#testimonials" className="text-white hover:text-primary-blue transition-colors duration-300 text-lg">Depoimentos</a></li>
            <li><a href="#location" className="text-white hover:text-primary-blue transition-colors duration-300 text-lg">Localização</a></li>
            <li><a href="#contact" className="text-white hover:text-primary-blue transition-colors duration-300 text-lg">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;