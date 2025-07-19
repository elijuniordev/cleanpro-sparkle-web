import React from 'react';
import ServiceCard from './ServiceCard';
import { Home, Car, Bed, Sofa, Component, Building2 } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    { icon: Sofa, title: "Higienização de Estofados", description: "Sua sala de estar renovada! Removemos manchas, sujeira profunda e alérgenos de sofás, cadeiras e poltronas, restaurando a cor e o conforto originais dos seus móveis." },
    { icon: Bed, title: "Higienização de Colchões", description: "Durma em um ambiente mais saudável. Nossa higienização profunda elimina ácaros, bactérias e odores do seu colchão, garantindo noites de sono mais tranquilas e seguras para sua família." },
    { icon: Component, title: "Lavagem de Tapetes e Carpetes", description: "Seus tapetes e carpetes livres de sujeira e com aparência de novos. Utilizamos técnicas avançadas que removem manchas difíceis e revitalizam as fibras sem danificar o material." },
    { icon: Car, title: "Higienização Automotiva Interna", description: "Valorize seu carro com um interior impecável. Realizamos uma limpeza detalhada em bancos, carpetes, teto e painel, proporcionando uma experiência de condução mais fresca e agradável." },
    { icon: Home, title: "Limpeza Residencial Especializada", description: "Foco nos detalhes que fazem a diferença. Oferecemos limpeza profunda e especializada para áreas e itens específicos da sua casa, complementando a higienização dos estofados." },
    { icon: Building2, title: "Limpeza Comercial e de Escritórios", description: "Um ambiente de trabalho limpo e saudável para sua equipe e clientes. Atendemos escritórios e espaços comerciais em Osasco/SP e região com agilidade e profissionalismo." }
  ];

  return (
    // COR ALTERADA: Fundo definido como 'bg-ui-card' (branco).
    <div className="py-20 md:py-24 bg-ui-card text-center">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4 relative inline-block">
            Soluções Completas em Higienização
            <span className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-20 h-1 bg-brand-blue rounded-full"></span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mt-8">
            Cuidamos de cada detalhe para transformar seu ambiente. Conheça nossas soluções para residências, empresas e veículos em <strong>Osasco/SP e região</strong>.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;