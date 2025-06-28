// src/components/Services.tsx
import React, { RefObject } from 'react'; // Importe RefObject
import ServiceCard from './ServiceCard'; // Importe o componente ServiceCard

// Importe os ícones do Lucide que você deseja usar para cada serviço
// Verifique a lista completa em https://lucide.dev/ para escolher os mais adequados
import { Home, Car, Users, Bed, Sofa, Component, Building2 } from 'lucide-react'; 
// Sugestões de ícones mais específicos:
// Sofa para estofados
// Bed para colchões
// Carpet para tapetes (se não existir, Home ou LayoutGrid podem ser alternativas)
// Car para automotivo
// Home para residencial
// Building2 ou Factory para comercial

// Defina a interface de props para o componente Services
interface ServicesProps {
  sectionRef: RefObject<HTMLElement>; // A prop que receberá a referência da seção
}

// O componente agora é um React.FC que aceita as props definidas
const Services: React.FC<ServicesProps> = ({ sectionRef }) => {
  const services = [
    {
      icon: Sofa, // Usando o ícone Sofa de Lucide
      title: "Limpeza e Higienização de Estofados",
      description: "Limpeza profissional profunda para sofás, cadeiras, pufes e todos os móveis estofados em Osasco/SP. Removemos sujeira, manchas e alérgenos para restaurar a beleza e o frescor originais."
    },
    {
      icon: Bed, // Usando o ícone Bed de Lucide
      title: "Limpeza Profunda e Higienização de Colchões",
      description: "Limpeza profunda e higienização especializada de colchões em Osasco/SP, eliminando ácaros, alérgenos e odores. Garanta um ambiente de sono verdadeiramente saudável e confortável para sua família."
    },
    {
      icon: Component, // Usando o ícone Carpet de Lucide (assumindo que existe)
      // Se 'Carpet' não for encontrado ou não for ideal, considere 'LayoutGrid' ou 'Home' como alternativas visuais.
      title: "Lavagem e Limpeza Profunda de Tapetes e Carpetes",
      description: "Lavagem completa e limpeza profunda para tapetes e carpetes de todos os tipos em Osasco/SP. Utilizamos técnicas avançadas para remover eficazmente sujeira, manchas difíceis, odores e alérgenos, restaurando sua aparência original."
    },
    {
      icon: Car, // Usando o ícone Car de Lucide
      title: "Higienização e Detalhamento Automotivo Interno",
      description: "Serviços completos de detalhamento e higienização profissional do interior do seu veículo em Osasco/SP, incluindo bancos, carpetes, teto e painel. Desfrute de uma experiência de condução verdadeiramente fresca, limpa e saudável."
    },
    {
      icon: Home, // Usando o ícone Home de Lucide
      title: "Limpeza Residencial Especializada",
      description: "Serviços de limpeza residencial direcionados em Osasco/SP, com foco na limpeza profunda de áreas chave. Ajudamos a manter um ambiente de vida impecável e higiênico, complementando nossos serviços especializados em estofados."
    },
    {
      icon: Building2, // Usando o ícone Building2 de Lucide para comercial
      title: "Limpeza Comercial e de Escritórios",
      description: "Serviços profissionais de limpeza e manutenção para escritórios e espaços comerciais em Osasco/SP e regiões próximas. Garanta um local de trabalho produtivo, higiênico e acolhedor para sua equipe e clientes."
    }
  ];

  return (
    <section
      id="services"
      ref={sectionRef} // ATRIBUIÇÃO DA REF: conecta este elemento SECTION ao Intersection Observer no Index.tsx
      className="py-20 md:py-24 bg-light-gray text-center" // Ajustado para usar bg-light-gray (da sua paleta Tailwind)
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-gray mb-4 relative inline-block">
            Nossos Serviços Especializados de Limpeza e Higienização
            {/* Linha decorativa abaixo do título */}
            <span className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-20 h-1 bg-primary-blue rounded-full"></span>
          </h2>
          <p className="text-xl text-text-color max-w-3xl mx-auto mt-4"> {/* Ajustado para text-text-color */}
            Para residências, empresas e veículos em Osasco/SP e região, oferecemos soluções profissionais de limpeza e higienização, personalizadas para atender às suas necessidades com excelência incomparável.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-blue to-blue-600 rounded-lg mb-6 group-hover:from-blue-600 group-hover:to-primary-blue transition-all duration-300">
                {/* Aqui renderizamos o ícone diretamente do lucide-react */}
                <service.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-dark-gray mb-4 group-hover:text-primary-blue transition-colors">
                {service.title}
              </h3>

              <p className="text-text-color leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;