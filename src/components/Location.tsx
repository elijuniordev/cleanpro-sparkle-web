import React, { RefObject } from 'react'; // Importe RefObject
import { MapPin } from 'lucide-react'; // Ícone

// Defina a interface de props para o componente Location
interface LocationProps {
  sectionRef: RefObject<HTMLElement>;
}

const Location: React.FC<LocationProps> = ({ sectionRef }) => { // Aceite a prop sectionRef
  return (
    <section
      id="location"
      ref={sectionRef} // ATRIBUIÇÃO DA REF AQUI!
      className="py-20 md:py-24 bg-light-gray text-center" // Ajustado para usar bg-light-gray
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-gray mb-4 relative inline-block"> {/* Ajustado para usar text-dark-gray */}
            Encontre a CleanPro em Osasco/SP e Região
            {/* Linha decorativa abaixo do título */}
            <span className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-20 h-1 bg-primary-blue rounded-full"></span> {/* Ajustado para usar bg-primary-blue */}
          </h2>
          <p className="text-xl text-text-color max-w-3xl mx-auto mt-4"> {/* Ajustado para usar text-text-color */}
            Orgulhosamente atendemos Osasco, Grande São Paulo e todas as regiões vizinhas com nossos serviços especializados de limpeza e higienização.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* MAPA DO GOOGLE REAL - Substitua TODO este bloco pelo seu iframe do Google Maps */}
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-blue-light to-red-100 rounded-xl h-96 flex items-center justify-center shadow-lg overflow-hidden">
                {/* COLAR O CÓDIGO EMBED DO GOOGLE MAPS AQUI ABAIXO */}
                {/* Exemplo (substitua o src pelo seu): */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.4988700000003!2d-46.7725409!3d-23.5501869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce55a90e3fef57%3A0x7d0a6a3b2b4d4b1!2sOsasco%2C%20SP!5e0!3m2!1sen!2sbr!4v1678912345678!5m2!1sen!2sbr"
                  width="100%"
                  height="100%" // Alterado para 100% para preencher o div pai
                  style={{ border: 0 }}
                  allowFullScreen={true} // Ajustado para true booleano
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da CleanPro Limpeza e Higienização em Osasco/SP e Região" // Título para SEO e Acessibilidade
                ></iframe>
                {/* FIM DO CÓDIGO EMBED DO GOOGLE MAPS */}
              </div>
            </div>

            {/* Location Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-dark-gray mb-6">Área de Atendimento</h3> {/* Ajustado para text-dark-gray */}

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-primary-blue rounded-full mt-2 flex-shrink-0"></div> {/* Ajustado para bg-primary-blue */}
                    <div>
                      <h4 className="font-semibold text-dark-gray">Localização Principal</h4> {/* Ajustado para text-dark-gray */}
                      <p className="text-text-color">Rua Exemplo, 123 - Centro<br />Osasco - SP, 06000-000</p> {/* Ajustado para text-text-color, ATUALIZE COM SEU ENDEREÇO REAL */}
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-secondary-red rounded-full mt-2 flex-shrink-0"></div> {/* Ajustado para bg-secondary-red */}
                    <div>
                      <h4 className="font-semibold text-dark-gray">Área de Cobertura</h4> {/* Ajustado para text-dark-gray */}
                      <p className="text-text-color">Toda a Grande São Paulo<br />Incluindo municípios vizinhos</p> {/* Ajustado para text-text-color */}
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-whatsapp-green rounded-full mt-2 flex-shrink-0"></div> {/* Ajustado para bg-whatsapp-green */}
                    <div>
                      <h4 className="font-semibold text-dark-gray">Horário de Atendimento</h4> {/* Ajustado para text-dark-gray */}
                      <p className="text-text-color">Segunda a Sexta: 8h00 - 18h00<br />Sábado: 8h00 - 16h00</p> {/* Ajustado para text-text-color, ATUALIZE SEUS HORÁRIOS REAIS */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;