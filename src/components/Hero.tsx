import React, { RefObject } from 'react';

interface HeroProps {
  sectionRef: RefObject<HTMLElement>;
}

const Hero: React.FC<HeroProps> = ({ sectionRef }) => {
  return (
    <section
      id="home"
      ref={sectionRef}
      className="bg-cover bg-center bg-no-repeat text-white text-center py-20 md:py-32 relative"
      style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/hero-background.jpg')" }}
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
          Especialistas em Limpeza de Estofados e Automotiva em <span className="text-primary-blue-light">Osasco/SP e Região</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto animate-fade-in delay-200">
          Oferecemos serviços de limpeza e higienização de alta qualidade para estofados, camas, tapetes, sofás e interiores automotivos em <strong className="font-semibold text-primary-blue-light">Osasco/SP e regiões vizinhas</strong>. Experimente a diferença **TNG Higienização** para um ambiente mais saudável!
        </p>
        <div className="space-y-4 md:space-y-0 md:space-x-4 animate-fade-in delay-400">
          <a href="#contact" className="bg-primary-blue hover:bg-hover-blue text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 inline-block">
            Solicitar Orçamento Gratuito
          </a>
          <a href="#services" className="bg-secondary-red hover:bg-hover-red text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 inline-block">
            Conheça Nossos Serviços
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;