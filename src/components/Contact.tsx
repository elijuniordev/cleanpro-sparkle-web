import React, { RefObject } from 'react';
import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react'; // Adicione MessageCircle para o WhatsApp

interface ContactProps {
  sectionRef: RefObject<HTMLElement>;
}

const Contact: React.FC<ContactProps> = ({ sectionRef }) => {
  // Não precisamos mais do estado formData nem das funções handleInputChange/handleSubmit
  // const [formData, setFormData] = useState(...);
  // const { toast } = useToast(); // Se o toast era apenas para o formulário, pode removê-lo
  // const handleInputChange = (...);
  // const handleSubmit = (...);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 md:py-24 bg-white text-center"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-gray mb-4 relative inline-block">
            Fale Conosco em Osasco/SP
            <span className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-20 h-1 bg-primary-blue rounded-full"></span>
          </h2>
          <p className="text-xl text-text-color max-w-3xl mx-auto mt-4">
            Pronto para experimentar serviços profissionais de limpeza e higienização? Entre em contato agora mesmo para um **orçamento rápido e sem compromisso**! Atendemos Osasco/SP e toda a região.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"> {/* Ajustado gap e items-start */}
            {/* Informações de Contato Principal (Coluna da Esquerda) */}
            <div className="space-y-8 lg:text-left"> {/* Alinha texto à esquerda em telas maiores */}
              <div className="bg-gradient-to-br from-blue-50 to-red-50 rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-dark-gray mb-6">Entre em Contato Conosco</h3>

                <div className="space-y-6">
                  {/* Telefone */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-blue rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-gray">Telefone</h4>
                      <a href="tel:+5511999999999" className="text-text-color hover:text-primary-blue transition-colors duration-300 text-base md:text-lg">+55 11 99999-9999</a> {/* ATUALIZE COM SEU NÚMERO REAL */}
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-whatsapp-green rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-gray">WhatsApp</h4>
                      <a href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20para%20TNG%20Higieniza%C3%A7%C3%A3o." className="text-text-color hover:text-primary-blue transition-colors duration-300 text-base md:text-lg" target="_blank" rel="noopener noreferrer">+55 11 99999-9999</a> {/* ATUALIZE COM SEU NÚMERO REAL E MENSAGEM */}
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-secondary-red rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-gray">E-mail</h4>
                      <a href="mailto:contato@tnghigienizacao.com.br" className="text-text-color hover:text-primary-blue transition-colors duration-300 text-base md:text-lg">contato@tnghigienizacao.com.br</a> {/* ATUALIZE SEU EMAIL REAL */}
                    </div>
                  </div>

                  {/* Endereço */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-dark-gray rounded-lg flex items-center justify-center flex-shrink-0"> {/* Use dark-gray para o ícone do endereço */}
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-gray">Endereço</h4>
                      <p className="text-text-color text-base md:text-lg">Rua Exemplo, 123 - Centro<br />Osasco - SP, 06000-000</p> {/* ATUALIZE COM SEU ENDEREÇO REAL */}
                    </div>
                  </div>
                </div>
              </div>

              {/* Seção "Por que Escolher a TNG Higienização?" - Mantida aqui ou movida se preferir */}
              <div className="bg-gradient-to-r from-primary-blue to-secondary-red rounded-xl p-8 text-white shadow-lg"> {/* Adicionado shadow-lg */}
                <h3 className="text-2xl font-bold mb-4">Por Que Escolher a TNG Higienização?</h3>
                <ul className="space-y-3 text-base md:text-lg">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                    <span>Equipe profissional e experiente em higienização.</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                    <span>Produtos de limpeza ecológicos e seguros.</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                    <span>Preços competitivos e transparência no serviço.</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                    <span>100% de garantia de satisfação do cliente.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Coluna da Direita - Botão para Orçamento Rápido */}
            <div className="flex flex-col items-center justify-center p-8 bg-light-gray rounded-xl shadow-lg h-full"> {/* Adicionado h-full */}
              <h3 className="text-3xl font-bold text-dark-gray mb-6">Pronto para um Orçamento?</h3>
              <p className="text-xl text-text-color mb-8 text-center">
                Fale diretamente com nossa equipe e receba uma proposta personalizada para sua necessidade!
              </p>
              <div className="space-y-4 w-full max-w-sm">
                <a
                  href="tel:+5511999999999" // ATUALIZE COM SEU TELEFONE REAL
                  className="w-full flex items-center justify-center bg-primary-blue text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-hover-blue transition-all duration-300 transform hover:scale-105"
                >
                  <Phone className="w-6 h-6 mr-3" /> Ligar Agora
                </a>
                <a
                  href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20para%20TNG%20Higieniza%C3%A7%C3%A3o." // ATUALIZE COM SEU NÚMERO REAL E MENSAGEM
                  className="w-full flex items-center justify-center bg-whatsapp-green text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-6 h-6 mr-3" /> Fale no WhatsApp
                </a>
                <p className="text-sm text-text-color mt-4">Atendimento de Segunda a Sábado.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;