import React, { useState, RefObject } from 'react';
import { Phone, MapPin, Mail } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

interface ContactProps {
  sectionRef: RefObject<HTMLElement>;
}

const Contact: React.FC<ContactProps> = ({ sectionRef }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulário enviado:', formData);
    toast({
      title: "Mensagem Enviada!",
      description: "Obrigado por entrar em contato com a CleanPro. Retornaremos em breve!",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

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
            Pronto para experimentar serviços profissionais de limpeza e higienização? Entre em contato hoje mesmo para um orçamento gratuito e deixe seu ambiente impecável! Atendemos Osasco/SP e toda a região.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Informações de Contato */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-50 to-red-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-dark-gray mb-6">Informações de Contato</h3>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-blue rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-gray">Telefone</h4>
                      <a href="tel:+5511999999999" className="text-text-color hover:text-primary-blue transition-colors duration-300 text-base md:text-lg">+55 11 99999-9999</a> {/* ATUALIZE COM SEU NÚMERO REAL */}
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-secondary-red rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-gray">Email</h4>
                      <a href="mailto:contato@cleanpro.com.br" className="text-text-color hover:text-primary-blue transition-colors duration-300 text-base md:text-lg">contato@cleanpro.com.br</a> {/* ATUALIZE COM SEU EMAIL REAL */}
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-whatsapp-green rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-gray">Endereço</h4>
                      <p className="text-text-color text-base md:text-lg">Rua Exemplo, 123 - Centro<br />Osasco - SP, 06000-000</p> {/* ATUALIZE COM SEU ENDEREÇO REAL */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary-blue to-secondary-red rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Por Que Escolher a CleanPro?</h3>
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

            {/* Formulário de Contato */}
            <div className="bg-light-gray rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-dark-gray mb-6">Solicite um Orçamento Gratuito</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-color mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-colors text-text-color"
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-color mb-2">
                      Endereço de E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-colors text-text-color"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-text-color mb-2">
                      Número de Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-colors text-text-color"
                      placeholder="+55 11 99999-9999"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-text-color mb-2">
                      Serviço Desejado
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-colors text-text-color bg-white"
                    >
                      <option value="">Selecione um serviço</option>
                      <option value="estofados">Limpeza de Estofados</option>
                      <option value="colchao">Higienização de Colchão</option>
                      <option value="tapete">Lavagem de Tapetes e Carpetes</option>
                      <option value="automotivo">Higienização Automotiva</option>
                      <option value="residencial">Limpeza Residencial</option>
                      <option value="comercial">Limpeza Comercial</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-color mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-colors resize-none text-text-color"
                    placeholder="Descreva suas necessidades de limpeza..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-blue to-secondary-red text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-hover-blue hover:to-hover-red transition-all duration-300 transform hover:scale-105"
                >
                  Enviar Mensagem & Solicitar Orçamento
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;