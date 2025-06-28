import React, { RefObject } from 'react'; // Importe RefObject

// Defina a interface de props para o componente Testimonials
interface TestimonialsProps {
  sectionRef: RefObject<HTMLElement>;
}

const Testimonials: React.FC<TestimonialsProps> = ({ sectionRef }) => { // Aceite a prop sectionRef
  const testimonials = [
    {
      // Adicione a localidade do cliente para SEO local, se possível e real
      quote: "A CleanPro transformou completamente nosso escritório em Osasco! A atenção aos detalhes e o profissionalismo são inigualáveis. Nossos carpetes parecem novos e todo o ambiente se sente fresco e limpo.",
      name: "Maria Santos",
      role: "Gerente de Escritório, Osasco/SP"
    },
    {
      quote: "Fiquei impressionado com o serviço de limpeza de estofados deles. Meu sofá antigo parecia sem esperança, mas a CleanPro o trouxe de volta à vida. Trabalho excelente e preços muito razoáveis!",
      name: "João Silva",
      role: "Morador, Barueri/SP" // Exemplo de cidade vizinha
    },
    {
      quote: "O serviço de higienização interna do meu carro é fantástico! Os bancos e carpetes do meu veículo estavam em péssimas condições, mas agora parecem e cheiram como novos. Altamente recomendado em Osasco!",
      name: "Ana Costa",
      role: "Empresária, Carapicuíba/SP" // Exemplo de cidade vizinha
    },
    {
      quote: "A limpeza de colchão da CleanPro ajudou minha família a dormir melhor em Osasco. Eles removeram todos os alérgenos e odores profissionalmente. Verdadeiramente uma mudança para o conforto da nossa casa!",
      name: "Carlos Rodrigues",
      role: "Pai de Dois, Osasco/SP"
    }
  ];

  return (
    <section
      id="testimonials"
      ref={sectionRef} // ATRIBUIÇÃO DA REF AQUI!
      className="py-20 md:py-24 bg-light-gray text-center" // Ajustado para usar bg-light-gray
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-gray mb-4 relative inline-block"> {/* Ajustado para usar text-dark-gray */}
            O Que Nossos Clientes Dizem em Osasco/SP
            {/* Linha decorativa abaixo do título */}
            <span className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-20 h-1 bg-primary-blue rounded-full"></span> {/* Ajustado para usar bg-primary-blue */}
          </h2>
          <p className="text-xl text-text-color max-w-3xl mx-auto mt-4"> {/* Ajustado para usar text-text-color */}
            Não confie apenas em nossas palavras. Veja o que nossos clientes satisfeitos em Osasco e região têm a dizer sobre nossos serviços profissionais de limpeza e higienização.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="mb-6">
                <div className="flex text-primary-blue mb-4"> {/* Ajustado para usar text-primary-blue */}
                  {/* Ícones de estrela */}
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <blockquote className="text-text-color text-lg leading-relaxed italic"> {/* Ajustado para usar text-text-color */}
                  "{testimonial.quote}"
                </blockquote>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-blue to-secondary-red rounded-full flex items-center justify-center text-white font-bold text-lg mr-4"> {/* Ajustado para usar primary-blue e secondary-red */}
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-dark-gray">{testimonial.name}</h4> {/* Ajustado para usar text-dark-gray */}
                  <p className="text-text-color text-sm">{testimonial.role}</p> {/* Ajustado para usar text-text-color */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;