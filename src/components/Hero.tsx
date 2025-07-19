import React from 'react';
import { SectionRefs } from '../pages/Index';

interface HeroProps {
  refs: SectionRefs;
}

const Hero: React.FC<HeroProps> = ({ refs }) => {
  const handleScrollTo = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    // 1. FUNDO ALTERADO: Removida a imagem e aplicado um gradiente com as cores da nossa paleta.
    <div className="bg-gradient-to-br from-text-primary to-blue-900 text-text-white text-center py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-text-white mb-6 leading-tight animate-fade-in">
          Seu Estofado Novo de Novo: Higienização Profissional em <span className="text-brand-blue-light">Osasco/SP e Região</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto animate-fade-in delay-200">
          Removemos manchas, ácaros e odores, devolvendo a saúde e o conforto para seu lar e seu carro. Qualidade e cuidado em cada detalhe com a <strong>TNG Clean Higienização</strong>.
        </p>
        <div className="space-y-4 md:space-y-0 md:space-x-4 animate-fade-in delay-400">
          <a 
            href="#contato" 
            onClick={(e) => { e.preventDefault(); handleScrollTo(refs.contatoRef); }}
            // 2. CORES ATUALIZADAS: Usando as novas cores semânticas do tailwind.config.ts
            className="bg-brand-blue hover:bg-brand-blue-hover text-text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 inline-block text-lg"
          >
            Solicitar Orçamento
          </a>
          <a 
            href="#servicos" 
            onClick={(e) => { e.preventDefault(); handleScrollTo(refs.servicosRef); }}
            // 2. CORES ATUALIZADAS: Usando as novas cores semânticas do tailwind.config.ts
            className="bg-brand-red hover:bg-brand-red-hover text-text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 inline-block text-lg"
          >
            Nossos Serviços
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;