import React, { RefObject } from 'react';
import ServiceCard from './ServiceCard';

// Importe os ícones do Lucide que você deseja usar para cada serviço
import { Home, Car, Bed, Sofa, Component, Building2 } from 'lucide-react';

interface ServicesProps {
  sectionRef: RefObject<HTMLElement>;
}

const Services: React.FC<ServicesProps> = ({ sectionRef }) => {
  const services = [
    {
      icon: Sofa,
      title: "Limpeza e Higienização de Estofados",
      description: "Limpeza profissional profunda para sofás, cadeiras, pufes e todos os móveis estofados em Osasco/SP. Removemos sujeira, manchas e alérgenos para restaurar a beleza e o frescor originais."
    },
    {
      icon: Bed,
      title: "Limpeza Profunda e Higienização de Colchões",
      description: "Limpeza profunda e higienização especializada de colchões em Osasco/SP, eliminando ácaros, alérgenos e odores. Garanta um ambiente de sono verdadeiramente saudável e confortável para sua família."
    },
    {
      icon: Component, // Ou outro ícone Lucide que represente tapetes/carpetes
      title: "Lavagem e Limpeza Profunda de Tapetes e Carpetes",
      description: "Lavagem completa e limpeza profunda para tapetes e carpetes de todos os tipos em Osasco/SP. Utilizamos técnicas avançadas para remover eficazmente sujeira, manchas difíceis, odores e alérgenos, restaurando sua aparência original."
    },
    {
      icon: Car,
      title: "Higienização e Detalhamento Automotivo Interno",
      description: "Serviços completos de detalhamento e higienização profissional do interior do seu veículo em Osasco/SP, incluindo bancos, carpetes, teto e painel. Desfrute de uma experiência de condução verdadeiramente fresca, limpa e saudável."
    },
    {
      icon: Home,
      title: "Limpeza Residencial Especializada",
      description: "Serviços de limpeza residencial direcionados em Osasco/SP, com foco na limpeza profunda de áreas chave. Ajudamos a manter um ambiente de vida impecável e higiênico, complementando nossos serviços especializados em estofados."
    },
    {
      icon: Building2,
      title: "Limpeza Comercial e de Escritórios",
      description: "Serviços profissionais de limpeza e manutenção para escritórios e espaços comerciais em Osasco/SP e regiões próximas. Garanta um local de trabalho produtivo, higiênico e acolhedor para sua equipe e clientes."
    }
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 md:py-24 bg-light-gray text-center"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-gray mb-4 relative inline-block">
            Nossos Serviços Especializados de Limpeza e Higienização
            <span className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-20 h-1 bg-primary-blue rounded-full"></span>
          </h2>
          <p className="text-xl text-text-color max-w-3xl mx-auto mt-4">
            Para residências, empresas e veículos em Osasco/SP e região, oferecemos soluções profissionais de limpeza e higienização, personalizadas para atender às suas necessidades com excelência incomparável.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;