
import React from 'react';
import { Home, Car, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Limpeza e Higienização de Estofados",
      description: "Limpeza profissional profunda para sofás, cadeiras, pufes e todos os móveis estofados em Osasco/SP. Removemos sujeira, manchas e alérgenos para restaurar a beleza e o frescor originais."
    },
    {
      icon: Home,
      title: "Limpeza Profunda e Higienização de Colchões",
      description: "Limpeza profunda e higienização especializada de colchões em Osasco/SP, eliminando ácaros, alérgenos e odores. Garanta um ambiente de sono verdadeiramente saudável e confortável para sua família."
    },
    {
      icon: Home,
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
      icon: Users,
      title: "Limpeza Comercial e de Escritórios",
      description: "Serviços profissionais de limpeza e manutenção para escritórios e espaços comerciais em Osasco/SP e regiões próximas. Garanta um local de trabalho produtivo, higiênico e acolhedor para sua equipe e clientes."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Nossos Serviços Especializados de Limpeza e Higienização
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Para residências, empresas e veículos em Osasco/SP e região, oferecemos soluções profissionais de limpeza e higienização, personalizadas para atender às suas necessidades com excelência incomparável.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg mb-6 group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
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
