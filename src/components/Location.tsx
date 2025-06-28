import React, { RefObject } from 'react';
import { MapPin, Clock, Globe } from 'lucide-react';

interface LocationProps {
  sectionRef: RefObject<HTMLElement>;
}

const Location: React.FC<LocationProps> = ({ sectionRef }) => {
  return (
    <section
      id="location"
      ref={sectionRef}
      className="py-20 md:py-24 bg-light-gray text-center"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-gray mb-4 relative inline-block">
            Onde Nos Encontrar e Nossa Área de Atendimento
            <span className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-20 h-1 bg-primary-blue rounded-full"></span>
          </h2>
          <p className="text-xl text-text-color max-w-3xl mx-auto mt-4">
            Estamos localizados estrategicamente em Osasco/SP para atender com agilidade e eficiência. Nossa equipe da **TNG Higienização** está pronta para levar a limpeza profissional até você!
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-dark-gray mb-6">Detalhes de Localização</h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-blue rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-gray">Nosso Endereço</h4>
                    <p className="text-text-color">Rua Exemplo, 123 - Centro<br />Osasco - SP, 06000-000</p> {/* ATUALIZE COM SEU ENDEREÇO REAL */}
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-secondary-red rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-gray">Horário de Atendimento</h4>
                    <p className="text-text-color">Segunda a Sexta: 08:00 - 18:00<br />Sábados: 08:00 - 12:00</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-whatsapp-green rounded-lg flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-gray">Área de Atendimento</h4>
                    <p className="text-text-color">Atendemos Osasco, Carapicuíba, Barueri, Cotia, e toda a região metropolitana de São Paulo.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mapa do Google */}
          <div className="bg-white rounded-xl p-4 shadow-lg flex items-center justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117004.81524332462!2d-46.917415124999995!3d-23.551322200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce55a90197d643%3A0x633519b7a421290!2sOsasco%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1719504000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da TNG Higienização em Osasco/SP"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;