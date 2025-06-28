import React, { RefObject } from 'react';

interface TestimonialsProps {
  sectionRef: RefObject<HTMLElement>;
}

const Testimonials: React.FC<TestimonialsProps> = ({ sectionRef }) => {
  const testimonials = [
    {
      quote: "Fiquei impressionada com a qualidade da limpeza do meu sofá! Parecia novo de novo. Recomendo a CleanPro para todos em Osasco!",
      name: "Maria Silva",
      role: "Cliente Residencial - Osasco/SP"
    },
    {
      quote: "A higienização do meu carro ficou impecável. O cheiro de novo e a limpeza profunda me surpreenderam. Ótimo trabalho!",
      name: "João Santos",
      role: "Cliente Automotivo - Carapicuíba/SP"
    },
    {
      quote: "Contratamos a CleanPro para a limpeza dos estofados do nosso escritório e o resultado foi excelente. Profissionalismo e eficiência!",
      name: "Ana Costa",
      role: "Gerente de Escritório - Barueri/SP"
    },
    {
      quote: "Meu colchão estava com manchas antigas e a CleanPro conseguiu remover tudo. Agora durmo muito melhor! Serviço de primeira.",
      name: "Pedro Almeida",
      role: "Cliente Residencial - Cotia/SP"
    }
  ];

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-20 md:py-24 bg-light-gray text-center"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-gray mb-4 relative inline-block">
            O Que Nossos Clientes Dizem
            <span className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-20 h-1 bg-primary-blue rounded-full"></span>
          </h2>
          <p className="text-xl text-text-color max-w-3xl mx-auto mt-4">
            A satisfação dos nossos clientes é a nossa maior recompensa. Veja alguns depoimentos de quem já experimentou a excelência dos serviços da CleanPro em Osasco/SP e região.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
            >
              <p className="text-lg text-text-color italic mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center text-white text-3xl font-bold mb-4">
                {testimonial.name.charAt(0)}
              </div>
              <h4 className="text-xl font-bold text-dark-gray">{testimonial.name}</h4>
              <p className="text-primary-blue text-sm">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;