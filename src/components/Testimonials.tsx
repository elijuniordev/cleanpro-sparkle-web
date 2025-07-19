import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  rating: number;
  avatar?: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Fiquei impressionada com a qualidade! Meu sofá, que eu já considerava perdido, parece que acabou de sair da loja. Recomendo a TNG Clean para todos em Osasco!",
    name: "Maria Silva",
    role: "Cliente Residencial - Osasco/SP",
    rating: 5,
  },
  {
    quote: "A higienização do meu carro ficou impecável. O cheiro de novo e a atenção aos detalhes me surpreenderam. Ótimo trabalho e profissionalismo.",
    name: "João Santos",
    role: "Cliente Automotivo - Carapicuíba/SP",
    rating: 5,
  },
  {
    quote: "Contratamos para a limpeza das cadeiras do nosso escritório e o resultado foi excelente. Equipe pontual, serviço rápido e muito eficiente. Viramos clientes!",
    name: "Ana Costa",
    role: "Gerente de Escritório - Barueri/SP",
    rating: 5,
  },
  {
    quote: "Meu colchão estava com manchas que achei que nunca sairiam. A TNG Clean conseguiu remover tudo. Serviço de primeira, durmo muito melhor agora!",
    name: "Pedro Almeida",
    role: "Cliente Residencial - Cotia/SP",
    rating: 5,
  }
];

const Testimonials: React.FC = () => {
  return (
    // COR ALTERADA: Fundo definido como 'bg-ui-background' (cinza claro).
    <div className="py-20 md:py-24 bg-ui-background text-center">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4 relative inline-block">
            Aprovado por quem mais importa
            <span className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-20 h-1 bg-brand-blue rounded-full"></span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mt-8">
            A satisfação de nossos clientes em <strong>Osasco/SP e região</strong> é a nossa maior recompensa e o nosso melhor cartão de visitas.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 p-4">
                <Card className="bg-ui-card h-full flex flex-col justify-between text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8 flex flex-col items-center">
                    <div className="flex text-yellow-400 mb-4">
                      {Array(testimonial.rating).fill(0).map((_, i) => <Star key={i} fill="currentColor" />)}
                    </div>
                    <p className="text-base text-text-secondary italic mb-6 leading-relaxed flex-grow">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex-shrink-0 flex flex-col items-center">
                      {testimonial.avatar ? (
                        <img src={testimonial.avatar} alt={testimonial.name} className="w-16 h-16 rounded-full mb-4 object-cover" />
                      ) : (
                        <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center text-text-white text-3xl font-bold mb-4">
                          {testimonial.name.charAt(0)}
                        </div>
                      )}
                      <h4 className="text-xl font-bold text-text-primary">{testimonial.name}</h4>
                      <p className="text-brand-blue text-sm">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;