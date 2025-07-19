import React from 'react';
import { MapPin, Clock, Globe } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <div className="py-20 md:py-24 bg-ui-card text-center">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4 relative inline-block">
            Nossa Área de Atendimento
            <span className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-20 h-1 bg-brand-blue rounded-full"></span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mt-8">
            Com base em Osasco, levamos nossos serviços de higienização com máxima agilidade para toda a região oeste. Veja onde atuamos.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-left">
            <div className="bg-ui-background rounded-xl p-8 shadow-lg h-full">
              <h3 className="text-2xl font-bold text-text-primary mb-6">Informações</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-blue rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary">Base em Osasco/SP</h4>
                    <p className="text-text-secondary">Nossa base operacional está em Osasco, permitindo um deslocamento rápido para toda a região.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-red rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary">Horário de Atendimento</h4>
                    <p className="text-text-secondary">Segunda a Sexta: 08:00 - 18:00<br />Sábados: 08:00 - 12:00</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-social-whatsapp rounded-lg flex items-center justify-center">
                    <Globe className="w-6 h-6 text-text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary">Principais Cidades Atendidas</h4>
                    <p className="text-text-secondary">Atendemos com orgulho <strong>Osasco, Barueri, Carapicuíba, Santana de Parnaíba, Cotia, Jandira</strong> e bairros vizinhos.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-ui-card rounded-xl p-4 shadow-lg h-full">
            {/* AQUI ESTÁ A CORREÇÃO FINAL:
              Esta URL foi gerada diretamente pelo Google Maps ("Compartilhar" -> "Incorporar um mapa").
              Ela é pública e não precisa de chave de API para funcionar em desenvolvimento.
            */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117064.18335962453!2d-46.85289914424367!3d-23.53580556627684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5f1f2c974159%3A0x92589e403d6d5a0c!2sOsasco%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1719597987920!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '450px' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Área de Atendimento da TNG Clean Higienização"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;