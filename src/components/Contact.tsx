import React from 'react';
import { Phone, Mail, MessageSquare, Check } from 'lucide-react';

const contactInfo = {
  phone: '(11) 94980-6203',
  phoneHref: 'tel:+5511949806203',
  whatsappHref: 'https://wa.me/5511949806203?text=Olá! Vi o site da TNG Clean e gostaria de um orçamento.',
  email: 'tngclean7@gmail.com',
  emailHref: 'mailto:tngclean7@gmail.com',
};

const Contact: React.FC = () => {
  return (
    // COR ALTERADA: Fundo definido como 'bg-ui-background' (cinza claro).
    <div className="py-20 md:py-24 bg-ui-background text-center">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4 relative inline-block">
            Peça seu Orçamento Gratuito
            <span className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-20 h-1 bg-brand-blue rounded-full"></span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mt-8">
            Pronto para renovar seu ambiente? Fale conosco! Oferecemos um <strong>orçamento rápido e sem compromisso</strong> para Osasco/SP e toda a região.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="space-y-8 text-left">
            <div className="bg-ui-card rounded-xl p-8 shadow-lg h-full">
              <h3 className="text-2xl font-bold text-text-primary mb-6">Por que escolher a TNG Clean?</h3>
              <ul className="space-y-4 text-text-secondary">
                <li className="flex items-start space-x-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span><strong>Resultados Comprovados:</strong> Removemos as manchas e sujeiras mais difíceis, revitalizando seus estofados.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span><strong>Produtos Seguros:</strong> Utilizamos produtos ecológicos, seguros para sua família e animais de estimação.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span><strong>Atendimento Regional:</strong> Com base em Osasco, atendemos toda a região com agilidade e pontualidade.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span><strong>Satisfação Garantida:</strong> Nosso compromisso é com a sua total satisfação. Seu ambiente limpo e renovado.</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center p-8 bg-ui-card rounded-xl shadow-lg h-full">
            <h3 className="text-3xl font-bold text-text-primary mb-4">O caminho mais rápido para a limpeza!</h3>
            <p className="text-lg text-text-secondary mb-8 text-center">
              Clique abaixo para ligar ou enviar uma mensagem.
            </p>
            <div className="space-y-4 w-full max-w-sm">
              <a
                href={contactInfo.whatsappHref}
                className="w-full flex items-center justify-center bg-social-whatsapp text-text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageSquare className="w-6 h-6 mr-3" /> Fale no WhatsApp
              </a>
              <a
                href={contactInfo.phoneHref}
                className="w-full flex items-center justify-center bg-brand-blue text-text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-brand-blue-hover transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-6 h-6 mr-3" /> Ligar Agora
              </a>
               <a
                href={contactInfo.emailHref}
                className="text-text-secondary hover:text-brand-blue transition-colors duration-300 text-sm"
              >
                Ou nos envie um e-mail: {contactInfo.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;